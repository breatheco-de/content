# Las expresiones regulares

Las expresiones regulares, también conocida como regex, permiten buscar y modificar un patrón de caracteres en un texto.

Un ejemplo de la utilidad de las expresiones regulares sería validar la estructura de un número telefónico. Con regex podemos hacerlo utilizando un patrón. Imaginemos que los números de teléfono de una región siguen un patrón como este `(XXX)-XXX-XXXX` donde "X" puede ser cualquier número del 1 al 9. Podemos definir la siguiente expresión regular:

```js
/^\([0-9]{3}\)-[0-9]{3}-[0-9]{4}$/
```

## Ejemplos de expresiones regulares resueltos:

### Expresión regular literal:

Son las más sencillas. Supongamos que queremos buscar la palabra “perro” la expresión regular sería:

const texto= "El perro verde"; // El texto que queremos analizar

```js
const regex= /perro/g; // Definimos la expresión regular. En JavaScript se usa el siguiente formato /aquí la expresion regular/. La g al final de la expresión regular la usamos para buscar todas las coincidencias de forma global

const coincidencias= texto.match(regex) // Declaramos una variable a la que asignaremos las coincidencias

console.log(coincidencias) //Mostramos por consola las coincidencias, en este caso: perro
``` 

Esta expresión no coincidirá con Perro o perrO. Solo coincidirá con la palabra escrita en minúsculas.


### Patrones simples:

Ahora queremos una expresión regular que coincida tanto con perro como con Perro.

En Javascript:

```js
const texto= "Perro, gato, jirafa, perro, caballo, unicornio" // El texto que queremos analizar

const regex= /[Pp]erro/g;  //Definimos la expresión regular. En JavaScript se usa el siguiente formato /aquí la expresion regular/ La g al final de la expresión regular la usamos para buscar todas las coincidencias de forma global

const coincidencias= texto.match(regex) // Declaramos una variable a la que asignaremos las coincidencias

console.log(coincidencias) //Mostramos por consola las coincidencias, en este caso: Perro, perro
``` 

En Python:

```python
import re

texto = "Perro, gato, jirafa, perro, caballo, unicornio" # El texto que queremos analizar

regex = r"[Pp]erro" # Definimos la expresión regular

coincidencias = re.findall(regex, texto) # Buscamos todas las coincidencias

print(coincidencias) # Mostramos por consola las coincidencias, en este caso: ['Perro', 'perro']
``` 

* Los corchetes [] permiten buscar cualquiera de los caracteres que se encuentre dentro. Por tanto [Pp] coincidirá tanto con p minúscula como con P mayúscula.



Otro ejemplo de un patrón simple de una expresión regular podría ser buscar en una base de datos usuarios cuyo nombre sea la palabra gato seguido de 1 o más números:

En Javascript:

```js
const usuarios= "david, maria5, juan3, gato123, PedroG, gato12345, gato, julian, gato1111" // El texto que queremos analizar

const regex= /gato[1-9]+/g; 

const coincidencias= usuarios.match(regex) // Declaramos una variable a la que asignaremos las coincidencias

console.log(coincidencias) //Mostramos por consola las coincidencias, en este caso: 'gato123', 'gato12345', 'gato1111'
``` 

En Python:
```python
import re

usuarios = "david, maria5, juan3, gato123, PedroG, gato12345, gato, julian, gato1111" # El texto que queremos analizar

regex = r"gato[1-9]+"

coincidencias = re.findall(regex, usuarios) # Buscamos todas las coincidencias

print(coincidencias) # Mostramos por consola las coincidencias, en este caso: ['gato123', 'gato12345', 'gato1111']
``` 

* [1-9]: es un rango que incluye del 1 al 9. También se puede usar [a-z] para letras entre a y z en minúscula o [A-Z] para letras entre la A y Z en mayúscula. Incluso [a-zA-Z] para las dos.

* +: Implica que debe haber una o más ocurrencias del carácter previo. En este caso sería al menos uno o más números del 1 al 9 después de la palabra gato.>Nota: Esta regex no detectaría al usuario “gato” puesto que debe ir precedido de uno o más números. Si utilizaramos el carácter “*” en vez de “+” sería entre cero y más ocurrencias y entonces si coincidiría con el usuario gato.


### Expresiones regulares complejas

En Javascript:

```js
const texto= "Este es mi texto de prueba en el que voy a querer cambiar unas palabras por otras. Simplemente buscado coincidencias";

const regex= /(?<=texto )(.*)(?= en)/s;

console.log(texto.replace(regex, 'modificado'));
//El resultado será= Este es mi texto modificado...
```

