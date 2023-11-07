---
title: "¿Cómo usar el método apply de Pandas?"
subtitle: "Aprende a utilizar el método apply de Pandas en Python para transformar datos de manera eficiente. Explora ejemplos y técnicas para aprovechar al máximo este poderoso método de Pandas."
tags: ["Python", "Pandas"]
authors: [DF27ARTS]

---

El método `apply()` es uno de los métodos más versátiles y útiles de la librería de Pandas (Si te interesa aprender Pandas desde cero, te dejamos este [tutorial de pandas para machine](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning)), este método te permite pasar una función y aplicarla en una columna específica dentro de un Dataframe o una Serie. En el siguiente ejemplo, veremos cómo utilizar esta función para realizar un cambio dentro de una columna en un Dataframe de usuarios.

```py
import pandas as pd
 
users_df = pd.DataFrame({
    "Nombre": ["JOHN", "MARY", "PETER", "JANE"],
    "Apellido": ["smith", "johnson", "davis", "brown"],
    "Edad": [25, 30, 35, 40],
    "Email": ["john@gmail.com", "mary@hotmail.com", "peter@yahoo.com", "jane@example.com"]
})

def capitalize(nombre):
    name_capitalized = nombre.lower().capitalize()
    return name_capitalized

users_df["Nombre"] = users_df["Nombre"].apply(capitalize)
users_df["Apellido"] = users_df["Apellido"].apply(lambda apellido: apellido.capitalize())

print(users_df)
```
> output del código:
```bash
  Nombre Apellido  Edad             Email
0   John    Smith    25    john@gmail.com
1   Mary  Johnson    30  mary@hotmail.com
2  Peter    Davis    35   peter@yahoo.com
3   Jane    Brown    40  jane@example.com
``` 

En este ejemplo, hacemos uso de el método `apply()` para modificar las columnas `Nombre` y `Apellido` y hacer que solo la primera letra sea mayúscula, este método puede recibir una **función** o una **lambda** (función anónima) cómo parámetro, en este ejemplo de código usamos una función para modificar los nombres de los usuarios y una función lambda para modificar los apellidos, la elección de cual función debes usar depende de tus preferencias y la cantidad de cambios que deseas hacer en la columna ya que una función lambda se declara en una sola línea de código y puede ser confuso hacer demasiados cambios e una función de este tipo.

## ¿Qué es el método apply() y cómo funciona?

