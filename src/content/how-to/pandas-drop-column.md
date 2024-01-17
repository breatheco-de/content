
## ¿Cómo hacer drop de una columna en Pandas?

Existen diferentes formas para eliminar una columna de un Dataframe, a continuación veremos un pequeño ejemplo utilizando el método `drop()` de la librería de Pandas.

```py
import pandas as pd

usuarios = pd.DataFrame({
    'Usuario_ID': [101, 102, 103, 104, 105],
    'Nombre_de_usuario': ['Alice_Wonder', 'Bob_Explorer', 'Charlie_Coder', 'David_DataGeek', 'Eve_Adventurer'],
    'Edad': [28, 35, 22, 29, 31],
    'Genero': ['Female', 'Male', 'Male', 'Male', 'Female'],
    'Pais': ['USA', 'Canada', 'UK', 'Australia', 'Netherlands'],
    'Suscripcion': ['Premium', 'Free', 'Premium', 'Free', 'Free'],
    'Ultima_conexion': ['2023-01-10', '2023-01-09', '2023-01-11', '2023-01-08', '2023-01-10']
})

usuarios_actualizados = usuarios.drop(columns='Ultima_conexion')
print(usuarios_actualizados)
```
> output del código:
```bash
   Usuario_ID Nombre_de_usuario  Edad  Genero         Pais Suscripcion
0         101      Alice_Wonder    28  Female          USA     Premium
1         102      Bob_Explorer    35    Male       Canada        Free
2         103     Charlie_Coder    22    Male           UK     Premium
3         104    David_DataGeek    29    Male    Australia        Free
4         105    Eve_Adventurer    31  Female  Netherlands        Free
```

En este ejemplo tenemos un Dataframe con la información de los usuarios de una aplicación y queremos eliminar la columna **Ultima_conexion**, para esto simplemente podemos hacer uso del método `drop()` y pasarle el parámetro `columns` junto con el nombre de la columna que necesitamos eliminar, este método retorna una copia del Dataframe original con la columna eliminada.

## Diferentes formas de eliminar un columna

Existen diferentes formas de eliminar una columna de un Dataframe en Python, algunas pueden ser más eficientes que otras dependiendo de la situación. A continuación veremos algunas de las más utilizadas y eliminaremos algunas de las columnas del siguiente Daraframe.

```py
import pandas as pd

productos = pd.DataFrame({
    'Producto': ['Espejo Mágico', 'Libro de Sueños', 'Varita Luminosa', 'Sombrero Hechizado', 'Cristal Adivinatorio'],
    'Color': ['Plateado', 'Rosa', 'Dorado', 'Negro', 'Transparente'],
    'Precio': [29.99, 12.50, 45.99, 34.75, 55.99],
    'Disponibilidad': ['En Stock', 'Agotado', 'En Stock', 'En Stock', 'Agotado'],
    'Opiniones': [87, 42, 95, 68, 76,]
})

print(productos)
```

> output del código:

```bash
               Producto         Color  Precio Disponibilidad  Opiniones
0         Espejo Mágico      Plateado   29.99       En Stock         87
1       Libro de Sueños          Rosa   12.50        Agotado         42
2       Varita Luminosa        Dorado   45.99       En Stock         95
3    Sombrero Hechizado         Negro   34.75       En Stock         68
4  Cristal Adivinatorio  Transparente   55.99        Agotado         76
```

### 1. Usando el método drop

Posiblemente la mejor manera de eliminar una columna de un Dataframe es haciendo uso del método `drop()`, este método ofrece una manera sencilla, intuitiva y eficiente de eliminar una o varias columnas de un Dataframe, a continuación veremos un pequeño ejemplo.

```py
productos.drop(columns='Opiniones', inplace=True)
print(productos)
```

> output del código:

```bash
               Producto         Color  Precio Disponibilidad
0         Espejo Mágico      Plateado   29.99       En Stock
1       Libro de Sueños          Rosa   12.50        Agotado
2       Varita Luminosa        Dorado   45.99       En Stock
3    Sombrero Hechizado         Negro   34.75       En Stock
4  Cristal Adivinatorio  Transparente   55.99        Agotado
```

