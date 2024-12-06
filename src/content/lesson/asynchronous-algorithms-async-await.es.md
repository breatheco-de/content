---
slug: "asincrono-algoritmos-async-await"
title: "Creando algoritmos asíncronos"
subtitle: "Comprende la diferencia entre scripts síncronos y asíncronos, uso de Promises y domina async y await"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
status: "published"
authors: ["kodi2fever","nachovz"]
textColor: "white"
date: "2020-10-19T16:36:30+00:00"
tags: ["async","await","promise","asynchronous"]

---

Hasta ahora, hemos utilizado código JavaScript para ejecutar aplicaciones web simples, que incluyen: usar variables, llamar a funciones y jugar con el ***DOM***. En las funciones, específicamente, incluso pasamos funciones a otras funciones (***funciones callback***) y hay mucho más que hablar al respecto. 

Comencemos diciendo que JavaScript por defecto es síncrono y con una sola secuencia, es decir: el código se ejecuta desde la línea 1 hasta el último, uno a la vez y en ese orden normalmente. Échale un vistazo a este ejemplo:

### Síncrono (por defecto)

```javascript
function correPrimero(){
    console.log("primero");
}
function correSegundo(){
    console.log("segundo");
}
correSegundo();
correPrimero();

/*
RESULTADO EN CONSOLA:
  > segundo
  > primero
*/
```

Aquí: la línea 5 se ejecuta antes de la línea 2 porque estamos llamando a ```ejecutarSegundo ()``` (línea 7) antes de ```ejecutarPrimero ()``` (línea 8). Rompiendo el orden de mando de la computadora que *llama* (o ejecuta) el bloque de código dentro de una función.

Las cosas se complican más cuando se llaman funciones dentro de funciones, como podemos ver aquí:

### Funciones dentro de funciones

```javascript
function correPrimero(){
    console.log("Quiero correr primero");
    correSegundo();
    console.log("Yo también quiero correr cuando correPrimero corra");
}
function correSegundo(){
    console.log("¿Dónde estoy corriendo?");
}
correPrimero();

/*
RESULTADO EN CONSOLA:
  > Quiero correr primero
  > ¿Dónde estoy corriendo?
  > Yo también quiero correr cuando correPrimero corra <-- Esta línea de código tuvo que esperar a que correSegundo() terminara
*/
```

*OK ¿qué...?*

Esto sucede porque la ***call stack*** en JavaScript lleva un registro de las funciones que se están ejecutando actualmente y se están procesando:

+ `correPrimero()` se añade al call stack porque la llamamos (línea 9).
+ Vemos nuestro primer `console.log` (línea 2), después de eso, se llama a `correSegundo()` (línea 3).
+ `correPrimero()` hace una pausa en su ejecución y `correSegundo()` comienza a ejecutarse.
+ Segundo `console.log` se ejecuta (línea 7).
+ Una vez que `correSegundo()` termina, `correPrimero()` comienza nuevamente, ejecutando el resto de su código, el último `console.log` (línea 4).

¡ D I V I E R T E T E !

Pero espera, hay más... Incluso podríamos pasar una *función* como argumento a otra función (no, esto no es un error tipográfico). La *función* enviada como parámetro se llama **función callback**. Echa un vistazo:

### Funciones callback

```javascript
    function correPrimero(unaFuncion){
        console.log("Quiero correr primero");
        unaFuncion();
        correSegundo();
        console.log("También quiero correr cuando se ejecute correPrimero");
    }
    function correSegundo(){
        console.log("¿Dónde estoy corriendo?");
    }
    correPrimero(unaTercera);

    function unaTercera(){
        console.log("Esto es una locura");
    }


/*
RESULTADO EN CONSOLA:
  > Quiero correr primero
  > Esto es una locura
  > ¿Dónde estoy corriendo?
  > También quiero correr cuando se ejecute correPrimero
*/
```

...*Es posible que quieras repasar, no te preocupes, tenemos tiempo*...

¡Tiempo de explicaciones!

Hemos agregado una nueva función `unaTercera()` (línea 12), que muestra los registros de la consola: `"Esto es una locura"`; pero no la estamos llamando directamente, en cambio, estamos pasando el nombre como parámetro a `correPrimero()` (línea 10). `correPrimero(unaFunción)` ahora espera un valor (línea 1) que llamaremos como si fuera una función (línea 3). **Ten en cuenta que el nombre es diferente porque pasamos el valor, no el nombre de la variable.** Esto produce una nueva impresión en la consola: `"Esto es una locura"`, antes de llamar a `correSegundo()` (línea 4). 

