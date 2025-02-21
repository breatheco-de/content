---
subtitle: "Las funciones no son opcionales - Es probable que sean la característica más utilizada en cualquier lenguaje de programación. Te permiten separar tu código en mini programas más pequeños, donde cada uno se ocupa de lo suyo. ¡Divide y conquistarás!"
title: "Trabajando con Funciones"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
syntax: ["python"]
tags: ["python","funciones-de-python"]
status: "published"

---

Dominar el uso de listas y bucles es una de las 5 habilidades fundamentales para construir algoritmos:

1. Variables.
2. Condicionales.
3. Listas.
4. Bucles.
5. `Funciones`.

## ¿Qué son las Funciones?

Básicamente, una función es un conjunto de líneas de código agrupadas para cumplir un objetivo específico. Por ejemplo, veamos esta función para multiplicar dos números:

```python
def multiplicar(a, b):
    return a * b

resultado = multiplicar(2, 6)
print(str(resultado))  # Imprime: 12
```

Analizando el código de arriba tenemos las siguientes conclusiones:

- Para crear una función debemos utilizar la sentencia `def`.
- Luego de `def` colocamos el nombre que le queremos dar a la función (en este caso "multiplicar").
- Después del nombre debemos colocar entre paréntesis los parámetros o entradas que tendrá la función separados por coma (en este caso `a` y `b`). Puedes escoger el nombre de los parámetros, pero siempre deben tener el mismo orden.
- Tenemos que terminar la línea con dos puntos `:`, de esa forma el computador sabrá que vamos a empezar a programar una función (algoritmo).
- Por último debemos añadir un `return` (es una buena práctica), toda función debe retornar algo, así sea `None`, en este caso retornamos la multiplicación entre los parámetros a y b (entradas).

De ahora en adelante, cada vez que quiera multiplicar dos números puedo reutilizar la función `multiplicar` de la siguiente manera, cuantas veces lo necesites:

```python
resultado_1 = multiplicar(2, 6)
print(str(resultado_1))  # Imprime: 12

resultado_2 = multiplicar(5, 2)
print(str(resultado_2))  # Imprime: 10
```

