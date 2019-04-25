---
title: "Importación y exportación de módulos JavaScript"
subtitle: "Dividir y conquistar (nuevamente), esta vez te enseñamos cómo dividir tu código en varios archivos para evitar conflictos de GIT y también para estar más organizado.  Al final de esta lección, podrás dominar la importación y exportación de JavaScript."
cover: "https://ucarecdn.com/c558ac72-194b-40f2-be2f-6e65e8c219c9/"

textColor: "white"

date: "2018-12-11"
tags: ["fale"]
---

[[info]]
| :point_up: Esta lección es para usuarios de WebPack y [módulos ECMAScript (ESM).;](https://nodejs.org/api/esm.html) hay otra forma de trabajar con módulos usando la [sintaxis de CommonJS] (https://requirejs.org/docs/commonjs.html) que no cubriremos.

Todo nuestro código JS no puede estar en el mismo archivo; Eso hará que sea difícil de leer y casi imposible de mantener.

Gracias a Webpack, podemos dividir nuestro código en archivos pequeños como queramos y luego podemos hacer referencia a otros archivos de nuestro archivo actual.

De hecho, ya lo hemos estado haciendo cuando importamos nuestros estilos, bootstrap o jQuery desde index.js.

## Así es como funciona "importar" y "exportar":
***

+ Utiliza la palabra **importar** para traer variables, clases o funciones de otros archivos.
+ Usted usa la palabra **exportar** para exponer variables, clases o funciones que serán utilizadas por otros archivos.

Por ejemplo, aquí estamos importando una función de otro archivo:


![javascript import](https://ucarecdn.com/f7b8c75d-e7d4-481e-8346-b95d54a235f6/-/resize/1000x/)

![javascript import](https://ucarecdn.com/2cdb146a-d6f7-4591-96fc-e50aef07aca5/-/resize/1000x/)


## Exportación por Defecto
***

Hay una pequeña variación que puede encontrar en Internet que se llama **"exportación predeterminada"**: esta es solo una forma de exportar una cosa por defecto a su archivo.

Solo puede exportar la variable **ONE** de forma predeterminada, y no tiene que usar los corchetes mientras se importa.


### Importando por defecto

```javascript
//contenido en index.js 

import multiplyFunction from './my_file.js';

let total = multiplyFunction(3,6)
console.log(total);
```

### Exportando por defecto

```javascript
//contenido en my_file.js 

let multiplyFunction = function(a,b){
    return a*b;
};
export default multiplyFunction;
```



## Ejemplo Final:
***

Aquí hay una pequeña demostración de todos los tipos de importación / exportación que trabajan en el mismo proyecto.

<iframe src="https://codesandbox.io/embed/218y1prppj?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/218y1prppj?hidenavigation=1">Click para abrir en una nueva ventana</a></small></div>



