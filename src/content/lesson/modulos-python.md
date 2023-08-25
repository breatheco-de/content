---
title: "Módulos en Python: Organizando y Reutilizando Código como un Experto"
subtitle: "Aprende sobre los módulos en Python y cómo aprovecharlos para organizar y reutilizar tu código de manera eficiente. ¡Mejora tus habilidades de programación!"
tags: ["python"]
authors: ["DF27ARTS"]

---

## Introducción a los Módulos en Python

En este artículo, nos adentraremos en el emocionante mundo de los módulos en [Python](https://4geeks.com/technology/python). Descubrirás qué son los módulos y cómo utilizarlos para potenciar tus programas. ¡Prepárate para expandir tus horizontes y llevar tus habilidades de programación al siguiente nivel! Si quieres conocer un poco más sobre [¿qué es python?](https://4geeks.com/es/lesson/que-es-python-tutorial) o sus principales usos, puedes encontrar mucha información en el Blog de [4Geeks](https://4geeks.com/).

A continuación veremos un ejemplo pequeñito sobre cómo utilizar los módulos en un script de Python.

#### Operaciones_matematicas.py
```py
def suma(a, b):
    return a + b

def resta(a, b):
    return a - b

def multiplicacion(a, b):
    return a * b
```
#### main.py
```py
from Operaciones_matematicas import suma, resta, multiplicacion

print(suma(5, 3)) # output: 8
print(resta(5, 3)) # output: 2
print(multiplicacion(5, 3)) # output: 15
```

Como puedes ver en el ejemplo, en el modulo `Operaciones_matematicas.py` tenemos varias funciones que nos permiten realizar operaciones matemáticas, luego en modudo `main.py` importamos estas funciones y las invocamos. Este es un pequeño ejemplo sobre cómo crear e importar módulos en Python. 

## ¿Qué son los Módulos en Python? 📕

Los módulos en Python son una de las características más poderosas y versátiles de este lenguaje. Permiten organizar el código en unidades lógicas reutilizables, facilitando el desarrollo y mantenimiento de programas. Imagínalos como cajas mágicas llenas de herramientas y funcionalidades listas para ser utilizadas en tus programas. Los módulos te permiten organizar y dividir tu código en unidades lógicas, lo que facilita su mantenimiento y reutilización. ¡Son como los superpoderes que llevan tus programas al siguiente nivel! 💫🔧

## Beneficios de utilizar módulos en Python

1. **Reutilización de código**: Al dividir el código en módulos, podemos utilizar las mismas funcionalidades en diferentes partes de un programa o incluso en otros proyectos, lo que ahorra tiempo y esfuerzo.
2. **Organización**: Los módulos permiten organizar el código en unidades más pequeñas, lo que mejora la legibilidad y facilita la colaboración entre desarrolladores.
3. **Mantenibilidad**: Al separar el código en módulos, es más sencillo realizar cambios o correcciones en áreas específicas sin afectar el resto del programa.

## Importando Módulos en Python

Para utilizar un módulo en Python, primero debes importarlo en tu programa. Puedes hacerlo utilizando la palabra clave  `import`  seguida del nombre del módulo. Por ejemplo:

```py
import math
```

Esto importa el módulo [math](https://docs.python.org/es/3/library/math.html), que proporciona funciones matemáticas útiles, como cálculos trigonométricos y operaciones matemáticas avanzadas. Una vez importado, puedes acceder a las funciones y variables definidas en el módulo utilizando la sintaxis  `nombre_modulo.nombre_funcion`. 

Ejemplos:

```py
import math

# Redondea número
redondeo_arriba = math.ceil(4.5)
redondeo_abajo = math.floor(4.5)
print(redondeo_arriba) # output: 5
print(redondeo_abajo) # output: 4

# Calcula la potencia
base = 4
exponente = 3
potencia = math.pow(base, exponente)
print(potencia) # output: 64.0

# Calcula la raíz cuadrada
raiz_cuadrada = math.sqrt(81)
print(raiz_cuadrada) # output: 9.0

# Obtener el valor de PI
pi = math.pi
print(pi) # output: 3.141592653589793
```

## Utilizando Funciones y Variables de un Módulo ✨
Los módulos en Python suelen ofrecer una variedad de funciones y variables que puedes utilizar en tus programas. Puedes explorar la documentación del módulo para descubrir todas las posibilidades que ofrece. Aquí hay algunos ejemplos de módulos populares y cómo utilizarlos.

### 1. Módulo random

El módulo [random](https://docs.python.org/es/3/library/random.html) te permite generar números aleatorios. Puedes utilizar la función  `random()`  para obtener un número aleatorio entre 0 y 1 y también puedes usar la función `uniform()` para obtener un número aleatorio entre un valor inicial y un valor final. Ejemplos:

```py
import random

# Número flotante aleatorio entre 0 y 1
numero_aleatorio = random.random()
print(numero_aleatorio) # output: 0.20421564028383155

# Número aleatorio entre un rango inicial y un rango final
rango_inicial = 5
rango_final = 15
numero_aleatorio_uno = random.uniform(rango_inicial, rango_final)
numero_aleatorio_dos = random.uniform(rango_inicial, rango_final)

print(numero_aleatorio_uno) # output: 9.141696242957385
print(numero_aleatorio_dos) # output: 7.795423441460806
```

La función `random()` no necesita parámetros pero la función `uniform()` si necesita dos parámetros, el primer parámetro es el rango inicial que indica que el número aleatorio que genera no puede ser menor a este valor inicial, el segundo parámetro es el rango final que indica que el número aleatorio no puede ser mayor a este valor final.

### 2. Módulo datetime

El módulo [datetime](https://docs.python.org/es/3/library/datetime.html) nos permite trabajar con fechas y horas, este módulo nos provee diferentes métodos para trabajar con ellas y modificarlas.

```py
import datetime

fecha_hora_actual = datetime.datetime.now()
print(fecha_hora_actual) # output: 2023-07-18 11:43:48.374080

fecha_expecifica = datetime.datetime(2023, 7, 18)
print(fecha_expecifica) # output: 2023-07-18 00:00:00

fecha_actual = datetime.date.today()
print(fecha_actual) # output: 2023-07-18
```

Como puedes ver en los ejemplo el método `now()` retorna la fecha y hora actual esto dependerá del país en el que lo utilice, el método `datetime()` te permite pasarle una fecha especifica y te retorna esa fecha en una sintaxis apropiada, y el método `today()` solo te retorna la fecha actual no te retorna la hora. Estos son solo algunos ejemplos, el módulo `datetime`  tiene muchos métodos que te serán útiles a la hora de trabajar con fechas en python.

### 3. Módulo os

El módulo [os](https://docs.python.org/es/3/library/os.html) (Operating System) te proporciona funciones para interactuar con el sistema operativo. Puedes obtener información sobre el directorio actual, crear carpetas, eliminar archivos, y mucho más.

```py
import os

# Obtener la dirección del directorio actual
directorio_actual = os.getcwd() 
print(directorio_actual) # output: tu directorio actual, ejemplo: C:\Users\57320\OneDrive\etc...

# Crear un directorio nuevo
nombre_directorio = "directorio_matematicas"
os.mkdir(nombre_directorio)

# Renombrar un archivo
nombre_antiguo = "directorio_matematicas"
nombre_nuevo = "directorio_renombrado"
os.rename(nombre_antiguo, nombre_nuevo)

# Listar archivos en el directorio actual
directorio_actual = os.listdir()
print(directorio_actual) # output: ['directorio_renombrado', 'main.py', 'Operaciones_matematicas.py', '__pycache__']
```

El módulo `os` tiene diversos métodos que te ayudarán a interactuar con el sistema operativo, puedes crear archivo y directorios nuevos, renombrar directorios existentes, listar los archivos de un directorio en especifico y mucho más. En el ejemplo anterior se muestran solo algunos ejemplos de lo que puedes hacer con este módulo,  este módulo ofrece una amplia variedad de métodos que puedes usar para interactuar con tu sistema operativo.

Existen múltiples módulos que puedes usar a la hora de trabajar con Python, algunos de ellos vienen instalados por defecto como los módulos **os** (Operating System), **re** (Regular Expressions), **datetime**, **random**, etc..., pero algunos otros como las librerías **Numpy** o **Pandas** no vienen instalados por defecto, para poder acceder a estos debes instalarlos y luego puedes importarlos con la misma sintaxis `import numpy`, `import pandas`.

## Creando tus Propios Módulos 

Además de utilizar los módulos incorporados en Python, también puedes crear tus propios módulos personalizados. Un módulo personalizado es simplemente un archivo Python con funciones y variables que puedes importar en otros programas. Estos módulos te serán especialmente útilies a la hora de trabajar en proyectos de Python grandes como por ejemplo una API.

Para crear tu propio módulo, sigue estos pasos:

1.  Crea un archivo  `.py`  con el nombre de tu módulo, por ejemplo,  `mi_modulo.py`.
2.  Define las funciones y variables dentro del archivo.
3.  Importa tu módulo en otros programas utilizando la sintaxis  `import nombre_modulo` o si el modulo esta dentro de una carpeta usa la sintaxis `from nombre_carpeta inport nombre_modulo`.

Ejemplo:

#### Operaciones_matematicas.py
```py
def Operaciones(operacion, num_uno, num_dos):
    if (operacion == "suma"):
        return num_uno + num_dos
    elif (operacion == "resta"):
        return num_uno - num_dos
    elif (operacion == "multiplicación"):
        return num_uno * num_dos
    elif (operacion == "división"):
        return num_uno / num_dos if num_dos != 0 else None
    else:
        return  None
```

#### main.py
```py
import Operaciones_matematicas as OM

def main():
    print("Bienvenido!, aqui podras realizar tus operaciones matematicas")
    operacion = input("Ingresa la operación que deseas realizar (Suma, Resta, Multiplicación o División): ").lower()

    if operacion not in ["suma", "resta", "multiplicación", "división"]:
        print("Operación no reconocida. Por favor, ingrese (Suma, Resta, Multiplicación o División).")
        return

    print(f"Por favor ingresa los números para realizar la {operacion}.")
    
    num_uno = float(input("Ingrese el primer número: "))
    num_dos = float(input("Ingrese el segundo número: "))
    resultado = OM.Operaciones(operacion, num_uno, num_dos)

    if resultado != None:
        print(f"El resultado de la {operacion} es: {resultado}")

if  __name__  ==  "__main__":
    main()
```

En este ejemplo, creamos una función que realiza operaciones matematicas en el modulo `Operaciones_matematicas.py` luego importamos este modulo en el modulo principal `main.py`, en Python puedes usar la palabra reservada `as` para colocarle un alias a los modulos que importas, en este ejemplo usamos el alias `OM` para renombrar el modulo `Operaciones_matematicas`. Despues de importar el modulo, creamos un archivo que al ejecutarlo te pedirá en la consola que primero ingreses el tipo de operación que deseas realizar con ayuda de la palabra reservada `input()`, luego te pedirá que ingreses los números para realizar la operación y un vez ingreses lo números te retornará el resultado.

Los módulos son una herramienta poderosa para ampliar las capacidades de tus programas Python. Ahora que conoces los conceptos básicos y cómo utilizar los módulos existentes, puedes explorar más y crear tus propios módulos personalizados. ¡El mundo de la programación está lleno de posibilidades infinitas!

Code will set you free ✨👨‍💻
