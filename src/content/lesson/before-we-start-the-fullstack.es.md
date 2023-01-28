---
title: "Antes de comenzar el desarrollo Full Stack"
subtitle: "Repaso rápido sobre conceptos que necesitas saber en CSS, HTML y JS antes de iniciar el curso de Desarrollo Full Stack"
tags: ["html/css", "web-development"]

---

Para aprovechar mejor el próximo curso, te alentamos a que termines y revises cualquier contenido del Prework.

El próximo material asume que tiene un buen nivel de comprensión de los siguientes temas:

## Cosas que debes saber sobre HTML/CSS

- ¿Qué es HTML y para qué sirve?
- Los tags más esenciales como encabezados (`<h1>,<h2>,<h3>`...), párrafos (`<p>`), listas ordenadas/no ordenadas, etc. Piensa en cómo cada uno de estos tags cambia el `look and feel` y el comportamiento de tu sitio web. Por ejemplo, ¿qué parece más grande h1 o h2? ¿Por qué usar `<ul>` en lugar de `<ol>`? Etc.
- Cómo incluir una hoja de estilo CSS separada en el sitio web usando el tag `<link>`.
- Cómo anular o mejorar el aspecto y el comportamiento de los tags HTML mediante el uso de selectores y reglas de CSS, por ejemplo:
  - ¿Cómo puedo seleccionar un elemento para actualizar sus estilos? [Usando un selector](https://4geeks.com/lesson/what-is-css-learn-css#wait-what-is-a-selector).
  - Lo más sencillo como cambiar el color del texto y manipular las fuentes (tamaño, familia, etc).
  - Cambiar el color o la imagen de fondo del elemento.
- Comprende completamente el tag `<div>` que inherentemente se comporta como un "box" (lo que significa que tiene bordes, ancho y alto) y cómo usar `<div>` para separar visualmente su contenido.
- Cómo crear los layouts de sitios web más comunes utilizando la regla CSS `display: flex;`.
  - ¿Cómo puedes hacer que un `<div>` esté del lado de otro? Aplicando `display: flex.` a un padre inmediato común.
  - ¿Cómo se puede hacer un layout de barra lateral?
  - ¿Cómo se puede hacer el clásico layout de "línea de tiempo de Instagram"?

## Cosas que debes saber sobre CSS

- ¿Qué es CSS y para qué sirve? Gracias a CSS, podemos seleccionar elementos específicos en el HTML y diseñarlos con colores, etc.
- ¿Por qué se desaconseja el uso del selector `#id`? Debido a que es demasiado específico, va en contra de la reutilización.
- ¿Cuándo debo usar el selector `#id`? Nunca, usaremos `#id`s solo cuando codifiquemos en javascript.
- ¿Por qué se supone que las hojas de estilo se escriben desde los estilos más genéricos hasta los más específicos? Debido a que escribirá muchas menos líneas de código de esa manera, también evitará muchos errores o peleas entre sus selectores.

## Cosas que debes saber sobre programación

- ¿Qué es "la consola" o "terminal"? Para un desarrollador web, suele ser el lugar para obtener información sobre su código; le permite "imprimir" y mostrar el contenido de las variables para que pueda depurar su código. Los desarrolladores usan la consola todo el día, todo el tiempo.
- ¿Cómo puedo imprimir algo en el inspector de desarrolladores (también conocido como la consola)? Al escribir `console.log();`
- ¿Cómo puedo imprimir el valor de una variable? `console.log(yourVariableName);`
- ¿Qué es una variable y cómo almacenar valores en ella? `let age = 2;`
- ¿Qué puedo almacenar en una variable? Un valor booleano, cadena, número, array (o lista), nulo, objeto, indefinido y función.
- ¿Qué es una operación lógica? Es una forma de hacer preguntas con código, y estas operaciones siempre devolverán respuestas booleanas. Por ejemplo, si tienes una variable `edad` y quieres saber si es mayor de 16 años: `(edad > 16)`. Esta operación lógica se convertirá en `verdadero`.

```js
(age > 16) == true
```

- ¿Qué es una condición? Una condición utiliza operaciones lógicas para bloquear u omitir líneas de código. `if(age>16) console.log("You can drive")`.
- ¿Cómo puedo guardar múltiples valores en una variable? Utiliza un array u objeto. Por ejemplo: `let ages = [2,23,45,67]`.
- ¿Cómo puedo hacer un bucle en un array? La forma más común es usar el bucle `for` de esta manera: `for(let i=0; i<ages.length;i++) console.log("Age: "+i);`. Este código imprimirá en el inspector de desarrolladores todas las edades dentro del array `edades`.

## Cosas que debes saber sobre Javascript

- Javascript está "orientado a eventos", lo que significa que su código se ejecutará en función de algún evento del navegador o del usuario, por ejemplo: cuando el usuario hace clic, cuando se carga el sitio web, cuando el usuario se desplaza, cuando se recarga el sitio web, etc.
- Javascript puede crear HTML y CSS de la misma manera que tu: puedes decirle a JS que escriba cualquier HTML que desees. Básicamente, el código puede "escribirse solo" si creas un sitio web lo suficientemente inteligente.
- El código Javascript siempre debe ir en archivos javascript que terminen en `.js`. Se desaconsejan otras formas el 99% del tiempo.
- Puede importar js usando el tag  `<script>`.

## Bienvenido al desarrollo web

¡Eso es! Estás listo si conoces el 70 % de estos puntos. De lo contrario, lo alentamos a buscar más información sobre cada uno de estos temas, leer nuestras lecciones, practicar algunos ejercicios nuevamente y, tal vez, incluso pedirle a Google o a uno de nuestros mentores excelentes recursos para aprender más al respecto.
