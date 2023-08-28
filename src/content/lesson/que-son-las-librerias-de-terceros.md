---
title: "¿Para qué sirven las librerías de terceros en Python?"
subtitle: "Aprende cómo las librerías de terceros en Python pueden enriquecer tus proyectos. Descubre cómo incorporar funciones avanzadas y acelerar tu desarrollo"
tags: ["python"]
authors: ["DF27ARTS"]

---

## Librerías de terceros en Python

Las librerías de terceros son una herramienta esencial en la programación moderna, la mayoría de los lenguajes de programación tiene diferentes librerías que le simplifican algunas tareas a los programadores. Una librería también conocida como paquete o módulo, es un conjunto de código predefinido que ha sido desarrollado por un programador externo y puesto a disposición del público en general.

A continuación veremos un pequeño ejemplo con una de las librerías más populares de Python, la librería de Pandas.

1. Instala la librería de pandas con el siguiente comando.
```py
pip install pandas
```
2. Importa la librería de Pandas en tu módulo de trabajo.
```py
import pandas as pd
```

> El `as` se utiliza para asignarle un alias propio a la librería para que sea más fácil de utilizar. No es obligatorio usarlo.

3. Ahora ya puedes usar pandas, en tu propio código.
```py
data_frame = pd.DataFrame({
    "Nombre": ["Emma", "Liam", "Olivia"],
    "Apellido": ["Johnson", "Smith", "Williams"],
    "Edad": [34, 54, 23]
})

print(data_frame)
```
> output del código:
```bash
   Nombre  Apellido  Edad
0    Emma   Johnson    34
1    Liam     Smith    54
2  Olivia  Williams    23
```

En este ejemplo, creamos un pequeño dataframe con la ayuda de la función `DataFrame()` de la librería de **Pandas** y luego le agregamos la información de tres usuarios diferentes, después mostramos la información de los usuarios en la consola.

## ¿Qué son las librerías de terceros?

Las librerías de terceros son colecciones de código desarrolladas por programadores externos. Estas librerías o paquetes encapsulan una funcionalidad específica que puede ser reutilizada en diferentes proyectos según tus necesidades. En lugar de escribir el código una y otra vez cada vez que necesitas realizar una tarea común o compleja, puedes confiar en las librerías de terceros que ya tiene creado y testeado ese código y así ahorrar tiempo y esfuerzo. Para descargar una librería de Python puedes usar el sistema de gestión de paquetes **pip** (Pip Install Packages).

-  Para instalar cualquier librería usa la siguiente sintaxis:

```bash
pip install nombre_de_libreria
```

-  Luego puedes crear un módulo o archivo de trabajo en Python `example.py` e importar la librería con la siguiente sintaxis:

```py
import nombre_de_librería as alias
```

> El alias es opcional, sirve para ponerle un nombre mas corto a la librería y que sea más fácil de utilizar.

