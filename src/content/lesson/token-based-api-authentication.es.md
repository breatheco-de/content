---
title: "Autenticación basada en tokens de acceso para tu API"
subtitle: "Aprende cómo implementar un tokens de acceso que le permitan a los usuarios iniciar y cerrar sesión de tu sitio web y de tu API"
cover_local: "../../assets/images/98208ebb-dcb3-4e40-9ae4-4ec886213f97.jpeg"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["authentication", "security", "backend"]
status: "published"

---

## ¿Por qué implementar tokens de acceso?

<img src="https://github.com/breatheco-de/content/blob/ee21de4299b9e003de7be720280b42ed50056daf/src/assets/images/authentication.png?raw=true" align="right" />

Hay varias formas de crear una capa de autenticación en las aplicaciones web, pero hoy nos vamos a centrar en la Autenticación Basada en Token o Token Based Authentication por varias razones:

- Es fácil de implementar.
- Proporciona un buen nivel de seguridad (según los estándares de la industria).
- Rápido y eficaz.
- Es la más utilizada en la industria a día de hoy.

## ¿Qué es la autenticación de la API?

Autenticación significa ser capaz de identificar quién está haciendo peticiones a tu API; Normalmente implementas una capa de autenticación en tu aplicación porque quieres:

- Que los usuarios puedan iniciar y cerrar sesión.
- Proteger la privacidad: Restringir el acceso a la información en función del rol del usuario. Por ejemplo: Solo yo debería poder actualizar mi correo electrónico y mi contraseña, solo yo debería revisar mi historial médico.
- Limitar los permisos de los usuarios: Restringir el acceso a determinadas funcionalidades, por ejemplo: Que un usuario tenga que pagar para descargarse un libro, o que no pueda comentar en un foro si no inicia sesión, etc.

Para explicar en detalle la "Autenticación de una API basada en tokens" es mejor empezar explicando lo que son los tokens.

## ¿Qué es un token de acceso? 🤔

A grandes rasgos, un token es un "número que prueba algo", por ejemplo: Cuando terminas de hacer una transferencia bancaria, el banco envía un "token" de confirmación que sirve como prueba para validar que la transacción existe y es válida. Ese número de confirmación podría llamarse también **token de confirmación**.

Otros ejemplos cotidianos de tokens:

- Tu número de identificación (token) prueba tu historial de crédito.
- El número de la tarjeta de crédito demuestra que tienes una tarjeta de crédito válida.
- Etc.

### Un token de acceso es más que un número

Los tokens utilizados para la autenticación tienen que ser algo más que números normales, tienen que ser casi imposibles de falsificar, predecir o decodificar.

- No consecutivos: eso los hará muy predecibles, los hackers adivinarán el siguiente.
- Infinitos (casi): ¿Qué ocurrirá si te quedas sin tokens? ¿Te imaginas que MasterCard se quedara sin números de tarjetas de crédito?
- No reutilizables: Hay casos de tokens reutilizables, pero en general, una vez que se genera un token, nadie más que tú debería usarlo
- Validable: El token debe seguir algún patrón oculto (encriptación) que permita validar el token sin comprometer al propietario o al autor.

### Generando tokens

