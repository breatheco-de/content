---
slug: "the-fetch-javascript-api-es"
title: "La API con Fetch"
subtitle: "¿Has oído hablar de AJAX? En estas lecciones, aprenderás a cómo solicitar información de otras API y utilizar esos datos con la tecnología más utilizada para ese propósito."
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
authors: ["Guensie"]
textColor: "white"
date: "2018-05-11"
tags: ["fetch","ajax","http"]
status: "draft"

---

# Fetch API
**Un vistazo rápido a la API con Fetch**


Piensa en un **fetch** como una acción simple. Tu das una **solicitud** y recibes una **respuesta**. Fetch Api nos brinda el **método** **fetch ()** , que nos permite acceder a esas solicitudes y respuestas, utilizando javascript.

Veamos cómo se ve una solicitud **fetch** de búsqueda sencilla:
```javascript
    fetch('examples/example.json')
    .then(function(response) {
    **//Aquí es donde pones lo que quieres hacer con la respuesta.**
    })
    .catch(function(error) {
	    console.log(‘Oh No! There was a problem: \n', error);
	    });
```
**¿Que está sucediendo aquí?**

 1. Pasamos la ruta que queremos **fetch** (‘examples / examples.json’) como parámetro.
 2. La llamada devuelve una "**promesa**" que eventualmente se convierte en la respuesta. Tenga en cuenta que una "**promesa**" no es la respuesta real. Piense en ello como un proxy de la respuesta.
 3. Una vez que se recibe la respuesta, se pasa a **.Then** para su uso.
 4. Si hay un error al completar la solicitud, por ejemplo, si no hay conexión de red, se pasa el error apropiado como parámetro a .catch. Ten en cuenta que un 404 (una mala respuesta) sigue siendo una "**respuesta**" y, por lo tanto, no se considerará una respuesta incompleta. Por lo tanto, en el ejemplo anterior, no volvería a "**. Catch **".

**¿Cómo comprobamos una respuesta exitosa?**
Dado que la promesa de recuperación solo rechazaría una solicitud si no pudo completarla, debemos verificar si una respuesta es buena y validarla y arrojar un error si no está bien.
 
Para evaluar el estado de una respuesta puedes utilizar:
“** response.ok **”: comprueba el estado en los 200s y devuelve un valor booleano.
“**response.status**”- devuelve un entero con el código de estado de respuesta. El valor predeterminado es **200**.
“**response.statusText**”- devuelve una cadena cuyo valor predeterminado es "OK"

**¿Cómo actualizaría el ejemplo anterior para validar las respuestas?**
```javascript
    fetch('examples/example.json')
    .then(function(response) {
	    if (!response.ok) {
	    throw Error(response.statusText);
		}
		// Aquí es donde pones lo que quieres hacer con la respuesta.
	})
	.catch(function(error) {
		console.log('Looks like there was a problem: \n', error);
	});
```
**Ahora que esta pasando?**
1) Todavía estamos pasando la ruta (‘examples / example.json’) como parámetro.
2) El **fetch** devuelve una **promesa** que eventualmente se convierte en la respuesta.
3) Luego, la respuesta se pasa a .then para que se use de la manera que especificó.
4) Tenemos una instrucción "if" que básicamente dice que si **response.ok** no es verdadero, emita un error con response.statusText, que luego activará .catch.

**¿Porqué necesitamos esto?**
 Para evitar que las malas respuestas caigan de la cadena y rompan su código más adelante.
 
**Ahora Qué?**

Ahora necesitamos "leer" la respuesta para acceder al cuerpo de la respuesta. Afortunadamente, hay un método para eso: "**response.json ();**"

Actualicemos nuestro código para incluirlo.
```javascript
    fetch('examples/example.json')
	 .then(function(response) {
		if (!response.ok) {
	    throw Error(response.statusText);
	 }
    // Read the response as json.
	    return response.json();
	 })
	  .then(function(responseAsJson) {
    // Do stuff with the JSON
	    console.log(responseAsJson);
	 })
    .catch(function(error) {
	    console.log('Looks like there was a problem: \n', error);
    });
```
**Ahora que esta pasando?**
Sencillo. Piénsalo en pasos separados.
1) Busca el recurso en la ruta dada.
(**Fetch** obtiene la ruta al recurso y devuelve una **promesa** que se resolverá en un objeto de respuesta.)  
  
2) Luego valida la respuesta.
(Esto comprueba si la respuesta es válida (200 s). Si no, salta al paso 5.)

3) Lee la respuesta como JSON

4) Registrar el resultado
(El resultado son los datos JSON recibidos.)

5) Atrapa el error

**Ahora que has visto lo básico, podemos realizar solicitudes más avanzadas.**

El método de solicitud por defecto es un método "GET"; que es lo que hemos visto hasta ahora. Los métodos más utilizados y lo que representan son:
**GET**: Leer / Recuperar
**PUT**: Editar / Actualizar
**POST**: Crear 
**DELETE**: Lo has adivinado, esto simplemente significa Eliminar. 

Aquí hay un ejemplo de un método de post que está creando un nuevo usuario:
```javascript
fetch('https://example.com/users.json', {
	method: 'POST', 
	mode: 'cors', 
	redirect: 'follow',
	headers: new Headers({
		'Content-Type': 'text/plain'
	})
}).then(function() { /* manejar la respuesta */ });
``` 
Otro ejemplo: 
```js
fetch(https://example.com/users, {
  method: 'PUT', // or 'POST'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
```

**¿Notaste algo nuevo arriba? Headers?** 
Los headers HTTP nos permiten realizar acciones adicionales en la solicitud y respuesta. Puede configurar los headers de solicitud utilizando ```js newHeaders ()```, como puede ver arriba.

Los headers pueden enviarse en una solicitud y recibirse en una respuesta.

Un uso para los headers es verificar el tipo de contenido, para asegurarse de que está recibiendo el formato correcto antes de continuar con el proceso. Un ejemplo de esto sería:

```js
fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Sorry, There's no JSON here!");
  })
  .then(function(json) { /* haz lo que tu quieras con JSON */ })
  .catch(function(error) { console.log(error); });
  ```
Ten en cuenta que un método de header lanzará un TypeError si el nombre utilizado no es un nombre de header HTTP válido. Se puede encontrar una lista de headers válidos [aquí](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

