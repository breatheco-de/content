---
title: Data Science con Python
tags:
  - data-science
  - python
  - pandas
  - numpy
canonical: ''
description: >-
  Aprende a usar Python en Ciencia de Datos. Descubre conceptos clave, tipos de
  datos y librerías esenciales. ¡Domina Data Science hoy mismo!
---
**Python** es un lenguaje de programación muy versátil y que se utiliza en multitud de casos: desarrollo de aplicaciones web (front y back), juegos para móvil, simulaciones, redes, automatizaciones... además, es el lenguaje rey para trabajar con datos y elaborar algoritmos de Inteligencia Artificial, ciencia de datos y Machine Learning. Antes de comenzar, distingamos entre los tres términos anteriores:

| Término | Definición | Amplitud | Objetivo |
|:--------|:-----------|:---------|:---------|
| Inteligencia Artificial (*Artificial Intelligence*) | Es el estudio de cómo hacer que las computadoras piensen y actúen como los humanos. | Es un campo amplio que incluye varios subcampos, como el aprendizaje automático, la robótica, el procesamiento del lenguaje natural, la visión por computadora... | Simular la inteligencia humana en máquinas. |
| Aprendizaje automático (*Machine Learning*) | Es un subcampo de la IA que se centra en desarrollar algoritmos y modelos que permitan a las computadoras aprender a partir de datos. | Es una técnica específica dentro de la inteligencia artificial. | Hacer predicciones o decisiones sin ser programadas específicamente para ello. |
| Ciencia de datos (*Data Science*) | Es un campo interdisciplinario que utiliza técnicas estadísticas, informáticas y de análisis para interpretar, comprender y extraer conocimiento de datos estructurados y no estructurados. | Incluye la adquisición, limpieza, análisis y visualización de datos, y puede hacer uso de la IA y del machine learning para analizarlos. | Descubrir patrones y obtener información valiosa de grandes conjuntos de datos. |

