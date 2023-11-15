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

Una lista es, normalmente, cualquier colección de valores. Las reglas de cómo agregar o eliminar elementos de esa lista pueden cambiar de un lenguaje de programación a otro. Pero - en general - son la única forma en que los desarrolladores pueden crear elementos.
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

```python
my_empty_list = []  # Lista vacia
my_list = ["Apple", "Orange", "Donkey"]  # La única forma de declarar una lista
my_tuple = ("Apple", "Orange", "Donkey")  # Esto no es una lista, es una versión más limitada llamada "Tupla"
my_set = {"Apple", "Orange", "Donkey"}  # Esto no es una lista, es una versión más limitada llamada "set" (conjunto).
```

## Acceder a los items en la lista 

Para acceder a un elemento específico en una lista, necesita un `index` o índice. Un índice es un valor entero que representa la posición del arreglo a la que desea acceder/obtener/recuperar.

El índice siempre debe comenzar en cero (0). Eso significa que una lista de 2 elementos puede tener un índice = 0 o un índice = 1. Tratar de obtener la segunda posición devolverá "indefinido" porque significará que estamos tratando de acceder al tercer elemento (que no existe). Por ejemplo, para obtener cualquier elemento de la lista puede hacer lo siguiente:

```python
print(my_list[0])  # Esto imprimirá el 1er elemento en la consola

aux = my_list[5]
print(aux)  # Esto imprimirá el 6to elemento en la consola

print(my_list[len(my_list) - 1])  # Esto imprimirá el último elemento en la consola
print(my_list[-1])  # Tambien imprimirá el último elemento
```

## Actualizar Elementos en el Arreglo

Si lo deseas, puedes restablecer o actualizar cualquier elemento dentro de un arreglo usando el índice como este:

```python
my_list[5] = 'Cualquier valor'
# Esto asignará el valor 'Cualquier valor' en el sexto elemento de la lista
```

## Añadiendo elementos a una lista (función append o insert)

Hay dos formas de agregar un nuevo elemento: al final de la lista o donde tú quieras, y necesitamos usar las funciones `append` e `insert` respectivamente para eso.

### Utilizando `append` en las listas de Python

```python
my_list = ['Pedro', 'Juan', 'Maria']
my_list.append('Chris')  # Esto agrega a Chris al final de la lista
print(my_list)  # Esto imprimirá ['Pedro', 'Juan', 'Maria', 'Chris']
```

### Utilizando `insert` en Python

La ventaja de utilizar `insert` es que te permite seleccionar la posición donde deseas insertar el elemento en el array:

```python
my_list = ['Pedro', 'Juan', 'Maria']
my_list.insert(1,'Chris')  # Esto agrega a Chris entre Pedro y Juan
print(my_list)  # Esto imprimirá ['Pedro', 'Chris', 'Juan', 'Maria'];

```

> ☝ La función `insert` es mucho mós lenta que `append`, deberías tratar de evitarla.

## Eliminando items de una lista Python(función pop, remove, delete)

A diferencia de otros lenguajes como JavaScript, Python cuenta con varias funciones para remover elementos de una lista: pop, remove, delete.

### Eliminando elementos de una lista con `pop`

Eliminar un elemento utilizando `pop` tiene exactamente las mismas limitaciones que al agregar un elemento utilizando `append`: solo permite eliminar un elemento de la última posición de la lista. 

```python
my_list = ['Pedro', 'Chris', 'Juan', 'Maria']
my_list.pop()
print(my_list)  # Esto imprimirá ['Pedro', 'Chris', 'Juan']
```

### Eliminando elementos de una lista con `remove`

Te permitirá eliminar la primera ocurrencia de un elemento por su nombre.

```python
# Si deseas eliminar 'Chris', necesitas hacer lo siguiente: 
my_list = ['Pedro', 'Chris', 'Juan', 'Maria']
my_list.remove('Chris')
print(my_list)  # Esto imprimirá ['Pedro', 'Juan', 'Maria']

```

### Eliminando elementos de una lista con `delete`

Una de las funcionalidades más útiles de `del` es que puedes eliminar muchos elementos de una sola vez. Debes especificar la posición de partida y de término.

```python
# Si deseas eliminar 'Chris', necesitas hacer lo siguiente: 
my_list = ['Pedro', 'Chris', 'Juan', 'Maria', 'Pepe', 'Mario', 'Bob']
del my_list[2:5]
print(my_list)  # Esto imprimirá ['Pedro', 'Chris', 'Mario', 'Bob']
```

## Iterando sobre una lista (bucles)


Normalmente, cuando trabajes con listas, tendrás que recorrer todos los items. Por ejemplo para: ordenarlos manualmente, cambiarlos de lugar, filtrarlos, etc.

Hay varias formas de recorrer una lista, pero la más utilizada es la función `for`:

```python
my_list = [3423, 5, 4, 47889, 654, 8, 867543, 23, 48, 56432, 55, 23, 25, 12]
for number in my_list:
    print(number)
```

## Iterando usando la posición

A veces es útil recorrer una lista utilizando la posición:

```python
my_list = ['Pedro', 'Chris', 'Mario', 'Bob']

for i in range(0, len(my_list)):
    print("La posición es " + str(i) + " para el elemento " + my_list[i])

### Imprimirá lo siquiente:
# La posición es 0 para el elemento Pedro
# La posición es 1 para el elemento Chris
# La posición es 2 para el elemento Mario
# La posición es 3 para el elemento Bob
```

También es posible especificar la posición inicial, así como el incremento, ingresando la posición inicial (en el primer parámetro) y el valor incremental (en el último parámetro) en el método `range`:

```python
my_list = ['Pedro', 'Chris', 'Mario', 'Bob', "Greg", "Kyle"]

for i in range(1, len(my_list), 2):  # range(valor inicial, último elemento, valor incremental)
    print("La posición es " + str(i) + " para el elemento " + my_list[i])

### Imprimirá lo siquiente:
# La posición es 1 para el elemento Chris
# La posición es 3 para el elemento Bob
# La posición es 5 para el elemento Kyle
```
