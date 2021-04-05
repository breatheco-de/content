---
slug: "asincrono-algoritmos-async-await"
title: "Creando algoritmos asíncronos"
subtitle: "Comprende la diferencia entre scripts síncronos y asíncronos, uso de Promises y master async y wait."
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
status: "published"
authors: ["kodi2fever","nachovz"]
textColor: "white"
date: "2020-10-19T16:36:30+00:00"
tags: ["async","await","promise","asynchronous"]

---

## Programación Asíncrona con JavaScript
***

Hasta ahora, hemos utilizado código JavaScript para ejecutar aplicaciones web simples, que incluyen: usar variables, llamar a funciones y jugar con el ***DOM***. En las funciones, específicamente, incluso pasamos funciones a otras funciones (***funciones callback***) y hay mucho más que hablar al respecto. 

Comencemos diciendo que JavaScript por defecto es síncrono y con una sola secuencia, es decir: el código se ejecuta desde la línea 1 hasta el último, uno a la vez y en ese orden normalmente. Échale un vistazo a éste ejemplo:

#### Sincróno(por defecto)

```javascript
1    function ejecutarPrimero(){
2 	console.log("primero");
3    }
4    function ejecutarSegundo(){
5 	console.log("segundo");
6    }
7    ejecutarSegundo();
8    ejecutarPrimero();

/*
RESULTADO EN CONSOLA:
  > segundo
  > primero
*/
```

Aquí: la línea 5 se ejecuta antes de la línea 2 porque estamos llamando a ```correSegundo ()``` (línea 7) antes de ```correPrimero ()``` (línea 8). Rompiendo el orden de mando de la computadora que *llama* (o ejecuta) el bloque de código dentro de una función.

Las cosas se complican más cuando se llaman funciones dentro de funciones, como podemos ver aquí:

#### Funciones de Llamada

```javascript
1    function correPrimero(){
2	console.log("Quiero correr primero");
3	correSegundo();
4	console.log("Yo también quiero correr cuando correPrimero corra");
5    }
6    function correSegundo(){
7	console.log("¿Donde estoy corriendo?");
8    }
9   correPrimero();

/*
RESULTADO CONSOLA:
  > Quiero correr primero
  > ¿Donde estoy corriendo?
  > También quiero correr cuando se ejecuta correPrimero //Esta línea de código tuvo que esperar a que correSegundo() terminara.
*/
```

*OK qué...?*

Esto sucede porque la ***call stack*** en JavaScript lleva un registro de las funciones que se están ejecutando actualmente y se están procesando:
+ ```correPrimero()``` se añade al call stack porque la llamamos (línea 9).
+ Vemos nuestro primer ```console.log``` (línea 2), después de eso, se llama a ```correSegundo ()``` (línea 3).
+ ```correPrimero ()``` hace una pausa en su ejecución y ```correSegundo ()``` comienza a ejecutarse.
+ Segundo ```console.log``` se ejecuta (linea 7).
+ Una vez que ```correSegundo ()``` termina, ```correPrimero ()``` comienza nuevamente, ejecutando el resto de su código, el último ```console.log``` (línea 4).

¡ D I V I E R T E T E !

Pero espera, hay más... Incluso podríamos pasar una *función* como argumento a otra función (no, esto no es un error tipográfico). La *función* enviada como parámetro se llama **función callback**. Echa un vistazo:

#### Funciones de Devolución de Llamada

```javascript
1    function correPrimero(unaFuncion){
2	console.log("Quiero correr primero");
3	unaFuncion();
4	correSegundo();
5	console.log("También quiero correr cuando se ejecute correPrimero");
6    }
7    function correSegundo(){
8	console.log("¿Donde estoy corriendo?");
9    }
10   correPrimero(unaTercera);
11
12   function unaTercera(){
13	console.log("Esto es una locura");
14   }
15

/*
RESULTADO CONSOLA:
  > Quiero correr primero
  > Esto es una locura
  > ¿Donde estoy corriendo?
  > También quiero correr cuando se ejecuta correPrimero
*/
```

...*Es posible que quieras repasar, no te preocupes, tenemos tiempo*...

¡Tiempo de explicaciones!

Hemos agregado una nueva función ```unaTercera ()``` (línea 12), que muestra los registros de la consola: "esto es una locura"; pero no la estamos llamando directamente, en cambio, estamos pasando el nombre como parámetro a ```correPrimero ()``` (línea 10).
```correPrimero(unaFunción)``` ahora espera un valor (línea 1) que llamaremos como si fuera una función (línea 3).
**Ten en cuenta que el nombre es diferente porque pasamos el valor, no el nombre de la variable.** 
Esto produce una nueva impresión en la consola: "esto es una locura", antes de llamar a ```correSegundo ()``` (línea 4). 

...*jump around!, jump around!, jump around!, Jump up, jump up and get down! (music)*... 

