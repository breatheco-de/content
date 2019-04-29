---
title: "Aprendamos el Modelo de Cajas"
subtitle: "Crear diseños es el proceso más doloroso al programar en HTML & CSS

Aprende las reglas de CSS: Display, Position, Float and Flex; y coloca cualquier elemento en el lugar que tú quieras."

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-01-11"
tags: ["modelo de cajas","CSS","HTML"]
---

## **El Modelo de Cajas**
***

Probablemente, el concepto más difícil de entender de CSS es la diagramación y posicionamiento de los elementos de una página web.  Esto pasa porque CSS no fue hecho con el propósito de visualizar documentos tan avanzados e interactivos como los que vemos en la actualidad.

![css layout](https://ucarecdn.com/dccad91a-93b3-49c9-a437-6612087b9ee4/-/resize/600x/)   

#### Diagramación
Volvamos a HTML y recordemos que fue construido para hacer documentos.  En algún momento debes haberte preguntado “¿cómo hago para organizar el espacio del contenido?”.  Los documentos científicos tienen diferentes maquetaciones, las páginas web deberían tenerlas, ¿no crees?

Necesitamos usar cajas para eso. Una caja es un contenedor con un ancho y una altura específica. Las cajas tienden a ser contenedores rígidos que ponen orden en el mundo HTML / CSS. La etiqueta más utilizada para un cuadro es `<div>`.


Todo el contenido del sitio web debe estar envuelto dentro de una caja (div, header, footer, etc.). Las cajas son invisibles por defecto, por lo tanto, para hacerlas visibles, debes establecer un color de fondo o un borde.  La siguiente imagen muestra cuántas cajas invisibles tiene un sitio web normal:

<before-after width="500px"
    before="https://ucarecdn.com/40818d0d-60c6-4ef3-a488-834f21ddebf1/" after="https://ucarecdn.com/0c89a48e-d488-4e5c-807a-fd6b9a9179f6/" />

#### ¿De qué está compuesta una caja?

Todas las cajas/contenedores deben tener los siguientes atributos:

|**Atributo**   |**Descripción**   |
|:--------------|:-----------------|
|Contenido (Content)	    |Se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.)     |
|Relleno (Padding)   |Espacio libre opcional existente entre el contenido y el borde.   |
|Borde (Border)	   |Línea que encierra completamente el contenido y su relleno.   |
|Imagen de Fondo (Background image)   |Imagen que se muestra detrás del contenido y el espacio de relleno.   |
|Color de Fondo (Background color)   |Color que se muestra detrás del contenido y el espacio de relleno.   |
|Margen (Margin)   |Separación opcional existente entre la caja y el resto de cajas adyacentes.   |

