---
title: "Depurando codigo HTML"
subtitle: "Depurando codigo mas rápido y mas eficiente. Ahorra mas del 50% de tu tiempo de depuración al codificar HTML."
tags: ["debugging", "web development", "html/css"]

--- 

## Depuración de codigo HTML

El codigo HTML es difícil de depurar inicialmente, pero es fácil de comprender si sigues esta receta. Solo necesitas conocer 2-3 cosas antes de comenzar a codificar o depurar en HTML que te harán un maestro. Sí, es tan fácil, así que no te preocupes y sigue leyendo.

Si estás interesado en depurar otros lenguajes o tecnologías, aquí está nuestra guía completa sobre [qué es la depuración](https://4geeks.com/es/lesson/que-es-depurar-codigo) y cómo convertirse en un maestro de la depuración al desarrollar front-end y back-end.

## Prevención de errores

Esta guía trata de solucionar un error, pero vale pena mencionar cómo prevenir la mayoría de los errores al principio:
+ **ABC = Always Be Closing** (siempre cierra) los tags como prioridad. Si abres un tag `<p>`, ¡ciérralo! Así: `<p></p>`, y luego procede a llenar el contenido HTML interno.
+ **Usa un formateador de codigo** que indente tu codigo automaticamente. La mayoría de los errores al principio surgen porque tu codigo es desordenado y desafiante de seguir con tus ojos. Terminas abriendo/cerrando tags en el lugar equivocado.

## Tres herramientas de depuración para HTML

Las herramientas de depuración mas efectivas para HTML son:
1. El codigo fuente HTML de tu página como lo ve el navegador.
2. Las herramientas de inspección del desarrollador.
3. Tu editor de codigo (VSCode, JetBrains, etc.).

Vamos a repasar cada uno de ellos en detalle.

### 1) Inspeccionar el codigo fuente HTML

Puedes asumir que el codigo que escribiste es el que se muestra en el sitio web. ¡NOPE! Hay varias razones por las que tu codigo original puede no coincidir con el codigo fuente que se usa en el sitio web.
Nunca viene mal revisarlo varias veces.

+ Caché del navegador (la causa mas común): A veces, tu navegador mantiene una versión antigua a propósito.
+ Renderización dinámica del lado del servidor: Usar un lenguaje del lado del servidor para manipular el codigo fuente antes de que llegue al navegador.
+ Configuración del servidor: El servidor puede eliminar o agregar algunas líneas adicionales de codigo.

#### ¿Qué es el caché del navegador?

A veces el navegador usará una versión antigua del codigo (la memoria caché). Esto se llama: `Caché del navegador`. El almacenamiento en caché puede ser una fuente común de confusión para los desarrolladores principiantes, lo que lleva a que los cambios no aparezcan en el sitio web como se esperaba.

![Memoria caché](https://storage.googleapis.com/media-breathecode/c554b1b12abd3b8e7392151ceb31ed2f367e673e99f890e0a7c70ea4df7f68ad)

Errores de caché: Debes asegurarte de que el codigo que escribiste sea el mismo codigo que se renderiza en tu sitio web.

> Asegúrate de deshabilitar la caché del navegador en las herramientas de desarrollo, ademas, acostúmbrate a mantener la tecla `shift` al actualizar un sitio web durante el desarrollo.

#### Cómo inspeccionar el codigo fuente HTML:

+ En Windows, abre el codigo fuente presionando simultáneamente las teclas `Ctrl` + `U`.
+ En Mac, abre el codigo fuente presionando simultáneamente las teclas `⌥ Option` + `⌘ Command` + `U`.

### 2) Inspector de herramientas de desarrollo

Todos los principales navegadores tienen herramientas de desarrollo, la primera pestaña en las herramientas de desarrollo se llama "Elementos" y contiene -casi- todo lo que necesitas para solucionar tus errores.

![inspector de codigo HTML](https://i.imgur.com/Fca0Hkm.gif?raw=true)

El inspector de herramientas de desarrollo muestra una **versión en vivo** de tu codigo en lugar de tu codigo fuente original. Esta "versión en vivo" se llama "DOM". Es lo que el navegador pudo interpretar de tu codigo. Estos son algunos casos que hacen que el inspector sea excelente:

+ **Si tu sitio web no se ve como lo habías planeado**: Usa el menú del botón derecho del mouse y busca la opción "inspeccionar". Mostrará los elementos HTML que el navegador creó alrededor de esa área.
+ **Si has escrito codigo HTML incorrecto**: El navegador intentará corregirlo para que se muestre correctamente, pero esto solo a veces dará como resultado el diseño deseado. Cuando utilices el inspector de herramientas de desarrollo, verás el codigo HTML que el navegador interpreta, que puede ser diferente del codigo fuente original si el navegador ha realizado algunas correcciones.

<details>
 <summary>Nota: Hay otros ejemplos mas avanzados donde el Inspector HTML no coincidirá con tu codigo fuente; puedes abrir estos detalles para leer mas sobre ellos.</summary>

+ Minificación: A veces, los sitios web comprimen y optimizan el codigo para tiempos de carga mas rápidos. El inspector HTML mostrará el codigo minificado, que puede ser difícil de leer.

+ Extensiones del navegador: Los bloqueadores de anuncios o bloqueadores de scripts modifican el codigo mostrado en el inspector HTML. 

+ Renderizado del lado del servidor: el inspector HTML mostrará el codigo renderizado en el servidor en lugar del codigo fuente.
</details>

### 3) Depuración de HTML dentro de tu Editor de Código (IDE)

La última herramienta de depuración crucial para HTML es su IDE o editor de codigo. La mayoría de los IDE ofrecen las siguientes características:
+ **Resaltado de sintaxis**: Los colores ayudan a distinguir visualmente diferentes partes del codigo HTML, como tags, atributos y valores, lo que facilita la identificación de errores.
+ **Linting**: Algunos editores tienen linter incorporados que pueden verificar tu codigo HTML para errores y problemas potenciales y resaltarlos en el editor.
+ **Validación**: Algunos editores pueden validar tu codigo HTML contra los estándares de W3C y mostrar mensajes de error si hay algún problema.

## Errores HTML mas comunes y cómo depurarlos

### Tags sin cerrar

Si un tag no se cierra correctamente. Por ejemplo, si olvidas cerrar un tag `<div>`: El editor de codigo podría resaltar todo el bloque de codigo que sigue al tag sin cerrar en rojo. También puedes ver el error en el terminal si usas complementos como [prettier](https://prettier.io/). Si haces clic en un tag de apertura, el editor también resaltará el tag de cierre.

![cómo aparecen los errores de tags no cerrados](https://i.imgur.com/oJEe61z.png?raw=true)

### Comillas sin cerrar

Los tags HTML tienen atributos, por ejemplo, el tag `<img>` tiene el atributo `src`: `<img src="https://domain.com/something" />`. Desafortunadamente, a veces cometemos errores al abrir o cerrar esos tags.

Para encontrar esos errores: la mejor herramienta es el resaltador de sintaxis. Mostrará un color extraño; mira esta imagen para una mejor comprensión.

![cómo se ven las comillas faltantes en tu resaltador de sintaxis](https://i.imgur.com/JzNqq1W.png?raw=true)

### URL errónea en tag de `<link>` o `<script>`

Esto es divertido porque todos cometemos este error, yo lo hice, tú lo hiciste o lo harás, todos los demas lo hicieron o lo harán.

Cuando vinculas tu HTML a una hoja de estilos CSS o un archivo JavaScript separado, puedes escribir la URL incorrecta y tu hoja de estilos no se cargará.

¿Cómo sabes que enlazaste mal la URL? La consola del inspector de herramientas de desarrollo mostrará un error 404 como este (mira la imagen a continuación):

![error al cargar la hoja de estilos en tu sitio web](https://github.com/breatheco-de/content/blob/master/src/assets/images/wrong-stylesheet-404.png?raw=true)

> **Nota**: Aquí se muestra la URL que usó para recuperar tu hoja de estilos; verifica que la URL esté bien.
