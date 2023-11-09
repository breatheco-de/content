---
slug: "the-fetch-javascript-api-es"
title: "La API con Fetch"
subtitle: "¿Has oído hablar de Fetch? En esta lección, aprenderás cómo solicitar información de otras API y utilizar esos datos con la tecnología más utilizada para ese propósito."
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
authors: ["Guensie"]
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["fetch","ajax","http"]
status: "published"

---

### Un vistazo rápido a la Fetch API

Piensa en un **fetch** como una simple promesa de JavaScript. Tú das una **solicitud** y recibes una **respuesta**. Fetch API nos brinda el método `fetch()`, que nos permite acceder a esas solicitudes y respuestas, utilizando JavaScript.

Veamos cómo se ve una solicitud **fetch** sencilla:

```javascript
fetch('examples/example.json')
    .then(response => {
        // Aquí es donde pones lo que quieres hacer con la respuesta
    })
    .catch(error => {
        console.log('Oh No! There was a problem: \n', error);
    });
```

**¿Qué está sucediendo aquí?**

 1. Pasamos la ruta que queremos **fetch** ('examples/examples.json') como parámetro.
 2. La llamada devuelve una "**promesa**" que eventualmente se convierte en la respuesta. Ten en cuenta que una "**promesa**" no es la respuesta real. Piensa en ello como un proxy de la respuesta.
 3. Una vez que se recibe la respuesta, se pasa a `.then` para su uso.
 4. Si hay un error al completar la solicitud, por ejemplo, si no hay conexión de red, se pasa el error apropiado como parámetro a `.catch`. Ten en cuenta que un 404 (una mala respuesta) sigue siendo una ***respuesta*** y, por lo tanto, no se considerará una respuesta incompleta. Como resultado, en el ejemplo anterior, no entraría automáticamente en el `.catch`.

**¿Cómo comprobamos una respuesta exitosa?**

Dado que la promesa solo rechazaría una solicitud si no pudo completarla, debemos verificar si una respuesta es buena y validarla para arrojar un error si no está bien.

Una respuesta genérica de un servidor se vería parecido a esto en la consola:

```javascript
[object Response] {
	body: (...)
	bodyUsed: false
	headers: Headers {}
	ok: true
	redirected: false
	status: 200
	statusText: "OK"
	type: "cors"
	url: "https://assets.breatheco.de/apis/fake/todos/user/Gmihov"
}	
```

Para evaluar el estado de una respuesta puedes utilizar:

+ ***response.ok*** - comprueba el estado en los 200s y devuelve un valor booleano.
+ ***response.status*** - devuelve un entero con el código de estado de respuesta. El valor predeterminado es 200.
+ ***response.statusText*** - devuelve un string cuyo valor predeterminado es "OK" o algún mensaje de error relevante.

**¿Cómo actualizaría el ejemplo anterior para validar las respuestas?**

```javascript
fetch('examples/example.json')
    .then(response => {
	    if (!response.ok) {
	    throw new Error(response.statusText);
		}
		// Aquí es donde pones lo que quieres hacer con la respuesta
	})
	.catch(error => {
		console.log('Looks like there was a problem: \n', error);
	});
```

**¿Ahora qué está pasando?**

1) Todavía estamos pasando la ruta ('examples/example.json') como parámetro.
2) El **fetch** devuelve una **promesa** que eventualmente se convierte en la respuesta.
3) Luego, la respuesta se pasa a `.then` para que se use de la manera que se especificó.
4) Tenemos una instrucción "if" que básicamente dice que si **response.ok** no es verdadero, emita un error con **response.statusText**, que luego activará `.catch`.

**¿Por qué necesitamos esto?**

Para evitar que malas respuestas entren a nuestro código y rompan tu aplicación más adelante.

Necesitamos lanzar este error manualmente porque, como se explicó anteriormente, los mensajes de error recibidos dentro de una respuesta del servidor no se registran automáticamente como un error y no aparecen en el método `.catch`.

El resultado será que la búsqueda no entregará nada y, sin embargo, el cliente no tendrá idea de que algo salió mal.
 
