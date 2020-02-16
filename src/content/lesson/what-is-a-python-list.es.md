---
title: "Es Hora de Aprender lo que es un Arreglo o List en Python"

subtitle: "¿Se puede trabajar con arreglos? Si no puedes, no te preocupes aquí, aprenderás qué es un arreglo/list y cómo trabajar con ellas."

cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2020-02-16"
syntax: "python"
tags: ["array", "list","python","loops"]
---

## **¿Por qué están los arreglos en una lección separada?**
***

¡Porque los arreglos son demasiado importantes! Necesitas dominarlos al 100% y debemos enfocarnos mucho en ellos para prepararte para la vida real 🙂

Dominar el uso de los `arreglos e iteraciones` es una de las 5 habilidades fundamentales de construir algoritmos:

1. Variables.
2. Condicionales.
3. `Arrays (Arreglos)`.
4. `Loops (Bucles)`.
5. Funciones.

**No no no…Espera:  Listas? Arreglos?  Que?**

Un arreglo/lista es, normalmente, cualquier colección de valores. Las reglas de cómo agregar o eliminar elementos de esa lista pueden cambiar de un lenguaje de programación a otro. Pero - en general - son las únicas formas en que los desarrolladores pueden crear elementos.
Los arreglos son la única forma en que tenemos que enumerar las cosas - independientemente de la aplicación con la que esté trabajando, siempre tendrás cosas que enumerar. Por ejemplo: lista de estudiantes, lista de artistas, lista de transacciones ... ¡cualquier cosa!

Este tipo de datos hace muchas más cosas que los otros. Las listas son la única forma de almacenar más de un tipo de datos en la misma variable.

Cada arreglo tiene los mismos conceptos básicos:

**The items:** Son los valores reales dentro de cada posición del arreglo.

**The length:** es el tamaño del arreglo (cuántos elementos tiene el arreglo).

**Index:** es la posición del elemento.

