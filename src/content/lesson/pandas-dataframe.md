---
title: "¿Qué es un DataFrame en Pandas?"
subtitle: "Descubre qué es un DataFrame en Pandas y cómo se utiliza para manejar datos tabulares en Python. Aprende sobre las funcionalidades y operaciones."
tags: ["python","pandas"]
authors: ["valerybriz"]

---

En python existen una gran variedad de estructuras de datos y una de las más utilizadas, sin lugar a dudas, es la clase DataFrame de la [librería de pandas en Python](https://4geeks.com/es/lesson/pandas-en-python), la cual es preferida debido a sus multiples funcionalidades y su gran facilidad para aplicar transformaciones a los datos que contienen.

En este artículo exploraremos las partes que componen un DataFrame, sus atributos y los métodos más utilizados, así como algunas de las aplicaciones que tienen. 

> 🔗 Si quieres un [tutorial sobre Pandas python](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning), te invito a leer el Blog de [4Geeks](https://4geeks.com/), donde encontrarás mucha información relevante.

```python
import pandas as pd
  
data = {
    'paises': ['Chile', 'España', 'Estados Unidos de America', 'Venezuela'], 
    'capitales': ['Santiago', 'Madrid', 'Washington D.C.', 'Caracas']
}
countries_df = pd.DataFrame(data)

print(countries_df) 
```

Resultado en consola:

|     | paises | capitales |
| --- | --- | --- |
| 0   | Chile | Santiago |
| 1   | España | Madrid |
| 2   | Estados Unidos de America | Washington D.C. |
| 3   | Venezuela | Caracas |

Existen multiples formas para crear un DataFrame de Pandas utilizando su propio constructor `pd.DataFrame()`, en el ejemplo de arriba utilizamos 2 listas que contienen los valores de cada columna del DataFrame y utilizamos un diccionario para asignarles el nombre de la columna a cada una de las listas. En este caso los nombres de las columnas son `"paises"` y `"capitales"`.

## ¿Qué es un DataFrame en Pandas?

Los DataFrames de Pandas son básicamente tablas multidimensionales, lo que significa que cuentan con columnas y filas que pueden ser de diversas dimensiones. Pandas está basado en el paquete NumPy y por ello los DataFrames incorporan gran parte de la estructura de NumPy en su funcionamiento, dándoles una gran versatilidad para realizar cálculos numéricos y análisis de datos.

Es importante tomar en cuenta que tanto las filas como las columnas son tomados como un "eje" del DataFrame por lo que podemos aplicar una transformación tanto en el eje de las columnas como en el eje de las filas.

|     | Eje Y (columnas) |
| --- | --- |
| **Eje X (filas)** |     |

## ¿Para qué se utilizan los DataFrames en Pandas?

Debido a su facilidad para aplicar transformaciones y el análisis de los datos, los DataFrames de Pandas son muy utilizados por Científicos de Datos, Analistas de Datos, Ingenieros de Datos y Analistas de Inteligencia de negocios (BI). Algunos de los usos más comunes son:

- Filtrado de datos a partir de condicionales: Esto se hace por medio posible de la función `filter()` o bien aplicando el filtro directamente al dataframe con el uso de corchetes `df[expresion de filtrado]`. Por ejemplo: `filter(df['name'] == '4geeks')`.
- Carga de archivos en diversos formatos: Se tiene compatibilidad para cargar datos desde un buffer de bytes o bien archivos tipo: `html`, `xml`, `hdfs`, `parquet`, `csv`, `xls`, `xlsx` y otros.
- Transformación de datos: Es posible aplicar transformaciones a los datos por medio de las diversas funciones con las que la clase DataFrame cuenta. Por ejemplo: `DataFrame.count()` que nos sirve para contar la cantidad de filas contenidas en el DataFrame.
- Aplicación de funciones customizadas: Existen ocasiones en las que las funciones que nos provee el DataFrame no son suficientes para transformar los datos por lo que también es posible aplicarle funciones propias a través de la función `map()`.

## Atributos más importantes de un DataFrame de Pandas

Cada objeto DataFrame contiene los siguientes atributos:

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| columns | `list` | Este es el nombre de la columna o "título" de la misma. |
| empty | `bool` | Indica si el DataFrame está vacio o no. |
| iloc | `list` | Localización basada en el indice. Sirve para seleccionar una posición dentro del DataFrame. |
| index | `list` | Índice a nivel de la fila del DataFrame. |
| loc | `list` | Localización basada en las filas y columnas. Sirve para seleccionar una posición por medio del nombre. |
| shape | `tuple` | Devuelve una tupla que representa la dimensionalidad del DataFrame. |

## Métodos de pandas.DataFrame más utilizados

La clase DataFrame tiene una gran cantidad de métodos que son necesarios para realizar todo tipo de análisis y transformaciones basadas en los datos que contiene. A continuación podemos visualizar los métodos más utilizados en un DataFrame.

- [`read_csv()`](https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html#pandas.read_csv): Sirve para cargar un archivo de tipo `csv` para generar un DataFrame
- [`agg()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.agg.html): Aplicar una agregación utilizando 1 o más operaciones sobre un eje especificado. A este método se le envía como parametro una función que se aplicará a los datos, por ejemplo la función `sum()`.
- [`apply()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.apply.html): Aplicar una sola función customizada al DataFrame. Es posible enviar argumentos en conjunto con la función.
- [`groupby()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html): Es utilizado para agrupar el DataFrame utilizando 1 o más columnas. Usualmente se utiliza en conjunto con el método `agg()` para aplicar una agregación matemática basada en la agrupación.
- [`describe()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.describe.html): Genera una serie de estadísticas descriptivas sobre los datos contenidos en el DataFrame.
- [`drop()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop.html): Elimina del DataFrame las filas o columnas que se especifiquen, por ejemplo: `drop("id")`.
- [`drop_duplicates()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html): Devuelve un DataFrame sin duplicados. La deduplicación puede estar basada en una o más columnas.
- [`dropna()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dropna.html): Elimina las filas o columnas que contengan valores vacíos. En este caso es necesario establecer el eje al que se aplicará.
- [`fillna()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.fillna.html): Llena los valores NA/NaN con valores utilizando el método que se especifique.
- [`filter()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.filter.html): Devuelve un subset del DataFrame con las filas o columnas especificadas acorde a las condiciones establecidas.
- [`head([n])`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.head.html): Devuelve las primeras n filas del DataFrame.
- [`info()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.info.html): Imprime un resumen consiso de las cualidades del DataFrame basado en los datos que contiene.
- [`isnull()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.isnull.html): Identifica si las filas o columnas del DataFrame tienen valores nulos.
- [`join()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.join.html): Realiza un Join sobre las columnas especificadas del DataFrame al que se le aplica y otro DataFrame.
- [`to_csv()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_csv.html): Escribe un archivo csv en la ruta especificada con los datos del DataFrame.
- [`to_parquet()`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_parquet.html): Escribe un archivo parquet en la ruta especificada con los datos del DataFrame.

## ¿Cómo crear un DataFrame de Pandas en Python?

Para poder crear un DataFrame de Pandas, simplemente debemos instancear la clase `DataFrame()` ya que todos sus parámetros son opcionales, si no enviamos ningún parámetro entonces se creará un DataFrame vacío. Por ejemplo:

```python
import pandas as pd

df = pd.DataFrame()

print(df)

# Consola:
# Empty DataFrame
# Columns: []
# Index: []
```

Sin embargo también podemos inicializar el objeto instanciado con los siguientes parámetros:

- `data` :
    Este parámetro espera un objeto o variable de tipo `ndarray`, `Iterable` (como una lista), `dict`, o un objeto `DataFrame`. A su vez el objeto tipo `dict` puede contener Series, arrays, constantes, dataclass u objetos parecidos a una lista. Si se envía entonces el DataFrame creado contendrá desde su inicialización los datos que se han asignado.
    
- `index`:
    Este parámetro espera un objeto de tipo `Index` o un objeto parecido a un array como las listas y las tuplas. Sirve para asignar manualmente un índice específico al DataFrame creado. Si no se envía entonces se generará un índice por defecto que numerará acorde a la posición de la fila.
    
- `columns`:
    Este parámetro espera un objeto de tipo `Index` o un objeto parecido a un array como las listas y las tuplas. Sirve para asignar un listado de nombres a las columnas del DataFrame creado, si no existiera entonces se asignará un número a cada columna dependiendo de su posición empezando en 0.
    
- `dtype`:
    Este parámetro espera una variable de tipo `dtype`, si no se envía entonces tendrá valor `None` por defecto. Sirve para forzar el tipo de dato de un DataFrame, únicamente puede establecerse 1.
    
- `copy`:
    Este parámetro espera una variable de tipo `bool` y si no se envía entonces por defecto será `None`. Sirve para indicar si queremos utilizar una copia del objeto `data` que hemos enviado o si queremos utilizar el objeto original. En el caso de que no sea una copia, si modificamos el objeto original entonces el DataFrame también se modificará.
    

## Casos de uso del DataFrame de Pandas

Algunos de los usos más comunes de un DataFrame de pandas son:

- Carga y guardado de datos.
- Limpieza de textos o valores de datos.
- Aplicación de Merge y join a multiples colecciones de datos.
- Rellenado de datos.
- Normalización y conversión de tipos de datos.
- Preparación de los datos para su visualización.
- Análisis estadístico.
- Inspección de valores y de estructura en colecciones de datos.

## Conclusión

La clase DataFrame es la pieza fundamental en la biblioteca de Pandas en [Python](https://4geeks.com/es/lesson/que-es-python-tutorial), gracias a ellos podemos realizar una gran variedad de operaciones con la flexibilidad que nos dan sus métodos y atributos y con la robustez que nos da numpy en su core. Es por ello que es tan utilizado cuando hablamos de análisis de datos, inteligencia de negocios e ingeniería de datos.