> 📺 Haz clic aquí para ver un [video explicativo sobre funciones](https://www.youtube.com/watch?v=_C7Uj7O5o_Q) (10min)

### Segundo ejemplo sobre funciones

Veamos esta función que dado un número de invitados permite calcular el costo de organizar una fiesta con el siguiente algoritmo:

1. Primero se debe conocer el número de invitados (se le debe pasar como parámetro a la función)
2. El costo general de una fiesta es de 10 dólares por invitados
3. Si hay más de 200 invitados se ofrece un descuento de un 10%.

```python
def calcular_costo(numero_de_invitados):
    precio_por_invitado = 10
    costo_total = numero_de_invitados * precio_por_invitado
    if numero_de_invitados > 200:
        costo_total = costo_total - (costo_total * 0.1)  # ← descuento de 10%
    return costo_total
```

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/calcular-costo-fiesta?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Datos importantes sobre las funciones en Python:

1. **Cada función debe tener un propósito.** (un objetivo) (como nuestra función "multiplicar"). El propósito de la función es calcular la multiplicación entre dos números dados.
2. **Debe tener un nombre único.**  En este caso particular, nuestra función se llama "multiplicar", que es un gran nombre porque sabes exactamente qué hace la función, es explícita.
3. **Debe devolver algo.**  De forma predeterminada, en Python, todas las funciones devuelven `None`, pero debes reemplazarlo y siempre devolver algo útil. En este ejemplo, queremos devolver el resultado de una multiplicación de a por b.
4. **Las funciones pueden tener parámetros.**  Un "parámetro" es una variable que la función puede recibir al principio de su código (como a y b en nuestro ejemplo).

La idea es tener una librería de cientos de funciones y usarlas como nos plazca, declaras todas tus funciones y luego empiezas a usarlas y reutilizarlas todo el tiempo.

## Pero, ¿Por qué usar Funciones en lugar de simplemente hacer todo en una gran porción de código?

La programación es muy abstracta y sucede mucho que no tienes idea de lo que escribiste ayer. Antes de que existieran las funciones, los algoritmos eran una enorme serie interminable de líneas de código donde los desarrolladores tenían dificultades y se perdían. Es difícil para tu cerebro seguir un procedimiento/algoritmo de gran longitud; Cuantas más líneas de código, más abstracto se vuelve.

Al utilizar funciones tienes las siguientes ventajas:

1. **Dividir y conquistar**: divide tu algoritmo en sub-algoritmos más pequeños y concéntrate en un problema a la vez.
2. **Menos código**: mientras menos código mejor, cuando usas funciones estás pensando en reutilizar en lugar de copiar y pegar.
3. **Reutiliza tu código**: llamando a la función varias veces, reduciendo drásticamente la longitud de tu código.
4. **Organiza tu código**: los nombres de las funciones te dirán qué hace esa parte del código, puedes tener todas las funciones en un archivo separado y reutilizarlas en todos sus desarrollos futuros.

> ☝ Si lo piensas bien, las funciones son equivalentes a los libros. Almacenan funciones y formas de hacer las cosas y en futuros desarrollos simplemente los reutilizas en lugar de tener que resolver todo de nuevo.

## El Alcance de la Función

Todas las funciones deben comenzar y terminar en algún lugar, esto se llama **alcance de la función**. Puedes delimitar el alcance de la función utilizando la indentación de la siguiente manera:

```python
# Esta parte del código está FUERA de la función 'multiplicar'

def multiplicar(a, b):
    # Esta parte del código está DENTRO de mi función 
    # porque está después de la declaración e indentada a la derecha
    
    return a * b

    # Esta parte del código está DENTRO
    # pero nunca se ejecutará porque se encuentra DESPUÉS del return


# esta parte del código está FUERA de la función 'multiplicar' 
# porque ya no tiene la indentación a la derecha
print(str(multiplicar(34, 2)))
```

Cualquier variable que declare dentro de la función no estará disponible fuera de ella.

```python
def multiplicar(a, b):
   mi_variable = 'hello'
   return a * b

# Este print no funcionará, generará un error, porque mi_variable fue 
# declarada dentro de la función multiplicar, por lo tanto, no está disponible fuera de su alcance
print(mi_variable)
```

> ☝ Es muy importante recordar que una vez que use la instrucción `return`, la función dejará de ejecutarse, si hay algún código después de esa instrucción, nunca se ejecutará.


## Funciones Lambda (funciones de una línea)

Si tu función va a tener una sola línea de código, puedes declararla de una forma mucho más ágil utilizando la palabra reservada `lambda`.

```python
multiplicar = lambda a, b : a * b
resultado = multiplicar(2, 3)
print(str(resultado))
```

Lambda es ideal para casos en los que tengas funciones muy pequeñas. Aprenderás a quererlas por lo rápido que resulta codificar, especialmente cuando tengas que iterar listas.

## Llamando funciones

La única forma de usar una función (es decir, "llamarla") es usando paréntesis de esta forma:

```python
# Así se llama a una función sin parámetros  
multiplicar()

# Así se llama a una función con parámetros
multiplicar(<primer param>, <segundo param>)

# Por ejemplo, para multiplicar 3 por 9
multiplicar(3, 9)
```

Recuerda asignarle a la función del parámetro que debiese recibir. En nuestro ejemplo, la función multiplicar se declaró pidiendo dos números para multiplicar.

## Llamando funciones de forma anidada

Puedes combinar funciones como quieras y tener llamadas encadenadas como esta:

```python
def suma(a, b):
   return a + b

def multiplicar(a, b)
   return a * b

resultado = multiplicar(suma(3, 5), suma(1, 1)))


# Las ejecuciones van de adentro hacia afuera
# Primero, se calculará la suma de 3 + 5 y 1 + 1 
# A continuación, se multiplicarán sus respectivos resultados 
primero = suma(3, 5)
segundo = suma(1, 1)
print(str(multiplicar(primero, segundo))
```

> ☝ [Ve este ejemplo en vivo en replit](https://repl.it/@4GeeksAcademy/nested-function-calling-python)

## Veamos un ejemplo:

El siguiente código tiene 3 funciones declaradas:

```python
def get_average(ages):
    # Código del algoritmo

def get_youngest(ages):
    # Código del algoritmo

def get_person_info(name):
    # Código del algoritmo
```

Como puedes ver, los nombres de las funciones son bastante específicos sobre lo que hacen las funciones, así como los parámetros asignados a ellas.

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/functions-example-python?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Otras cosas importantes a tener en cuenta:

+ Estamos llamando a la función `get_person_info` dos veces, sin usar funciones tendríamos que usar más código porque no tendríamos ninguna opción para reutilizar la función.
+ La función `get_average` es obtener el valor promedio en una lista dada. No sabe nada más ¡Y eso es genial! Al separar tu código en pequeñas funciones, puedes concentrarte en una cosa a la vez.
