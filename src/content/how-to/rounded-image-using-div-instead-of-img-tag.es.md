---
title: "Cómo hacer una imagen adaptable"
subtitle: "La etiqueta <img> no funciona en imágenes generadas porque pierden su proporción, aquí aprenderás como manejar este problema"
textColor: "white"
date: "2020-10-19T16:36:30+00:00"
tags: ["responsive"]
status: "published"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"

---

Muchos sitios web tienen fotos redondas de perfil ¡Es una técnica que realmente hace un sitio web más bonito!

![Rounded Image Example](https://github.com/breatheco-de/content/blob/master/src/assets/images/9edb713a-3a80-442a-9fc5-dd5caa9da62fScreenShot20190524at114329AM.png)

La manera obvia de crear una foto de perfil redonda es haciendo una etiqueta <img> y aplicarle `border-radius:100%`. El problema es que esta solución solo funciona si la foto es cuadrada.... las fotos de perfil tienen diferente altura y ancho y no se verán redondas, se verán con óvalos:

![Image tag vs div with background-image](https://github.com/breatheco-de/content/blob/master/src/assets/images/596b5833-09a1-4ff0-8718-bc7ba4dd995dScreenShot20190524at42229PM.png)

En vez de hacer eso, lo correcto sería crear un div cuadrado ( es decir de igual altura y ancho), asignarle la imagen como fondo y luego aplicarle border-radius a ese div.

Si la imagen es más grande que el div (o tiene otras proporciones) podemos ajustar la background-position o background-size para escoger que parte de la foto queremos mostrar dentro del círculo

![Using background-image instead of image tag for reponsiveness](https://github.com/breatheco-de/content/blob/master/src/assets/images/1251c891-ac88-464f-ae58-5c9d7abe081cScreenShot20190524at121150PM.png)

