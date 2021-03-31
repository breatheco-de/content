---
title: "Tutorial de Bootstrap: Aprende Bootstrap 4 en 10 minutos"
subtitle: "¡Después de decadas de lucha, la luz ha llegado! Con este tutorial de Bootstrap, diseñar un sitio web va a ser pan comido. Es absurdo, y casi imposible, pensar en hacer un sitio web sin un framework de CSS como Bootstrap."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:30+00:00"
tags: ["bootstrap"]
status: "published"

---

## Bootstrap viene a arreglar el 90% de los problemas de CSS

Hay una luz al final del túnel y no es Chuck Norris con una linterna. ¡Finalmente alguien arregló CSS!  Es una biblioteca hecha por [Mark Otto](https://twitter.com/mdo?lang=en) y [Jacob Thornton](https://twitter.com/fat)- personas normales, programadores como tú y como yo, y ¡es genial!

Dos chicos, mientras trabajaban en Twitter, estaban sufriendo los mismos problemas que nosotros con HTML y CSS. Hartos de esta situación (como tú y yo), decidieron crear una **hoja base que puede importarse en cualquier sitio web**. Esto hizo el trabajo de todos los desarrolladores front-end 4 veces más fácil.

![bootstrap 4](../../assets/images/335ed387-cbf9-4ffa-9529-1ccf2084e393.jpeg)

Además, Bootstrap te da una gran cantidad de elementos nuevos que vas a querer usar siempre y que actualmente no existen en CSS+HTML: Los componentes de Bootstrap.

## Layouts: Solucionado el modelo de cajas
***

Uno de los defectos en CSS, es la forma en que funcionan los layouts: trabajar con **float**,  **display** y **position** ¡es lo peor! Así es como Bootstrap lo soluciona:

## Ahora todo está dividido en Filas y Columnas

Los creadores de Bootstrap, replicaron el mismo concepto que tienen las `<tables>`, pero en vez de usar tablas usaron `<div>` (contenedores de cajas). Ellos no podían crear sus propias etiquetas en HTML, porque eso requiere una nueva versión de HTML e iba a hacer a Bootstrap incompatible con los navegadores actuales. Las etiquetass debían ser las mismas - por eso decidieron anular el comportamiento que tiene un `<div>` por defecto con las clases.

```html
Esto es una fila: <div class="row">
Esto es una columna: <div class"col–sm–x">
```
![bootstrap tutorial](../../assets/images/3884f515-dd7a-48f2-b238-9e2ec26de02d.png)

Bootstrap ha dividido el ancho de la pantalla en  `12 slots` (espacios) - cada uno de ellos con un ancho de fila total  de 8.33%. El tamaño de una columna, puede ir de entre 1 y 12 slots o espacios.

Por otro lado, las columnas fueron hechas para vivir dentro de las filas (como pasa entre `<td>` y `<tr>`),  siempre necesitas abrir una fila antes de abrir una columna.  Todas las columnas en una fila deben sumar un máximo de 12 espacios.

![bootstrap tutorial](../../assets/images/1b7f5dc4-029a-475d-8bfd-fac1b739966c.png)

## Nuestro primer ejemplo de diseño:

Tal cual como lo hicimos en el capítulo sobre diseños, vamos a crear una página con dos grandes secciones, una barra lateral a la derecha y un contenido principal a la izquierda:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/th7uLrow/4/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/th7uLrow/4/embedded/html,css,result/">Click aquí para ver el demo en una ventana nueva</a></small></div>

## Bootstrap es 100% adaptable

Es muy fácil decidir como se verá tu página web en pantallas de diferente tamaño; cuando añades cada columna dentro de las filas, debes asignar una clase con el siguiente formato:

```html
<div class="col–md–x">
```

|**Col**   |**md**   |**x**
|:---------|:--------|:----|
|Significa que este elemento debe comportarse como una columna de Bootstrap.   |Significa que estoy especificando sólo para dispositivos con tamaño de pantalla mediano.   |Especifica cuantos espacios quiero que abarque la columna (recuerda que puede abarcar max 12 espacios por fila).   |

[[info]]
| :point_up:Bootstrap device sizes:   |Smartphones   |Big-phone/small-tablet   |Tablets   |Desktops   |Extra-large desktops   |
|:----------|:---------------|:-------------|:-----------|:------------|:---------|
| &nbsp;           |Nothing    |sm       |md       |lg      |xl        |

[[warning]]
| :point_up:Nota: si no especificas el tamaño de pantalla (ej. usando 'sm', 'md', or 'xl'), el sitio web va a renderizar para teléfonos móviles por defecto.

## Define móvil, tablet y escritorio/sobremesa (Desktop) al mismo tiempo

Vamos a configurar el diseño (usando las clases de columnas xs, sm, md y lg) para estas dos filas en todos los dispositivos al mismo tiempo:

![bootstrap 4](../../assets/images/e15c594c-9b46-4c27-bf5a-a5bbb5ef952a.png)

```html{numberLines: true}
<!-- Apila las columnas en el móvil ocupando el ancho completo y el otro medio ancho --> 
<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Las columnas comienzan en un 50% de ancho en dispositivos móviles y alcanzan hasta un 33,3% de ancho en el Desktops --> 
<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Las columnas son siempre del 50% de ancho, en dispositivos móviles y de Desktops --> 
<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>
```

## Estructura básica de Bootstrap 4
***

Ya sabemos sobre el esqueleto basico de HTML5 que todo sitio web debe tener. Ahora solo debes agregar unas lineas en tu esqueleto para hacerlo compatible con Bootstrap:

```html{numberLines: true}
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title>¡Hola, mundo!</title>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>
```

Recuerda, Bootstrap es solo una hoja de estilos. Es por eso que es muy simple agregarlo a tu sitio web. Utiliza el `<link>` tag para incluir los estilos, y si quieres para usar la etiqueta de javascript `<script>` y así incluir los archivos de javascript de Bootstrap.

La funcionalidad de Javascript en Bootstrap requiere que se incluyean las librerias propias de jQuery y Javascript primero pero no te preocupes por esto aún.   Sólo incluye las librerias de JS usando la etiqueta script y más adelante lo entenderás.

[[info]]
|:link: Encuentra aquí [increíbles archivos de Bootstrap para que puedas empezar.](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

## Componentes de Bootstrap 4
***

HTML es súper básico, sólo tiene un par de etiquetas - ya los sabíamos. Pero cuando revisas la web hoy en día, ves otra cosa… actualmente las páginas web tienen menús, iconos, barras de carga, etc. ¿Dónde están esas etiquetas? ¡Ninguna de ellas está definida en HTML!

Todos los desarrolladores tienen que simular estos elementos adicionales cada vez que crean un sitio web, tienen que hacer todo desde cero y eso toma muchísimo tiempo.

Cuando importas Bootstrap en tu página web, tendrás un nuevo conjunto de componentes a tu disposición. Esta es una pequeña parte de esos elementos:

![bootstrap 4](../../assets/images/8e9ff37a-28f7-4179-8f5d-9278ff7efd55.png)


### Estos son los componentes más usados e importantes de Bootstrap:
***

#### Barra de navegación o NavBar

Esto es tan popular que se encuentra en el 99% de los menús de todos los sitios web.  Normalmente contiene el logo de la compañia y una series de links - dependiendo de la lógica de negocio de la página. 

Aquí hay un ejemplo de como se ve un NavBar en un sitio web:

![bootstrap tutorial](../../assets/images/6351de1c-6d90-4502-8823-4b751981db9f.png)

[[info]]
| :link:[**Lee más sobre el "NavBar" aquí**](https://getbootstrap.com/docs/4.0/components/navbar/)

```html{numberLines: true}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Website Brand</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">
                                <a class="btn btn-success">Create a new post</a>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Settings
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
```

#### Card

Este es probablemente el componente de Bootstrap más usado, cada sitio web tiene unas cuantas "Card" porque es ideal para listar objetos de una forma bonita.  Algunos ejemplos del uso de "Card" pueden ser:

+ La sección de "equipo" de un sitio web donde listas los distintos empleados.
+ Un típico muro de Pinterest.
+ Cualquier historia de una red social como Instagram, Facebook, twitter, etc.

Aquí hay un ejemplo de como puede verse un sitio web con una "Card":

![bootstrap 4](../../assets/images/39d36b52-330f-4ce9-beab-2004e325749c.png)

[[info]]
| :link: [**Lee más sobre la "Card" aquí**](https://getbootstrap.com/docs/4.0/components/card/)

```html{numberLines: true}
<div class="card" style="width: 20rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```



#### El Modal

Todo el mundo odia el modal, es dmuy molesto, ¡siempre pregunta si te quieres incribir a una revista! 🙂

Así es como se ve modal por defecto con Bootstrap.

![bootstrap 4](../../assets/images/6bcba673-a543-4bf1-a80b-083914b91bef.png)

[[info]]
| :link:[**Lee más sobre el "Modal" aquí**](https://getbootstrap.com/docs/4.0/components/modal/)

```html{numberLines: true}
div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
```


[[warning]]
| :point_up:Importante! El Modal necesita Javascript para poder funcionar.  Recuerda incluir los archivos de Javascript necesarios en el típico esqueleto de Bootstrap: jQuery, Popper and Bootstrap.js

## Lo que realmente necesitas saber sobre Bootstrap
***

La documentación oficial de Bootstrap es increible!! No necesitamos copiar y pegar todos los post.  Por favor visita los siguientes sitios web y enfócate en leer estos temas:

+ [The grid system.](https://getbootstrap.com/docs/4.1/layout/grid/)
+ [Styling Forms.](https://getbootstrap.com/docs/4.1/components/forms/)
+ [List of components available to use on your website.](https://getbootstrap.com/docs/4.1/components/alerts/)
+ [Utilities or Helper classes:](https://getbootstrap.com/docs/4.1/utilities/borders/) Very useful and constantly used classes to do stuff like centering the text, centering a column or container, adding a background, etc.

 
| :point_up : Versiones de Bootstrap y su descarga: 

Bootstrap tiene varias versiones, siempre verifica que estés usando la última versión de Bootstrap en tu proyecto. Aquí podrás encontrar todas las versiones disponibles:[https://getbootstrap.com/docs/versions/](https://getbootstrap.com/docs/versions/).


Te recomendamos que uses el CDN para importar bootstrap en tu archivo HTML, de este modo:
We recomend using a CDN to import bootstrap in your HTML like this one: [https://www.bootstrapcdn.com/](https://www.bootstrapcdn.com/)

Si estás migrando tu proyecto a nueva versión de Bootstrap, recuerda siempre verificar su documentación.

## Gana RE2PECT.
***

El éxito no llega de la noche a la mañana.  Este es tu primer logro.  Déjame pregunterte ¿te sientes capaz de usar HTML, CSS, Layouts y Bootstrap?  ¡No te mientas!

No más Lecciones sobre este tema - es momento de entregar.  Es hora de enfocarse en el proyecto de clase.  Recuerda honrar los valores de los desarrolladores. Calma.

<iframe src="https://www.youtube.com/embed/RqHNyyvfafE" frameborder="0" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/RqHNyyvfafE">Click here to open video in new window</a></small></div>




















