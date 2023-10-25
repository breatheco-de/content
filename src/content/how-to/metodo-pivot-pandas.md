## Método Pivot Pandas

El método [pivot](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.pivot.html) de la librería de Pandas nos permite reorganizar y transformar los datos de un **DataFrame** creando una nueva tabla con un formato diferente. A continuación podras encontrar un pequeño ejemplo sobre cómo utilizar este método y cómo transforma el **DataFrame** original.

```py
import pandas as pd

products_df = pd.DataFrame({
    'Fecha': ['2023-01-01', '2023-01-01', '2023-01-02', '2023-01-02'],
    'Producto': ['Samsung', 'Apple', 'Samsung', 'Apple'],
    'Venta': [100, 150, 200, 120]
})

print("Información original:")
print(products_df)

pivot_df = products_df.pivot(index='Fecha', columns='Producto', values='Venta')
print("\nInformación pivoteada:")
print(pivot_df)
```
> output del código:
```bash
Información original:
        Fecha Producto  Venta
0  2023-01-01  Samsung    100
1  2023-01-01    Apple    150
2  2023-01-02  Samsung    200
3  2023-01-02    Apple    120

Información pivotada:
Producto    Apple  Samsung
Fecha
2023-01-01    150      100
2023-01-02    120      200
```

El método `pivot()` recibe tres parámetros, el parámetro **index**, el parámetro **columns** y el parámetro **values** los tres parámetros son necesarios para poder utilizar este método. Como puedes ver en el ejemplo, el nuevo **DataFrame** tiene como índices los valores de la columna `Fecha` además utilizó los valores de la columna `Producto` como nombre para las columnas en el nuevo **DataFrame** y los valores de la columna `Venta` como los valores para las columnas. En el **DataFrame** pivotado podemos ver cuántas ventas ha tenido cada producto en cada fecha.

## Qué es y como funciona el método pivot()

El método `pivot()` es un método de la librería de Pandas que nos permite transformar los datos de un **DataFrame** al reorganizar sus datos en función de las columnas existentes. Permite reconfigurar los datos de manera que los valores en una columna se conviertan en nuevas columnas y se crucen con los valores de otra columna. Esto es especialmente útil para crear tablas dinámicas y resúmenes de datos.

El método `pivot()` se utiliza principalmente en situaciones en las que se desea cambiar la estructura de los datos para un análisis más conveniente. Permite que los datos sean más legibles y accesibles al proporcionar una vista diferente  de los mismos. Este método retorna un nuevo **DataFrame** con los datos pivotados y no modifica el **DataFrame** original. 

## Parámetros del método pivot()

El método `pivot()` recibe tres parámetros, los cuales veremos en más detalle a continuación.

```py
data_frame.pivot(index, columns, values)
```

- `index`: Este parámetro recibe como valor una columna o lista de columnas que se usan como índices en el nuevo **DataFrame**. Puede ser una cadena o una lista de cadenas. Si se omite, se usa el índice de **DataFrame** original.
- `columns`: (required) Este parámetro recibe como valor la columna o lista de columnas que se usan como los nombre para las columnas en el nuevo **DataFrame**.
- `values`: Este parámetro recibe como valor la columna o lista de columnas que se usan como los valores para el nuevo **DataFrame**. Si no se especifica, se utilizarán todas las columnas restantes y el resultado tendrá columnas indexadas jerárquicamente.

## Ejemplos de uso del método pivot()

El método `pivot()` tiene múltiples ejemplos de uso, a continuación veremos algunos de ellos basados en el siguiente **DataFrame**.

```bash
  producto      pais   año  ventas
0    Apple  Colombia  2016    1000
1    Apple      Perú  2017     800
2    Apple   Ecuador  2018     600
3  Samsung  Colombia  2019    1200
4  Samsung      Perú  2020     900
5  Samsung   Ecuador  2021     700
6    Linux  Colombia  2022    1100
7    Linux      Perú  2023     850
8    Linux   Ecuador  2024     650
```

### Utilizar una sola columna para crear el dataframe

En este ejemplo, vamos a pasarle una sola columna como valor al parámetro `index` y al parámetro `columns`.

