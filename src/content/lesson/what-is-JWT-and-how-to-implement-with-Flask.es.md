---
title: "Comprendiendo JWT y como implementar un JWT simple con Flask"
subtitle: "Qué es un JSON Web Token (JWT), como funciona y como aplicarlo en tu API usando el Microframework Flask para el desarrollo de APIs"
cover_local: "../../assets/images/http-0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTTP", "API", "Security", "Authentication"]
status: "published"

---

JWT es solo una de las maneras en las que puedes implementar seguridad y autenticación, especificamente [tokens de acceso](https://4geeks.com/es/lesson/ques-es-token-de-acceso-para-api) en tu API.

Es un estándar abierto para crear tokens que se utilizan en la autenticación y autorización de aplicaciones web y APIs. JWT es un tipo de token que incluye una estructura que puede ser descifrada por el servidor y permite autenticar la identidad del usuario de una aplicación.

A diferencia de otros tipos de tokens, como los básicos o los Bearer, los tokens JWT son más grandes y contienen toda la información necesaria sin necesidad de una base de datos externa.

### Estructura del token JWT

Un token JWT consta de tres partes separadas por puntos:

- HEADER: Almacena el tipo de token y el algoritmo de encriptación.

- PAYLOAD: Contiene datos que identifican al usuario, como su ID o nombre de usuario.

- SIGNATURE: Firma digital generada con las dos secciones anteriores para verificar si el contenido ha sido modificado.

### Implementación en Flask:

Para usar JWT en una API Flask, puedes seguir estos pasos:

- Incluye la librería JWT en la configuración de tu aplicación Flask.

- Crea un endpoint para generar nuevos tokens.

- Usa el decorador @jwt_required() en rutas privadas.

## Implementación de JWT en la API de tu proyecto

Recomendamos firmemente el uso de [la librería JWT extended](https://github.com/vimalloc/flask-jwt-extended) para implementar la autenticación JWT en tu API de Python Flask, el proceso se puede dividir en los siguientes pasos:

### 1) Incluir la librería JWT en la configuración de tu aplicación Flask

```py
from flask_jwt_extended import JWTManager

# Ya debes tener esta línea en tu proyecto, no tienes que añadirla de nuevo
app = Flask(__name__)

# Configura la extensión Flask-JWT-Extended
app.config["JWT_SECRET_KEY"] = "super-secret"  # ¡Cambia las palabras "super-secret" por otra cosa!
jwt = JWTManager(app)
```

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

# Crea una ruta para autenticar a los usuarios y devolver el token JWT
# La función create_access_token() se utiliza para generar el JWT
@app.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    # Consulta la base de datos por el nombre de usuario y la contraseña
    user = User.query.filter_by(username=username, password=password).first()

    if user is None:
        # el usuario no se encontró en la base de datos
        return jsonify({"msg": "Bad username or password"}), 401
    
    # Crea un nuevo token con el id de usuario dentro
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })
```

### 3) Usar el decorador `@jwt_required()` en rutas privadas

Ahora... cualquier endpoint que requiera autorización (endpoints privados) debería usar el decorador `@jwt_required()`.

Podrás recuperar la información del usuario autentificado (si es válido) usando la función `get_jwt_identity`.

```py
from flask_jwt_extended import jwt_required, get_jwt_identity

# Protege una ruta con jwt_required, bloquea las peticiones sin un JWT válido
@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Accede a la identidad del usuario actual con get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id, "username": user.username }), 200
```

## Implementando JWT en tu proyecto Front-End

En el lado del front-end necesitamos dos pasos principales: Crear un nuevo token (también conocido como "login") y añadir el token a los headers cuando se obtenga cualquier otro endpoint privado.

### Crear un nuevo token

Basándonos en los endpoints que construimos anteriormente, tenemos que hacer `POST /token` con la información del nombre de usuario y la contraseña en el body de la petición.

```js
const login = async (username, password) => {
     const resp = await fetch(`https://your_api.com/token`, { 
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }) 
     })

     if(!resp.ok) throw Error("There was a problem in the login request")

     if(resp.status === 401){
          throw("Invalid credentials")
     }
     else if(resp.status === 400){
          throw ("Invalid email or password format")
     }
     const data = await resp.json()
     // Guarda el token en la localStorage
     // También deberías almacenar el usuario en la store utilizando la función setItem
     localStorage.setItem("jwt-token", data.token);

     return data
}
```

### Obteniendo cualquier información privada

Supongamos que estoy usando la aplicación de front-end y acabo de iniciar sesión, pero ahora quiero obtener algún endpoint privado o protegido:

```js
// Asumiendo que "/protected" es un endpoint privado
const getMyTasks = async () => {
     // Recupera el token desde la localStorage
     const token = localStorage.getItem('jwt-token');

     const resp = await fetch(`https://your_api.com/protected`, {
        method: 'GET',
        headers: { 
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
        } 
     });

     if(!resp.ok) {
          throw Error("There was a problem in the login request")
     } else if(resp.status === 403) {
          throw Error("Missing or invalid token");
     } else {
         throw Error("Unknown error");
     }

     const data = await resp.json();
     console.log("This is the data you requested", data);
     return data
}
```

¡Eso es todo! Como puedes ver, es muy sencillo integrar JWT en tu aplicación usando Flask/Python, solo tres pasos en el backend y dos pasos en el frontend. Ante cualquier duda puedes contactarme en Twitter [@alesanchezr](https://twitter.com/alesanchezr) o utilizar el canal `#public-support` en la comunidad Slack de 4Geeks Academy.
