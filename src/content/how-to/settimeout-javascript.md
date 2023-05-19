## Método Settimeout Javascript

El método `setTimeout()` de Javascript se utiliza para ejecutar una sintaxis de código después de un tiempo predeterminado. A continuación veremos un ejemplo de uso del método **setTimeout**  para crear un Temporizador.

```js
function  Temporizador(segundos) {
    if (segundos  >  0) {
        console.log(`Faltan ${segundos} segundos`);
        setTimeout(() => {
            Temporizador(segundos - 1);
        }, 1000);
    } else {
        console.log("Temporizador finalizado");
    }
}

Temporizador(5);
```
> ( output ) de la función **Temporizador**.
```js
Faltan 5 segundos
Faltan 4 segundos
Faltan 3 segundos
Faltan 2 segundos
Faltan 1 segundos
Temporizador finalizado
```

La función `Temporizador()` recibe como parámetro un **número** que representa la cantidad de segundos que deseas retrasar la ejecución. Esta función muestra en consola el número de segundos restantes y haciendo uso del método `setTimeout()` de forma  **recursiva** llama a la función una y otra vez cada **1000** milisegundos / **1** segundo hasta que el número de segundos restantes sea 0 entonces muestra en consola el mensaje **Temporizador finalizado**.

## ¿Qué es y para qué sirve el método setTimeout en Javascript?

