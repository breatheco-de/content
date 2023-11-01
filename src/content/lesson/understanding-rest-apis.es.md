---
title: "Entendiendo las REST APIs"
subtitle: "¡Parece ser solo el comienzo de la revolución API! El camino de la humanidad se dirige hacia la arquitectura de la API. Puedes aprender cualquier lenguaje o herramienta, pero esta es una de esas pocas especialidades que te garantizará un trabajo bien pagado durante los próximos 60 años, así que siéntete cómodo con REST API. :)"
cover_local: "../../assets/images/b929f233-00b2-406f-87a5-ee74146cfd85.jpeg"
video: "https://www.youtube.com/watch?v=s7wmiS2mSXY"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["REST","API"]
status: "published"
---

<iframe height="450" src="https://www.youtube.com/embed/QsrWtqnQGMc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ¿Qué es una API?

API (*Application Programming Interface*, Interfaz de Programación de Aplicaciones) es una tecnología que posibilita la comunicación entre dos aplicaciones (usuario-servidor, back-front, vista-servicio, etc.) para compartir información y funcionalidades. Así, en la comunicación, a la aplicación que envía la solicitud se llama `cliente` y la que envía la respuesta se llama `servidor`.

## ¿Cómo funciona una API?

Una API funciona en tres pasos: llamada, implementación y aplicación.

### Paso 1: Llamada
La llamada es la acción que desencadena la comunicación. Es una necesidad o un envío de información, que se desee recibir del servidor o incluir en él.

Por ejemplo, un usuario puede acceder a una aplicación en su smartphone que da información sobre el estado meteorológico. Al seleccionar una ubicación sobre la que desea ver el tiempo, el sistema recibe esta llamada para obtener la información de esa ciudad.

### Paso 2: Implementación
Una vez que el sistema/servidor/receptor ha recibido la llamada, se desencadena un proceso que tiene como objetivo satisfacer la necesidad del emisor. Dependiendo del objetivo de la llamada, el servidor puede acceder a su información para devolverla o bien insertar la recibida por el usuario para incluirla en él.

En nuestro ejemplo anterior, el sistema recibiría la solicitud del estado del clima, incluyendo la ubicación del usuario y extraería de su base de datos la información.

### Paso 3: Aplicación
Con la información o el recurso nuevo a crear localizado, el servidor lleva a cabo la acción de enviar la información o de añadirla. Hasta este paso la petición del cliente no tiene un impacto real.

En nuestro ejemplo, la aplicación móvil recibe la información del servidor y la muestra en la interfaz al usuario.

## API en la web
En una aplicación web, los métodos de la API dependen completamente del propósito o del negocio de la misma. Además, esta API cubrirá exclusivamente el ámbito de la aplicación y no debe exceder en su dominio:

- Si la aplicación web es de un producto como Uber, algunos de los métodos que debe proporcionar la API son: registro de nuevos clientes, solicitar un viaje, calificar a un conductor, cancelar un viaje, etcétera.
- Si la aplicación web es de un producto como Airbnb, algunos de los métodos deberían ser: registro de nuevos clientes, registro de anunciantes, búsqueda de alojamientos, listado de reservas, solicitar una reserva, cancelación, etcétera.

Como podemos apreciar, ambas API contienen métodos en común, como registrar nuevos clientes.

Hay una gran cantidad de formas de crear una API en un entorno web, pero el estándar `REST` es uno de los más utilizados y, de hecho, el estándar más importante.

### API REST
La principal característica de este tipo de implementaciones es que las comunicaciones se realizan sobre el protocolo `HTTP`. Esto quiere decir que tanto el envío como la recepción se lleva a cabo en texto plano (cifrado y con un formato concreto, pero al final es una cadena de caracteres). Como está fundamentada en este protocolo, entonces se aprovechan y utilizan los métodos de petición vistos anteriormente: GET, POST, PUT y DELETE:

