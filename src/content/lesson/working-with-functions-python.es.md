---
subtitle: "Las funciones no son opcionales - Es probable que sean la característica más utilizada en cualquier lenguaje de programación. Te permiten separar tu código en miniprogramas más pequeños, donde cada uno se ocupa de lo suyo. ¡Divide y conquistarás!"
title: "Trabajando con Funciones"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"

date: "2020-02-13"
syntax: ["python"]
tags: ["python", "fuctions"]
---


## ¿Qué son las Funciones?

Básicamente, una función un conjunto de lineas de código agrupadas para cumplir un objectivo específico, por ejemplo veamos esta función para multiplicar dos numeros:

```python
def multiplicar(a,b):
    return a*b

resultado = multiplicar(2,6)
print(str(resultado)) # imprime 12
```

Analizando el código de arriba tenemos las siguientes conclusiones:

- Para crear una función debemos utilizar la sentencia `def`.
- Luego de `def` colocamos el nombre que le queremos dar a la función (en este caso "multiplicar").
- Después del nombre debemos colocar entre paréntesis los parámetros (entradas) que tendrá la función separados por coma (en este caso `a` y `b`). Nota: Los nombres de los parametros son indiferentes, lo importante es el orden en el que los declaras.
- En en las lineas de mas abajo (dentro de la función) debemos espeficicar el algoritmo que utilizara la funcion para lograr su objetivo.
- Por ultimo debemos retornar (`return`), es lo mas importante, toda funcion debe retornar algo, asi sea `None`.

De ahora en adelante cada vez que quiera multiplicar dos numeros puedo utilizar `multiplicar` de la siguiente manera, cuantas veces necesitemos:

```python
resultado1 = multiplicar(2,6)
print(str(resultado1)) # imprime 12

resultado2 = multiplicar(5,2)
print(str(resultado1)) # imprime 10
```

