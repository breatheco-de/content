---
title: "Python for Data Science"
subtitle: "Python is a multipurpose language, in this lesson you will understand how it's used in the datascience world"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
status: "draft"
date: "2022-01-15T16:36:30+00:00"
tags: ["data-science", "python", "pandas", "numpy"]
canonical: ""
---

Esta lección es una hoja de ruta sobre cómo aprender Python para la ciencia de datos. Si ya conoces Python y tienes aunque sea un poco de experiencia con las librerías de ciencia de datos Pandas, Numpy, etc. Puedes pasar directamente a la siguiente lección.

Python es un lenguaje muy diverso utilizado para construir robots, redes, sitios web, APIs, juegos, inteligencia artificial, y más. Dependiendo de lo que estés haciendo, la sintaxis puede variar tanto que te cueste recconocer las similitudes entre las bases de código.

No me mal interpretes, no importa lo que estés construyendo, vas a estar utilizando bucles, condiciones, expresiones lógicas, filtrado, funciones y clases; pero harás esas cosas de maneras que se sientan diferentes. Dejame darte un ejemplo:

Muchas maneras de filtrar colores
Si tu quieres filtrar una lista de números con solamente números impares, puedes hacerlo de esta manera:

```python
# Esta es nuestra lista común de números
numeros = [23,34,5,6,45,34,23,5,45,5,324,23,354,65,564,45,342]

# Filtrado con Python básico 3
impares = [n for n in numbers if n % 2 != 0]
print(impares)

# Filtrado con Python básico 3
impares = list(filter(lambda n: n % 2 != 0,numeros))
print(impares)

# Filtrado con numpy
import numpy as np
impares = np.array(numeros)
print(impares[impares % 2 != 0])
```
En el ejemplo anterior, los 3 métodos van a filtrar y dar como resultado la misma lista de números impares, pero en segundo plano (en el nivel más bajo de la máquina), las cosas se ejecutan de una manera muy diferente.

Por esta y muchas otras razones, es conveniente comenzar aprendiendo la sintaxis de la `DataScience` (ciencia de datos) desde un principio.

## Aprendiendo Python por la Ciencia de Datos

En el mundo de la ciencia de datos de Python, hay una familia de librerías que están en la parte superior de la cadena alimenticia: Numpy, Pandas, Seaborn, Matplotlib, Scikit, etc. Vamos a estar aprendiendo cada una de ellas durante las próximas semanas, mientras construyes projectos de la vida real.

### Función de ayuda

Vamos a utilizar MUCHOS códigos y funciones de terceros (de otras personas); es mejor aprender sobre una característica de Python llamada `help()` (ayuda), que te dirá como se utiliza casi todo.

### Los puntos en común

Si no sabes como codificar, es mejor olvidar la ciencia de datos por un segundo y empezar a aprender Python desde cero: 
Que son las variables: Integer (entero), float (flotante), string (cadena), null (nulo o ninguno), boolean (booleano). 
Listar: list (lista) , tuple (tupla), sequence (secuencia), matrix (matriz), y cómo hacer un loop (bucle) o iterar las estructuras.
Condiciones: Sentencia `if-else` con operaciones lógicas para comparaciones.
Funciones: funciones normales y lambda para encapsular, organizar y reutilizar código.
Clases: la creación de estructuras de datos personalizadas ayuda a encapsular, organizar y reutilizar incluso más que utilizando clases.

### El enfoque

Ya que estamos enfocados en utilizar Python para la ciencia de datos, vamos a estar trabajando con una cantidad masiva de datos; yo recomiendo fuertemente que empieces tu entrenamiento enfocándote en ejercicios y proyectos sobre lo siguiente:
Hacerle bucle a una extensa lista de datos.
Filtrar una gran lista de datos, eliminando valores nulos.
Mapear una listas de valores de un formato a otro.
Tratar con matrices.

### Las librerías

Empieza con Numpy: porque es el esqueleto, todas las demás librerías o funcionan sobre Numpy o son compatibles con el. Adicionálmente, Numpy viene con la matriz y una serie de funciones para ahorrarte mucho tiempo y poder de procesamiento para las operaciones típicas cuando se trata de grandes cantidades de datos.

Continúa con Pandas y Seaborn: construido encima de Numpy, la librería de Panda incorpora el objeto "marco de datos"; simplificando la importación, exportación y tranformación de grupos de datos multidimensionales.

Grafica tu marco de datos con Matplotlib: esta librería es responsable de la mayoría de las visualizaciones de datos que ve en el mundo de la ciencia de datos: desde un simple gráfico de barras hasta histogramas, permite el uso de matrices, marcos de datos y álgebra para crear visualizaciones de datos.