![what is an array define array](https://ucarecdn.com/7ed2c414-0d00-4e68-b659-b65c26d1983a/-/resize/1000x/)


[[info]]
| :point_up: Las posiciones del arreglo comienzan con **cero (0)**; el primer elemento es el elemento en la posición **cero (0)**

## ¿Como Declarar una Lista/Arreglo en Python?
***

Utilizando corchetes de la siguiente manera:

```python
myList = [] # lista vacia
myList = ["Apple", "Orange", "Donkey"] # con 3 elementos de cadena por defecto.
```

## Acceder a los Elementos en la lista Python

Para acceder a un elemento específico en una lista, necesita un índice. Un índice es un valor entero que representa la posición del arreglo a la que desea acceder.

El índice siempre debe comenzar en cero (0). Eso significa que un arreglo de 2 elementos puede tener un índice = 0 o un índice = 1. Tratar de obtener la segunda posición devolverá "indefinido" porque significará que estamos tratando de acceder al tercer elemento (que no existe). Por ejemplo, para obtener cualquier elemento del arreglo, puede hacer lo siguiente:

```python
    print(myList[0])  # Esto imprimirá el 1er elemento en la consola.
    aux = myList[5]
    print(aux); # Esto imprimirá el 4to elemento en la consola.
    print(myList[myList.length-1]);  #vEsto imprimirá el último elemento del arreglo.
```

## Actualizar Elementos en el Arreglo

Si lo deseas, puedes restablecer o actualizar cualquier elemento dentro de un arreglo usando el índice como este:

```python
    myList[5] = 'Whatever value'
    # Esto establecerá el valor 'Cualquier valor' en el sexto elemento del arreglo.
```

## Añadiendo elementos a una lista (función append o insert) en Python

Hay dos formas de agregar un nuevo elemento: final de la lista o donde tu quieras, y necesitemos usar las funciónes append e insert respectivamente para eso.

### Utilizando `append` en Python

```python
    myList = ['Pedro','Juan','Maria']
    myList.append('Chris') # esto agrega a chris al principio del arreglo
    print(myList); # esto imprimirá ['Pedro','Juan','Maria','Chris'];
```

### Utilizando `insert` (seleccionando posicion) en Python

La ventaja de utilizar insert es que te permite seleccionar la posicion donde deseas insertar el elemento en el array:

```python
    myList = ['Pedro','Juan','Maria']
    myList.insert(1,'Chris') # esto agrega a chris entre Pedro y Juan
    print(myList); # esto imprimirá ['Pedro','Chris','Juan','Maria'];
```

[[info]]
| :point_up: La funcion `insert` es mucho mas lenta que `append`, deberias tratar de eviarla.

## Eliminando Elementos de una lista con Python(función pop, remove, delete)


A diferencia de otros lenguajes como Javascript, Python cuenta con varias funciones para remover elementos de un array: Pop, Remove, Delete.

### Removiendo elementos de una lista con POP

Eliminar un elemento utilizando `pop` tiene exactamente las mismas limitaciones que al agregar un elemento utilizando `append`: solo permite eliminar un elemento de la última posición de la lista. 
Si desea eliminar un elemento diferente, debes utilizar otra funcion (como remove o delete) crear una nueva lista sin ese elemento en particular.

```python
    myList = ['Pedro','Chris','Juan','Maria']
    myList.pop()
    print(myList) # esto imprimirá ['Pedro','Chris','Juan']
```

### Removiendo elementos de una lista con Remove

```python
    #Si deseas eliminar 'Chris', necesitas hacer lo siguiente: 
    myList = ['Pedro','Chris','Juan','Maria']
    myNewArray.remove(2)
    print(myList) # esto imprimirá ['Pedro','Chris','Juan'];
```

### Removiendo elementos de una lista con Delete

Una de las funcionalidades mas útiles de `del` es que puedes eliminar un rango de elementos de una sola vez.

```python
    #Si deseas eliminar 'Chris', necesitas hacer lo siguiente: 
    myList = ['Pedro','Chris','Juan','Maria','Pepe','Mario','Bob']
    del myList[2:5]
    print(myList) # esto imprimirá ['Pedro', 'Chris', 'Mario', 'Bob']
```

## Iterando sobre una lista (bucles)
***

Normalmente, cuando trabajes con listas, tendrás que recorrer todos los items. Por ejemplo: ordenándolos manualmente; voltearlos, filtrarlos, etc.

Hay varias formas de recorrer una lista, pero la mas utilizada es la funcion `for`:

```python
myList = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12]
for number in myList:
    print(number)
```

## Iterando usando la posicion

A veces es útil recorrer un arreglo utilizando la posicion:

```python
for i in range(0,len(myList)):
    print("La posicion es "+str(i)+" para el elemento "+myList[i])

### Imprimira lo siquiente
# La posicion es 0 para el elemento Pedro
# La posicion es 1 para el elemento Chris
# La posicion es 2 para el elemento Mario
# La posicion es 3 para el elemento Bob
```

## Clasificando los Arreglos

Es muy común la necesidad de ordenar arreglos. Por ejemplo: ordenar una lista de estudiantes por nombre. Tienes dos funciones para ordenar en JavaScript:

Sort y Reverse

Ellos hacen lo mismo, excepto que Reverse lo hace al revés. Ambos clasifican usando la lógica de comparación de cadenas, lo que significa que la cadena "25" es más grande que "100", porque "2" es más grande que "1".

```python
    fruits = ["Banana", "Orange", "Apple", "Mango"]
    fruits.sort()
    print(fruits) # [ 'Apple', 'Banana', 'Mango', 'Orange' ] 
    fruits.sort(reverse = True) 
    print(fruits) # [ 'Orange', 'Mango', 'Banana', 'Apple' ]
```


### Ordenando con diccionarios

Ahora que conocemos la función de comparación, podemos usarla para indicar a la función sort cómo ordenar nuestros propios objetos especiales, como aquí, por ejemplo:

```python
    carros = [
        { "type":"Volvo", "year": 2016 },
        { "type":"Saab", "year": 2001 },
        { "type":"BMW", "year": 2010 }
    ]

    carros_ordenados = sorted(carros, key=lambda item: item['year']) 
    print(carros_ordenados) # [ { 'type': 'Saab', 'year': 2001 },{ 'type': 'BMW', 'year': 2010 },{ 'type': 'Volvo', 'year': 2016 } ]
```











<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY2MjAwMTk3MSwtNDQyNDQ4NTM3LDE2Nj
IwMDE5NzFdfQ==
-->
