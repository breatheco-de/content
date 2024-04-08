---
title: "¿Qué es HTTP?"
subtitle: "HTTP quiere decir Hypertext Transfer Protocol, o en español, Protocolo de Transferencia de Hipertexto. Se trata de un conjunto de reglas de comunicación que posibilita la circulación de información a través de la World Wide Web (WWW)."
cover_local: "../../assets/images/http-0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTTP"]
status: "published"
---

## ¿Qué es HTTP?

HTTP (*HyperText Transfer Protocol*, Protocolo de Transferencia de HiperTexto) es un protocolo utilizado para transmitir documentos hipermedia a través de la web. Interviene en todos los flujos de transmisión de información a lo largo y ancho de Internet.

Este protocolo opera entre un cliente y un servidor. Así, el cliente realiza una petición enviando un mensaje con cierto formato al servidor. Este entonces le devuelve con una respuesta también en texto.

Esta comunicación, como se muestra en el siguiente gif, se lleva a cabo mediante un proceso:

1. El cliente quiere realizar el envío de una imagen a través de un servidor. El servidor recibe la imagen y la transforma en texto. Este texto es ilegible por los humanos. Si un hacker interceptase esto, lo que vería es un conjunto de símbolos/letras/números uno detrás de otro.
2. La imagen transformada en texto se transmite a través de Internet.
3. La cadena de caracteres llega al ordenador/dispositivo móvil del receptor, en este caso, la abuela.
4. Cuando la abuela recibe el fichero y quiere abrirlo, se lleva a cabo la decodificación, que transforma el texto en imagen, para su posterior visualización.

![Enviar una imagen a través de Internet](https://github.com/breatheco-de/content/blob/master/src/assets/images/2fd53b0a-5243-4440-8fc6-7fd74ac5a46e.gif?raw=true)
  
<small style="color:grey">Imagen 1: Los 4 pasos necesarios para enviar imágenes a través de Internet: decodificación de la imagen, transmisión, recepción y decodificación... ¡Finalmente, la abuela se siente feliz después de ver la foto de su nieta!</small>

### ¿Cómo funciona HTTP?

![Diagrama HTTP](https://github.com/breatheco-de/content/blob/master/src/assets/images/http-3.png?raw=true)

El protocolo HTTP funciona a través de solicitudes y respuestas, el cliente (por ejemplo, un navegador de internet) y un servidor (por ejemplo, las computadoras que alojan y despliegan los sitios web). 

El servidor, tras recibir una solicitud, responde con un mensaje estructurado y con una serie de metadatos que establecen pautas para el inicio, desarrollo y cierre de la comunicación. Estas pautas son los llamados **métodos de petición** (*request methods*).

A una secuencia de estas solicitudes se le conoce como **sesión HTTP**.

### Métodos de petición

Cada conversación en la web comienza con una petición. Esta petición es un mensaje de texto o un conjunto de líneas creadas por un cliente (navegador, app, usuario) que especifica el documento que solicita y el *método* que aplica. El cliente envía esta petición a un servidor, y entonces espera la respuesta.

Una petición para obtener una página web, en este caso, `google.com`, en lenguaje HTTP sería algo así:

```python
GET / HTTP/1.1 
Host: google.com
Accept: text/html
User-Agent: Chrome/31.0.1650.57 (Macintosh; Intel Mac OS X 10_9_0)
```

En este caso en particular estamos utilizando el método GET porque queremos obtener/recibir un recurso.

Este simple mensaje comunica todo lo necesario acerca de qué recurso está solicitando el cliente exactamente. La primera línea de una petición HTTP es la más importante y contiene dos cosas:

+ El URI (*Uniform Resource Identifier*, Identificador de Recursos Uniforme) que es la única dirección o ubicación que identifica el recurso que el cliente quiere.
+ El método HTTP define lo que quieres hacer con el recurso y es tu método de petición. Los más utilizados son los siguientes:

|Método        |Descripción  |
|:-------------|:----------------|
|GET | Solicita una representación del recurso especificado. Sirve para hacer una petición de un recurso a un servidor. |
|POST | Envía información al servidor. Esta información, dependiendo del servidor y del contexto, se puede utilizar, por ejemplo, para añadir registros a una base de datos, añadir información a un perfil de usuario en una web, etcétera. |
|PUT | Envía información al servidor, pero a diferencia de POST, este método se utiliza para actualizar información ya existente en él. |
|DELETE |Se utiliza para eliminar datos en el servidor. |

```python
DELETE /blog/15 HTTP/1.1`
```

Además de la primera línea, una petición HTTP también tiene otras líneas de datos llamadas **cabeceras de solicitud** (*request headers*), mediante las que puede entregar una amplia gama de información en la petición que recibirá el servidor.

Toda respuesta proveniente de un servidor llevará consigo un *código de respuesta* o *status code*. Algunos de los más comunes se detallan a continuación.

### Códigos de respuesta

Cuando el servidor recibe la petición, sabe con exactitud qué recurso necesita el cliente (a través de la URI) y qué quiere hacer con ese recurso (a través del método de petición utilizado). 

Traducido a HTTP, la respuesta sería algo así:

```python
HTTP/1.1 200 OK
Date: Sun, 01 Dec 2013 18:17:45 GMT
Server: Apache/2.2.22 (Ubuntu)
Content-Type: text/html
```

La respuesta contiene el recurso solicitado, además del código de respuesta. En este caso `200` indica que todo es correcto, que el recurso se ha recibido, además de que la comunicación ha sido un éxito.
 
Los códigos de estado HTTP puedes encontrarlos [aquí](https://developer.mozilla.org/es/docs/Web/HTTP/Status) y según el número con el que empiecen, brindan información muy valiosa:

+ `1xx` – Metadata
+ `2xx` – Todo OK
+ `3xx` – Redirección
+ `4xx` – Cliente hizo algo mal
+ `5xx` – Servidor hizo algo mal

