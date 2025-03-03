---
title: "¿Qué se puede hacer con Python?"
subtitle: "Explorando las diversas aplicaciones y usos de Python en diferentes campos. Descubre el potencial y la versatilidad de este lenguaje de programación."
tags: ["Python", "flask", "pandas"]
authors: ["DF27ARTS"]

---

[Python](https://4geeks.com/es/lesson/que-es-python-tutorial) es uno de los lenguajes de programación más utilizados en la actualidad gracias a que es un lenguaje de alto nivel, interpretado, multiparadigma y de propósito general, esto significa que se puede utilizar en diversas áreas de la programación como en el desarrollo de [APIs](https://4geeks.com/es/lesson/understanding-rest-apis-es), la [ciencia de datos (data science) o machine learning](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning?lang=es) entre muchas otras áreas. Además Python tiene una sintaxis sencilla e intuitiva, que facilita la lectura y escritura de código.

En este artículo veremos algunos ejemplos sobre qué puedes hacer con Python y algunas de sus áreas de uso más relevantes. Puedes ver este artículo si quieres saber más cobre [cómo programar con Python](https://4geeks.com/es/lesson/como-programar-con-python) 

## Campos en los que se puede utilizar Python

### 1. Back-end development

Una de las áreas en la que puedes utilizar Python es en el desarrollo de aplicación para back-end, existen diferentes frameworks que te permite crear un API con Python, a continuación veremos algunos de los más utilizados y relevantes.

1. **Django**: este es un framework web completo y de alto nivel que fomenta el desarrollo rápido y limpio. Viene con muchas características incorporadas, como un ORM (Object-Relational Mapping), un sistema de administración de contenido, autenticación de usuarios y más. Este framework es ideal para proyectos grandes y complejos.
2. **Flask**: [Flask](https://4geeks.com/es/lesson/building-apis-with-python-flask-es) es un framework ligero y versátil para Python. Está diseñado para ser simple y fácil de usar, permitiendo a los desarrolladores elegir las herramientas que necesitan. Flask no impone una estructura rígida, brindando flexibilidad para construir desde aplicaciones pequeñas hasta proyectos más complejos.
3. **FastAPI**: este es un framework moderno y rápido para la creación de APIs con Python 3.7+. Se destaca por su rendimiento gracias a la generación automática de documentación y la validación de tipos mediante **Pydantic**. Este framework es ideal para construir APIs rápidas y seguras, y proporciona una experiencia de desarrollo ágil y fácil de entender. 

En el siguiente ejemplo veremos cómo construir una API con ayuda del framework de FastAPI.

1. Primero debes instalar los paquetes de **fastapi** y **uvicorn** haciendo uso del administrador de paquetes `pip`:
```bash
pip install fastapi
```
```bash
pip install "uvicorn[standard]"
```

2. Después debes crear un archivo `main.py` y dentro de él pega el siguiente código:
```py
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def hello_world():
    return {'message': "Hello world!!!"}
```

3. Por último, ejecuta el siguiente comando para levantar el servidor:
```bash
uvicorn main:app --reload
```

Una vez que se levante el servidor, podrás ingresar a la ruta `http://127.0.0.1:8000` para acceder al contenido de la API y tambien podrás acceder a la ruta `http://127.0.0.1:8000/docs` para ver la documetación que se genera de manera automática con la librería de Swagger.

> Aqui te dejamos un tutorial paso a paso sobre cómo construir un [API con Flask](https://4geeks.com/es/interactive-exercise/python-http-requests-api-tutorial-ejercicio)

### 2. Ciencia de datos

La ciencia de datos (Data Science) es la disciplina que se encarga de extraer conocimientos e insights a partir de datos, utilizando técnicas de estadística, matemáticas, programación y visualización. Python es uno de los lenguajes más utilizados en este campo, debido a que ofrece herramientas poderosas y flexibles para la manipulación, análisis y visualización de datos.

Algunos de los frameworks más populares para el análisis de datos con Python, son:

1. **NumPy**: NumPy (**Numerical Python**) es una librería de código abierto que se utiliza en la mayoría de los campos en ciencia e ingeniería. Esta es una librería de Python que proporciona un objeto array multidimensional y varios objetos derivados como arrays enmascarados y matrices, además de un surtido de rutinas para operaciones rápidas sobre arrays, incluyendo operaciones matemáticas, lógicas, álgebra lineal básica, operaciones estadísticas básicas y mucho más.
2. **Pandas**: esta librería es una librería de Python especializada en el manejo y análisis de estructura de datos, como **Series** y **DataFrames**, además permite leer y escribir fácilmente archivos con diferentes formatos como CSV, Excel y bases de datos SQL.
3. **Matplotlib**: esta es una librería de Python de código abierto (open source), desarrollada inicialmente por el neurobiólogo Jhon Hunter en 2002. El objetivo de esta librería es crear gráficas y diagramas de alta calidad. Esta librería es especialmente útil para las personas que trabajan en áreas que requieran análisis y visualización de datos.
4. **SciPy**: esta es una librería de Python para matemáticas, ciencias e ingeniería que proporciona módulos para optimización, álgebra lineal, integración, interpolación y otras tareas científicas y de ingeniería. A diferencia de SciKit, que se centra en el aprendizaje automático, SciPy se centra en proporcionar herramientas matemáticas y científicas para resolver problemas en una amplia variedad de campos.

El siguiente es un pequeño ejemplo de [ciencia de datos con Python](https://4geeks.com/es/lesson/datascience-con-python).

```py
import pandas as pd
import matplotlib.pyplot as plt

data_frame = pd.DataFrame({
    'Name': ['John', 'Mary', 'Peter', 'Anne', 'Michael', 'Emily'],
    'Age': [25, 30, 22, 28, 35, 26],
    'Score': [85, 90, 78, 92, 88, 95]
})

plt.scatter(data_frame['Age'], data_frame['Score'])
plt.title('Relationship between age and score')
plt.xlabel('Age')
plt.ylabel('Score')
plt.show()
```
> output del código:

![Resultado del código](https://res.cloudinary.com/dleo66u17/image/upload/v1702485615/Captura_de_pantalla_2023-12-13_113730_qaje6i.png)

En este ejemplo hacemos uso de la librería de **Pandas** para crear un [DataFrame](https://4geeks.com/es/lesson/pandas-dataframe) con la información de 6 usuarios (nombre, edad y puntuación), después utilizamos la librería de [Matplotlib](https://4geeks.com/es/lesson/introduccion-a-matplotlib) para visualizar la relación entre la edad de los usuarios y la puntuación obtenida. Este es un pequeño ejemplo sobre cómo puedes utilizar estas librerías para analizar, manipular y visualizar un conjuntos de datos.

### 3. Inteligencia Artificial

Puedes utilizar Python para crear todo tipo de aplicaciones de inteligencia artificial, como reconocimiento de imágenes, procesamiento de lenguaje natural, aprendizaje automático, etc..

A continuación veremos algunos de los framework más relevantes para crear aplicaciones de aprendizaje automático con ayuda de Python.

1. **TensorFlow**: esta es una librería de código abierto para **Machine learning** desarrollada por Google para satisfacer las necesidades a partir de **redes neuronales artificiales**. Esta librería te permite construir y entrenar redes neuronales para detectar patrones y razonamientos usados por los humanos.
2. **Scikit-learn**: esta es una librería de Python que cuenta con algoritmos de clasificación, regresión, clustering, y reducción de dimensionalidad. Además, presenta la compatibilidad con otras librerías de Python como NumPy, SciPy y Matplotlib. La gran variedad de algoritmos y utilidades de Scikit-learn la convierten en la herramienta básica para empezar a programar y estructurar los sistemas de análisis de datos y modelado estadístico.
3. **PyTorch**: esta es una librería de código abierto basada en Python, enfocada a la realización de cálculos numéricos mediante programación de tensores, lo  que facilita su aplicación en el desarrollo de aplicaciones de aprendizaje profundo . La sencillez de su interfaz, y su capacidad para ejecutarse en GPUs, lo convierten en la opción más asequible para crear redes neuronales artificiales.

A continuación veremos un pequeño ejemplo de aprendizaje automático utilizando la librería de **TensorFlow**.

```py
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt

np.random.seed(42)
X_train = np.random.rand(100, 1) * 10
y_train = 2 * X_train + 1 + np.random.randn(100, 1)

# Definir el modelo
model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(1,), name='input_layer'),
    tf.keras.layers.Dense(units=1, activation='linear', name='output_layer')
])

model.compile(optimizer='sgd', loss='mean_squared_error')  # Compilar el modelo
model.fit(X_train, y_train, epochs=50, verbose=0)  # Entrenar el modelo
X_test = np.array([[2.5], [5.0]])  # Crear datos de prueba
predictions = model.predict(X_test)  # Realizar predicciones
```

Después de entrenar al modelo, podemos utilizar la librería de **Matplotlib** para visualizar los resultados:

```py
plt.scatter(X_train, y_train, label='Datos de entrenamiento')
plt.plot(X_test, predictions, color='red', label='Predicciones')
plt.xlabel('X')
plt.ylabel('Y')
plt.legend()
plt.show()
```
> output del código:

![https://res.cloudinary.com/dleo66u17/image/upload/v1702586176/Captura_de_pantalla_2023-12-14_152610_eci1io.png](https://res.cloudinary.com/dleo66u17/image/upload/v1702586176/Captura_de_pantalla_2023-12-14_152610_eci1io.png)

En este ejemplo, estamos entrenando a un modelo de regresión lineal. En términos sencillos, el modelo está aprendiendo la relación lineal entre la entrada **X**, (que representa un número) y la salida **Y** (que también representa un número). Este es un corto ejemplo que nos permite representar como podría ser el flujo de trabajo con un modelo real más complejo.

Estas son solo algunas de las áreas en las que puedes utilizar Python como lenguaje de programación, pero existen muchísimas más, actualmente puedes utilizar Python para desarrollar casi cualquier tipo de aplicación, desde aplicaciones móviles, aplicaciones web, aplicaciones de escritorio, videojuegos y mucho más.

## Conclusión

En este artículo, vimos un poco sobre la versatilidad de Python y también vimos algunas de las áreas en las que puedes utilizar este lenguaje de programación, Python es uno de los lenguajes más populares actualmente gracias a su versatilidad, sencillez y su pequeña curva de aprendizaje, lo cual lo convierte en uno de los lenguajes preferidos por los desarrolladores en diferentes áreas especialmente en la ciencia de datos y el aprendizaje automático.

Si te interesa aprender más características sobre este lenguaje de programación, te invito a que te registres en el curso [start coding with python](https://4geeks.com/es/start-coding-using-python) de 4Geeks, donde aprenderás muchas más caracteristicas sobre este lenguaje colaborando en vivo con estudiantes alrededor del mundo.
