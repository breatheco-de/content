# Añadir columna DataFrame python

## Columna DataFrame python

Una columna de _DataFrame_ en cuanto a la librería de _Pandas_ en _Python_, se refiere a una serie de valores organizados de manera vertical dentro de un objeto _DataFrame_. Representa una característica o valor único dentro del conjunto de datos a analizar. Cada columna debe contar con un nombre único, que sirve como su identificador. 

La forma de organización de información en un _DataFrame_ es con las filas organizadas de manera vertical, mientras que las columnas se van colocando horizontalmente. Esta estructura intuitiva permita una manipulación y almacenamiento eficiente de la información. Las columnas puede contener diferentes tipos de datos como números, fechas, strings o booleanos, agregando a su versatilidad.

Los usos mas comunes de los _DataFrame_ son la manipulación y el análisis de datos. Las columnas se pueden modificar, leer, agregar o quitar para realizar muchas operaciones y transformaciones en la data contenida en el _DataFrame_.
Para agregar una columna DataFrame en Python se puede utilizar el siguiente código:

```py
# Es necesario importar la librería de Pandas
import pandas as pd

# Crear un DataFrame de muestra
data = {'Compania ': ['Facebook', 'Apple', 'Google', 'Neftlix'],
        'Fundacion': [2004, 1976, 1998, 1997]}
df = pd.DataFrame(data)

# Agregar una nueva columna al DataFrame
cotiza_en_bolsa = [True, True, True, True]  # Data de muestra para nueva columna
df['cotiza_en_bolsa'] = cotiza_en_bolsa

# Imprimir el DataFrame actualizado
print(df)

# Resultado esperado
#  Compania   Fundacion  cotiza_en_bolsa
#0  Facebook       2004             True
#1     Apple       1976             True
#2    Google       1998             True
#3   Neftlix       1997             True

```

El código anterior crea un conjunto de datos base, al cual posteriormente se le realiza la adición de la columna ```cotiza_en_bolsa``` junto con sus valores. Al imprimir el código, se puede apreciar como el conjunto de datos cuenta con la columna adicional.

Este articulo profundiza en las maneras de añadir columnas _DataFrame_ en Python. Si quieres mas información de cómo utilizar Pandas en otras aplicaciones, puedes ir a: [Tutorial de Python Pandas]( https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning).

## Maneras de agregar DataFrames en Python
Existen diferentes formas de agregar columnas a un _DataFrame_ de Pandas en Python. A continuación se muestran 3 de las maneras mas comunes de realizar este proceso:
1.	Asignación directa: Se puede asignar un arreglo o lista a una columna con un nuevo nombre dentro del _DataFrame_. Hacer esto alinea automáticamente los datos basados en los índices del _DataFrame_
```py
import pandas as pd

# Crear un DataFrame 
data = {'Marca': ['Toyota', 'Ford', 'Tesla', 'Mitsubishi'],
        'Modelo': ['Hilux', 'Escape', 'Model S', 'Lancer']}
df = pd.DataFrame(data)

# Agregar una nueva columna al DataFrame
df['Año'] = ['2020', '2019', '2022', '2015']

print(df)

# Resultado esperado
#        Marca   Modelo   Version
#0      Toyota    Hilux  2020
#1        Ford   Escape  2019
#2       Tesla  Model S  2022
#3  Mitsubishi   Lancer  2015
```
2.	Método insert(): Este método permite agregar la columna en una posición especifica dentro del _DataFrame_. Es necesario proveer tanto el índice y el nombre de la columna.
```py
import pandas as pd

# Crear un DataFrame 
data = {'Marca': ['Toyota', 'Ford', 'Tesla', 'Mitsubishi'],
        'Modelo': ['Hilux', 'Escape', 'Model S', 'Lancer']}
df = pd.DataFrame(data)

# Agregar una nueva columna al DataFrame
version = ['2020', '2019', '2022', '2015']
df.insert(1, 'Version', version)

print(df)

# Resultado esperado
#        Marca Version   Modelo
#0      Toyota    2020    Hilux
#1        Ford    2019   Escape
#2       Tesla    2022  Model S
#3  Mitsubishi    2015   Lancer
```
3.	Método assign(): Este método genera un nuevo _DataFrame_ que incluye la columna que se agrega. Devuelve un nuevo objeto _DataFrame_ sin modificar el _DataFrame_ original.
```py
import pandas as pd

# Crear un DataFrame 
data = {'Marca': ['Toyota', 'Ford', 'Tesla', 'Mitsubishi'],
        'Modelo': ['Hilux', 'Escape', 'Model S', 'Lancer']}
df = pd.DataFrame(data)

# Agregar una nueva columna al DataFrame
version = ['2020', '2019', '2022', '2015']
df2 = df.assign(Version = version)

print(df2)

# Resultado esperado
#        Marca   Modelo   Version
#0      Toyota    Hilux  2020
#1        Ford   Escape  2019
#2       Tesla  Model S  2022
#3  Mitsubishi   Lancer  2015
```
## Casos de uso
Se tiene una lista de datos que lleva registro de una serie de errores ocurridos en los últimos 6 meses. Luego de validar los errores, se quiere documentar la severidad que tuvieron los errores en la operación, y controlar errores similares de cerca. Debido a que el _DataFrame_ actual no cuenta con la información adicional, se necesita crear una columna de datos para llevar registro de la información adicional.
Se quiere dejar el _DataFrame_ original sin editar.
```py
import pandas as pd

# Crear un DataFrame 
data = {Error: ['Toyota', 'Ford', 'Tesla', 'Mitsubishi'],
        'Fecha': ['1/2/2023', '26/2/2023', '4/4/2023', '6/22/2023']}
df = pd.DataFrame(data)

# Agregar una nueva columna al DataFrame
severidad = ['alta', 'media', 'alta', 'baja']
df2 = df.assign(Version = version)

print(df2)

# Resultado esperado
#        Error      Fecha Severidad
#0      Toyota   1/2/2023      alta
#1        Ford  26/2/2023     media
#2       Tesla   4/4/2023      alta
#3  Mitsubishi  6/22/2023      baja
```
Se utiliza el método ```assign()``` ya que se especifica que no se desea modificar el _DataFrame_ actual.
Por medio de esta asignación se puede generar una nueva columna que incluya información sobre la severidad del error.

Agregar columnas en los _DataFrame_ es muy importante ya que nos permite realizar modificaciones sobre conjuntos de datos ya existentes, y así poder llevar registro de información adicional a la que incluye el conjunto original.

