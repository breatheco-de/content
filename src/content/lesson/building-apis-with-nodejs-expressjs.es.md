---
title: "Construyendo APIs REST utilizando Expressjs"
subtitle: "Expressjs permite construir API REST de una forma rápida, minimalista y flexible"
cover_local: "../../assets/images/node-expressjs.png"
textColor: "white"
date: "2021-04-17T16:36:31+00:00"
status: "published"
tags: ["Expressjs","nodejs","REST","API"]

---

Si no sabes qué es una API REST, recomiendo [leer sobre esto aquí](./understanding-rest-apis).

A modo de breve resumen, construir una API de forma REST significa que tienes que construir sus endpoints de URL agrupados por **"recursos"**. Un recurso es algo que quieres gestionar, por ejemplo: un estudiante, un usuario, un auto, etc. Un recurso es algo similar a una tabla de base de datos, pero los llamamos "recursos" debido a algunas excepciones.

Aquí hay un ejemplo de endpoints RESTful API para gestionar **Estudiantes**:

| Método | URL | Descripción |
| ------ | --- | ----------- |
| GET    | /estudiante | Debería devolver todos los estudiantes |
| GET    | /estudiante/1 | Debería devolver un solo estudiante con el id=1 |
| GET    | /cohort/1/estudiantes | Debería devolver todos los estudiantes de la clase con el id=1 |
| POST   | /estudiante | Debería crear un nuevo estudiante |
| PUT    | /estudiante/1 | Debería actualizar la información del estudiante con el id=1 |
| DELETE | /estudiante/1 | Debería eliminar al estudiante con el id=1 |

Echa un vistazo a las URL, ellas siguen un patrón. Después de un tiempo, los endpoints hablarán por sí mismos, tendrán sentido y podrás adivinar a lo que hacen o incluso adivinar algunos endpoints. Esa es la idea.

> :point_up: Puede leer más sobre las API REST en [esta lección de BreatheCode](./understanding-rest-apis).<br /> Aquí hay un video de 8 minutos que explica REST: https://www.youtube.com/watch?v=7YcW25PHnAA

## Ahora hablemos sobre Expressjs

Expressjs es la librería que nos permite construir un servidor web API de una forma rápida, minimalista y flexible utilizando nodejs.  El primer paso para utilizarla es realizando la instalación en tu proyecto, para esto en tu terminal debes ejecutar:

```
$ npm install express --save
```

Una vez finalizada la instalación crearemos un archivo server.js en donde agregaremos las siguientes líneas.  El computador comenzará a escuchar las solicitudes HTTP:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Hello World!")
})


app.listen(4000, function(){
    console.log('API en ejecución en el puerto 4000');
})
```
[Haz clic para probar este código en vivo.](https://replit.com/@ManuelOrtega3/Expressjs-Hello-World)


## Expressjs Hello-Wold explicado

```javascript
const express = require('express'); #aquí importamos la librería Expressjs en nuestro archivo.
const app = express(); #aquí creamos una nueva instancia del servidor Expressjs.

app.get('/', (req, res)=>{  #aquí definimos el primer path de la API: GET /
    res.send("Hello World!")  #expressjs devolverá "Hello World, esto podría ser un string HTML o un string JSON.
})


