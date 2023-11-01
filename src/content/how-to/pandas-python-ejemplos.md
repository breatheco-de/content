

## Librería Pandas Ejemplos

Pandas es una librería de Python que te permite manipular, transformar y visualizar datos de una manera muy eficiente. Esta librería ofrece varias estructuras de datos, una de las más populares es el **DataFrame** con el que puedes representar en filas y columnas un conjunto de información. En el siguiente ejemplo veremos cómo utilizar los métodos de esta librería y como pueden ayudarte a visualizar la información de una forma más clara e intuitiva.

```py
import pandas as pd

usuarios = {
    "Nombre": ["Juan", "María", "Carlos", "Ana", "Luis"],
    "Apellido": ["Gómez", "López", "Rodríguez", "Pérez", "Martínez"],
    "Email": ["juan@example.com", "maria@example.com", "carlos@example.com", "ana@example.com", "luis@example.com"],
    "Telefono": ["123-123-4567", "456-987-6543", "789-567-8901", "654-234-5678", "963-678-9012"],
    "Edad": [12, 27, 22, 30, 16]
}

usuarios_df = pd.DataFrame(usuarios)
mayores_de_edad = usuarios_df[usuarios_df["Edad"] >= 18]

print(mayores_de_edad)
```
> output del código:
```bash
   Nombre   Apellido               Email      Telefono  Edad
1   María      López   maria@example.com  456-987-6543    27
2  Carlos  Rodríguez  carlos@example.com  789-567-8901    22
3     Ana      Pérez     ana@example.com  654-234-5678    30
```

Para poder utilizar la librería de Pandas en tu entorno de trabajo primero necesitas importar el módulo de Pandas, puedes hacerlo con la siguiente sintaxis `import pandas as pd`, es una buena práctica importar el módulo con el alias de `pd` pero esto último es opcional. Despues creamos un dataset de información con la ayuda del método de Pandas `DataFrame()` este método recibe como argumento un objeto que contiene las columnas para el dataframe y cada columna debe contener un array con los valores para esa columna. Luego buscamos todos los usuarios que sean mayores de 18 años y los guardamos en la variable `mayores_de_edad`, por último imprimimos estos usuarios en la consola. Este es un pequeño ejemplo sobre como puedes usar los métodos de pandas para visualizar y organizar un conjunto de información.

## Ejemplos de uso más comunes

La librería de pandas tiene múltiples casos de uso, desde modificar los valores de un conjunto de elementos hasta realizar el proceso de limpieza de datos en áreas como en la ciencia de datos o en el machine learning. A continuación veremos algunos de los casos de uso más frecuentes.

### 1. Modificar datos

Uno de los usos más comunes de la librería de pandas es para modificar los campos de un dataset de información, en el siguiente ejemplo veremos como podemos modificar una de las columnas de un dataframe de usuarios con ayuda de los métodos de pandas.

```py
import pandas as pd

usuarios = {
    "Nombre": ["Juan", "María", "Carlos", "Ana", "Luis"],
    "Apellido": ["Gómez", "López", "Rodríguez", "Pérez", "Martínez"],
    "Email": ["juan@example.com", "maria@example.com", "carlos@example.com", "ana@example.com", "luis@example.com"],
    "Telefono": ["123-123-4567", "456-987-6543", "789-567-8901", "654-234-5678", "963-678-9012"],
    "Edad": [12, 27, 22, 30, 16]
}

usuarios_df = pd.DataFrame(usuarios)

def modificar_sintaxis(numeros):
    numeros = numeros.replace("-", "")
    return f"({numeros[0:3]}) {numeros[3:6]}-{numeros[6:]}"

usuarios_df["Telefono"] = usuarios_df["Telefono"].apply(modificar_sintaxis)
print(usuarios_df)
```
> output del código:
```bash
   Nombre   Apellido               Email        Telefono  Edad
0    Juan      Gómez    juan@example.com  (123) 123-4567    12
1   María      López   maria@example.com  (456) 987-6543    27
2  Carlos  Rodríguez  carlos@example.com  (789) 567-8901    22
3     Ana      Pérez     ana@example.com  (654) 234-5678    30
4    Luis   Martínez    luis@example.com  (963) 678-9012    16
```

