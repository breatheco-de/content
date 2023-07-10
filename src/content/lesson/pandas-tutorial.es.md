Pandas es una de las bibliotecas más populares del ecosistema python relacionado a ciencia de datos, ya que facilita de gran manera el trabajo con colecciones de datos usando herramientas para la optimización del procesamiento de los datos. Como analista, científico o desarrollador en el area de datos es muy importante elegir las herramientas correctas y así poder sacarle el máximo provecho a las colecciones de datos.

En este tutorial de pandas vamos a aprender ¿qué es pandas? y luego vamos a realizar una práctica de exploración y transformación de datos con el uso de DataFrames.

```python
import pandas as pd

dict_data_column_keys = {
     "name": ["Tacos Tomas", "500 Restaurant", "Cinepolis", "PeñaCruz"],
     "type": ["Restaurant", "Bar", "Restaurant", "Bar"],
     "avg_bill": [200.45, 34.64, 180.45, 45.54] 
    }

df = pd.DataFrame.from_dict(dict_data_column_keys)

df.head()
#             name        type  avg_bill
# 0     Tacos Tomas  Restaurant    200.45
# 1  500 Restaurant         Bar     34.64
# 2       Cinepolis  Restaurant    180.45
# 3        PeñaCruz         Bar     45.54


df.info()
# <class 'pandas.core.frame.DataFrame'>
# RangeIndex: 4 entries, 0 to 3
# Data columns (total 3 columns):
#  #   Column    Non-Null Count  Dtype  
# ---  ------    --------------  -----  
#  0   name      4 non-null      object 
#  1   type      4 non-null      object 
#  2   avg_bill  4 non-null      float64
# dtypes: float64(1), object(2)
# memory usage: 228.0+ bytes

```
Explicación del ejemplo

## ¿Qué es pandas? 

