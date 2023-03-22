---
title: "Trabajando con listas en Python"
subtitle: "Las listas son el primer tipo de estructura de datos que Python tiene para alamacenar múltiples valores a la vez; son muy poderosas y se usanm ucho en las operaciones diarias de cualquier tipo de programa de cualquiera industria"
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

Un lista es, normalmente, cualquier colección de valores. Las reglas de cómo agregar o eliminar elementos de esa lista pueden cambiar de un lenguaje de programación a otro. Pero - en general - son las únicas formas en que los desarrolladores pueden crear elementos.
Las listas no son la única forma en que tenemos que enumerar las cosas almacenar múltiples valores de una sola vez pero es la más usada para ese propósito. Por ejemplo: lista de estudiantes, lista de artistas, lista de transacciones ... ¡cualquier cosa!

Este tipo de datos hace muchas más cosas que los otros. Las listas son la única forma de almacenar más de un tipo de datos en la misma variable.

Cada lista tiene los mismos conceptos básicos:

**The items:** Son los valores reales dentro de cada posición de la lista.

**The length:** es el tamaño de la lista (cuántos items tiene la lista).

**Index:** es la posición del elemento.

![¿qué es una lista?](../../assets/images/7ed2c414-0d00-4e68-b659-b65c26d1983a.png)

> :point_up: Las posiciones de la comienzan con **cero (0)**; el primer elemento es el elemento en la posición **cero (0)**

## ¿Como Declarar una Lista?


Utilizando corchetes de la siguiente manera:

```python
my_list = []  # lista vacia
my_list = ["Apple", "Orange", "Donkey"]  # La única forma de declarar una lista
my_tuple = ("Apple", "Orange", "Donkey")  # Esto no es una lista, es una version más limitada llamada "Tupla"
my_set = {"Apple", "Orange", "Donkey"}  # Esto no es una lista, es una version más limitada llamada "set" (cojunto).

```

## Acceder a los items en la lista 

Para acceder a un elemento específico en una lista, necesita un `index` o índice. Un índice es un valor entero que representa la posición del arreglo a la que desea acceder/obtener/recuperar.

El índice siempre debe comenzar en cero (0). Eso significa que una lista de 2 elementos puede tener un índice = 0 o un índice = 1. Tratar de obtener la segunda posición devolverá "indefinido" porque significará que estamos tratando de acceder al tercer elemento (que no existe). Por ejemplo, para obtener cualquier elemento de la lista puede hacer lo siguiente:

```python
print(my_list[0])  # Esto imprimirá el 1er elemento en la consola.
aux = my_list[5]
print(aux)  # Esto imprimirá el 6to elemento en la consola.
print(my_list[len(my_list)-1])  # Esto imprimirá el último elemento en la consola.

```

## Actualizar Elementos en el Arreglo

Si lo deseas, puedes restablecer o actualizar cualquier elemento dentro de un arreglo usando el índice como este:

```python
my_list[5] = 'Whatever value'  # Esto asignará el valor 'Whatever value' en el sexto elemento de la lista.

```

## Añadiendo elementos a una lista (función append o insert)

Hay dos formas de agregar un nuevo elemento: final de la lista o donde tu quieras, y necesitemos usar las funciónes append e insert respectivamente para eso.

### Utilizando `append` en las listas de Python

```python
my_list = ['Pedro', 'Juan', 'Maria']
my_list.append('Chris')  # esto agrega a chris al final del arreglo
print(my_list)  # esto imprimirá ['Pedro', 'Juan', 'Maria', 'Chris']

```

### Utilizando `insert` (seleccionando posición) en Python

La ventaja de utilizar insert es que te permite seleccionar la posicion donde deseas insertar el elemento en el array:

```python
my_list = ['Pedro', 'Juan', 'Maria']
my_list.insert(1,'Chris')  # esto agrega a chris entre Pedro y Juan
print(my_list)  # esto imprimirá ['Pedro', 'Chris', 'Juan', 'Maria'];

```

> :point_up: La funcion `insert` es mucho mas lenta que `append`, deberias tratar de evitarla.

## Eliminando items de una lista con Python(función pop, remove, delete)

A diferencia de otros lenguajes como Javascript, Python cuenta con varias funciones para remover elementos de un array: pop, remove, delete.

### Eliminando elementos de una lista con POP

Eliminar un elemento utilizando `pop` tiene exactamente las mismas limitaciones que al agregar un elemento utilizando `append`: solo permite eliminar un elemento de la última posición de la lista. 

```python
my_list = ['Pedro', 'Chris', 'Juan', 'Maria']
my_list.pop()
print(my_list) # esto imprimirá ['Pedro', 'Chris', 'Juan']

```

### Eliminando elementos de una lista con Remove

Te permitirá eliminar la primera ocurrencia de un elemento por su nombre.

```python
# Si deseas eliminar 'Chris', necesitas hacer lo siguiente: 
my_list = ['Pedro', 'Chris', 'Juan', 'Maria']
my_list.remove('Chris')
print(my_list)  # esto imprimirá ['Pedro', 'Juan', 'Maria']

```

### Eliminando elementos de una lista con Delete

Una de las funcionalidades mas útiles de `del` es que puedes eliminar muchos elementos de una sola vez. Debes especificar la posición de partida y de término.

```python
# Si deseas eliminar 'Chris', necesitas hacer lo siguiente: 
my_list = ['Pedro', 'Chris', 'Juan', 'Maria', 'Pepe', 'Mario', 'Bob']
del my_list[2:5]
print(my_list)  # esto imprimirá ['Pedro', 'Chris', 'Mario', 'Bob']

```

## Iterando sobre una lista (bucles)


Normalmente, cuando trabajes con listas, tendrás que recorrer todos los items. Por ejemplo: ordenándolos manualmente; cambiar su orden, filtrarlos, etc.

Hay varias formas de recorrer una lista, pero la mas utilizada es la funcion `for`:

```python
my_list = [3423, 5, 4, 47889, 654, 8, 867543, 23, 48, 56432, 55, 23, 25, 12]
for number in my_list:
    print(number)

```

## Iterando usando la posicion

A veces es útil recorrer un arreglo utilizando la posicion:

```python
for i in range(0, len(my_list)):
    print("La posicion es " + str(i) + " para el elemento " + my_list[i])

# Imprimira lo siquiente
# - La posicion es 0 para el elemento Pedro
# - La posicion es 1 para el elemento Chris
# - La posicion es 2 para el elemento Mario
# - La posicion es 3 para el elemento Bob

```

