---
title: "Data Science con Python"
subtitle: "Python es un lenguaje multipropósito, en esta lección comprenderás cómo se usa en el mundo de la Ciencia de Datos"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
status: "publised"
date: "2022-01-15T16:36:30+00:00"
tags: ["data-science", "python", "pandas", "numpy"]
canonical: ""
---

**Python** es un lenguaje de programación muy versátil y que se utiliza en multitud de casos: desarrollo de aplicaciones web (front y back), juegos para móvil, simulaciones, redes, automatizaciones, Inteligencia Artificial, etcétera. Esta versatilidad convierte este lenguaje en el más utilizado con mucha diferencia al resto, y es una gran ventaja para cualquier perfil técnico conocerlo.

> NOTA: Se estima que en 9 de cada 10 empresas utilizan Python en alguno de sus procesos, y que estos procesos son fundamentales para el correcto funcionamiento de la compañía.

Python es un lenguaje fácil de aprender y de utilizar, con características inherentes que le convierten en una buena alternativa frente a otros más tradicionales.

## Librerías

Una **librería** (*library*) es una colección de funciones predefinidas y que se realizan con un fin determinado. El objetivo es simplificar el trabajo del desarrollador y no tenerlas que programar desde cero. Existen multitud de ellas y se organizan según su utilidad. Como Python es el lenguaje más utilizado en el ámbito del Data Science y de la Inteligencia Artificial, algunas de sus librerías más utilizadas son relativas a estos campos:

- Scikit-learn
- NuPIC
- Ramp
- Numpy
- Pandas
- TensorFlow
- Keras
- Pipenv
- Scipy
- Matplotlib

De este top 10 la mayoría se utilizan en los procesos de Machine Learning, NLP, Visión Artificial y muchas otras áreas de la inteligencia artificial. Por ello, es vital que conozcas y sepas utilizar algunas de estas librerías, que son clave para cualquier labor de ciencia de datos.

En este bootcamp aprenderemos a fondo `Numpy`, que es una libreria utilizada para procesar y trabajar con listas multidimensionales de forma muy eficiente, `Pandas`, construida sobre Numpy y que permite trabajar con estructuras de datos tabulares denominados `DataFrames`, `Matplotlib` que posibilita la opción de visualizar los datos y sus relaciones y `scikit-learn`, ampliamente utilizada para construir modelos de Machine Learning.

## Rendimiento

Todo el software que se programa se debe ejecutar en un hardware, que es un conjunto de elementos físicos que constituyen un sistema informático. Cuanto más eficiente sea el código que implementes, mayor aprovechamiento de los recursos hardware, menor tiempos de ejecución, mayor posibilidad de paralelizar tareas, etcétera.

Cuando se construyen modelos de inteligencia artificial, el rendimiento es una gran preocupación, ya que la potencia de procesamiento es la mayor limitación que tiene este campo en este momento. Por lo tanto, la construcción de código y funciones eficientes es un pilar fundamental. También aprenderemos sobre ello.

## Desarrollo de código

Existen dos formas principales de programar en Python, y cada una de ellas se puede llevar a cabo usando distintas herramientas:

- **Programación flexible**: Se lleva a cabo con interfaces web como `Jupyter Notebook` o `Google Collab`. Se caracteriza por no contar con una estructura predefinida de código y concebidas para hacer desarrollos rápidos y de prueba y error. En este tipo de desarrollos se generan **cuadernos** (*notebooks*) 
- **Programación productiva**: Se lleva a cabo en **entornos de desarrollo integrados** (*IDE*, *Integrated Development Environment*), que son programas informáticos que permiten un desarrollo de inicio a fin de una aplicación o un servicio completo.

Normalmente el desarrollo de un producto, modelo o servicio de Machine Learning, se compone de dos fases: una exploratoria y otra de desarrollo. Primero programamos en notebooks y hacemos pruebas de concepto buscando el mejor preprocesamiento, análisis y predicción de los datos, y después preparamos un desarrollo completo para productivizar el modelo.

### Estructura de proyecto

Usaremos una plantilla para nuestros proyectos llamada [Cookie Cutter Datascience](https://drivendata.github.io/cookiecutter-data-science/). Usar una plantilla siempre es una buena idea para organizar nuestros archivos y flujo de trabajo del proyecto.