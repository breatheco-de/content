---
title: "¿Cómo invertir una lista en Python?"
subtitle: "Invertir una lista es una operación muy común en el día a día de un programador. Podemos hacerlo utilizando métodos como reverse() o mediante un truco de sintaxis."
tags: ["python", "list", "array"]
authors: ["alesanchezr"]
---


Aquí tienes una forma sencilla de invertir una lista en Python usando el método `.reverse()`:

```python runable=true
mylist = ["a", "b", "c", "d", "f", "g"]
mylist.reverse()
print(mylist)  # Salida: ["g", "f", "d", "c", "b", "a"]
```

Invertir una lista es una operación muy común en el día a día de un programador. Existen ocasiones en las que necesitas una lista similar a la original pero con los mismos elementos en un orden diferente; en estos casos, podríamos decir que estamos "volteando" la lista de interés.

Para estos casos, Python tiene varios métodos para "voltear" o "invertir" una lista. A continuación, veremos más información sobre estos métodos en las siguientes secciones:

- [Cómo invertir una lista en Python usando el método **`.reverse()`**](#cómo-invertir-una-lista-en-python-usando-el-método-reverse)  
- [Cómo invertir una lista en Python usando la función **`reversed()`**](#cómo-invertir-una-lista-en-python-usando-la-función-reversed)  
- [Cómo invertir una lista en Python usando la sintaxis de rebanado de listas](#cómo-invertir-una-lista-en-python-usando-la-sintaxis-de-rebanado-de-listas)  
- [Resumen](#resumen)

## Cómo invertir una lista en Python usando el método `reverse()`

La primera opción para invertir una lista en Python es usar el método incorporado `.reverse()`. Cada lista en Python tiene este método, que puede ser llamado en cualquier objeto lista y que invierte la lista en su lugar. Este método no crea una nueva lista, sino que modifica la lista original. Veamos otro ejemplo:

```python runable=true
mylist = [20, 21, 22, 23, 24, 25]
mylist.reverse()
print(mylist)  # Salida: [25, 24, 23, 22, 21, 20]
```

Como se mencionó, este método no devuelve valores ni crea una nueva lista, sino que modifica nuestra lista original en el lugar. Además, no requiere parámetros, simplemente se usa como `listname.reverse()`.

## Cómo invertir una lista en Python usando la función `reversed()`

La segunda opción es la función incorporada `reversed()`. Esta opción no modifica la lista original ni crea una copia de ella, sino que devuelve un iterador en reversa, el cual puedes recorrer para obtener los elementos de la lista en orden inverso. Veamos un ejemplo:

```python runable=true
mylist = [1, 2, 3, 4, 5]
print(reversed(mylist))  # Salida: <list_reverseiterator object>
```

Para obtener una lista invertida, necesitamos convertir este iterador usando la función `list()`, de esta manera:

```python runable=true
mylist = [1, 2, 3, 4, 5]
mylist_reversed = list(reversed(mylist))
print(mylist_reversed)  # Salida: [5, 4, 3, 2, 1]
print(mylist)  # Salida: [1, 2, 3, 4, 5]
```

## Cómo invertir una lista en Python usando la sintaxis de rebanado de listas

La tercera opción es usar la sintaxis de rebanado de listas. A diferencia del método `.reverse()`, esta opción no modifica la lista original, sino que crea una copia con los elementos en orden inverso. 

Para usar esta sintaxis, escribe el nombre de la lista seguido de corchetes con `::` y un `-1` para invertirla, como se muestra a continuación:

```python runable=true
mylist = [1, 2, 3, 4, 5, 6]
print(mylist[::-1])  # Salida: [6, 5, 4, 3, 2, 1]
print(mylist)  # Salida: [1, 2, 3, 4, 5, 6]
```

Si deseas asignar la lista invertida a una nueva variable:

```python runable=true
mylist = [1, 2, 3, 4, 5, 6]
mylist_copy = mylist[::-1]
print(mylist_copy)  # Salida: [6, 5, 4, 3, 2, 1]
print(mylist)  # Salida: [1, 2, 3, 4, 5, 6]
```

## Resumen

1. **Método `.reverse()`**: Invierte la lista en su lugar, modificando la lista original.  
2. **Función `reversed()`**: Devuelve un iterador en reversa que debe convertirse en una lista usando `list()`.  
3. **Sintaxis de rebanado**: Crea una copia invertida de la lista original.  

¡Sigue practicando!