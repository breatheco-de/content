---
title: "¿Cómo crear un DataFrame?"
subtitle: "Aprende a crear un DataFrame en Pandas en Python. Sigue nuestra guía paso a paso para cargar datos desde diferentes fuentes y construir un DataFrame con Pandas."
tags: ["python","pandas"]
authors: ["danielmoret"]

---

Un `DataFrame` es una estructura de dos dimensiones, muy similar a una hoja de cálculo o una tabla en base de datos, veamos como crear un `DataFrame` a partir de una lista. 

```python runable=true
import pandas as pd

list_rrss = ['Facebook','Twitter','Instagram','Youtube']

# Crear dataframe a partir de una lista
df_rrss = pd.DataFrame(list_rrss, columns=['Name'])

print(df_rrss)
```

En este ejemplo, utilizamos la función `DataFrame()` para crear un `DataFrame` a partir de las lista `list_rrss` y su resultado se guarda en la variable `df_rrss`, a la función `DataFrame()` en este caso le pasamos dos argumentos, la variable `list_rrss` la cual serán los datos del `DataFrame` y `columns` donde se especifica el nombre de las columnas, en este caso `Name`. Finalmente, se muestra por la terminal el `DataFrame` con los nombres de las redes sociales en la columna `Name`. 

> 🔗 Si quieres un [tutorial sobre Pandas python](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning), te invito a leer el Blog de [4Geeks](https://4geeks.com/), donde encontrarás mucha información relevante.

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

```python runable=true
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

En este ejemplo se crea un `DataFrame` utilizando el diccionario `data_countries`, adicionalmente se especifican los índices y nombres de las columnas con las listas `indexes` y `columns` respectivamente.

## Formas de crear un DataFrame

Existen distintas maneras de crear un `DataFrame` en [Python](https://4geeks.com/es/lesson/que-es-python-tutorial), a continuación explicaremos algunas de ellas.

### Creación de un dataframe vacio

```python runable=true
import pandas as pd

# Creacion de un dataframe vacio
df= pd.DataFrame()

print(df)
```

### Creación de un dataframe a partir de una lista de listas

```python runable=true
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

### Creación de un DataFrame desde un diccionario de listas

```python runable=true
import pandas as pd

billionaires = {
    'name': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'age': [59, 51, 74, 67],
    'fortune': [177000000000, 151000000000, 150000000000, 124000000000]
}

df_billionaires = pd.DataFrame(billionaires)

print(df_billionaires)
```

### Creación de un dataframe a partir de una lista de diccionarios

```python runable=true
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

## Métodos más importantes del dataframe

La clase `pandas.DataFrame` ofrece una amplia gama de métodos que pueden ser útiles a la hora de analizar datos, a continuación explicaremos los más importantes:

- `head(n)`: Este método retorna las primeras `n` filas del `DataFrame`.

```python runable=true
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

- `tail(n)`: Este método retorna las últimas `n` filas del `DataFrame`.

```python runable=true
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

- `info()`:Este método muestra información detallada sobre el `DataFrame`, por ejemplo, el número de filas y columnas, el tipo de datos de cada columna, entre otros datos.

```python runable=true
import pandas as pd

billionaires = {
    'name': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'age': [59, 51, 74, 67],
    'fortune': [177000000000, 151000000000, 150000000000, 124000000000]
}

df_billionaires = pd.DataFrame(billionaires)

print(df_billionaires.info())
```

- `describe()`: Genera estadísticas descriptivas del `DataFrame`, como el recuento, la media, la desviación estándar, etc.

```python runable=true
import pandas as pd

billionaires = {
    'name': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'age': [59, 51, 74, 67],
    'fortune': [177000000000, 151000000000, 150000000000, 124000000000]
}

df_billionaires = pd.DataFrame(billionaires)

print(df_billionaires.describe())

```

- `loc[row_indexer, col_indexer]`: Accede a un subconjunto de filas y columnas basándose en las etiquetas del índice.

```python runable=true
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

- `iloc[row_indexer, col_indexer]`: Accede a un subconjunto de filas y columnas basándose en la posición de índice.

```python runable=true
import pandas as pd

billionaires = {
    'name': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'age': [59, 51, 74, 67],
    'fortune': [177000000000, 151000000000, 150000000000, 124000000000]
}

df_billionaires = pd.DataFrame(billionaires)

print(df_billionaires.iloc[0:3, 0:2])
```

- `sort_values(by)`: Este método permite ordenar el DataFrame por los valores de una columna o una lista de columnas.

```python runable=true
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

Podemos concluir que los `DataFrames` son una herramienta muy poderosa para trabajar con datos tabulares, ya que nos permite analizar y manipular gran cantidad de datos que en ocasiones son muy complejos, por lo que son ampliamente utilizados en áreas de desarrollo como son [Machine learning](https://4geeksacademy.com/us/machine-learning-engineer/machine-learning-engineer), Data Science, Data Analysis, entre otras. 

> 🔗 Si te interesa conocer más a fondo cómo puedes utilizar la biblioteca de **Pandas** en Machine Learning te recomiendo que visites el artículo sobre [pandas para machine learning](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning), donde encontraras recursos muy utiles y explicaciones con ejemplos de código y videotutoriales que te ayudarán a enterder mejor esta librería y aprenderas a utilizar todas las caracteristicas mas importantes que ofrese.
