---
title: ¿Qué es la depuración y cómo depurar el código?
tags:
  - debugging
  - web development
description: >-
  Aprende qué es la depuración y cómo depurar el código de manera eficiente.
  ¡Descubre técnicas que te ahorrarán tiempo y mejorarán tus habilidades de
  programación!
---
Todos cometemos muchos errores al programar. Esta es una realidad que reconoce cada desarrollador senior; por eso "depurar código" se ha convertido en una de las habilidades más esenciales para los desarrolladores.

## Está bien cometer errores

> He medido mi "tasa de error"; sé que cometo más de 100 errores durante un día honesto de programación (y llevo programando desde el año 2000, hace 24 años).

Estos errores pueden ser muy simples, como escribir mal una línea de código, o más elaborados, como escribir algo de código que lleve a un desbordamiento de memoria. No me asustan estos errores porque tengo una forma muy efectiva y rápida de identificar y solucionar errores.

## Tu trabajo es convertirte en un maestro de la depuración

A lo largo de los años, he desarrollado un método de depuración muy efectiva que compartiré a continuación. Me toma solo unos segundos encontrar y solucionar el 90% de mis errores y fallos, sin dejar lugar para la improvisación o el tiro al aire.

<quote> "Depurar es el doble de difícil que escribir código en primer lugar. Por lo tanto, si escribes código de la manera más inteligente posible, por definición, no eres lo suficientemente inteligente como para depurarlo." </quote> - Brian Kernighan

## ¿Quién debería leer esta guía?

Los desarrolladores web junior. Hay tantos tipos de errores y técnicas de depuración en la programación que es casi imposible escribirlos todos; por eso decidí enfocar esta guía en los desarrolladores junior en la etapa inicial de su carrera de desarrollo web full-stack.

## Prevenir errores

