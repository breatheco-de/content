---
title: "¿Qué es Pandas en Python?"
subtitle: "Aprende a manipular, transformar y analizar conjuntos de datos de manera eficiente con Pandas. Introducción completa a Pandas, la biblioteca de Python para el análisis de datos."
tags: ["python","pandas"]
authors: ["jul1998"]

---

Pandas es una popular librería de manipulación de datos que incluye optimas herramientas de estructura de datos y análisis de información. Su uso se ha extendido a muchos campos como ciencia de datos, finanzas o inteligencia artificial. Durante este artículo, se explicará su uso, la sintaxis para poder aplicar diferentes tareas y algunos casos prácticos. Si quieres un [tutorial sobre Pandas](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning), te invito a leer el Blog de [4Geeks](https://4geeks.com/), donde encontrarás mucha información relevante.

Aquí un ejemplo inicial sobre Pandas en Python:

```python
import pandas as pd

# Cargamos informacion de un archivo CSV
data = pd.read_csv(‘data.csv’)
# Imprimimos las primeras 5 filas del nuevo DataFrame
print(data.head())

# Resultado
  Nombre      Edad      País
0 Alejandro    28     Colombia
1 Ana   	     34     Mexico
2 Pedro        29     Costa Rica
```

## ¿Qué es Pandas en Python?

Pandas es una librería open-source que se puede usar con [Python](https://4geeks.com/es/lesson/como-programar-en-python) y ofrece una gran variedad de optimas y eficientes herramientas para manipular datos de acuerdo con los objetivos establecidos. Además, es posible trabajar tanto con números como con texto, limpieza de datos y explorar los datos para hallar patrones.

Es importante entender que pandas se compone de dos estructuras: Series y DataFrame. Series puede ser entendido como una lista que puede contener cualquier tipo de dato, mientras que el DataFrame es una estructura compuesta de columnas y filas, lo que posibilita aplicar distintas operaciones.

## ¿Cómo se usa Pandas en Python?

Entre las funcionalidades principales de Pandas destacan:

1.	Cargar datos: Pandas permite cargar datos fácilmente de diferentes fuentes como Excel, Sql, CSV, etc.
2.	Limpieza y procesamiento de datos: Pandas contiene métodos para manejar datos faltantes, duplicados, valores atípicos o transformación de los mismos si es necesario.
3.	Filtrar y Seleccionar datos: Es posible filtrar, seleccionar o recorrer valores de acuerdo con condiciones, filtros, nombres de columnas o filas, etc.
4.	Manipulación de datos: Pandas proporciona un amplio conjunto de métodos para agrupar, unir, agregar y remodelar datos que abre las oportunidades para manejar cualquier información.
5.	Visualización de datos: Pandas puede trabajar óptimamente con otras librerías basadas en la visualización de datos tal como Matplotlib o Seaborn para crear visualizaciones enriquecedoras.

## Sintaxis: Ejemplos de código de las acciones más básicas

Ahora se mostrará ejemplos para tener una mayor claridad de cómo funciona la sintaxis básica de Pandas en Python:

### Crear un DataFrame

```python
import pandas as pd
data = {'name': ['Juan', 'Ana', 'Pedro'],
        'age': [28, 34, 29],
        'country': ['Colombia', 'México', 'Costa Rica']}
# Se utiliza data para create un DataFrame(df)
df = pd.DataFrame(data)
print(df)

# Resultado
    name       age     country
0  Alejandro   28     Colombia
1  Ana   	     34     México
2  Pedro       29     Costa Rica
```

### Filtrar y Seleccionar valores

```python
import pandas as pd

# Filtrar los valores de acuerdo con una condicion
valores_filtrados = df[df['age'] > 30]

# Seleccionar columnas especificas
columna_seleccionada = df[['name', 'country']]

# Imprimir los datos filtrados:
print(valores_filtrados)
print(columna_seleccionada)

# Resultado
   name     age   country
1  Ana      34    México

   name          country
0 Alejandro     Colombia
1 Ana   	      México
2 Pedro         Costa Rica
```

### Agregación de datos

```python
import pandas as pd

# Agrupar datos por país y calcular el promedio
datos_agrupados = df.groupby('country')['age'].mean()

# Imprimir datos_agrupados
print(datos_agrupados)

# Resultado
country
México      34.0
Colombia    28.0
Costa Rica  29.0
Name: age, dtype: float64
```

## Casos de uso

Ahora se mostrará algunos casos de uso en donde se puede utilizar Pandas eficientemente con datos.

### Procesamiento y Limpieza de datos

Para procesar y limpiar datos, se puede integrar un código similar a este:

```python
import pandas as pd

# Manear datos faltantes
df.dropna() # Remueve las filas o columnas vacías
df.fillna() # Rellena valores vacíos con un valor especifico

# Remover los duplicados
df.drop_duplicates() # Remueve las filas duplicadas
```

### Análisis exploratorio de datos

Con Pandas, se puede obtener perspectivas de nuestra información como relaciones, patrones, estadísticas, etc.

```python
import pandas as pd

# Obtenemos las estadísticas de nuestro conjunto de datos
df.describe()

# Agrupa y sumar valores específicos
df.groupby('category')['sales'].sum() # Con esto obtenemos el total de ventas por cada cateogria
```

### Transformación y Manipulación de Datos

Mediante Pandas se puede manipular y transformar datos de la siguiente manera:

```python
Import pandas as pd

# Unir conjuntos de datos
df_unido = pd.merge(df1, df2, on='ID') # Con esta linea se unen dos DataFrames por medio del ID como columna comun

# Remodelación de datos
df.pivot_table(index='sale_date', columns='products', values='sales') # Se crea una tabla pivote con estos datos
```

## Conclusión

Pandas es una herramienta muy poderosa que provee varias opciones para desarrollar el análisis de datos. Esta librería se ha vuelto muy popular en los campos de la ciecia de datos, analistas y la inteligencia artificial. Mediante Python y Pandas, se pueden alcanzar varios objeticos al momento de analizar cualquier conjunto de datos y tomar decisiones.

Para aprender mas sobre Pandas y practicar estas habilidades, 4geeks ofrece este [tutorial interactivo de Python y Pandas](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning).