En este ejemplo estamos eliminando la columna (Opiniones) del Dataframe **productos** haciendo uso del método `drop()`. Para eliminar una columna con ayuda de este método, simplemente necesitas pasarle el parámetro `columns` y como valor a este parámetro le colocas el nombre de la columna que quieres eliminar.

### 2. Usando la palabra reservada (del)

Otra forma en la que puedes eliminar una columna de un Dataframe es haciendo uso de la palabra reservada `del`, a continuación veremos un pequeño ejemplo.

```py
del productos['Disponibilidad']
print(productos)
```

> output del código:

```bash
               Producto         Color  Precio  Opiniones
0         Espejo Mágico      Plateado   29.99         87
1       Libro de Sueños          Rosa   12.50         42
2       Varita Luminosa        Dorado   45.99         95
3    Sombrero Hechizado         Negro   34.75         68
4  Cristal Adivinatorio  Transparente   55.99         76
```

En este ejemplo, estamos utilizando la palabra reservada de Python `del` para eliminar la información del Dataframe **productos** en la columna (Disponibilidad). Esta es una manera sencilla de eliminar columnas innecesarias en un Dataframe.

### 3. Utilizando el método pop

Otra forma en la que puedes eliminar una columna de un Dataframe es haciendo uso del método `pop()`.

```py
color = productos.pop('Color')

print(color)
print()
print(productos)
```

> output del código:

```bash
0        Plateado
1            Rosa
2          Dorado
3           Negro
4    Transparente
Name: Color, dtype: object

               Producto  Precio Disponibilidad  Opiniones
0         Espejo Mágico   29.99       En Stock         87
1       Libro de Sueños   12.50        Agotado         42
2       Varita Luminosa   45.99       En Stock         95
3    Sombrero Hechizado   34.75       En Stock         68
4  Cristal Adivinatorio   55.99        Agotado         76
```

En este ejemplo, hacemos uso del método `pop()` para eliminar la columna (Color) del Dataframe **productos**. Este método recibe como parámetro el índice del elemento que se eliminará, después retorna el elemento en ese índice y lo elimina del Dataframe original.

### 4. Slicing de Dataframe

Una forma interesante en al que también puedes eliminar una columna en un dataframe es haciendo uso de **Slicing** con ayuda nuevamente del método `drop()`.

```py
productos.drop(['Precio'], axis=1, inplace=True)
print(productos)
```

> output del código:

```bash
               Producto         Color Disponibilidad  Opiniones
0         Espejo Mágico      Plateado       En Stock         87
1       Libro de Sueños          Rosa        Agotado         42
2       Varita Luminosa        Dorado       En Stock         95
3    Sombrero Hechizado         Negro       En Stock         68
4  Cristal Adivinatorio  Transparente        Agotado         76
```

Slicing un Dataframe es una manera interesante de eliminar una columna en un Dataframe. En este ejemplo simplemente le pasamos una lista con el nombre de la columna que queremos eliminar, también es importante utilizar el parámetro `axis=1` que indica que estamos eliminando elementos horizontalmente (columnas).

## Conceptos básicos del método drop

El método `drop()` es un método de la librería de pandas que nos permite eliminar las filas o las columnas de un Dataframe. A continuación veremos los parámetros que recibe y para que se utiliza cada uno.

```py
dataframe.drop(
   labels=None,
   axis=0,
   index=None,
   columns=None,
   level=None,
   inplace=False,
   errors='raise'
)
```

* `labels`: etiquetas de índice o columna que se van a eliminar.
* `axis`: especifica si se van a eliminar filas (`axis=0`) o columnas (`axis=1`).
* `index`: etiqueta o lista de etiquetas a eliminar del eje 0.
* `columns`: etiquetas o lista de etiquetas a eliminar del eje 1.
* `level`: número entero o nombre del nivel a eliminar de un índice multinivel.
* `inplace`: si es `True`, se modifica el Dataframe original de lo contrario devuelve una copia modificada.
* `errors`: si se establece en 'ignore', se suprimen los errores y solo se eliminan las etiquetas existentes, por otro lado si el valor es 'raise' el método devolverá un error cuando alguna de las etiquetas no exista.

