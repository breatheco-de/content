---
title: "Ejemplos de Python Pandas"
subtitle: "Explora ejemplos prácticos del uso de Pandas en Python. Aprende cómo realizar manipulaciones de datos y análisis utilizando esta librería."
tags: ["Python", "Pandas"]
authors: [tommygonzaleza]

---

Pandas es una librería de Python que te permite manipular, transformar y visualizar datos de una manera muy eficiente. Esta librería ofrece varias estructuras de datos, una de las más populares es el [DataFrame](https://4geeks.com/es/lesson/pandas-dataframe) con el que puedes representar en filas y columnas un conjunto de información. Si quieres practicar Pandas con ejercicios prácticos de manera instantánea, y con tests automatizados, te recomendamos este [tutorial de pandas para machine learning](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning) gratis. En el siguiente ejemplo veremos cómo utilizar los métodos de esta librería y cómo pueden ayudarte a visualizar la información de una forma más clara e intuitiva. Aquí un breve ejemplo sobre cómo un uso básico de un DataFrame.

```py runable=true
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

Para poder utilizar la librería de Pandas en tu entorno de trabajo primero necesitas importar el módulo de Pandas, puedes hacerlo con la siguiente sintaxis `import pandas as pd`, es una buena práctica importar el módulo con el alias de `pd` pero esto último es opcional. Después creamos un dataset de información con la ayuda de la clase de Pandas `DataFrame()`, la cual recibe como argumento un objeto que contiene las columnas para el DataFrame y cada columna debe contener un array con los valores para esa columna. Luego buscamos todos los usuarios que sean mayores de 18 años y los guardamos en la variable `mayores_de_edad`, por último imprimimos estos usuarios en la consola. Este es un pequeño ejemplo sobre como puedes usar los métodos de pandas para visualizar y organizar un conjunto de información.

## Ejemplos de uso más comunes

La librería de [pandas](https://4geeks.com/es/lesson/pandas-en-python) tiene múltiples casos de uso, desde modificar los valores de un conjunto de elementos hasta realizar el proceso de limpieza de datos en áreas como en la ciencia de datos o en el machine learning. A continuación veremos algunos de los casos de uso más frecuentes.

### 1. Modificar datos

Uno de los usos más comunes de la librería de pandas es para modificar los campos de un dataset de información, en el siguiente ejemplo veremos como podemos modificar una de las columnas de un DataFrame de usuarios con ayuda de los métodos de pandas.

```py runable=true
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
    numeros_modificados = numeros.replace("-", "")
    return f"({numeros_modificados[0:3]}) {numeros_modificados[3:6]}-{numeros_modificados[6:]}"

usuarios_df["Telefono"] = usuarios_df["Telefono"].apply(modificar_sintaxis)
print(usuarios_df)
```

Como puedes ver, modificar los elementos de un conjunto de datos es muy sencillo con ayuda de pandas, en este ejemplo, hacemos uso del método [apply de pandas](https://4geeks.com/es/how-to/pandas-apply) para aplicar una función a todos los elementos de la columna `Telefono` y modificar su sintaxis, este método también puede recibir una función **lambda** para realizar los cambios en la columna.

### 2. Ordenar datos

También puedes utilizar métodos de pandas para ordenar un conjunto de datos, a continuación veremos un pequeño ejemplo.

```py runable=true
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

En este ejemplo tenemos un DataFrame con información de varios usuarios, para poder ordenar este DataFrame en base a la edad de los usuarios debemos hacer uso del método [sort_values](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sort_values.html#pandas.DataFrame.sort_values) de pandas, este método nos permite organizar la columna de un DataFrame con ayuda del parámetro `by` que le indica al método la columna que debe ordenar, además puede recibir el parámetro `ascending` que recibe un valor booleano y determina si se debe realizar la ordenación de forma ascendente o descendente.

### 3. Agregar nuevos datos

Con los métodos de pandas también puedes agregar nuevas columnas junto con sus valores a un DataFrame de información.

```py runable=true
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

En este ejemplo, tenemos un DataFrame de usuarios al cual le agregamos la columna `Nombre Completo`, para esto simplemente necesitamos combinar las columnas `Nombre` y `Apellido` en una sola. También puedes agregar más columnas con nueva información pero recuerda que debe tener la misma cantidad de filas que las demás columnas de lo contrario te arrojará un error en la consola.

### 4. Limpieza de datos

Otro uso bastante común de la librería de pandas es la limpieza de datos en data science o en machine learning. En el siguiente ejemplo veremos un poco más a fondo este concepto:

```py runable=true
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

En este DataFrame de usuarios tenemos varias filas con el valor `None` y además tenemos una fila duplicada lo puede complicar el proceso de análisis con estos datos, para solucionar esto debemos hacer lo que se conoce como limpieza de datos (Data Cleaning) como se muestra en el siguiente código:

```py runable=true
usuarios_df = usuarios_df.drop_duplicates()
usuarios_df = usuarios_df.dropna()
usuarios_df["Nombre"] = usuarios_df["Nombre"].apply(lambda nombre: nombre.capitalize())

print(usuarios_df)
```

En este ejemplo, primero utilizamos el método [drop_duplicates](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html) esto eliminará todas las filas que estén duplicadas dentro del DataFrame, después utilizamos el método [dropna](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dropna.html) que elimina todas las filas que tengan el valor de `None` y por último, algunas filas en la columna **Nombre** empiezan con una letra minúscula lo cual no coincide con el resto de las filas y columnas, para solucionar esto hacemos uso del método [capitalize](https://docs.python.org/es/3/library/stdtypes.html?highlight=capitalize#str.capitalize) y de esta forma organizar todas las filas y columnas con una sola sintaxis. Ahora ya tenemos un DataFrame mucho más organizado y listo para utilizarse en cualquier tipo de análisis.

## Conclusión

En este artículo, hemos explorado una variedad de ejemplos prácticos que abarcan desde la modificación y ordenamiento de datos hasta la limpieza y agregación de información utilizando Pandas en Python. Te alentamos a seguir explorando y experimentando con Pandas para descubrir aún más posibilidades y mejorar tus habilidades en el análisis de datos. Para continuar tu viaje de aprendizaje en Python, Pandas y análisis de datos, te invitamos a probar nuestro self-paced bootcamp de [ciencia de datos y machine learning](https://4geeks.com/es/bootcamp/data-science-and-ml) en 4Geeks.com, donde podrás adquirir todos los conocimientos y habilidades para poder conseguir tu primer trabajo como científico de datos!
