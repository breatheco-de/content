# Crear Dataframe

Un `DataFrame` es una estructura de dos dimensiones, muy similar a una hoja de cálculo o una tabla en base de datos, veamos como crear un `DataFrame` a partir de una lista.

```python
import pandas as pd

list_rrss = ['Facebook','Twitter','Instagram','Youtube']

# Crear dataframe a partir de una lista
df_rrss = pd.DataFrame(list_rrss, columns=['Name'])

print(df_rrss)
```

> (output) de la variable `df_rrss`

|     |   Name    |
| --- | --------- |
| 0   | Facebook  |
| 1   | Twitter   |
| 2   | Instagram |
| 3   | Youtube   |

En este ejemplo, utilizamos la función `DataFrame()` para crear un `DataFrame` a partir de las lista `list_rrss` y su resultado se guarda en la variable `df_rrss`, a la función `DataFrame()` en este caso le pasamos dos argumentos, la variable `list_rrss` la cual serán los datos del `DataFrame` y `columns` donde se especifica el nombre de las columnas, en este caso `Name`. Finalmente, se muestra por la terminal el `DataFrame` con los nombres de las redes sociales en la columna `Name`.

## DataFrame en Pandas

Un `DataFrame` como se mencionó anteriormente es una estructura de dos dimensiones, para crear un `DataFrame` en Pandas, primero se necesita importar la librería Pandas y luego utilizar la clase `pandas.DataFrame`. La clase `pandas.DataFrame` permite varios parámetros a la hora de crearse, veamos cuales son estos parámetros:

```python
pandas.DataFrame(data, index, columns, dtype)
```

- `data`: Representa los datos que utilizara el `DataFrame`, puede ser un objeto, una lista, un diccionario, otro `DataFrame`, entre otros.
- `index`: Se utiliza cuando queremos especificar los índices del `DataFrame`, si no se le proporciona este parámetro por defecto genera índices numéricos.
- `colums`: Se utiliza cuando queremos especificar los nombres de las columnas del `DataFrame`, si no se le proporciona este parámentro por defecto genera índices numéricos.
- `dtype`: Se utiliza para especificar el tipo de datos de las columnas `DataFrame`, por ejemplo, `int`, `float`, `object`, etc. Si no se le proporciona este parámetro, por defecto infiere el tipo de dato a partir de los datos suministrados.

Veamos un ejemplo donde hace uso de los parámetros antes mencionados:

```python
import pandas as pd

countries = {'Pais': ['España', 'Alemania', 'Reino Unido', 'Japon'],
date: ['2022', '2022', '2020', '2021'],
density: [94,234,275,332],
population: [47615034, 83794000,67081000,125507000]}

indexes = ['a', 'b', 'c','d']
columns = ['Pais', 'Fecha', 'Densidad', 'Poblacion']

df_data_countries = pd.DataFrame(data=countries, index=indexes, columns=columns, dtype=str)

print(df_data_paises)

```

> (output) de la variable `df_data_countries`

|     |   Country   | Date  | Density  | Population |
| --- | ----------- | ----- | -------- | ---------- |
| a   | España      | 2022  | 94       | 47615034   |
| b   | Alemania    | 2022  | 234      | 83794000   |
| c   | Reino Unido | 2020  | 275      | 67081000   |
| d   | Japon       | 2021  | 332      | 125507000  |

En este ejemplo se crea un `DataFrame` utilizando el diccionario `data_countries`, adicionalmente se especifican los índices y nombres de las columnas con las listas `indexes` y `columns` respectivamente.

## Formas de crear un DataFrame

Existen distintas maneras de crear un `DataFrame` en Python, a continuación explicaremos algunas de ellas.

### Creación de un dataframe vacio

```python
import pandas as pd

# Creacion de un dataframe vacio
df_jugadores = pd.DataFrame()

print(df_jugadores)
```

> (output) de la variable `df_jugadores`

Empty DataFrame
Columns: []
Index: []

### Creación de un dataframe a partir de una lista de listas

```python
import pandas as pd

lista_de_productos = [
    ['iPhone 12', 100, 500],
    ['Samsung Galaxy S21', 200, 1000],
    ['Sony PlayStation 5', 150, 750],
    ['Nintendo Switch', 50, 250]
]

df_lista_de_productos = pd.DataFrame(lista_de_productos, columns=['Producto', 'Cantidad', 'Precio'])

print(df_lista_de_productos)
```

> (output) de la variable `df_lista_de_productos`

|     | Producto           | Cantidad | Precio |
| --- | ------------------ | -------- | ------ |
| 0   | iPhone 12          | 100      | 500    |
| 1   | Samsung Galaxy S21 | 200      | 1000   |
| 2   | Sony PlayStation 5 | 150      | 750    |
| 3   | Nintendo Switch    | 50       | 25     |

### Creación de un DataFrame desde un diccionario de listas

```python
import pandas as pd

personas_multimillonarias = {
    'nombre': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'edad': [59, 51, 74, 67],
    'fortuna': [177000000000, 151000000000, 150000000000, 124000000000]
}

df_personas_multimillonarias = pd.DataFrame(personas_multimillonarias)

print(df_personas_multimillonarias)
```