## Eliminación de columnas

A continuación veremos las diferentes formas en las que puedes eliminar una columna en un Dataframe haciendo uso del método `drop()`, además utilizaremos el siguiente Dataframe con la información de algunos animales de ejemplo.

```py
import pandas as pd

animales_salvajes = pd.DataFrame({
    'Identificador': [1003, 1027, 1378, 2067, 2345],
    'Especie': ['Leopardo de las Nieves', 'Dragón Barbudo', 'Mapache Mascota', 'Petauro del Azúcar', 'Serpiente del Arco Iris'],
    'Edad': [4, 2, 3, 1, 5],
    'Color': ['Blanco y Gris', 'Marrón y Amarillo', 'Gris y Negro', 'Gris y Blanco', 'Multicolor'],
    'Característica': ['Pelaje denso y suave', 'Espinas en la cabeza', 'Máscara facial única', 'Membranas en patas para deslizarse', 'Patrón de colores vibrantes']
})

print(animales_salvajes)
```
> output del código:
```bash
   Identificador                  Especie  Edad              Color                      Característica
0           1003   Leopardo de las Nieves     4      Blanco y Gris                Pelaje denso y suave
1           1027           Dragón Barbudo     2  Marrón y Amarillo                Espinas en la cabeza
2           1378          Mapache Mascota     3       Gris y Negro                Máscara facial única
3           2067       Petauro del Azúcar     1      Gris y Blanco  Membranas en patas para deslizarse
4           2345  Serpiente del Arco Iris     5         Multicolor         Patrón de colores vibrantes
```

### 1. Eliminación de una sola columna por nombre

```py
animales_salvajes.drop(columns='Característica', inplace=True)
print(animales_salvajes)
```
> output del código:
```bash
   Identificador                  Especie  Edad              Color
0           1003   Leopardo de las Nieves     4      Blanco y Gris
1           1027           Dragón Barbudo     2  Marrón y Amarillo
2           1378          Mapache Mascota     3       Gris y Negro
3           2067       Petauro del Azúcar     1      Gris y Blanco
4           2345  Serpiente del Arco Iris     5         Multicolor
```

Para eliminar una sola columna en un Dataframe podemos utilizar el método `drop()` y pasarle el parámetro `columns` con el nombre de la columna que deseas eliminar.

### 2. Eliminación de múltiples columnas utilizando una lista

```py
animales_salvajes.drop(columns=['Identificador', 'Edad', 'Color'], inplace=True)
print(animales_salvajes)
```
> output del código:
```bash
                   Especie                      Característica
0   Leopardo de las Nieves                Pelaje denso y suave
1           Dragón Barbudo                Espinas en la cabeza
2          Mapache Mascota                Máscara facial única
3       Petauro del Azúcar  Membranas en patas para deslizarse
4  Serpiente del Arco Iris         Patrón de colores vibrantes
```

Para eliminar múltiples columnas en un Dataframe simplemente necesitamos pasarla al método `drop()` el parámetro `columns` y como valor una lista con los nombres de las columnas que queremos eliminar.

### 3. Eliminación de columnas basadas en una condición

```py
columnas_para_eliminar = [
    column for column in animales_salvajes.columns 
    if type(animales_salvajes[column][0]) != str
]

animales_salvajes.drop(columns=columnas_para_eliminar, inplace=True)
print(animales_salvajes)
```
> output del código:
```bash
                   Especie              Color                      Característica
0   Leopardo de las Nieves      Blanco y Gris                Pelaje denso y suave
1           Dragón Barbudo  Marrón y Amarillo                Espinas en la cabeza
2          Mapache Mascota       Gris y Negro                Máscara facial única
3       Petauro del Azúcar      Gris y Blanco  Membranas en patas para deslizarse
4  Serpiente del Arco Iris         Multicolor         Patrón de colores vibrantes
```

