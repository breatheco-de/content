---
title: "Data Science con Python"
subtitle: "Python es un lenguaje multipropósito, en esta lección comprenderás cómo se usa en el mundo de la Ciencia de Datos"
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

- **Listado**: list (lista) , tuple (tupla), sequence (secuencia), matrix (matriz), y cómo hacer un loop (bucle) o iterar las estructuras.
- **Condiciones**: Sentencia `if-else` con operaciones lógicas para comparaciones.
- **Funciones**: funciones normales y lambda para encapsular, organizar y reutilizar código.
- **Clases**: la creación de estructuras de datos personalizadas ayuda a encapsular, organizar y reutilizar incluso más que utilizando clases.

### El enfoque

Ya que estamos enfocados en utilizar Python para la ciencia de datos, vamos a estar trabajando con una cantidad masiva de datos; yo recomiendo fuertemente que empieces tu entrenamiento enfocándote en ejercicios y proyectos sobre lo siguiente:

- Hacerle bucle a una extensa lista de datos.
- Filtrar una gran lista de datos, eliminando valores nulos.
- Mapear una listas de valores de un formato a otro.
- Tratar con matrices.
- Trazado de datos en gráficos.

### Las librerías

-**Empieza con Numpy**: porque es el esqueleto, todas las demás librerías o funcionan sobre Numpy o son compatibles con el. Adicionálmente, Numpy viene con la matriz y una serie de funciones para ahorrarte mucho tiempo y poder de procesamiento para las operaciones típicas cuando se trata de grandes cantidades de datos.

-**Continúa con Pandas y Seaborn**: construido encima de Numpy, la librería de Panda incorpora el objeto "marco de datos"; simplificando la importación, exportación y tranformación de grupos de datos multidimensionales.

- Grafica tu marco de datos con **Matplotlib**: esta librería es responsable de la mayoría de las visualizaciones de datos que ve en el mundo de la ciencia de datos: desde un simple gráfico de barras hasta histogramas, permite el uso de matrices, marcos de datos y álgebra para crear visualizaciones de datos.

- Usar funciones estadísticas con **stats**: Esta biblioteca incluye las funciones estadísticas más comunes como la media, la desviación estándar, la varianza, la correlación, etc.

- Crear modelos con **scikit learn**: Herramientas simples y eficientes para el análisis predictivo de datos. Construido sobre NumPy, SciPy y matplotlib.

### Rendimiento

Cuando se crean algoritmos para sitios web, API, redes, robots u otras aplicaciones; No necesariamente tienes que preocuparte por el rendimiento porque siempre puedes actualizar tu servidor o tu CPU. Obviamente, el rendimiento sigue siendo una variable importante, pero puedes tener un sitio web lento o puedes pagar mucho más para "acelerarlo".

Por otro lado, cuando se construyen IA, el rendimiento es una gran preocupación. Podrías decir que "la potencia de procesamiento" es la mayor limitación que tiene este campo en este momento. Hay tanta información y los modelos necesitan tanto entrenamiento que la tecnología actual no puede mantenerse al día.

Es por eso que deberías saber un poco sobre `Big O` y optimizar algoritmos para el espacio y el tiempo.

### Jupyter vs Archivos de Python

La mayoría -si no todos- los cursos de Python sobre aprendizaje automático usan intensamente los cuadernos de Jupyter para construir y limpiar sus datos y ejecutar los modelos. En 4Geeks no nos gusta mucho esta aproximación, preferimos trabajar en archivos `.py` y usar editores de código como VSCode, Pycharm, etc. como lo hacen los ingenieros de software en todos los demás campos donde se usa Python.

Nos gusta usar Jupyter como una herramienta de comunicación, principalmente para contar historias a la gerencia, mostrar la estrategia y algunas sesiones de brainstorming.

### Administrador de paquetes y configuración de entornos

Si no vamos a usar tanto los cuadernos de Jupyter como otros científicos de datos, necesitamos ser muy buenos para configurar entornos de Python, descargar paquetes de Python, usar el administrador de paquetes PIP, etc.

- Pyenv para versiones de Python: hay múltiples versiones de Python y necesitas acostumbrarte a cambiar entre versiones porque a veces estás intentando usar nuevas características o tal vez viejas características obsoletas.
- Pip: este es el "administrador de paquetes" para Python, te permite descargar y usar Numpy, Pandas y muchas otras librerías increíbles
- Entorno virtual: cada proyecto podría tener una versión de Python diferente, por eso necesitas crear entornos virtuales para aislar tus proyectos entre sí.
- Pipenv: es una herramienta increíble que simplifica el uso de PIP y Virtual Env.

### Estructura típica de un proyecto de ciencia de datos

Usaremos una plantilla para nuestros proyectos llamada [Cookie Cutter Datascience](https://drivendata.github.io/cookiecutter-data-science/). Usar una plantilla siempre es una buena idea para organizar tus archivos y flujo de trabajo del proyecto. Puedes leer la documentación y ver [este video sobre cómo funciona](https://www.youtube.com/watch?v=nExL0SgKsDY).











Jot something down