Una vez importadas ya puedes usar esta librería en tu código y aprovechar todos sus beneficios, recuerda que puedes instalar e importar tantas librerías como necesites, por ejemplo puedes usar la librería de **Numpy** junto con la [librería de **Pandas**](https://4geeks.com/es/how-to/instalar-pandas-python) para hacer cálculos matemáticos avanzados.

## Ejemplos de uso de librerías de terceros

A continuación veremos algunos ejemplos de cómo instalar, importar y utilizar diferentes librerías de terceros en tu propio código de Python.

### Requests

La librería [requests](https://docs.python-requests.org/en/v2.0.0/user/install) te permite hacer llamados de tipo **HTTP** en Python. Esta librería esconde la complejidad de hacer llamados **HTTP** con la ayuda de funciones intuitivas y fáciles de entender para que puedas concentrarte en sacar el máximo provecho de la API que deseas utilizar.

Para poder utilizar la librería **Requests** en tu ordenador sigue las siguientes instrucciones:

1. Instala la librería **requests** en tu ordenador con el siguiente comando:
```bash
pip install requests
```

2. Una vez instalada, importa la librería en tu modulo de trabajo con la siguiente sintaxis:
```py
import requests
```

3. Ahora ya puedes empezar a utilizar las maravillosas funcionalidades de esta librería. 
```py
response = requests.get("https://jsonplaceholder.typicode.com/posts/1")

if response.status_code == 200:
    data = response.json()
    print("Datos obtenidos desde la API\n")
    print(data)

else:
    print("Ha ocurrido un problema y la API respondio con un error")
```
> output:
```bash
Datos obtenidos desde la API

{
    'userId': 1, 
    'id': 1, 
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 
    'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}
```

En este ejemplo, hacemos uso del método `get()` de la librería **Requests** para traer información de un servidor, si la petición es exitosa imprimimos el resultado en la consola pero si la petición es fallida le mostramos al usuario un error en consola. Para este ejemplo, utilizamos la API de [jsonplaceholder](https://jsonplaceholder.typicode.com) que te permite hacer peticiones **HTTP** de forma gratuita para poder probar tu aplicación.

### Numpy

La librería de [numpy](https://numpy.org/doc/stable) es uno de los paquetes más importantes a entender cuando estás comenzando a aprender Python. Esta librería permite a los desarrolladores realizar de forma rápida una amplia variedad de cálculos numéricos. Para instalar Numpy en tu ordenador sigue las siguientes instrucciones:

1. Instala Numpy en tu ordenador.
```bash
pip install numpy
```
2. Importa Numpy en tu módulo de trabajo.
```py
import numpy as np
```
3. Empieza a utilizar las funcionalidades de Numpy en tu código.
```py
array_numeros = np.arange(10)
print(array_numeros) # output: [0 1 2 3 4 5 6 7 8 9]

a = np.array([4, 16, 25])
b = np.sqrt(a) # Raíz cuadrada elemento a elemento ([2. 4. 5.])
```

La librería de **Numpy** ofrece una amplia variedad de funciones que te permite realizar cálculos matemáticos avanzados, crear listas, crear matrices y muchas cosas más. A continuación verás algunas de las funciones más relevantes.

| Función | Descripción |
|-----------|-----------|
|`np.array()` | Crea un arreglo NumPy a partir de una lista u otro objeto iterable. |
|`np.zeros()` | Crea un arreglo de ceros con las dimensiones específicas. |
|`np.linspace()` | Crea un arreglo con una secuencia de números equidistantes en un rango especificado y cantidad de elementos.
|`np.random.rand()` | Crea un arreglo con valores aleatorios en el rango de [0, 1] con las dimensiones especificadas. |

### Pandas

[Pandas](https://pandas.pydata.org/docs/) es una de las librerías más importantes de [Python](https://4geeks.com/es/lesson/como-programar-en-python) especialmente en áreas de trabajo como en la ciencia de datos (Data science) o en aprendizaje automático [(Machine Learning)](https://4geeksacademy.com/us/machine-learning-engineer/machine-learning-engineer). Pandas ofrece una amplia variedad de funciones para la manipulación y análisis de datos. Para descargar Pandas en tu ordenador sigue las siguientes instrucciones:

1. Instala Pandas en tu ordenador.
```bash
pip install pandas
```
2. Importa pandas en tu módulo de trabajo.
```py
import pandas as pd
```
3. Empieza a disfrutar de las funcionalidades de Pandas.
```py
serie = pd.Series([1, 4, 5, 7, 9])

data_frame = pd.DataFrame({
    "Nombre": ["MacOS", "Windows", "Linux"],
    "Color": ["Gris", "Negra", "Red"]
})

print(serie)
print(data_frame)
```
> output: 
```bash
// Serie output
0    1
1    4
2    5
3    7
4    9
dtype: int64

// Dataframe output
    Nombre  Color
0    MacOS   Gris
1  Windows  Negra
2    Linux    Red
```

Si deseas empezar tu carrera en la ciencia de datos o en inteligencia artificial, Pandas será tu aliada para la limpieza y el análisis de datos, esta librería te permite leer archivos **.csv**, archivos de **exel**, archivos de tipo **Json** y mucho más.

### Matplotlib

![Ejemplo de visualización de datos en matplotlib](https://miro.medium.com/v2/resize:fit:1400/1*EsqDYFK-IzGEAm4FyZP0wQ.jpeg)

[Matplotlib](https://matplotlib.org/stable/index.html) es una librería de Python utilizada para crear  visualizaciones y gráficos de alta calidad. Proporciona una interfaz para producir una variedad de gráficos, desde simples hasta complejos, que son esenciales para la comunicación efectiva de datos.

Para poder utilizar Matplotlib en tus propios proyectos sigue los siguientes pasos:

1. Instala matplotlib en tu ordenador.
```bash
pip install matplotlib
```

2. Importa matplotlib en tu módulo de trabajo.
```py
import  matplotlib.pyplot  as  plt
```

3. Ya puedes empezar a usar todas las funcionalidades de Matplotlib.
```py
# Datos de ejemplo: años y ventas
years = [2015, 2016, 2017, 2018, 2019, 2020]
sales = [50000, 60000, 75000, 90000, 110000, 130000]

# Crear un gráfico de líneas
plt.plot(years, sales, marker='o')

# Agregar etiquetas y título 
plt.xlabel('Años')
plt.ylabel('Ventas')
plt.title('Crecimiento de Ventas a lo largo de los Años')

# Mostrar el gráfico
plt.grid(True)
plt.show()
```

En este ejemplo, creamos una visualización falsa del número de ventas a través de los años de una compañía. Haciendo uso del método `plot()` creamos la tabla de presentación, luego con los métodos `label` y `title` creamos las etiquetas y el título de nuestra tabla y por último usamos la función `grid()` para mostrar la cuadrícula de nuestra visualización.

## Conclusión

Las librerías de terceros son una herramienta esencial para cualquier programador. Proporcionan una forma eficiente de aprovechar funcionalidades probadas y confiables, lo que acelera el desarrollo y mejora la calidad de los proyectos. Las Librerías de terceros son especialmente útiles en carreras como ciencia de datos o aprendizaje automático ya que traen un gran variedad de funcionalidades que te ayudarán a ahorrar tiempo y esfuerzo a la hora de crear tus proyectos. Si quieres conocer más información sobre el tema te recomendamos leer el artículo de [introducción a Pandas en Python](https://4geeks.com/es/lesson/introduccion-a-pandas) en el Blog de 4Geeks.