app.listen(4000, function(){  #finalmente iniciamos el servidor en el localhost.
    console.log('API en ejecución en el puerto 4000');
})
```
En Expressjs podemos agregar nuevos endpoints utilizando la variable `app` que es la instancia que definimos de expressjs y agregando el método http donde se encontrará disponible nuestro endpoint `app.get('/', (req, res)=>{}`, como puedes ver tendremos una función de devolución de llamada que recibirá 2 parámetros `req, res`.   El detalle de estos parámetros es el siguiente:

- req : Es un objeto que representa la solicitud HTTP y nos entrega información del request como el body, query params, HTTP headers.

- res : Es un objeto que representa la respuesta HTTP que envía la aplicación Express cuando recibe una solicitud HTTP

En el siguiente link puedes acceder a la documentación de (Expressjs)[http://expressjs.com/es/api.html]

## Agregando nuevos endpoints

Si deseas agregar otro endpoint a tu API que se ejecute cuando un cliente haga el `GET/person`, tendrás que agregar otro bloque de código como este:

```javascript
app.get('/', (req, res)=>{  #aquí definimos el primer path de la API: GET /
    res.send("Hello World!")  #expressjs devolverá "Hello World, esto podría ser un string HTML o un string JSON.
})
```

## Especificando el método: GET, PUT, POST, DELETE

Si deseas que tu endpoint responda a POST, PUT o DELETE, puedes especificarlo de la siguiente manera:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res)=>{  #aquí definimos el primer path de la API: GET /
    res.send("Se recibió un GET")
})

app.post('/', (req, res)=>{  #aquí definimos el primer path de la API: POST /
    res.send("Se recibió un POST")
})

app.listen(4000, function(){  #finalmente iniciamos el servidor en el localhost.
    console.log('API en ejecución en el puerto 4000');
})
```

## Respondiendo un cuerpo JSON

La respuesta puede ser básicamente lo que quieras siempre que sea un string: HTML, JSON, CSS, imágenes, etc. Solo asegúrate de convertir en string lo que quieras responder.

En el siguiente ejemplo, estamos utilizando el método JSON.stringify para convertir un objeto llamado `person1` en en un string JSON antes de devolverlo al cliente.

```javascript
const express = require('express');
app.get('/person', (req, res)=>{
    const person1 = {
        "name": "Bob"
    }
    res.status(200).json(person1);
})
```

## El código de respuesta

El código de respuesta es 200 por defecto, y 500 si hay un error desconocido. Si deseas responder al cliente con un código diferente, deberás especificarlo así:

```javascript
const express = require('express');
app.get('/person', (req, res)=>{
    const contenido = {
      "detalles": "Hubo un error en la solicitud"
    }
    res.status(400).json(contenido); # aquí cambiamos el código de estado a 400 (código muy común en caso de errores de solicitud)
})
```

## Manejo de errores y validaciones

Pero ¿y si la solicitud viene con errores? Por ejemplo: si tenemos un endpoint para crear una persona y debemos especificar el `first_name` y el `last_name`, pero solo se encontró el `first_name` en la solicitud, así es como lo validaríamos:


```javascript
const express = require('express');

app.use(express.json()) // Permite parsear el contenido en un tipo application/json
app.use(express.urlencoded({ extended: true })) // Permite parsear el contenido en un tipo application/x-www-form-urlencoded


app.post('/person', (req, res) => {
    const { body } = req; 
    
    if (!body) {
        return res.status(400).json({ message: "The request body is null" });
    }

    if (!body.hasOwnProperty('first_name')) {
        return res.status(400).json({ message: "The request first_name is null" });
    }

    if (!body.hasOwnProperty('last_name')) {
        return res.status(400).json({ message: "The request last_name is null" });
    }

    return res.status(400).json(body);
})
```
La librería `express-validator` nos entrega una forma más cómoda para el manejo de las validaciones, pueden obtener más información de como usarla visitando su documentación  [https://express-validator](https://express-validator.github.io/docs/) 


## Middlewares

Un middleware es una función que tiene acceso al objeto de solicitud o request, al objeto de respuesta o response y a la siguiente función de middleware a ejecutarse en el ciclo de solictud/respuesta.  Una vez que nuestro middleware termine su ejecución es importante ejecutar la función `next()` o la solicitud quedara colgada.

A continuación un ejemplo de un middleware que imprimirá por consola la fecha y hora en la que ocurren las consultas a la API

```javascript
const express = require('express');

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();  // aquí invoca al siguiente middleware
});

```

## ¿Listo para empezar a codificar?

Hemos preparado este ejemplo de codificación en vivo que puede ejecutar tu mismo en Gitpod y utilizarlo como base para su proyecto.

Expressjs Rest Hello: [https://github.com/4GeeksAcademy/expressjs-rest-hello](https://github.com/4GeeksAcademy/expressjs-rest-hello)
