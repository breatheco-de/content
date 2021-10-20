---
title: "Comprendiendo JWT y como implementar un JWT simple con Flask"
subtitle: "Qué es un JSON Web Token (JWT), como funciona y como aplicarlo en tu API usando el Microframework Flask para el desarrollo de APIs"
cover_local: "../../assets/images/http-0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTTP", "API", "Security", "Authentication"]
status: "published"

---
Casi todas las [API necesitan una capa o layer de autenticación](/lesson/token-based-api-authentication), y hay muchas maneras de abordar ese problema, hoy vamos a implementar el token JWT en nuestra API Flask.


## Cómo funciona la autenticación de la API

Puedes dividir un proceso de autenticación estándar en 5 pasos principales:

1. El usuario escribe su nombre de usuario y contraseña en tu sitio web.
2. El nombre de usuario y la contraseña se envían a la API de backend.
3. La API busca cualquier registro en la tabla `User` que coincida con ambos parámetros al mismo tiempo (nombre de usuario y contraseña).
4. Si se encuentra un usuario, genera un `token` para ese usuario y responde status_code=200 al front-end.
5. El front-end utilizará ese `token` a partir de ahora para realizar cualquier solicitud futura.

![Autentication workflow](../../assets/images/authentication-diagram.png)

[[info]]
| :point_up: i no sabes lo que es un token, te recomiendo [esta lectura](/lesson/token-based-api-authentication).

## ¿Qué es JWT?

Hay muchas formas de crear tokens: Basic, Bearer, JWT, etc. Todas ellas son diferentes en su naturaleza, pero el resultado es la misma salida: Un hash (un gran token alfanumérico).

| Tipo de token | Ejemplo                                                           |
| ------------- | ----------------------------------------------------------------------- |
| Token Básico   | ecff2099b95ed507a27a4717ec78965d529cc346                                |
|  Token Bearer | YWxlc2FuY2hlenI6NzE0YmZhNDNlN2MzMTJiZTk5OWQwYWZlYTg5MTQ4ZTc=            |
|  Token JWT    | eyJhbGciOiJIUzI1NiIsInR5c.eyJzdWIiOFt2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpM |


[[info]]
| :point_up: Como puedes ver, los Tokens JWT son más grandes que los otros dos tipos de token.

**JSON Web Token o JWT es un estándar abierto para crear tokens**

Este estándar se ha vuelto bastante popular ya que es muy efectivo tanto para las Web Apps como las APIs de Google, donde después de la autenticación del usuario se hacen peticiones a la API. 

El Token Web JSON es un tipo de token que incluye una estructura, que puede ser descifrada por el servidor que permite autenticar la identidad del usuario de esa aplicación.

## ¿Por qué usar JWT Token?

En pocas palabras: JWT es una alternativa increíble porque el `Token básico`o `Basic Token` es demasiado simple y fácil de hackear y el Token Bearer es más difícil de mantener porque tienes que almacenar cada token en la base de datos.

Con los tokens JWT no necesitas una base de datos, el propio token contiene toda la información necesaria.

![Autentication workflow](../../assets/images/jwt-vs-bearer-token.png)

## Estructura del token JWT

![Autentication workflow](../../assets/images/jwt-token-structure.png)

Puedes observar que el string o cadena está dividida en tres secciones separadas por un (.). Cada sección tiene su significado:
| Section name   |                                                                      |
| -------------- | -------------------------------------------------------------------- | 
| HEADER         | La primera parte almacena el tipo de token y el algoritmo de encriptación. |
| PAYLOAD        | La segunda parte tiene los datos que identifican al usuario: puede ser su ID, nombre de usuario, etc. |
| SIGNATURE      | Firma digital, que se genera con las dos secciones anteriores, y permite verificar si el contenido ha sido modificado. |

## Implementación de JWT en la API de tu proyecto

