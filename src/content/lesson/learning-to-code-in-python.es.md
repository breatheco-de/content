---
title: "Aprendiendo a programar con Python"
subtitle: "Python es un lenguaje de programación con el crecimiento más rápido en el mundo, hace casi todo lo que puedas pensar y la mejor noticia es que es un de los más fáciles de aprender"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
status: "published"
date: "2020-10-19T12:36:31-04:00"
tags: ["python"]

---

## ¿Por qué python?

Python es el primer lenguaje que debieras aprender, pero evidentente no el único.

- MIT decidió enseñar python como primer lenguaje porque su sintaxis previene muchos errores, especialmente porque tiene identación y no puntos y comas.

## Variables

<iframe width="830" height="467" src="https://www.youtube.com/embed/Q-eob0WBKs0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/Q-eob0WBKs0">Haz clic aquí para abrir la demo en otra ventana</a></small></div>

Las variables no son un concepto nuevo, cualquier que sepa matemáticas está familiriarizado con el condepto de variables.

```python
edad = 24
```

![qué es python](https://github.com/breatheco-de/content/blob/master/src/assets/images/ecb49b67-f513-49b3-bd4a-dd7cc44e9bce.gif?raw=true)

Casi con cualquier lenguaje de programación puedes crear tantas variables como quieras o necesites. Para empezar, en Python debes **declarar el nombre de esa variable** con un nombre _único_ (relativo al valor o lo que reciba).

El **nombre de la variable** es la manera más efectiva de describir el contenido de una variable, úsalo con sabiduría. Es importante escoger un nombre que claramente te indique (a ti y a otros programadores) sobre los datos que están siendo almacenados en la variable. Si escogemos un nombre malo o ambigüo, nuestro código será casi imposible de entender, ergo se vuelve inutilizable. Por ejemplo digamos que le cambiamos el nombre a nuestra variable "edad" a "a":

```python
# Ejemplo de un mal nombre de variable:
a = 24

# Ejemplo de un buen nombre de variable:
edad = 24
```

Como puedes ver, el nuevo nombre de la variable no nos dice nada sobre el dato que está siendo almacenado y por qué lo están usando.

Escoger el nombre de tu variable es muy importante, así que por favor no uses nombres genéricos ¡Sé descriptivo! Un nombre vago hará difìcil de comprender el propósito de la variable, especialmente para otros programadores (incluyéndote a ti). 

## Asignándole un valor a las variables

Como desarrolladores, podemos establecer el valor de una variable usando el operador `=`. No tienes que establecer el valor de una variable cuando la declaras por primera vez. Puedes establecer o re-establecer (sobreescribir) el valor tantas veces como quieras y cuando quieras. El valor siempre el último que estableciste. A continuación hay algunos ejemplos sobre cómo establecer valores a las variables:

```python
a = 24
a = 25
a = 80
```

Los valores de las variables están sujetos a cambio a largo del tiempo. Para recuperar el valor de una variables puedes imprimir su valor en la pantalla en cualquier momento. Cada lenguaje tiene sus propios métodos para imprimir. En python usamos `print`.


```py runable=true
edad = 22
print(edad)

edad = 24
print(f"El segundo valor de la variable es: {edad}")

# Podemos actualizar el valor de la variable "edad" en cualquier momento
edad = 30
print(f"El tercer valor de la variable es: {edad}")

```
Uso de f-strings: En Python, puedes usar `f"texto {variable}"` para insertar variables dentro de cadenas de texto de manera limpia y legible.


## Tipos de datos

Las variables pueden tener diferentes tipos de valores:

|**Tipos-de-Datos**   |**Posibles Valores**   |**Descripción**   |
|:---------------|:--------------------|:-----------------|
|Booleano         |Verdadero \| Falso         |Los booleanos están destinados para operaciones lógicas. Si le preguntas a una computadora algo como: "¿X es igual a 3?" Responderá con un booleano (verdadero o falso).   |
|String        |Cualquier serie de caracteres     |Los strings son la única forma en que tenemos que almacenar palabras (series de caracteres). Nota: los strings deben estar encerradas entre comillas.  |
|Número    |Solo números     |Números enteros, números negativos, números decimales, decimales, etc. Todos los tipos posibles de números. <br>  |
|Indefinido     |El vacío     |Cuando una variable no tiene un valor asignado, queda indefinida.   |
|Arreglo     |Una lista con cualquier tipo de valores.   |Una sucesión de cualquier tipo de valores. Pueden ser tipos mixtos de valores; por ejemplo: [2, 3, ‘Word’, 2, 1, null, 232, 5, 3, 23, 234, 5, ‘hello’].     |
|Objetos    |Cualquier objeto    |Puedes crear tus propios tipos de datos con operaciones más complejas. Hablaremos más sobre esto más adelante.  |
|Nulo     |Sólo nulo    |Se utiliza para especificar cuándo la base de datos o cualquier otra función no devuelve nada.   |

```py runable=true
# Variables y sus tipos
miPrimerBooleano = True  # Booleano
miPrimerEntero = 35  # Entero
miPrimerFlotante = 2323.4545  # Flotante (número con decimales)

miPrimeraCadena = 'Hola Mundo'  # Cadena
miPrimerObjeto = {'name': 'Ramon', 'Age': 32}  # Diccionario con 2 pares clave-valor
miPrimerArreglo = [23, 'Hola', 8.54, None, 544]  # Lista de 5 elementos de diferentes tipos
miPrimerNulo = None  # NoneType representa nulo en Python
miPrimerIndefinido = None  # Python utiliza None para representar valores indefinidos o nulos

# Imprimiendo las variables en la consola
print(miPrimerBooleano)

print(miPrimerEntero)
print(miPrimerFlotante)
print(miPrimerFlotante + miPrimerEntero)  # Operación aritmética

print(miPrimerObjeto)
print(miPrimeraCadena)
print(f"{miPrimeraCadena}...{miPrimerObjeto['name']}")  # Formateo de cadena para concatenación

print(miPrimerArreglo)
print(miPrimerNulo)
print(miPrimerIndefinido)

```


## Operaciones

¿Qué operaciones puedo hacer con las variables? 
Dependiendo del tipo de datos tienes algunas posibilidades diferentes:

+ Los números son fáciles - puedes hacer cualquier operación matemática que desees.
+ Las cadenas se pueden concatenar (fusionar), dividir, convertir a mayúsculas o minúsculas, etc.
+ No se puede hacer mucho con los tipos de datos nulos, booleanose indefinidos.
+ Hablaremos de Arreglos y Objetos en una otra sección. Requieren de mucha más atención.

## Funciones

Las funciones son pedazos de código que se pueden reutilizar varias veces durante el tiempo de ejecución, independiente de su posición en el código. Hay cientos de razones para usar funciones, pero aquí están las 2 más importantes:

+ Divide y conquista: siempre es más fácil dividir tus problemas en varios problemas más pequeños. Esto se convertirá en tu mayor desafío a la hora de resolver problemas complejos. Las funciones serán tus mejores herramientas para la abstracción.
+ Reutilización: cualquier desarrollo normal tomará al menos 5,000 líneas de código. Es redundante e ineficiente seguir escribiendo el mismo código una y otra vez.

## Declarar una Función

Para declarar una función en JavaScript, debes comenzar a utilizar la palabra `function` seguida del nombre que le quieres dar a esa función.

Luego debes especificar los parámetros (entradas) que tendrá la función entre paréntesis.

Luego, abrirás una llave y escribirás el código que tu función siempre debe realizar. Una vez que hayas terminado, cierra la llave y ahora tu función está lista para ser utilizada.

**Nota:**  Para retornar algo, usa la palabra `return` en cualquier momento dentro del contenido de su función (dentro de las llaves).

![aprende a programar en Python](https://github.com/breatheco-de/content/blob/master/src/assets/images/0c4fa020-02f6-4ec0-bfeb-a6292145a153.gif?raw=true)

```python
def multiply (param1, param2):
    return (param1 * param2)
```

## Parámetros y alcance de la Función

El alcance de una variable determina dónde está disponible esa variable para ser utilizada. Hay dos tipos principales de alcances:

### Variables Locales

Una variable local sólo está disponible dentro del alcance de las llaves más cercanas. Por ejemplo, las variables que se pasan como parámetros a funciones, solo están disponibles dentro del contenido de esa función en particular.

### Variables Globales

Si declaras una variable al comienzo de tu código, estará disponible  lo largo de todo el código, incluso durante el contenido de cualquier función en particular.

```py runable=true
# Definir la variable global
message = "Hello"

def print_message():
    # Esta funcion utiliz la variable global "message"
    print(message)

print_message()  # Salida: Hello
```

## Operaciones lógicas

Las computadoras piensan todo en blanco o negro. Todo es verdadero o falso. Todas las decisiones en una computadora se reducen a un simple **booleano** unos o ceros. Puedes preparar una computadora para resolver problemas particulares si escribes un código que haga las preguntas adecuadas para resolver ese problema.

Por ejemplo, si quiero una computadora para dar dulces sólo a niños mayores de 13 años de edad, puedo indicarle a la computadora que pregunte:

 **¿La edad de este niño es mayor de 13 años? ¿Sí o no?**

**En python, puedes indicarle a la computadora que realice las siguientes operaciones lógicas:**

|**Operación**  |**Sintaxis**   |**Ejemplos**   |
|:--------------|:--------------|:--------------|
|Igual a     |==             |Es 5 == 5? True!<br>Es 5 == 4? False!<br>Es 5 == '5'? True!    |
|No Igual a    |!=             |Es 5 != 5? False!<br>Es 5 != '5'? False!<br>Es 1 != 'Hello' True!   |
|Mayor que   |>              |Es 5 > 5? False!<br>Es 6 > 3? True!    |
|Menos que    |<              |Es 6 < 12? True            |
|Mayor o igual |>=             |Es 6 <= 6? True<br>Es 3 <= 6? True    |
|Menor o igual  |<=            |Tienes la idea 🙂       |

Para crear operaciones realmente útiles, puedes combinar varias operaciones en la misma pregunta usando AND, OR y NOT ("Y", "O" o "NO" respectivamente).

Puedes agrupar las operaciones lógicas entre paréntesis y también usar paréntesis anidados para realizar varias operaciones al mismo tiempo.

|**Operación**   |**Sintaxis**   |**Ejemplos**   |
|:---------------|:--------------|:--------------|
|AND             |`and`             |Con AND, ambos lados TIENEN QUE SER TRUE para que todo se convierta en verdadero.<br>Es (5 == 5 and 3 > 1) ? True!<br>Es ('Ramon' == 'Pedro' and 2 == 2) ? False!    |
|OR     |`or`     |Es ('Oscar' != 'Maria' or 2 != 2)? True!<br>Es (5 == '5' and 'Ramon' != 'Pedro') or (2 == 2)? True!   |
|NOT     |`not`     |NOT será exactamente lo contrario del resultado del operador lógico:<br>Es not (5 > 5)? True!<br>Is not (True)? False!    |


## Controla el Flujo de Tú Código

Bien, ahora es cuando todo empieza a ponerse divertido! Para controlar el flujo de tu aplicación, tienes varias opciones y las utilizarás cada día. Por lo tanto, debes sentirte cómodo usándolas.

### If…else…

La primera herramienta que tienes es el condicional `if ... else`. Es muy fácil. Puedes decirle a la computadora que omita cualquier parte de tu código dependiendo del valor actual de tus variables.

La instrucción `if` te permite ejecutar un fragmento de código si se cumplen ciertas condiciones (o si son verdaderas). La declaración "else" ejecutará un fragmento de código alternativo en caso de que la condición sea falsa.

Continuando con el ejemplo anterior de los dulces 
¿La edad de este niño es mayor de 13 años?

```python runable=true
# arreglo de edades para probar distintos casos
edades = [11, 13, 14]

# Iteramos sobre cada edad y mostramos los mensajes correspondientes
for edad in edades:
    print(f"Edad actual: {edad}")
    if edad > 13:
        print("Puedes recibir dulces. ¡Disfruta!")
    elif edad == 13:
        print("¡Felicidades por tus 13 años! Puedes recibir dulces.")
    else:
        print("Lo siento, los dulces son sólo para niños mayores de 13 años.")
    print()  # Línea en blanco para separar los casos
```

## Switch

Python no cuenta con la capacidad de hacer `switch` como otros lenguajes (js, c#, etc.)

## While

Es posible hacer un bucle de un segmento de su código tantas veces como deseeso necesites Los bucles son una de las herramientas más importantes para los desarrolladores en estos días.

Imagina que estás dentro de un ascensor: el ascensor debe girar en bucle por los pisos hasta que alcance el piso específico que deseas.

Un bucle `while` ejecutará un bloque de código siempre que una condición sea verdadera. Una vez que la condición sea falsa, el bucle dejará de ejecutar
el bloque de código.

```python runable=true
sum = 0;
number = 1;
while number <= 50:
  sum += number
  number += 1

print("Sum = " + sum)
```

## For loop

`For` es similar a` while,` con la única diferencia de que debes especificar la condición para que se detenga desde un principio. Por esa razón, `for` es un poco más organizado y más fácil de entender.

Nota: cuando realices un bucle, asegúrate de que la declaración finalmente devuelva falso para evitar un bucle infinito. En un bucle infinito, el código se ejecuta indefinidamente y hará que tu navegador se bloquee.

<iframe width="578" height="325" src="https://www.youtube.com/embed/TSMzvFwpE_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div align="right"><small><a href="https://www.youtube.com/embed/TSMzvFwpE_A">Haz clic aquí para abrir el video en una nueva ventana</a></small></div>

```python
for i in range(10):
  print("This is number" + " " + i)

```

## For..in

Los bucles `For… in` pueden usarse para recorrer con un bucle las propiedades de un objeto. Dentro de los paréntesis, puedes establecer cualquier nombre para representar la información dentro del objeto, y luego incluir el nombre del objeto:

```python
for (variable in object)<br> {
bloque de código a ejecutarse
}
```

```python runable=true
perro = {
  "especie": "Gran Danés",
  "tamaño": "Extra Grande",
  "edad": 3,
  "nombre": "Rocky"
}

for items in perro:
  print(perro[items])


```

## Entonces ... dime, ¿te gustó la programción?

La programación es como Taco Bell: siempre se usan los mismos ingredientes pero se mezclan de diferentes maneras. Sabes cómo escribir código, pero ... ¿sabes cómo resolver problemas reales?
