---
title: "¿Cómo usar el método drop de Pandas?"
subtitle: "Aprende a utilizar el método drop de Pandas en Python para eliminar columnas o filas de un DataFrame. Explora ejemplos y técnicas para aprovechar al máximo este poderoso método de Pandas."
tags: ["Python", "Pandas"]
authors: [df27arts]

---

[Pandas](https://4geeks.com/es/lesson/pandas-en-python) es una de las librerías más importantes a la hora de trabajar en la ciencia de datos o machine learning (Si te interesa aprender pandas desde cero, tenemos este [tutorial de pandas para machine learning](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning)), una de las estructuras más importantes que ofrece Pandas en el [DataFrame](https://4geeks.com/es/lesson/pandas-dataframe) que representa una tabla bidimensional de filas y columnas. Uno de los métodos de Pandas más importantes para trabajar con un **DataFrame** es el método [drop](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop.html) que nos permite eliminar filas o columnas innecesarias de esta estructura, a continuación veremos un pequeño ejemplo.

```py
import pandas as pd

users_df = pd.DataFrame({
    "Nombre": ["John", "Mary", "Jane"],
    "Apellido": ["Smith", "Johnson", "Brown"], 
    "Edad": [25, 30, 35],
})

drop_column = users_df.drop(columns="Apellido")
drop_row = users_df.drop(index=0)

print(drop_column)
print(drop_row)
```
> output del código: 
```bash
  Nombre  Edad
0   John    25
1   Mary    30
2   Jane    35

  Nombre Apellido  Edad
1   Mary  Johnson    30
2   Jane    Brown    35
```

En este ejemplo, creamos un **DataFrame** con tres columnas **Nombre**, **Apellido** y **Edad** y tres usuarios, luego con la ayuda del método `drop()` eliminamos la columna **Apellido** pasándole como argumento `columns="Apellido"`, también podemos eliminar la primera fila del **DataFrame** pasandole el argumento `index=0`. Cómo vemos este es un pequeño ejemplo sobre cómo eliminar filas o columnas dentro de un **DataFrame** con ayuda del método `drop()`, este método puede recibir varios argumentos los cuales veremos en más detalle a continuación.

## Conceptos básicos del método drop() de pandas

El método `drop()` de Pandas nos permite eliminar las filas o las columnas de un `DataFrame` de información, este método puede recibir varios argumentos que permiten especificar el tipo y la cantidad de estructuras que deseas eliminar. A continuación veremos cuales son los parámetros que recibe y los valores que puede retornar:

```py
data_frame.drop(labels, axis, index, columns, level, inplace, errors)
```

**Parámetros del método drop**:

- `labels`: (opcional), representa las etiquetas o índices a eliminar, si deseas eliminar varias debes especificarlas en una lista.
- `axis`: (opcional) especifica si deseas eliminar etiquetas o columnas, si deseas eliminar etiquetas debes pasarle como valor (0 o 'index') y si deseas eliminar columns debes pasarle (1 o 'columns'), este parámetro tiene un valor por defecto de 0.
- `index`: (opcional) este parámetro representa el nombre de la fila o las filas a eliminar. Puede ser usado en lugar del parámetro `labels`.
- `columns` (opcional) representa el nombre de la columna o columnas a eliminar. Puede ser usado en lugar del parámetro `labels`.
- `level` (opcional) este parámetro especifica qué nivel debe comprobarse en una jerarquía multi índice. Tiene un valor por defecto de `None`.
- `inplace`: (opcional) si el valor de este parámetro es `True` se realiza la eliminación deseada y se modifica el `DataFrame` original pero si el valor es `False` retorna una copia del `DataFrame` original con la eliminación deseada, por defecto tiene un valor de `False`.
- `errors`: (opcional) este parámetro puede recibir dos valores ('ignore', 'raise'), el valor 'ignore' suprime los error y elimina sólo las etiquetas existentes pero si el valor es 'raise' detiene la eliminación de etiquetas si alguna de ellas no existe, el valor por defecto es 'raise'.

**Valores que Retorna**: 

Este método retorna por defecto una copia del `Dataframe` original con las eliminaciones realizadas,  pero si el parámetro `inplace` tiene el valor de `True` este método retorna `None` y modifica el `DataFrame` original.

**Errores que puede arrojar**:

Este método retorna un error de tipo **KeyError** si alguna de las etiquetas no existe dentro del `DataFrame` especificado, pero el error se puede ignorar si le pasamos el parámetro `errors` con el valor de 'ignore'.

## Eliminación de Columnas

A continuación veremos algunos ejemplos sobre cómo utilizar el método `drop()` de Pandas para eliminar columnas innecesarias en un `DataFrame`, veremos cómo eliminar una columna en particular, cómo eliminar varias columnas y cómo eliminar una columna dependiendo de una condición.

### Eliminar una sola columna por nombre

Para eliminar una sola columna podemos usar el método `drop()` con el parámetro `columns` y le pasamos el nombre de la columna, ejemplo:

```py
import pandas as pd

users_df = pd.DataFrame({
    "Nombre": ["John", "Mary", "Jane"],
    "Apellido": ["Smith", "Johnson", "Brown"],
    "Email": ["jhon@email.com", "mary@email.com", "jane@email.com"],
    "Telefono": [123_456_7890, 456_123_7890, 789_456_1230]
})

users_df.drop(columns="Telefono", inplace=True)
print(users_df)
```
> code output:
```bash
  Nombre Apellido           Email
0   John    Smith  jhon@email.com
1   Mary  Johnson  mary@email.com
2   Jane    Brown  jane@email.com
```

Cómo puedes ver, eliminar una solo columna dentro de un `DataFrame` es muy sensillo gracias al método `drop()`, en este ejemplo le pasamos el parámetro `columns` con el nombre de la columna que deseamos eliminar, la columna `Telefono` tambien le pasamos el parámetro `inplace` con el valor de `True` para que modifique el `DataFrame` original.

### Eliminar múltiples columnas

Para eliminar múltiples columnas también es bastante sencillo con ayuda del  método `drop()`, para poder eliminar varias columnas necesitamos pasarle una lista con el nombre de las columnas, ejemplo:

```py
import pandas as pd

users_df = pd.DataFrame({
    "Nombre": ["John", "Mary", "Jane"],
    "Apellido": ["Smith", "Johnson", "Brown"],
    "Email": ["jhon@email.com", "mary@email.com", "jane@email.com"],
    "Telefono": [123_456_7890, 456_123_7890, 789_456_1230]
})

users_df.drop(columns=["Apellido", "Telefono"], inplace=True)
print(users_df)
```
> code output: 
```bash
  Nombre           Email
0   John  jhon@email.com
1   Mary  mary@email.com
2   Jane  jane@email.com
```

En este ejemplo, para poder eliminar varias columnas necesitamos pasarle el parámetro `columns` y cómo valor le pasamos una lista con los nombres de las columnas que deseamos eliminar, también le pasamos el parámetro `inplace` con el valor de `True` para que modifique el `DataFrame` original.

### Eliminar columnas basadas en una condición

Para eliminar columnas basadas en una condición podemos hacerlo de varias formas, a continuación veremos una de ellas con un pequeño ejemplo.

```py
import pandas as pd

users_df = pd.DataFrame({
    "Nombre": ["John", "Mary", "Jane"],
    "Apellido": ["Smith", "Johnson", "Brown"],
    "Edad": [23, 45, 30],
    "Email": ["jhon@email.com", "mary@email.com", "jane@email.com"],
    "Telefono": [123_456_7890, 456_123_7890, 789_456_1230]
})

columnas_innecesarias = [
    column for column in users_df.columns 
    if column  != "Nombre" and column != "Apellido"
]

users_df.drop(columns=columnas_innecesarias, inplace=True)
print(users_df)
```
> code output: 
```bash
  Nombre Apellido
0   John    Smith
1   Mary  Johnson
2   Jane    Brown
```

En este ejemplo, queremos dejar en el `DataFrame` de `users_df` solo las columnas **Nombre** y **Apellido** y eliminar el resto de columnas, para esto hacemos uso de una list comprehension para recorrer todas las columnas y utilizamos un condicional `if` para verificar que agregue en la lista todas las columnas que no sean **Nombre** y **Apellido** y guardamos el resultado en la variable `columnas_innecesarias`, luego simplemente llamamos al método `drop()` y le pasamos esa lista cómo valor al parámetro `columns` además también le pasamos el parámetro `inplace` con el valor de `True` para que modifique el `DataFrame` original.

## Uso de la opción inplace

Cómo hemos visto en los ejemplos anteriores, el método `drop()` tiene un parámetro llamado `inplace` que permite modificar el `DataFrame` original o devolver una copia modificada. El valor por defecto de este parámetro es `False`, lo que significa que el método `drop()` no cambia el `DataFrame` original, sino que devuelve un nuevo `DataFrame` sin las  columnas eliminadas. Si queremos guardar los cambios en el DataFrame original, debemos especificar el valor de `inplace=True`.

El uso de la opción inplace tiene algunas ventajas y desventajas que debemos tener en cuanta a la hora de utilizarla:

- **Ventajas**:
    - Ahorra memoria al no crear un nuevo objeto.
    - Evita confusiones al tener un solo `DataFrame` modificado.
    - Simplifica el código al no tener que asignar el resultado a una nueva variable.

- **Desventajas**:
    - Pérdida de datos: si se utiliza `inplace=True` y más tarde te das cuenta de que cometiste un error, los datos originales pueden estar perdidos y no podrás recuperarlos fácilmente.
    - Puede causar errores si se intenta usár el método `drop()` sobre un DataFrame que ya ha sido modificado con `inplace=True`.

En general, se recomienda usar la opción `inplace` con precaución y sólo cuando sea necesario. Una buena práctica es hacer una copia del DataFrame original antes de modificarlo con la opción `inplace=True`, en caso de ser necesario recuperar los datos originales.

## Conclusión

En este artículo aprendimos cómo eliminar las columnas de un DataFrame haciendo uso del método `drop()` de la librería de Pandas, vimos cómo eliminar una tabla en particular, cómo eliminar varias tablas pasándolas en una lista y como eliminar tablas dependiendo de una condición también vimos los parámetros que recibe este método y cómo podemos identificar cuáles columnas debemos eliminar en un DataFrame, además vimos algunos conceptos básicos con pequeños ejemplos de código. 

Te animo a que sigas practicado con este método y que intentes utilizarlo en casos más complejos ya que este método es muy importante para trabajar con DataFrames, es esencial a la hora de trabajar en la ciencia de datos o machine learning. Te invitamos a explorar el curso de [Data Science y Machine Learning](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning?lang=es) de 4Geeks Academy, donde aprenderás desde los conceptos básicos de machine learning, hasta convertirte en un experto en el manejo y análisis de datos. También puedes chequear nuestro blog para mejorar tus habilidades en Python y análisis de datos. Si deseas llevar tu aprendizaje al siguiente nivel, te animamos a [registrarte de forma totalmente gratuita](https://4geeks.com/es/pricing) en 4Geeks.com.

¡Diviértete aprendiendo! 😉👋
