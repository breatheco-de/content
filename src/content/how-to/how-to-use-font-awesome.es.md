---
title: "Cómo usar font awesome"
subtitle: "Font Awesome es una de las librerías de iconos gratis más populares en el mundo del desarrollo front-end"
thumb: "https://i.imgur.com/QKASHj1.png"
textColor: "white"
date: "2020-10-19T12:36:30-04:00"
tags: ["font-awesome"]
status: "published"
authors: ["alesanchezr"]
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"

---

## Instalando Font Awesome

Hay muchas maneras de instalar font awesome. Por favor piensa en la configuración de tu proyecto para que puedas escoger el procedimiento de instalación adecuado:

### La forma más fácil

Si estás trabajando con archivos de CSS y HTML puros, sólo pega esta etiqueta `<link>` antes del **CIERRE** de la etiqueta `</head>` de tu archivo HTML:
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
```
> Nota:  puedes ver que sólo otra hoja de estilos de CSS.

Después de añadir la etiqueta `<link>` puedes comenzar a añadr iconos usando las etiquetas `<i>` de esta forma:
```html
<i class="fas fa-pencil-alt"></i>
```
Tienes que reemplazar los nombres de las clases por las que correspondan al icono que hayas escogido de [esta lista de iconos](https://fontawesome.com/icons?d=gallery)

