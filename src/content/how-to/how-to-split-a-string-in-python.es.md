---
title: "¿Cómo dividir una cadena en Python?"
subtitle: "Aprende diferentes métodos para dividir una cadena en subcadenas en Python. Explora ejemplos prácticos y las mejores prácticas para una manipulación efectiva de cadenas."
tags: ["python","concatenación de cadenas",]
authors: [tommygonzaleza]

---

En este artículo te ayudaremos con una de las tareas más comunes al [trabajar con cadenas en Python](https://4geeks.com/es/lesson/working-with-strings-in-python-es), proporcionándote diferentes métodos para dividir una cadena. Aquí tienes un ejemplo rápido de cómo puedes dividir una cadena en Python utilizando el método `.split()`:

```py runable=true
texto = "Esta cadena será dividida"
lista = texto.split()

print(lista)  # Salida: ["Esta", "cadena", "será", "dividida"]
```

En el ejemplo anterior, usamos el método `split()` sin parámetros para dividir nuestra cadena `texto` en subcadenas, separadas por espacios en blanco.

## ¿Cómo dividir una cadena en Python utilizando el método split?

[Python](https://4geeks.com/es/lesson/para-que-sirve-python) proporciona un método potente llamado `split`, que te permite dividir una cadena en una lista de subcadenas según un separador especificado. Este método es extremadamente útil cuando necesitas descomponer una cadena en sus diferentes partes.

### Parámetros del método split

El método `split()` en Python acepta varios parámetros. Veamos cómo funcionan:

```python
cadena.split(
    sep=None, 
    maxsplit=-1
)
```

- **`sep`**: Especifica el separador utilizado para dividir la cadena. Si no se proporciona, se utilizarán caracteres de espacio en blanco (espacio, tabulación, salto de línea, etc.) por defecto.
- **`maxsplit`**: Determina el número máximo de divisiones. Por defecto, está configurado en `-1`, lo que significa que no hay límite en la cantidad de divisiones. Si se proporciona un entero positivo, la cadena se dividirá como máximo ese número de veces, y el resto de la cadena será devuelto como el último elemento de la lista.

Vamos a desglosar cada uno de estos parámetros:

Usar el método `split()` de forma efectiva puede ayudarte a manipular y procesar cadenas eficientemente en Python.

## Ejemplos de cómo usar el método split en Python

El método `split()` de Python es increíblemente versátil, ya que permite dividir cadenas en función de los separadores especificados. Exploremos cinco ejemplos que muestran sus diferentes usos:

### Dividir una cadena por espacios en blanco

```python runable=true
texto = "Esto es una oración de ejemplo."
palabras = texto.split()

print(palabras)
```

En este ejemplo, se llama al método `split()` sin argumentos, lo que significa que divide la cadena `texto` en palabras basándose en los espacios en blanco. La lista resultante `palabras` contendrá cada palabra de la sentencia como elementos individuales.

### Dividir una cadena por un separador personalizado

```python runable=true
numeros = "1,2,3,4,5"
lista_de_numeros = números.split(",")

print(lista_numeros)
```

Aquí, dividimos la cadena `numeros` por comas (`,`) utilizando el método `split()` con una coma como separador. La lista resultante `lista_numeros` contendrá cada número como un elemento individual.

### Limitar el número de divisiones

```python runable=true
direccion = "123 Main Street, Ciudad, País"
componentes = direccion.split(",", 1)

print(componentes)
```

En este ejemplo, dividimos la cadena `direccion` por comas, pero limitamos el número de divisiones a 1. Esto significa que la cadena sólo se dividirá en la primera coma encontrada, y la lista resultante `componentes` contendrá dos elementos: la dirección y el resto de la dirección.

### Dividir una cadena en caracteres

```python runable=true
palabra = "Python"
caracteres = palabra.split("")

print(caracteres)
```

Aquí, estamos utilizando el método `split()` pasando una cadena vacía como argumento, esto dividirá la cadena por cada uno de los caracteres. Cada carácter de la cadena se convierte en un elemento de la lista resultante `caracteres`.

### Dividir una cadena multilínea en líneas

```python runable=true
multilinea_texto = "Primera línea\nSegunda línea\nTercera línea"
lineas = multilínea_texto.split("\n")

print(lineas)
```

En este ejemplo, dividimos la cadena multilínea `texto_multilinea` en líneas individuales utilizando el carácter de nueva línea (`\n`) como separador. La lista resultante `lineas` contendrá cada línea del texto original como un elemento.

Estos ejemplos demuestran las diversas formas en que puedes aprovechar el método `split()` de Python para manipular cadenas y extraer la información deseada.

En este artículo, hemos cubierto varios métodos para dividir una cadena en subcadenas en Python, una habilidad esencial para el procesamiento y manipulación eficaz de datos. Al explorar ejemplos prácticos y las mejores prácticas, estarás mejor equipado para manejar diversas tareas de manipulación de cadenas en tus [proyectos Python](https://4geeks.com/interactive-coding-tutorials?techs=python). Para obtener más información sobre la programación en Python y el procesamiento de datos, y para mejorar aún más tus habilidades, considera la posibilidad de inscribirte gratuitamente en nuestro curso [Start Coding using Python](https://4geeks.com/es/lesson/aprendiendo-a-programar-con-python) en 4Geeks.com.
