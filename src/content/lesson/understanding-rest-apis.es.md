---
title: "Entendiendo las Rest Apis"
subtitle: "¡Parece ser solo el comienzo de la revolución API! El camino de la humanidad se dirige hacia la arquitectura de la API ... puedes aprender cualquier idioma o herramienta, pero esta es una de esas pocas especialidades que te garantizará un trabajo bien pagado durante los próximos 60 años, así que siéntete cómodo con REST Api. :)"
cover_local: "../../assets/images/b929f233-00b2-406f-87a5-ee74146cfd85.jpeg"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["REST","API"]
status: "published"

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/QsrWtqnQGMc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ¿Qué es un API?
***

Una API es el intermediario de la mayoría de las aplicaciones modernas. API significa: Application Programming Interface (Interfaz de Programación de Aplicaciones). Vamos a desglosarla mirando cada una de sus partes:

|**Aplicación**    |**Programando**    |**Interfaz**    |
|:-----------------:|:-----------------:|:---------------:|
Si tienes un teléfono inteligente, estás familiarizado con las aplicaciones (herramientas, juegos, redes sociales y otro softwares que usamos todos los días).    |Programar es la forma en que los ingenieros crean todo el software que tanto facilitan nuestra vida.   |Una interfaz es un límite común compartido por dos aplicaciones o programas que permiten que ambos se comuniquen entre sí.

[[info]]
| :point_up: Esencialmente, una API es una forma para que los programadores se comuniquen con una aplicación en particular.

### Esta es la API para usar un teléfono:

Cada API consta de 3 componentes principales: 

(1) Las funciones / métodos que tiene disponibles para usar, 
(2) El formato para la comunicación y 
(3) Los datos (y los tipos de datos) que manipulará. Por ejemplo, cualquier teléfono en el mundo tendrá la siguiente API:

|**Funciones/Métodos:**   |**Formato de Comunicación**   |
|:------------------------|:--------------------------|
|`python>Haz una llamada`<br>`python>Cuelga una llamada`<br>`python>Hablar con el operador`<br>`python>Marca algo en el teclado`    |Ruido (sonidos)!  Hay un sonido para todo (incluso en los teléfonos modernos). Escucharás un tono cuando realices una llamada,cuando pesionas una tecla, etc. El sistema del teléfono escucha los cambios de tono del sonido.     |

### ¿Qué pasa con una Aplicación Web?

Los métodos de la API de una aplicación web dependen completamente del propósito / negocio del sitio web:

+ Si estás creando la API para un producto como Uber, algunos de sus métodos serán: registrarse, solicitar un viaje, calificar un conductor, cancelar un viaje, etc.
+ Si estás creando una API para algo como AirBnB, algunos de sus métodos serán: listado de libros, búsqueda de listado, cancelar viaje, etc.

## El estándar REST
***

Hay docenas de formas de crear una API, pero el estándar REST ha llegado a dominarlas todas. Si realmente quieres ser un desarrollador web, tienes que sentirse muy cómodo con REST.

REST funciona a través de HTTP - lo que significa que todo está basado en texto. Utiliza los famosos comandos GET, POST, PUT y DELETE para clasificar los métodos API.

|**Método**    |**Descripción**    |
|:-------------|:--------------|
|GET          |Se utiliza para leer el estado del servidor. Al ser una operación **segura**, puede ejecutarse varias veces sin riesgo de modificación de datos o corrupción; llamarla una vez tiene el mismo efecto que llamarla diez veces.    |
|POST        |Los puristas de REST usan post solo para creación. Eso significa que cada vez que POSTEE algo en una API, estará creando un nuevo registro en la base de datos para eso. Algunas API utilizan POST para todas las operaciones de escritura (eliminar, actualizar y crear). Lo hacen porque PUT y DELETE no están disponibles en HTML / Formularios y eso hace que esos métodos sean más difíciles de usar.      |
|PUT      |Es más usado para actualizar el estado en el servidor; Aunque también se puede utilizar para crear estado.     |
|DELETE     |Se utiliza para eliminar datos en el servidor     |


### Códigos de Status para la Respuesta

Los [códigos de estado HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) entregan metadatos en la respuesta al estado de los recursos solicitados. Son parte de lo que hace de la Web una plataforma para construir sistemas distribuidos. Se dividen en las siguientes categorías:

+ `python>1xx` – Metadata
+ `python>2xx` – Todo esta bien
+ `python>3xx` – Redirección
+ `python>4xx` – Cliente hizo algo mal
+ `python>5xx` – Servidor hizo algo mal

### URIs (Identificadores de Recursos Uniformes )

Los URI diferencian un recurso de otro. Para acceder y manipular un recurso, debes tener al menos una dirección.

Ellos estan compuestos por un `python>protocolo` + `python>host` + `python>path`.
Ejemplo: `python>https://api.uber.com/v1.2/products`

Los clientes no deben estar acoplados a una URI de recursos particulares, ya que pueden cambiarse a discreción del servidor. Aquí es donde la hipermedia tiene las mayores ventajas, ya que ofrece una forma de desacoplar a los clientes de URIs específicas y agregar semántica al protocolo de la aplicación.

Aquí hay algunas URI de la API de Twitter:

+ [GET /direct_messages/](https://developer.twitter.com/en/docs/direct-messages/sending-and-receiving/api-reference/get-sent-message)
+ [GET /favorites/list](https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-favorites-list)
+ [POST /direct_messages/new](https://developer.twitter.com/en/docs/api-reference-index)
+ [DELETE /direct_messages/welcome_messages/destroy](https://developer.twitter.com/rest/reference/del/direct_messages/welcome_messages/destroy)

### Recursos

Un recurso es una representación abstracta de un objeto que puede llamarse usando Create, Read, Update o Delete con tu API, por ejemplo:

+ Si estás construyendo el API para un aprendizaje electrónico, los recursos podrían ser: un estudiante, un curso, una clase, un tema, un profesor.
+ Si estás creando una API de comercio electrónico, los recursos podrian ser: Producto, Categoría, Pedido, Cliente, Compra, etc.
  
Los recursos representan los documentos que se transfieren a través de la red para realizar el trabajo. Los recursos deben nombrarse como sustantivos, ya que representan conceptos en el dominio de un sistema en particular y se identifican usando URIs.



### Lista de API's públicas

(https://github.com/public-apis/public-apis)


