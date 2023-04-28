---
slug: "the-fetch-javascript-api-es"
title: "La API con Fetch"
subtitle: "¿Has oído hablar de Fetch? En estas lecciones, aprenderás a cómo solicitar información de otras API y utilizar esos datos con la tecnología más utilizada para ese propósito."
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
authors: ["Guensie"]
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["fetch","ajax","http"]
status: "published"

---

**Un vistazo rápido a la API con Fetch**

Piensa en un **fetch** como una acción simple. Tú das una **solicitud** y recibes una **respuesta**. Fetch Api nos brinda el **método** **fetch ()** , que nos permite acceder a esas solicitudes y respuestas, utilizando javascript.

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
 4. Si hay un error al completar la solicitud, por ejemplo, si no hay conexión de red, se pasa el error apropiado como parámetro a **.catch**. Ten en cuenta que un 404 (una mala respuesta) sigue siendo una "**respuesta**" y, por lo tanto, no se considerará una respuesta incompleta. Por lo tanto, en el ejemplo anterior, no volvería a "**.catch**".

**¿Cómo comprobamos una respuesta exitosa?**

Dado que la promesa de recuperación solo rechazaría una solicitud si no pudo completarla, debemos verificar si una respuesta es buena y validarla y arrojar un error si no está bien.

Una respuesta genérica de un servidor se parece a esto cuando se inicia sesión en la consola:

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
“**response.ok**”: comprueba el estado en los 200s y devuelve un valor booleano.
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

**¿Ahora qué está pasando?**

1) Todavía estamos pasando la ruta (‘examples / example.json’) como parámetro.
2) El **fetch** devuelve una **promesa** que eventualmente se convierte en la respuesta.
3) Luego, la respuesta se pasa a .then para que se use de la manera que especificó.
4) Tenemos una instrucción "if" que básicamente dice que si **response.ok** no es verdadero, emita un error con response.statusText, que luego activará .catch.

**¿Por qué necesitamos esto?**

 Para evitar que las malas respuestas caigan de la cadena y rompan su código más adelante.

 Necesitamos lanzar este error manualmente porque, como se explicó anteriormente, los mensajes de error recibidos dentro de una respuesta del servidor no se registran automáticamente como un error y no aparecen en el método de captura.

 El resultado será que la búsqueda no entregará nada y, sin embargo, el cliente no tendrá idea de que algo salió mal.
 
**¿Ahora qué?**

Ahora necesitamos "leer" la respuesta para acceder al cuerpo de la respuesta.

Como ya sabe, los únicos datos que pueden viajar a través de una conexión http están en formato de texto sin formato. Por lo tanto, necesitamos convertir el texto sin formato del cuerpo de la respuesta en un formato Javascript significativo.

 Afortunadamente, hay un método para eso: "**response.json ();**"

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

**¿Ahora qué está pasando?**

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

**Ten en cuenta** que este ejemplo de recuperación está publicando (enviando al servidor) datos en formato de texto sin formato. En el desarrollo front-end moderno, esto es menos común. El tipo de contenido más común para nuestros métodos será el formato ***aplicación/json***, como se ve en el siguiente ejemplo:

```js
fetch('https://example.com/users', {
  method: 'PUT', // or 'POST'
  body: JSON.stringify(data), // los datos pueden ser una `cadena` o un {objeto} que proviene de algún lugar más arriba en nuestra aplicación
  headers:{
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

**¿Notaste algo nuevo arriba? Headers?** 

El **cuerpo** de la solicitud es donde colocamos los datos que queremos enviar al servidor para almacenamiento permanente, con nuestras solicitudes POST o PUT. Debido a que solo podemos enviar texto plano a través de http, tenemos que convertir nuestros datos desde su formato JS original a una cadena. Hacemos eso con el método **JSON.stringify()**.

Las solicitudes con el método GET o DELETE no requieren un cuerpo, ya que normalmente no se espera que envíen datos, sin embargo, también ***puedes*** incluir un cuerpo en esas solicitudes si es necesario.

Los **headers HTTP** nos permiten realizar acciones adicionales en la solicitud y la respuesta. Puedes establecer encabezados de solicitud usando como se ve arriba.

Uno de los encabezados más comunes necesarios es el encabezado 'Content-Type'. Señala al destinatario de la solicitud (el servidor), cómo debe tratar los datos contenidos en el cuerpo de la solicitud. Debido a que la mayoría de las veces enviamos datos en algún formato de javascript que luego se ***stringified***, necesitamos instruir al servidor para que convierta la cadena que recibe de nuevo a un formato json, como se ve en la línea 5 anterior.

Los encabezados se pueden enviar en una solicitud y recibir en una respuesta.

Por lo tanto, puedes usar los encabezados de la respuesta que recibes del servidor, para verificar el tipo de contenido de su cuerpo y asegurarte de recibir el formato correcto antes de seguir adelante en el proceso. Un ejemplo de esto sería:

```js
fetch('https://example.com/users')
.then(response => {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Sorry, There's no JSON here!");
  })
  .then(jsonifiedResponse => { /* haz lo que quieras con la respuesta jsonified */ })
  .catch(error => console.log(error));
```

Ten en cuenta que un método de encabezado generará un TypeError si el nombre utilizado no es un nombre de encabezado HTTP válido. Se puede encontrar una lista de encabezados válidos [aquí](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).


