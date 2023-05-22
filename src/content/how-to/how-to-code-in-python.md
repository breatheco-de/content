---
title: "¿Introducción a la Programación en Python: Guía para Principiantes?"
subtitle: "Aprende los conceptos básicos de programación en Python con nuestra guía para principiantes. Descubre cómo escribir código Python, estructuras de datos, bucles y más."
date: "2023-05-21T16:36:30+00:00"
authors: ["javierseiglie"]
tags: ["Ptyhon", "ejemplos",]
status: "draft"

---

Programar en Python, ya que es uno de los lenguajes que más se recomiendo para adentrarnos en el mundo de la programación, puede ser tan sencillo como:

```python

#Python como una calculadora
print(2+2)

#Output 4
```

## Programar en Python

[Python](https://4geeks.com/technology/python) es un lenguaje de programación extremadamente potente, no por gusto es el más usado en la actualidad y al mismo tiempo, el lenguaje que más se recomienda como puerta de entrada al mundo del desarrollo de aplicaciones.

Desde hace un tiempo, Python se ha apoderado de muchas especializaciones a partir de su sencillez y potencia, pudiendo utilizar desde para la creación de aplicaciones webs, hasta para [Machine Learning](https://4geeksacademy.com/us/machine-learning-engineer/machine-learning-engineer), AI y como herramienta para la investigación y desarrollo de tecnologías y técnicas en el ámbito médico.

Pero claro, si vamos a hablar de [como programar con Python](https://4geeks.com/es/lesson/learning-to-code-with-python-es), no perseguiremos ejemplos tan específicos ni avanzados sino, miraremos ejemplos que sean más simples pero que entendiendo la base de los mismos, ya tendríamos para poder sentarnos a escribir nuestros primeros scripts.

## ¿Qué se puede hacer con Python?

### Calculadora

Un ejemplo muy simple, sería utilizar a Python como nuestra calculadora personal, de forma tal que con el siguiente código: `print(2+2)`, Python nos devolvería 4, ¿Pero pudiéramos hacer unas operaciones más complejas?

```python
#Operaciones matemáticas más complejas

print(((10+25)*12-5)/6)

#Output: 69.16666666666667
```

> siempre vamos a utilizar el método  `print()` para mostrar en la terminal lo que le pasemos entre los paréntesis

Como se puede observar, Python será capaz de realizar cálculos complejos mientras se escriban como mismo lo haríamos en matemática. Se respetarán los () y orden de ejecución de las operaciones.

### Creando listas

Normalmente, tener una lista de tareas que tenemos que realizar, resulta un método muy utilizado por todos cuando queremos darle orden de prioridad a las tareas que debemos realizar.

En Python podemos crear listas de la siguiente forma:

```python
todoList = ["make the bed", "take the dog for a walk", "learn python"]

print(todoList)
#Output: ['make the bed', 'take the dog for a walk', 'learn python']

#If we want to retrieve a single element from a list, we'll use square brackets [] and pass the position of the element on the list we want to retrieve, just remember that the first position is 0 and not 1.

print(todoList[0])
#Output: make the bed
```

>Siempre que trabajemos con un grupo de elementos, como las tareas en nuestra lista de tareas en este caso, los agrupamos en una "lista" o "array" haciendo uso de los `[]`

> Todos los lenguajes de programación hacen uso de variables, que son como pequeñas cajas donde vamos a guardar la información que necesitamos. En nuestro ejemplo, `todoList` es una variable que almacena una lista de tareas

### Trabajando con ciclos

Es muy habitual encontrarnos con una tarea que requiere que hagamos lo mismo una cierta cantidad de veces, lo cual puede ser (y normalmente es) tedioso. 

Python, como el resto de lenguajes de programación permite crear ciclos para realizar la misma tarea la cantidad de veces que necesitemos. Un ejemplo, sería salirnos del castigo de los profesores que nos ponían a escribir la misma frase 100 veces... Con Python, esto lo solucionamos de una manera muy sencilla

```python 
for x in range(10):
    print("I will study python")

#Output: 
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
# I will study python
```

> for x in range(10) es un loop que va a repetir el bloque de código que hemos establecido mientras que x, que comenzará con el valor de 0, sea menor que 10

## Haciendo uso de números aleatorios

Antes de pasar al siguiente ejemplo, creo necesario explicar un poco como son las funciones en Python:

```python
#Ejemplo de función en Python

def myFunc(params):
	# bloque de código (código que se va a ejecutar)
	return #código que se va a devolver
```

`def` (definition) es una palabra reservada que se utiliza para definir una `función` 

`myFunc` el nombre de la función, que será el que utilicemos para ejecutarla, 

`(params)` parámetros que recibirá la función, son como si fueran variables que solo existirán dentro de la función

`:` Indican donde comienza el bloque de código

`bloque de código` aquí irán todas las operaciones lógicas que necesitará realizar nuestra función para poder devolver el resultado que queremos. 

`return` lo que devolverá la función al ser ejecutada

> Ojo, algunos lenguajes de programación, como JavaScript, hacen uso de `{}`para definir el bloque de código que se ejecutará, Python por su lado, hace uso de la indexación correcta de los elementos. por eso siempre el bloque de código y el retorno nunca estarán a la misma altura que la declaración de la función.

Ahora que nos ha quedado claro cómo se compone una función en Python, podemos utilizar lo que aprendimos para crear un programa que nos devuelva colores aleatorias a partir de una lista de colores que hemos definido

```python
import random

def randomColor():
    colors= ["blue", "red", "black", "yellow", "pink"]
    randomSelectedColor = colors[random.randrange(4)]
    return randomSelectedColor
  
print(randomColor())

#Output: yellow
```
>random es un módulo de Python que nos permite generar números aleatorios, por lo que tenemos que importar (traer) a nuestro programa el módulo para poderlo utilizar

En el ejemplo anterior, tenemos una función que se llama `randomColor` que en el bloque de código lo que tiene es una lista de colores y una variable, randomSelectedColor.

Para seleccionar un color aleatorio, de nuestra lista de colores, hacemos uso de el módulo `random` que importamos al principio, utilizando su método `randrange()` para definir hasta qué número queremos generar números aleatorios (en este caso 4, que es el largo de nuestra lista de colores).

Después de haber extraído de nuestra lista de colores uno de manera aleatoria y haberlo almacenado en nuestra variable randomSelectedColor, lo que quedaría sería devolverlo en el retorno de nuestra función.

## Trabajando con fechas:

A cada vez, nos preguntamos ¿Cuántos días faltan para mi cumpleaños? Pues, creemos un pequeño programa para saberlo

```python
import datetime
now = datetime.date.today()
date = str(input("Enter your birthdate month and day with this format MM/DD: ")).split("/")
birthday = datetime.date(now.year, int(date[0]), int(date[1]))
days = (birthday - now).days
print(fdays +  " left until you level up!")
```

- Primero necesitaremos importar el módulo de fechas con `import datetime`
- La variable `now`almacena la fecha actual haciendo uso de `datetime.date.today()` que es un método que nos devuelve específicamente esa información.
- Hacemos uso de `input`para pedirle al usuario que introduzca la fecha de nacimiento y utilizamos `str()` para que esa información Python la vea como un texto y no números. Del mismo modo, separamos después el día del mes del cumpleaños del usuario utilizando `.split("/")` y esta información es la que almacenaremos en nuestra variable `date`
- La variable `birthday` lo que hará será almacenar la fecha que nos ha dado el usuario, junto al año actual en el formato que necesita el módulo `datetime` para poder realizar operaciones.
- `days` será la resta entre la fecha de nacimiento que hemos formateado y la fecha actual, que retornada en días cuántos faltan para que la resta de 0 (si diera 0, sería el día del cumpleaños)
- Imprimimos haciendo uso de la concatenación  para devolver nuestra variable `days` junto a un texto los días que faltan para subir de nivel!

## Mezclándolo un poco

Como debes de imaginar, cuando hacemos un programa, mezclamos diferentes tipos de variables, módulos y demás herramientas a nuestra disposición.

En el siguiente ejemplo estaremos haciendo uso de objetos, listas, ciclos y módulo random. El ejemplo vendrá a solucionar un problema en el que a veces nos encontramos, no sabemos que ropa ponernos para salir. Este script, nos permitirá a partir de una lista de elementos en nuestro armario, ayudarnos a seleccionar de manera aleatoria que ponernos.

```python
import random

myWardrobe = {
  "up": ["t-shirt", "long sleeves", "shirt"],
  "down": ["jean", "formal", "bomber"],
   "shoes": ["snickers", "formal", "flip-flop"],
   "accessories": ["sunglasses", "bag", "cap"],
   "main_color": ["red", "black", "white", "blue"]
}

def outfitMaker(wardrobe):
  for clothing in wardrobe:
    print(f"{clothing}: {wardrobe[clothing][random.randrange(len(wardrobe[clothing]))]}")
  return "and that's what you should wear today!"

print(outfitMaker(myWardrobe))

#Output:
#up: long sleeves
#down: bomber
#shoes: flip-flop
#accessories: sunglasses
#main_color: white
#and that's what you should wear today!
```

Analizando el ejemplo:

- importamos random para poderlo utilizar en nuestro código
- Creamos un objeto `myWardrobe` que tendrá las propiedades (llaves) de nuestro armario y los valores serán las opciones que tenemos para utilizar.
> Un objeto (o diccionario) es un tipo de dato en Python que almacena pares de valores (llave : valor)
- Creamos la función `outfitMaker` que va a recibir como parámetro nuestro armario y se encargará de escogernos nuestro outfit.
	- Primero crearemos un ciclo para recorrer nuestro objeto
	- Después iremos mirando cada una de las propiedades (llaves) del objeto y de la lista de opciones, iremos sacando un elemento de manera aleatoria
	- Cuando se termine el ciclo, habremos recibido un elemento para cada uno de las llaves y nos devolverá entonces la función "and that 's what you should wear today!"
- El último paso sería ejecutar la función llamándola y pasandole nuestro armario para que pueda realizar las operaciones.

Como pueden apreciar, Python nos permite realizar pequeños programas, tan simples como de una línea, como programas un poquito más complejos y otros, que no se cubrieron en este artículo, que serían ya programas de mucha mayor complejidad que al hacerse utilizando Python, permiten sencillez y al mismo tiempo robustez en el desarrollo y calidad de los programas, puedes ller este artículo sobre [¿Para qué sirve Python?](https://4geeks.com/es/lesson/para-que-sirve-python) para tener una idea más amplia sobre todos sus usos.

Hope you enjoy the reading and keep on the Geek side with [4Geeks](https://4geeks.com/)!
