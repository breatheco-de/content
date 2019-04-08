---
slug: "asincrono-algoritmos-async-await"
title: "Creando algoritmos asíncronos"
subtitle: "Comprenda la diferencia entre scripts síncronos y asíncronos, uso de Promises y master async y wait."
cover: "https://ucarecdn.com/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e/"
status: "draft"
author: ["kode2fever", "nachovz"]
textColor: "white"
date: "2018-05-11"
tags: ["async","await","promise","asynchronous"]

---

## Programación Asíncrona con JavaScript
***
Hasta este punto, hemos utilizado código JavaScript para ejecutar aplicaciones web simples, que incluyen: usar variables, llamar a funciones y jugar con el ***DOM***. En las funciones, específicamente, incluso pasamos funciones a otras funciones (***funciones de devolución de llamada***) y hay más para hablar de esto.

Comencemos diciendo que JavaScript es síncrono y de un solo hilo por definición, es decir: el código se ejecuta desde la línea 1 hasta el último, uno a la vez y en ese orden normalmente. Echale un vistazo a éste ejemplo:

#### Sincrónico (por defecto)
```javascript
1    function runFirst(){
2 	console.log("first");
3    }
4    function runSecond(){
5 	console.log("second");
6    }
7    runSecond();
8    runFirst();

/*
CONSOLE OUTPUT:
  > second
  > first
*/
```

Aquí: la línea 5 se ejecuta antes de la línea 2 porque estamos llamando a ```runSecond ()``` (línea 7) antes de ```runFirst ()``` (línea 8). Rompiendo el orden de mando de la computadora que *llama* (o ejecuta) el bloque de código dentro de una función.

Las cosas se complican más cuando se llaman funciones dentro de funciones, como podemos ver aquí:

#### Funciones de Llamada
```javascript
1    function runFirst(){
2	console.log("Quiero correr primero");
3	runSecond();
4	console.log("I also want to run when runFirst runs");
5    }
6    function runSecond(){
7	console.log("¿Donde estoy corriendo?");
8    }
9   runFirst();

/*
CONSOLE OUTPUT:
  > Quiero correr primero
  > ¿Donde estoy corriendo?
  > También quiero correr cuando se ejecuta RunFirst //Esta línea de código tuvo que esperar a que RunSecond () terminara.
*/
```

*OK qué...?*

Esto sucede porque la ***pila de llamadas*** en JavaScript realiza un seguimiento de las funciones que se están ejecutando actualmente y se están procesando:
+ ```runFirst()``` se inserta en la pila de llamadas porque la llamamos (línea 9).
+ Vemos nuestro primer ```console.log``` (línea 2), después de eso, se llama a ```runSecond ()``` (línea 3).
+ ```runFirst ()``` hace una pausa en su ejecución y ```runSecond ()``` comienza a ejecutarse.
+ Segundo ```console.log``` ejecutado (linea 7).
+ Una vez que ```runSecond ()``` termina, ```runFirst ()``` comienza nuevamente, ejecutando el resto de su código, el último ```console.log``` (línea 4).

D I V I E R T E T E !

Pero espera, hay más... Incluso podríamos pasar una *función* como argumento a otra función (no, esto no es un error tipográfico). La *función* enviada como parámetro se llama **función de devolución de llamada**. Echar un vistazo:

#### Funciones de Devolución de Llamada
```javascript
1    function runFirst(someFunction){
2	console.log("Quiero correr primero");
3	someFunction();
4	runSecond();
5	console.log("También quiero correr cuando se ejecuta RunFirst");
6    }
7    function runSecond(){
8	console.log("¿Donde estoy corriendo?");
9    }
10   runFirst(aThirdOne);
11
12   function aThirdOne(){
13	console.log("Esto es Loco");
14   }
15

/*
CONSOLE OUTPUT:
  > Quiero correr primero
  > Esto es Loco
  > ¿Donde estoy corriendo?
  > También quiero correr cuando se ejecuta RunFirst
*/
```

...*Es posible que desee echar un segundo vistazo, no se preocupe, esperaremos*...

Tiempo de explicacion!

Hemos agregado una nueva función ```aThirdOne ()``` (línea 12), que muestra los registros de la consola: "esto es una locura"; pero no lo estamos llamando directamente, en cambio, estamos pasando el nombre como parámetro a ```runFirst ()``` (línea 10).
```runFirst(someFunction)``` it's now expecting a value (line 1) which will be called as if it were a function (line 3).
**Tenga en cuenta que el nombre es diferente porque pasamos el valor, no el nombre de la variable.** 
Esto produce una nueva impresión en la consola: "esto es una locura", antes de llamar a ```runSecond ()``` (línea 4). 