**¿Ahora qué?**

Ahora necesitamos "leer" la respuesta para acceder al cuerpo de la respuesta.

Como ya sabe, los únicos datos que pueden viajar a través de una conexión HTTP están en un formato plano de texto. Por lo tanto, necesitamos convertir el texto sin formato del cuerpo de la respuesta en un formato JavaScript significativo.

Afortunadamente, hay un método para eso: `.json()`; el cual aplicaremos a la respuesta de este modo: `response.json()`.

```javascript
fetch('examples/example.json')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        // Lee la respuesta como JSON
        return response.json();
    })
    .then(responseAsJson => {
        // Haz lo que quieras con la respuesta JSONificada
        console.log(responseAsJson);
    })
    .catch(error => {
        console.log('Looks like there was a problem: \n', error);
    });
```

**¿Ahora qué está pasando?**

Sencillo. Piénsalo en pasos separados.

1. Busca el recurso en la ruta dada. (**Fetch** obtiene la ruta al recurso y devuelve una **promesa** que se resolverá en un objeto de respuesta.)  

2. Luego valida la respuesta. (Esto comprueba si la respuesta es válida (200s). Si no, salta al paso 5).

3. Lee la respuesta como JSON.

4. Registrar el resultado. (El resultado son los datos JSON recibidos.)

5. Atrapa algún error si lo hubiese.

**Ahora que has visto lo básico, podemos realizar solicitudes más avanzadas.**

El método de solicitud por defecto es el método "GET"; que es lo que hemos visto hasta ahora. 

### Los métodos más utilizados y lo que representan son:

- **GET**: Leer/Recuperar.
- **PUT**: Editar/Actualizar.
- **POST**: Crear.
- **DELETE**: Lo has adivinado, esto simplemente significa Eliminar. 

Aquí hay un ejemplo de un método POST que está creando un nuevo usuario:

```javascript
fetch('https://example.com/users.json', {
  method: 'POST',
  mode: 'cors',
  redirect: 'follow',
  headers: new Headers({
    'Content-Type': 'text/plain'
  })
})
  .then(res => res.json())
  .then(response => { /* manejar la respuesta */ })
  .catch(error => console.error(error));
``` 

> Nota: ten en cuenta que este ejemplo de *fetch* está haciendo un POST (enviando datos al servidor) en un formato plano de texto. En el desarrollo front-end moderno, esto es menos común. El tipo de contenido más común para nuestros métodos será el formato `application/json`, como se ve en el siguiente ejemplo:

```js
fetch('https://example.com/users', {
  method: 'PUT', // or 'POST'
  body: JSON.stringify(data), // la variable data puede ser un 'string' o un {objeto} que proviene de algún lugar más arriba en nuestra aplicación
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  })
  .then(response => console.log('Success:', response))
  .catch(error => console.error(error));
```

> ☝ ¿Notaste algo nuevo arriba?

El "body" o cuerpo de nuestra solicitud es donde colocamos los datos que queremos enviar al servidor para su almacenamiento permanente, con nuestras solicitudes POST o PUT. Debido a que solo podemos enviar texto plano a través de HTTP, tenemos que convertir nuestros datos desde su formato JS original a un string. Hacemos eso con el método `JSON.stringify()`.

Las solicitudes con el método GET o DELETE no requieren un cuerpo, ya que normalmente no se espera que envíen datos, sin embargo, también *puedes* incluir un cuerpo en esas solicitudes si es necesario.

Los **headers HTTP** o encabezados nos permiten realizar acciones adicionales en la solicitud y la respuesta. Puedes establecer *headers* de solicitud como se ve arriba.

Uno de los *headers* más comunes necesarios es el 'Content-Type'. Señala al destinatario de la solicitud (el servidor), cómo debe tratar los datos contenidos en el cuerpo de la solicitud. Debido a que la mayoría de las veces enviamos datos en algún formato de JavaScript que luego es ***stringified*** (transformado a string), necesitamos instruir al servidor para que convierta el string que recibe de nuevo a un formato JSON, como se ve en la línea 5 del ejemplo anterior.