![Diferencias entre estas disciplinas](https://github.com/breatheco-de/content/blob/master/src/assets/images/disciplines_differences.png?raw=true)

Mientras que la IA se centra en simular la inteligencia humana, el aprendizaje automático es una técnica dentro de la IA que permite a las máquinas aprender de datos, y la ciencia de datos es una disciplina más amplia que se ocupa de todo el proceso de trabajar con datos, desde la recopilación hasta la interpretación, y puede incluir el uso de la IA y el machine learning.

## Guía básica de Python

### `Hello, World!`

Todo desarrollador que comienza a programar en un lenguaje nuevo lo hace imprimiendo `Hello, World!`. En Python podemos hacerlo usando la función `print`, que muestra por consola cualquier dato o texto que se coloque entre sus paréntesis:

```py runable=true
print("Hello, World!")
```

### Variables

Una **variable** (*variable*) en Python (y en la mayoría de los lenguajes de programación) son contenedores que almacenan datos que pueden variar en el tiempo. Este valor puede ser un número, un texto, una lista de elementos... Lo especial de este contenedor es que podemos asignarle un nombre para identificarlo y acceder a lo que guardamos en él cuando lo necesitemos:

```py
nombre = "Juan"
edad = 25
altura = 1.80
es_estudiante = True
```

Además, las variables son elementos mutables y que pueden cambiar en el tiempo. Así, al igual que podemos acceder a su valor para leerlo, también podemos modificarlo:

```py runable=true
mi_numero = 10
print(f"Número original: {mi_numero}")

mi_numero = 60
print(f"Número nuevo: {mi_numero}")
```

De esta forma hemos modificado el valor de la variable `mi_numero` de `10` a `60`.

Las variables son fundamentales en la programación porque:

1. Permiten almacenar información para usarla más tarde.
2. Facilitan la realización de operaciones entre ellas (dependiendo de su tipo).
3. Hacen el código más legible y organizado. Es más fácil entender `altura_persona` que recordar qué significa un número suelto en el código.

Es importante dar siempre a las variables nombres descriptivos para que nosotros mismos (o cualquiera que lea nuestro código) puedan entender fácilmente para qué sirven y qué se supone que contienen.

### Tipos de datos

Los **tipos de datos** (*data types*) determinan la clase de datos que una variable puede contener. Python tiene sus propios tipos básicos:

**Entero** (*integer*): `int`

Representa números enteros, positivos o negativos.
```py
num_int1 = 123
num_int2 = -57
```

**Punto flotante** (*floating point*): `float`

Representa números reales con decimales.
```py
num_float1 = 3.14
num_float2 = -0.16
```

**Cadena** (*string*): `str`

Representa secuencias de caracteres (texto).
```py
str_var = "Esto es un texto de prueba"
```

**Booleano** (*boolean*): `bool`

Representa valores que solo tienen 2 posiciones, `True` o `False`. 
```py
bool_var1 = True
bool_var2 = False
```

**Lista** (*list*): `list`

Representa una colección ordenada de elementos. Los elementos pueden ser de cualquier tipo y se puede modificar su contenido: insertar elementos, eliminar, etc.
```py
list_numbers = [1, 2, 3, 4, 5]
list_strings = ["A", "B", "C", "D"]
```

**Tupla** (*tuple*): `tuple`

Similar a la lista, pero es inmutable, es decir, una vez creada no se puede modificar su contenido.
```py
tuple_numbers = (1, 2, 3, 4, 5)
tuple_booleans = (True, False, False)
```

**Conjunto** (*set*): `set`

Representa una colección no ordenada de elementos únicos (sin duplicados).
```py
set_fruits = {"manzana", "banana", "cereza"}
```

**Diccionario** (*dictionary*): `dict`

Representa una colección no ordenada de pares clave-valor.
```py
dict_person = {
    "nombre": "Juan",
    "edad": 25,
    "altura": 1.80,
    "es_estudiante": True
}
```

**Octetos** (*bytes*): `bytes`

Representa secuencias de bytes. Normalmente, se utilizan para manejar datos binarios.
```py
bytes_var = b"Hola"
```

Además de estos tipos básicos, Python también ofrece módulos y bibliotecas que definen otros tipos de datos más especializados.

### Operadores

Los **operadores** (*operators*) son símbolos que indican una operación:

**Operadores matemáticos**

Los operadores matemáticos realizan operaciones aritméticas. Dependiendo del tipo de las variables, los resultados pueden ser unos u otros, no necesariamente tienen que aplicarse siempre a números.

- Suma: `+`
- Resta: `-`
- Multiplicación: `*`
- División: `/`
- Módulo: `%`

```py
x = 5
y = 3
z = x + y  # Salida: z = 8
z = x * y  # Salida: z = 15
```

**Operadores lógicos**

Los operadores lógicos evalúan condiciones y devuelven valores booleanos. Pueden ser utilizados en bucles, condicionales, filtros, etcétera. Son muy versátiles y útiles.

- Y lógico: `and`
- O lógico: `or`
- No lógico (negación): `not`

```py
resultado = True and False  # resultado = False
resultado = True or False   # resultado = True
resultado = not True        # resultado = False
```

### Estructuras de control

Las estructuras de control en Python son instrucciones que permiten modificar el flujo de ejecución de un programa. Estas estructuras permiten tomar decisiones, repetir bloques de código y saltar a diferentes partes del código dependiendo de ciertas condiciones lógicas.

En Python, las principales estructuras de control son:

#### Estructuras de decisión

**`if`**

Permite ejecutar un bucle de código si se cumple una condición.

```py runable=true
edad = 18
if edad >= 18:
    print("Eres mayor de edad.")
```

**`elif`**

Se extiende el *if*, para incluir y comprobar otras condiciones.

```py runable=true
edad = 18
if edad < 18:
    print("Eres menor de edad.")
elif edad >= 18:
    print("Eres mayor de edad.")
```

**`else`**

Se ejecuta cuando no se cumpla ninguna de la(s) condición(es) anterior(es):

```py runable=true
edad = 18
if edad < 18:
    print("Eres menor de edad.")
else:
    print("Eres mayor de edad.")
```

#### Estructuras de repetición (bucles)

**`for`**

Repite un bloque de código un número determinado de veces o a través de los elementos de una colección.

```py runable=true
for i in range(5):
    print(i)

# Muestra en consola: 0, 1, 2, 3, 4


frutas = ["manzana", "banana", "cereza"]
for fruta in frutas:
    print(fruta)

# Muestra en consola: manzana, banana, cereza
```

**`while`**

Repite un bloque de código mientras se cumpla una condición.

```py runable=true
contador = 0
while contador < 5:
    print(contador)
    contador += 1

# Muestra en consola: 0, 1, 2, 3, 4
```

#### Control de bucles

**`break`**

Termina el bucle antes de que haya completado todas sus iteraciones.

```py runable=true
for letra in "Python":
    if letra == "h":
        break
    print(letra)

# Imprime: P, y, t
```

**`continue`**

Salta a la siguiente iteración del bucle, omitiendo el código que sigue después.

```py runable=true
for letra in "Python":
    if letra == "h":
        continue
    print(letra)

# Imprime: P, y, t, o, n
```

**`pass`**

No hace nada. Actúa como un marcador de posición donde se requiere una declaración sintácticamente, pero no se desea ejecutar ningún código.

```py runable=true
for letra in "Python":
    if letra == "h":
        pass
    print(letra)

# Imprime: P, y, t, h, o, n
```

Estas estructuras de control son esenciales para crear programas que puedan tomar decisiones, repetir tareas y manejar diferentes situaciones o entradas. Al combinarlas y anidarlas, podemos crear flujos de trabajo complejos y lógicas sofisticadas en nuestros programas.

### Funciones

Una **función** (*function*) es un bloque de código reutilizable que realiza una tarea específica.

```py runable=true
def saludo(nombre):
    return f"Hola, {nombre}!!"

print(saludo("Juan"))
```

Las funciones proporcionan una forma de modularizar el código, permitiéndonos organizar y reutilizar fragmentos de código en diferentes partes de nuestros programas. Esto mejora la calidad y facilita la depuración y el mantenimiento.

Un código en Python combina todos los elementos que acabamos de ver en esta guía para llevar a cabo una tarea concreta. A continuación se muestra un programa sencillo que toma la edad de un usuario, determina si es menor de edad, adulto o adulto mayor, y luego imprime una lista de actividades recomendada para cada grupo:

```py
# 1. Tipos de datos
nombre = input("Por favor, ingresa tu nombre:")
edad = int(input("Por favor, ingresa tu edad:"))

# 2. Estructura de decisión
if edad < 18:
    estado = "menor de edad"
    actividades = ["estudiar", "andar en bicicleta", "salir con amigos"]
elif edad < 65:
    estado = "adulto"
    actividades = ["trabajar", "leer un libro", "viajar"]
else:
    estado = "adulto mayor"
    actividades = ["descansar", "leer el periódico", "pasear"]

# 3. Estructura de repetición
print(f"\nHola, {nombre}. Eres un {estado}. Aquí hay algunas actividades que podrías considerar:")
for actividad in actividades:
    print(f"- {actividad}")
```

## Librerías

Una **librería** (*library*) es una colección de funciones predefinidas y que se realizan con un fin determinado. El objetivo es simplificar el trabajo del desarrollador y no tenerlas que programar desde cero. Existen multitud de ellas y se organizan según su utilidad. Como Python es el lenguaje más utilizado en el ámbito de Data Science y de la Inteligencia Artificial, algunas de sus librerías más utilizadas son relativas a estos campos:

- Scikit-learn
- NuPIC
- Ramp
- NumPy
- Pandas
- TensorFlow
- Keras
- Pipenv
- SciPy
- Matplotlib

De este top 10, la mayoría se utilizan en los procesos de Machine Learning, Natural Language Processing, Visión Artificial y muchas otras áreas de la inteligencia artificial. Por ello, es vital que conozcas y sepas utilizar algunas de estas librerías, que son clave para cualquier labor de ciencia de datos.

En este bootcamp aprenderemos a fondo *NumPy*, que es una librería utilizada para procesar y trabajar con listas multidimensionales de forma muy eficiente, *Pandas*, construida sobre *NumPy* y que permite trabajar con estructuras de datos tabulares denominados *DataFrames*. *Matplotlib* que posibilita la opción de visualizar los datos y sus relaciones, y *scikit-learn*, ampliamente utilizada para construir modelos de Machine Learning.

## Rendimiento

Todo el software que se programa se debe ejecutar en un hardware, que es un conjunto de elementos físicos que constituyen un sistema informático. Cuanto más eficiente sea el código que implementes, mayor aprovechamiento de los recursos hardware, menores tiempos de ejecución, mayor posibilidad de distribuir tareas, etcétera.

Cuando se construyen modelos de inteligencia artificial, el rendimiento es una gran preocupación, ya que la potencia de procesamiento es la mayor limitación que tiene este campo en este momento. Por lo tanto, la construcción de código y funciones eficientes es un pilar fundamental. También aprenderemos sobre ello.

## Desarrollo de código

Existen dos formas principales de programar en Python, y cada una de ellas se puede llevar a cabo usando distintas herramientas:

- **Programación flexible**: Se lleva a cabo con interfaces web como `Jupyter Notebook` o `Google Collab`. Se caracteriza por no contar con una estructura predefinida de código y concebidas para hacer desarrollos rápidos y de prueba y error. En este tipo de desarrollos se generan **cuadernos** (*notebooks*) 
- **Programación productiva**: Se lleva a cabo en **entornos de desarrollo integrados** (*IDE*, *Integrated Development Environment*), que son programas informáticos que permiten un desarrollo de inicio a fin de una aplicación o un servicio completo. Algunos de los más utilizados en Python son el `Visual Studio Code` y `Spyder`, entre otros.

Normalmente, el desarrollo de un producto, modelo o servicio de Machine Learning, se compone de dos fases: una exploratoria y otra de desarrollo. Primero programamos en notebooks y hacemos pruebas de concepto, buscando el mejor preprocesamiento, análisis y predicción de los datos, y después preparamos un desarrollo completo para productivizar el modelo.

### Estructura de proyecto

Usaremos una plantilla para nuestros proyectos llamada [Cookie Cutter Datascience](https://drivendata.github.io/cookiecutter-data-science/). Usar una plantilla siempre es una buena idea para organizar nuestros archivos y flujo de trabajo del proyecto. Puedes leer la documentación y ver [este video sobre cómo funciona](https://www.youtube.com/watch?v=nExL0SgKsDY).