...*jump around!, jump around!, jump around!, Jump up, jump up and get down! (music)*... 

Ahora, supongamos que necesitamos cargar algunos archivos desde un servidor, específicamente, imágenes:

#### Carga síncrona de imágenes.
```javascript
1    function fetchingImages(){
3	console.log("Cargarlos!");
4	//SOME CODE TO LOAD IMAGES
5	console.log("Imágenes cargadas!");
6    }
7    function userIsWaiting(){
8	console.log("No me gusta esperar");
9    }
10   fetchingImages();
11   userIsWaiting();
12

/*CONSOLE OUTPUT:
	> Cargarlos! 			//el usuario comienza a esperar
					//ahora el usuario tiene que esperar a que lleguen las imágenes, hora: desconocido... navegador: congelado :(
	> Imágenes cargadas! 		//después ?? segundos
	> No me gusta esperar 		//No queremos que los usuarios esperen tanto tiempo para ver las imágenes.
*/
```
*Inaceptable...* 

En un sitio web de la vida real, los usuarios tendrán que esperar mucho tiempo para ver algo, todo porque el procesamiento ***DOM*** tiene que esperar a que lleguen las imágenes desde el servidor; y esto es todo porque estamos usando el mismo hilo de ejecución para todo.

### Asincrónico
La programación asíncrona es una forma de procesar líneas de código y manejar el resultado sin afectar el hilo principal. 
```javascript
1    function fetchingImages(){
3	console.log("Cargarlos!");
4	fetch("the_url_of_the_image").then( (response) => {
5		if(response.ok){ 
6			console.log("Imágenes cargadas!!");
7		} else {
8			console.log("Uh-oh algo salió mal");
9		}
10	});
11   }
12   function userIsWaiting(){
13	console.log("No me gusta esperar");
14   }
15   fetchingImages();
16   userIsWaiting();
17

/*CONSOLE OUTPUT:
	> Cargarlos! 					//el usuario comienza a esperar
	> No me gusta esperar 				//¡sin espera! DOM listo para ver
							//... y ?? segundos más tarde
	> Imágenes cargadas! OR Uh-oh algo salió mal 	//Imágenes!... Mágico! || Oops, no hay imágenes
*/
```

Javascript ofrece un puñado de funciones asíncronas predefinidas que podemos utilizar para resolver cualquier escenario posible. Algunos de ellos son:
+ [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch): se utiliza para cargar archivos de forma asíncrona.
+ [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout): se utiliza para establecer temporizadores entre bloques de código.

En este caso, utilizamos la API Fetch para cargar las imágenes y *luego* (después de obtener una respuesta del servidor) escribimos algunos comentarios del proceso.

Tenga en cuenta que cualquier llamada a la red puede fallar debido a muchas razones, siempre debemos estar preparados para la falla.

## Promesas
***
Una promesa no es más que el resultado de una operación asíncrona. Representa la finalización o el fracaso de ese resultado en un objeto proporcionado por la promesa.

#### Una promesa tiene 3 estados diferentes:
+ ***Pendiente***: el resultado de la promesa aún no se ha determinado porque la operación asíncrona no se ha completado.
+ ***Cumplido***: es cuando la operación asíncrona finaliza y la promesa devuelve un valor como un objeto.
+ ***Rechazado***: tiene lugar cuando la operación falló.
***

***Así es como se puede crear una promesa.*** 
```javascript
var myPomise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Yo estaba resuelto");
  }, 300);
});
myPomise.then((obj) => {
  console.log(obj);
});
console.log(myPomise);

/*CONSOLE OUTPUT:
	>objeto de promesa // devolverá un objeto de promesa
	>"Estaba resuelto"
*/
```
***
### Resolver y rechazar funciones
+ ***Resolver*** se utiliza para cambiar el estado de una promesa de pendiente a cumplida.
+ ***Rechazar*** se utiliza para cambiar el estado de pendiente a rechazado.


