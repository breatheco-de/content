---
title: "Importación y exportación de módulos JavaScript"
subtitle: "Dividir y conquistar (nuevamente), esta vez te enseñamos cómo dividir tu código en varios archivos para evitar conflictos de GIT y también para estar más organizado.  Al final de esta lección, podrás dominar la importación y exportación de JavaScript."
cover_local: "../../assets/images/c558ac72-194b-40f2-be2f-6e65e8c219c9.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["javascript","importacion","exportacion"]
status: "published"

---

> ☝️ Esta lección es para usuarios de WebPack y [módulos ECMAScript (ESM)](https://nodejs.org/api/esm.html). Hay otra forma de trabajar con módulos usando la [sintaxis común de JS](https://requirejs.org/docs/commonjs.html) que no cubriremos.

Todo nuestro código JS no puede estar en el mismo archivo; eso hará que sea difícil de leer y casi imposible de mantener.

Gracias a Webpack, podemos dividir nuestro código en archivos pequeños como queramos y luego podemos hacer referencia a otros archivos en nuestro archivo actual.

De hecho, ya lo hemos estado haciendo cuando importamos nuestros estilos, Bootstrap o jQuery desde index.html.

## Así es como funciona "importar" y "exportar":

+ Utiliza la palabra **import** para traer variables, clases o funciones de otros archivos.
+ Utiliza la palabra **export** para exportar variables, clases o funciones que serán utilizadas por otros archivos.

Por ejemplo, aquí estamos importando una función de otro archivo:

![importación de javascript](https://github.com/breatheco-de/content/blob/master/src/assets/images/f7b8c75d-e7d4-481e-8346-b95d54a235f6.png?raw=true)

![importación de javascript](https://github.com/breatheco-de/content/blob/master/src/assets/images/2cdb146a-d6f7-4591-96fc-e50aef07aca5.png?raw=true)

## Exportación por defecto

Hay una pequeña variación que puedes encontrar en Internet que se llama **"exportación por defecto"**: esta es solo una forma de exportar una cosa por defecto a su archivo.

Solo puedes exportar **UNA** variable por defecto, y no tienes que usar los corchetes mientras se importa.

### Importando por defecto

```javascript
// Contenido en index.js 

import multiplyFunction from './my_file.js';

let total = multiplyFunction(3,6)
console.log(total);
```

### Exportando por defecto

```javascript
// Contenido en my_file.js 

let multiplyFunction = function(a,b) {
    return a*b;
};
export default multiplyFunction;
```

## Ejemplo final:

Aquí hay una pequeña demostración de todos los tipos de importación/exportación que trabajan en el mismo proyecto.

<iframe src="https://codesandbox.io/embed/218y1prppj?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/218y1prppj?hidenavigation=1">Clic para abrir demo en una nueva ventana</a></small></div>