...*jump around!, jump around!, jump around!, Jump up, jump up and get down! (music)*... 

Ahora, supongamos que necesitamos cargar algunos archivos desde un servidor, específicamente, imágenes:

### Carga síncrona de imágenes

```javascript
function cargarImagen(){
    console.log("¡Cárgala!");
    // Código para cargar una imagen
    console.log("¡Imagen cargada!");
}
function usuarioEsperando(){
    console.log("No me gusta esperar");
}
cargarImagen();
usuarioEsperando();

/*RESULTADO EN CONSOLA
  > ¡Cárgala!            // El usuario comienza a esperar
                         // Ahora el usuario tiene que esperar a que lleguen las imágenes; hora: desconocida... navegador: congelado :(
  > ¡Imagen cargada!     // Después de ?? segundos
  > No me gusta esperar  // No queremos que los usuarios esperen tanto tiempo para ver las imágenes
*/
```
*Inaceptable...* 

En un sitio web de la vida real, los usuarios tendrán que esperar mucho tiempo para ver algo, todo porque el procesamiento ***DOM*** tiene que esperar a que lleguen las imágenes desde el servidor; y esto es todo porque estamos usando el mismo hilo de ejecución para todo.

### Asíncrono

La programación asíncrona es una forma de procesar líneas de código y manejar el resultado sin afectar el hilo principal. 

```javascript
function cargarImagen(){
    console.log("¡Cárgala!");
    fetch("la_url_de_la_imagen").then( (response) => {
        if(response.ok){ 
            console.log("¡Imagen cargada!");
        } else {
            console.log("Uh-oh algo salió mal");
        }
    });
}
function usuarioEsperando(){
    console.log("No me gusta esperar");
}
cargarImagen();
usuarioEsperando();


/*RESULTADO EN CONSOLA:
	> ¡Cárgala! 					// El usuario comienza a esperar
	> No me gusta esperar 				// ¡Sin espera! DOM listo para ver
							// ... y ?? segundos más tarde
	> ¡Imagen cargada! || Uh-oh algo salió mal 	// ¡Imagenes!... Mágia! || Oops, no hay imágenes
*/
```

JavaScript ofrece varias funciones asíncronas predefinidas que podemos utilizar para resolver cualquier escenario posible. Algunas de ellas son:

+ [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch): se utiliza para cargar archivos de forma asíncrona.
+ [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout): se utiliza para establecer temporizadores entre bloques de código.

En este caso, utilizamos la Fetch API para cargar las imágenes, *then* (luego) (después de obtener una respuesta del backend) escribimos algunos comentarios sobre el proceso.

Ten en cuenta que cualquier petición (request) HTTP puede fallar por diversas razones, siempre debemos estar preparados para un fallo.

## Promesas

Una promesa no es más que el resultado de una operación asíncrona. Representa la finalización o el fracaso de ese resultado en un objeto proporcionado por la promesa.

### Una promesa (promise) tiene 3 estados diferentes:

+ ***Pendiente***: el resultado de la promesa aún no se ha determinado porque la operación asíncrona no se ha completado.
+ ***Cumplida***: es cuando la operación asíncrona finaliza y la promesa devuelve un valor como un objeto.
+ ***Rechazada***: tiene lugar cuando la operación falló.

***Así es como se puede crear una promesa:*** 

```javascript
var myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("La promesa se ha resuelto");
  }, 300);
});
myPromise.then((obj) => {
  console.log(obj);
});
console.log(myPromise);

/*RESULTADO EN CONSOLA:
	> [Objeto de promesa] // Devolverá un objeto de promesa
	> La promesa se ha resuelto
*/
```

### Funciones Resolve y Reject 

+ ***Resolve*** se utiliza para cambiar el estado de una promesa de pendiente a cumplida.
+ ***Reject*** se utiliza para cambiar el estado de pendiente a rechazada.

### Métodos importantes que debemos conocer al usar promesas

+ ***resolve***: devuelve un objeto de promesa que tiene el estatus de resuelto con un valor.

