---
title: "¿Qué es la legibilidad del código y cómo mejorarla?"
subtitle: "No quieres ser un desarrollador que escribe código de baja calidad, y la legibilidad es uno de sus factores más críticos..."
tags: ["coding guidelines"]

---

¿Sabías que en 1999, el Mars Climate Orbiter de la NASA fue destruido debido a un error de software causado por la baja legibilidad del código que costó $320 millones?

Tener un código legible es probablemente una de las principales prioridades para las empresas en estos días; es tan notable que, sin saberlo, cuando mejora la legibilidad, también estás aplicando casi todas las demás métricas sobre [estándares y pautas de programación](https://4geeks.com/es/lesson/estandares-y-lineamientos-de-codigo) en la industria.

> 🤯 "Cualquier tonto puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos pueden entender". -Martin Fowler

La legibilidad del código se refiere a la facilidad con la que cualquier persona puede comprender el propósito, la estructura y el funcionamiento de una pieza de código. El código que es fácil de leer y comprender es más fácil de mantener y más fácil de modificar o actualizar, y es menos probable que contenga errores o fallas.

> 🤯 "El código se lee mucho más a menudo de lo que se escribe". - Guido van Rossum (creador de Python)

## La baja legibilidad cuesta mucho dinero

La mala legibilidad del código puede generar una serie de problemas que pueden costarle dinero a una empresa:

**Mayor tiempo de depuración:** si el código es difícil de leer y comprender, puede llevar más tiempo identificar y corregir errores, lo que puede aumentar la cantidad de tiempo y recursos necesarios para depurar el código. Esto puede conducir a mayores costos y retrasos en el proyecto.

**Dificultad para mantener el código:** Si el código es difícil de leer y comprender, puede ser difícil para los nuevos desarrolladores realizar cambios o actualizaciones en el código. Esto puede generar mayores costos de desarrollo y demoras, ya que los desarrolladores pasan más tiempo tratando de comprender el código.

**Mayor riesgo de errores:** Si el código es difícil de leer y comprender, es más probable que se introduzcan errores o fallas a medida que se modifica o actualiza el código. Estos errores pueden hacer que el programa no funcione correctamente, lo que provoca una pérdida de productividad y una posible pérdida de ingresos.

## Consejos que puedes seguir para mejorar la legibilidad del código

En esta lección, repasaremos algunos consejos que puedes seguir para mejorar la legibilidad de su código.

### Elige sabiamente los nombres de las variables

¿Por dónde empiezo? Esta es una de las tareas más difíciles en programación.

- Elige nombres descriptivos y significativos.
- Limita el uso de la mayoría de las abreviaturas o siglas.
- Usa [convenciones de nomenclatura de variables](https://4geeks.com/lesson/variable-naming-conventions) como "camelCase" o "snake_case".
- Evita usar nombres de una sola letra.
- Mantén los nombres cortos, pero no demasiado cortos; concisos, pero aún descriptivos.

![nombres de variables buenos vs malos](https://github.com/breatheco-de/content/blob/4588ac449e1507072c022ca433d0db46a431881d/src/assets/images/good-bad-example-code-2-variable-names.png?raw=true)

### Divide tu código en funciones más pequeñas

En lugar de anidar bloques de código, considera refactorizar el código en funciones más pequeñas y llamar a esas funciones en los momentos apropiados. Esto puede reducir la profundidad general de anidamiento en su código.

![usando funciones mas pequeñas](https://github.com/breatheco-de/content/blob/4588ac449e1507072c022ca433d0db46a431881d/src/assets/images/good-bad-example-code-3-smaller-functions.png?raw=true)

### Evite usar la declaración `else`

Es mejor combinar tus condiciones en operaciones lógicas relacionadas.

![evita usar sentencias else](https://storage.googleapis.com/media-breathecode/93dfd2bc759cb41efeef36ef575bd56d4e53ecae0c0f3a73b371ba896404caff)

### Cuidado con la indentación

Por supuesto, la indentación o sangría es una parte vital de la legibilidad.

![problemas de legibilidad por indentación](https://storage.googleapis.com/media-breathecode/1cd57ac983752ef51f700dab05703bc49c67a580757e21d5917bc8cd46197801)

### No necesitas tantos comentarios

Cuando estés a punto de agregar un comentario, piensa por un segundo: ¿Realmente necesito este comentario? ¿Puedo aumentar la legibilidad al evitarlo?

El 99% de las veces, no hay necesidad de comentarios si tu código tiene una buena legibilidad y sigue las mejores prácticas.

![evita usar demasiados comentarios](https://github.com/breatheco-de/content/blob/4588ac449e1507072c022ca433d0db46a431881d/src/assets/images/good-bad-example-code-4-too-many-comments.png?raw=true)

### Evita largas líneas de código

Esto suele suceder cuando se escribe una cadena larga o una "sentencia if", también puede ocurrir cuando se escriben funciones con nombres largos.

Puedes evitar la mayoría de estos problemas usando un formateador de código. Este es un recordatorio amistoso para instalar un formateador de código como [Prettier](https://prettier.io/) en tu editor si aún no tienes uno.

![evita largas lineas de código](https://github.com/breatheco-de/content/blob/4588ac449e1507072c022ca433d0db46a431881d/src/assets/images/good-bad-example-code-5-avoid-long-lines.png?raw=true)

Otros casos para evitar largas líneas de código:

- No escribas expresiones booleanas largas: las "sentencias if" con múltiples operaciones lógicas en una sola línea son difíciles de leer y depurar.
- No escribas código anidado: puede parecer inteligente en el momento, pero hace que el código sea más difícil de leer y depurar.

## La baja legibilidad puede hacer que te despidan

Se espera que los desarrolladores de software produzcan código de alta calidad que sea confiable, fácil de mantener y libre de errores o fallas.

Es importante escribir un código limpio, bien escrito y bien documentado que sea fácil de leer y comprender. Esto hará que el código sea más fácil de mantener y reducirá el riesgo de errores, demoras y mayores costos.