Como puedes ver, modificar los elementos de una conjunto de datos es muy sencillo con ayuda de pandas, en este ejemplo, hacemos uso del método [apply](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.apply.html) de pandas para aplicar una función a la columna `Telefono` y modificar su sintaxis, este método también puede recibir una función **lambda** para realizar los cambios en la columna.

### 2. Ordenar datos

También puedes utilizar métodos de pandas para ordenar un conjunto de datos, a continuación veremos un pequeño ejemplo.

```py
import pandas as pd

usuarios = {
    "Nombre": ["Juan", "María", "Carlos", "Ana", "Luis"],
    "Apellido": ["Gómez", "López", "Rodríguez", "Pérez", "Martínez"],
    "Email": ["juan@example.com", "maria@example.com", "carlos@example.com", "ana@example.com", "luis@example.com"],
    "Telefono": ["123-123-4567", "456-987-6543", "789-567-8901", "654-234-5678", "963-678-9012"],
    "Edad": [12, 27, 22, 30, 16]
}

usuarios_df = pd.DataFrame(usuarios)

df_ordenado = usuarios_df.sort_values(by='Edad', ascending=False)
print(df_ordenado)
```
> output del código:
```bash
   Nombre   Apellido               Email      Telefono  Edad
3     Ana      Pérez     ana@example.com  654-234-5678    30
1   María      López   maria@example.com  456-987-6543    27
2  Carlos  Rodríguez  carlos@example.com  789-567-8901    22
4    Luis   Martínez    luis@example.com  963-678-9012    16
0    Juan      Gómez    juan@example.com  123-123-4567    12
```

