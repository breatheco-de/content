---
title: "Condicionales en la programación en Python"
subtitle: "Uso de condiciones para controlar el flujo de tu código y tomar decisiones programáticas en python"
date: "2019-11-11"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
author: ["alesanchezr"]
syntax: ["python"]
tags: ["Condicionales", "Operaciones lógicas", "If...else", "Condicion","Python"]
---

## Introducción a los condicionales en Python 

Dominar el uso de las condiciones es una de las 5 habilidades fundamentales de construir algoritmos:

1. Variables.
2. `Condicionales`.
3. Arrays(Arreglos).
4. Loops(Bucles).
5. Funciones.

El uso de condicionales son la única forma que los desarrolladores tenemos para tomar decisiones cuando codificamos nuestros algoritmos. 

Digamos que estamos construyendo un programa para ayudarnos a elegir qué almacenar y odiamos el color azul, podemos decirle a la computadora que evite el azul usando una condición como esta:
  
```python
if color == 'blue':
    # haz algo
else:
    # haz otra cosa
```
  
![Condicionales](https://ucarecdn.com/e73b673e-d744-45a7-a1ed-61a1dae49560/)


[[info]]
|:link: El uso de switch no esta disponible en python


## Primero veamos ¿qué es una expresión lógica en Python?

Las expresiones lógicas te permiten saltarte condicionalmente una serie de líneas de tu código. La forma más fácil de entender expresiones lógicas (al menos para esta lectura en particular), es pensar en ellas como en preguntas que le puedes hacer a la computadora sobre nuestras variables, por ejemplo:

1. Si el usuario es mayor de edad.
2. Si hoy es martes.
3. Miles de otras preguntas.

Para poder hacer una pregunta, primero tienes que tener información almacenada en variables útiles, por ejemplo, podemos tener la edad del usuario almacenada en una variable `edad` y podriamos preguntar:

```python
# se utiliza dos veces igual (=) cuando quieres comparar en lugar de asignar el valor
if edad == 25:
    print("Eres mayor de edad!!")
```
Si no tienes información almacenada en variables no puedes hacer preguntas ¡Hay que planificar y construir una estrategia!

### ¿ Qué tipo de preguntas/condiociones puedes usar/preguntar? 

El ejemplo previo era una simple condición, pero en la vida real escoger que ponerse involucra una combinación de varias condiciones para tomar una decisión final. 

### Operadores lógicos en Python

Para hacer una pregunta, tenemos las siguientes comparaciones: `==`, `>`, `<`, `!=`, `is None`, `is not None`, `in`:

| Operador      | Ejemplo       | Descripción   |
| ------------  | -----------   | --------------|
| `==`          | `if a == b`   | Si el valor de la variable A es igual a B |
| `<`           | `if a < b`    | Si el valor A es menor que B |
| `>`           | `if a > b`    | Si el valor A es mayor que B |
| `!=`          | `if a != b`   | Si el valor de A es diferente B |
| `is not None` | `if a is not None` | Si a es diferente de None (ninguno) |
| `is None`     | `if a is None`| Si el valor de A es igual a None (ninguno) |
| `in`          | `if name in ['bob','maria','nancy']` | Si el valor de `name` esta contenido dentro de la lista de nombres  |

## Operadores `AND` y `OR`

Otra forma de escribir el algoritmo es combinar preguntas en la misma condición utilizando los operadores `AND` y` OR`:

```python
siento_que_me_atropelló_un_auto = verdadero
           me atropelló_un_auto = faldo

Si siento_que_me_atropelló_un_auto and me atropelló_un_auto
        print("Tú no tienes gripe")
    elif siento_que_me_atropelló_un_auto
        print("Si tienes gripe")
```
Como puedes ver usamos `elif` por primera vez, para codificar más rápido. Otro truco que puedes usar es el siguiente;

En vez de `if(siento_que_me_atropelló_un_auto == true` escribe `if(siento_que_me_atropelló_un_auto)`
En vez de `me_atropelló_un_auto == false` escribe `if(!me_atropelló_un_auto)`

## If...else en Python

También puedes usar la expresión `else` para referirte a la negación de la primera condición:

```python
if color "azul":
  # Descarta esta prenda de vestir
else:
  # Guárdala en mi armario
  
edad = 12
if (edad < 18):
  print("Es mayor de edad")
else:
  print("No es mayor de edad")
```

También puedes anidar condiciones if...else una sobre la otra, de esta forma:

```python
if edad < 16: 
  # No puedes hacer nada
elif: age < 18:
  # A estas alturas, ya sabemos que mayor de 15 por que sino no hubiese ingresado a la primera condición.
elif: age < 21:
  # Si el algoritmo ingresa aquí, sabemos que es mayor de 17 
else:
  #Si el algoritmo ingresa aquí, sabemos que es  mayor de 20
  

  
edad = 12
if (edad < 18):
  print("Es mayor de edad")
else:
  print("No es mayor de edad")
```

Aquí hay otro rjrmplo que ejecuta un algoritmo para saber si un número tiene centenas:

```python
valor = 14

if (valor < 10):
  print("El valor es una unidad")
elif (valor < 100):
  print("El valor es una decena")
elif (valor < 1000):
  print("El valor es una centena")
elif (valor < 10000):
  print("El valor es un millar")
else:
  print("Es un número grande")
```

## `switch` en Python

Python no tiene una sentencia `switch`.

## CONCLUSIÓN

Hay que saber qué preguntas hacer. El ejemplo anterior era una condición simple, pero en la vida real, elegir qué hacer implica una combinación de varias condiciones para tomar la decisión final, por ejemplo: Veamos este algoritmo que le dice a una computadora cómo decidir qué ponerse durante el día de San Valentín:

![What ot ware in valentines day](https://ucarecdn.com/87f2be86-32c3-4bfc-8db4-dbd0d979e4d3/)


```python
if voy_a_salir:
    if puedo_comprar_una_hamburguesa:
        if con_queso:
                # haz algo 
        
    else:
        if blazers > 3
            # haz algo 
        else:
            # haz algo 
    elif sus_pantalones:
        # haz algo con tu codigo aqui
    else:
        # haz algo con tu codigo aqui
else:
    if desnuda_en_puerta:
        # haz algo con tu codigo aqui
    elif blazers > 3:
        # haz algo con tu codigo aqui
    else:
        # haz algo con tu codigo aqui
```
