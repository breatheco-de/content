---
title: "RegEx for no match"
subtitle: "On RegEx for no match we cover how, by the means of Negative Look ahead, to create a regular expression that returns everything that doesn't match our expression."
tags: ["Python","JavaScript", "RegEx", "Regular Expressions", "no match"]
date: "2023-04-21T16:36:30+00:00"
authors: ["javierseiglie"]
status: "draft"

---

Debido a que regex no posee una función concreta para cuando no encuentra algo (pensemos que su finalidad es encontrar lo que le pedimos), haciendo uso de Negative Lookahead podemos hacer que nos devuelva cuando no realiza un match.

```javascript
const list = `English 101 Class A
English 201 Class B
Spanish 101 Class D
Italian 201 Class E
French 101 Class F
`;

const searchAllButEnglish = (listOfCourses) => {
  const regex = /^((?!English).)*$/gm;  
  return listOfCourses.match(regex)
} 

console.log(searchAllButEnglish(list))

/* expected Output:
[
  'Spanish 101 Class D',
  'Italian 201 Class E',
  'French 101 Class F',
  ''
]
*/
```

## Regex for No Match

Las expresiones regulares son extremadamente utiles a la hora de buscar la información que necesitamos dentro de un texto pero por la naturaleza y el fin para el cual fueron creadas, no constan con un mecanismo "per se" para hacer un match y retornarnos esa información cuando no encuentra algo. 

Gracias a las funcionalidades que posee, sí podemos realizar un match para cuando NO se encuentra información. Como mencionamos anteriormente, es mediante el uso del Negative Lookahead usando la expresion ` /^((?!).)*$/gm;`

## Analizando la expresión

Tomando la expresion que utilizamos en el ejemplo dado,  `/^((?!English).)*$/gm;` vamos a analizar que es lo que está sucediendo
 - /^  -> Le decimos que queremos que haga match desde la primera posiciçon
 - ((?!).)
 	- ( -> creamos un grupo
	(?!English) -> para hacer un Negative Lookahead (?!) del parametro (texto) que queremos que NO nos devuelva
	.) -> usamos el wildcar para que nos devuelva todo lo que encuentre se cumpla el Negative Lookahead y cerramos el grupo
 - *$ -> Le decimos que queremos que haga match en la última posiciçon
 - /gm; -> le indicamos que será una búsqueda global con la `g` y multilinea con la `m`

Ahora que ya hemos revizado la expresión regular que hemos utilizado en el ejemplo, vamos a ver cómo nos funciona tanto cuando el texto que buscamos, en este caso 'English' se encuentra en diferentes posiciones y el resultado que nos arrojará nuestra función.

### Javascript 

```javascript
const list = `English 101 Class A
301 English Class G
Class H 302 English
English 201 Class B
Spanish 101 Class D
Italian 201 Class E
French 101 Class F
`;

const searchAllButEnglish = (listOfCourses) => {
  const regex = /^((?!English).)*$/gm;  
  return listOfCourses.match(regex)
} 

console.log(searchAllButEnglish(list))

/* expected Output:
[
  'Spanish 101 Class D',
  'Italian 201 Class E',
  'French 101 Class F',
  ''
]
*/
```

### Python:

```python
import re

test_str = ("English 101 Class A\n"
	"English 201 Class B\n"
	"Spanish 101 Class D\n"
	"Italian 201 Class E\n"
	"French 101 Class F\n")

def searchAllButEnglish(text):
  regex = r"^((?!English).)*$"
  matches = re.finditer(regex, text, re.MULTILINE)
  for match in matches:
    print(match)
  return match
print(searchAllButEnglish(test_str))

# Exprected output:
# <re.Match object; span=(40, 59), match='Spanish 101 Class D'>
# <re.Match object; span=(60, 79), match='Italian 201 Class E'>
# <re.Match object; span=(80, 98), match='French 101 Class F'>
# <re.Match object; span=(99, 99), match=''>
# <re.Match object; span=(99, 99), match=''>

```


Como se puede observar, aún pasandole lineas de textos donde 'English' se encuentra en diferentes posiciones, sigue devolviendonos solo los elementos que NO contiene el parámetro de búsqueda que hemos declarado con el Negative Lookahead. Este comportamiento se debe a la inclusión de los símbolos `^`, `$`, `.`. 

> En Python recordar importar `re`, nuestro modulo de expresiones regulares.

Esperamos que haya sido útil este artículo!