![css layout](https://ucarecdn.com/153d2a7c-b648-4d75-920b-940102f18eaa/-/resize/500x/) 

En el siguiente ejemplo puedes ver como dividir en dos una página web para colocar un menú del lado izquierdo y el contenido del lado derecho.  Colocamos color rojo al DIV del menú, y color azul al DIV del contenido para que el ejemplo sea más fácil de entender.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/kevomsyq/2/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/kevomsyq/2/embedded/html,css,result/">Click aqui para abrir demo en una nueva ventana</a></small></div>

# **Ancho y Largo de las Cajas**
***

Todas las cajas tienen dos atributos que definen su tamaño: width and height.  En algunos casos se ajustan automáticamente, pero en otros debemos asignarlos manualmente o colocarlos porcentualmente (relativo al tamaño del dispositivo del cliente).

## **Atributo: Position**
***

El navegador es el responsable de asignar posiciones a todos los elementos de una página, pero, como ya sabemos, las posiciones que traen los elementos son bastante limitadas y hacen que los documentos se vean feos y anticuados.

Para que un sitio web se vea como los sitios web de la actualidad, tenemos que rediseñar todo el posicionamiento de la página.  Esto se logra utilizando la propiedad "position" y "display" (que veremos más adelante) para poder replicar la diagramación que se le ocurra al más ávido diseñador.

<iframe src="https://www.youtube.com/embed/hFvOgu3bcOk" frameborder="0" allowfullscreen ></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/hFvOgu3bcOk">Click aqui para abrir demo en una nueva ventana</a></small></div>

|**Nombre**   |**Descripción**   |
|:----------|:-----------------|
|Static     |No provoca ningún posicionamiento especial de los elementos y por tanto, los atributos top, left, right y bottom no se tendrán en cuenta.    |
|Relative    |Similar a absolute.  La principal diferencia es que nadie ignora su posición en el documento.  La caja a la que le apliques este atributo se va a ubicar con base en los atributos top, left, right y bottom, pero basándose en su elemento padre (el elemento donde el esté contenido) como punto de partida.    |
|Absolute    |Cuando le dices a una caja que su posición es absolute, igualmente debes definir las reglas top, bottom, left y right.  Aquí le estás pidiendo a la caja que ignore dónde se encuentra dentro del documento.  Su nueva posición estará basada en las reglas (top, left, right y bottom que especificaste en el CSS).    |
|Fixed     |Se utiliza cuando queremos que un elemento permanezca en la misma posición durante toda la navegación del usuario dentro en la página.  Si haces scroll verás como “te acompaña”. Fixed se puede utilizar para las ventanas modales (PopUps), para los menú de navegación, etc.    |

Espera!!  Si no entendiste bien lo que acabamos de decir, bueno……realmente no importa (en este punto).  Este es uno de esos momentos donde necesitamos que practiques para entenderlo.  No hay otra opción. 🙁

## **Atributo: Display**
***

Las posibilidades de la propiedad `display` son mucho más avanzadas que simplemente ocultar elementos.  En realidad, la propiedad `display` modifica la forma en la que se visualizan.

Son muy utilizadas para listar elementos, para los menús de navegación, para los activity feeds de las redes sociales, etc.

<iframe src="https://www.youtube.com/embed/pgCLHD4FNjg" frameborder="0" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/pgCLHD4FNjg">Click aqui para abrir demo en una nueva ventana</a></small></div>


|**Nombre**   |**Descripción**   |
|:----------|:-----------------|
|Inline     |Es el valor por defecto de `<strong>`, `<i>`, `<a>`, `<span>`, etc.  Los elementos se comportarán como un texto y no tendrán límites rígidos (ni width, ni heigh).    |
|Block   |Es el valor por defecto que tienen los `<div>`, `<p>`, `<h>`, etc.  El elemento ocupará toda la línea de la página desplazando a los demás elementos por encima o por debajo de él.    |
|Inline-Block    |Lo mejor de dos mundos.  Sirve para tratar de tener varios contenedores en una misma línea pero cada uno respetando sus límites (width y heigh).  Gracias a él existen páginas como Pinterest que permiten ver el diseño masonery.   |
|None    |Hace que el elemento se oculte (invisible) y no ocupe ningún espacio dentro del documento.   |

Para entender display perfectamente lo mejor es… ¡ponernos a practicar!.

## **Atributo: Float**
***

Es un atributo sencillo pero muy útil.  Sirve para decirle a una caja que se desplace lo máximo posible hacia algún lado: izquierda o derecha.  Una vez que le asignes la propiedad float a algún elemento, este buscará el mejor espacio para acomodarse, intentando convivir con los elementos que lo rodean.

Es muy utilizado en blogs cuando quieres agregar imágenes a tus artículos.  Es muy bueno en estos casos, porque una vez que la foto se desplaza hacia un lado, el texto del artículo rodea a la imagen de una manera muy natural.

<iframe src="https://www.youtube.com/embed/htdLSAZ2ZH8" frameborder="0" allowfullscreen ></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/htdLSAZ2ZH8">Click aqui para abrir demo en una nueva ventana</a></small></div>

|**Nombre**   |**Descripción**   |
|:----------|:-----------------|
|left	    |Desplaza el elemento lo más a la izquierda posible.   |
|right   |Desplaza el elemento lo más a la derecha posible.   |


## **Pensemos en UI/UX por un momento**
***

¡Es tiempo de Yoga! Dejemos de programar y comencemos a pensar sobre la especie humana, ¿cómo son los seres humanos? ¿cómo se comportan? ¿qué les gusta? ¿dónde hacen click?

Este curso no es sobre la interface y la experiencia de los usuarios, pero los desarrolladores web tendemos a subestimar este tema.  Es importante tomarse el tiempo necesario para diseñar el flujo de navegación del sitio web, la posición del menú, los elementos UI, etc.  Aquí tenemos algunos ejemplos de diseños:

![css layout](https://ucarecdn.com/ce06fb9d-bc8c-4191-ae12-a2ec4ac6fa1f/-/resize/400x/)

Algunos sitios web tienen un excelente contenido pero un mal diseño que limita su potencial para el éxito. Este es el top de cosas en las que debes pensar antes de elegir un diseño:

+ **Sensibilidad:**  ¿El website debe adaptarse a los diferentes tipos de pantallas? Podemos crear páginas web separadas para cada dispositivo, o aplicaciones móviles + páginas we, pero siempre se recomienda que la página web sea receptiva.  No quisiéramos perder tráfico en la página porque no carga de forma apropiada.
+ **Tamaño de la pantalla del dispositivo:** Algunas pantallas son muy pequeñas y no pueden tener la misma cantidad de columnas, puede que las imágenes deban ser un poco más pequeñas, etc.  Ej: Un iPhone SE tiene una pantalla muy pequeña en comparación a la que tiene un gran porcentaje de las personas que utilizan iPhone.  Las barras laterales no son una buena idea en estos dispositivos.
+ **Orientación:** Si estás usando una tablet o un teléfono móvil, puedes rotar la pantalla y eso requiere que el ancho de la página web sea capaz de colocarse más grande (para un paisaje) o más pequeña (para un retrato).
+ **Sentido Común:** Esta es la más complicada, pero nunca sabrás que funciona mejor hasta que lo pruebas.  Quizás mover el menú de la parte de arriba a la izquierda incrementará la interacción de los usuarios.  Debes estar en una constante búsqueda de “la verdad”.
  
# **Ejemplos de diseño:**
***

Los siguientes ejemplos reúnen un gran porcentaje de los diseños más usados en la web.  Entiéndelos bien que seguro los vas a tener que usar durante el resto de tu vida como desarrollador.  A veces usarás diferentes enfoques para lograr varias cosas a la vez.

### Contenido Centrado
***

Todo el contenido de Facebook está centrado dentro de un contener o caja de anchura máxima.  Esto quiere decir que no importa si la computadora del usuario tiene 4000px de anchura, la máxima anchura se detendrá al llegar a su máxima anchura y el resto de la página será blanco.

Este es el código exacto que se necesita para tener siempre alineado en el centro de la pantalla el contenido de la web:

![css layout](https://ucarecdn.com/ca5d4285-c151-4b30-a4a2-c6b35510188b/-/resize/500x/)

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/Lwop5kdc/3/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/Lwop5kdc/3/embedded/html,css,result/">Click aqui para abrir demo en una nueva ventana</a></small></div>



### Arreglo del Left Sidebar
***

Las barras laterales a la izquierda son geniales cuando tienes una pantalla ancha (paisaje).  Puedes tener un menú, publicidades, call to action a alguna hoja informativa, inicio de sesión, etc.  Pero aun queda suficiente espacio para el contenido.  En la actualidad, casi todas las páginas web usan barras laterales a la izquierda, algunas también tienen barras a la derecha.

De hecho, en este pre-work la barra está a la izquierda.  Es la mejor opción para nosotros porque queremos tener el contenido siempre disponible para ti.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/0jxvfwad/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/0jxvfwad/embedded/html,css,result/">Click aqui para abrir demo en una nueva ventana</a></small></div>

### Menú principal con Left Sidebar
***

Es casi lo mismo, pero en vez de tener barras laterales a la izquierda como el menú principal, vamos a utilizarlas como un complemento.  El menú principal debe estar en la caja de arriba porque es lo primero que los usuarios ven cuando entran a la página web.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/aLndw6e7/5/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/aLndw6e7/5/embedded/html,css,result/">Click aqui para abrir demo en una nueva ventana</a></small></div>

## Responsive Masonry
***

Pinterest hizo este diseño universalmente conocido. Mediante el uso de este “innovador” UI, se convirtieron en uno de los sitios webs más visitados en Internet.  Masonry distribuye las cajas de la mejor forma posible, primero trata de cubrir toda la fila añadiendo cajas a la derecha, y después salta al otro lado donde no hay espacio suficiente.

Otra genialidad sobre Masonry es que cada caja puede tener su propia altura, cosa que es súper difícil en CSS porque los navegadores antiguos no soportan esas características y tendrás que usar JavaScript para arreglarlo.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ovp1nj3s/5/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/ovp1nj3s/5/embedded/html,css,result/">Click aqui para abrir demo en una nueva ventana</a></small></div>

## Popups / Ventanas Modales / Alertas
***

La alerta predeterminada de JavaScript es vieja y fea, además de limitada [(click aquí para verla)](https://www.w3schools.com/js/js_popup.asp). A nadie le gusta usarla, eso es porque los desarrolladores siempre quieren construir sus propios modales.

Para replicar el comportamiento de esta alarma tienes que:

+ Crear un div con posición absoluta.
+ Colócalo en el centro de la pantalla (utiliza los márgenes automáticos para eso)
+ Delante del contenido del sitio web (usa la regla z-index para esto).
+ Agrega un botón de cierre para que el div sea invisible cuando los usuarios hagan click en “cerrar” [(debes usar JavaScript para capturar los clicks que hacen los usuarios)](https://stackoverflow.com/questions/3177582/how-to-hide-div-by-onclick-using-javascript).

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/8co2hnj1/1/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/8co2hnj1/1/embedded/html,css,result/">Click aqui para abrir demo en una nueva ventana</a></small></div>

# **Demostración en vivo: Juega con la Caja**
***

Utiliza los sliders de la izquierda para modificar el width, height, padding o cualquier otra regla de CSS que este disponible en la demostración:

<iframe src="https://assets.breatheco.de/live-demos/css/box-model/" width="100%" height="465" frameborder="0" scrolling="no" style="border:0px; overflow: hidden;"></iframe>


## Hay demasiado que aprender sobre diseños
***

Tendrás que aprender “sobre la marcha”, porque hay una infinidad de combinaciones que puedes crear para el diseño de una página web.  Lo que realmente importa, es que entiendas completamente el display, absolute, float y overflow rules.

No te preocupes, amigo mio.  La mayor parte de Bootstrap está hecha para hacer más fáciles los diseños.  Aprenderás esto en la próxima lección.

![css layout](https://ucarecdn.com/91aa197c-b2cb-4717-b41f-0f7b579aab25/-/resize/400x/)


  