Hay varios tipos de tokens que puedes usar para tu sistema de autenticación como Basic, Bearer, o JWT. La mayoría de ellos utilizan algoritmos de criptografía avanzada que no vamos a tratar en esta lección (puedes ver este [increíble vídeo para aprender más](https://www.youtube.com/watch?v=4zahvcJ9glg)). En su lugar, vamos a hablar de hash.

#### ¿Qué es un hash?

Un hash es un número alfanumérico **único** que se genera a partir de una semilla o **valor** específico, por ejemplo:

*Con Python*

```py
import hash_function

value = "alex"
unique_hash = hash_function(value)
```

Explicación: la función `hash_function` siempre devolverá exactamente el mismo `unique_hash` si se da el mismo valor, echa un vistazo a esta demostración, empieza a escribir en la entrada:


*Con JavaScript*

```javascript
const jwt = require('jsonwebtoken');

const payload = {
    userEmail: 'hola@4geeks.co',
    rol: 'admin'
};

const unique_hash = jwt.sign(payload, 'secret-key', {
    expiresIn: '24h' // Establece el tiempo de expiración a 24 horas
});
```

Explicación: la función `jwt.sign` siempre devolverá el mismo `unique_hash` si se proporciona el mismo valor. Echa un vistazo a esta demostración, empieza a escribir en la entrada:

<!--hide-->
<iframe src="https://full-stack-assets.4geeks.com/live-demos/security/hashing/" height="300" title="Hashing functions example"></iframe>
<!--endhide-->

Nota: Hay varias funciones de hashing populares: MD5, Sha1, Sha256, Sha256, etc. 

#### ¿Qué es lo que hace que las funciones hash sean tan geniales?

Las funciones hashing se han convertido en la mejor forma de generar tokens en el mundo de la seguridad porque

1. Son consistentes: Siempre devuelven la misma salida a la misma entrada dada.
2. Son "imposibles" de revertir: Si un hacker consigue acceder a un token, nunca podrá saber cuál era el valor original.
3. Tienen el mismo tamaño: Por ejemplo, todos los tokens generados con MD5 tendrán 40 caracteres.
4. Son "rápidos": Los hash se basan en matemáticas avanzadas para generar eficientemente los números alfanuméricos.

Nota: Cada dirección de billetera bitcoin tiene un hash único, cada commit que haces en GitHub tiene un hash único, etc.

## Cómo implementar la autenticación en tu API

La forma más sencilla de implementar la autenticación en tu base de datos y en tu API:

1. Crea una tabla/model `User` que represente a cada usuario dentro de tu aplicación.
2. Esa tabla User debe contener el correo electrónico y la contraseña de cada usuario.
3. Crea un endpoint api llamado `POST /token` que genere un token solo si recibe un email y una contraseña que se encuentren en la base de datos.
4. El endpoint `POST /token` devolverá el token al front-end si todo está bien.
5. Luego, en cada uno de los otros endpoints de tu base de datos tendrás que validar si el token existe en el header de la petición y si existe, tendrás que validarlo.

![Autentication workflow](https://github.com/breatheco-de/content/blob/master/src/assets/images/authentication-diagram.png?raw=true)

### Cada token es una sesión

En el momento en que generas el token puedes decidir si quieres que caduque, de la misma manera que las sesiones web caducan cuando te conectas a tu cuenta bancaria online.

Cuando un cliente se autentique con éxito recibirá ese token único y podrá adjuntarlo a los headers de las peticiones que realice a partir de ese momento, ese token será la "sesión del usuario".

Se recomienda guardar ese token en las cookies o `localStorage` de tu aplicación front-end.

```js
let myToken = "aDSA45F$%!sd&sdfSDFSDFytrefERF";
localStorage.setItem("token", myToken);

// Puedes recuperar el token en cualquier momento, en cualquier lugar de tu aplicación utilizando:
let myToken = localStorage.getItem("token");
```

### Cómo adjuntar el token a los headers de la petición:

Si estás haciendo una petición desde el front-end esta será una forma ideal de adjuntar el token a tus *Authorization headers*:

```js
let myToken = localStorage.getItem("token");
fetch('https://myApi.com/path/to/endpoint', {
    method: "POST", // o cualquier otro método
    headers: {
      "Authorization": myToken, // ⬅⬅⬅ authorization header
    },
    body: JSON.stringify(body)
})
    .then(resp => resp.json())
    .then(data => console.log("Success!!", data))
    .catch(error => console.log(error));
```

## Json Web Token para autenticación de APIs

### ¿Qué es JWT?

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

### ¿Por qué usar JWT Token?

En pocas palabras: JWT es una alternativa increíble porque el Token básico o `Basic Token` es demasiado simple y fácil de hackear y el Token Bearer es más difícil de mantener porque tienes que almacenar cada token en la base de datos.

Con los tokens JWT no necesitas una base de datos, el propio token contiene toda la información necesaria.

![Token Bearer  vs. JWT](https://github.com/breatheco-de/content/blob/master/src/assets/images/jwt-vs-bearer-token.png?raw=true)

### Estructura del token JWT

![Estructura de JWT](https://github.com/breatheco-de/content/blob/master/src/assets/images/jwt-token-structure.png?raw=true)

Puedes observar que el string o cadena está dividida en tres secciones separadas por un punto `.` - cada sección tiene su significado:

| Section name   |                                                                      |
| -------------- | -------------------------------------------------------------------- | 
| HEADER         | La primera parte almacena el tipo de token y el algoritmo de encriptación. |
| PAYLOAD        | La segunda parte tiene los datos que identifican al usuario: puede ser su ID, nombre de usuario, etc. |
| SIGNATURE      | Firma digital, que se genera con las dos secciones anteriores, y permite verificar si el contenido ha sido modificado. |

### ¿Cómo funciona la autenticación de la API?

Puedes dividir un proceso de autenticación estándar en 5 pasos principales:

1. El usuario escribe su nombre de usuario y contraseña en tu sitio web.
2. El nombre de usuario y la contraseña se envían a la API de backend.
3. La API busca cualquier registro en la tabla `User` que coincida con ambos parámetros al mismo tiempo (nombre de usuario y contraseña).
4. Si se encuentra un usuario, genera un `token` para ese usuario y responde `status_code=200` al front-end.
5. El front-end utilizará ese `token` a partir de ahora para realizar cualquier solicitud futura.

![Autentication workflow](https://github.com/breatheco-de/content/blob/master/src/assets/images/authentication-diagram.png?raw=true)

### Si estás usando el framework Flask de Python

Recomiendo encarecidamente el uso de [Flask JWT Extended](https://4geeks.com/es/lesson/what-is-JWT-and-how-to-implement-with-Flask-es).

### Si estás utilizando Node Express

Genera tokens con [JSONWebToken](https://4geeks.com/es/lesson/comprendiendo-jwt-y-como-implementar-un-jwt-simple-con-express) en Node. Además, utiliza Express JWT para hacer cumplir los endpoints privados en Express.
