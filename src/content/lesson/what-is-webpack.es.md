---
title: "Qué es webpack?"
subtitle: "Para los desarrolladores senior, es imposible pensar en desarrollar una aplicación JS sin Webpack. Gracias a Webpack, desarrollar front-end se siente bien y profesional por primera vez. Así que es hora de aprender lo que es webpack"
cover_local: "../../assets/images/cdbe1bf9-2b6b-4c21-b127-eacc681d9c8d.png"
textColor: "white"
date: "2020-10-19T12:36:31-04:00"
tags: ["webpack"]
status: "published"

---

A estas alturas, probablemente hayas sentido lo desorganizado y difícil que puede ser trabajar con Javascript. Debes recordar en qué orden debes incluir las etiquetas de script en tu HTML para configurar correctamente jQuery, Popper, Font Awesome, archivos Bootstrap CSS, archivos Bootstrap JS, tus propios archivos CSS, tus propios archivos JS ¡etc!  La lista sólo se hace más y más grande desde aquí.

### ¡Gracias a Dios tenemos Webpack!

Webpack es una de esas cosas que odias las primeras veces y luego no puedes vivir sin él por el resto de tu vida.  ¡Por primera vez la codificación, Javascript realmente se siente increíble, limpia y profesional!

<before-after width="400px"
    before="../../assets/images/bc337938-55c4-40e2-a370-5d69bf084a3b.png" after="../../assets/images/41afcd74-81dd-4e6e-98ee-fc2642a07e7f.png" />

### Pero, ¿qué es Webpack?

Webpack es esta cosa que agarra todas las piezas de tu aplicación (archivos, imágenes, fuentes, JS, CSS, HTML, etc.) y las agrupa en un archivo grande.  De esa manera, puedes dividir tu aplicación en muchas partes y luego combinarlas al final del proceso de codificación.

Luego, el navegador podrá solicitar (GET) ese archivo y mostrar / renderizar todo el sitio web ... ¡eso es todo!  Es muy similar a lo que sucede con los archivos ".exe" en Windows: toda tu aplicación está dentro del archivo .exe, y luego simplemente haces doble clic en él.

![qué es webpack](../../assets/images/bdd432f7-adef-4023-976e-1ebd6abe70f7.gif)

### Pero ¿por qué me importa el agrupamiento?

Básicamente, no hay forma de mantener una aplicación grande si no la divides en varios archivos más pequeños (dividir y conquistar).

Pero eso es solo el comienzo, porque ahora que Webpack tiene el control sobre todo el proceso del paquete, también tiene acceso a su código y puede mejorarlo de muchas maneras.  Por ejemplo:

