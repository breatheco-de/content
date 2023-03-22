---
title: "Debugging CSS Code"
subtitle: "Debugging css code faster and more efficiently. Save more than 50% of your debugging time when coding CSS."
tags: ["debugging", "web development", "html/css"]

--- 

# Depuración de código CSS

Esta guía está destinada a enseñarte cómo solucionar errores en tu código CSS. Si no estás seguro de si tu error está en tu HTML, te recomiendo leer: [¿Qué es depurar y cómo dominarlo?](https://4geeks.com/lesson/what-is-debugging-code).

CSS es una tecnología muy complicada de depurar, probablemente entre las más difíciles; me llevó años dominarla. No digo esto para asustarte, pero necesitas tomarlo en serio; mi objetivo es darte una guía concisa y herramientas para convertirte rápidamente en bueno en ello.

## Herramientas para depurar CSS

Tu editor de código tiene resaltado de sintaxis que te ayudará a reconocer errores de sintaxis como falta de punto y coma, llaves, etc.
La herramienta de desarrollador: Tiene dos secciones que necesitas aprender y usar bastante bien:

### a) La pestaña `elements`

Muestra el tag HTML en tu sitio web y los selectores que tiene. Puedes mirar los atributos de clase o ID en cada tag.

![La pestaña elementos en el inspector de sitios web de la herramienta de desarrollador](https://i.imgur.com/oJoH8C3.png?raw=true)

### b) La pestaña `Styles` dentro de la pestaña `elements`

Si haces clic en uno de los tags, la pestaña "`styles`" mostrará qué estilos se están aplicando a ella.

![Pestaña Estilos dentro del inspector de sitios web de la herramienta de desarrollador](https://i.imgur.com/UM926NI.png?raw=true)

## Errores más difíciles de encontrar y depurar
Estos son algunos de los errores más difíciles de depurar:

### Estilos que no se aplican

¿Recuerdas alguna vez en tu historia de desarrollador cuando intentaste aplicar un estilo a un elemento, pero no pasaba nada? No importa lo que hicieras, el elemento seguía igual.

Esto puede suceder por varias razones:
- Estás usando el selector incorrecto.
- Estás deletreando mal en el selector.
- Hay otro estilo que anula el tuyo (conflicto de estilos).

#### Sigue estos pasos para solucionar el error

Abre la herramienta de desarrollador `elements`
Haz clic en el tag HTML que quieres inspeccionar.
Mira la pestaña `style`, que muestra los estilos aplicados al elemento.
Comprueba si tu selector y reglas están en la lista de estilos aplicados al tag.
Si tu selector aparece, has aplicado con éxito los estilos, pero otros estilos pueden entrar en conflicto.

> 🔥 Debemos recordar que muchos estilos se aplican simultáneamente a los elementos; el navegador combina todas las reglas heredadas de todos los selectores que has creado.

### ¿Tu estilo no se está aplicando?

Usa la pestaña **elemento** de las herramientas de desarrollador y busca el tag que quieres revisar. Haz clic en el tag y revisa los estilos que se le están aplicando.

Si no ves tu estilo CSS, es probablemente por un error de ortografía o una lógica de selector defectuosa. Aquí hay un ejemplo en la imagen de abajo:

![misspelling on css selector](https://storage.googleapis.com/breathecode-asset-images/misspelling-on-css-selector.gif?raw=true)

> Nota: La clase `blue` se escribió mal con `bluee`, por lo que los estilos no se aplicaron.

### Comprueba los estilos y reglas de conflicto de CSS

Cuando uses la pestaña **elements** de las herramientas de desarrollador, haz clic en cualquier elemento y la pestaña **styles** mostrará todos los estilos que se están aplicando.

Si un estilo se ve anulado por otro, ambos se mostrarán, pero uno estará tachado con una línea.

![CSS Specificity war](https://i.imgur.com/Gp7hOvA.png?raw=true)

> Nota: En la imagen de arriba, la regla CSS color se anula dos veces.

## Otras cosas para prevenir

CSS tiene algunos temas difíciles de entender que te pueden seguir durante años y crear muchos errores, así que ten cuidado y tómate el tiempo para entenderlos bien.

## Posicionamiento absoluto vs relativo

No uses la propiedad **position** para diseños, usa `display: flex;` en su lugar.

Yo uso la regla de posición para cosas pequeñas como adjuntar una burbuja de notificación a un icono, aquí hay un video de 5 minutos sobre [cómo funcionan el absoluto vs relativo](https://www.loom.com/share/3715da41c2ec45be8711c4f8944e406b).

## La caja flexible para hacer layouts

La herramienta más poderosa para construir diseños es el flexbox. [Aquí hay un video de 5 minutos sobre cómo funciona](https://www.youtube.com/watch?v=ZRc2vUF92e8).

## Maestría en los selectores CSS

Tómate un tiempo para dominar los selectores CSS básicos y avanzados; aquí hay algunos recursos:

- Aquí hay un video de 5 minutos sobre los [conceptos básicos de los selectores CSS](https://www.youtube.com/watch?v=0Wt1n0wvSe8).
- Aquí hay una lectura de 5 minutos para entender todos los [selectores avanzados](https://4geeks.com/lesson/mastering-css-selectors) que te ayudarán a limpiar tu código. Mejor código.






