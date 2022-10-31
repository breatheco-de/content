---
title: "Aprendamos CSS: ¿Qué Quiere Decir CSS?"
subtitle: "Cómo te habrás dado cuenta, HTML te permite crear sólo sitios web básicos. Nadie quiere ver un sitio web blanco con algún texto horrible en él. ¡Así que es hora de saber de qué se trata CSS! Aprende CSS para hacer tu sitio web hermoso. Es hora de brillar !."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["CSS"]
status: "published"

---

## ¡¡Bienvenido a CSS!!

Luego de sumergirnos en el mundo de HTML todo empieza a parecer feo, rígido y cuadrado. Tenemos que recordar que HTML fue creado por científicos del CERN, y por lo general, no son el tipo de personas más divertidas (aunque son exactamente los mismos científicos que [decubrieron el Bosón de Higgs](https://www.youtube.com/watch?v=0CugLD9HF94); y por eso hay que alabarlos hasta nuestra muerte). Sin embargo, HTML todavía es feo, y es feo porque fue creado para un propósito diferente al que HTML cumple hoy.

![what is css](../../assets/images/6891485c-2a5a-4722-a7dc-f108993c18ba.jpeg)

Pero… El internet es mas hermoso que eso. La cosa se puso seria cuando Internet empezó a hacerse más y más popular. Dejó de ser utilizado únicamente por la comunidad científica y el ejército, **¡comenzó a ser adoptado por todo el mundo!**

Irónicamente, los mismos científicos de CERN que crearon HTML, tuvieron que ponerse a pensar en cómo mejorar lo que habían hecho y se dieron a la tarea de embellecerlo. En este momento fue cuando [Håkon Wium Lie](https://en.wikipedia.org/wiki/H%C3%A5kon_Wium_Lie), propuso la primera versión de CSS en 1994, que luego fue adaptado hasta convertirse en CSS1.

## Entonces, ¿qué hace CSS? y ¿para qué sirve?

![what is css](../../assets/images/8c9fea86-c56c-486f-8b64-4322338076f7.jpeg)

La principal razón por la que se creó fue para aplicar estilos a los documentos de HTML. La idea es que puedas decirle al navegador cómo debe visualizar un documento HTML: cómo deben verse sus tagas, colores, márgenes, tipografía, iconos, bordes, etc. Incluso puedes redefinir a tu antojo los comportamientos originales de esas etiquetas ya existentes. Ej:

```html
Puedes decirle a un <h1> que se vea igualito que un <h2> sin que el usuario se de cuenta de que, a simple vista, son distintos.
```

> :point_up: Para entender el potencial de CSS, [haz clic aquí para ver un live demo!](http://assets.breatheco.de/live-demos/css/bootstrap/)

¡Puedes imaginar el potencial? ¡Puedes hacer que casi todo se vea diferente!

## ¿Cómo aplico estilos a un HTML?

Sencillo, Debes escribir tus estilos con una sintaxis especial denominada "CSS" y guardar el documento con la extensión CSS. Luego, aplica los estilos al documento usando los tags `<enlace>` o `<estilo>`.

Vamos a repasar estos tags con más detalle:

|**Nombre**   |**Etiqueta**   |**Descripción**   |
|:----------|:-------------|:------------------|
|Link       |link          |Tiene como finalidad enlazar a la página con hojas de estilos CSS. Para utilizarla debes especificar tres propiedades dentro de la etiqueta `pyton>rel="stylesheet" type="text/css"` y por último `href="with document route css"`<br>`link rel="stylesheet" type="text/css" href="theme.css">`   |
|Style   |style   |Si no queremos o no podemos importar una hoja de estilo CSS, tenemos la posibilidad de definir estilos en el HEAD del documento HTML. Simplemente definimos el tag style y procedemos a escribir los estilos que queremos para las etiquetas.<br>`<style>`<br>`h1 {color:red;}`<br>`p {color:blue;}`<br>`</style>`   |

> :point_up: Asi como los documentos HTML terminan con la extensión .html, los documentos CSS (las hojas de estilo) terminan con la extensión `.css`.

## Sintaxis de CSS

La sintaxis de CSS no tiene absolutamente nada que ver con la sintaxis de HTML, es su propio lenguaje de programación específico. ¡CSS no utiliza tags! Para trabajar un sitio web tienes que cambiar el switch en tu mente a menudo, porque trabajarás con varios lenguajes a la vez y cada uno tiene su propia sintaxis.

![aprende CSS](../../assets/images/4a25cfd5-e8ab-4abb-b4f8-148d376b3f3d.gif)

Una hoja de estilos CSS es una gran lista de definiciones de estilos para cada elemento HTML. Primero debes especificar a que elemento - o grupo de elementos - le vas a colocar estilos, a eso se le denomina SELECTOR. Luego, colocas una llave `{` para indicar que vas a empezar a definir cada propiedad y su respectivo valor, y finalizas cerrando con otra llave `}`. Siempre debes terminar cada definición de propiedad con un punto y coma `;`.

Revisa la animación para entenderlo mejor.

> :point_up: Los espacios son ignorados, pero puedes utilizarlos para hacer más legible tu código.


El siguiente ejemplo, es una hoja de estilos que define 3 grupos diferentes de estilos (selector1, selector2, selector3); y cada uno de estos grupos se le han aplicado diferentes reglas como: color, tamaño de letra y color de fondo.

Debes hacer coincidir los elementos HTML con los grupos de estilos y usar "selectors" para vincular los elementos HTML a los grupos de reglas CSS.

```css
#selector1 {
   color: red;
   font-size: 12px;
}
.selector2 {
   color: blue;
   background: green;
}
selector3 
{
   font-size: 15px;
}
```

## Pero, ¿qué es un “selector”?

Un selector es una manera de referirse o identificar uno o varios elementos de HTML. Por ejemplo, si quieres cambiar el color de una página web a rojo debes hacerlo de la siguiente manera:

```css
body {
    color: red;
}
```

También puedes cambiar el color de un sólo `<a>`. Para hacer esto, debes definir la propiedad de `clase` o un `id` del tag HTML que define ese link en particular `<a id="anchor1">`. Las clases se usan más que los IDs debido a que las clases son reutilizables y los IDs se usan más en Javascript. Una vez que ese tag tenga un clase, entonces puedes ir a tu hoja de estilos y definir un `color` de la siguiente manera:

```css
#anchor1{
   color: red;
}
```
Las siguiente tablas contienen una lista de todos los posibles selectores disponibles en CSS. Toma tu tiempo y revísalas con calma. Tu comprensión aquí es clave para continuar con CSS, ya que necesitas comprender todos los estilos posibles que puedes aplicar a un documento HTML:

### Selector por ID

|**Selector**   |**Descripción**   |**Ejemplo**   |
|:--------------|:-----------------|:-------------|
|#element_id    |Permite aplicarle estilos a un elemento en particular.   |`#element_id { color: red; }`   |

Asignemos "first" como ID de la primera celda en la siguiente tabla, y luego con CSS especificaremos que el ID "first" debe tener un fondo amarillo:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/1b78wna2/8/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<div align="right"><small><a href="//jsfiddle.net/BreatheCode/1b78wna2/8/embedded/html,css,result/">Haz clic aquí para abrir el demo en una nueva ventana</a></small></div>


### Selector class (por Clase)

|**Selector**   |**Descripción**   |**Ejemplo**   |
|:-------------|:-----------------|:-------------|
|.classname   |Existe un propiedad en HTML que se llama "class" y permite agrupar diferentes etiquetas en un grupo lógico. En CSS se puede utilizar `.` (punto) para seleccionar todos los elementos que usen esa clase para seleccionar todos los elementos html con el propiedad de esa clase.   |`.classname { color: #BDBDBD; }`   |

En el siguiente ejemplo le estamos aplicando una clase "odd" a las celdas impares de esta tabla, y luego con CSS le asignamos el fondo amarillo a la clase .odd:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/rdLkmx1t/11/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### Selector por Tag

|**Selector**   |**Descripción**   |**Ejemplo**   |
|:--------------|:-----------------|:-------------|
|Tipo de Elemento (tag)   |Permite aplicar estilos a los links, títulos, etc. En el siguiente ejemplo cambiaremos el color de texto a todos los tag links `<a>` de la página.   |`a{ color: #BDBDBD; }`   |

En el siguiente ejemplo vamos a colocar fondo verde a todos los td (celdas) de la tabla:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/y89Lgwb0/11/embedded/html,css,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### Multiselector

|**Selector**   |**Descripción**   |**Ejemplo**  |
|:--------------|:-----------------|:-------------|
|selector1,selector2   |Si separas varios selectores por coma `,`, puedes asignar múltiples selectores a la vez para ahorrar texto. En el siguiente ejemplo le decimos a todos los **h1** y a los elementos de clase **.odd**, que queremos su texto de color rojo.  |`h1, .odd{ color: #BDBDBD; }`   |

### Selectores avanzados

Con estas 4 maneras de seleccionar vas a cubrir el 99% de tus necesidades, lo importante es tomarte el tiempo para planificar tus hojas de estilos.

Hay otros selectores más específicos y avanzados. Probablemente lo usarás cuando estés realizando creando algo más desafiante.

## Conflictos y herencia

¿Qué pasa si un elemento de la página está seleccionado por dos selectores y tiene asignado el color de letra verde en una definición y rojo en la otra? Es decir, si le decimos al navegador dos colores diferentes, ¿qué color utilizará al final?

![Aprende CSS](../../assets/images/08e78606-102f-4bc2-a066-7c26ae9400d5.png)

Tienes que entender muy bien la jerarquía de CSS para comprender como los elementos **heredan, sobre escriben y hasta anulan estilos entre ellos.**

El navegador le da prioridad a los selectores más específicos, como al `#id`, que a los selectores generales, como los tags. En el siguiente ejemplo, cambiamos el color de todos los  `<li>`  (los elementos de la lista) a azul, y luego cambiamos el texto del segundo elemento a color rojo. De esta manera demostramos que el selector ID siempre prevalece por encima de los otros elementos, esto se debe a que pertenecen al  mismo tag.

## Propiedades

Ya vimos que una hoja de estilos CSS no es más que una lista que define las propiedades que queremos asignar a los diferentes elementos de la página. Ahora veremos cuáles podemos asignar a estos elementos.

Hay cientos - sino miles - de propiedades, pero dependiendo del tipo de elemento/etiqueta que queremos definir, sabremos en cuáles debemos enfocarnos.

#### Editor de tipografía

|Propiedad   |Descripción   |Valores   |
|:----------|:-------------|:----------|
|[font-family](http://www.mclibre.org/consultar/htmlcss/css/css-fuente.html#font-family)   |tipo de letra (fuente) | [ nombre-fuente \| familia-genérica ]*   |
|[font-size](http://www.mclibre.org/consultar/htmlcss/css/css-fuente.html#font-size)   |tamaño de letra   | tamaño-absoluto \| tamaño-relativo \| distancia \| porcentaje   |
|[font-style](http://www.mclibre.org/consultar/htmlcss/css/css-fuente.html#font-style)   |inclinación (italics)   |normal \| itálica \| oblicuo   |

#### Editor de texto

|Propiedad   |Descripción   |Valores   |
|:----------|:-------------|:-----------|
|[color](http://www.mclibre.org/consultar/htmlcss/css/css-texto.html#color)   |color del texto   |color   |
|[letter-spacing](http://www.mclibre.org/consultar/htmlcss/css/css-texto.html#letter-spacing)   |espacio entre caracteres  |normal \| distancia   |
|[line-height](http://www.mclibre.org/consultar/htmlcss/css/css-fuente.html#line-height)   |espacio entre líneas  |normal \| número \| distancia \| porcentaje   |
|[text-align](http://www.mclibre.org/consultar/htmlcss/css/css-texto.html#text-align)   |alineación del texto |centrado \| justificado \| izquierda \| derecha |
|[text-decoration](http://www.mclibre.org/consultar/htmlcss/css/css-texto.html#text-decoration)   |decoración del texto  |ninguno \| blink \| línea directa \| ínea superior \| subrayar   |
|[text-transform](http://www.mclibre.org/consultar/htmlcss/css/css-texto.html#text-transform)   |mayúsculas / minúsculas   | ninguno \| capitalizar \| minúsculas \| mayúscula   |

#### Editor de listas 

|Propiedad   |Descripción   |Valores   |
|:-----------|:-------------|:--------|
|[list-style](http://www.mclibre.org/consultar/htmlcss/css/css-listas.html#list-style)   |propiedad compuesta (suma de toda combinación de propiedades)   |imagen-estilo-lista\|\| posición-estilo-lista \|\| tipo-estilo-lista   |
|[list-style-image](http://www.mclibre.org/consultar/htmlcss/css/css-listas.html#list-style-image)   |imagen del marcador  |ninguno \| uri   |
|[list-style-position](http://www.mclibre.org/consultar/htmlcss/css/css-listas.html#list-style-position)   |posición del marcador |dentro \| fuera  |
|[list-style-type](http://www.mclibre.org/consultar/htmlcss/css/css-listas.html#list-style-type)  |tipo de marcador |ninguno \| círculo \| disco \| cuadrado \| decimal \| decimal-primero-cero \| alfa inferior \| alfa-superior \| bajo griego \| latín inferior \| latín superior \| bajo-romano \| alto-romano \| armenio \| georgiano \| hebreo(-) \| cjk-ideográfico(-) \| hiragana (-) \| katakana (-) \| hiragana-iroha(-) \| katakana-iroha(-)  |

#### Editor de tablas

|Propiedad  |Descripción   |Valores   |
|:----------|:-------------|:-----------|
|[border-collapse](http://www.mclibre.org/consultar/htmlcss/css/css-tablas.html#border-collapse)   |modo borde |collapse \| separar  |
|[border-spacing](http://www.mclibre.org/consultar/htmlcss/css/css-tablas.html#border-spacing)   |separación entre celdas |distancia \| distancia   |
[caption-side](http://www.mclibre.org/consultar/htmlcss/css/css-tablas.html#caption-side)   |posición de la leyenda   |arriba \| abajo \| izquierda(-) \| derecha(-)   |
|[empty-cells](http://www.mclibre.org/consultar/htmlcss/css/css-tablas.html#empty-cells)   |borde de casillas vacías   |	esconder \| mostrar   |
|[table-layout](http://www.mclibre.org/consultar/htmlcss/css/css-tablas.html#table-layout)   |algoritmo ancho de tabla   |automático \| fijado   |

#### Editor de fondos (background) 

|Propiedad   |Descripción   |Valores   |
|:----------|:-------------|:----------|
|[background-color](http://www.mclibre.org/consultar/htmlcss/css/css-fondos.html#background-color)   |color de fondo   |transparente | color   |
|[background-image](http://www.mclibre.org/consultar/htmlcss/css/css-fondos.html#background-image)   |imagen de fondo  |ninguno \| uri   |
|[background-position](http://www.mclibre.org/consultar/htmlcss/css/css-fondos.html#background-position)   |posición de la imagen de fondo   |\[ \[ izquierda \| centro \| derecha \| distancia \| porcentaje] [ subir \| centro \| abajo \| distancia \| porcentaje] \]? \| [ [ izquierda \| centro \| derecha] \|\| [ arriba \| centro \| abajo ] ]   |
|[background-repeat](http://www.mclibre.org/consultar/htmlcss/css/css-fondos.html#background-repeat)  |repetición de la imagen de fondo   |sin repetición \| repetir \| repetir-x \| repetir-y \| espacio(3) \| ronda(3)  |
|[background-size(3)](http://www.mclibre.org/consultar/htmlcss/css/css-fondos.html#background-size)   |tamaño de la imagen de fondo   |automático \| [ distancia \| porcentaje ] {2} \| contener \| cubrir   |

> 💡 Sugerencia:

 + [Sigue este enlace para ver una lista detallada de las propiedades CSS de W3Schools](https://www.w3schools.com/cssref)