---
title: "Usando javascript para ordenar una lista"
subtitle: "Ya nadie ordena las listas manualmente, pero sigue siendo una manera fantástica de dominar tus habilidades algorítmicas"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
status: "published"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["sorting","algorithms","javascript"]

---

Ordenar es una tarea costosa para la CPU de la computadora, depende de la cantidad de datos y la forma en que están organizados los datos inicialmente. Esta combinación de posibilidades hizo que los desarrolladores crearan varias soluciones algorítmicas que se pueden aplicar a cada lenguaje de programación.

## P: Busqué en Google y encontré un `.sort ()`, entonces, ¿por qué debería hacerlo manualmente?
R: Ordenar algoritmos es una de las primeras lecciones en Informática, ya que te ayuda a pensar como un computador. Es una gran práctica comprender completamente los conceptos de algoritmos y códigos.

## P: ¿Qué tipos de algoritmos para ordenar existen?
R: Hay más de los que podemos contar, los 10 más populares son:

### Algoritmo bubble-sort

Es el más simple de los algoritmos para ordenar. Intercambia repetidamente elementos adyacentes para organizarlos de forma ascendente, el algoritmo tiene un `"wall"` o muro que representa la última posición que se va a comparar, el muro sigue moviéndose de izquierda a derecha, reduciendo el tamaño de comparación hasta que se ordena la lista completa.

![Bubble Sort Explained](../../assets/images/2fef4d85-686b-4bf0-a505-45d3de178fd5.gif)

En Javascript:
```js
const bubbleSort = (arr) => {
    let wall = arr.length - 1; //iniciamos el wall o muro al final del array
    while (wall > 0){
        let index = 0;
        while (index < wall) {
          //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
          if (arr[index] > arr[index + 1]) { 
            let aux = arr[index]; 
            arr[index] = arr[index + 1];
            arr[index + 1] = aux;
          }
          index++;
        }
        wall--; //disminuir la pared para optimizar
    }
	return arr;
};
```