[[info]]
| :tv: Haz click aqui para un [video explicativo sobre functiones](https://www.youtube.com/watch?v=_C7Uj7O5o_Q) (10min)

### Segundo ejemplo de funcíon

Veámos esta función que dado un numero de invitados permite calcular el costo de organizar una fiesta con el siguiente algoritmo:

1. Primero se debe conocer el numero de invitados (se le debe pasar como parámetro a la función)
2. El costo general de una fiesta es 10 dolares por invitados
3. Si hay mas de 200 invitados se ofrece un descuento de 10%.

```python
def calcular_costo(numero_de_invitados=0):
    precio_por_invitado = 10
    costo_total = numbero_de_invitados * precio_por_invitado
    if numero_de_invitados > 200:
        costo_total = costo_total - (costo_total * 0.1) # ← descuento de 10%
    return costo_total

```
<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/calcular-costo-fiesta?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Datos importantes de funciones en python

1. **Cada función debe tener un propósito.** (un objetivo) (como nuestra función "multiplicar"). El propósito de la función es calcular la multiplicación entre dos números dados.
2. **Debe tener un nombre único.**  En este caso particular, nuestra función se llama "multiplicar", que es un gran nombre porque sabes exactamente de qué se tratan las funciones, es explícita.
3. **Debe devolver algo (normalmente)**  De forma predeterminada, en Python, todas las funciones devuelven `None`, pero debe reemplazar y siempre devolver algo útil. En este ejemplo, queremos devolver el resultado de una multiplicación de a & b.
4. **Las funciones pueden tener parámetros.**  Un "parámetro" es una variable que la función puede recibir al principio de su código (como a y b en nuestro ejemplo).

La idea es tener una librería de cientos de funciones y usarlas como nos plazca, declaras todas tus funciones y luego empiezas a usarlas y reutilizarlas todo el tiempo.

## Pero, ¿Por qué usar Funciones en lugar de simplemente hacer todo en una gran porción de código?

La codificación es muy abstracta y sucede mucho que no tienes idea de lo que escribiste ayer. Antes de que existieran las funciones, los algoritmos eran esta enorme serie interminable de líneas de código donde los desarrolladores tendrían dificultades y se perderían. Es difícil para tu cerebro seguir un procedimiento / algoritmo de gran longitud; Cuantas más líneas de código, más abstracto se vuelve.

Al utilizar funciones tienes las siguientes ventajas:

1. **Dividir y conquistar**: divide tu algoritmo en sub-algoritmos más pequeños y concéntrate en un problema a la vez.
2. **Menos código**: Mientras menos codigo mejor, cuando usas funciones estas pensando en reutilizar en lugar de copiar y pegar.
3. **Reutiliza tu código** llamando a la función varias veces, reduciendo drásticamente la longitud de tu código.
4. **Organiza tu código**: los nombres de las funciones te dirán qué hace esa parte del código, puedes tener todas las funciones en un archivo separado y reutilizarlo en todos sus desarrollos futuros.

[[info]]
| :point_up: Si lo piensas bien, las funciones son equivalentes a los libros. Almacenas las funciones y en futuros desarrollos simplemente los reutiliza en lugar de tener que resolver todo de nuevo.

## El Alcance de la Función

Todas las funciones deben comenzar y terminar en algún lugar, esto es llamado **el alcance de la función**. Puedes delimitar los límites de la función utilizando identación de la siguiente manera:

```python

# esta parte del código está FUERA de la función 'multiplica'

def multiplica(a, b):

    # esta parte del código está DENTRO de mi función 
    # porque esta despues de la declaración e identada a la derecha
    
    return a * b;

    # esta parte del código está DENTRO
    # pero nunca se ejecutará porque se encuentra DESPUÉS de del return


# esta parte del código está FUERA de la función 'multiplica' 
# porque ya no tiene la identación a la derecha
print(str(multiplica(34, 2)))
```

Cualquier variable que declare dentro de la función no estará disponible fuera de ella.

```python
def multiplica(a, b):
   myVariable = 'hello'
   return a * b

# este print no funcionará, generará un error, porque myVariable fue 
# declarado dentro de la función multiplicar, por lo tanto no está disponible fuera de su alcance.
print(myVariable)
```

[[warning]]
| :point_up: Es muy importante recordar que una vez que use la instrucción `return`, la función dejará de ejecutarse, si hay algún código después de esa instrucción, nunca se ejecutará.

## Funciones Anónimas Lambda

Si tu función va a tener una sola linea de código puedes declararla de una forma mucho mas ágil utilizando la parabra reservada `lambda`.

```python
multiplica = lambda a, b : a * b
resultado = multiplica(2,3)
print(str(resultado))
```

Lamba es ideal para casos en los que tengas funciones muy pequeñas por rapido que resulta utiliarlo, aprenderás a amarlo mas adelante cuando tengas que iterar arreglos y modificar sus elementos.


## Llamando funciones de forma anidada

Puedes combinar funciones como quieras y tener llamadas encadenadas como esta:

```python
def suma(a,b):
   return a+b

def multiplica(a,b)
   return a*b

resultado = multiplica(suma(3,5),suma(1,1)))


# Las ejecuciones van de adentro hacia afuera. 
# Primero, se calculará la suma de 3 + 5 y 1 + 1. 
# A continuación, se multiplicarán sus respectivos resultados. 
first = suma(3,5)
second = suma(1,1)
print(str(multiplica(first, second)))
```

[[demo]]
| :point_up: [Ver este ejemplo en vivo en replit](https://repl.it/@4GeeksAcademy/nested-function-calling-python)

## Veamos un ejemplo:

El siguiente código tiene 3 funciones declaradas:

```python
def get_average(ages):
    #some code here

def get_youngest(ages):
    #some code here

def get_person_info(name):
    #some code here
```

Como puedes ver, los nombres de las funciones son bastante específicos sobre lo que hacen las funciones, así como los parámetros asignados a ellas.

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/functions-example-python?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Otras cosas importantes a tener en cuenta:

- Estamos llamando a la función `get_person_info` dos veces, sin usar funciones tendríamos que usar más código porque no tendríamos ninguna opción para reutilizar la función.
- La función `get_average` es obtener el valor promedio en una matriz dada. No sabe nada más ¡Y eso es genial! Al separar su código en pequeñas funciones, puede concentrarse en una cosa a la vez.
