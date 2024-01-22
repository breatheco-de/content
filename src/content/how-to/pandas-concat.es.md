---
title: "¿Cómo usar el método concat de Pandas?"
subtitle: "Explora la funcionalidad del método 'concat' en Pandas para combinar DataFrames de manera eficiente. Aprende estrategias y casos de uso para optimizar la manipulación de datos en Python."
tags: ["Python", "Pandas"]
authors: [DF27ARTS]

---

El método `concat()` de [Pandas](https://4geeks.com/es/lesson/introduccion-a-pandas), es un método que nos permite concatenar objetos de Pandas (Series o DataFrames) a lo largo de un eje en particular. A continuación veremos un pequeño ejemplo sobre como funciona este método y cómo podemos utilizarlo para concatenar información.

```py
import pandas as pd

cliente_uno = pd.DataFrame({
    'Identificador': [1, 2, 3, 4, 5],
    'Nombre': ['James', 'Emma', 'Liam', 'Olivia', 'William'],
    'Edad': [25, 30, 22, 24, 32],
    'Email': ['james@email.com', 'emma@email.com', 'liam@email.com', 'olibia@email.com', 'william@email.com'],
    'Telefono': ['1234567890', '0987654321', '1230984567', '1234567893', '1237897654'],
})

clientes_dos = pd.DataFrame({
    'Identificador': [6, 7, 8, 9, 10],
    'Nombre': ['Jane', 'Henry', 'Alexander', 'Mia', 'Ava'],
    'Edad': [28, 35, 26, 27, 40],
    'Email': ['janet@gmail.com', 'henry@email.com', 'alexander@email.com', 'mia@gmail.com', 'ava@email.com'],
})

clientes_totales = pd.concat([cliente_uno, clientes_dos], ignore_index=True)
print(clientes_totales)
```

> output del código:

```bash
   Identificador     Nombre  Edad                Email    Telefono
0              1      James    25      james@email.com  1234567890
1              2       Emma    30       emma@email.com  0987654321
2              3       Liam    22       liam@email.com  1230984567
3              4     Olivia    24     olibia@email.com  1234567893
4              5    William    32    william@email.com  1237897654
5              6       Jane    28      janet@gmail.com         NaN
6              7      Henry    35      henry@email.com         NaN
7              8  Alexander    26  alexander@email.com         NaN
8              9        Mia    27        mia@gmail.com         NaN
9             10        Ava    40        ava@email.com         NaN
```

En este ejemplo tenemos dos diferentes Dataframes con las información de algunos clientes, el primer [Dataframe](https://4geeks.com/es/lesson/pandas-dataframe) contiene el **identificador**, el **nombre**, la **edad**, el **email** y el **telefono** de los usuarios y el segundo Dataframe contiene las mismas columnas excepto por el **telefono**. Para concatenar estos dos DataFrames en uno solo podemos hacer uso del método `concat()`, este método te permite concatenar dos objetos de Pandas a lo largo de cualquier eje, verticalmente u horizontalmente, en nuestro ejemplo concatenamos los dos Dataframes verticalmente y además puedes ver que al segundo Dataframe en la columna **Telefono** le coloca el valor de **NaN** ya que el primer DataFrame si tiene valores para esta columna pero el segundo no.

Pandas es una de las librerías de Python más utilizadas, especialmente en el campo de Machine Learning, si quieres aprender más sobre Pandas, te recomendamos estos ejercicios gratis sobre [Pandas para machine learning](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning).

## ¿Qué hace el método concat?

Pandas es una de las librerías más utilizadas de Python, y uno de sus métodos más importantes es el método [concat](https://pandas.pydata.org/docs/reference/api/pandas.concat.html), este método es una función que nos permite concatenar diferentes estructuras u objetos de Pandas como las **Series** o los **DataFrames** a lo largo de un eje específico. Esto significa que podemos unirlos con respecto a un eje vertical u horizontal según especifiquemos. Además, este método nos ofrece la posibilidad de aplicar una lógica de conjuntos al momento de realizar la concatenación, por ejemplo, podemos elegir si queremos incluir todas las etiquetas, solo las etiquetas comunes en los dos objetos, entre otras combinaciones.

## Parámetros que recibe el método concat

El método `concat()` puede recibir varios parámetros, a continuación veremos cuales son y como funcionan.

```py
dataframe_one.concat(
    objs, 
    axis=0, 
    join='outer', 
    ignore_index=False, 
    keys=None, 
    levels=None, 
    names=None, 
    verify_integrity=False, 
    sort=False, 
    copy=None
);
```

- `objs`: El parámetro (objs) es el parámetro que recibe una secuencia o mapeo de objetos (Series o Dataframes) que se van a concatenar. Si se pasa un mapeo, la claves ordenadas se utilizarán como el argumento **Keys** a menos que se pase un valor para este argumento, en cuyo caso se seleccionarán esos valores. Cualquier objeto `None` será descartado silenciosamente, a menos que todos sean `None`, en cuyo caso se generará un `ValueError`.
- `axis`: Es el argumento en el cual le puedes especificar al método en cual eje se debe hacer la concatenación, los valores  (0, 'index') se refiere al eje vertical (filas) y los valores (1, 'columns') se refiere al eje horizontal (columnas).
- `join`: Este parámetro determina el tipo de unión que se aplica a los ejes que no son el de concatenación. Por defecto es 'outer', que significa que se incluyen todas las etiquetas, aunque no sean comunes a todos los objetos. Si se especifica 'inner', se incluyen solo las etiquetas comunes a todos los objetos.
- `ignore_index`: Este parámetro es un valor booleano que indica si se debe ignorar el índice de los objetos originales y asignar uno nuevo al resultado de la concatenación. Por defecto es `False`, lo que significa que se mantiene el índice original. Si se especifica `True`, se ignora el índice original y se asigna uno nuevo numérico.
- `Keys`: Este parámetro representa una lista de etiquetas que se usan para crear un índice jerárquico en el resultado de la concatenación. Esto puede ser útil para identificar el origen de cada fila o columna.
- `levels`: Este parámetro recibe una lista de listas que especifica los niveles del índice jerárquico si se usa el argumento **Keys**. Por defecto es `None`, lo que significa que se usan los valores únicos de las etiquetas de `Keys` como niveles.
- `names`: Este parámetro recibe una lista de nombres que se asignan a los niveles del índice jerárquico si se usa el argumento `Keys`. Por defecto es `None`, lo que significa que no se asignan nombres a los niveles.
- `verify_integrity`: Este parámetro recibe un booleano que indica si se debe verificar que el resultado de la concatenación no tenga etiquetas duplicadas. por defecto es `false` lo que significa que no se verifica. Si se especifica `True`, se verifica y se lanza una excepción si hay etiquetas duplicadas.
- `sort`: Este parámetro recibe un booleano que indica si se debe ordenar alfabéticamente las etiquetas del eje que no es el de concatenación. Por defecto es `False`, lo que significa que no se ordenan. Si se especifica `True`, entonces si se ordenan.
- `copy`: Este parámetro recibe un valor booleano que indica si se deben copiar los datos de los objetos originales o no. Por defecto es `True`, lo que significa que se copian. Si se especifica `False`, se evita la copia si es posible.

## Ejemplos de uso

A continuación veremos algunos ejemplos de uso con el método `concat()` y varias de sus variaciones con **DataFrames** y **Series**.

### 1. Concatenar Dataframes por Filas (Verticalmente)

```py
import pandas as pd

users_us = pd.DataFrame({
    'User_id': [1, 2, 3, 4, 5],
    'Username': ['Alice', 'Bob', 'Charlie', 'Jane', 'Thomas'],
    'Age': [25, 30, 22, 24, 34]
})

users_mx = pd.DataFrame({
    'User_id': [6, 7, 8],
    'Username': ['Axel', 'Camilo', 'Ariana'],
    'Age': [28, 35, 26]
})

all_users = pd.concat([users_us, users_mx], ignore_index=True)
print(all_users)
```

> output del código:

```bash
   User_id Username  Age
0        1    Alice   25
1        2      Bob   30
2        3  Charlie   22
3        4     Jane   24
4        5   Thomas   34
5        6     Axel   28
6        7   Camilo   35
7        8   Ariana   26
```

En este ejemplo tenemos dos Dataframes, el primero es un Dataframe de usuarios de **US** (United States) y el segundo es un Dataframe de usuarios de **MX** (México). Para concatenar los dos Dataframes de usuarios utilizamos el método `concat()` y le pasamos los dos Dataframes en una [lista](https://4geeks.com/es/lesson/what-is-a-python-list-es), esto creará un nuevo Dataframes con la información de todos los usuarios.

### 2. Concatenar Dataframes por Columnas (Horizontalmente)

```py
import pandas as pd

countries_america = pd.DataFrame({
    'Country_code': ['USA', 'CAN', 'MX', "COL"],
    'Population': [330, 29, 38, 67]
})

countries_europe = pd.DataFrame({
    'Country_code': ['GER', 'FRA', 'ITA'],
    'Population': [83, 67, 60]
})

countries_asia = pd.DataFrame({
    'Country_code': ['CN', 'IN', 'JP'],
    'Population': [57, 77, 63]
})

all_countries = pd.concat([countries_america, countries_europe, countries_asia], axis=1)
print(all_countries)
```

> output del código:

```bash
  Country_code  Population Country_code  Population Country_code  Population
0          USA         330          GER        83.0           CN        57.0
1          CAN          29          FRA        67.0           IN        77.0
2           MX          38          ITA        60.0           JP        63.0
3          COL          67          NaN         NaN          NaN         NaN
```

En este ejemplo tenemos tres diferentes Dataframes, el primero contiene algunos países de America, el segundo países de Europa y el tercero países de Asia. Para concatenar estos tres Dataframes horizontalmente, simplemente necesitamos usar el método `concat()` con dos parámetros, el primero son los tres Dataframe dentro de una lista y el segundo parámetro es `axis=1` que le indica al método que tiene que hacer la concatenación horizontalmente.

### 3. Concatenar Dataframes con claves de nivel superior (MultiIndex)

```py
import pandas as pd

countries_america = pd.DataFrame({
    'Country_code': ['USA', 'CAN', 'MX', "COL"],
    'Population': [330, 29, 38, 67]
})

countries_europe = pd.DataFrame({
    'Country_code': ['GER', 'FRA', 'ITA'],
    'Population': [83, 67, 60]
})

countries_asia = pd.DataFrame({
    'Country_code': ['CN', 'IN', 'JP'],
    'Population': [57, 77, 63]
})

all_countries = pd.concat([countries_america, countries_europe, countries_asia], keys=['America', 'Europa', 'Asia'])
print(all_countries)
```

> output del código:

```bash
          Country_code  Population
America 0          USA         330
        1          CAN          29
        2           MX          38
        3          COL          67
Europa  0          GER          83
        1          FRA          67
        2          ITA          60
Asia    0           CN          57
        1           IN          77
        2           JP          63
```

En este ejemplo tenemos un set de Dataframes similar al ejemplo anterior, pero en este caso queremos concatenarlos verticalmente y colocarle una key a cada uno de ellos. Para esto, simplemente debemos pasarle al método `concat()` la lista de Dataframes y además el parámetro `keys` con una lista que contine las keys para cada uno de los Dataframes.

### 4. Concatenar Series a lo largo de las filas.

```py
import pandas as pd

user_ids_uno = pd.Series([1, 2, 3, 4, 5], name='User_id')
user_ids_two = pd.Series([6, 7, 8, 9, 10], name='User_id')

all_users = pd.concat([user_ids_uno, user_ids_two], ignore_index=True)

print(all_users)
```

> output del código:

```bash
0     1
1     2
2     3
3     4
4     5
5     6
6     7
7     8
8     9
9    10
Name: User_id, dtype: int64
```

El método `concat()` también nos permite concatenar Series. En este ejemplo tenemos dos Series con el id de varios usuarios y para concatenarlos simplemente necesitamos utilizar el método `concat()` y pasarle la lista de Series que queremos concatenar, también puedes utilizar los demás parámetros para modificar la concatenación según tus necesidades.

Estos son solo algunos ejemplos de uso con el método `concat()`, pero existen muchísimos más, como vimos en la sección de parámetros este método puede recibir bastantes configuraciones que te permiten modificar la concatenación de los objetos de Pandas según tus necesidades.

## Conclusión

El método `concat()` es uno de los métodos más interesantes de la librería de Pandas, este método te permite concatenar dos objetos de Pandas, como Series o Dataframes a lo largo de un eje específico (Vertical u Horizontal). En este artículo hemos visto cómo funciona este método, además de los parámetros que recibe y también algunos ejemplos de uso comunes que te ayudarán a entender mejor este método.

Espero que este artículo te haya sido de utilidad, recuerda practicar tanto como puedas ya que la mejor forma de aprender a trabajar con cualquier tecnología es practicar y resolver problemas con ella. Si quieres llevar tus habilidades de programación con Python y Pandas al siguiente nivel, te invito a que realices el tutorial gratis de [Pandas para Machine Learning](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning) de 4Geeks, donde aprenderás más conceptos acerca de Python y Pandas, dos recursos escenciales para cualquier desarrollador. Para explorar más sobre Pandas y análisis de datos, y para llevar tus habilidades al siguiente nivel, te invitamos a [registrarte de forma gratuita](https://4geeks.com/es/pricing) en 4Geeks.com.
