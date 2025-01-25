---
title: Cómo crear pruebas unitarias con JEST
tags:
  - Jest
  - pruebas unitarias
  - node js
  - javascript
  - back end
  - full stack
description: >-
  Aprende a crear pruebas unitarias con JEST y mejora la calidad de tu código en
  JavaScript. ¡Descubre cómo asegurar tu desarrollo hoy mismo!
---
Los seres humanos cometen errores, todo el tiempo. A medida que avances en tu carrera de desarrollador te sentirás más cómodo con eso.

Los desarrolladores Senior entienden que su código tendrá errores (no importa cuan inteligente sean) y que la única forma de que tenga calidad es escribiendo código adicional, a eso le llamamos "Pruebas unitarias", aquí aprenderás por qué y cómo hacerlo.

Hay varias maneras de probar tus aplicaciones, pero las pruebas unitarias son la herramienta más poderosa que tiene un desarrollador para asegurar un código de alta calidad.

![escribir código para probar código](https://github.com/breatheco-de/content/blob/master/src/assets/images/6b4upqv6at321.jpg?raw=true)


## ¿Qué son las pruebas unitarias?

Las pruebas unitarias son el proceso de dividir tu código en pequeñas funciones y probar cada una de esas funciones por separado. Por ejemplo:

Supongamos que estás construyendo una función `sum` que suma dos números:

```js
function sum(number1, number2) {
    return number1 + number2;
}
```

Una prueba unitaria para esta función solo se preocupa de la entrada y de la salida. **Con una entrada determinada, debería haber una salida esperada**: Si le pasas `12` y `5` como entradas a la función, debería salir (devolver) el número `17`.

El framework de pruebas Jest de JavaScript introduce una función especial llamada `expect` para permitirnos realizar las pruebas unitarias, aquí hay un ejemplo de cómo usar `expect` para crear nuestras pruebas unitarias.

```js
test('12 and 5 should return 17', () => {
    let result = sum(12,5);
    expect(result).toBe(17);
})
```

Nota: Las pruebas unitarias no se preocupan por el contenido de la función `sum`, solo se preocupan por la SALIDA de la función con una ENTRADA determinada.

![ejemplo de pruebas unitarias](https://github.com/breatheco-de/content/blob/47022c1089147219f9b5bb6c578969e18aebcbb0/src/assets/images/unit-test1-example.png?raw=true)

## Función Flecha

Otra novedad de ES6 son las "Funciones de Flecha". La forma de crear estas funciones es la siguiente: Primero, definiremos la lista de parámetros (si es necesario) entre paréntesis seguido del símbolo `=>` y las llaves `{}` para indicar las instrucciones a realizar.

Además de la sintaxis que es diferente a las anteriores, este tipo de funciones tienen las siguientes características.

Las "funciones de flecha" no crean su propio contexto al ser ejecutadas. A diferencia de la "funciones de expresión" o las "funciones declarativas" que sí crea su propio contexto.

Las "funciones de flecha" son anónimas.

El objeto *arguments* no está en el contexto de la función.

Si al definir la función, no usamos el símbolo de las llaves. La función devolverá como resultado la ejecución de la instrucción que hayamos indicado

## Beneficios de utilizar las pruebas unitarias

+ **Puedes encontrar y prevenir errores fácilmente:** Si hay un problema en el futuro, podrás identificar la causa mucho más rápido que si tuvieras que revisar todo el código. También tu usuario final estará muy contento de no tener un producto con errores.

+ **Las pruebas unitarias ahorran tiempo... y dinero:** Al escribir pruebas unitarias puedes identificar muchos posibles errores y solucionarlos de inmediato, en lugar de solucionarlos en diferentes etapas de tu producto.

+ **Tu código es más confiable y reutilizable:** Cuando tu código se divide en unidades o componentes donde cada uno tiene su responsabilidad o función, tu código se vuelve más confiable y te da más seguridad y como ya has hecho pruebas puedes reutilizarlo: es limpio y eficiente y puedes migrar tu código y pruebas a un nuevo proyecto.

+ Unas buenas pruebas unitarias sirven como **documentación** y pueden definir lo que se supone que debe hacer tu código.

+ **Las pruebas unitarias mejoran el trabajo en equipo:** Podrán seguir la lógica detrás de tu código y tu equipo será capaz de coordinar su código en consecuencia. Al revisar los códigos de los demás, el trabajo en equipo es más ágil.

## Escribiendo tu primera prueba unitaria con Jest

Jest es el framework de pruebas unitarias más popular en JavaScript, utilizado por grandes empresas como Airbnb, Twitter, Spotify y cuenta con plugins que se integran muy bien con frameworks de front-end como React, Vue, Angular, etc.

Requiere de casi 0 configuraciones para empezar a usarlo, es extremadamente rápido y los mensajes de error o de feedback son muy claros.

### Ejemplo de Sintaxis

La siguiente función devuelve `true` si el string de entrada dado está en mayúscula, en caso contrario devuelve `false`:

```js
function isUpperCase(sentence) {
     return (sentence == sentence.toUpperCase());
}
```

El código para probar esta función sería algo así:

```js
test('The string HELLO should return true', () => {
     const result = isUpperCase('HELLO');
     expect(result).toBe(true);
})
```

Aquí estamos probando la función para la entrada `HELLO`, pero hacer solo una prueba no es suficiente, tienes que probar todos los escenarios posibles.

## Probando fallas

Es mejor encontrar todas las fallas ahora que después (en producción), por eso tienes que construir tus pruebas intentando **romper tus funciones**.
En lugar de probar el escenario ideal, intenta pensar en posibles entradas extrañas que puedas pasar a tu función.

## Planificando tus pruebas

La única manera de asegurarte de que tu función `isUpperCase` funciona es probar todas las entradas posibles:

1. ¿Qué ocurre si le pasas una palabra en mayúscula?
2. ¿Qué ocurre si le pasas una palabra en minúscula?
3. ¿Qué ocurre si le pasas una palabra mixta (mayúscula y minúscula)?
4. ¿Qué ocurre si le pasas un número en lugar de un string?
5. ¿Qué ocurre si le pasas un booleano en lugar de un string?


![diferentes escenarios de pruebas unitarias](https://github.com/breatheco-de/content/blob/master/src/assets/images/unit-test-scenarios.png?raw=true)

Aquí está el código para cada prueba que debemos construir:

```js
// Primera prueba posible
test('The string HELLO should return true', () => {
     const result = isUpperCase('HELLO');
     expect(result).toBe(true);
})
// Segunda prueba posible
test('Testing for Hello (mixed)', () => {
     const result = isUpperCase('Hello');
     expect(result).toBe(false);
})
// Tercera prueba posible
test('Testing for hello (lower)', () => {
     const result = isUpperCase('hello');
     expect(result).toBe(false);
})
// Cuarta prueba posible
test('Boolean should return false', () => {
     const result = isUpperCase(true);
     expect(result).toBe(false);
})
// Quinta prueba posible
test('Number should return false', () => {
     const result = isUpperCase(12341234);
     expect(result).toBe(false);
})
```

Aquí hay un ejemplo funcionando:

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Unit-Testing-Example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Todas las posibles preguntas (aserciones) que puedes hacer

Hemos estado usando `expect(something).toBe(something)`, pero Jest tiene muchas funciones `expect` posibles que te ayudarán con tus pruebas, por ejemplo: 

| Descripción | Sintaxis |
| ----------- | ------ |
| Espera lo contrario | expect(false).not.toBe(true) |
| Espera un string contenga otro string | expect("hello world").stringContaining("world") |
| Espera que se defina una variable | expect(variable_name).toBeDefined() |
| Espera que un array contenga otro | expect(['a', 'b', 'c', 'e']).toEqual(expect.arrayContaining(['b', 'c'])) |

> 👉 Nota: [Aquí puedes encontrar todas las posibles funciones `expect` que puedes utilizar.](https://jestjs.io/es-ES/docs/expect)
