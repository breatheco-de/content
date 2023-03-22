---
title: "General Coding Standards and Guidelines"
subtitle: "The project assignments are an important part of our learning method, this lessons will show you what to expect and why the matter so much."
tags: ["4geeks method", "coding standards"]

---

>  🤯 "No soy un gran programador; solo soy un buen programador con buenos hábitos". - Kent Beck

Los estudios han demostrado que los desarrolladores que usan las mejores prácticas al codificar son hasta un 40% más productivos que aquellos que no lo hacen, y que el código con buenas prácticas es hasta un 50% más barato de mantener que el código con malas prácticas.

Además, las empresas y los gobiernos pierden mucho dinero todos los días porque los desarrolladores no siguen las mejores prácticas y directrices, aquí hay algunos ejemplos sobre los que puedes leer más:

- La Órbita Climática de Marte de la NASA se perdió porque el equipo no estaba usando un sistema de métricas consistente en la base de código; lo que llevó a una confusión en los cálculos, perdiendo $320 millones.
- La explosión del cohete Ariane 5 de la ESA fue causada por un código muy difícil de leer, $370 millones perdidos.
- El Flash Crash del mercado de valores de EE. UU. en 2010, pérdidas financieras significativas no divulgadas.

Esta lección es una compilación de las mejores prácticas que promovemos en 4Geeks, ha sido creada y crecida con contribuciones de todos los mentores de la comunidad.

## Variables globales
Es mejor evitar usar variables globales siempre que sea posible, usa más argumentos de función y valores de retorno para compartir datos entre diferentes partes de un programa. Esto puede ayudar a hacer que el código sea más mantenible, probado y confiable.

1. Las variables globales se pueden acceder desde cualquier lugar del código, lo que hace más difícil rastrear errores y entender cómo funciona el código.
2. Es más difícil aislar problemas cuando varias partes del código están interactuando con las mismas variables globales.
3. Los cambios en una variable global pueden tener consecuencias no deseadas en otras partes del código.

![no uses variables globales](https://breathecode.herokuapp.com/v1/media/file/dont-use-global-variables-png?)

## Nombres de variables
Algunas de las convenciones de nomenclatura se dan a continuación:

- Los nombres de variables significativos y comprensibles ayudan a cualquiera a entender el motivo de su uso.
- Las variables generales deben nombrarse en camelCase para [Javascript, Node, Java, Ruby, etc.](https://en.wikipedia.org/wiki/Snake_case), en `snake_case` para python, etc. Aquí puedes leer más sobre [convenciones de nomenclatura de variables](https://4geeks.com/lesson/variable-naming-conventions).
- Las variables constantes se nombran en LETRAS MAYÚSCULAS.
- Es mejor evitar el uso de dígitos en los nombres de variables.
- Los nombres de la función deben escribirse en camel case comenzando con letras pequeñas.
- El nombre de la función debe describir claramente y brevemente el motivo de usar la función

```text
Nombres de variables descriptivos
✅ BIEN: "customer_name" (describe el contenido de la variable)
❌ MAL: "x" (No descriptivo o significativo)

Usar convenciones de nomenclatura
✅ BIEN: "number_of_items" (todas las palabras que se usan)
❌ MAL: "n_items" (se utiliza la abreviatura)

✅ BIEN: "customerName" (se usa camelCase)
❌ MAL: "customername" (no se utiliza ninguna convención de nomenclatura)

Evitar usar nombres_de_una_sola_letra:
✅ BIEN: "customer_name" (Descriptivo y significativo)
❌ MAL: "x" (Una letra y no descriptivo)

Mantener los nombres cortos, pero no demasiado cortos:
✅ BIEN: "product_price" (corto y descriptivo)
❌ MAL: "p" (muy corto y no descriptivo)
```

## Indentación

Usar una herramienta de indentación más bonita o automática. Si eso no es posible (por alguna razón extraña), asegúrate de indentar manualmente cada uno:

- Elige cuántos espacios usarás (2 o 4 espacios por indentación).
- Usa un estilo de indentación consistente.
- Indenta bloques de código: Los bloques de código, como los que se encuentran dentro de una función o bucle, deben indentarse para distinguirlos visualmente del código circundante.

```javascript
if (condition) {
  // code block 1
} else if (condition) {
  // code block 2
} else {
  // code block 3
}
```

## Errores y excepciones
Cuando se codifica, algunos de los errores se ocultan a los desarrolladores a menos que se manejen activamente las excepciones, por esta razón, decidimos incluir esta guía en la lista.

- Usa bloques try-except y try-catch para manejar excepciones.
- Cuando se recuperen datos en javascript, siempre incluye la función `.catch()` o el bloque try-catch (si se usan promesas) y muestra el error en la consola.
- Registra errores y excepciones en la consola y en el archivo de registro si es posible.
- Evita suprimir excepciones.

## Legibilidad

 Crear código que sea fácil de leer es esencial para producir software de alta calidad que sea confiable, mantenible y fácil de modificar o actualizar. Tenemos un artículo completo sobre [legibilidad del código](/lesson/what-is-and-how-to-improve-code-readability) pero aquí hay un resumen muy corto de las mejores prácticas:

- Elije los nombres de variables con sabiduría.
- Separa tu código en funciones más pequeñas.
- Evita usar declaraciones else.
- Presta mucha atención a la sangría.
- No comentes demasiado tu código.
- Evita líneas de código largas.

### Evita anidar

Cuando sea posible, evita usar funciones anidadas como:

```python
def calculate_discount(item, quantity):
  if item.category == 'clothing':
    if quantity >= 10:
      return item.price * 0.9
    else:
      return item.price * 0.95
  elif item.category == 'electronics':
    if quantity >= 5:
      return item.price * 0.8
    else:
      return item.price * 0.9
  else:
    return item.price
```

El código está demasiado anidado y tiene una estructura compleja que puede ser difícil de seguir. Esto se puede mejorar refactorizando el código para usar menos niveles de anidamiento, o usando retornos tempranos o refactorizando las declaraciones condicionales para simplificar la estructura. Aquí hay un ejemplo:

```python
def calculate_discount(item, quantity):
  if item.category != 'clothing' and item.category != 'electronics':
    return item.price
  
  discount = 1.0
  if item.category == 'clothing':
    discount = 0.9 if quantity >= 10 else 0.95
  else:
    discount = 0.8 if quantity >= 5 else 0.9
  
  return item.price * discount
```