```py
import pandas as pd

df = pd.DataFrame({
    "producto": ["Apple", "Apple", "Apple", "Samsung", "Samsung", "Samsung", "Linux", "Linux", "Linux"],
    "pais": ["Colombia", "Perú", "Ecuador", "Colombia", "Perú", "Ecuador", "Colombia", "Perú", "Ecuador"],
    "año": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    "ventas": [1000, 800, 600, 1200, 900, 700, 1100, 850, 650]
})

df_pivot = df.pivot(index="año", columns="producto", values="ventas").fillna("N/A")

print(df_pivot)
```
> output del código:
```bash
producto   Apple   Linux Samsung
año
2016      1000.0     N/A     N/A
2017       800.0     N/A     N/A
2018       600.0     N/A     N/A
2019         N/A     N/A  1200.0
2020         N/A     N/A   900.0
2021         N/A     N/A   700.0
2022         N/A  1100.0     N/A
2023         N/A   850.0     N/A
2024         N/A   650.0     N/A
```

En este ejemplo, hacemos uso del método `pivot()` para transformar un **DataFrame** de productos, para este ejemplo vamos a utilizar los valores de la columna **año** como índice, los valores de la columna **producto** para representar las columnas y los valor de la columna **ventas** para llenar los valores en el nuevo **DataFrame**, además hacemos uso del método `fillna()` para reemplazar todos los valores `NaN` con el texto **N/A**(No aplica). En este ejemplo transformamos el **DataFrame** para ver cuántas ventas ha tenido cada producto en cada año.

### Utilizar una lista de columnas para crear el dataframe

El método `drop()` también puede recibir una lista de columnas como valores para los parámetros, a continuación veremos un pequeño ejemplo sobre cómo puede ser útil en algunas ocasiones.

```py
import pandas as pd

df = pd.DataFrame({
    "producto": ["Apple", "Apple", "Apple", "Samsung", "Samsung", "Samsung", "Linux", "Linux", "Linux"],
    "pais": ["Colombia", "Perú", "Ecuador", "Colombia", "Perú", "Ecuador", "Colombia", "Perú", "Ecuador"],
    "año": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    "ventas": [1000, 800, 600, 1200, 900, 700, 1100, 850, 650]
})

df_pivot = df.pivot(index="año", columns=["producto", "pais"], values="ventas").fillna("N/A")

print(df_pivot)
```
> output del código:
```bash
producto    Apple                 Samsung                   Linux
pais     Colombia   Perú Ecuador Colombia   Perú Ecuador Colombia   Perú Ecuador
año
2016       1000.0    N/A     N/A      N/A    N/A     N/A      N/A    N/A     N/A
2017          N/A  800.0     N/A      N/A    N/A     N/A      N/A    N/A     N/A
2018          N/A    N/A   600.0      N/A    N/A     N/A      N/A    N/A     N/A
2019          N/A    N/A     N/A   1200.0    N/A     N/A      N/A    N/A     N/A
2020          N/A    N/A     N/A      N/A  900.0     N/A      N/A    N/A     N/A
2021          N/A    N/A     N/A      N/A    N/A   700.0      N/A    N/A     N/A
2022          N/A    N/A     N/A      N/A    N/A     N/A   1100.0    N/A     N/A
2023          N/A    N/A     N/A      N/A    N/A     N/A      N/A  850.0     N/A
2024          N/A    N/A     N/A      N/A    N/A     N/A      N/A    N/A   650.0
```

En este ejemplo, hacemos uso del método `pivot()` y le pasamos una lista como valor al parámetro **columns**, esta lista contiene dos columnas (**producto** y **pais**) lo que significa que el método `pivot()` utilizará la columna **producto** y creará una columna con cada uno de sus valores, luego creará una subcolumna con los valores de la columna **pais** y agrega esta subcolumna a cada una de las columnas de **Producto**, por último hacemos uso del método `fillna()` para reemplazar todos los valores `NaN` por el texto **N/A**(No aplica). Este ejemplo puede ser un poco más confuso pero utilizar una lista de columnas como valores para los parámetros puede ser muy útil en algunas ocasiones.

## Conclusión

El método `pivot()` se utiliza para reorganizar los valores de un **DataFrame**, en este artículo vimos cómo funciona este método, cuáles son los parámetros que recibe y algunos ejemplos sobre cómo utilizarlo. Este método puede ser un poco confuso pero también puede ser muy útil en algunas ocasiones. Te invito a que sigas practicando con este método y que lo implementes en operaciones más complejas ya que esto te servirá para entender mejor cómo funciona, puedes buscar un dataset de información más grande y empezar a jugar con las diferentes variaciones que puedes hacer con este método.

Espero que este atículo te aya sido de utiliadad y te haya servido para entender mejor como utilizar el método `pivot()` de Pandas, si te interesa aprender más sobre Pandas puedes visitar la pagina [pandas para machine learning](https://4geeks.com/es/interactive-exercise/tutorial-pandas-para-machine-learning) de 4Geeks donde aprenderás los conceptos básicos sobre esta popular librería de Python.

¡Diviértete en tu ruta de aprendizaje! 😉👋