Los encabezados se pueden enviar en una solicitud y recibir en una respuesta.

Por lo tanto, puedes usar los encabezados de la respuesta que recibes del servidor, para verificar el tipo de contenido de su cuerpo y asegurarte de recibir el formato correcto antes de seguir adelante en el proceso. Un ejemplo de esto sería:

```js
fetch('https://example.com/users')
  .then(response => {
    let contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Sorry, There's no JSON here!");
  })
  .then(jsonifiedResponse => { /* haz lo que quieras con la respuesta jsonificada */ })
  .catch(error => console.log(error));
```

> Nota: Ten en cuenta que un nombre de encabezado HTTP no válido generará un `TypeError`. Se puede encontrar una lista de encabezados válidos [aquí](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

### Ahora utilicemos fetch() con Async / Await

Javascript nos brinda una forma alternativa de realizar las peticiones HTTP utilizando `fetch()` con Async / Await

- `async` hace que una función devuelva una Promesa
- `await` hace que una función espere una Promesa

#### Método GET

Comencemos con el método GET y lo analizamos

```javascript
const getData = async () => {
    const response = await fetch('https://example.com/users');
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        /* Realiaza el tratamiento del error que devolvió el request HTTP */
        return {error: {status: response.status, statusText: response.statusText}};
    };
};
```

Recordemos que GET es el método por default. Por ello no es obligatorio escribir el segundo parámetro del `fetch()`  

**Analicemos esta función**

1. Definimos una arrow function, y la denominamos con un nombre significativo, en este ejemplo getData
2. Determinamos que esa función flecha será asíncrona `async` porque es una petición HTTP y su respuesta no es inmediata
3. A continuación, definimos una constante `response` que esperará `await` la respuesta del `fetch()`. En esa constante almacenamos la respuesta de la petición.
4. Luego evalúamos la respuesta. (Esto comprueba si la respuesta es válida (200). Si no, salta al paso 6.
5. Si la respuesta es válida, en la constante `data` guardaremos los datos con formato JSON y retornamos esa respuesta.
6. Si la respuesta no es válida, registramos el error que nos brinda el protocolo HTTP (100, 300, 400, 500) y si es necesario realizamos acciones para darle tratamiento.

> Nota: El protocolo HTTP siempre nos brindará una respuesta. Si esa respuesta es buena o no lo sabremos mediante los [Códigos de estado de respuesta HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

#### Método POST

Ahora que ya conocemos como funciona, veamos un ejemplo del método GET

```javascript
const createData = async () => {
    const response = await fetch('https://example.com/users', {
        method: 'POST',
        body: JSON.stringify(dataToSend),  // la variable dataToSend puede ser un 'string' o un {objeto} que proviene de algún lugar más arriba en nuestra aplicación
        headers: {
           'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        /* Realiaza el tratamiento del error que devolvió el request HTTP */
        return {error: {status: response.status, statusText: response.statusText}};
    };
};
```

Aquí agregamos el segundo parámetro del `fetch()` para agregar el método, el body y el headers.

#### Método PUT

Ejemplo de una petición con método PUT

```javascript
const updateData = async () => {
    const response = await fetch('https://example.com/users', {
        method: 'PUT',
        body: JSON.stringify(dataToSend),  // la variable dataToSend puede ser un 'string' o un {objeto} que proviene de algún lugar más arriba en nuestra aplicación
        headers: {
           'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        /* Realiaza el tratamiento del error que devolvió el request HTTP */
        return {error: {status: response.status, statusText: response.statusText}};
    };
};
```

### Método Delete

Ejemplo de una petición con el método DELETE

```javascript
const deleteData = async () => {
    const response = await fetch('https://example.com/users', {
        method: 'DELETE',
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('error: ', response.status, response.statusText);
        /* Realiaza el tratamiento del error que devolvió el request HTTP */
        return {error: {status: response.status, statusText: response.statusText}};
    };
};
```