> (output) de la variable `df_personas_multimillonarias`

|     | nombre          | edad | fortuna      |
| --- | --------------- | ---- | ------------ |
| 0   | Jeff Bezos      | 59   | 177000000000 |
| 1   | Elon Musk       | 51   | 151000000000 |
| 2   | Bernard Arnault | 74   | 150000000000 |
| 3   | Bill Gates      | 67   | 124000000000 |

### Creación de un dataframe a partir de una lista de diccionarios

```python
import pandas as pd


jugadores = [
    {'Nombre': 'Lionel Messi', 'Equipo': 'Inter Miami CF', 'Salario': 67000000},
    {'Nombre': 'Cristiano Ronaldo', 'Equipo': 'Al-Nassr', 'Salario': 62000000},
    {'Nombre': 'Neymar Jr.', 'Equipo': 'Paris Saint-Germain', 'Salario': 56000000},
    {'Nombre': 'Kylian Mbappé', 'Equipo': 'Paris Saint-Germain', 'Salario': 42000000},
    {'Nombre': 'Mohamed Salah', 'Equipo': 'Liverpool', 'Salario': 40000000}
]

df_jugadores = pd.DataFrame(jugadores, index=['primero', 'segundo', 'tercero', 'cuarto', 'quinto'])


print(df_jugadores)

```

> (output) de la variable `df_jugadores`

|         | Nombre            | Equipo              | Salario  |
| ------- | ----------------- | ------------------- | -------- |
| primero | Lionel Messi      | Inter Miami CF      | 67000000 |
| segundo | Cristiano Ronaldo | Al-Nassr            | 62000000 |
| tercero | Neymar Jr.        | Paris Saint-Germain | 56000000 |
| cuarto  | Kylian Mbappé     | Paris Saint-Germain | 42000000 |
| quinto  | Mohamed Salah     | Liverpool           | 40000000 |

## Métodos más importantes del dataframe

La clase `pandas.DataFrame` ofrece una amplia gama de métodos que pueden ser útiles a la hora de analizar datos, a continuación explicaremos los más importantes:

- `head(n)`: Este método retorna las primeras `n` filas del `DataFrame`.

```python
import pandas as pd


jugadores = [
    {'Nombre': 'Lionel Messi', 'Equipo': 'Inter Miami CF', 'Salario': 67000000},
    {'Nombre': 'Cristiano Ronaldo', 'Equipo': 'Al-Nassr', 'Salario': 62000000},
    {'Nombre': 'Neymar Jr.', 'Equipo': 'Paris Saint-Germain', 'Salario': 56000000},
    {'Nombre': 'Kylian Mbappé', 'Equipo': 'Paris Saint-Germain', 'Salario': 42000000},
    {'Nombre': 'Mohamed Salah', 'Equipo': 'Liverpool', 'Salario': 40000000}
]


df_jugadores = pd.DataFrame(jugadores)


print(df_jugadores.head(2))
```

> (output) de la variable `df_jugadores` aplicando el método `head()`

|     | Nombre            | Equipo         | Salario  |
| --- | ----------------- | -------------- | -------- |
| 0   | Lionel Messi      | Inter Miami CF | 67000000 |
| 1   | Cristiano Ronaldo | Al-Nassr       | 62000000 |

- `tail(n)`: Este método retorna las últimas `n` filas del `DataFrame`.

```python
import pandas as pd

jugadores = [
    {'Nombre': 'Lionel Messi', 'Equipo': 'Inter Miami CF', 'Salario': 67000000},
    {'Nombre': 'Cristiano Ronaldo', 'Equipo': 'Al-Nassr', 'Salario': 62000000},
    {'Nombre': 'Neymar Jr.', 'Equipo': 'Paris Saint-Germain', 'Salario': 56000000},
    {'Nombre': 'Kylian Mbappé', 'Equipo': 'Paris Saint-Germain', 'Salario': 42000000},
    {'Nombre': 'Mohamed Salah', 'Equipo': 'Liverpool', 'Salario': 40000000}
]


df_jugadores = pd.DataFrame(jugadores)

print(df_jugadores.tail(2))
```

> (output) de la variable `df_jugadores` aplicando el método `tail()`

|     | Nombre        | Equipo              | Salario  |
| --- | ------------- | ------------------- | -------- |
| 3   | Kylian Mbappé | Paris Saint-Germain | 42000000 |
| 4   | Mohamed Salah | Liverpool           | 40000000 |

- `info()`:Este método muestra información detallada sobre el `DataFrame`, por ejemplo, el número de filas y columnas, el tipo de datos de cada columna, entre otros datos.

```python
import pandas as pd

personas_multimillonarias = {
    'nombre': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'edad': [59, 51, 74, 67],
    'fortuna': [177000000000, 151000000000, 150000000000, 124000000000]
}


df_personas_multimillonarias = pd.DataFrame(personas_multimillonarias)


print(df_personas_multimillonarias.info())
```