La biblioteca Pandas es una gran herramienta de código abierto utilizada en la manipulación, el análisis y la visualización de datos, y es una parte esencial del conjunto de herramientas de python en el mundo de los datos. 
La principal característica de esta biblioteca es su facilidad de uso debido a que utiliza una estructura de datos llamada DataFrame en vez de listas y matrices, estos DataFrames son muy similares a las tablas de datos que podemos encontrar en Excel y otras herramientas pero con la flexibilidad que nos da python y numpy para la aplicación de agregaciones matemáticas.
Si quieres saber más sobre esta util biblioteca de python, en [este artículo](https://4geeks.com/es/how-to/instalar-pandas-python) de 4geeks encontrarás mucha más información.

## Tutorial de Pandas
En este tutorial de pandas, practicaremos instalando pandas y luego utilizándolo para explorar y aplicar agregaciones matemáticas a una colección de datos.

### Instalación
Antes que nada es importante crear un entorno virtual de python y activarlo para poder tener todos los requerimientos de nuestro script en un mismo sitio. Para ello nos posicionaremos en la carpeta del proyecto y ejecutaremos los siguientes comandos:
```bash
python -m venv my_env
source my_env/bin/activate
```

Para instalar pandas es necesario utilizar el manejador de paquetes de tu preferencia, por ejemplo `pip` o `conda` en este tutorial utilizaremos `pip` con el siguiente comando:

```bash
pip install pandas
```

Una vez instalado podemos importarlo al código de la siguiente forma:

```python
import pandas as pd
```

### Cargando datos al DataFrame
Existen muchas formas de cargar datos a un DataFrame, por ejemplo, desde una base de datos o desde un archivo .csv. En este caso vamos a cargar los datos desde el enlace de descarga de un archivo .csv, utilizando la función `read_csv()` e indicando el enlace a descargar.

```python
df = pd.read_csv("https://datos.cdmx.gob.mx/dataset/aa2ff336-b4aa-44f3-b38a-f303ef0f7673/resource/98f51fe2-18cb-4f50-a989-b9f81a2b5a76/download/2023-06-29-puntos_de_acceso_wifi.csv")

```
La colección de datos que utilizaremos, contiene la información de los puntos de acceso a wifi públicos en la Ciudad de México.

### Inspección del DataFrame
Usualmente cuando empezamos a analizar una nueva colección de datos, desconocemos la estructura e incluso los valores que podría contener, es por ello que antes de intentar aplicar agregaciones, vamos a explorar el DataFrame con la ayuda de los siguientes métodos:

```python
# Imprimir en pantalla las primeras filas del Dataframe
df.head()
#                                        id  ...               alcaldia
# 0                           19 DE MAYO-01  ...         Álvaro Obregón
# 1  1A AMPLIACION SANTIAGO ACAHUALTEPEC-01  ...             Iztapalapa
# 2  1A AMPLIACION SANTIAGO ACAHUALTEPEC-02  ...             Iztapalapa
# 3          SAN LORENZO ACOPILCO (PBLO)-01  ...  Cuajimalpa de Morelos
# 4                          26 DE JULIO-01  ...         Álvaro Obregón

# Información sobre los nombres de las columnas, cantidad de valores nulos y tipo de valor de la columna, así como el dtype por defecto y la cantidad de memoria que ocupa el DataFrame.
df.info()
# <class 'pandas.core.frame.DataFrame'>
# RangeIndex: 31251 entries, 0 to 31250
# Data columns (total 7 columns):
#  #   Column             Non-Null Count  Dtype
# ---  ------             --------------  -----
#  0   id                 31251 non-null  object
#  1   programa           31251 non-null  object
#  2   fecha_instalacion  0 non-null      float64
#  3   latitud            31251 non-null  float64
#  4   longitud           31251 non-null  object
#  5   colonia            31237 non-null  object
#  6   alcaldia           31251 non-null  object
# dtypes: float64(2), object(5)
# memory usage: 1.7+ MB

# Este método sirve para tener una idea general de las columnas con valores cuantitativos aplicandoles las agregaciones estadísticas más comunes como el conteo de valores, el promedio de ese valor y otros.
df.describe()
#       fecha_instalacion       latitud
# count                0.0  31251.000000
# mean                 NaN     19.385226
# std                  NaN      0.076737
# min                  NaN     19.123390
# 25%                  NaN     19.329090
# 50%                  NaN     19.386324
# 75%                  NaN     19.444230
# max                  NaN     19.579300

# En este caso estamos utilizando el método isnull() y el método sum() para obtener la cantidad de filas que  tienen un valor nulo o NaN en cada columna. Esto puede ser muy util ya que las columnas que contienen  todos sus valores nulos podrían ser descartadas de las operaciones de agregación ya que no aportan ningún valor.

df.isnull().sum()
# id                       0
# programa                 0
# fecha_instalacion    31251
# latitud                  0
# longitud                 0
# colonia                 14
# alcaldia                 0
# dtype: int64

```

### Limpieza del DataFrame
Antes de poder aplicar las operaciones matemáticas es muy importante realizar una limpieza a los valores que contiene el DataFrame, ya que de lo contrario podríamos enfrentarnos a errores debido al formato o al contenido de los campos.

En el paso anterior hemos comprobado que la columna fecha_instalacion tiene el 100% de sus valores en nulo, por lo que es una columna que no nos servirá y podemos descartarla con el método `drop()`, a este método le indicamos el eje de las columnas con el parametro `axis=1` y vamos a aplicar el cambio al mismo DataFrame sin crear uno nuevo con el parametro `inplace=True`.
```
df.drop("fecha_instalacion", axis=1, inplace=True)
```

Otro detalle que hemos descubierto en la exploración es que la columna `latitud` fue automáticamente detectada de tipo `float64` sin embargo la columna `longitud` fue detectada de tipo `str`, esto puede representar un problema ya que realmente ambas columnas juntas representan un punto geográfico exacto. Entonces para simplicar su uso vamos a convertirlas a tipo `str` utilizando el método `astype()`.
```
df["latitud"] = df["latitud"].astype(str)
```

Finalmente algo que podemos notar al imprimir los valores del DataFrame es que existe una columna llamada `id` con valores que no parecen estar "limpios" por lo que vamos a reemplazar todos los espacios entre las palabras con un guión bajo y así lograr obtener un valor mucho más normalizado.
Para ello vamos a utilizar el método `apply` que nos permitirá recorrer el DataFrame fila por fila y aplicarle la función deseada, en este caso la función `replace(" ", "_")`.
```python
df["id"] = df["id"].apply(lambda x: x.replace(" ", "_"))
```

### Agregaciones
Ahora si, es momento de aplicar las operaciones matemáticas a la colección de datos y obtener los resultados que buscamos.

Al aplicar el método value_counts() podremos obtener el conteo de los valores de una columna, agrupados por sus distintos valores. En este caso nos gustaría saber cuales son las alcaldías que tienen más puntos de acceso con wifi.
```python
df["alcaldia"].value_counts()
# alcaldia
# Gustavo A. Madero         3606
# Iztapalapa                3522
# Cuauhtémoc                3491
# Tlalpan                   2633
# Álvaro Obregón            2548
# Coyoacán                  2274

# Ahora bien si queremos obtener el mismo conteo pero en vez de obtener el total queremos obtener el porcentaje entonces utilizamos el parámetro normalize=True:

df["alcaldia"].value_counts(normalize=True)
# alcaldia
# Gustavo A. Madero         0.115388
# Iztapalapa                0.112700
# Cuauhtémoc                0.111708
# Tlalpan                   0.084253
# Álvaro Obregón            0.081533
# Coyoacán                  0.072766
```

Una de las herramientas más utilizadas en pandas son los filtros, que nos van a servir para descartar filas basandonos en las condiciones que se establezcan, por ejemplo si quisieramos quedarnos únicamente con la información de los puntos de acceso que han sido parte de los programas para "Escuelas Primarias" entonces podemos aplicar el filtro de la siguiente forma:
```python
df = df[df["programa"] == "Escuelas Primarias"]
```

Podemos también obtener la cantidad de puntos de acceso que en su campo colonia contienen la palabra `"CENTRO"`. 
```python
df["colonia"].str.contains("CENTRO").sum()
# 42
```

### Resultados
Luego de aplicar las exploraciones y agregaciones matemáticas podemos empezar a visualizar las características destacadas de nuestra colección de datos y a partír de allí, definir cuales son las métricas que más nos interesan y que quiseramos guardar para utilizarlas en diversos materiales como pueden ser reportes, visualizaciones gráficas, tablas, etc.
Finalmente para guardar el DataFrame resultante vamos a utilizar el método `save()`.

```python
filename = "mi_nuevo_archivo.csv"
df.to_csv(filename, sep=',', index=False)
```

En este caso le enviaremos los parámetros `filename` que es el nombre del archivo, `sep` que es el separador que utilizaremos para cada campo, en este casó utilizaremos una `,` y el parámetro `index=False` para que no se guarde la columna de index que el DataFrame tiene por defecto.