Sé que estás aquí para aprender cómo solucionar errores. Aun así, vale la pena mencionar que la mayoría de los errores de los desarrolladores principiantes se pueden prevenir usando formateadores de código automatizados, linters, herramientas de autocompletado, escribiendo con alta [legibilidad de código](https://4geeks.com/es/lesson/que-es-y-como-mejorar-la-legibilidad-del-codigo) y mejores prácticas.

> 📄 Aquí hay una guía sobre [normas y directrices de codificación](https://4geeks.com/es/lesson/estandares-y-lineamientos-de-codigo) que te ayudará a tener un código limpio y prevenir errores.

<quote>Si depurar es el proceso de eliminar errores de software, entonces programar debe ser el proceso de ponerlos.</quote>- Edsger Dijkstra

## Cómo depurar código: El marco de depuración

Los pasos y herramientas de depuración pueden variar significativamente dependiendo del lenguaje de programación (HTML/CSS, JavaScript, Python, etc.), las librerías, las herramientas (Pandas, Flask, Express, Rails, Postgres, etc.) y el mensaje de error u otros patrones y atributos que puedas notar sobre el error.

### Identificar el tipo de error: Exploración básica

Es una buena idea dividir los errores en "tipos" para que podamos preparar estrategias para cada grupo. Después de años de depuración de código, he designado 4 tipos de errores de front-end y 4 de back-end.

#### ¿Es un error de front-end?

La depuración de código de front-end se puede dividir en 4 grupos principales:

1. **Errores de HTML/CSS**: Desajustes de diseño frente al diseño original, confusiones creadas por la caché del navegador, una etiqueta HTML `<tags>` faltante o algunas reglas CSS que no se aplicaron correctamente.
2. **Errores lógicos de JavaScript**: Por lo general, valores de variables indefinidos o inesperados, condiciones lógicas o flujos incorrectos y problemas de sintaxis.
3. **Errores de renderizado con marcos de componentes**: Tratar con el DOM, renderizado de React, etc. Los errores típicos son no esperar a que los datos lleguen desde el back-end, lo que lleva a variables indefinidas (demasiado pronto), demasiados re-renderizados, importación o exportación incorrecta de variables o no pasar los datos correctamente entre los componentes.
4. **Errores de integración con el back-end**: Solicitudes Fetch y HTTP con *payload* incorrecta, credenciales de autenticación faltantes, no interpretar correctamente la respuesta de la *payload* del back-end o no manejar las excepciones de promesa, errores CORS.

#### ¿Es un error de back-end?

Los errores de back-end suelen ser más fáciles de encontrar porque hay menos tecnologías involucradas; las tecnologías y lenguajes son más limpios y maduros, y generalmente, el código se ejecuta de manera más directa de arriba hacia abajo.

> Nota: Hay arquitecturas de back-end más complejas con código asíncrono, herramientas basadas en la nube, microservicios, etc. Nos centraremos en sistemas de back-end más pequeños y estándar que usan la mayoría de las pequeñas y medianas empresas.

Depurar el código de back-end se puede dividir en 4 grupos principales:

1. **Serialización o validación de solicitud incorrecta**: Los datos entrantes pueden estar mal formateados o tener valores incorrectos.
2. **Problemas de base de datos**: Conexión a la base de datos, migraciones, sentencias SQL o integridad de datos.
3. **Errores lógicos**: Lógica incorrecta en tus condiciones, llamadas a funciones, valores de variables, etc.
4. **Errores de configuración**: Problemas con la configuración del servidor, problemas de entorno, dependencias de paquetes, configuración de librerías, caché, tiempos de espera, etc.

### ¿Cómo saber qué tipo de error tengo?

Depurar se vuelve más desafiante a medida que tu aplicación crece y tiene más piezas que se conectan. Por esta razón, es imperativo ejecutar tu código casi cada vez que cambias algo (recarga rápida) en lugar de esperar hasta que hayas hecho muchos cambios. Recordar el último cambio que hiciste en tu código antes de que apareciera el error te da mucha ventaja.

> 😎 Consejo profesional: ¿En general, cuál fue la línea de código que actualizaste por última vez? ¿Estaba en el front-end? ¿O en el back-end?

Voy a suponer lo peor: no tienes idea de cuándo apareció el error por primera vez y has hecho muchos cambios desde la última vez que ejecutaste tu aplicación. Estas son las pistas que tienes para comenzar a depurar:

**En el front-end:**
+ Busca un mensaje de error en la consola del desarrollador.
+ Busca un error de solicitud en la pestaña de red.

**En el back-end:**
+ Si estás construyendo en un servidor: revisa el registro de solicitudes.
+ Busca excepciones en la terminal.

Hay un 99% de probabilidades de que tu error aparezca en cualquiera de estas salidas, pero eso no significa que el error pertenezca al front-end o al back-end; primero debes leer el error.

#### Leyendo errores de la consola del desarrollador

Los **errores de back-end** en la consola de JavaScript del desarrollador suelen indicarse con mensajes como `"404 Not Found"` o `"500 Internal Server Error"`, `"CORS policy"`, etc.

Los **errores de front-end** suelen indicarse con mensajes como `"Uncaught ReferenceError: x is not defined"`, `"SyntaxError: Unexpected token <"`, `"Uncaught TypeError: x is not a function"`, `"Uncaught TypeError: Cannot read property 'length' of undefined"`, etc.

#### Lectura de errores desde la pestaña de red

La forma más rápida de identificar errores en la pestaña de red de las herramientas de desarrollador es buscar solicitudes con un estado diferente al 200 OK.

Los códigos de error que comienzan con `4xx` probablemente sean errores del lado del cliente.
Los códigos de error que comienzan con `5xx` probablemente sean errores del lado del servidor.

Aquí hay una lista más detallada:

| Código | Significado |
| ------ | -------------|
| 400 | Es un problema del lado del cliente; el servidor espera un formato o valores diferentes en sus datos. |
| 401 | Es un problema del lado del cliente porque está intentando solicitar algo para lo que no tiene permiso. ¿Olvidaste incluir credenciales en la solicitud? |
| 403 | Probablemente del lado del cliente porque las credenciales están incluidas, pero pueden estar equivocadas. El servidor no te permite acceder. |

Como segunda fuente de información, y especialmente si el error es un `4xx`, puede verificar que el cuerpo de la solicitud tenga el formato y los valores esperados.

#### Lectura del terminal del servidor

Si tiene un error al ejecutar un script (no un servidor), es un error del lado del servidor.

Si está ejecutando un servidor, el error puede ser una solicitud mal formateada proveniente del lado del cliente; por eso es una buena idea verificar primero el cuerpo de la solicitud y el código de estado en la pestaña de red de las herramientas de desarrollador.

Si el cuerpo de la solicitud, la URL y los encabezados están bien, es un error del lado del servidor.

#### Lectura del registro de solicitudes del servidor

Por último, si tiene un error en un servidor web (como Express, Flask, Django, etc.), es una buena idea verificar el registro de solicitudes que se le hacen al servidor. En el registro de solicitudes, puede ver cada solicitud que cualquier lado del cliente haya hecho a su API ordenadas por la hora exacta. Aquí hay una breve explicación de un ejemplo de registro de solicitudes:

![ejemplo de registro de solicitudes](https://storage.googleapis.com/media-breathecode/53b8907096b009687a251a9ce7f9270cab0ab57342f2372ccbabfce421f7afaa)

### Localizando el error

Si has seguido los pasos anteriores correctamente, sabes a qué parte de tu código está relacionado el error. ¡Así que mantente enfocado y no adivines! Tienes información útil sobre tu error; úsala y sigue esa pista. Por ejemplo:

+ Deja de pensar en el lado del servidor si tu error está en el lado del cliente o viceversa.
+ ¿Error de sintaxis o TypeError? Los errores de sintaxis generalmente te dicen en qué línea está el problema. Así que busca esa información y lee las líneas de código que la rodean.
+ ¿La pestaña de red tiene el código de estado 4xx? Ve y arregla el código que envía la solicitud.
+ ¿La pestaña de red tiene el código de estado 5xx? Ve y lee la terminal del servidor en busca de errores de sintaxis o de base de datos.

### Prueba y error hasta que lo arregles

Si intentas arreglar el error haciendo cambios en tu código y aparece otro error, ¡eso suele ser buena noticia! Yo llamo a esto depuración anidada.

Debes estar seguro de la información que has reunido para mantenerte enfocado en la solución. ¡Espera para comenzar otra teoría; dale un buen intento al enfoque actual!

### Arregla el error

El último paso, obviamente, es arreglar el error; puede llevar un tiempo y puede haber algunos errores anidados en el camino.

He preparado lecciones muy sencillas para depurar los errores más comunes que encontrarás al programar aplicaciones web y APIs como desarrollador junior.

- [Depuración de errores de código HTML](https://4geeks.com/es/lesson/depurando-codigo-html).
- [Depuración de errores de código CSS](https://4geeks.com/es/lesson/depurando-codigo-css).
- Depuración de errores de front-end de JavaScript.
- Depuración de errores de front-end de React.js.
- Depuración de errores de back-end de scripts de Python.
- Depuración de errores de back-end de API de Python Flask.

> 📄 Nota: Haga clic en cualquiera de los elementos anteriores para aprender sobre la depuración de cada tecnología.