> (output) de la variable `df_personas_multimillonarias` aplicando el método `info()`

```
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 4 entries, 0 to 3
Data columns (total 3 columns):
 #   Column   Non-Null Count  Dtype
---  ------   --------------  -----
 0   nombre   4 non-null      object
 1   edad     4 non-null      int64
 2   fortuna  4 non-null      int64
dtypes: int64(2), object(1)
memory usage: 152.0+ bytes
None
```

- `describe()`: Genera estadísticas descriptivas del `DataFrame`, como el recuento, la media, la desviación estándar, etc.

```python
import pandas as pd

personas_multimillonarias = {
    'nombre': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'edad': [59, 51, 74, 67],
    'fortuna': [177000000000, 151000000000, 150000000000, 124000000000]
}

df_personas_multimillonarias = pd.DataFrame(personas_multimillonarias)

print(df_personas_multimillonarias.describe())

```

> (output) de la variable `df_personas_multimillonarias` aplicando el método `describe()`

|       | edad      | fortuna      |
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


jugadores = [
    {'Nombre': 'Lionel Messi', 'Equipo': 'Inter Miami CF', 'Salario': 67000000},
    {'Nombre': 'Cristiano Ronaldo', 'Equipo': 'Al-Nassr', 'Salario': 62000000},
    {'Nombre': 'Neymar Jr.', 'Equipo': 'Paris Saint-Germain', 'Salario': 56000000},
    {'Nombre': 'Kylian Mbappé', 'Equipo': 'Paris Saint-Germain', 'Salario': 42000000},
    {'Nombre': 'Mohamed Salah', 'Equipo': 'Liverpool', 'Salario': 40000000}
]


df_jugadores = pd.DataFrame(jugadores, index=['primero', 'segundo', 'tercero', 'cuarto', 'quinto'])


print(df_jugadores.loc["primero":"tercero", "Nombre":"Equipo"])

```

> (output) de la variable `df_jugadores` aplicando el método `loc[row_indexer, col_indexer]`

|         | Nombre            | Equipo              |
| ------- | ----------------- | ------------------- |
| primero | Lionel Messi      | Inter Miami CF      |
| segundo | Cristiano Ronaldo | Al-Nassr            |
| tercero | Neymar Jr.        | Paris Saint-Germain |

- `iloc[row_indexer, col_indexer]`: Accede a un subconjunto de filas y columnas basándose en la posición de índice.

```python
import pandas as pd

personas_multimillonarias = {
    'nombre': ['Jeff Bezos', 'Elon Musk', 'Bernard Arnault', 'Bill Gates'],
    'edad': [59, 51, 74, 67],
    'fortuna': [177000000000, 151000000000, 150000000000, 124000000000]
}


df_personas_multimillonarias = pd.DataFrame(personas_multimillonarias)

print(df_personas_multimillonarias.iloc[0:3, 0:2])

```

> (output) de la variable `df_personas_multimillonarias` aplicando el método `iloc[row_indexer, col_indexer]`

|     | nombre          | edad |
| --- | --------------- | ---- |
| 0   | Jeff Bezos      | 59   |
| 1   | Elon Musk       | 51   |
| 2   | Bernard Arnault | 74   |

- `sort_values(by)`: Este método permite ordenar el DataFrame por los valores de una columna o una lista de columnas.

```python
import pandas as pd


jugadores = [
    {'Nombre': 'Lionel Messi', 'Equipo': 'Inter Miami CF', 'Salario': 67000000},
    {'Nombre': 'Cristiano Ronaldo', 'Equipo': 'Al-Nassr', 'Salario': 62000000},
    {'Nombre': 'Neymar Jr.', 'Equipo': 'Paris Saint-Germain', 'Salario': 56000000},
    {'Nombre': 'Kylian Mbappé', 'Equipo': 'Paris Saint-Germain', 'Salario': 42000000},
    {'Nombre': 'Mohamed Salah', 'Equipo': 'Liverpool', 'Salario': 40000000}
]


df_jugadores = pd.DataFrame(jugadores)


print(df_jugadores.sort_values(by='Nombre', ascending=True))

```

> (output) de la variable `df_jugadores` aplicando el método `sort_values()`

|     | Nombre            | Equipo              | Salario  |
| --- | ----------------- | ------------------- | -------- |
| 1   | Cristiano Ronaldo | Al-Nassr            | 62000000 |
| 3   | Kylian Mbappé     | Paris Saint-Germain | 42000000 |
| 0   | Lionel Messi      | Inter Miami CF      | 67000000 |
| 4   | Mohamed Salah     | Liverpool           | 40000000 |
| 2   | Neymar Jr.        | Paris Saint-Germain | 56000000 |

Podemos concluir que los `DataFrames` son una herramienta muy poderosa para trabajar con datos tabulares, ya que nos permite analizar y manipular gran cantidad de datos que en ocasiones son muy complejos, por lo que son ampliamente utilizados en áreas de desarrollo como son el Machine Learning, Data Science, Data Analysis, entre otras.
