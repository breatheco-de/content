---
title: "Tutorial de DataFrames con Pandas"
subtitle: "Explora este completo tutorial sobre el manejo de DataFrames con Pandas en Python. Aprende desde los conceptos básicos hasta técnicas avanzadas para aprovechar al máximo esta poderosa librería."
tags: ["Python", "Pandas"]
authors: [DF27ARTS]

---

Un [DataFrame](https://4geeks.com/es/lesson/pandas-dataframe) es una estructura de datos proporcionada por la librería de Pandas que te permite representar una lista bidimensional de datos en una tabla de filas y columnas, este estructura te permite almacenar diferentes tipos de datos y realizar operaciones sobre ellos. En este artículo veremos algunos fundamentos básicos acerca de como crear un **DataFrame** y algunos de los métodos más relevantes para poder manipular sus datos. Si necesitas aprender sobre pandas por completo, aquí te dejamos un [tutorial de pandas para machine learning](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning).

El siguiente es un pequeño ejemplo sobre ¿[cómo crear un DataFrame](https://4geeks.com/es/how-to/crear-DataFrame) de usuarios?

```py
import pandas as pd

usuarios = {
    "Firstname": ['Thomas', 'Jane', 'Charlie', 'David'],
    "Lastname": ['Smith', 'Johnson', 'Brown', 'Lee'],
    "Email": ['thomas@example.com', 'Jane@example.com', 'charlie@example.com', 'david@example.com'],
    "Age": [28, 32, 25, 30]
}

usuarios_df = pd.DataFrame(usuarios)
print(usuarios_df)
```

> output del código en la consola:

```bash
  Firstname Lastname                Email  Age
0    Thomas    Smith   thomas@example.com   28
1      Jane  Johnson     Jane@example.com   32
2   Charlie    Brown  charlie@example.com   25
3     David      Lee    david@example.com   30
```

Para crear un DataFrame primero debes asegurarte de importar el módulo de `pandas`, luego simplemente debes crear un [diccionario](https://4geeks.com/es/lesson/que-son-los-diccionarios-en-python) para representar la información donde las claves de objetos serán las columnas y los valores de las claves serán los valores para las filas del DataFrame. Por último para crear el DataFrame debes usar la clase `DataFrame()` que recibe como argumento el diccionario con la información y retorna un nuevo DataFrame con esa información. En el output de la consola puedes ver la estructura que tendrá el data frame con los índices, la filas y las columnas. 

## ¿Qué es un DataFrame?

Un DataFrame es una forma de representar datos en una tabla con filas y columnas donde cada fila representa una observación o un registro y cada columna representa una variable o un atributo. Por ejemplo, si tenemos una tabla con los datos de las películas de un director, cada fila sería una película y cada columna sería una característica como el título, el género, el idioma, el año de estreno etc...

Podemos crear un DataFrame con ayuda de una de las librerías más populares de Python, la librería de [Pandas](https://4geeks.com/es/lesson/pandas-en-python), esta librería nos ofrece varias herramientas para crear, manipular, organizar y eliminar elementos de un DataFrame. Un DataFrame de pandas tiene muchas ventajas, algunas de ellas son:

- Puede almacenar datos de diferentes tipos en cada columna, como números, cadenas, booleanos, fechas, etc.
- Tiene métodos integrados para leer y escribir datos desde y hacia diferentes formatos, como **CSV**, **Excel**, **JSON**, **SQL**, etc.
- Tiene métodos para realizar operaciones estadísticas, matemáticas, de agrupación, de combinación, de pivoteo entre otros.

## ¿Cómo crear un DataFrame de pandas?

A continuación vamos a seguir algunos pasos para crear un DataFrame con ayuda del método `DataFrame()` de la librería de Pandas.

### 1. Instalar Pandas

Para poder crear un DataFrame, primero necesitas instalar la librería de Pandas, puedes instalarla con el administrador de paquetes `pip`. Si aún no tienes **pip** instalador en tu ordenador puedes hacerlo desde la pagina oficial de [pip download](https://pip.pypa.io/en/stable/installation/), una vez que tengas **pip** instalado en tu ordenador puede usar el siguiente comando para instalar Pandas.

```bash
pip install pandas
```

Luego puedes confirmar que **pip** se instaló correctamente con el comando `pip --version`, deberías ver en la consola la última versión estable de **pip**.

```py
pip --version

// output ejemplo
pip 23.2.1 from C:\Python312\Lib\site-packages\pip (python 3.12)
```

### 2. Importar pandas

Una vez terminada la descarga, abre tu editor de código preferido, si aún no tienes uno instalado te recomiendo que utilices el editor de código [visual studio code](https://code.visualstudio.com/download), después crea un archivo con la extensión **.py** para crear un archivo python por ejemplo `ìndex.py` y por último dentro del archivo ingresa la siguiente sintaxis para importar pandas:

```py
import pandas as pd
```

Con esta sintaxis, importamos el módulo de pandas y le  colocamos el alias (opcional) de `pd` lo que nos permite utilizar los métodos del módulo de pandas más fácilmente.

### 3. Crear el DataFrame

Ahora que ya importamos pandas en nuestro archivo de trabajo podemos empezar a crear nuestro DataFrame, para este ejemplo crearemos un DataFrame de con la información de algunas películas.

```py
import pandas as pd

peliculas = {
    'Idioma': ['Inglés', 'Español', 'Francés', 'Alemán'],
    'Director': ['John Smith', 'Maria Rodríguez', 'Étienne Dubois"', 'Emily Müller'],
    'Año de Estreno': [2020, 2018, 2019, 2021],
    'Título': ['Crossed Paths', 'Secretos de Medianoche', 'Lever de soleil à Paris', 'Der letzte Seufzer']
}

df_peliculas = pd.DataFrame(peliculas)
print(df_peliculas)
```

> output del código:

```bash
    Idioma         Director  Año de Estreno                   Título
0   Inglés       John Smith            2020            Crossed Paths
1  Español  Maria Rodríguez            2018   Secretos de Medianoche
2  Francés   Étienne Dubois            2019  Lever de soleil à Paris
3   Alemán     Emily Müller            2021       Der letzte Seufzer
```

Para crear el DataFrame, primero debemos crear un diccionario que tenga como claves los nombres para las columnas y como valores una lista que representa la información de cada película en esa columna, es muy importante que todas las listas tengan la misma cantidad de elementos ya que si alguna de las listas tiene más elementos que las demás el código nos arrojará un error. Después podemos utilizar el método `DataFrame()` de la librería de pandas para estructurar nuestro DataFrame, este método recibe como argumento el diccionario con la información de las películas y retorna una estructura de DataFrame que guardaremos en la variable `df_peliculas`. Por último simplemente imprimimos el resultado en la consola para ver la estructura de nuestro DataFrame.

## Métodos más importantes para operaciones básicas

La librería de Pandas tiene varios métodos que te permite manipular la información de un DataFrame, a continuación veremos algunos de los más importante y utilizados al momento de trabajar con un DataFrame.

- **Método head() y el método tail()**: Estos métodos te permiten visualizar las primeras y las últimas filas de un DataFrame respectivamente. Estos métodos pueden recibir como parámetro un número que le indica la cantidad filas que deseas visualizar, si no lo pasas ningún número como argumento te mostrará 5 filas.
- **Método info()**: Este método retorna la información general sobre el DataFrame, como el nombre y tipo de las columnas, el número de valores no nulos, el uso de memoria entre otras propiedades del DataFrame.
- **Método describe()**: Este método te muestra las estadísticas sobre las columnas numéricas del DataFrame, el número de valores, la medida, la desviación estándar entre algunos otros. Este método puede ser útil para tener una idea de la distribución y la variabilidad de los datos.
- **Método sort_values()**: Ordena el DataFrame según el valor de una o más columnas, especificadas mediante el argumento `by`, además  podemos indicarle si ordenar el DataFrame de forma ascendente o descendente y si queremos modificar el DataFrame original podemos usar el argumento de `inplace` y pasarle como valor `True`.
- **Método apply()**: Este método nos permite aplicar una función a cada fila o a cada columna de un DataFrame, según el valor del argumento `axis`, que puede ser 0 para columnas o 1 para las filas. Este método puede recibir una función predefinida por el usuario o predefinida de Python o de Pandas. Lee este artículo si quieres conocer más sobre el [método apply de pandas](https://4geeks.com/es/how-to/pandas-apply).

## Métodos más importantes para la limpieza de los datos

La limpieza de datos es un proceso muy importante para el análisis de datos, la librería de pandas ofrece una amplia variedad de métodos que nos pueden ayudar con esta tarea. A continuación veremos algunos de los más importantes y comúnmente utilizados para realizar la limpieza de datos de un DataFrame.

```py
import pandas as pd

columns = ["Species ID", "Family", "Category", "Park Name", "Name"]
rows_data = [
    ["ACAD-1000", "Mammal", "Cervidae", "Acadia National Park", "Moose"],
    ["ACAD-1001", None, "Cervidae", "Badlands National Park", "Northern White-Tailed Deer"],
    ["ACAD-1002", "Mammal", "Canidae", "Big Bend National Park", "Coyote"],
    ["ACAD-1003", "Mammal", "Canidae", "Big Bend National Park", "Eastern Timber Wolf"],
    ["ACAD-1004", "Mammal", "Canidae", "Biscayne National Park", "Red Fox"],
    ["ACAD-1004", "Mammal", "Canidae", "Biscayne National Park", "Red Fox"],
    ["ACAD-1005", "Mammal", None, "Badlands National Park", "Bobcat"],
    ["ACAD-1006", "Mammal", "Mephitidae", "Bryce Canyon National Park", "Striped Skunk"],
    ["ACAD-1007", "Mammal", "Mustelidsae", "Bryce Canyon National Park", None],
    ["ACAD-1006", "Mammal", "Mephitidae", "Bryce Canyon National Park", "Striped Skunk"]
]

df_species = pd.DataFrame(rows_data, columns=columns)
print(df_species)
```

- **Método drop_duplicates()**: Este método elimina todas las filas duplicadas dentro de un DataFrame, es decir todas las columnas que tengan los mismos valores en todas las columnas.
```py
df_species = df_species.drop_duplicates()
```
```bash
  Species ID  Family     Category                   Park Name                        Name
0  ACAD-1000  Mammal     Cervidae        Acadia National Park                       Moose
1  ACAD-1001    None     Cervidae      Badlands National Park  Northern White-Tailed Deer
2  ACAD-1002  Mammal      Canidae      Big Bend National Park                      Coyote
3  ACAD-1003  Mammal      Canidae      Big Bend National Park         Eastern Timber Wolf
4  ACAD-1004  Mammal      Canidae      Biscayne National Park                     Red Fox
6  ACAD-1005  Mammal         None      Badlands National Park                      Bobcat
7  ACAD-1006  Mammal   Mephitidae  Bryce Canyon National Park               Striped Skunk
8  ACAD-1007  Mammal  Mustelidsae  Bryce Canyon National Park                        None
```

- **Métodos isnull() y notnull()**: Estos métodos devuelven un DataFrame booleano que indica si cada valor del DataFrame original es nulo o no, respectivamente. Un valor nulo es aquel que no existe o que no se conoce, y se representa con `NaN` (Not a Number) en pandas. Estos métodos son útiles para detectar y contar los valores nulos en el DataFrame.
```py
print(df_species.isnull())
```
```bash
   Species ID  Family  Category  Park Name   Name
0       False   False     False      False  False
1       False    True     False      False  False
2       False   False     False      False  False
3       False   False     False      False  False
4       False   False     False      False  False
6       False   False      True      False  False
7       False   False     False      False  False
8       False   False     False      False   True
```

- **Método fillna()**: Este método rellena los valores nulos del DataFrame con un valor específico, indicado como argumento. Este valor puede ser cualquier tipo de dato un número, una cadena, un boleano etc...
```py
df_species = df_species.fillna("HELLO")
```
```bash
  Species ID  Family     Category                   Park Name                        Name
0  ACAD-1000  Mammal     Cervidae        Acadia National Park                       Moose
1  ACAD-1001   HELLO     Cervidae      Badlands National Park  Northern White-Tailed Deer
2  ACAD-1002  Mammal      Canidae      Big Bend National Park                      Coyote
3  ACAD-1003  Mammal      Canidae      Big Bend National Park         Eastern Timber Wolf
4  ACAD-1004  Mammal      Canidae      Biscayne National Park                     Red Fox
6  ACAD-1005  Mammal        HELLO      Badlands National Park                      Bobcat
7  ACAD-1006  Mammal   Mephitidae  Bryce Canyon National Park               Striped Skunk
8  ACAD-1007  Mammal  Mustelidsae  Bryce Canyon National Park                       HELLO
```

- **Método dropna()**: Este método elimina las filas de un DataFrame que contienen valores nulos. Este método puede ser muy útil ya que hacer análisis de datos con valores nulos puede ser problemático.
```py
df_species = df_species.dropna()
```
```bash
  Species ID  Family    Category                   Park Name                 Name
0  ACAD-1000  Mammal    Cervidae        Acadia National Park                Moose
2  ACAD-1002  Mammal     Canidae      Big Bend National Park               Coyote
3  ACAD-1003  Mammal     Canidae      Big Bend National Park  Eastern Timber Wolf
4  ACAD-1004  Mammal     Canidae      Biscayne National Park              Red Fox
7  ACAD-1006  Mammal  Mephitidae  Bryce Canyon National Park        Striped Skunk
```

Estos son algunos los métodos más utilizados que puedes usar para hacer el proceso de limpieza de datos, pero pandas ofrece muchos más para ayudarte con este proceso, además puedes combinar estos métodos con otras librerías como `Numpy` para manipular los datos del DataFrame de una manera mucho más eficiente.

## Casos de uso

- **Ciencia de Datos**: Quizás uno de los casos de uso más relevantes para los DataFrames es la ciencia de datos, los científicos de datos utilizan DataFrames para explorar, visualizar y analizar diferentes conjuntos de datos. Pandas ofrece herramientas poderosas para estas tareas.
- **Análisis de Ventas**: Un DataFrame es ideal para analizar datos de ventas. Puedes cargar datos de ventas en un DataFrame, realizar cálculos de ingresos, márgenes de beneficio y mucho más.
- **Machine learning**: Los DataFrames también son muy útiles para visualizar y manipular información en el proceso de entrenamiento de modelos de aprendizaje automático. Además como mencionamos anteriormente también puedes combinar Pandas con otras librerías lo cual te permite manipular la información de un dataset fácilmente.

## Conclusión

El **DataFrame** es una de las estructuras más utilizadas de la librería de pandas, con el puedes organizar, filtrar, ordenar y modificar grandes conjuntos de datos fácilmente. En este artículo vimos como crear un DataFrame paso a paso y además vimos algunos ejemplos de los métodos más utilizados para trabajar con un DataFrame y también para hacer el proceso de limpieza de datos. 

Esperamos que este tutorial haya sido de utilidad y que hayas adquirido sólidos conocimientos sobre el manejo de DataFrames con Pandas en Python. Este es solo el comienzo de tu viaje en el análisis de datos. Te invitamos a explorar otros recursos en nuestro blog para expandir tus habilidades y conocimientos en Python y análisis de datos. Si deseas llevar tu aprendizaje al siguiente nivel, te animamos a [registrarte de forma totalmente gratuita](https://4geeks.com/es/pricing) en 4Geeks.com.