|Método        |Descripción  |
|:-------------|:----------------|
|GET | Solicita una representación del recurso especificado. Sirve para requerir un recurso de un servidor. |
|POST | Envía información al servidor. Esta información, dependiendo del servidor y del contexto, se puede utilizar, por ejemplo, para añadir registros a una base de datos, añadir información a un perfil de usuario en una web, etcétera. |
|PUT | Envía información al servidor, pero a diferencia de POST, este método se utiliza para actualizar información ya existente en él. |
|DELETE |Se utiliza para eliminar datos en el servidor. |

Además de los métodos de petición, este protocolo establece también ciertos códigos de respuesta, los cuales aprovecha esta API también. Puedes encontrar más información [aquí](https://developer.mozilla.org/es/docs/Web/HTTP/Status).

+ `1xx` – Metadata
+ `2xx` – Todo OK
+ `3xx` – Redirección
+ `4xx` – Cliente hizo algo mal
+ `5xx` – Servidor hizo algo mal

### URI
URI (*Uniform Resource Identifier*, Identificador de Recursos Uniforme) es una cadena de caracteres que identifican un recurso en la red. Internet se dice que está habitado por muchos puntos de contenido. La URI es el camino para identificar cualquiera de esos puntos de contenido, ya sea una página de texto, un vídeo o un clip de sonido, una imagen fija o animada, o un programa.

Una aplicación web debe tener asociada una URI para identificar inequívocamente esa de todas las demás, y todos sus recursos de los demás. Una URI está compuesta de un **protocolo** seguido de un **host** y de un **path**. Si por ejemplo tuviéramos:

```text
https://api.uber.com/v1.2/products
```

Entonces `https` es el **protocolo**, `api.uber.com` es el **host** y `v1.2/products` es el **path**.

Una aplicación web que implemente una API REST debe definir una URI para cada una de las funcionalidades (y métodos) objetivo. Por ejemplo, algunas URI de la API de Twitter son las siguientes:

|Método        |Funcionalidad      |URI     |
|:-------------|:------------------|:-----------|
| GET | Obtener mensaje directo | https://api.twitter.com/1.1/direct_messages/events/show.json |
| GET | Obtener lista de favoritos | https://api.twitter.com/1.1/favorites/list.json |
| POST | Publicar tweet | https://api.twitter.com/1.1/statuses/retweet/:id.json | 
| DELETE | Eliminar mensaje directo | https://api.twitter.com/1.1/direct_messages/events/destroy.json |

Como acabamos de ver en el ejemplo de la API de Twitter, su servicio REST solo implementa los métodos GET, POST y DELETE. Esto es algo muy común; no es necesario implementar todos los métodos. Además, como podemos ver también, para cada funcionalidad se definirá un método de petición, y puede haber varios GET, POST o DELETE, cada uno en una URI distinta.

### Recurso
Un recurso es una representación abstracta de una unidad de información que se distribuye en las llamadas desde y hacia la API, y su estructura y contenido dependerá también del ámbito de la aplicación y su dominio. Por ejemplo:

+ Si estamos construyendo una API para una academia online, los recursos podrían ser: estudiante, curso, clase, tema, profesor, etc.
+ Si estamos creando una API de comercio electrónico, los recursos podrían ser: producto, categoría, pedido, cliente, etc.
  
Los recursos representan los documentos que se transfieren a través de la red para realizar el trabajo. Los recursos deben nombrarse como sustantivos, ya que representan conceptos en el dominio de un sistema en particular y se identifican usando una URI.

## Otras lecturas
A continuación se proporcionan varios documentos y guías para reforzar el conocimiento sobre las API REST:

- [ReadTheDocs](https://restful-api-design.readthedocs.io/en/latest/resources.html)
- [RESTfulAPI.net](https://restfulapi.net/)

> 🔗 Este es un listado de APIs públicas que pueden ser utilizadas para proyectos personales, profesionales y educativos: https://github.com/public-apis/public-apis