El método `apply()` de Pandas es un método de propósito general que se puede utilizar para aplicar una función a cada elemento de una serie o cada fila o columna de un marco de datos ([DataFrame](https://4geeks.com/es/lesson/pandas-dataframe)). En el caso de la series, el método `apply()` recibe una función cómo parámetro y la aplica a cada elemento de la serie, la función puede ser una función personalizada o una función de [NumPy](https://4geeks.com/es/lesson/introduccion-a-numpy) o Pandas. 

En el caso de los DataFrame, el método `apply()` recibe una función cómo parámetro y la aplica a cada fila o columna del marco de datos, según el valor del parámetro `axis` que por defecto se aplica a las filas. Este método es una herramienta muy versátil que puede utilizarse para realizar una gran variedad de tareas de procesamiento de datos tanto en la ciencia de datos ([data science](https://4geeks.com/es/lesson/datascience-con-python)) como en el aprendizaje automático (machine learning).

## Parámetros del método apply() de Pandas 

El método `apply()` recibe varios parámetros, a continuación veremos cuales son y cómo funcionan.

```py
data_frame["columna"].apply(
    funcion_modificadora,
    axis = 0, 
    raw = False, 
    result_type = None, 
    args = ("parámetros", "extra"), 
    by_row = "compat", 
    **kwargs
)
```

- **funcion_modificadora**: función que se aplica a cada una de las columnas o filas en la `Serie` o `DataFrame`.
- **axis**: Eje a lo largo del cual se aplica la función, esta variable recibe dos valores (0 o 'index', 1 o 'columns') y por defecto tiene el valor de **0**.
    - **0** o **'index'**: aplica la función a cada columna.
    - **1** o **'columns'**: aplica la función a cada fila.
- **raw**: este parámetro controla cómo se deben pasar los elementos de la `Serie` o `DataFrame`, está parámetro recibe un valor booleano que por defecto es **False**.
    - **True**: pasa los elementos cómo objetos de Python a la función.
    - **False**: pasa los elementos cómo arrays de NumPy a la función.
- **result_type**: este parámetro solo actúa cuando `axis=1 (columns)` y puede recibir cuatro valores (‘expand’, ‘reduce’, ‘broadcast’, None) por defecto su valor es **None**.
    - **‘expand’**: los resultados en forma de lista se convertirán en columnas.
    - **‘reduce’**: devuelve una Serie si es posible en lugar de expandir los resultados en forma de lista. Este valor es lo contrario de **'expand'**.
    - **‘broadcast’**: los resultados se emitirán con la forma original del `DataFrame`, se conservarán los índices y las columnas originales.
- **args**: argumentos posicionales de tipo **tuple** para pasar a la función además de la `Serie` o `DataFrame`.
- **by_row**: este parámetro determina si la función se aplica a cada fila o columna del marco de datos como un objeto `Series` o cómo un objeto `ndarray`.
- ** **kwargs**: argumentos para pasar cómo argumentos de palabra clave a la función. Estos se utilizan cuando la función necesita argumentos adicionales además de los valores de la `Serie` o `DataFrame`.

## Ejemplos de uso del método apply() de Pandas

El método `apply()` de Pandas tiene bastantes usos para el procesamiento de datos tanto en data science cómo en machine learning, a continuación veremos algunos ejemplos básicos haciendo uso de este método.

### Combinar dos filas de un Dataframe en una sola

Uno de los usos más comunes para el método `apply()` es el de acceder a las filas de un DataFrame y combinarlas o modificarlas, cómo se muestra en el siguiente ejemplo.

```py
import pandas as pd

users_df = pd.DataFrame({
    "Nombre": ["John", "Mary", "Peter", "Jane"],
    "Apellido": ["Smith", "Johnson", "Davis", "Brown"],
    "Edad": [25, 30, 35, 40],
    "Email": ["john@gmail.com", "mary@hotmail.com", "peter@yahoo.com", "jane@example.com"]
})

def crear_nombre_completo(fila):
    return fila["Nombre"] + " " + fila["Apellido"]

users_df["Nombre Completo"] = users_df.apply(crear_nombre_completo, axis=1)
print(users_df)
```
> output:
```bash
  Nombre Apellido  Edad             Email Nombre Completo
0   John    Smith    25    john@gmail.com      John Smith
1   Mary  Johnson    30  mary@hotmail.com    Mary Johnson
2  Peter    Davis    35   peter@yahoo.com     Peter Davis
3   Jane    Brown    40  jane@example.com      Jane Brown
```

En este ejemplo, hacemos uso del método `apply()` para acceder las filas `Nombre` y `Apellido` y combinarlas en una sola que llamaremos `Nombre Completo`,  para este ejemplo debemos pasar el parámetro `axis=1` de esta forma le decimos a la función que debe fijarse en las filas del DataFrame y no en las columnas, luego creamos una nueva columna para guardar el resultado del método `apply()`, para crear la nueva columna usamos la sintaxis `users_df["Nombre Completo"]`.

### Modificar una columna en un Dataframe

Otro uso bastante común del método `apply()` es arreglar o modificar una columna en un DataFrame, cómo se muestra en el siguiente ejemplo.

```py
import pandas as pd
import re

users_df = pd.DataFrame({
    "Nombre": ["John", "mary", "PETER", "JAne"],
    "Apellido": ["Smith", "Johnson", "Davis", "Brown"],
    "Edad": [25, 30, 35, 40],
    "Telefono": ["123-456-7890", "0987654321", "123 098 4567", "147_258_3690"]
})

def modificar_numero(numero):
    num = re.sub(r'[^0-9]', '', numero)
    return f"{num[0:3]}-{num[3:6]}-{num[6:]}"

def modificar_nombre(nombre):
    return nombre.lower().capitalize()

users_df["Nombre"] = users_df["Nombre"].apply(modificar_nombre)
users_df["Telefono"] = users_df["Telefono"].apply(modificar_numero)

print(users_df)
```
> output:
```bash
  Nombre Apellido  Edad      Telefono
0   John    Smith    25  123-456-7890
1   Mary  Johnson    30  098-765-4321
2  Peter    Davis    35  123-098-4567
3   Jane    Brown    40  147-258-3690
```

En este ejemplo hacemos uso del método `apply()` para modificar dos columnas en el Dataframe `users_df`, la columna `Nombre` y la columna `Telefono`, cómo puedes ver en el ejemplo la columna `Nombre` tiene varias inconsistencias de ortografía, para arreglar esto pasamos todos los nombres a minúscula y luego pasamos la primera letra de cada nombre a mayúscula así tendremos una estructura más concisa para el nombre de los usuarios. Por otro lado la columna `Telefono` no sigue un único patrón específico sino que cada número tiene su propia sintaxis, para solucionar esto, hacemos uso de una expresión regular para eliminar cualquier carácter del número telefónico que no sea un número y luego le asignamos una única sintaxis a  todos los números telefónicos.

### Modificar los valores de una Serie

El método `apply()` también es bastante útil para modificar los datos de una Serie de Pandas, a continuación veremos un pequeño ejemplo.

```py
import pandas as pd
numeros_serie = pd.Series([1, 2, 3, 4, 5])

def elevar_al_cuadrado(num):
    return num ** 2

def factorial(num):
    if num == 0:
        return 1
    else:
        return num * factorial(num - 1)

cuadrados = numeros_serie.apply(elevar_al_cuadrado)
factoriales = numeros_serie.apply(factorial)

print(cuadrados)
print(factoriales)
```
> output:
```bash
0     1  --> Cuadrado del número 1
1     4  --> Cuadrado del número 2
2     9  --> Cuadrado del número 3
3    16  --> Cuadrado del número 4
4    25  --> Cuadrado del número 5
dtype: int64

0      1  --> Factorial del número 1
1      2  --> Factorial del número 2
2      6  --> Factorial del número 3
3     24  --> Factorial del número 4
4    120  --> Factorial del número 5
dtype: int64
```

En este ejemplo, aplicamos el método `apply()` a cada uno de los elementos de la Serie `numeros_serie`, primero le pasamos la función `elevar_al_cuadrado()` para encontrar el número cuadrado de todos los elementos, luego también le pasamos la función `factorial()` para encontrar el número factorial de cada uno de los elementos de la Serie y por último imprimimos el resultado en la consola. Este es solo un pequeño ejemplo, el método `apply()` puede usarse de muchas otras maneras para trabajar con datos en Series o Dataframes.

## Conclusión

El método `apply()` de Pandas es esencial en el análisis y la manipulación de datos, ya que permite aplicar funciones personalizadas a cada uno de los elementos de una Serie o Dataframe. En este artículo vimos algunos ejemplos sobre cómo hacer uso de este método para manipular los elementos de estas estructuras y modificarlos, recuerda que estos son solo algunos ejemplos básicos, puedes hacer muchas cosas más con ayuda de este método. Te invito a que sigas aprendiendo y practicando con el método `apply()` ya que te ayudará bastante en tu carrera cómo desarrollador [Python](https://4geeks.com/es/technology/python).

Esperamos que hayas disfrutado de este artículo y que encuentres la información útil. Te invitamos a explorar otros recursos en nuestro blog para ampliar tus habilidades con [Pandas](https://4geeks.com/es/lesson/pandas-en-python) y el análisis de datos. Si deseas llevar tu aprendizaje al siguiente nivel, te animamos a [registrarte de forma totalmente gratuita](https://4geeks.com/es/pricing) en 4Geeks.com.


¡Diviértete aprendiendo! 😉