En Python:

```python
import re

texto = "Este es mi texto de prueba en el que voy a querer cambiar unas palabras por otras. Simplemente buscado coincidencias"

regex = r"(?<=texto )(.*)(?= en)"

resultado = re.sub(regex, 'modificado', texto)

print(resultado)
```

* ´(?<=texto )´ es una expresión de retroceso positivo que coincide con cualquier cadena de caracteres que esté precedida por "texto ". En otras palabras, este grupo de captura busca "texto " en la cadena de texto pero no la incluye en la coincidencia. Esto se conoce como una coincidencia positiva sin captura.

es una expresion de retroceso positivo que coincide con cualquier cadena de caracteres que esté seguido por 'en'. El grupo de caputa (.`*`)

* ´(.*)(?= en)´ es una expresion de retroceso positivo que coincide con cualquier cadena de caracteres que esté seguido por 'en'. El grupo de caputa (.`*`) captura cualquier carácter cero o más veces. Esto significa que la coincidencia será la menor cantidad posible de caracteres que satisface la expresión regular. El (?= en) asegura que la coincidencia termine justo antes de la cadena " en" en la cadena de texto, pero no la incluye en la coincidencia.

* El flag ´s´ al final de la expresión regular es una modificación de la expresión regular que indica que el carácter especial . debe coincidir con cualquier carácter, incluyendo el carácter de nueva línea.

En Javascript:

```js
const texto= "Este es mi texto de prueba en el que voy a querer cambiar unas palabras por otras. Simplemente buscado coincidencias";

const regex= /\./s;

console.log("las coincidencias han sido: ", texto.match(regex).length);
//El resultado será= las coincidencias han sido: 1.
```

En Python:

```python
import re

texto = "Este es mi texto de prueba en el que voy a querer cambiar unas palabras por otras. Simplemente buscado coincidencias"

regex = r"."

coincidencias = re.findall(regex, texto)

print("Las coincidencias han sido:", len(coincidencias))

#El resultado será: las coincidencias han sido: 1.
```

* `\.`: En este caso utilizamos el caracter de escape `\` antes del punto para indicar que queremos buscar el punto en vez del caracter especial "`.`" 
* Con este snippet podemos contar la cantidad de puntos que aparecen en un string.

Otra variante del anterior sería:

En Javascript:

```js
const texto= "Este es mi texto de prueba en el que voy a querer cambiar unas palabras por otras. Simplemente buscado coincidencias";

const regex= /\w/g;

console.log("El número de palabras que contiene texto es: ", texto.match(regex).length);
//El resultado será= El número de palabras que contiene texto es: 20.
```

En Python:

```python
import re

texto = "Este es mi texto de prueba en el que voy a querer cambiar unas palabras por otras. Simplemente buscado coincidencias"

regex = r"\w+"

coincidencias = re.findall(regex, texto)

print("El número de palabras que contiene texto es:", len(coincidencias))

#El resultado será: El número de palabras que contiene texto es: 20.
```

* `\b` coincide con un límite de palabra, lo que significa que solo coincidirá con palabras completas, no con partes de palabras.

* `\w` coincide con cualquier carácter de palabra, que incluye letras (mayúsculas y minúsculas), números y guiones bajos (_).

* `+` coincide con uno o más caracteres de palabra.

* `/g` es una bandera global que indica que se deben encontrar todas las coincidencias en la cadena de texto, en lugar de detenerse en la primera coincidencia encontrada.

En Javascript:

```js 
const regex = /^(?:(?!perro).)*$/;
console.log(regex.test("I love cats")); // El resultado será true porque NO contiene la palabra perro.
console.log(regex.test("I hate dogs")); // El resultado será false porque contiene la 
palabra perro.
```

En Python:

```python
import re

regex = r'^(?:(?!perro).)*$'

print(regex.search("I love cats") is not None) # El resultado será True porque NO contiene la palabra "perro"
print(regex.search("I hate dogs") is not None) # El resultado será False porque contiene la palabra "perro"
``` 

* ^: Este símbolo al principio de la expresión regular significa el inicio de la cadena.
* (?: ): Este es un grupo que no captura lo que coincide con el patrón dentro de él.
* (?!perro): Esta es una expresión que significa que el patrón sólo coincidirá si la cadena NO contiene "perro" en la posición actual.
* `.`: Este coincide con cualquier carácter excepto los caracteres de nueva línea.
* `*`: Este cuantificador significa que el patrón anterior se puede repetir cero o más veces.
* $: El símbolo del dólar al final de la expresión regular significa el final de la cadena.
