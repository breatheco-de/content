---
title: "Expresiones Regulares en Python: Domina la Potencia del Patrón de Búsqueda"
subtitle: "Aprende a utilizar expresiones regulares en Python para buscar y manipular patrones de texto. Descubre cómo aprovechar esta poderosa herramienta."
tags: ["python", "expresiones-regulares"]
authors: ["danielmoret"]

---

Las expresiones regulares en Python se utilizan para validar y manipular texto, ya que estas son patrones que nos ayudan a encontrar coincidencias en cadenas de texto.

Un [ejemplo de uso de una expresión regular en Python](https://4geeks.com/es/lesson/regex-tutorial-regular-expression-ejemplo) podría ser para buscar un número de teléfono en un texto.

```python runable=true
import re

saludo = "Hola, ¿cómo estás? Mi número de teléfono es 153-156-5555."

# Buscar un número de teléfono en el texto.
numero = re.search('\d{3}-\d{3}-\d{4}', saludo)

if numero:
  print("Número encontrado:", numero.group())
else:
  print("No se encontró ningún número.")
```

En este ejemplo utilizamos la función `search()`, la cual buscará en la cadena de texto `saludo` si hay alguna coincidencia con la expresión regular `/\d{3}-\d{3}-\d{4}/`, si encuentra un número que coincida con el patrón de búsqueda, se imprime en pantalla que se encontró. De lo contrario, se muestra un mensaje indicando que no se encontró ningún número.

> 💡 Conoce muchos [ejemplos y tipos de expresiones regulares](https://4geeks.com/es/lesson/regex-tutorial-regular-expression-ejemplo) de forma interactiva.

## Metacaracteres en expresiones regulares

Antes de comenzar a explicar como se utilizan las expresiones regulares en Python, debemos conocer el significado de los metacaracteres los cuales nos ayudarán a construir nuestras expresiones regulares y asi definir nuestros patrones de búsqueda, estos son algunos de ellos.

| Caracter especial     | Ejemplo                             | Descripción                                                                                    |
| --------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| **^**                 | expReg = / **^** a/                 | El texto debe comenzar por “a”                                                                 |
| **$**                 | expReg = /a **$**/                  | El texto debe terminar en “a”                                                                  |
| **\***                | expReg = /a **\***/                 | El caracter “a” debe aparecer 0 o más veces                                                    |
| **?**                 | expReg = /abc **?**/                | Se busca “abc” en todo el texto, para ser válido debe al menos encontrar “ab”, “c” es opcional |
| **\d**                | expReg = /**\d**/                   | Busca cualquier dígito entre 0 y 9                                                             |
| **[]**                | expReg = /[abc]/                    | Será válido si el texto contiene a,b o c                                                       |
| **()**                | expReg = /([a-z] {2,} [0-9] {3,5})/ | Sirve para agrupar distintas expresiones regulares                                             |
| **{n,m}** donde m > n | expReg = /a **{3,4}**/              | Será válido si en el texto hay alguna coincidencia, con “aaa” o “aaaa”                         |

## Métodos de Expresiones Regulares en Python

Para poder utilizar las expresiones regulares en Python primero debemos importar en nuestro código el módulo `re`, de esta manera podemos empezar a utilizar los métodos proporcionados por este módulo, el cual nos permitirá empezar a manipular texto haciendo uso de estas.

Existen distintos métodos para trabajar con expresiones regulares en Python, por ejemplo el método `search()`, el cual busca una coincidencia en la cadena de texto y retorna un `objeto Match` (objeto que contiene información de la búsqueda) si hay coincidencia, de lo contrario devolverá `None`, cabe destacar que este método solo retornara la primera coincidencia.

```python runable=true
import re

frases = ["Python es uno de los lenguajes mas utilizados por los programadores", "JavaScript es uno de los lenguajes mas utilizados por los programadores"]

patron = "Python"

for frase in frases:
  busqueda = re.search(patron, frase)
  if busqueda:
     print("Encontrado!", busqueda.group())
  else:
    print("No encontrado", busqueda)

```

Para este ejemplo, se utiliza la función `search()` para buscar la palabra `Python` en los elementos de la lista `frases`.En este caso, en la primera iteración del ciclo for se imprimirá por la terminal `Encontrado! Python`, mientras que en la segunda iteración se imprimirá `No encontrado None`.

Supongamos que ahora queremos buscar todas las palabras que comienzan con `"t"` en un texto. Podemos hacerlo de la siguiente manera:

```python runable=true
import re

texto = "tres tristes tigres, tragaban trigo en un trigal, en tres tristes trastos, tragaban trigo tres tristes tigres."

patron = r"\bt\w+"

palabras = re.findall(patron, texto)

print(palabras)  # ['tres', 'tristes', 'tigres', 'tragaban', 'trigo', 'trigal', 'tres', 'tristes', 'trastos', 'tragaban', 'trigo', 'tres', 'tristes', 'tigres']
```

Para este ejemplo, utilizamos el método `findall()` el cual retorna una lista de todas las palabras que coinciden con el patrón.

Otro ejemplo, en este caso muy común en el desarrollo de aplicaciones, es cuando necesitamos validar si un correo electrónico es válido o no, para ello podemos hacer uso del método `match`, el cual intenta encontrar una coincidencia exacta entre el patrón y el inicio de la cadena. Si se encuentra una coincidencia, la función devuelve un objeto de la coincidencia. En caso contrario, devuelve None.

```python runable=true
import re

def validar_correo(correo):
    patron = r'^(?=.*[a-zA-Z])[a-zA-Z0-9_.+-]+@(gmail|hotmail|outlook)\.(com)$'
    test = re.match(patron, correo)
    if re.match(patron, correo):
        print("Dirección de correo válida.")
    else:
        print("Dirección de correo inválida.")


validar_correo("carlos@gmail.com") # Dirección de correo válida.
validar_correo("hola.com") # Dirección de correo inválida.
```

En este ejemplo por medio del método `match()` verificamos si el correo electrónico que le pasamos a la función `validar_correo` es un correo válido `gmail`, `hotmail` o `outlook`

También existen métodos que nos permiten reemplazar palabras o caracteres por otros, que se encuentren dentro de una cadena de texto, para ello podemos utilizar el método `sub()`, veamos un ejemplo:

```python runable=true
import re

# Reemplazar todas las vocales de una cadena de texto por el carácter 'X'
frase = "las vocales son a e i o u"
resultado = re.sub('[aeiou]', 'X', frase)
print(resultado) # lXs vXcXlXs sXn X X X X X

```

En el ejemplo se utiliza la expresión regular `/[aeiou]/` para detectar todas las vocales en la cadena de texto `frase`. Luego, usamos el método `sub()` para reemplazar cada vocal encontrada por el caracter `'X'`. La variable `resultado` será la cadena de texto `frase` modificada, donde todas las vocales han sido reemplazadas.

En ocasiones necesitamos dividir algún texto en partes, excluyendo algún tipo de delimitador, como puede ser un espacio vacío, una coma, un punto, etc. Para ello podemos hacer uso del método `split()`, veamos un ejemplo.

```python runable=true
import re

texto = "Hola, ¿cómo estás? Espero que bien"
resultado = re.split('\W+', texto)
print(resultado) # ['Hola', 'cómo', 'estás', 'Espero', 'que', 'bien']
```

Al usar `split()`, obtenemos una lista con todas las palabras de la cadena, excluyendo todos los caracteres que no son alfanuméricos.

## Casos de uso comunes de las expresiones regulares en Python

Luego de haber entendido cómo utilizar las expresiones regulares en [Python](https://4geeks.com/technology/python) y ver algunos ejemplos de como implementarlas, podemos enumerar algunos casos de uso comunes, como lo son:

1. Validar formatos: Las expresiones regulares permiten verificar si una cadena de texto cumple con un patrón específico, como direcciones de correo electrónico, números de teléfono o contraseñas.

2. Extraer información: Se pueden utilizar expresiones regulares para extraer datos específicos de un texto, como fechas, URLs, nombres o números.

3. Filtrar contenido: Con las expresiones regulares, es posible filtrar y eliminar contenido no deseado de un texto, como etiquetas HTML, caracteres especiales o espacios en blanco innecesarios.

En resumen, las expresiones regulares en Python son una herramienta esencial para trabajar con texto y realizar operaciones avanzadas de búsqueda y manipulación. Con lo aprendido en este artículo, deberías ser capaz de utilizar expresiones regulares en tus propios proyectos de Python, si deseas conocer más sobre [qué es Python](https://4geeks.com/es/lesson/que-es-python-tutorial) puedes revisar el [Blog de 4Geeks](https://4geeks.com/es/how-to).
