# Expresiones Regulares Python

Si eres programador seguramente has utilizado operaciones de búsqueda de subcadenas. Sin embargo, estas operaciones pueden volverse limitadas cuando se trata de patrones más complejos. Aquí es donde las expresiones regulares toman importancia. Las expresiones regulares son patrones de búsqueda que se utilizan para encontrar coincidencias en cadenas de texto.

En este artículo, aprenderemos sobre las expresiones regulares en Python, desde su sintaxis básica hasta su aplicación en casos de uso comunes.En Python, las expresiones regulares se implementan a través del módulo **re**, el cual proporciona una amplia gama de métodos para trabajar con ellas.

Un ejemplo sencillo de expresión regular en Python es aquel que busca todas las coincidencias de una letra específica en una cadena de texto

```python
import re

texto = "El perro está en la calle"
patron = "e"

coincidencias = re.findall(patron, texto)
print(coincidencias)  # ['e', 'e', 'e', 'e']

```

En este ejemplo, utilizamos la función findall() del módulo re para buscar todas las coincidencias de nuestra expresión regular en el texto. En este caso, buscamos todas las letras "e" en el texto y encontramos 4 coincidencias.


## Metacaracteres en expresiones regulares

Antes de comenzar a explicar como se utilizan las expresiones regulares en Python, debemos conocer el significado de los caracteres especiales que son utilizados para armar nuestros patrones de búsqueda. Los metacaracteres son caracteres especiales que se utilizan en las expresiones regulares para definir patrones más complejos. Algunos de los metacaracteres más comunes en las expresiones regulares son

**. :** representa cualquier caracter excepto el salto de línea

**^ :** representa el inicio de una línea

**$ :** representa el final de una línea

**\* :** representa cero o más repeticiones del carácter anterior

**+ :** representa una o más repeticiones del carácter anterior

**? :** representa cero o una repetición del carácter anterior

**\d :** coincide con cualquier dígito numérico.

**\w :** coincide con cualquier carácter alfanumérico.

**[] :** representa un conjunto de caracteres posibles

**| :** representa una alternativa entre dos patrones

**() :** agrupan patrones juntos


## Sintaxis básica de las expresiones regulares en Python

En Python, las expresiones regulares se manejan mediante el módulo **re**. Para utilizar expresiones regulares en Python, primero debemos importar este módulo. Luego, podemos utilizar las funciones y métodos proporcionados por este módulo que nos permitirá buscar y manipular texto.

Veamos un ejemplo básico de cómo utilizar expresiones regulares en Python utilizando el módulo **re**. Supongamos que queremos buscar la palabra "Python" en una cadena de texto. Podemos hacerlo de la siguiente manera:

```python
import re

texto = "Python es uno de los lenguajes mas utilizados por los programadores"

patron = "Python"

if re.search(patron, texto):
    print("Encontrado!")
else:
    print("No encontrado")
```

En este ejemplo, utilizamos la función search() del módulo re para buscar la cadena de texto "Python" en la variable texto. La búsqueda comienza y se detiene en la primera coincidencia encontrada. Si la cadena se encuentra en el texto, la función devuelve un objeto que podemos utilizar para realizar distintas operaciones. En este caso, simplemente imprimimos "Encontrado!" si se encuentra la palabra y "No encontrado" si no se encuentra.

Supongamos que ahora queremos buscar todas las palabras que comienzan con "p" en un texto. Podemos hacerlo de la siguiente manera:

```python
import re

texto = "python es un lenguaje de programación versátil y utilizado en diferentes áreas como desarrollo web, análisis de datos e intelegencia artificial"

patron = r"\bp\w+"

palabras = re.findall(patron, texto)

print(palabras)  # ['python', 'programación']
```

Para este ejemplo, utilizamos el método findall() el cual retorna una lista de todas las palabras que coinciden con el patrón.

Otro ejemplo, en este caso muy común en el desarrollo de aplicaciones, es cuando necesitamos validar si un correo electrónico es válido o no, para ello podemos hacer uso del método match, el cual intenta encontrar una coincidencia exacta entre el patrón y el inicio de la cadena. Si se encuentra una coincidencia, la función devuelve un objeto de coincidencia. En caso contrario, devuelve None.

```python
import re

def validar_correo(correo):
    patron = r'^[\w\.-]+@[\w\.-]+\.\w+$'

    if re.match(patron, correo):
        print("Dirección de correo válida.")
    else:
        print("Dirección de correo inválida.")


validar_correo("hola@test.com") # Dirección de correo válida.
validar_correo("hola.com") # Dirección de correo inválida.
```

También existen métodos para reemplazar ciertas palabras o caracteres por otros dentro de una cadena de texto, para ello podemos utilizar el método sub(), veamos un ejemplo.

```python
import re

# Reemplazar todas las vocales en una cadena por el carácter 'X'
cadena = "Hola, cómo estás?"
resultado = re.sub('[aeiou]', 'X', cadena)
print(resultado) #HXlX, cXmX XstXs?

```

En este ejemplo, utilizamos la expresión regular [aeiou] para encontrar todas las vocales en la cadena. Luego, usamos re.sub() para reemplazar cada vocal encontrada por el carácter 'X'. El resultado es la cadena modificada donde todas las vocales han sido reemplazadas.

En ocasiones necesitamos dividir algún texto en partes excluyendo algún tipo de delimitador, como puede ser un espacio vacío, una coma, un punto, etc. Podemos hacer uso del método split(), veamos un ejemplo

```python
import re

# Dividir una cadena en palabras utilizando espacios y signos de puntuación como separadores
cadena = "Hola, ¿cómo estás? ¡Espero que bien!"
resultado = re.split('\W+', cadena)
print(resultado) #['Hola', 'cómo', 'estás', 'Espero', 'que', 'bien', '']
```

Al usar re.split(), obtenemos una lista con todas las palabras de la cadena, excluyendo los separadores.


## Casos de uso comunes de las expresiones regulares en Python

Luego de haber entendido como son las expresiones regulares con python y ver algunos ejemplos de como implementarlas, podemos enumerar algunos casos de uso comunes

1. Validar formatos: Las expresiones regulares permiten verificar
   si una cadena cumple con un formato específico, como direcciones de
   correo electrónico, números de teléfono o contraseñas.

2. Extracción de información: Puedes utilizar expresiones regulares
   para extraer datos específicos de un texto, como fechas, URLs, nombres o números.

3. Filtrado de contenido: Con las expresiones regulares, es posible
   filtrar y eliminar contenido no deseado de un texto, como etiquetas
   HTML, caracteres especiales o espacios en blanco innecesarios.

En resumen, las expresiones regulares en Python son una herramienta esencial para trabajar con texto y realizar operaciones avanzadas de búsqueda y manipulación. Con lo aprendido en este artículo, deberías ser capaz de utilizar expresiones regulares en tus propios proyectos de Python.