> :tv: En este enlace, encontrarás [una muy buen video de 2 minutos con una explicación](https://www.youtube.com/watch?v=xli_FI7CuzA).

> :tv: Aquí hay un verdadero [grupo extraño de búlgaros](https://www.youtube.com/watch?v=lyZQPjUT5B4&t=1s) bailando el algoritmo bubble-sort.

### Ordenando con selection

`Selection` también tiene un muro, pero en este caso, marca el comienzo del bucle, el algoritmo busca el elemento más pequeño y lo intercambia con el inicial, luego mueve el muro una posición hacia la derecha para no ver de nuevo ese mismo artículo.

![Selection explicado](../../assets/images/ddb1ff5a-621c-4945-9164-20c1a7f5d388.gif)

En javascript
```js
const selectSort = (arr) => {
    let min = 0;
    while (min < arr.length-1){
        for(let i = min+1; i < arr.length-1; i++) {
          if (arr[min] > arr[i]) {
            let aux = arr[min];
            arr[min] = arr[i];
            arr[i] = aux;
          }
        }
        min++;
    }
	return arr;
};
```
> :tv: En este enlace, encontrarás [una muy buena explicación en un video de 3 minutos](https://www.youtube.com/watch?v=g-PGLbMth_g) sobre el algoritmo de clasificación por selección.

### Ordenando con el  Cocktail Shaker

Cocktail Shaker funciona en ambos frentes al mismo tiempo: busca el de mayor valor escaneando de izquierda a derecha y también el más pequeño cuando vuelve de derecha a izquierda. Tiene 2 muros (uno para cada lado de la lista), y ambos muros siguen encogiéndose hasta que chocan entre sí, cuando eso sucede, el array está completamente ordenado.

![Selección explicada](../../assets/images/6d44c6a9-7f32-4b0e-86d7-1a210c3a5f4a.gif)
En javascript:
```js
const shakerSort = (arr) => {
  let max = arr.length - 1;
  let min = 0;
  while(min < max){
  	let biggest = min;
    let smallest = max;
    //
  	for (var i = min; i <= max; i++) if(arr[biggest] < arr[i]) biggest = i;
    if(max != biggest){ //swap the items
    	let aux = arr[max]; arr[max] = arr[biggest]; arr[biggest] = aux;
    }
    max--;
    for (var j = max; j >= min; j--) if(arr[smallest] > arr[j]) smallest = j;
    if(min != smallest){ //swap the items
    	let aux2 = arr[min]; arr[min] = arr[smallest]; arr[smallest] = aux2;
    }
    min++;
  }  
  return arr;
}
```
> :tv: En este enlace, encontrarás [una muy buena explicación en un video de 3 minutos](https://www.youtube.com/watch?v=g-PGLbMth_g) sobre el algoritmo para ordenar Cocktail Shaker.

### Ordenando con Insertion

Ordenar con Insertion implica pasar por una pila, tomar un elemento, compararlo con el primero, intercambiar lugares si un elemento es más grande que otro y continuar este proceso hasta que el elemento mínimo se encuentre en la ubicación correcta.

![algoritmo Insertion](../../assets/images/38fed925-cf75-4f94-bdd7-abcce659fdac.gif)
En javascript:
```js
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
	    let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j].num > key.num) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
};
```

> :tv: En este enlace, encontrarás [una muy buena explicación en un video de 3 minutos](https://www.youtube.com/watch?v=JU767SDMDvA) sobre el algoritmo para ordenar Insertion.

### Ordenando con Merge

Merge es un algoritmo más difícil porque usa [recursividad](https://www.youtube.com/watch?v=KEEKn7Me-ms). Es un ejemplo de un algoritmo para ordenar del tipo dividir y conquistar, divide el array desordenado en dos partes y luego recursivamente aplica merge a estos arrays a estos sub-array hasta quedar con un montón de arrays con un solo elemento. Luego, compara los arrays de un solo elemento entre sí antes de combinarlos en un array ordenado de dos elementos (y así sucesivamente). Terminará con una solo array ordenado de longitud n.

![Ordenando con Merge](../../assets/images/e8781e98-0f8c-4035-8017-33ca217eb39c.gif)

> :tv: En este enlace, encontrarás [una muy buena explicación en un video de 4 minutos](https://www.youtube.com/watch?v=JU767SDMDvA) sobre el algoritmo de Merge

### Ordenando con quicksort

Utiliza la misma estrategia de "divide y vencerás" para obtener las mismas ventajas. Primero selecciona un valor, que se llama el **valor de pivote**. La función del valor pivote es ayudar a dividir la lista. La posición actual donde el valor pivote pertenece a la lista final ordenada, comúnmente llamada **punto de división**, se usará para dividir la lista para las llamadas subsiguientes a la ordenación rápida.

![../_images/firstsplit.png](http://interactivepython.org/courselib/static/pythonds/_images/firstsplit.png)

La partición comienza al ubicar dos marcadores de posición, llamémoslos `leftmark` y` rightmark`, al principio y al final de los elementos restantes de la lista (posiciones 1 y 8). El objetivo del proceso de partición es mover los elementos que están en el lado incorrecto con respecto al valor de pivote y al mismo tiempo converger en el punto de división.

![../_images/partitionA.png](http://interactivepython.org/courselib/static/pythonds/_images/partitionA.png)

Comenzamos incrementando `leftmark` hasta que localizamos un valor que es mayor que el valor de pivote. Luego disminuimos `rightmark` hasta que encontramos un valor que es menor que el valor de pivote. En este punto, hemos descubierto dos elementos que están fuera de lugar con respecto al punto de división final. Para nuestro ejemplo, esto ocurre en 93 y 20. Ahora podemos intercambiar estos dos elementos y luego repetir el proceso nuevamente.

Cuando `rightmark` se vuelve menor que` leftmark`, paramos. La posición de `rightmark` es ahora el punto de división. El valor de pivote se puede intercambiar con el contenido del punto de división y el valor de pivote ahora está en su lugar. Además, todos los elementos a la izquierda del punto de división son menores que el valor de pivote, y todos los elementos a la derecha del punto de división son mayores que el valor de pivote. La lista ahora se puede dividir en el punto de división y la ordenación rápida se puede invocar recursivamente en las dos mitades.

![../_images/partitionB.png](http://interactivepython.org/courselib/static/pythonds/_images/partitionB.png)

La función `quickSort` invoca una función recursiva,` quickSortHelper`. `quickSortHelper` comienza con el mismo caso base que Merge. Si la longitud de la lista es menor o igual a uno, ya está ordenada. Si es mayor, puede particionarse y ordenarse recursivamente. La función `partition` implementa el proceso descrito anteriormente.

![Algoritmo Quicksort](../../assets/images/c60c4713-aa60-4fbc-9d97-f893b5947e7f.gif)

> :tv: En este enlace, encontrarás [una muy buena explicación de video de 4 minutos](https://www.youtube.com/watch?v=Hoixgm4-P4M) sobre el algoritmo de clasificación rápida.

## Recursos Adicionales

Aquí hay otra lista con todos los algoritmos más utilizados:
https://codepen.io/msurguy/pen/fBDJA


66/5000
Aquí hay un punto de referencia en la vida real de los principales algoritmos para ordenar:
https://codepen.io/villa7/pen/LyLVbj