+ Ahora no tienes que preocuparte por la compatibilidad del navegador, AND Webpack traducirá tu código para que sea compatible con cualquier versión.
+ Puedes minimizar y comprimir tu código haciendo tu aplicación hasta un 80% más pequeña.
+ Te permite usar mejores versiones no oficiales de algunos de los idiomas (como [SASS](http://sass-lang.com/), [HAML](http://haml.info/) o [Typescript](https://www.typescriptlang.org/)) que son asombrosas pero no compatibles por los navegadores.
+ Se integra con [NPM](https://www.npmjs.com/): una enorme base de datos de librerías gratuitas disponibles para cualquier desarrollador.
+ Mucho más.
  
La lista es interminable – será mejor que continuemos o estaremos aquí todo el día 🙂

## Esto es lo que necesitas saber para comenzar a utilizar Webpack ahora mismo.
***
  
<br />
<br /> 

### :one: Webpack es una librería de Javascript, lo que significa que debes instalarlo utilizando el administrador de paquetes NPM.
 
<br />

**Si no tienes un archivo "package.json"** en la raíz de tu aplicación, entonces es probable que ni siquiera hayas iniciado tu aplicación NPM. Comienza escribiendo lo siguiente en tu línea de comando:

```bash 
npm init -y
```

Una vez que tengas tu package.json, puedes instalar la librería de Webpack haciendo lo siguiente:

```bash
npm install --save-dev webpack
```

¡Eso es! Finalmente tienes Webpack, pero ahora tenemos que especificar cómo debería construir nuestra aplicación (crear el paquete).

<br />
<br /> 

### :two: Webpack tiene un gran archivo llamado "webpack.config.js" que debes crear y mantener en orden para poder controlar tu proceso de agrupación.

<br>

Crea un archivo webpack.config.js en tu directorio raíz y rellénalo con el siguiente código base:

```javascript
var path = require('path');

module.exports = {
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  }
};
```

Lo único que Webpack necesita de ti es que especifiques la propiedad de exportación del objeto modelo.

Como puedes ver, el objeto de módulo no está declarado en ninguna parte, pero no te preocupes por eso, es algo que existe mágicamente en todas las aplicaciones de npm (como la que acabamos de crear).

Tu trabajo es especificar al menos las siguientes propiedades dentro del objeto module.exports:


|entry     |Aquí tienes que especificar la ruta a su "index.js", el primer archivo de Javascript que se ejecutará cuando se cargue tu sitio web. Por supuesto, tienes que crear ese archivo index.js también más tarde.       |
|:---------------|:------------------|
|output       |Aquí tienes que especificar dos cosas:<br><br><li>**path:**  La carpeta donde se creará el paquete, normalmente se llama "dist" or "public."  Todos los archivos públicos de tu aplicación estarán aquí.</li><br><li>**filename:**  El nombre del archivo de paquete creado por Webpack que contendrá todo el código.</li>      |

<br />
<br /> 

### :three: Para incluir otros archivos en lugar de JS, tenemos que instalar "loaders" (cargadores) – librerías npm específicas – y actualizar el webpack.config.js

<br />

Por ejemplo, si queremos incluir archivos CSS en nuestro paquete, tenemos que usar el siguiente comando dentro de nuestro archivo index.js:

```javascript
import css from 'file.css';

//or 

require('file.css');
```

Webpack emitirá un error porque no sabe cómo trabajar con CSS de forma predeterminada.  Debemos instalar los plugins [Webpack style loader](https://github.com/webpack-contrib/style-loader) y [Webpack CSS loader](https://github.com/webpack-contrib/css-loader) usando el siguiente comando:

```javascript
npm install style-loader css-loader --save-dev
```

Ahora que tienes las librerías, debes decirle a Webpack cómo usarlas en el webpack.config.js .  Por ejemplo, podemos actualizar el archivo con lo siguiente: 

```javascript
var path = require('path');

module.exports = {
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  rules: [
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
  ]
};
```

Arriba, le estamos diciendo a Webpack que el css-loader cargará cualquier archivo ".css" importado en nuestro paquete y el style-loader sabrá como incluirlo según el tamaño (probablemente utilizando una style tag).

<br />
<br /> 

### :four: Puedes instalador otros loaders (cargadores) o asombrosos plugins

<br />

De aquí en adelante, depende de ti – solo sigue instalando plugins y aprendiendo a configurarlos en tu archivo webpack.config.js . [Aquí hay una lista más detallada de los fantásticos plugins que puedes usar:](https://github.com/webpack-contrib/awesome-webpack)

## Configuración Básica 
***

No tienes que estar configurando Webpack todo el tiempo.  Puedes incluir el archivo de configuración en tu repositorio – de esta forma todo se sincroniza entre todos los entornos y desarrolladores.  También puedes guardar algunos archivos webpack.config.js como plantillas para futuros proyectos.

También puedes encontrar y descargar configuraciones en línea que ya están completadas y ajustadas para varias arquitecturas de diferentes aplicaciones que están disponibles: React, Angular, Vanilla JS, WordPress, etc.

[[info]]
|:link: Hemos preparado un repositorio GIT con varias configuraciones dependiendo de tus necesidades – [<button>¡Haz clic!</button>](https://github.com/alesanchezr/webpack-tutorial)













