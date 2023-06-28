---
title: "¿Cómo crear un DataFrame?"
subtitle: "Aprende a crear un DataFrame en Pandas en Python. Sigue nuestra guía paso a paso para cargar datos desde diferentes fuentes y construir un DataFrame con Pandas."
tags: ["python","pandas"]
authors: ["danielmoret"]

---

Un `DataFrame` es una estructura de dos dimensiones, muy similar a una hoja de cálculo o una tabla en base de datos, veamos como crear un `DataFrame` a partir de una lista. 

```python
import pandas as pd

list_rrss = ['Facebook','Twitter','Instagram','Youtube']

# Crear dataframe a partir de una lista
df_rrss = pd.DataFrame(list_rrss, columns=['Name'])

print(df_rrss)
```

> (output) de la variable `df_rrss`

|     | Name      |
| --- | --------- |
| 0   | Facebook  |
| 1   | Twitter   |
| 2   | Instagram |
| 3   | Youtube   |

En este ejemplo, utilizamos la función `DataFrame()` para crear un `DataFrame` a partir de las lista `list_rrss` y su resultado se guarda en la variable `df_rrss`, a la función `DataFrame()` en este caso le pasamos dos argumentos, la variable `list_rrss` la cual serán los datos del `DataFrame` y `columns` donde se especifica el nombre de las columnas, en este caso `Name`. Finalmente, se muestra por la terminal el `DataFrame` con los nombres de las redes sociales en la columna `Name`. Si quieres un [tutorial sobre Pandas python](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning), te invito a leer el Blog de [4Geeks](https://4geeks.com/), donde encontrarás mucha información relevante.

## DataFrame en Pandas

Un `DataFrame` como se mencionó anteriormente es una estructura de dos dimensiones, para crear un `DataFrame` en Pandas, primero se necesita importar la librería Pandas y luego utilizar la clase `pandas.DataFrame`. La clase `pandas.DataFrame` permite varios parámetros a la hora de crearse, veamos cuales son estos parámetros:

```python
pandas.DataFrame(data, index, columns, dtype)
```

- `data`: Representa los datos que utilizara el `DataFrame`, puede ser un objeto, una lista, un diccionario, otro `DataFrame`, entre otros.
- `index`: Se utiliza cuando queremos especificar los índices del `DataFrame`, si no se le proporciona este parámetro por defecto genera índices numéricos.
- `columns`: Se utiliza cuando queremos especificar los nombres de las columnas del `DataFrame`, si no se le proporciona este parámentro por defecto genera índices numéricos.
- `dtype`: Se utiliza para especificar el tipo de datos de las columnas `DataFrame`, por ejemplo, `int`, `float`, `object`, etc. Si no se le proporciona este parámetro, por defecto infiere el tipo de dato a partir de los datos suministrados.

Veamos un ejemplo donde hace uso de los parámetros antes mencionados:

```python
import pandas as pd

data_countries = {'country': ['Spain', 'Germany', 'United Kingdom', 'Japan'],
'date': ['2022', '2022', '2020', '2021'],
'density': [94,234,275,332],
'population': [47615034, 83794000,67081000,125507000]}

indexes = ['a', 'b', 'c','d']
columns = ['country', 'date', 'density', 'population']

df_data_countries = pd.DataFrame(data=countries, index=indexes, columns=columns, dtype=str)

print(df_data_countries)

```

> (output) de la variable `df_data_countries`

|     | country        | date | density | population |
| --- | -------------- | ---- | ------- | ---------- |
| a   | Spain          | 2022 | 94      | 47615034   |
| b   | Germany        | 2022 | 234     | 83794000   |
| c   | United Kingdom | 2020 | 275     | 67081000   |
| d   | Japan          | 2021 | 332     | 125507000  |

En este ejemplo se crea un `DataFrame` utilizando el diccionario `data_countries`, adicionalmente se especifican los índices y nombres de las columnas con las listas `indexes` y `columns` respectivamente.

## Formas de crear un DataFrame

Existen distintas maneras de crear un `DataFrame` en [Python](https://4geeks.com/es/lesson/que-es-python-tutorial), a continuación explicaremos algunas de ellas.

### Creación de un dataframe vacio

```python
import pandas as pd

# Creacion de un dataframe vacio
df= pd.DataFrame()

print(df)
```

> (output) de la variable `df`

Empty DataFrame
Columns: []
Index: []

### Creación de un dataframe a partir de una lista de listas

```python
import pandas as pd

list_products = [
    ['iPhone 12', 100, 500],
    ['Samsung Galaxy S21', 200, 1000],
    ['Sony PlayStation 5', 150, 750],
    ['Nintendo Switch', 50, 250]
]

df_list_products = pd.DataFrame(list_products, columns=['Product', 'Quantity', 'Price'])

print(df_list_products)
```

> (output) de la variable `df_list_products`

|     | Product            | Quantity | Price |
| --- | ------------------ | -------- | ----- |
| 0   | iPhone 12          | 100      | 500   |
| 1   | Samsung Galaxy S21 | 200      | 1000  |
| 2   | Sony PlayStation 5 | 150      | 750   |
| 3   | Nintendo Switch    | 50       | 25    |

### Creación de un DataFrame desde un diccionario de listas

```python
import pandas as pd

billionaires = {
    'name': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'age': [59, 51, 74, 67],
    'fortune': [177000000000, 151000000000, 150000000000, 124000000000]
}

df_billionaires = pd.DataFrame(billionaires)

print(df_billionaires)
```

> (output) de la variable `df_billionaires`

|     | name            | age | fortune      |
| --- | --------------- | --- | ------------ |
| 0   | Jeff Bezos      | 59  | 177000000000 |
| 1   | Elon Musk       | 51  | 151000000000 |
| 2   | Bernard Arnault | 74  | 150000000000 |
| 3   | Bill Gates      | 67  | 124000000000 |

### Creación de un dataframe a partir de una lista de diccionarios

```python
import pandas as pd


players = [
    {'Name': 'Lionel Messi', 'Team': 'Inter Miami CF', 'Salary': 67000000},
    {'Name': 'Cristiano Ronaldo', 'Team': 'Al-Nassr', 'Salary': 62000000},
    {'Name': 'Neymar Jr.', 'Team': 'Paris Saint-Germain', 'Salary': 56000000},
    {'Name': 'Kylian Mbappé', 'Team': 'Paris Saint-Germain', 'Salary': 42000000},
    {'Name': 'Mohamed Salah', 'Team': 'Liverpool', 'Salary': 40000000}
]

df_players = pd.DataFrame(players, index=['first', 'second', 'third', 'fourth', 'fifth'])


print(df_players)

```

> (output) de la variable `df_players`

|        | Name              | Team                | Salary   |
| ------ | ----------------- | ------------------- | -------- |
| first  | Lionel Messi      | Inter Miami CF      | 67000000 |
| second | Cristiano Ronaldo | Al-Nassr            | 62000000 |
| third  | Neymar Jr.        | Paris Saint-Germain | 56000000 |
| fourth | Kylian Mbappé     | Paris Saint-Germain | 42000000 |
| fifth  | Mohamed Salah     | Liverpool           | 40000000 |

## Métodos más importantes del dataframe

La clase `pandas.DataFrame` ofrece una amplia gama de métodos que pueden ser útiles a la hora de analizar datos, a continuación explicaremos los más importantes:

- `head(n)`: Este método retorna las primeras `n` filas del `DataFrame`.

```python
import pandas as pd


players = [
    {'Name': 'Lionel Messi', 'Team': 'Inter Miami CF', 'Salary': 67000000},
    {'Name': 'Cristiano Ronaldo', 'Team': 'Al-Nassr', 'Salary': 62000000},
    {'Name': 'Neymar Jr.', 'Team': 'Paris Saint-Germain', 'Salary': 56000000},
    {'Name': 'Kylian Mbappé', 'Team': 'Paris Saint-Germain', 'Salary': 42000000},
    {'Name': 'Mohamed Salah', 'Team': 'Liverpool', 'Salary': 40000000}
]


df_players = pd.DataFrame(players)


print(df_players.head(2))
```

> (output) de la variable `df_players` aplicando el método `head()`

|     | Name              | Team           | Salary   |
| --- | ----------------- | -------------- | -------- |
| 0   | Lionel Messi      | Inter Miami CF | 67000000 |
| 1   | Cristiano Ronaldo | Al-Nassr       | 62000000 |

- `tail(n)`: Este método retorna las últimas `n` filas del `DataFrame`.

```python
import pandas as pd


players = [
    {'Name': 'Lionel Messi', 'Team': 'Inter Miami CF', 'Salary': 67000000},
    {'Name': 'Cristiano Ronaldo', 'Team': 'Al-Nassr', 'Salary': 62000000},
    {'Name': 'Neymar Jr.', 'Team': 'Paris Saint-Germain', 'Salary': 56000000},
    {'Name': 'Kylian Mbappé', 'Team': 'Paris Saint-Germain', 'Salary': 42000000},
    {'Name': 'Mohamed Salah', 'Team': 'Liverpool', 'Salary': 40000000}
]


df_players = pd.DataFrame(players)

print(df_players.tail(2))
```

> (output) de la variable `df_players` aplicando el método `tail()`

|     | Name          | Team                | Salary   |
| --- | ------------- | ------------------- | -------- |
| 3   | Kylian Mbappé | Paris Saint-Germain | 42000000 |
| 4   | Mohamed Salah | Liverpool           | 40000000 |

- `info()`:Este método muestra información detallada sobre el `DataFrame`, por ejemplo, el número de filas y columnas, el tipo de datos de cada columna, entre otros datos.

```python
import pandas as pd

billionaires = {
    'name': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'age': [59, 51, 74, 67],
    'fortune': [177000000000, 151000000000, 150000000000, 124000000000]
}

df_billionaires = pd.DataFrame(billionaires)

print(df_billionaires.info())
```

> (output) de la variable `df_billionaires` aplicando el método `info()`

```
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 4 entries, 0 to 3
Data columns (total 3 columns):
 #   Column   Non-Null Count  Dtype
---  ------   --------------  -----
 0   name     4 non-null      object
 1   age      4 non-null      int64
 2   fortune  4 non-null      int64
dtypes: int64(2), object(1)
memory usage: 152.0+ bytes
None
```

- `describe()`: Genera estadísticas descriptivas del `DataFrame`, como el recuento, la media, la desviación estándar, etc.

```python
import pandas as pd

billionaires = {
    'name': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'age': [59, 51, 74, 67],
    'fortune': [177000000000, 151000000000, 150000000000, 124000000000]
}

df_billionaires = pd.DataFrame(billionaires)

print(df_billionaires.describe())

```

> (output) de la variable `df_billionaires` aplicando el método `describe()`

|       | age       | fortune      |
| ----- | --------- | ------------ |
| count | 4.000000  | 4.000000e+00 |
| mean  | 62.750000 | 1.505000e+11 |
| std   | 9.945686  | 2.164101e+10 |
| min   | 51.000000 | 1.240000e+11 |
| 25%   | 57.000000 | 1.435000e+11 |
| 50%   | 63.000000 | 1.505000e+11 |
| 75%   | 68.750000 | 1.575000e+11 |
| max   | 74.000000 | 1.770000e+11 |

- `loc[row_indexer, col_indexer]`: Accede a un subconjunto de filas y columnas basándose en las etiquetas del índice.

```python
import pandas as pd


players = [
    {'Name': 'Lionel Messi', 'Team': 'Inter Miami CF', 'Salary': 67000000},
    {'Name': 'Cristiano Ronaldo', 'Team': 'Al-Nassr', 'Salary': 62000000},
    {'Name': 'Neymar Jr.', 'Team': 'Paris Saint-Germain', 'Salary': 56000000},
    {'Name': 'Kylian Mbappé', 'Team': 'Paris Saint-Germain', 'Salary': 42000000},
    {'Name': 'Mohamed Salah', 'Team': 'Liverpool', 'Salary': 40000000}
]

df_players = pd.DataFrame(players, index=['first', 'second', 'third', 'fourth', 'fifth'])


print(df_players.loc["first":"third", "Name":"Team"])

```

> (output) de la variable `df_players` aplicando el método `loc[row_indexer, col_indexer]`

|        | Name              | Team                |
| ------ | ----------------- | ------------------- |
| first  | Lionel Messi      | Inter Miami CF      |
| second | Cristiano Ronaldo | Al-Nassr            |
| third  | Neymar Jr.        | Paris Saint-Germain |

- `iloc[row_indexer, col_indexer]`: Accede a un subconjunto de filas y columnas basándose en la posición de índice.

```python
import pandas as pd

billionaires = {
    'name': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'age': [59, 51, 74, 67],
    'fortune': [177000000000, 151000000000, 150000000000, 124000000000]
}

df_billionaires = pd.DataFrame(billionaires)

print(df_billionaires.iloc[0:3, 0:2])
```

> (output) de la variable `df_billionaires` aplicando el método `iloc[row_indexer, col_indexer]`

|     | name            | age |
| --- | --------------- | --- |
| 0   | Jeff Bezos      | 59  |
| 1   | Elon Musk       | 51  |
| 2   | Bernard Arnault | 74  |

- `sort_values(by)`: Este método permite ordenar el DataFrame por los valores de una columna o una lista de columnas.

```python
import pandas as pd


players = [
    {'Name': 'Lionel Messi', 'Team': 'Inter Miami CF', 'Salary': 67000000},
    {'Name': 'Cristiano Ronaldo', 'Team': 'Al-Nassr', 'Salary': 62000000},
    {'Name': 'Neymar Jr.', 'Team': 'Paris Saint-Germain', 'Salary': 56000000},
    {'Name': 'Kylian Mbappé', 'Team': 'Paris Saint-Germain', 'Salary': 42000000},
    {'Name': 'Mohamed Salah', 'Team': 'Liverpool', 'Salary': 40000000}
]

df_players = pd.DataFrame(players)

print(df_players.sort_values(by='Name', ascending=True))

```

> (output) de la variable `df_players` aplicando el método `sort_values()`

|     | Name              | Team                | Salary   |
| --- | ----------------- | ------------------- | -------- |
| 1   | Cristiano Ronaldo | Al-Nassr            | 62000000 |
| 3   | Kylian Mbappé     | Paris Saint-Germain | 42000000 |
| 0   | Lionel Messi      | Inter Miami CF      | 67000000 |
| 4   | Mohamed Salah     | Liverpool           | 40000000 |
| 2   | Neymar Jr.        | Paris Saint-Germain | 56000000 |

Podemos concluir que los `DataFrames` son una herramienta muy poderosa para trabajar con datos tabulares, ya que nos permite analizar y manipular gran cantidad de datos que en ocasiones son muy complejos, por lo que son ampliamente utilizados en áreas de desarrollo como son el [Machine learning](https://4geeksacademy.com/us/machine-learning-engineer/machine-learning-engineer), Data Science, Data Analysis, entre otras. Si te interesa conocer más a fondo cómo puedes utilizar la biblioteca de **Pandas** en Machine Learning te recomiendo que visites el artículo sobre [pandas para machine learning](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning), donde encontraras recursos muy utiles y explicaciones con ejemplos de código y videotutoriales que te ayudarán a enterder mejor esta librería y aprenderas a utilizar todas las caracteristicas mas importantes que ofrese.
