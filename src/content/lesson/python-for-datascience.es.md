---
title: "Data Science con Python"
subtitle: "Python es un lenguaje multipropósito, en esta lección comprenderás cómo se usa en el mundo de la Ciencia de Datos"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
status: "publised"
date: "2022-01-15T16:36:30+00:00"
tags: ["data-science", "python", "pandas", "numpy"]
canonical: ""
---

**Python** es un lenguaje de programación muy versátil y que se utiliza en multitud de casos: desarrollo de aplicaciones web (front y back), juegos para móvil, simulaciones, redes, automatizaciones... Además, es el lenguaje rey para trabajar con datos y elaborar algoritmos de Inteligencia Artificial, ciencia de datos y Machine Learning. Antes de comenzar, distingamos entre los tres términos anteriores:

| Término | Definición | Amplitud | Objetivo |
|:--------|:-----------|:---------|:---------|
| Inteligencia Artificial (*Artificial Intelligence*) | Es el estudio de cómo hacer que las computadoras piensen y actúen como los humanos. | Es un campo amplio que incluye varios subcampos, como el aprendizaje automático, la robótica, el procesamiento del lenguaje natural, la visión por computadora... | Simular la inteligencia humana en máquinas. |
| Aprendizaje automático (*Machine Learning*) | Es un subcampo de la IA que se centra en desarrollar algoritmos y modelos que permitan a las computadoras aprender a partir de datos. | Es una técnica específica dentro de la inteligencia artificial. | Hacer predicciones o decisiones sin ser programadas específicamente para ello. |
| Ciencia de datos (*Data Science*) | Es un campo interdisciplinario que utiliza técnicas estadísticas, informáticas y de análisis para interpretar, comprender y extraer conocimiento de datos estructurados y no estructurados. | Incluye la adquisición, limpieza, análisis y visualización de datos, y puede hacer uso de la IA y del machine learning para analizarlos. | Descubrir patrones y obtener información valiosa de grandes conjuntos de datos. |

![Discipline differences](https://github.com/breatheco-de/content/blob/master/src/assets/images/disciplines_differences.png?raw=true)

Mientras que la IA se centra en simular la inteligencia humana, el aprendizaje automático es una técnica dentro de la IA que permite a las máquinas aprender de datos, y la ciencia de datos es una disciplina más amplia que se ocupa de todo el proceso de trabajar con datos, desde la recopilación hasta la interpretación, y puede incluir el uso de la IA y el machine learning.

### Guía básica de Python

#### `Hello, World!`

Todo desarrollador que comienza a programar en un lenguaje nuevo lo hace imprimiendo `Hello, World!`. En Python podemos hacerlo usando la función `print`, que muestra por consola cualquier dato o texto que se coloque entre sus parántesis:

```py
print("Hello, World!")
```

#### Variables

Una **variable** (*variable*) en Python (y en la mayoría de los lenguajes de programación) son contenedores que almacenan datos que pueden variar en el tiempo. Este valor puede ser un número, un texto, una lista de elementos... Lo especial de este contenedor es que podemos asignarle un nombre para identificarlo y acceder a lo que guardamos en él cuando lo necesitemos:

```py
nombre = "Juan"
edad = 25
altura = 1.80
es_estudiante = True
```

Además, las variables son elementos mutables y que pueden cambiar en el tiempo. Así, al igual que podemos acceder a su valor para leerlo, también podemos modificarlo:

```py
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

#### Tipos de datos

Los **tipos de datos** (*data types*) determinan la clase de datos que una variable puede contener. Python tiene sus propios tipos básicos, aunque hay librerías y bibliotecas que pueden incluir otros nuevos:

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

Representa valores de verdad, es decir, `True` (verdadero) o `False` (falso).
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

Representa secuencias de bytes. Normalmente se utilizan para manejar datos binarios.
```py
bytes_var = b"Hola"
```

## Librerías

Una **librería** (*library*) es una colección de funciones predefinidas y que se realizan con un fin determinado. El objetivo es simplificar el trabajo del desarrollador y no tenerlas que programar desde cero. Existen multitud de ellas y se organizan según su utilidad. Como Python es el lenguaje más utilizado en el ámbito del Data Science y de la Inteligencia Artificial, algunas de sus librerías más utilizadas son relativas a estos campos:

- Scikit-learn
- NuPIC
- Ramp
- Numpy
- Pandas
- TensorFlow
- Keras
- Pipenv
- Scipy
- Matplotlib

De este top 10 la mayoría se utilizan en los procesos de Machine Learning, NLP, Visión Artificial y muchas otras áreas de la inteligencia artificial. Por ello, es vital que conozcas y sepas utilizar algunas de estas librerías, que son clave para cualquier labor de ciencia de datos.

En este bootcamp aprenderemos a fondo `Numpy`, que es una libreria utilizada para procesar y trabajar con listas multidimensionales de forma muy eficiente, `Pandas`, construida sobre Numpy y que permite trabajar con estructuras de datos tabulares denominados `DataFrames`, `Matplotlib` que posibilita la opción de visualizar los datos y sus relaciones y `scikit-learn`, ampliamente utilizada para construir modelos de Machine Learning.

## Rendimiento

Todo el software que se programa se debe ejecutar en un hardware, que es un conjunto de elementos físicos que constituyen un sistema informático. Cuanto más eficiente sea el código que implementes, mayor aprovechamiento de los recursos hardware, menor tiempos de ejecución, mayor posibilidad de paralelizar tareas, etcétera.

Cuando se construyen modelos de inteligencia artificial, el rendimiento es una gran preocupación, ya que la potencia de procesamiento es la mayor limitación que tiene este campo en este momento. Por lo tanto, la construcción de código y funciones eficientes es un pilar fundamental. También aprenderemos sobre ello.

## Desarrollo de código

Existen dos formas principales de programar en Python, y cada una de ellas se puede llevar a cabo usando distintas herramientas:

- **Programación flexible**: Se lleva a cabo con interfaces web como `Jupyter Notebook` o `Google Collab`. Se caracteriza por no contar con una estructura predefinida de código y concebidas para hacer desarrollos rápidos y de prueba y error. En este tipo de desarrollos se generan **cuadernos** (*notebooks*) 
- **Programación productiva**: Se lleva a cabo en **entornos de desarrollo integrados** (*IDE*, *Integrated Development Environment*), que son programas informáticos que permiten un desarrollo de inicio a fin de una aplicación o un servicio completo.

Normalmente el desarrollo de un producto, modelo o servicio de Machine Learning, se compone de dos fases: una exploratoria y otra de desarrollo. Primero programamos en notebooks y hacemos pruebas de concepto buscando el mejor preprocesamiento, análisis y predicción de los datos, y después preparamos un desarrollo completo para productivizar el modelo.

### Estructura de proyecto

Usaremos una plantilla para nuestros proyectos llamada [Cookie Cutter Datascience](https://drivendata.github.io/cookiecutter-data-science/). Usar una plantilla siempre es una buena idea para organizar nuestros archivos y flujo de trabajo del proyecto.