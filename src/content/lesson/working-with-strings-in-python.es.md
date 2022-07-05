---
title: "Es Hora de Aprender lo que es el manejo de String en Python"
subtitle: "Uno de los conceptos más importantes de aprender, las cadenas de caracteres o 'strings' son esenciales para manejar texto, construir código dinámico y mucho más!"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
syntaxis: ["python"]
tags: ["python", "string-concatenation"]
status: "published"

---

## ¿Que es un string?

Un string es una secuencia de letras y caracteres con un orden en particular, son la única forma de almacenar caracteres que no sean números y son fundamentales en cada programa.

Los strings forman parte del conjunto de tipos de datos primitivos o básicos:

| Tipo     | Ejemplo           | Representación                 |
| ---       | ---               | ---                           |
| String    | `"Hello World"`   | str                           | caracteres con una secuencia                                           |
| Número    | `23.34`           | int, decimal, complejo        | números                                                                |
| Secuencia | `[2,3,1,56,4.34]` | list, tuple, range            | Lista de valores iterables con índices numéricos para las posiciones   |
| Conjunto  | `{'1,'2','45'}`   | set, frozenset                | Similar a una secuencia pero desordenada y con elementos duplicados    |
| Mapping   | `{"name": "Bob"}` | dict                          | Similar a una secuencia pero los índices son caracteres en vez de números incrementales |
| Booleano  | `True` or `False` | bool                          | Solo True o False |
| Binario  | `01001010111`     | bytes, bytearray, memoryview  | Ideal operaciones simples       |

## ¿Como Crear un string?

Muchos Strings se crean a partir de montón de caracteres entre comillas: `"hello"` o incluso `"23232"`. 

```python
name = "Bob"
age = "23" # <--- esto sigue siendo un string (entre comillas)
```


Si estamos desarrollando una aplicación, todo lo que el usuario escríba dentro de formularios sera considerado un `string`, incluso si el usuario escribe el numero `2`, éste se considerara un string y no un número a no ser que nosotros como desarrolladores lo convirtamos en número usando la función `int()`  o `float()`.


El uso mas común de un string es imprimirla con la función `print`:

```python
print("Hola Mundo!")
# La funcion print recibe un string y la muestra en la linea de commandos / terminal del computador.
 ```

## ¿Cómo se usan los strings?

### Concatenación de cadenas (sumando strings)

Python permite concatenar cadenas fácilmente utilizando el operador `+`. El siguiente fragmento de código demuestra como sumar doss trings para crear un **nombre completo** a partir de **nombre** y **apellido**:

```python
nombre = "Alejandro"
apellido = "Sanchez"
nombre_completo = nombre + "" + apellido
print("Mi nombre es " + nombre_completo)

# Este codigo mostrará: "Mi nombre es Alejandro Sanchez" en la linea de comandos
 ```

En este ejemplo `"Mi nombre es "` es un string concatenado al valor de la variable `nombre_completo`:

### Longitud un string

A menudo querrás saber cuál es la longitud (tamaño) de un string, por ejemplo: Twitter no permite más de 240 caracteres.

```python
tweet = "¡Buenos días!"
print("La variable tweet tiene "+str(len(tweet))+" caracteres")

# Resultado:La variable tweet tiene 13 caracteres
```

### Extracción de caracteres

Luego, también necesitamos saber el valor del string en un posición en particular, por ejemplo: sin un string empieza o termina con un signo de interrogación, probablemente sea una pregunta: 

```python
pregunta = "¿Cómo estás?"
tamaño = len(pregunta)
print("El string empieza " + pregunta[0])
# Resultado: El string empieza con ? 
print("El string termina con  " + pregunta[size - 1])
# Resultado: El string termina con ? 

> :point_up: Este método de extracción es muy similar al usado para extraer un elemento ubicado enu na posición en pqrticular en una lista de Python.

También puedes extraer varios caracteres a la vez. El rango del método comienza con el índice del primer caracter que vas a extraer y termina con el índice DESPUÉS del último carater que vas a extraer:

```python
nombre = "Mi nombre es Alejandro Sanchez"
print("Extracción de" + nombre[11:20])
# Resultado: Extracción de Alejandro

print("Extracted " + name[11:])
#  Resultado: Extracción de Alejandro Sanchez

print("Extracted " + nombre[:10])
# Resultado: Extracción de Mi nombre es
```

### Comparación de strings

Si quieres comparar dos strings puedes utilizar `==` (dos signos iguales) y esto retornará `True` si los strings son IDÉNTICOS, hay que estar muy pendiente de las mayúsculas "Bob" es diferente a "bob" porque tiene la primera letra en mayúcula

Veamos ahora un ejemplo:

```python
nombre1 = "pepe";
nombre2 = "juan";
if nombre1 == nombre2:
    print("Esto es falso, no se imprimirá")
if nombre1 == "pepe":
    print("Esto es verdadero, se imprimirá")
if nombre1 != nombre2:
    print("Esto es verdadero, se imprimirá")
```

### Conversión de minúsculas a mayúsculas

```python
string_en_minuscula = lower(string1) # Lo convierte a minúsculas.
string_en_mayuscula = upper(string2) # Lo convierte a mayúsculas.
```

> :point_up: Es una buena práctica siempre pasar a minuscula los strings antes de compararlos con otros y así evitar errores.

### Convertir strings a números o visceversa

La clase String no porporciona ningún método para convertir una cadena en un número. Sin embargo, cuatro clases de los "tipos envolventes" (Integer, Double, Float, y Long) proporcionan unos métodos de clase llamados valueOf() que convierten una cadena en un objeto de ese tipo. Aquí tenemos un pequeño ejemplo del método valueOf() de la clase Float:


```python
numero = 3.4 # Soy un número
numero_como_string = str(numero) # Soy un string con valor "3.4"
```


### Extraer un substring de un string

En muchas ocasiones es necesario extraer una porción o substring de un string dado. Como ya vimos solo debemos saber que posiciones queremos substraer y colocarlas utilizando corchetes de la siguiente manera:

```python

cadena = "El lenguaje Python"
print(cadena[1:5]) # Imprime "l le"
print(cadena[1:]) # Imprime "l lenguaje Python"
print(cadena[:5]) # Imprime "El le"

```
