---
title: "Cómo usar font awesome"
subtitle: "Font Awesome  es una de las librerías de iconps gratis más popular del mundo en desarrollo front end"
thumb: "https://i.imgur.com/QKASHj1.png"
textColor: "white"
date: "2020-10-19T12:36:30-04:00"
tags: ["font-awesome"]
status: "published"
authors: ["alesanchezr"]
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"

---

## Instalando Font Awesome

Hay muchas formas de instalar font awesome, por favor piensa en cómo se configura tu proyecto para que puedas escoger el procedimiento de instalación adecuado:

### La manera más fácil

Si estás trabajando con archivos CSS y HTML, sólo pega esta etiqueta `<link>` antes de la etiqueta de **CIERRE** de `</head>` en tu archivo HTML:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
```
> Nota: puedes ver que es sólo otra hoja de estilos css.

Luego de añadir la etiqueta `<link>` puedes añadir iconos utilizado etiquetas `<i>` de esta forma:

```html
<i class="fas fa-pencil-alt"></i>
```

Tienes que reemplazar el nombre de la clase con la que corresponda al icono que escogiste de esta [lista de iconos](https://fontawesome.com/icons?d=gallery)
