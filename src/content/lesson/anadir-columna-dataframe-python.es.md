---
title: "¿Cómo añadir una columna a un DataFrame en Python?"
subtitle: "Aprende a agregar una columna a un DataFrame en Python utilizando Pandas. Descubre diferentes métodos y ejemplos prácticos para ampliar y enriquecer tus datos."
tags: ["python","pandas"]
authors: ["gilberto-mv"]

---

Una columna de _DataFrame_ en cuanto a la librería de _Pandas_ en _Python_, se refiere a una serie de valores organizados de manera vertical dentro de un objeto _DataFrame_. Representa una característica o valor único dentro del conjunto de datos a analizar.

> 🔗 Si quieres un [tutorial sobre Pandas python](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning) o conocer más sobre [dataframes en pandas](https://4geeks.com/es/lesson/pandas-dataframe) te invito a leer el Blog de [4Geeks](https://4geeks.com/es/how-to), donde encontrarás contenido muy interesante

```py
# Es necesario importar la librería de Pandas
import pandas as pd

# Crear un DataFrame de muestra
data = {'Company ': ['Facebook', 'Apple', 'Google', 'Neftlix'],
        'Started At': [2004, 1976, 1998, 1997]}
df = pd.DataFrame(data)

# Agregar una nueva columna al DataFrame
publicly_traded_company = [True, True, True, True]  # Data de muestra para nueva columna
df['publicly_traded_company'] = publicly_traded_company

# Imprimir el DataFrame actualizado
print(df)

# Resultado esperado
#   Company     Started At   publicly_traded_company
#0  Facebook       2004             True
#1     Apple       1976             True
#2    Google       1998             True
#3   Neftlix       1997             True
```

El código anterior crea un conjunto de datos base, al cual posteriormente se le realiza la adición de la columna `cotiza_en_bolsa` junto con sus valores. Al imprimir el código, se puede apreciar como el conjunto de datos cuenta con la columna adicional.

Este articulo profundiza en las maneras de añadir columnas _DataFrame_ en Python. Si quieres más información de cómo utilizar Pandas en otras aplicaciones, puedes ver nuestro [tutorial de Python Pandas]( https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning).

## Columna DataFrame Python

La forma de organización de información en un _DataFrame_ es con las filas organizadas de manera horizontal, mientras que las columnas se van colocando verticalmente. Esta estructura intuitiva permita una manipulación y almacenamiento eficiente de la información. Las columnas pueden contener diferentes tipos de datos como números, fechas, strings o booleanos, agregando a su versatilidad.

Los usos más comunes de los _DataFrame_ son la manipulación y el análisis de datos. Las columnas se pueden modificar, leer, agregar o quitar para realizar muchas operaciones y transformaciones en la data contenida en el _DataFrame_. Para agregar una columna DataFrame en Python se puede utilizar el siguiente código:

## Maneras de agregar DataFrames en Python

Existen diferentes formas de agregar columnas a un _DataFrame_ de Pandas en [Python](https://4geeks.com/es/lesson/que-es-python-tutorial). A continuación se muestran 3 de las maneras más comunes de realizar este proceso:

### Asignación directa

Se puede asignar un arreglo o lista a una columna con un nuevo nombre dentro del _DataFrame_. Hacer esto alinea automáticamente los datos basados en los índices del _DataFrame_. Aquí un ejemplo:

```py
import pandas as pd

# Crear un DataFrame 
data = {'Brand': ['Toyota', 'Ford', 'Tesla', 'Mitsubishi'],
        'Model': ['Hilux', 'Escape', 'Model S', 'Lancer']}
df = pd.DataFrame(data)

# Agregar una nueva columna al DataFrame
df['Year'] = ['2020', '2019', '2022', '2015']

print(df)

# Resultado esperado
#        Brand    Model  Year
#0      Toyota    Hilux  2020
#1        Ford   Escape  2019
#2       Tesla  Model S  2022
#3  Mitsubishi   Lancer  2015
```

### Método insert()

Este método permite agregar la columna en una posición especifica dentro del _DataFrame_. Es necesario proveer tanto el índice y el nombre de la columna. Ejemplo de uso del método `insert()`:

```py
import pandas as pd

# Crear un DataFrame 
data = {'Brand': ['Toyota', 'Ford', 'Tesla', 'Mitsubishi'],
        'Model': ['Hilux', 'Escape', 'Model S', 'Lancer']}
df = pd.DataFrame(data)

# Agregar una nueva columna al DataFrame
year = ['2020', '2019', '2022', '2015']
df.insert(1, 'Year', year)

print(df)

# Resultado esperado
#        Brand    Year   Model
#0      Toyota    2020    Hilux
#1        Ford    2019   Escape
#2       Tesla    2022  Model S
#3  Mitsubishi    2015   Lancer
```

### Método assign() 

Este método genera un nuevo _DataFrame_ que incluye la columna que se agrega. Devuelve un nuevo objeto _DataFrame_ sin modificar el _DataFrame_ original. Chequea este ejmplo de cómo utilizar el método `assign()` para añadir una columna:

```py
import pandas as pd

# Crear un DataFrame 
data = {'Brand': ['Toyota', 'Ford', 'Tesla', 'Mitsubishi'],
        'Model': ['Hilux', 'Escape', 'Model S', 'Lancer']}
df = pd.DataFrame(data)

# Agregar una nueva columna al DataFrame
year = ['2020', '2019', '2022', '2015']
df2 = df.assign(Year = year)

print(df2)

# Resultado esperado
#        Brand    Model  Year
#0      Toyota    Hilux  2020
#1        Ford   Escape  2019
#2       Tesla  Model S  2022
#3  Mitsubishi   Lancer  2015
```

## Casos de uso

Se tiene una lista de datos que lleva registro de una serie de errores ocurridos en los últimos 6 meses. Luego de validar los errores, se quiere documentar la severidad que tuvieron los errores en la operación, y controlar errores similares de cerca. Debido a que el _DataFrame_ actual no cuenta con la información adicional, se necesita crear una columna de datos para llevar registro de la información adicional. Se quiere dejar el _DataFrame_ original sin editar.

```py
import pandas as pd

# Crear un DataFrame 
data = {Error: ['Car computer hacked', 'Wheels misaligned', 'Windshield broken', 'Ran out of battery'],
        'Date': ['1/2/2023', '26/2/2023', '4/4/2023', '6/22/2023']}
df = pd.DataFrame(data)

# Agregar una nueva columna al DataFrame
severity = ['high', 'medium', 'high', 'low']
df2 = df.assign(Severity = severity)

print(df2)

# Resultado esperado
#            Error             Date      Severity
#0    Car computer hacked    1/2/2023      high
#1     Wheels misaligned     26/2/2023    medium
#2     Windshield broken     4/4/2023      high
#3    Ran out of battery     6/22/2023     low
```

Se utiliza el método `assign()` ya que se especifica que no se desea modificar el _DataFrame_ actual. Por medio de esta asignación se puede generar una nueva columna que incluya información sobre la severidad del error.

Agregar columnas en los _DataFrame_ es muy importante ya que nos permite realizar modificaciones sobre conjuntos de datos ya existentes, y así poder llevar registro de información adicional a la que incluye el conjunto original.