```javascript
	// Aquí Promise representa el objeto de la promesa
	Promise.resolve("La promesa se ha resuelto con este valor").then(value => console.log(value));
	
	/*RESULTADO EN CONSOLA:
	> La promesa se ha resuelto con este valor
	
	***********
		Un mejor enfoque sería inicializar una variable
		igual a la promesa resuelta
		
	--- ejemplo: 
		let myResolvedPromise =  Promise.resolve("La promesa se ha resuelto con este valor");
	*/
```

+ ***reject***: devuelve una promesa rechazada por un motivo.

```javascript
Promise.reject(new Error("Fui rechazada")).then(error => console.log(error));
```

+ ***then***: este método devuelve una promesa y puede tomar hasta 2 argumentos. Una para la promesa resuelta y otra para la promesa rechazada. Arriba hay un ejemplo que usa el método ***then*** y toma un argumento.

```javascript
let promise = new Promise(function(resolve,reject){
    resolve("Fui resuelta y puedes verme cuando usas el método resolve");
});
promise.then(value => console.log(value));
```

+ ***catch***: devuelve una promesa y se ocupa de las operaciones rechazadas. Es muy útil cuando se trata de depurar o mostrar errores.


```javascript
let promise = new Promise(function(resolve,reject){
    reject("Me rechazaron y puedes verme cuando usas el método catch");
});
promise.catch(error => console.log(error));
```

## Async/await

+ ***Async/await*** es una forma de escribir código asíncrono.
+ ***Async*** es una función de JavaScript y puede contener una expresión ***await***.
+ ***Await*** pausa la ejecución de la función asíncrona y espera el resultado de una promesa.

> ☝ Recuerda que las expresiones *await* solo son válidas dentro de funciones asíncronas. Si las usas fuera, tendrás un error de sintaxis.

```javascript
function returnedPromiseHere() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Yo soy las imágenes que vienen de la base de datos");
        }, 1000);
    });
}
async function useAsyncFunction() {
    console.log("Soy una tarea rápida");
    let result = await returnedPromiseHere();
    console.log(result);
    console.log("Tuve que esperar a que el await terminara");
}
useAsyncFunction();

/*RESULTADO EN CONSOLA:
	> Soy una tarea rápida
	// Después de 1 segundo...
	> Yo soy las imágenes que vienen de la base de datos
	> Tuve que esperar a que el await terminara
*/
```

### Async se vuelve poderoso cuando hay varios pasos en acción:

```javascript
function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 1");
        }, 100);
    });
}
function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 2");
        }, 200);
    });
}
function promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 3");
        }, 300);
    });
}
async function handlingAllPromises() {
    let first = await promise1();
    let second = await promise2();
    let third = await promise3();
  
    console.log(first);
    console.log(second);
    console.log(third);
}
handlingAllPromises();
```

> ☝ En el ejemplo anterior, en lugar de esperar (await) una promesa en cada nueva línea, podríamos usar el método `Promise.all` y esperar a que se cumplan todas las promesas.

```javascript
let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);
```

### También puedes hacer funciones asíncronas como funciones de flecha (arrow functions)

```javascript
const handlingAllPromises = async () => {
    let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);
  
    console.log(first);
    console.log(second);
    console.log(third);
}
```

### ¿Cómo manejar errores en funciones asíncronas?

Una buena manera de manejar los errores en las funciones asíncronas es usar las sentencias `try...catch`.

```javascript
async function handeErrors() {
    let msg;
    try {
        msg = await promise1(); // Nótese que este método ya está escrito en su aplicación
        console.log(msg);
    } catch(err) {
        console.log(err);
    }
}
```

### Fetch API se basa en una promesa. ¿Adivina qué? ¡Puedes usarlo en tus funciones asíncronas también!

```javascript
async function fetchData(endpoint) { 
    const response = await  fetch(endpoint);  // Nota el uso de fetch API
    let data = await response.json();
    data = data.map(user => user.ID); 
    console.log(data); 
}

fetchData("http://dummyData/api/allUsers"); // Este es un ejemplo de endpoint

/*RESULTADO EN CONSOLA:
	> [1, 2, 3, 4] // Aquí obtenemos todos los ID de los usuarios de la base de datos
*/
```

## En conclusión

Tienes la capacidad de crear aplicaciones web increíbles y más rápidas. Además, los usuarios y las tareas más rápidas ya no tienen que esperar a que finalicen las tareas lentas, gracias a la ***programación asíncrona***.
