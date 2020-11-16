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

1. HTML/CSS puro: Sin webpack o bundles, si.
3. Vanilla.js: Usando webpack pero sin ningún framework
2. React.js

## Usando Font Awesome con HTML/CSS puro

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

| Nombre del icono| etiqueta html correpondiente |
| ---- | ---- |
| faPencilAlt | `<i class="fas fa-pencil-alt"></i>` |
| faCog | `<i class="fas fa-cog"></i>` |

## Usando Font Awesome con Webpack (Vanilla js)

Puedes añadir el mismo `<link>` en tu archivo index.html y podrás usar de igual forma las etiquetas `<i>` como se explica en la sección anterior.

Asegúrate de encontrar el archivo index.html en tu proyecto, ábrelo y añade la etiqueta link en el header.

## Usando Font Awesome en React.js

Font-awesome se divide en varios paquetes npm, deberás instalarlos todos para asegurárte (a menos que realmente sepas lo que estas haciendo), escribe lo siguiente en tu línea de comando:

```bash
$ npm i @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons --save
```

Ahora ve al componente de React o página donde quieras añadir los iconos e importa font awesome Y también el icono:

Poe ejemplo, aquí importamos el [icono de café](https://fontawesome.com/icons/coffee?style=solid):

```js
// primero importa el paquete esencial
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// luego importa el icono
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
```

Finalmente añade la etiqueta `<FontAwesomeIcon icon={faCoffee} />` en cualquier parte de tu declaración return en tu componente (el método de renderizado):

```jsx
const ExampleComponent = () => {

    return <div>
        {/* Only the this line 65 matters, this is the icon */}
        <FontAwesomeIcon icon={faCoffee} />;    
    </div>
}

```


