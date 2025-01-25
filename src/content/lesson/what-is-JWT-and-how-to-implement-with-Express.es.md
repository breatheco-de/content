---
title: Comprendiendo JWT y como implementar un JWT simple con Express
tags:
  - HTTP
  - API
  - Security
  - Authentication
  - Express
  - TypeOrm
description: >-
  Learn how to implement JWT for secure API authentication with Express. Master
  JSON Web Tokens and enhance your app's security! Discover more now!
---
En el mundo del desarrollo web moderno, la autenticación y autorización de usuarios son aspectos cruciales para proteger las APIs y los datos sensibles. [El acceso basado en tokens](https://4geeks.com/es/lesson/ques-es-token-de-acceso-para-api) en una de las estrategias mas usadas, de entre ellas destacan los JSON Web Tokens (JWT), un estándar abierto y ligero que define un mecanismo compacto y autosuficiente para la transmisión segura de información entre partes como cliente y servidor.

### ¿Qué son los JWT?

Un JWT es un token que contiene información sobre la identidad de un usuario y la autorización para acceder a recursos específicos. Se compone de tres partes:

> ☝️ Si no sabes lo que es un token, te recomiendo [esta lectura](https://4geeks.com/es/lesson/token-based-api-authentication-es).

**Encabezado (Header):** Especifica el tipo de token, el algoritmo de firma y otra información relevante.

**Carga útil (Payload):** Contiene los datos sobre el usuario, como la identificación, nombre, roles y fecha de expiración del token.

**Firma:** Garantiza la integridad y autenticidad del token mediante una firma digital utilizando un algoritmo criptográfico y una clave secreta compartida entre el servidor y el cliente.

### ¿Cómo funciona JWT en la autenticación de APIs?

El esquema a implementar en este caso puede resumirse en la siguiente imagen

![Autentication workflow](https://github.com/breatheco-de/content/blob/master/src/assets/images/authentication-diagram.png?raw=true)

1. Inicio de sesión: El usuario ingresa sus credenciales (correo electrónico y contraseña) en el cliente.

2. Autenticación: El servidor valida las credenciales del usuario y, si son correctas, genera un JWT con la información del usuario y lo firma con su clave secreta.

3. Envío del token: El servidor envía el JWT al cliente como respuesta a la solicitud de inicio de sesión.

4. Almacenamiento del token: El cliente almacena el JWT de forma segura, generalmente en el almacenamiento local o en una cookie HTTP.

5. Solicitudes posteriores: En cada solicitud posterior a la API, el cliente incluye el JWT en el encabezado de autorización.

6. Validación del token: El servidor verifica la firma del JWT para asegurar su autenticidad e integridad. Si el token es válido, extrae la información del usuario de la carga útil y la utiliza para autorizar el acceso al recurso solicitado.

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

¡Eso es todo! Como puedes ver, es muy sencillo integrar JWT en tu aplicación usando Express, solo cuatro pasos en el backend y dos pasos en el frontend. Ante cualquier duda puedes contactarme en Twitter [@alesanchezr](https://twitter.com/alesanchezr) o utilizar el canal `#public-support` en la comunidad Slack de 4Geeks Academy.