Ahora, supongamos que necesitamos cargar algunos archivos desde un servidor, específicamente, imágenes:

#### Carga síncrona de imágenes.

```javascript
1    function cargarImagen(){
3	console.log("¡Cárgarla!");
4	//código para cargar una imagen
5	console.log("¡Imagen cargada!");
6    }
7    function usuarioEsperando(){
8	console.log("No me gusta esperar");
9    }
10   cargarImagen ();
11   usuarioEsperando ();
12

/*RESULTADO CONSOLA
	> ¡Cárgala! 			//el usuario comienza a esperar
					//ahora el usuario tiene que esperar a que lleguen las imagen, hora: desconocido... navegador: congelado :(
	> ¡Imagen cargada!		//después ?? segundos
	> No me gusta esperar 		//No queremos que los usuarios esperen tanto tiempo para ver las imágenes.
*/
```
*Inaceptable...* 

En un sitio web de la vida real, los usuarios tendrán que esperar mucho tiempo para ver algo, todo porque el procesamiento ***DOM*** tiene que esperar a que lleguen las imágenes desde el servidor; y esto es todo porque estamos usando el mismo hilo de ejecución para todo.

### Asincrónico

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


/*RESULTADO CONSOLA:
	> ¡Cárgala! 					//el usuario comienza a esperar
	> No me gusta esperar 				//¡sin espera! DOM listo para ver
							//... y ?? segundos más tarde
	> ¡Cárgala!  OR Uh-oh algo salió mal 	//¡Imagen!... Mágico! || Oops, no hay imágenes
*/
```

Javascript ofrece varias funciones asíncronas predefinidas que podemos utilizar para resolver cualquier escenario posible. Algunos de ellas son:

+ [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch): se utiliza para cargar archivos de forma asíncrona.
+ [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout): se utiliza para establecer temporizadores entre bloques de código.

En este caso, utilizamos la Fetch API para cargar las imágenes y *luego* (después de obtener una respuesta desde backend) escribimos algunos comentarios sobre el proceso.

Tenga en cuenta que cualquier peticion (request) http puede fallar por diversas razones, siempre debemos estar preparados para la falla.

## Promesas
***
Una promesa no es más que el resultado de una operación asíncrona. Representa la finalización o el fracaso de ese resultado en un objeto proporcionado por la promesa.

#### Una promesa (promise) tiene 3 estados diferentes:

+ ***Pendiente***: el resultado de la promesa aún no se ha determinado porque la operación asíncrona no se ha completado.
+ ***Cumplida***: es cuando la operación asíncrona finaliza y la promesa devuelve un valor como un objeto.
+ ***Rechazada***: tiene lugar cuando la operación falló.
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

/*RESULTADO EN CONSOLA:
	>Objeto de promesa // devolverá un objeto de promesa
	>"Estaba resuelto"
*/
```
***
### Resolve y reject funciones

+ ***Resolve*** se utiliza para cambiar el estado de una promesa de pendiente a cumplida.
+ ***Reject*** se utiliza para cambiar el estado de pendiente a rechazado.


### Métodos importantes que debemos conocer al usar promesas.

+ ***resolve***: devuelve un objeto de promesa que tiene el status de resuelto con un valor.
```javascript
	//aquí Promesa representa el objeto Promesa.
	Promise.resolve("Yo estaba resuelto con este valor").then(value => console.log(value));
	
	/*RESULTADO EN CONSOLA:
	>"Yo estaba resuelto con este valor"
	
	***********
		Un mejor enfoque sería inicializar una variable.
		igual a la promesa resuelta.
		
	--- ejemeplo: 
		var myResolvedPromise =  Promise.resolve("Yo estaba resuelto con este valor");
	*/
```
***

+ ***reject***: devuelve una promesa rechazada por un motivo.

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

[[Warning]]
| Recuerda que las expresiones await sólo son válidas dentro de funciones asíncronas. Si las usas fuera, tendrás un error de sintaxis.

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

/*RESULTADO EN CONSOLA:
	>"Soy una tarea rápida"
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
### Fetch API se basa en la promesa. ¿Adivina qué? Puedes usarlo en tus funciones asíncronas también !!
```javascript
async  function fetchData(endpoint) { 
	const response = await  fetch(endpoint); //nota el uso de fetch api
	let data = await res.json();
	data = data.map(user => user.ID); 
	console.log(data); 
}

fetchData(http://dummyData/api/allUsers); //este es un ejemplo de endpoint

/*RESULTADO EN CONSOLA:
	>[1, 2, 3, 4] //Aquí obtenemos todos los usuarios ID de la base de datos
*/
```
***
## En conclusión
Tienes la capacidad de crear aplicaciones web increíbles y más rápidas. Además, los usuarios y las tareas más rápidas ya no tienen que esperar a que finalicen las tareas lentas, gracias a la ***programación asíncrona***.
