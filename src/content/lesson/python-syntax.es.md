---
title: "Introduction to Python"
subtitle: "Learn the basics of python syntax, loops, data-types and conditionals"
date: "2020-10-19T16:36:31+00:00"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
status: "published"
author: ["alesanchezr"]
syntax: ["python"]
tags: ["Conditionals","Logical operators","If...else","Conditions","Python"]

---

# Introducción a Python

Esta lección tiene como objetivo ayudar a familiarizarte con la sintaxis básica de Python y como hacer cosas esenciales como imprimir algo en un terminal, manipular cadenas y entender como se usan las variables, funciones, operaciones lógicas y condicionales. Esta debería ser la primera lección a leer en tu viaje con python.

Por favor sepa que hay otras lecciones explicando cada concepto en detalle; esto es solamente un resumen básico para ayudarte a obtener una visión general sobre el tema.

## ¿Por qué Python?

Python es el lenguaje backend de más rápido crecimiento en el mundo. Es el lenguaje más versátil y fácil de codificar, con una de las comunidades más sólidas.

Cuando lo comparas con otro lenguaje backend, Python es líder en casi todas las funcionalidades que ofrece: ciencia de datos, IA, desarrollos de API, desarrollos web, redes, automatización, etc.

**Estas son algunas de las razones por las cuales Python ha llegado a este punto:**

|**Simplicidad**   |**Actuación**    |
|:---------------:|:------------------:|
| Python fué creado con la finalidad de ser simple y fácil. Aquí está el manifiesto de Python:<br>https://en.wikipedia.org/wiki/Zen_of_Python<br><br>**Nota:** No más puntos y comas ni llaves, o declaración de variables, ni la confusa funcionalidad "this" (esto).     | Python es mas rápido que Java, PHP, Ruby y 90% de otros lenguajes backend. Solo lenguajes de bajo nivel como C++ (difícil de usar) o muy especializado como Node.js pueden vencerlo.<br><br>La escalabilidad de Python ha sido probada una y otra vez con aplicaciones como Google Search Engine, Youtube, Google Apps, etc.     |


