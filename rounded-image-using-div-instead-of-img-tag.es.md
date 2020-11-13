---
title: "Cómo hacer una imagen adaptable"
subtitle: "La etiqueta <img> tag no funciona en imágenes generadas porque pierden sus proporciones."
textColor: "white"
date: "2020-10-19T12:36:30-04:00"
tags: ["responsive"]
status: "draft"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"

---

Muchos sitios web usan imágenes de perfil redondas ¡es una técnica que hace realmente más bello un sitio web!

![Ejemplo de imagen redonda](../../assets/images/9edb713a-3a80-442a-9fc5-dd5caa9da62fScreenShot20190524at114329AM.png)

La manera obvia de crear una imagen de perfil redonda es crear una etiqueta de imagen y aplicarle  `border-radius:100%`. El problema esta solución, es que sólo funciona en imágenes cuadradas...las imágenes de perfil con diferentes alturas y ancho no se verán como círculos sino como óvalos:

![etiqueta de imagen vs div con imagen de fondo/background-image](../../assets/images/596b5833-09a1-4ff0-8718-bc7ba4dd995dScreenShot20190524at42229PM.png)

En vez de hacer eso, la soluión sería crear un div cuadrado (es decir de igual altura y ancho), asignarle una imagen de fondo y luego aplicarle un border-radius a ese div.

Si la imagen es más grande que el div (o de diferentes proporciones), podemos ajustar la background-position o el background-size, para escoger qué parte de la imagen queremos que se vea dentro del círculo.

![]Usando una imagen de fondo/background image en vez de una etiqueta de imagen para la adaptabilidad](../../assets/images/1251c891-ac88-464f-ae58-5c9d7abe081cScreenShot20190524at121150PM.png)

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/Lge30ypv/4/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
