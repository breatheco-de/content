---
title: "Que es HTML? Es tiempo de aprender HTML y su estructura"
subtitle: "Pero realmente que es HTML ? HTML es para las paginas web lo que son las columnas para los edificios. 

Aqui aprenderás lo básico de HTML - la base de la web."

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2018-10-31"
tags: ["fale"]
---

[[info]]
| :point_up: Si en el capítulo anterior decíamos que las casas, tiendas y edificios son páginas web, entonces el código HTML sería los planos del edificio.


# **HTML es el Esqueleto**
***

Todas las páginas web tienen HTML, es la estructura base de TODO. Imagínatelo como el esqueleto de una página o como las columnas de una construcción.

HTML te obliga a hacer una división parecida a las partes básicas de un documento: cabecera, título, contenido, pie de página, subtitulo, etc. Luego con CSS podrás hacer la página hermosa y con JavaScript la harás interactiva.

HTML era lo único que sabían interpretar los navegadores originalmente, las páginas web eran sencillas y no conocían CSS o JavaScript.  Un sitio web era un simple documento de texto plano con los elementos típicos que cualquier documento de Word tiene: títulos, listas de viñetas, párrafos, etc.

![what is html](https://ucarecdn.com/85cedee2-3a9f-49b5-8bc8-d72e3fd739fc/-/resize/600x/)


# **Sintáxis del HTML: Todo es `<Tags>`.**
***
![what is html](https://ucarecdn.com/78296f64-547f-4928-a8da-14cb24e836b9/)



¿Recuerdas que Internet trabaja con puro texto?

En ese sentido, HTML es un lenguaje que utiliza `<tags>` para representar los elementos que debe contener el sitio web. Una etiqueta no es más que una palabra que comienza y termina con los caracteres `<` y `>` respectivamente.


Todas las etiquetas deben abrirse y cerrarse. Para cerrarlas, colocas la misma palabra pero utilizando el símbolo `/`.

# **Atributos**
***
Una vez definida la  `<tag>`, podemos describir con más detalle su comportamiento asignándole atributos a esas  `<tags>`.  Por ejemplo, si queremos que nuestro documento/página HTML tenga un link a otra página, utilizamos la etiqueta `<a>` y le asignamos un atributo llamado **href**, que permite especificar el URL de la otra página a la que queremos hacer el enlace.

```html
<a href="google.com">Click here and it will take you to Google.com</a>
```



En teoría,tu debes utilizar [una de estas tags](https://breatheco.de/en/lesson-asset/html5-cheat-sheet/), no puedes inventar tus propias etiquetas porque el navegador no sabría cómo interpretarlas. Sí, debes **aprender qué hace cada tag** para utilizarlas sabiamente… ¡pero no te preocupes que no hay muchas! 🙂

Para el titular o título más grande se utiliza la etiqueta `<h1>`. Por ejemplo: una tienda en línea podría tener una sección para la categoría de electrónicos, en ese caso un título coherente seria “Artículos Electrónicos” y la tag  `<h1>` lo escribimos de la siguiente manera:


```html
 <h1>Artículos Electrónicos</h1>
```


##### **Tags Anidadas** :
Por último, es importante que una tag pueda tener una o más tags en su contenido.  Por ejemplo, si quisiéramos darle un estilo en cursiva a la palabra “electrónicos” debemos acompañar esa palabra con la etiqueta `<i>`:

```html
 <h1>Artículos<i>Electronic</i> Tags</h1>
```

 ## Espacios en Blanco y Saltos de Linea
 ***
 Los espacios en blanco y los saltos de línea son ignorados por el navegador al momento de interpretar el texto. Si escribimos cinco espacios en blanco seguidos o uno solo, el navegador lo interpretará de la misma manera. Si queremos un salto de linea, debemos usar el tag `<br>`.  Si queremos mas "espacio" necesitamos insertar un `&nbsp;` por cada espacio en blanco (si, sabemos que es raro, pero es así).
 
**Estas tres alternativas se van a ver iguales (espacios y saltos de lineas van a ser ignorados):**
```html
<tag>Hello</tag><tag>World</tag>
```
```html
<tag>Hello</tag>
<tag>World</tag>
```

```html
<tag>Hello</tag>               <tag>World</tag>
```


# **Estructura de Página**
***
Todas las páginas deben empezar con la declaración del  `<DOCTYPE! Html>`, luego estar seguidas del `<HEAD>` y por último del `<BODY>`. Estas tags **obligatoriamente** contienen otras tags dentro de ellas que son anidadas, y eso es así porque separan la página en dos pedazos principales: el HEAD y el BODY:


```html{numberLines: true}
<! –- Siempre debemos empezar con una tag HTML para demostrarle al navegador que este es un documento en formato HTML. — >
<!DOCTYPE html>
<html>
   <head>
   <! — Dentro de la tag head vamos a definir todo lo que el navegador necesita ANTES de empezar a interpretar la página. –>
   </head>
   <body>
   <!–Dentro de la tag body vamos a definir el contenido real de la pagina.–>
   </body>
</html>
```

Vamos a simular el pensamiento de un navegador: Imaginemos que un usuario en su navegador (lado del cliente) está solicitando visualizar la página web: “breatheco.de”

+ El servidor abrirá un archivo HTML por defecto en el servidor, el cual probablemente sea: index.html.
+ Luego, leerá el contenido e interpretará como un HTML (porque la extension del archivo es index.html).
+ El usuario no vera el texto que contiene el archivo, en cambio verá una interpretacion visual del texto.
  
 Como ya sabemos, dicha página va a contener MÍNIMO los siguientes tags:

  ![learn html](https://ucarecdn.com/e8d3d49d-8c7e-4bc2-88e0-15b95a8ccc54/-/resize/400x/)

|**Nombre**   |**Tags**   |**Descripción**   |
|:----------|:----------|:-----------------|
|HTML       |`<html>`   |Debemos empezar aclarándole al navegador que esto es un documento HTML. También podemos especificar la versión de HTML que estamos utilizando.   |
|Head       |`<head>`   |Todo lo que esté dentro del HEAD en realidad no se va a visualizar en el documento. Es la parte de la página en donde le dices al navegador en qué idioma está hecha la página, de qué se trata, cargas las fuentes (font type) necesarias, defines el icono que va a tener la pestaña en el navegador y muchas otras cosas realmente importantes.   |
|Body       |`<body>`   |Aquí vas a colocar todo el contenido del documento.<br>Si esto fuera MS Word, el body marcaría el inicio de tu página, la línea uno del texto del documento.

# **El \<HEAD\> es como el Sobre de una Carta.**
***
Leemos el sobre de una carta para conocer información sobre la carta en si misma, no sobre el contenido. En el sobre puedes enterarte de quién la escribió, en que idioma está, de dónde viene, etc.

En el caso de HTML, la cabecera `<head>` puede contener los siguientes tags (entre otros menos importantes):

|**Nombre**   |**Tag**   |**Descripción**   |
|:----------|:---------|:-----------------|
|Title      |`<title>`   |El título aparece en la ventana del navegador, también es utilizado cuando compartes la página en las redes sociales: Facebook, Twitter, Instagram, etc. Todas esas redes utilizan el título de la página como texto por defecto para compartir cuando algún usuario copia el URL de tu página en su muro. Por último, es fundamental para SEO (Optimización para buscadores), ya que, Google le da mucha importancia dentro del contenido.   |
|Meta       |`<meta>`   |Las etiquetas meta describen al documento. Se utilizan para especificar cosas como: autor, título, fecha, palabras clave, descripción, etc. Los buscadores aman las meta etiquetas porque les permite entender mejor el contenido antes de leerlo.   |
|Link       |`<link>`   |Tiene como finalidad enlazar a la página con hojas de estilos CSS. Cuando veamos el capítulo de CSS, aprenderemos a crear hojas de estilos y podremos importarlas utilizando esta etiqueta.   |
|Style      |`<style>`   |Si no queremos o no podemos importar una hoja de estilo CSS, también tenemos la posibilidad de definir estilos en el propio documento HTML dentro de este tag. Es una práctica que no recomendamos en casi ningún escenario, solo deberías usarla cuando te veas obligado.   |
|Script     |`<script>`   |Se utiliza para agregar código JavaScript a la página. Todo el código JavaScript debe estar siempre contenido dentro de estas etiquetas que también se puede utilizar en el BODY si así lo deseamos. La diferencia es que cualquier código JavaScript que coloquemos en una etiqueta style ubicada en el body, no estará disponible al momento de iniciar la ejecución de la página (justo en eso es que nos ayuda el HEAD).   |

# **El \<body\> es Similar a cualquier Documento de MS Word**

Ok, ahora que conocimos la estructura general y obligatoria de la página, vamos a revisar cuáles son los tags que podemos y debemos utilizar para definir el contenido de la misma. 

Recuerda -por quinceava vez- que una página web es un…. ¡documento! Así es, si pensaste la respuesta antes de leerla… ¡estás entendiendo! y si no es así pues no te preocupes, que no conozco a la primera persona que haya entendido HTML y CSS rápidamente ;).

Veamos ahora como se compara un website a un documento de word:

<before-after width="500px" before="https://ucarecdn.com/f2021d8d-193d-4482-b189-ae0005b1bd88/" after="https://ucarecdn.com/8e339149-97ae-4b15-ba59-a3ddf3777525/" /></before-after>

Las tags mas utilizadas dentro del `<body>` de un documento HTML son las siguientes:

|**Nombre**   |**Tags**   |**Descripción**   |
|:----------|:----------|:-----------------|
| Head       |H1, H2, H3, etc.   |Define los títulos y subtítulos de la página (todos menos el título principal que se define con la etiqueta title).<br> `<h1>This is a heading</h1>`   |
|Párrafo   |P   |Esta etiqueta separa el texto que contiene con un margen superior e inferior. De esta manera simula exactamente el comportamiento de un párrafo en un documento.`<p>example of a paragraph</p>`   |
|Lista   |UL, OL   |Las listas son fundamentales en un documento, en el caso de HTML tenemos dos tags que podemos usar para listar contenido:<br><br> <li>OL: Que nos da una lista numerada (pone numeritos delante).</li><br><li>UL: Que nos da una lista sin números (pone puntos por delante).<br><br>`<ol>`<br>`<li>Element 1</li>`<br>`<li>Element 2</li>`<br>`</ol>`   |
|Imagen  |img   |Nos permite agregar imágenes al documento, pueden ser imágenes PNG, JPEG, GIF y SVG principalmente .<br>`<img src="url of the image"/>`
|Link (Anchor)   |a   |A veces queremos conectar una o mas páginas entre ellas, enviar al usuario a otra página para continuar con el flujo o incluso poder enviarlo a otra sección del mismo documento (tal como ocurre en el menú de este curso). Para eso está la tag “Anchor”.<br>`<a href="url to resend">this is a heading</a>`   |
|Negrita   |strong o b   |Para resaltar un texto en negritas.<br>`<strong>this is a heading</strong>`   |
|Cursiva   |i   |Para colocar un texto en formato cursiva. <br>`<i>this is a heading</i>`   |
|Salto de Linea  |br   | 	Para saltar el texto o contenido a la línea siguiente (similar al `shift+enter` en MS Word.)<br>`<br></br>`   |
|Tablas   |table   |Las tablas fueron diseñadas para presentar datos de una forma legible y coherente. Tienen una cabecera (th), filas (tr) y columnas (td).<br><br>`<table>`<br>`<tr><th>Column 1</th><th>Column 2</th></tr>`<br>`<tr><td>Data 1</td><td>Data A</td></tr>`<br>`<tr><td>Data 2</td><td>Data B</td></tr><br>`<br>`<tr><td>Data 3</td><td>Data C</td></tr>`<br>`</table>`   |

[[info]]
|:link: [Click aquí](https://www.w3schools.com/tags/ref_byfunc.asp), para más HTML tags

# **Los Atributos (Propiedades)**
***
Ya sabemos que cada  `<tag>` hace que el contenido se visualice de una manera diferente. Gracias a ellas podemos cambiar el tamaño de la letra - como ocurre con los headings - agregar márgenes entre párrafos, enumerar elementos, etc.

Si quieres modificar o especificar más como debe ser el comportamiento de un tag en particular, puedes utilizar sus atributos. Para colocárselos debes hacerlo de la siguiente manera:
```html
<img src="http://www.mydomain.com/myimage.png" />
```


En este caso, estamos asignándole a la etiqueta `<img>` la propiedad "src" que indica cual es la ruta de la imagen que debe visualizarse en este contenedor.

Cada etiqueta tiene sus propiedades -no tienes que memorizarlas, siempre las conseguirás rápidamente en Internet- pero si es bueno que revises las más importantes para que las tengas a disposición en tu mente.

Por eso hemos creado una serie de ejercicios que te explicarán mejor cada una de las propiedades importantes de los elementos más utilizados de HTML.

## Aplausos, Ya sabes HTML!!!
***
Estamos Orgullosos!!! 🙂

Acabas de aprender lo esencial para realizar una página web como se hacía en 1999. Ahora tenemos unas pocas semanas mas para ponerte al día con todo lo demás estos últimos 20 años.  ¡Ya puedes decir que sabes hacer un website!

HTML tiene muchísimos mas tags y también tiene una nueva versión llamada HTML5. Otra vez, no te preocupes, todo eso lo **aprenderás** en las próximas lecciones para que hagas páginas web hermosas (gracias a CSS) y con interacción (Gracias a los formularios y JavaScript). Para eso es que estamos acá!!
![learn html](https://ucarecdn.com/ed1c57e1-5c67-4bf1-96ed-1fb2353fb2ca/-/resize/200x/)