El método [setTimeout](https://developer.mozilla.org/es/docs/Web/API/setTimeout) de Javascript es un método que te permite ejecutar una porción de código después de un tiempo predeterminado. Este es un método muy útil que puedes usar para crear diversas funcionalidades como temporizadores, notificaciones, alarmas y muchas cosas más!, básicamente lo puedes usar cada vez que necesites retrasar el tiempo de ejecución de una sintaxis de código.

 Este método recibe dos parámetros

```js
function  mostrarMensaje() {
    console.log("Hola mundo!");
}

setTimeout(
    mostrarMensaje, // función con el código que deseas ejecutar
    1000 // retraso numérico en milisegundos
);
```

El primer parámetro es la función con el código que deseas ejecutar después de que termine el tiempo de retraso indicado, esta función también puede ser una **arrow function** `setTimeout(() => console.log("Hola mundo!") , 1000)`.

El segundo parámetro es el **retraso** en milisegundos que deseas implementar, este parámetro debe de ser de tipo **numérico**. Es importante señalar que los navegadores almacenan el retraso como un entero de 32 bits por esto debes tener cuidado de no usar retrasos mayores a **2147483647** milisegundos que es lo mismo que alrededor de **(24,8)** días ya que esto provoca un error en el sistema y la ejecución del código en el `setTimeout()` se realiza de forma inmediata como se muestra en el siguiente ejemplo.

```js
console.time("Primer setTimeout");
setTimeout(() => {
    console.timeEnd("Primer setTimeout");
}, 2000);

console.time("Segundo setTimeout");
setTimeout(() => {
    console.timeEnd("Segundo setTimeout");
}, 2_147_483_648);
```
> ( output ) del código anterior
```js
  TimeoutOverflowWarning: 2147483648 does not fit into a 32-bit signed integer

  Segundo setTimeout: 14.6 milisegundos
  Primer setTimeout: 2.1 segundos
```
En este ejemplo usamos los métodos de consola de Javascript `console.time()` y `console.timeEnd()` para medir el tiempo de ejecución del código, vemos que el primer **setTimeout** se ejecuta correctamente después de 2 segundos, mientras que el segundo **setTimeout** al tener un retraso demasiado grande envía una alerta a la consola y el código se ejecuta de forma inmediata.

También puedes cancelar la ejecución de este método haciendo uso de la función `clearTimeout()` como se muestra en el siguiente ejemplo.

```js
const resultado = setTimeout(() => {
    console.log("Primer setTimeout");
}, 2000);

clearTimeout(resultado); // esta línea cancela la ejecución del primer setTimeout

setTimeout(() => {
    console.log("Segundo setTimeout");
}, 1000);

console.log(resultado); 
```
> ( output ) del código anterior
```
valor numérico entero positivo
Segundo setTimeout
```

El método `setTimeout()` retorna un número entero positivo que puede variar dependiendo del entorno de ejecución o navegador que estés utilizando, este valor se lo puedes pasar como parámetro a la función `clearTimeout()` para cancelar la ejecución del código. 

En este ejemplo vemos que el código primero muestra en la consola el valor numérico que retorna el método `setTimeout()` y luego muestra el mensaje "Segundo setTimeout" pero el mensaje "Primer setTimeout" no lo muestra ya que el método `clearTimeout()` canceló la ejecución de este.


## Casos de uso del método setTimeout()

El método `setTimeout()` tiene múltiples casos de uso, veremos algunos de ellos a continuación.

### Crear un Temporizador
Uno de los usos más comunes que le puedes dar al método `setTimeout()` es para crear un **temporizador**

> código HTML
```html
<!DOCTYPE html>
<html  lang="en">
  <head>
    <script  src="script.js" defer ></script>
  </head>
  <body  style="display: grid; place-content: center; height: 100vh">
    <div id="temporizador" style="height: 50px; width: 70px; display: grid; place-content: center; border-radius: 7px; font-size: 20px; border: 2px solid black;">
      00
    </div>
  </body>
</html>
```

> código Javascript
```js
const temporizador = document.getElementById("temporizador");
function Temporizador(segundos) {
  if (segundos > 0) {
    temporizador.textContent = segundos;
    setTimeout(() => {
      Temporizador(segundos - 1);
    }, 1000);
  } else {
    temporizador.textContent = "00";
    alert("Temporizador finalizado");
  }
}
Temporizador(30); // 30 segundos
```

Para crear un temporizador con **HTML** y el método `setTimeout()` primero debemos crear un archivo **HTML** con una estructura básica y un div con el id **temporizador** `<div id="temporizador">`, luego creamos un archivo **Javascript** y en este archivo creamos una función que recibe como parámetro un número entero que representa la cantidad de segundos que recibe el temporizador, esta función actualiza el valor del `div` por la cantidad de segundos restantes de forma **recursiva** una y otra vez hasta que el número de segundos restantes sea 0 entonces crea una alerta con el mensaje **Temporizador finalizado**.

### Actualizar información de una página web

Otro uso que le puedes dar al método `setTimeout()` de Javascript es actualizar la información de una página web.

```js
const  Url = "https://ejemplo.com/productos/precios";
let  precios = [];

async  function  modificarPrecios() {
    const  response  =  await  fetch(Url);
    const  data  =  await  response.json();
    precios  =  data;

    setTimeout(() => {
        modificarPrecios();
    }, 1000 * 60 * 30); // retraso de 30 minutos
}

modificarPrecios();
```

Imagina que tienes una aplicación de productos donde los precios de los productos suelen variar constantemente. En este caso puedes usar el método `setTimeout()` para hacer un **fetch** de la información actualizada cada **30** minutos y así poder actualizar la información en tu página web. En este ejemplo creamos una función asíncrona para hacer el llamado a la **API** y guardar la información en el array `precios = []`, esta función realiza esta tarea una y otra vez de forma **recursiva** cada 30 minutos.

Es importante resaltar que esta misma funcionalidad también la puedes conseguir con otro método de Javascript llamado [setInterval](https://developer.mozilla.org/es/docs/Web/API/setInterval) que es un método muy similar a `setTimeout()` pero a diferencia de este que ejecuta el código una sola vez, el método `setInterval()` ejecuta el codigo con el retrazo de tiempo una y otra vez hasta que la ejecución sea cancelada con el metodo `clearInterval()`.

### Animar un elemento HTML

Otra forma en la que puedes usar el método `setTimeout()` de Javascript es para animar un elemento HTML.

> código HTML
```html
<!DOCTYPE html>
<html  lang="en">
  <head>
    <script  src="script.js"  defer></script>
  </head>
  <body  style="display: flex; align-items: center; height: 100vh">
    <div id="circulo" style="transition: left 2000ms ease-in; height: 50px; width: 50px; border-radius: 50%; background-color: lightblue; position: relative; left: 0px;"
    ></div>
  </body>
</html>
```

> código Javascript
```js
const  circulo  =  document.getElementById("circulo");
function  animarCirculo() {
  if (circulo.style.left  ===  "70vw") {
    circulo.style.left  =  "30vw";
    setTimeout(() => {
      animarCirculo();
    }, 2000);
  } else {
    circulo.style.left  =  "70vw";
    setTimeout(() => {
      animarCirculo();
    }, 2000);
  }
}
animarCirculo();
```

Este ejemplo crea una pequeña animación con **HTML** y el método `setTimeout()` de Javascript que simula una pelota rebotando de izquierda a derecha, para crear esta animación primero creamos un archivo **HTML** con una estructura básica y un `div` que contenga una transition en la propiedad **left** con una duración de **2000**ms / 2 segundos `<div style="transition: left 2000ms ease-in;"` , luego creamos un archivo **Javascript** con una función que mueve el elemento de izquierda a derecha cada **2000**ms / **2** segundos de forma **recursiva** una y otra vez para crear esta animación indefinidamente, es importante que la duración en la transición del elemento y el retraso temporal en el método `setTimeout()` tengan el mismo valor para que la animación funcione correctamente.

## Conclusión 

En conclusión el método `setTimeout()` de javascript te permite ejecutar una porción de código en un tiempo predeterminado lo cual puede ser muy útil y tiene amplios usos en la programación, este método se puede usar de muchas formas y tiene multiples usos en este artículo se mencionan solo algunos de ellos, si queires conocer mas a profundidad este método te sugiero que visites la pagina oficial de mozilla javascript [metodo settimeout](https://developer.mozilla.org/es/docs/Web/API/setTimeout).

Si te interesa conocer más sobre el lenguaje de programación Javascript en este link [aprende a programar](https://4geeks.com/es/lesson/que-es-javascript-aprende-a-programar-en-javascript) puedes encontrar información muy interesante y aprende este lenguaje desde cero con ejemplos de código, videotutoriales y muchos más recursos que te serán muy útiles para practicar y conocer más sobre el lenguaje de programación Javascript.
