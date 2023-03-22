---
title: "Tutorial de Bootstrap: Aprende Bootstrap 5 en 10 minutos"
subtitle: "¡¡Después de décadas de lucha, ha llegado la luz!! Con este tutorial de Bootstrap, diseñar un sitio web será pan comido. Es casi estúpido y también imposible pensar en hacer un sitio web sin un marco CSS como Bootstrap 5."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:30+00:00"
tags: ["bootstrap"]
status: "published"

---

## Bootstrap solucionó todos los problemas principales de CSS

Hay luz al final del túnel y NO es Chuck Norris sosteniendo una linterna. Finalmente, alguien arregló CSS. Esta es una biblioteca hecha por [Mark Otto](https://twitter.com/mdo?lang=en) y [Jacob Thornton](https://twitter.com/fat) – gente normal – desarrolladores como tú y yo, ¡y lo hicieron muy bien!

Estos dos muchachos que trabajaban en Twitter sufrían los mismos problemas con los que hemos estado lidiando en HTML y CSS. Hartos de la situación, decidieron construir una **Hoja CSS básica diseñada para ser importada a cualquier sitio web**. Hace que cada trabajo de desarrollo front-end sea 4x más fácil.

![bootstrap 5](https://github.com/breatheco-de/content/blob/master/src/assets/images/335ed387-cbf9-4ffa-9529-1ccf2084e393.jpeg)

Además, Bootstrap te ofrece una docena de elementos nuevos que normalmente querrías usar pero que en realidad no existen en CSS+HTML: los componentes de Bootstrap.

## Layouts (Diseños): Resolviendo el modelo de caja


Una de las cosas que fallan en CSS es la forma en que funcionan los layouts: trabajar con **float**, **display** y **position** apesta. Así lo resolvió Bootstrap:

## Ahora todo está dividido en Filas y Columnas

Los creadores de Bootstrap replicaron el mismo concepto que tenía `<table>`, pero en lugar de usar tablas, usaron `<div>` (contenedores en caja). No pueden crear sus propias etiquetas HTML porque eso requerirá una nueva versión de HTML y haría que Bootstrap sea incompatible con los navegadores actuales. Las etiquetas deben permanecer igual; es por eso que decidieron anular los comportamientos predeterminados de `<div>` con clases.

```html
Esta es una fila: <div class="row">
Esta es una columna: <div class="col–sm–x">
```
![bootstrap tutorial](https://github.com/breatheco-de/content/blob/master/src/assets/images/3884f515-dd7a-48f2-b238-9e2ec26de02d.png)

Bootstrap ha dividido el ancho de la pantalla en `12 espacios`, cada uno de ellos con el 8,33% del ancho total de la fila. El tamaño de 1 columna, puede ser entre 1 y 12 ranuras.

Por otro lado, las columnas se crearon para vivir dentro de las filas (al igual que ocurre entre `<td>` y `<tr>`). Siempre necesitas abrir una fila antes de abrir una columna. Todas las columnas en una fila siempre deben sumar un máximo de 12 espacios.

![bootstrap tutorial](https://github.com/breatheco-de/content/blob/master/src/assets/images/1b7f5dc4-029a-475d-8bfd-fac1b739966c.png)

## Nuestro primer ejemplo de layout:

Tal como hicimos en el capítulo Layout del curso, creemos una página con 2 secciones grandes: una barra lateral a la derecha y un contenido principal a la izquierda.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/th7uLrow/6/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/th7uLrow/6/embedded/html,css,result/">Click here to open demo in a new window</a></small></div>

## Bootstrap es 100% receptivo

Es muy fácil decidir cómo se representará tu sitio web en diferentes tamaños de pantalla; cuando agregas cada columna a las filas, debes asignar una clase con el siguiente formato:

```html
<div class="col–md–x">
```

|**Col**   |**md**   |**x**
|:---------|:--------|:----|
|Significa que este elemento debería comportarse como una columna Bootstrap.   |Significa que se especifica solo para los dispositivos con una pantalla de tamaño "mediano".   |Especifica cuántos espacios quiero que tome esta columna (recuerde que puede tomar un máximo de 12 espacios por fila).   |


 Tamaños de dispositivos Bootstrap:   |Telefonos   |Teléfono grande/tableta pequeña  |Tabletas   |Computador de escritorio   |Computador de escritorio extragrande   |Extra extra grande   |
|:----------|:---------------|:-------------|:-----------|:------------|:---------|:--------|
| &nbsp;           |Nothing    |sm       |md       |lg      |xl        |xxl      |

> 👆 Nota: si no especificas el tamaño de la pantalla (por ejemplo, si usa 'sm', 'md' o 'xl'), el sitio web se mostrará para teléfonos móviles de forma predeterminada.

## Definición de móvil, tableta y computador de escritorio al mismo tiempo

Vamos a configurar el layout (usando las clases de columna sm, md y lg) para dos filas en todos los dispositivos al mismo tiempo:

![bootstrap 5](https://github.com/breatheco-de/content/blob/master/src/assets/images/e15c594c-9b46-4c27-bf5a-a5bbb5ef952a.png)

```html
<!-- Apila las columnas en el móvil haciendo una de ancho completo y la otra de medio ancho --> 
<div class="row">
  <div class="col-12 col-md-8">.col-12 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Las columnas comienzan con un 50 % de ancho en dispositivos móviles y aumentan hasta un 33,3 % de ancho en computadoras de escritorio --> 
<div class="row">
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>

<!-- Las columnas siempre tienen un 50% de ancho, en dispositivos móviles y de escritorio --> 
<div class="row">
  <div class="col-6">.col-6</div>
  <div class="col-6">.col-6</div>
</div>
```

## Esqueleto básico de Bootstrap 5

Ya conocemos el esqueleto básico de HTML5 que debe tener cualquier sitio web. Ahora solo tienes que agregar algunas líneas en su esqueleto para que sea "compatible con Bootstrap":

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Etiquetas meta requeridas -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">


    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- JavaScript opcional -->
    <!-- Popper.js, luego Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>

  </body>
</html>
```

Recuerda, Bootstrap es solo una hoja de estilo. Por eso es muy sencillo incluirlo en tu web. Usa la etiqueta `<link>` para incluir los estilos y, opcionalmente, usa la etiqueta javascript `<script>` para incluir los archivos Bootstrap Javascript.

La funcionalidad Bootstrap Javascript requiere que se incluya primero la biblioteca Popper Javascript. No necesitas saber los detalles sobre esto todavía. Simplemente incluye las bibliotecas JS usando la etiqueta de secuencia de comandos y luego lo comprenderá.

> 🔗 Aquí puedes encontrar algunos [excelentes archivos de Bootstrap para comenzar](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

## Componentes de Bootstrap 5 

HTML es tan básico que solo tiene unas pocas etiquetas, eso ya lo sabemos. Pero cuando navegas por la web hoy, ve algo diferente: los sitios web de hoy tienen menús, íconos, barras de carga, barras de navegación, etiquetas, etc. ¿Dónde están esas etiquetas? ¡Ninguna de esas etiquetas está definida en HTML!

Cada desarrollador tiene que falsificar estos elementos adicionales cada vez que crea un nuevo sitio web. Tienen que hacer todo desde cero, y lleva mucho tiempo.

Cuando importes Bootstrap a tu sitio web, tendrá un nuevo conjunto de componentes a su disposición. Esta es solo una pequeña parte de esos elementos:

![bootstrap 5](https://github.com/breatheco-de/content/blob/master/src/assets/images/8e9ff37a-28f7-4179-8f5d-9278ff7efd55.png)


### Estos son los componentes más importantes y usados ​​en este tutorial de Bootstrap:

#### The NavBar

Esto es tan popular que está en el menú del 99% de todos los sitios web. Normalmente tiene el logotipo de la empresa y una serie de enlaces, dependiendo de la lógica comercial de cada sitio web.

Este es un ejemplo de cómo puede verse una NavBar en un sitio web:

![bootstrap tutorial](https://github.com/breatheco-de/content/blob/master/src/assets/images/6351de1c-6d90-4502-8823-4b751981db9f.png)

> 🔗 [**Lee más sobre la NavBar aquí**](https://getbootstrap.com/docs/5.2/components/navbar/)

```html
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-1" href="#">
            <i class="fa-brands fa-instagram"></i>
            <span>Instagram</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav align-items-center">
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        <span class="btn btn-success">
                            Create a new post
                        </span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Menu
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

#### The Card

Este es probablemente el componente Bootstrap más utilizado, cada sitio web tiene algunas Cards porque son ideales para enumerar artículos de una manera hermosa. Algunos ejemplos de la Card utilizada pueden ser:

+ La sección "team" de un sitio web, donde se enumeran los diferentes empleados.
+ El típico muro de Pinterest.
+ El feed en cualquier red social como Instagram, Facebook, Twitter, etc.

Aquí hay un ejemplo de cómo se puede ver "The Card" en un sitio web:

![bootstrap 5](https://github.com/breatheco-de/content/blob/master/src/assets/images/39d36b52-330f-4ce9-beab-2004e325749c.png)

> 🔗 [**Lee más sobre The Card aquí**](https://getbootstrap.com/docs/5.2/components/card/)

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

#### The Modal

Todo el mundo odia un modal, es súper molesto, ¡siempre te pide que te suscribas a un boletín informativo! 🙂

Así es como se ve un modal por defecto en Bootstrap.

![bootstrap 5](https://github.com/breatheco-de/content/blob/master/src/assets/images/6bcba673-a543-4bf1-a80b-083914b91bef.png)

> 🔗 [**Lea más sobre Modal aquí**](https://getbootstrap.com/docs/5.2/components/modal/)

```html
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```


> ☝️ ¡Importante! El Modal necesita Javascript para funcionar. Recuerda incluir los tres archivos Javascript que se necesitan en un Bootstrap Skeleton típico: JS, Popper y Bootstrap.js

## Lo que realmente necesitas saber sobre Bootstrap

¡La documentación oficial de Bootstrap es increíble! No necesitamos comenzar a copiar y pegar todas sus publicaciones. Visita lo siguiente y concéntrate en leer estos temas:

+ [El sistema de cuadrícula.](https://getbootstrap.com/docs/5.2/layout/grid/)
+ [Formas de estilo.](https://getbootstrap.com/docs/5.2/forms/overview/)
+ [Lista de componentes disponibles para usar en tu sitio web.](https://getbootstrap.com/docs/5.2/components/alerts/)
+ [Utilidades o clases auxiliares:](https://getbootstrap.com/docs/5.2/utilities/borders/) Clases muy útiles y de uso constante para hacer cosas como centrar el texto, centrar una columna o contenedor, agregar un fondo, etc.

> ☝️ Versiones de Bootstrap y descarga

Bootstrap tiene muchas versiones, siempre verifica si estás utilizando la última versión de Bootstrap en tu proyecto, aquí puedes encontrar todas las versiones disponibles: [https://getbootstrap.com/docs/versions/](https://getbootstrap.com/docs/versions/).


Recomendamos usar un CDN para importar bootstrap en tu HTML como este: [https://www.bootstrapcdn.com/](https://www.bootstrapcdn.com/)

Si estás migrando tu proyecto a una versión más reciente de Bootstrap, recuerda consultar su documentación.