En este ejemplo tenemos un dataframe con información de varios usuarios, para poder ordenar este dataframe en base a la edad de los usuarios debemos hacer uso del método [sort_values](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sort_values.html#pandas.DataFrame.sort_values) de pandas, este método nos permite organizar la columna de un dataframe con ayuda del parámetro `by` que le indica al método la columna que debe ordenar, además puede recibir el parámetro `ascending` que recibe un valor booleano y determina si se debe realizar la ordenación de forma ascendente o descendente.

### 3. Agregar nuevos datos

Con los métodos de pandas también puedes agregar nuevas columnas junto con sus valores a un dataset de información.

```py
import pandas as pd

usuarios = {
    "Nombre": ["Juan", "María", "Carlos", "Ana", "Luis"],
    "Apellido": ["Gómez", "López", "Rodríguez", "Pérez", "Martínez"],
    "Email": ["juan@example.com", "maria@example.com", "carlos@example.com", "ana@example.com", "luis@example.com"],
    "Telefono": ["123-123-4567", "456-987-6543", "789-567-8901", "654-234-5678", "963-678-9012"],
    "Edad": [12, 27, 22, 30, 16]
}

usuarios_df = pd.DataFrame(usuarios)
usuarios_df["Nombre Completo"] = usuarios_df["Nombre"] + " " + usuarios_df["Apellido"]

print(usuarios_df)
```
> output del código:
```bash
   Nombre   Apellido               Email      Telefono  Edad   Nombre Completo
0    Juan      Gómez    juan@example.com  123-123-4567    12        Juan Gómez
1   María      López   maria@example.com  456-987-6543    27       María López
2  Carlos  Rodríguez  carlos@example.com  789-567-8901    22  Carlos Rodríguez
3     Ana      Pérez     ana@example.com  654-234-5678    30         Ana Pérez
4    Luis   Martínez    luis@example.com  963-678-9012    16     Luis Martínez
```

En este ejemplo, tenemos un dataframe de usuarios y a este data frame le agregamos la columna `Nombre Completo`, para esto simplemente necesitamos combinar las columnas `Nombre` y `Apellido` en una sola. También puedes agregar más columnas con nueva información pero recuerda que debe tener la misma cantidad de filas que las demás columnas de lo contrario te arrojará un error en la consola.

### 4. Limpieza de datos

Otro uso bastante común para la librería de pandas es la limpieza de datos en data science o en machine learning. En el siguiente ejemplo veremos un poco más a fondo este concepto:

```py
import pandas as pd

usuarios = {
    "Nombre": ["juan", "María", "Carlos", "ana", "luis", "ana"],
    "Apellido": ["Gómez", "López", None, "Pérez", "Martínez", "Pérez"],
    "Email": ["juan@example.com", "maria@example.com", "carlos@example.com", "ana@example.com", "luis@example.com", "ana@example.com"],
    "Telefono": ["123-123-4567", "456-987-6543", None, "654-234-5678", "963-678-9012", "654-234-5678"],
    "Edad": [12, 27, 22, 30, 16, 30],
}

usuarios_df = pd.DataFrame(usuarios)
print(usuarios_df)
```
> output del código:
```bash
   Nombre  Apellido               Email      Telefono  Edad
0    juan     Gómez    juan@example.com  123-123-4567    12
1   María     López   maria@example.com  456-987-6543    27
2  Carlos      None  carlos@example.com          None    22
3     ana     Pérez     ana@example.com  654-234-5678    30
4    luis  Martínez    luis@example.com  963-678-9012    16
5     ana     Pérez     ana@example.com  654-234-5678    30
```

En este dataframe de usuarios tenemos varias filas con el valor `None` y además tenemos una fila duplicada lo puede complicar el proceso de análisis con estos datos, para solucionar esto debemos hacer lo que se conoce como limpieza de datos (Data Cleaning) como se muestra en el siguiente código:

```py
usuarios_df = usuarios_df.drop_duplicates()
usuarios_df = usuarios_df.dropna()
usuarios_df["Nombre"] = usuarios_df["Nombre"].apply(lambda nombre: nombre.capitalize())

print(usuarios_df)
```
> output del código:
```bash
  Nombre  Apellido              Email      Telefono  Edad
0   Juan     Gómez   juan@example.com  123-123-4567    12
1  María     López  maria@example.com  456-987-6543    27
3    Ana     Pérez    ana@example.com  654-234-5678    30
4   Luis  Martínez   luis@example.com  963-678-9012    16
```

En este ejemplo, primero utilizamos el método [drop_duplicates](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html) esto eliminará todas las filas que estén duplicadas dentro del dataframe, después utilizamos el método [dropna](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dropna.html) que elimina todas las filas que tengan el valor de `None` y por último, algunas filas en la columna **Nombre** empiezan con una letra minúscula lo cual no coincide con el resto de las filas y columnas, para solucionar esto hacemos uso del método [capitalize](https://docs.python.org/es/3/library/stdtypes.html?highlight=capitalize#str.capitalize) y de esta forma organizar todas las filas y columnas con una sola sintaxis. Ahora ya tenemos un dataframe mucho más organizado y listo para utilizarse en cualquier tipo de análisis.

## Conclusión

La libreria de [pandas](https://pandas.pydata.org/docs/) es una herramienta esencial para cualquier programador ya sea que estés trabajando en la ciencia de datos, en machine learning o incluso en otras áreas de la programación esta librería te será muy útil para manipular y analizar grandes conjuntos de datos, además puedes combinarla junto con otras librerías como [numpy](https://numpy.org/doc/stable/) o [matplotlib](https://matplotlib.org/stable/index.html) para manipular y visualizar datos de una manera mucho más profesional.

Si te intereza conocer más hacerca de la librería de pandas te recomiendo que visites la pagina [pandas para machine learing](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning) de 4Geeks donde aprenderás los conceptos basicos hacerca de esta libreria y algunos de sus usos más importantes. Espero que este artículo te haya sido de utilidad, recuerda seguir practicando tus habilidades con esta librería y la dominarás en muy poco tiempo.

¡Diviértete en tu ruta de aprendizaje! 😉👋
