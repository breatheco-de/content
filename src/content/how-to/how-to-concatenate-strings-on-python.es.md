---
title:  "Cómo concatenar cadenas en Python"
subtitle: "Aprende a concatenar cadenas en Python de manera eficiente. Explora técnicas de manipulación de cadenas y mejora tus habilidades de programación hoy mismo."
tags: ["python", "strings"]

---

<!-- hide -->
## Cómo concatenar cadenas en Python
<!-- endhide -->
 
La concatenación de cadenas es el proceso de unir dos cadenas en una sola. La forma más sencilla de concatenar cadenas en Python es utilizando el método **format string**. Este método consiste en añadir la letra "f" antes de las comillas de la cadena, como en `f"Hola mundo"`, y luego puedes concatenar variables colocándolas entre llaves `{}` dentro de las comillas. Aquí tienes un ejemplo:  

```python 
name = "4Geeks"

print(f"Hello from {name}!")
#Output -> Hello from 4Geeks!
```


En el ejemplo anterior, estamos utilizando la variable `name` para concatenarla a la cadena.

La concatenación de cadenas es una acción común que nosotros, como [desarrolladores de software](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), debemos realizar en casi cualquier proyecto. Hay muchas maneras de concatenar cadenas; puedes usar la que mejor se adapte a tus necesidades.

## Concatenar cadenas en Python usando el operador +

La forma más familiar de concatenar cadenas para la mayoría de las personas es utilizando el operador `+`. Mira este ejemplo que explica cómo funciona:


```python
name = "Alex"

print("Hello my name is " + name +  " and I'm a developer")
#Output-> Hello my name is Alex and I'm a developer
```

> Nota el espacio después de `is` y antes de `and`. Si no los hubiéramos agregado, la salida habría sido algo como esto: `Hello my name isAlexand I'm a developer`. Recuerda agregar los espacios cuando sea necesario.

## Concatenar cadenas usando el operador +=

También podemos usar el operador `+=` para concatenar cadenas. Es bastante similar a usar el operador `+`, pero en este caso modificaremos el valor de la cadena original.


```python
#Concatenate using the += operator
fullname = "Alex "
lastname = "Smith"
fullname += lastname
print(fullname)
#Output-> Alex Smith
```

> Nota que hay un espacio dentro de la cadena, de lo contrario, el valor de `fullname` sería "AlexSmith". Recuerda agregar los espacios cuando sea necesario.

### Concatenar un valor entero o flotante con texto usando str()

Los números y las cadenas son tipos de datos completamente diferentes. Cuando queramos agregar un número (int, float, etc.) a una cadena, necesitaremos usar `str()` para convertir ese número en una cadena.


```python
# Concatenate using the + Operator with numbers
geeks_word = "Geeks"
geeks_number = 4
print("At " + str(geeks_number) + geeks_word +  " Academy we love Python! <3")
#Output-> At 4Geeks Academy we love python! <3
```

Como se mencionó anteriormente, estamos agregando espacios para que el render respete las reglas de escritura.

Si no convirtieramos la variable `int1` a **cadena**, recibiríamos el siguiente error, indicando que estamos intentando concatenar un entero con una cadena.


```python
TypeError: can only concatenate str (not "int") to str
```

## Concatenar cadenas en Python usando f-Strings

Las f-Strings de Python (literales de cadenas formateadas) hacen que escribir cadenas sea más rápido y mucho más fácil. Esta opción fue [introducida en Python](https://4geeks.com/lesson/intro-to-python) 3.6, por lo que debes tener en cuenta la compatibilidad hacia atrás al utilizarla.

Este es uno de los métodos más utilizados entre los desarrolladores experimentados debido a la facilidad de insertar `variables` dentro de los **corchetes**. La(s) variable(s) se evaluarán y se mostrará una representación en cadena.

Implementación:


```python
#Concatenate using the f-Strings method
geek_word = "Geeks"
print(f"Showing the geek_word variable: {geek_word} using f-String")
#Output-> Showing the geek_word variable: Geeks using f-String
```

Al utilizar la concatenación con `f-Strings`, no necesitamos convertir los números (Int, Float, etc.) a cadena para poder mostrarlos dentro de los corchetes.

```python
#Concatenate using the f-Strings method with numbers 
geek_word = "Geeks"
geek_number = 4
print(f"At {geek_number}{geek_word} Academy we love Python! <3")
#Output-> At 4Geeks Academy we love python! <3
```

## Concatenar usando .format()

Otra forma de concatenar [cadenas en Python](https://4geeks.com/lesson/working-with-strings-in-python) es utilizando el método `format()`. Funciona de manera similar a los `f-Strings`, ya que ambos utilizan corchetes `{}` para insertar variables, pero está disponible desde la versión 2.7.

Este método tampoco necesita convertir los valores numéricos en cadenas.


```python
#Concatenate using the .format() method
geek_word = "Geeks"
geek_number = 4
text = "{}{} Academy".format(geek_number, geek_word)
print(text)
#Output-> 4GeeksAcademy
```

Como puedes ver, el resultado devuelto es el esperado, pero sin espacio entre las palabras.

## Concatenar usando el operador %

El operador `%` es una forma más antigua de concatenar cadenas que funciona de manera muy similar al método `.format()`. Usamos `%s` como marcadores de posición para diferentes valores, como lo hicimos con los corchetes en los ejemplos anteriores.


```python
#Concatenate using the % Operator
geek_word = "Geeks"
geek_number = 4
text = "%s%s Academy" % (geek_number, geek_word)
print(text)
#Output-> 4Geeks Academy
```

## Concatenar usando el operador *

El uso del operador `*` no es una concatenación de la manera en que hemos estado haciendo hasta ahora. El operador `*` se utiliza para la multiplicación y eso es exactamente lo que hace: multiplica la cadena por la cantidad indicada.


```python
#Concatenate using the * Operator
str1 = "4Geeks Academy "
print(str1*3)
#Output-> 4Geeks Academy 4Geeks Academy 4Geeks Academy 
```

> Si formateas correctamente la variable **cadena** (dejando un espacio al final de la oración/palabra), esta es la mejor manera de repetir una línea de texto tantas veces como necesites.



# Recommended Material

If you want to learn more about how to concatenate strings in Python and explore the different methods available, we invite you to check out this **interactive tutorial**.