En este ejemplo necesitamos eliminar todas las columnas del Dataframe **animales_salvajes** que contengan como valor un elemento de tipo (número), para conseguir todas las columnas que contiene un número podemos utilizar una **list comprehension** que guardará solo las columnas que contengan un número en su primera fila y después simplemente podemos pasarle al método `drop()` el parámetro `columns` con las lista de columnas a eliminar, en nuestro caso la lista `columnas_para_eliminar`.

## Alternativas a la Eliminación física de las columnas

En algunas ocasiones, la eliminación física de las columnas puede no ser la mejor opción por diversas razones. A continuación veremos algunas alternativas que nos permiten manipular los datos sin la necesidad de eliminar físicamente las columnas del Dataframe, por ejemplo, cambiar los valores de las filas de la columna por el valor `NaN`, por ceros o por algún otro valor.

```py
import pandas as pd
import numpy as np

tecnologias = pd.DataFrame({
    'Popularidad': ['Alta', 'Media', 'Alta', 'Muy Alta', 'Media'],
    'Tecnologia': ['Inteligencia Artificial', 'Blockchain', 'Realidad Virtual', 'Internet de las Cosas', 'Impresión 3D'],
    'Aplicacion': ['Asistentes virtuales', 'Contratos inteligentes', 'Entrenamiento médico', 'Casa inteligente', 'Prototipos de diseño'],
    'Beneficios': ['Automatización de tareas', 'Transparencia y seguridad', 'Simulación de entornos', 'Conectividad total', 'Personalización rápida'],
})

tecnologias['Popularidad'] = np.nan

print(tecnologias)
```
> output del código:
```bash
   Popularidad               Tecnologia              Aplicacion                 Beneficios
0          NaN  Inteligencia Artificial    Asistentes virtuales   Automatización de tareas
1          NaN               Blockchain  Contratos inteligentes  Transparencia y seguridad
2          NaN         Realidad Virtual    Entrenamiento médico     Simulación de entornos
3          NaN    Internet de las Cosas        Casa inteligente         Conectividad total
4          NaN             Impresión 3D    Prototipos de diseño     Personalización rápida
```

En este ejemplo no necesitamos los valores de las filas de la columna `Popularidad`, podemos reemplazar los valores de esas filas por valores `NaN`. La alternativa de cambiar los valores de una columna en lugar de eliminar físicamente la columna puede variar dependiendo de cada ocasión y el tipo de análisis que necesites hacer con la información del Dataframe.

## Uso de la Opción inplace

La opción `inplace` en el método `drop()` nos permite determinar si queremos modificar el Dataframe original o generar una copia del Dataframe y retornar esa copia para almacenarla en una nueva variable. Es muy importante tener cuidado con este parámetro ya que puede eliminar de forma permanente información que puede ser relevante, en su lugar es aconsejable primero crear una copia del Dataframe original y después eliminar las columnas en la copia del Dataframe de esta manera si por alguna razón más adelante necesitas toda la información del Dataframe la puedes obtener en el Dataframe original.

### Ventajas y Desventajas de la opción inplace

**Ventajas**:

1. Menos consumo de memoria al no crear un nuevo DataFrame.
2. Puede ser más conveniente y eficiente para conjuntos de datos grandes.

**Desventajas**:

1. Puede dificultar la trazabilidad y depuración del código.
2. La pérdida de datos es permanente, sin posibilidad de retroceder.

## Conclusión

En este artículo hemos visto diferentes formas de eliminar las columnas de un Dataframe, además, también vimos algunos ejemplos sobre cómo eliminar una o varias columnas con ayuda del método `drop()` y algunas alternativas a la eliminación física de una columna. Te recomiendo que practiques los ejemplos aprendidos en este artículo con datasets más grandes, así entenderás mejor cómo funcionan y también aprenderás a utilizarlos con conjuntos de datos muy grandes algo que puede ser un poco complejo al comienzo, puedes buscar diferentes datasets para practicar en la página web [kaggle.com](https://www.kaggle.com/datasets).

Te invito a que sigas aprendiendo sobre la librería de Pandas junto con todos sus métodos y funcionalidades ya que esta librería nos proporciona bastantes recursos para manipular y modificar distintas estructura de datos como **Dataframes** y **Serias** lo cual es esencial para cualquier desarrollador de Python.