|**Comunidad**   |**Herramientas**    |
|:---------------:|:------------------:|
|Python es el lenguaje oficial de Google. También es uno de los lenguajes mas antiguos con comunidades muy grandes en torno a cada una de sus librerías/herramientas. MIT lo utiliza para codificar. La NASA para construir cohetes. Quora, Facebook, Yahoo, Amazon, etc. Casi todas las grandes compañías del mundo deben usarlo!      |La mayoría de las librerías de python son las mejores en lo que hacen: [MathLab](https://www.mathworks.com/help/matlab/matlab-engine-for-python.html?requestedDomain=true) (para procesamiento de datos), [Pandas](https://pandas.pydata.org/) (grandes datos), [Web.py](http://webpy.org/) (servidor web), [Django](https://www.djangoproject.com/) (marco de trabajo web), [PyBrain](http://pybrain.org/) (IA), [TensorFlow](https://www.tensorflow.org/) (Aprendizaje de máquinas), etc.  ¡Podríamos estar en esto todo el día! Lo más asombroso es que estas librerías estan a un paso de su instalación (al igual que cuando se usa NPM con JS).|

## Python Syntax

### Imprimiendo un valor

Una cosa esencial que puedes hacer en cualquier lenguaje de programación es imprimir algunos mensajes en el terminal. En Python puedes usar la instrucción `print` (imprimir):

```python
print("Hola, este es un mensaje que le puedes enseñar al usuario")
```

### Declarando una variable

Como la mayoría de los lenguajes de programación (o matemáticas), Python te permite almacenar datos en variables para poder utilizarlo posteriormente; las variables son una herramienta poderosa porque le permite a tu código ser reutilizado para cualquier valor de variable en el futuro, por ejemplo: para calcular un área cuadrada lo que tienes que hacer es:

```python
area = ancho * ancho
```
Tu código calculará el `área` sin importar el valor del `ancho`:

```python
# si el ancho es=6 en el futuro
area = 6 * 6

# si el ancho es=7 en el futuro
area = 7 * 7
```

> Las variables hacen tu código reutilizable y más dinámico.

### Imprimiendo una variable

También puedes imprimir (`print`) el valor almacenado en una variable, o incluso concatenarlo a otra cadena usando el operador más `+`:

```python
nombre = "Bob"
# imprime solo el nombre
print(nombre) 
# o imprime un saludo que también incluya el nombre
print("hola "+nombre+" ¿cómo estas?")
```

### Tipos de datos

Si no sabes o no lo recuerdas, los tipos de datos son tipos de información que puedes almacenar en una variable: números, texto, listas, etc. Cada lenguaje de programación tiene sus propios tipos de datos. En Python, estos son los tipos (hay mas tipos que revisaremos mas adelante):


| Tipo de Grupo		| Tipo				| Descripción |
| -----------------	| ------------------------------------- | ----------------------------- |
| Tipos de Texto		| str					| palabras, párrafos, etc. 	|
| Tipos Numéricos	| int, float, complex	| operaciones matemáticas, etc.		|
| Tipos de Secuencia	| list, tuple, range		|varios valores a la vez uno tras otro|
| Tipos Mapping	| dict				| múltiples valores sin secuencia	|
| Tipo Boolean 	| bool				| Solo `Verdadero` o `Falso` |


### Casting (análisis) de tipos de datos

Es importante resaltar que la cadena `"1"` no es lo mismo que el número `1`, entonces, si quieres sumar `"1" + 1`, el resultado no será 2. En cambio, la computadora generará un error.

**¿Por qué?**

Porque los tipos importan, tienes que ser consistente con ellos, si quieres sumar la cadena `5` con la cadena `2`, tienes que convertirlos en enteros primero, así:

```python
# En python, restar cadenas generará un error, en su lugar, deberías hacer: 
result = int('5') - int('2')
# El resultado ahora es igual a 3
```
Por otra parte, si quieres sumar la cadena `"5"` con la cadena `"2"`, el resultado será `"52"` porque esa es la operación predeterminada para sumar cadenas: Concatenación.

> Hablaremos mas sobre concatenación en otra lección.

### Listas y Touples 

Todos los principales lenguajes de programación tienen formas de almacenar listas de valores juntos; estos se llaman `arrays` (matrices) o `listas` (listas).

Una lista de Python es una sucesión ordenada de valores, por ejemplo:

```python
edades = [23,45,34,2,65,7,32,54,3,3,6,4]
nombres ["Maria", "Willy", "Anyka", "Shan"]
```
Es importante recordar que el orden importa. Cada uno de los valores en una lista tiene una posición que siempre va a ser la misma. Puedes recuperar cualquier valor interno usando la posición que toman en la lista, por ejemplo:

```python
print(edades[0]) # imprimirá 23 porque su posición es 0
print(edades[4]) # imprimirá 65 porque su posición es 4
```
> Importante: las listas comienzan en la posición 0.

Las listas se utilizan ampliamente en todos los lenguajes de programación, especialmente en Python, porque Machine Learning utiliza enormes listas de información.

> Nota: vamos a discutir las listas en detalle pronto.

## Algoritmos de Python
 
Después de conocer lo básico de Python puedes empezar a construir algoritmos:
Un algoritmo es una sucesión de líneas de código con un propósito en común.
Las líneas de código van de arriba a abajo (desde la línea 1 hasta la ínea N)
Por ejemplo, el siguiente es un algoritmo muy sencillo que imprime el nombre completo del nombre y apellido dados.

```python
nombre = "Taylor"
apellido = "Swift"
print("Miss "+nombre+" "+apellido) # imprime Miss Taylor Swift
```
La primera línea es `nombre = "Taylor"` y se ejecuta primero; la última línea con la instrucción `print` ya sabe el valor del `nombre` porque fue completado primero (línea anterior)

### Condicionales

Las condiciones son fantásticas porque te permiten saltar o condicionalmente ejecutar partes de tu algoritmo, haciéndolos bastante flexibles e inteligentes. Por ejemplo, podríamos condicionalmente imprimir "Miss" (señorita) o "Mrs" (señora), dependiendo del estado de su relación:

```python
estado_de _relación = "casada"
nombre = "Taylor"
apellido = "Swift"

if estado_de_relación == "soltera":
	print("Miss "+nombre + " " + apellido) # imprime Miss Taylor Swift
else:
	print("Mrs "+nombre + " " + apellido) # imprime Mrs Taylor Swift
```
Nota: La instrucción `if (si)...else (otro)...` se lee como en inglés. También, para hacer comparaciones, debes utilizar dos signos de igual `==` en vez de uno, y a eso se le llama **Expresión Lógica**

### Operaciones Lógicas y Expresiones

Las computadoras piensan todo en blanco o negro. Todo es o Verdadero o Falso. Todas las decisiones en una computadora se reducen a un simple  **Boolean**. Puedes preparar una computadora para resolver problemas particulares, si escribes un código que haga las preguntas adecuadas requeridas para resolver ese problema.

Por ejemplo, si quiero que una computadora le de caramelos solamente a niños mayores de 13 años, puedo indicarle a la computadora que pregunte:

 **¿Es este niño mayor de 13 años? ¿si o no?**

**En Python, puedes indicarle a la computadora que haga las siguienes operaciones lógicas** 

|**Operación**  |**Syntaxis**   |**Examples**   |
|:--------------|:--------------|:--------------|
|Igual a       |==             |¿Es 5 == 5? ¡Cierto!<br>¿Es 5 == 4? Falso!<br>¿Es 5 == '5'? ¡Cierto!    |
|No igual a    |!=             |¿Es 5 != 5? ¡Falso!<br>¿Es 5 != '5'? ¡Falso!<br>¿Es 1 != 'Hello' ¡Cierto!   |
|Mayor que  |>              |¿Es 5 > 5? ¡Falso!<br>¿Es 6 > 3? ¡Cierto!    |
|Menor que      |<              |¿Es 6 < 12? ¡Cierto!            |
|Mayor o igual a  |>=             |¿Es 6 <= 6? ¡Cierto!<br>¿Es 3 <= 6? ¡Cierto!    |
|Menor o igual a   |<=            |Ya entiendes la idea 🙂       |

Para crear operaciones realmente útiles, puedes combinar varias operaciones en la misma pregunta utilizando AND (y), OR (o) y NOT (no).

Puedes agrupar las operaciones lógicas en paréntesis, y tambien utilizar paréntesis anidados para varias operaciones al mismo tiempo.

|**Operación**   |**Sintaxis**   |**Ejemplos**   |
|:---------------|:--------------|:--------------|
|AND             |and             |Con AND, ambas partes DEBEN SER VERDADERAS de manera que todo se vuelva verdadero.<br>¿Es (5 == 5 and 3 > 1) ? ¡Verdadero!<br>¿Es ('Ramon' == 'Pedro' and 2 == 2) ? ¡Falso!    |
|OR     |\|\|     |¿Es ('Oscar' or 'Maria' or 2 != 2)? ¡Verdadero!<br>¿Es (5 == '5' and 'Ramon' != 'Pedro') or (2 == 2)? ¡Verdadero!   |
|NOT     |!     |NOT será el resultado opuesto al resultado del operador lógico:<br>¿Es !(5 > 5)? ¡Verdadero!<br>¿Es !(verdadero)? ¡Falso!    |

## Controla el Flujo de Tu Código

Okey, ahora es cuando todo se empieza a poner ¡divertido! Para controlar el flujo de tus aplicaciones, vas a tener muchas opciones y vas a usar cada una de ellas todos los días. Entonces, debes sentirte cómodo usándolas. 

### Condicionales: If…else…

La primera herramienta que tienes es el condicional `if…else`. Puedes decirle a la computadora que se salte cualquier parte de tu código dependiendo del valor actual de tus variables.

La declaración "If" te permite ejecutar un pedazo de código si se cumplen ciertas condiciones (o son verdaderas). La declaración "else" va a ejecutar un pedazo de código alternativo en caso de que la condición sea falsa.

```python
if numero < 18:
    print("Esto se mostrará si el número es menor que 18")
else:
     print("El número es mayor o igual que 18")
```

### Loops (bucles)

El último truco que veremos hoy son los **loops**. Los loops son asombrosos porque te permiten repetir la ejecución de una o más líneas de código sin tener que escribir la misma línea varias veces:

```python
for n in range(10):
	print("Esta línea se imprimirá 10 veces")
```

También puedes hacerle loops a listas de valores:

```python
nombres= ["Bobby", "Diddi", "Kaylor"]
for n in nombres:
	print("El siguiente nombre es "+n)
```

Nota: el código anterior imprimirá cada nombre en la consola.

## ¿Listo para comenzar a aprender?

Por favor, no te abrumes, porque repasaremos cada uno de estos conceptos en las siguientes lecciones. ¡Obtendrás más oportunidades para practicar, aprender y liberar el potencial de tu mente!