Recomendamos encarecidamente el uso de [la librería JWT extendida](https://github.com/vimalloc/flask-jwt-extended) para implementar la autenticación JWT en tu API de Python Flask, el proceso se puede dividir en los siguientes pasos:

### 1) Incluir la librería JWT en la configuración de tu aplicación Flask

``py
from flask_jwt_extended import JWTManager

# ya debes tener esta línea en tu proyecto
# no tienes que añadirla de nuevo
app = Flask(__name__)

# Configura la extensión Flask-JWT-Extended
app.config["JWT_SECRET_KEY"] = "super-secret" # ¡Cambia las palabras "super-secret" por otra cosa!
jwt = JWTManager(app)
``

### 2) Crear un endpoint para generar nuevos tokens

El endpoint debe ser un POST porque estás creando tokens (POST es para crear).

```bash
POST /token
Content-type: application/json
Body:
{
     "username": "alesanchezr",
     "password": "12341234"
}
```
Así es como podría verse el endpoint en Python:

```py
from flask_jwt_extended import create_access_token
# Crea una ruta para autenticar a los usuarios y devolver el token JWT.
# La función create_access_token() se utiliza para generar el JWT.
@app.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    # Consulta la base de datos por el nombre de usuario y la contraseña
    user = User.filter.query(username=username, password=password).first()
    si el User es None:
          # el usuario no se encontró en la base de datos
        return jsonify({"msg": "Bad username or password"}), 401
    
    # crea un nuevo token con el id de usuario dentro
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })
   
   ```
### 3) Usar el decorador `@jwt_required()` en rutas privadas

Ahora... cualquier endpoint que requiera autorización (endpoints privados) debería usar el decorador `@jwt_required()`.

Podrás recuperar la información del usuario autentificada (si es válida) usando la función `get_jwt_identity`.

```py
from flask_jwt_extended import jwt_required, get_jwt_identity
# Protege una ruta con jwt_required, bloquea las peticiones
# sin un JWT válido presente.
@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.filter.get(current_user_id)
    
    return jsonify({"id": user.id, "username": user.username }), 200
```
## Implementando JWT en tu proyecto Front-End

En el lado del front-end necesitamos dos pasos principales: Crear un nuevo token (también conocido como "login") y añadir el token a los headers cuando se obtenga cualquier otro endpoint privado.

### Crear un nuevo token:

Basándonos en los endpoints que construimos anteriormente tenemos que `POST /token` con la información del nombre de usuario o username y la contraseña o password en el body de la petición.

```js
const login = async (username, password) => {
     const resp = await fetch(`https://your_api.com/token`, { 
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: "joe", password: "1234" }) 
     })

     if(!resp.ok) throw Error("There was a problem in the login request")

     if(resp.status === 401){
          throw("Invalid credentials")
     }
     else if(resp.status === 400){
          throw ("Invalid email or password format")
     }
     const data = await resp.json()
     // save your token in the localStorage
    //also you should set your user into the store using the setStore function
     localStorage.setItem("jwt-token", data.token);

     return data
}
```

### Obteniendo cualquier información privada

Supongamos que estoy usando la aplicación de front-end y acabo de iniciar sesión, pero ahora quiero obtener algún endpoint privado o protegido:

```js
// asumiendo que "/protected" es un endpoint privado
const getMyTasks = await (username, password) => {
     // retrieve token form localStorage
     const token = localStorage.getItem('jwt-token');

     const resp = await fetch(`https://your_api.com/protected`, {
        method: 'GET',
        headers: { 
          "Content-Type": "application/json"
          'Authorization': 'Bearer '+token // ⬅⬅⬅ authorization token
        } 
     })
     if(!resp.ok) throw Error("There was a problem in the login request")

     else if(resp.status === 403){
         throw Error("Missing or invalid token");
     }
     else{
         throw Error('Uknon error');
     }

     const data = await resp.json();
     console.log("This is the data you requested", data);
     return data

}
```

¡Eso es todo! Como puedes ver es muy sencillo integrar JWT en tu aplicación usando Flask/Python, sólo tres pasos en el backend y dos pasos en el front-ent. Ante cualquier duda puedes contactarme en twitter [@alesanchezr](https://4geeksacademy.com) o utilizar el canal #public-support en la comunidad Slack de 4Geeks Academy.
