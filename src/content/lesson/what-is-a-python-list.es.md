---
title: "Trabajando con listas en Python"
subtitle: "Las listas son el primer tipo de estructura de datos que Python tiene para almacenar múltiples valores a la vez; son muy poderosas y se usan mucho en las operaciones diarias de cualquier tipo de programa de cualquiera industria."
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
syntax: "python"
tags: ["array","list","python","loops"]
status: "published"

---

## Introducción a las listas en Python

Dominar el uso de listas y bucles es una de las 5 habilidades fundamentales para construir algoritmos:

1. Variables.
2. Condicionales.
3. `Arrays (Arreglos)`.
4. `Loops (Bucles)`.
5. Funciones.

## ¿Qué es una lista?

Una lista es, normalmente, cualquier conjunto de valores. Las reglas de cómo agregar o eliminar elementos de esa lista pueden cambiar de un lenguaje de programación a otro. Pero - en general - son la única forma en que los desarrolladores pueden crear elementos.

Las listas no son la única forma que tenemos para enumerar las cosas y almacenar múltiples valores de una sola vez, pero es la más usada para ese propósito. Por ejemplo: lista de estudiantes, lista de artistas, lista de transacciones... ¡cualquier cosa!

Este tipo de datos hace muchas más cosas que los otros. Las listas son la única forma de almacenar más de un tipo de datos en la misma variable.

Cada lista tiene los mismos conceptos básicos:

**Los items:** Son los valores reales dentro de cada posición de la lista.

**La length:** es el tamaño de la lista (cuántos items tiene la lista).

**El index:** es la posición del elemento.

![¿Qué es una lista?](https://github.com/breatheco-de/content/blob/master/src/assets/images/7ed2c414-0d00-4e68-b659-b65c26d1983a.png?raw=true)

> ☝ Las posiciones comienzan en **cero (0)**; el primer elemento es el elemento en la posición **cero (0)**

## ¿Como Declarar una Lista?


Utilizando corchetes de la siguiente manera:

```py runable=true
my_empty_list = []  # Lista vacia
my_list = ["Apple", "Orange", "Donkey"]  # La única forma de declarar una lista
my_tuple = ("Apple", "Orange", "Donkey")  # Esto no es una lista, es una versión más limitada llamada "Tupla"
my_set = {"Apple", "Orange", "Donkey"}  # Esto no es una lista, es una versión más limitada llamada "set" (conjunto).

print("Esto es una lista: ",my_list)
print("Esto es una Tupla: ",my_tuple)
print("Esto es un set: ",my_set)
```

## Acceder a los items en la lista 

Para acceder a un elemento específico en una lista, necesitas un `index` o índice. Un índice es un valor entero que representa la posición del arreglo a la que desea acceder/obtener/recuperar.

El índice siempre debe comenzar en cero (0). Eso significa que una lista de 2 elementos puede tener un `index=0` o un `index=1`. Tratar de obtener la segunda posición devolverá un `IndexError` porque significará que estamos tratando de acceder al tercer elemento (que no existe). Por ejemplo, para obtener cualquier elemento de la lista puedes hacer lo siguiente:

```py runable=true
my_list = ["Apple", "Orange", "Donkey", "Car", "Game"]
print(my_list[0])  # Esto imprimirá el 1er elemento en la consola

aux = my_list[4]
print(aux)  # Esto imprimirá el 5to elemento en la consola

print(my_list[len(my_list) - 1])  # Esto imprimirá el último elemento en la consola
print(my_list[-1])  # Tambien imprimirá el último elemento
```

## Actualizar Elementos en el Arreglo

Si lo deseas, puedes restablecer o actualizar cualquier elemento dentro de un arreglo usando el índice como este:

```py runable=true
my_list = ["Apple", "Orange", "Donkey", "Car", "Game"]
my_list[4] = 'Cualquier valor'
# Esto asignará el valor 'Cualquier valor' en el quinto  elemento de la lista

print(my_list)
```

## Añadiendo elementos a una lista (función append o insert)

Hay dos formas de agregar un nuevo elemento: al final de la lista o donde tú quieras, y necesitamos usar las funciones `append` e `insert` respectivamente para eso.

### Utilizando `append` en las listas de Python

```py runable=true
my_list = ['Pedro', 'Juan', 'Maria']
my_list.append('Chris')  # Esto agrega a Chris al final de la lista

print(my_list)
```

### Utilizando `insert` en Python

La ventaja de utilizar `insert` es que te permite seleccionar la posición donde deseas insertar el elemento en el array:

```py runable=true
my_list = ['Pedro', 'Juan', 'Maria']
my_list.insert(1,'Chris')  # Esto agrega a Chris entre Pedro y Juan

print(my_list)
```

> ☝ La función `insert` es mucho más lenta que `append`, deberías tratar de evitarla.

## Eliminando items de una lista Python(función pop, remove, delete)

A diferencia de otros lenguajes como JavaScript, Python cuenta con varias funciones para remover elementos de una lista: pop, remove, delete.

### Eliminando elementos de una lista con `pop`

Eliminar un elemento utilizando `pop` tiene exactamente las mismas limitaciones que al agregar un elemento utilizando `append`: solo permite eliminar un elemento de la última posición de la lista. 

```py runable=true
my_list = ['Pedro', 'Chris', 'Juan', 'Maria']
my_list.pop()

print(my_list)
```

### Eliminando elementos de una lista con `remove`

Te permitirá eliminar la primera ocurrencia de un elemento por su nombre.

```py runable=true
# Si deseas eliminar 'Chris', necesitas hacer lo siguiente: 
my_list = ['Pedro', 'Chris', 'Juan', 'Maria']
my_list.remove('Chris')

print(my_list)
```

### Eliminando elementos de una lista con `del`

Una de las funcionalidades más útiles de `del` es que puedes eliminar muchos elementos de una sola vez. Debes especificar la posición de partida y de término.

```py runable=true
# Si deseas eliminar los elementos entre 'Chris' y 'Mario', necesitas hacer lo siguiente: 
my_list = ['Pedro', 'Chris', 'Juan', 'Maria', 'Pepe', 'Mario', 'Bob']
del my_list[2:5]

print(my_list)
```

## Iterando sobre una lista (bucles)


Normalmente, cuando trabajes con listas, tendrás que recorrer todos los items. Por ejemplo para: ordenarlos manualmente, cambiarlos de lugar, filtrarlos, etc.

Hay varias formas de recorrer una lista, pero la más utilizada es la función `for`:

```py runable=true
my_list = [3423, 5, 4, 47889, 654, 8, 867543, 23, 48, 56432, 55, 23, 25, 12]
for number in my_list:
    print(number)
```

## Iterando usando la posición

A veces es útil recorrer una lista utilizando la posición:

```py runable=true
my_list = ['Pedro', 'Chris', 'Mario', 'Bob']

for i in range(0, len(my_list)):
    print("La posición es " + str(i) + " para el elemento " + my_list[i])
```

También es posible especificar la posición inicial, así como el incremento, ingresando la posición inicial (en el primer parámetro) y el valor incremental (en el último parámetro) en el método `range`:

```py runable=true
my_list = ['Pedro', 'Chris', 'Mario', 'Bob', "Greg", "Kyle"]

for i in range(1, 6, 2):  # range(valor inicial, valor final (no inclusivo), valor incremental)
    print("La posición es " + str(i) + " para el elemento " + my_list[i])
```
