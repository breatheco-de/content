---
title: "¿Què es HTTP?"
subtitle: "HTTP quiere decir Hypertext Transfer Protocol, o en español, Protocolo de Transferencia de Hipertexto. Se trata de un conjunto de reglas de comunicación que posibilita la circulación de información a través de la World Wide Web (WWW)."
cover_local: "../../assets/images/http-0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTTP"]
status: "published"

---



# ¿Qué es HTTP?
  
## Todo es texto (HTTP)


"HTTP quiere decir Hypertext Transfer Protocol, o en español, Protocolo de Transferencia de Hipertexto. Se trata de un conjunto de reglas de comunicación que posibilita la circulación de información a través de la World Wide Web (WWW).""

Básicamente, es un protocolo de transferencia de texto que opera a través de solicitudes entre un cliente y un servidor. HTTP es el término utilizado para describir este sencillo lenguaje basado en texto. No importa cómo se desarrolle, el objetivo del servidor será siempre entender y devolver respuestas de texto sencillo.


  ![what is http?](../../assets/images/http-3.png)

## ¿Cómo funciona HTTP?

Este protocolo funciona a través de solicitudes y respuestas el cliente (por ejemplo, un navegador de internet) y un servidor (por ejemplo, los computadores en donde residen sitios web). 

El servidor responde con una respuesta estructurada y con una serie de metadatos que establecen pautas para el inicio, desarrollo y cierre de la comunicación. Estas pautas son los llamados "métodos de petición".

A una secuencia de estas solicitudes se le conoce como sesión HTTP.

## Métodos de petición

Cada conversación en la web comienza con una petición. Esta petición es un mensaje de texto o un conjunto de líneas creado por un cliente (navegador, app) que especifica el documento que solicitas y el *método* que aplicarás. El cliente envía esta petición a un servidor, y entonces espera la respuesta.

Una petición en lenguaje HTTP sería algo así:

```python
GET / HTTP/1.1 
Host: google.com
Accept: text/html
User-Agent: Chrome/31.0.1650.57 (Macintosh; Intel Mac OS X 10_9_0)
```
En este caso en particular estamos utilizando el método GET. 

Este simple mensaje comunica todo lo necesario acerca de qué recurso está solicitando el cliente exactamente. La primera línea de una petición HTTP es la más importante y contiene dos cosas:

+ el URI (Uniform Resource Identifier) que es la única dirección o ubicación que identifica el recurso que el cliente quiere.
+ el método HTTP define lo que quieres hacer con el recurso y es tu método de petición. Los más utilizados son lo siguientes:

|**Método**    |**Descripción**    |
|:-------------|:--------------|
|GET          |Se utiliza para leer el estado del servidor. Al ser una operación **segura**, puede ejecutarse varias veces sin riesgo de modificación de datos o corrupción; llamarla una vez tiene el mismo efecto que llamarla diez veces.    |
|POST        |Los puristas de REST usan post solo para creación. Eso significa que cada vez que POSTEE algo en una API, estará creando un nuevo registro en la base de datos para eso. Algunas API utilizan POST para todas las operaciones de escritura (eliminar, actualizar y crear). Lo hacen porque PUT y DELETE no están disponibles en HTML / Formularios y eso hace que esos métodos sean más difíciles de usar.      |
|PUT      |Esto es más usado para actualizar el estado en el servidor; Aunque también se puede utilizar para crear estados.     |
|DELETE     |Se utiliza para eliminar datos en el servidor     |


```python
DELETE /blog/15 HTTP/1.1`
```
Además de la primera línea, un petición HTTP también tiene otras líneas de datos llamadas _request headers_, o cabeceras de solicitud, mediante las que puede entregar una amplia gama de información como: el nombre del servidor o _host_, los formatos de respuesta que acepta el cliente para realizar la solicitud, el formato en que está enviando datos en el cuerpo de la solicitud (si corresponde)...


## Códigos de Status para la Respuesta


Cuando el servidor recibe la petición, sabe con exactitud que recurso necesita el cliente (a través de la URI) y que quiere hacer con ese recurso(a través del método HTTP). 

Traducido a HTTP la respuesta sería algo así:

```python
HTTP/1.1 200 OK
Date: Sun, 01 Dec 2013 18:17:45 GMT
Server: Apache/2.2.22 (Ubuntu)
Content-Type: text/html
```

La respuesta contiene el recurso solicitado. La primera línea es muy importante y contiene el estado o status de la respuesta. En este caso es 200, es decir todo está ok.
 
Los códigos de estado HTTP,[puedes leer más al respecto aquí](https://developer.mozilla.org/es/docs/Web/HTTP/Status), entregan metadatos en la respuesta al estado de los recursos solicitados. Son parte de lo que hace de la Web una plataforma para construir sistemas distribuidos. Se dividen en las siguientes categorías:


+ `python>1xx` – Metadata
+ `python>2xx` – Todo esta bien
+ `python>3xx` – Redirección
+ `python>4xx` – Cliente hizo algo mal
+ `python>5xx` – Servidor hizo algo mal