### Métodos importantes que debemos conocer al usar promesas.
+ ***resolve***: devuelve un objeto de promesa que tiene el status de resuelto con un valor.
```javascript
	//aquí Promesa representa el objeto Promesa.
	Promise.resolve("Yo estaba resuelto con este valor").then(value => console.log(value));
	
	/*CONSOLE OUTPUT:
	>"Yo estaba resuelto con este valor"
	
	***********
		Un enfoque mejor recomendado será inicializar una variable.
		es igual a la promesa resuelta.
		
	--- sample: 
		var myResolvedPromise =  Promise.resolve("Yo estaba resuelto con este valor");
	*/
```
***

+ ***reject***: devuelve una promesa ya rechazada con un motivo.
```javascript
	Promise.reject(new Error("fui rechazado")).then(error => console.log(error));
```
***

+ ***then***: este método devuelve una promesa y puede tomar hasta 2 argumentos. Una para la promesa resuelta y otra para la promesa rechazada. Arriba hay un ejemplo que usa el método ***then*** y toma un argumento.
```javascript
	var promise =  new  Promise(function(resolve,reject){
		resolve("Estaba resuelto y puedes verme cuando usas el método.");
	});
	promise.then(value => console.log(value));
```
***
+ ***catch***: devuelve una promesa y se ocupa de las operaciones rechazadas. Es muy útil cuando se trata de depurar o mostrar errores.
```javascript
	var promise =  new  Promise(function(resolve,reject){
		reject("Me rechazaron y puedes verme cuando usas el método catch.");
	});
	promise.catch(error => console.log(error));
```
***

## Async/await
***
+ ***Async/await***Es una forma de escribir código asíncrono.
+ ***Async*** es una función de JavaScript y puede contener una expresión ***await***.
+ ***Await*** pausa la ejecución de la función asíncrona y espera el resultado de una promesa.

[[warning]]
| Recuerda que las expresiones de espera solo son válidas dentro de funciones asíncronas. Si los usa fuera, tendrá un error de sintaxis.

```javascript
function returnedPromiseHere() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Yo soy las imágenes que vienen de la base de datos.");
    }, 1000);
  });
}
async function useAsyncFunction() {
  console.log("Soy una tarea rapida");
  var result = await returnedPromiseHere();
  console.log(result);
  console.log("Tuve que esperar a que terminara");
}
useAsyncFunction();

/*CONSOLE OUTPUT:
	>"Soy una tarea rapida"
	//después de 1 segundo...
	>"Yo soy las imágenes que vienen de la base de datos."
	>"Tuve que esperar a que terminara"
*/
```
### Async se vuelve poderoso cuando hay varios pasos en acción:
```javascript
function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Estoy resuelto como 1");
    }, 100);
  });
}
function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Estoy resuelto como 2");
    }, 200);
  });
}
function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Estoy resuelto como 3");
    }, 300);
  });
}
async function handlingAllPromises() {
  var first = await promise1();
  var second = await promise2();
  var third = await promise3();
  
  console.log(first);
  console.log(second);
  console.log(third);
}
handlingAllPromises();
```
#### En el ejemplo anterior, en lugar de esperar una promesa en cada nueva línea, podríamos usar el método Promise.all y esperar a que se cumplan todas las promesas.
```javascript
	var [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);
```
***
### También puedes hacer funciones asíncronas como funciones de flecha(arrow).
```javascript
const handlingAllPromises = async () => {
  var [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);
  
  console.log(first);
  console.log(second);
  console.log(third);
}
```
***
### ¿Cómo manejar errores en funciones asíncronas?
Una buena manera de manejar los errores en las funciones asíncronas es usar las sentencias try... catch.

```javascript
async function handeErrors() {
  let msg;
  try {
    msg = await promise1(); //Nota que este método ya está escrito en su aplicación.
    console.log(msg);
  } catch(err) {
    console.log(err);
  }
}
```
***
### Fetch api se basa en la promesa. ¿Adivina qué? Puedes usarlo en tus funciones asíncronas también !!
```javascript
async  function fetchData(endpoint) { 
	const response = await  fetch(endpoint); //nota el uso de fetch api
	let data = await res.json();
	data = data.map(user => user.ID); 
	console.log(data); 
}

fetchData(http://dummyData/api/allUsers); //este es un ejemplo de punto final

/*CONSOLE OUTPUT:
	>[1, 2, 3, 4] //Aquí obtenemos todos los usuarios ID de la base de datos
*/
```
***
## En conclusión
Tienes la capacidad de crear aplicaciones web increíbles y más rápidas. Además, los usuarios y las tareas más rápidas ya no tienen que esperar a que finalicen las tareas lentas, gracias a la ***programación asíncrona***.
