---
title: "Dominando los Selectores de CSS"
subtitle: "Además de dominar las propiedades display y position, aprender a usar selectores de CSS es la habilidad más importante que necesitas desarrollar. No tienes que recordar su sintaxis pero si tenerlos en tu radar para poder desarrollar las estrategias correctas al construir tu hoja de estilos CSS. "
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-01-11"
tags: ["CSS"]
---

## ¿Por qué necesitamos aprender acerca de los selectores?

Completar una hoja de estilo es como tener una pequeña guerra entre selectores, estás constantemente anulando los estilos previamente definidos con nuevos:

```css{numberLines: true}
//Primero dices que quieres que todas las H2 tags sean font-size: 14px y de color: azul;
h2{
    font-size: 14px;
    color: blue;
}

//Pero luego tienes una página muy particular donde el fondo también es azul, así que necesitas que tus encabezados sean blancos;

h2{
    color: white;
}
```

Esto sucede todo el tiempo y, en algún momento, puede ser difícil anular los estilos anteriores.  Debes organizar tus estilos adecuadamente y empezar desde lo menos específico hasta los más especifico. 

Estos selectores "muy específicos" te ayudarán mucho.  ¡Serán tu mejor herramienta para luchar contra tu guerra de estilos!

[[info]]
| :tv: &nbsp;[Aquí hay un vídeo muy bueno (3:40 min) explicando especificidad.](https://www.youtube.com/watch?v=In78mSOHmls)

## El Selector de Hijos

```css
#someDiv > p {
    color: blue;
}
```

Esta declaración toma las etiquetas de párrafo que son hijos del div y las convierte en azules.  Ten en cuenta que solo funciona para los *hijos* de ese div, no necesariamente para todos los descendientes.  Exploremos esto más a fondo con el siguiente ejemplo.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/odku7nr9/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/odku7nr9/embedded/html,css,result/">Click aquí para abrir demo en una nueva ventana</a></small></div>





## El Selector de Parientes Adyacente

```css
p + p {
    color: red;
}
```

Usamos el selector de parientes adyacente para cambiar el segundo y tercer párrafo a rojo.  Esto parece muy complicado, ¿no es así? Instintivamente, esperaríamos que el primer párrafo también fuera rojo.  Después de todo, el primer párrafo está en el mismo nivel del árbol que los dos siguiente y, tiene parientes.

Sin embargo, este selector solo se aplica a elementos que están precedidos por otra cosa.  En este caso, solo se aplicará a los párrafos precedidos directamente por un párrafo pariente.

El primer párrafo de la lista está precedido por el div, por lo que no se modifica.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ubpr9mnz/2/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/ubpr9mnz/2/embedded/html,css,result/">Click para abrir el demo en una nueva ventana</a></small></div>

## El Todopoderoso Asterisco
***

```css
#someDiv * {
    color: red;
}
```

El CSS anterior convierte a todos los elementos dentro de un div rojo específico - esto incluye elementos como enlaces que tienen un color predeterminado establecido a otra cosa y no se verían afectados simplemente por apuntar al div.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/79254pm6/2/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/79254pm6/2/embedded/html,css,result/">Haz click aquí para abrir el demo en una nueva ventana</a></small></div>



```css
div * p {
    color: red;
}
```

Puedes llevar esto tan lejos como quieras - los siguientes objetivos son los "nietos" de la div.  Encontrarás este método de encadenamiento frecuentemente en los trucos de depuración de CSS.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/3f6Lbrvp/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/3f6Lbrvp/embedded/html,css,result/">Haz click para abrir el demo en una nueva ventana</a></small></div>

## Selector de Valor de Atributo

```css
a[href='http://4geeksacademy.com/'] {color: blue;}
```
Si queremos cambiar el color de fuente del enlace "Design Shack", podríamos usar: pseudo selectores.  Sin embargo, hacerlo supondría que la lista se mantenga en ese orden y que el soporte del navegador no es el mejor.  En su lugar, lo que podemos hacer es usar un selector de atributos para dirigirnos al "href" específico en el que estamos interesados.  

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/ytw60q3d/6/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/ytw60q3d/6/embedded/html,css,result/">Click para abrir el demo en una nueva ventana</a></small></div>


## Selector de Valor de Atributo de Subcadena Arbitraria


```css
div[id*='section'] {color: red;}
```
El siguiente código apunta a cualquier div con la palabra "section" en el título.  Puede ser la "section3" o la "section-Four", no importa.  Mientras contenga la cadena indicada, se aplicarán los estilos posteriores.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/uzw8jqc5/1/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/uzw8jqc5/1/embedded/html,css,result/">Haz click aquí para abrir el demo en una nueva ventana</a></small></div>

## Selectores de Pseudo Clase


### Pseudo Selectores Relacionados con Enlaces 
```css
a:link{color: green;}
a:visited{color: yellow;}
a:hover{color: blue;}
a:active{color: red;}
```
Puedes cambiar los colores de cualquier elemento del sitio web, dependiendo de su estado:

+ `:link` será el predeterminado.
+ `:visited` es auto-explicativo.
+ `:hover` cuando el cursor está encima.
+ `:active` cuando el cursor hace click en él. 
  
  <iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/tLy9dvbr/2/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/tLy9dvbr/2/embedded/html,css,result/">Haz click aquí para abrir el demo en una nueva ventana</a></small></div>

  
### Pseudo Selectores Relacionados con la Entrada 

```css
input{padding: 5px;}
input:disabled{
    background: #ddd;
    color: #949494;
    border: 2px solid black;
}
input:focus{font-size: 2em;}
input:enabled{ border: 2px solid black;}
```

Es muy importante tomarse el tiempo suficiente para darle estilo a nuestros formularios.  El estilo es la mejor manera de decirle al usuario que una entrada está desactivada, marcada o que tiene el cursor enfocado en una entrada en particular.

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/76yzfxL9/1/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/76yzfxL9/1/embedded/html,css,result/">Haz click aquí para abrir el demo en una nueva ventana</a></small></div>

### Pseudo Selectores Basados en la Posición 

```css
#myUL li:first-child{background: blue;}
#myUL li:nth-child(3){background: orange;}
#myUL li a:first-of-type{background: green;}
```
Puedes aplicar estilos a los elementos en base a su posición. 

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/0nzat2h8/1/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/0nzat2h8/1/embedded/html,css,result/">Haz click aquí para abrir el demo en una nueva ventana</a></small></div>

### Aquí hay una lista de las pseudo-clases más usadas:

|**Selector**   |**Ejemplo**   |**Descripción del Ejemplo**   |
|:--------------|:-------------|:-------------------------|
|[:active](https://www.w3schools.com/cssref/sel_active.asp)   |a:active   |Selecciona el enlace activo   |
|[:checked](https://www.w3schools.com/cssref/sel_checked.asp)   |input:checked   |Selecciona cada elemento `<input>` marcado   |
|[:disabled](https://www.w3schools.com/cssref/sel_disabled.asp)   |input:disabled   |Selecciona cada elemento `<input>` deshabilitado   |
|[:empty](https://www.w3schools.com/cssref/sel_empty.asp)   |p:empty   |Selecciona cada elemento `<p>` que no tenga hijos   |
|[:enabled](https://www.w3schools.com/cssref/sel_enabled.asp)   |input:enabled   |Selecciona cada elemento `<input>` habilitado   |
|[:first-child](https://www.w3schools.com/cssref/sel_firstchild.asp)   |	p:first-child   |Selecciona cada elemento `<p>` que sea el primer hijo de su padre   |
|[:first-of-type](https://www.w3schools.com/cssref/sel_first-of-type.asp)   |p:first-of-type   |Selecciona cada elemento `<p>` que sea el primer elemento `<p>` de su padre   |
|[:focus](https://www.w3schools.com/cssref/sel_focus.asp)   |input:focus   |Selecciona el elemento `<input>` que tiene el foco   |
|[:hover](https://www.w3schools.com/cssref/sel_hover.asp)   |	a:hover   |Selecciona enlaces sobre los que está el cursor   |
|[:in-range](https://www.w3schools.com/cssref/sel_in-range.asp)   |input:in-range   |Selecciona elementos `<input>` con un valor dentro de un rango específico	   |
|[:invalid](https://www.w3schools.com/cssref/sel_invalid.asp)   |input:invalid   |Selecciona todos los elementos `<input>` con un valor no válido   |
|[:lang(language)](https://www.w3schools.com/cssref/sel_lang.asp)   |p:lang(it)   |Selecciona cada elemento `<p>` con un valor de atributo que comience con "it"   |
|[:last-child](https://www.w3schools.com/cssref/sel_last-child.asp)   |p:last-child   |Selecciona cada elemento `<p>` que sea el último hijo de su padre   |
|[:last-of-type](https://www.w3schools.com/cssref/sel_last-of-type.asp)   |	p:last-of-type   |Selecciona cada elemento `<p>` que sea el último elemento `<p>` de su padre   |
|[:link](https://www.w3schools.com/cssref/sel_link.asp)  |a:link   |Selecciona todos los enlaces no visitados   |
|[:not(selector)](https://www.w3schools.com/cssref/sel_not.asp)   |:not(p)   |Selecciona cada elemento que no sea un elemento `<p>`
|[:nth-child(n)](https://www.w3schools.com/cssref/sel_nth-child.asp)   |	p:nth-child(2)   |Selecciona cada elemento `<p>` que sea el segundo hijo de su padre   |
|[:nth-last-child(n)](https://www.w3schools.com/cssref/sel_nth-last-child.asp)   |p:nth-last-child(2)   |Selecciona cada elemento `<p>` que sea el segundo hijo de su padre, contando desde el último hijo   |
|[:nth-last-of-type(n)](https://www.w3schools.com/cssref/sel_nth-last-of-type.asp)   |p:nth-last-of-type(2)   |Selecciona cada elemento `<p>` que sea el segundo elemento `<p>` de su padre, contando desde el último hijo   |
|[:nth-of-type(n)](https://www.w3schools.com/cssref/sel_nth-of-type.asp)   |p:nth-of-type(2)   |Selecciona cada elemento `<p>` que sea el segundo elemento `<p>` de su padre   |
|[:only-of-type](https://www.w3schools.com/cssref/sel_only-of-type.asp)   |p:only-of-type   |Selecciona cada elemento `<p>` que sea el único elemento `<p>` de su padre   |
|[:only-child](https://www.w3schools.com/cssref/sel_only-child.asp)   |p:only-child   |Selecciona cada elemento `<p>` que sea el único hijo de su padre   |
|[:optional](https://www.w3schools.com/cssref/sel_optional.asp)   |input:optional   |Selecciona elementos `<input>` sin atributo "requerido"   |
|[:out-of-range](https://www.w3schools.com/cssref/sel_out-of-range.asp)   |input:out-of-range   |Selecciona elementos `<input>` con un valor fuera de un rango especificado   |
|[:read-only](https://www.w3schools.com/cssref/sel_read-only.asp)   |input:read-only   |Selecciona elementos `<input>` con un atributo "readonly" especificado   |
|[:read-write](https://www.w3schools.com/cssref/sel_read-write.asp)   |input:read-write   |Selecciona elementos `<input>` sin atributo "readonly"   |
|[:required](https://www.w3schools.com/cssref/sel_required.asp)   |input:required   |Selecciona los elementos `<input>` con un atributo "requerido" especificado   |
|[:root](https://www.w3schools.com/cssref/sel_root.asp)   |root	   |Selecciona el elemento raíz del documento   |
|[:target](https://www.w3schools.com/cssref/sel_target.asp)   |#news:target   |Selecciona el elemento #news actualmente activo (haciendo click en una URL que contiene ese nombre de ancla)   |
|[:valid](https://www.w3schools.com/cssref/sel_valid.asp)   |input:valid   |Selecciona todos los elementos `<input>` con un valor válido   |
|[:visited](https://www.w3schools.com/cssref/sel_visited.asp)   |a:visited   |Selecciona todos los enlaces visitados   |


[[info]]
|:link: Esta es una excelente lectura sobre los selectores de CSS: [Los 30 selectores de CSS que debes memorizar](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)










