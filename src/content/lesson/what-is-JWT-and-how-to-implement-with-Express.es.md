---
title: "Comprendiendo JWT y como implementar un JWT simple con Express"
subtitle: "Qué es un JSON Web Token (JWT), como funciona y como aplicarlo en tu API usando el Microframework Express para el desarrollo de APIs"
cover_local: "../../assets/images/http-0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTTP", "API", "Security", "Authentication","Express","TypeOrm"]
status: "published"

---
Casi todas las API necesitan una capa o layer de autenticación, y hay muchas maneras de abordar ese problema, hoy vamos a implementar el token JWT en nuestra API Express.


## Cómo funciona la autenticación de la API

Puedes dividir un proceso de autenticación estándar en 5 pasos principales:

1. El usuario escribe su nombre de usuario y contraseña en tu sitio web.
2. El nombre de usuario y la contraseña se envían a la API de backend.
3. La API busca cualquier registro en la tabla `User` que coincida con ambos parámetros al mismo tiempo (nombre de usuario y contraseña).
4. Si se encuentra un usuario, genera un `token` para ese usuario y responde `status_code=200` al front-end.
5. El front-end utilizará ese `token` a partir de ahora para realizar cualquier solicitud futura.

![Autentication workflow](https://github.com/breatheco-de/content/blob/master/src/assets/images/authentication-diagram.png?raw=true)

> ☝️ Si no sabes lo que es un token, te recomiendo [esta lectura](https://4geeks.com/es/lesson/token-based-api-authentication-es).

## ¿Qué es JWT?

Hay muchas formas de crear tokens: Basic, Bearer, JWT, etc. Todas ellas son diferentes en su naturaleza, pero el resultado es la misma salida: Un hash (un gran token alfanumérico).

| Tipo de token | Ejemplo                                                           |
| ------------- | ----------------------------------------------------------------------- |
| Token Básico  | ecff2099b95ed507a27a4717ec78965d529cc346                                |
| Token Bearer  | YWxlc2FuY2hlenI6NzE0YmZhNDNlN2MzMTJiZTk5OWQwYWZlYTg5MTQ4ZTc=            |
| Token JWT     | eyJhbGciOiJIUzI1NiIsInR5c.eyJzdWIiOFt2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpM |


> ☝️ Como puedes ver, los Tokens JWT son más grandes que los otros dos tipos de token.

**JSON Web Token o JWT es un estándar abierto para crear tokens**

Este estándar se ha vuelto bastante popular, ya que es muy efectivo tanto para las Web Apps como las APIs de Google, donde después de la autenticación del usuario se hacen peticiones a la API. 

El Token Web JSON es un tipo de token que incluye una estructura, que puede ser descifrada por el servidor, que permite autenticar la identidad del usuario de esa aplicación.

## ¿Por qué usar JWT Token?

En pocas palabras: JWT es una alternativa increíble porque el Token básico o `Basic Token` es demasiado simple y fácil de hackear y el Token Bearer es más difícil de mantener porque tienes que almacenar cada token en la base de datos.

Con los tokens JWT no necesitas una base de datos, el propio token contiene toda la información necesaria.

![Token Bearer  vs. JWT](https://github.com/breatheco-de/content/blob/master/src/assets/images/jwt-vs-bearer-token.png?raw=true)

## Estructura del token JWT

![Estructura de JWT](https://github.com/breatheco-de/content/blob/master/src/assets/images/jwt-token-structure.png?raw=true)

Puedes observar que el string o cadena está dividida en tres secciones separadas por un punto `.` - cada sección tiene su significado:

| Section name   |                                                                      |
| -------------- | -------------------------------------------------------------------- | 
| HEADER         | La primera parte almacena el tipo de token y el algoritmo de encriptación. |
| PAYLOAD        | La segunda parte tiene los datos que identifican al usuario: puede ser su ID, nombre de usuario, etc. |
| SIGNATURE      | Firma digital, que se genera con las dos secciones anteriores, y permite verificar si el contenido ha sido modificado. |

## Implementación de JWT en la API de tu proyecto

### 1) Instalación

Instala estas 3 librerías que se encargarán de generar los tokens JWT:

```bash
npm install express-jwt @types/express-jwt jsonwebtoken @types/jsonwebtoken --save
```

### 2) Login endpoint

El segundo paso es crear una ruta API que pueda ser llamada por el cliente para generar un token (también conocido como login), esta ruta recibirá el `email` y `password` del `body` y buscará cualquier usuario en la base de datos que coincida con esos dos valores.

Si encuentra el valor, generará un token llamando a la función `jwt.sign`.

```js
//esta línea va en tu public_routes.ts
router.post('/token', safe(createToken));

// esta función va en tu actions.ts
import jwt from 'jsonwebtoken'

export const createToken = async (req: Request, res: Response): Promise<Response> =>{
  
 if(!req.body.email) throw new Exception("Please specify an email on your request body", 400)
 if(!req.body.password) throw new Exception("Please specify a password on your request body", 400)

 const userRepo = await getRepository(Users)

 // Necesitamos validar que existe un usuario con este email y contraseña en la BD
 const user = await userRepo.findOne({ where: { email: req.body.email, password: req.body.password }})
 if(!user) throw new Exception("Invalid email or password", 401)

 // esta es la línea más importante en esta función, se crea un token JWT
 const token = jwt.sign({ user }, process.env.JWT_KEY as string);
 
 // devolver al cliente el usuario y el token creado recientemente
 return res.json({ user, token });
}
```

### 3) Validación de peticiones con JWT

Ahora tenemos que añadir un [middleware](https://developer.okta.com/blog/2018/09/13/build-and-understand-express-middleware-through-examples) que buscará el token en el [Encabezado de autorización de la petición](https://blog.restcase.com/restful-api-authentication-basics/). El middleware interceptará cada petición y ejecuta la función `next` para avanzar solo si logra validar el token, en caso contrario retornará un error.

Añade estos dos middlewares dentro de `./src/app.js` que se encargarán de hacer cumplir el token.

```js
// ⬆ todo lo ANTERIOR es público
import jwt, { Options } from 'express-jwt';

let opt: Options = { secret: process.env.JWT_KEY as string, algorithms: ["HS256"] }
app.use(jwt(opt))
// ⬇ todo lo que esté POR DEBAJO es público
app.use(((err: any, req: any, res: any, next: any) => {
 if (err) console.error(err);
 if (err.name === 'UnauthorizedError') {
   return res.status(401).json({ status: err.message });
 }
 next();
}))
```

### ⚠️ Important

Cualquier endpoint que se añada DEBAJO de estos middlewares será privado, por ejemplo:

```js
app.get('/public', (req, res) => {
 res.json({ message: "Anyone can see me" }); 
})

// ⬆ anything ABOVE is public
app.use(jwt(opt)) // ⬅ JWT Middleware
// ⬇ anything BELOW is public

app.get('/private', (req, res) => {
 res.json({ message: "If you can se me, you are logged in" }); 
})
```

### 3) Obtener el usuario autenticado

Hemos terminado, pero si sólo los usuarios registrados pueden llamar a nuestros endpoints privados, entonces necesitamos una forma de saber quién los está llamando, por ejemplo podemos usar `req.user` de ahora en adelante, para identificar al usuario de la petición:

```js
export const getMe = async (req: Request, res: Response): Promise<Response> =>{
 
 const users = await getRepository(Users).find({ where: });
 //                  ⬇ no procedentes de la BD
 return res.json(req.user);
}
```

O podemos utilizar esa información y obtener más información del solicitante de la base de datos.

```js
export const getMe = async (req: Request, res: Response): Promise<Response> =>{


 //                  ⬇ not comming from the BD
 return res.json(req.user);
}
```

## Implementando JWT en tu proyecto Front-End

En el lado del front-end necesitamos dos pasos principales: Crear un nuevo token (también conocido como "login") y añadir el token a los headers cuando se obtenga cualquier otro endpoint privado.

### Crear un nuevo token:

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

¡Eso es todo! Como puedes ver, es muy sencillo integrar JWT en tu aplicación usando Express, solo cuatro pasos en el backend y dos pasos en el frontend. Ante cualquier duda puedes contactarme en Twitter [@alesanchezr](https://twitter.com/alesanchezr) o utilizar el canal `#public-support` en la comunidad Slack de 4Geeks Academy.
