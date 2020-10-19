---
title: "Es Hora de Aprender lo que es el manejo de cadenas (String) en Python"
subtitle: "Uno de los conceptos mas importantes de aprender, las cadenas de caracteres o 'strings' son esenciales para manejar texto, construir código dinámico y mucho más!"
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2020-10-19T12:36:31-04:00"
syntaxis: ["python"]
tags: ["cadena","python"]
status: "draft"

---

## ¿Que es una cadena?

Una cadena es una secuencia de caracteres. Las cadenas son una parte fundamental de la mayoría de los programas, así pues Python tiene varias características incorporadas que facilitan la manipulación de cadenas. Las cadenas tambien son tipos de datos primitivos (simples) y eso las hace ligeras y rapidas de utilizar.

## ¿Como Crear una cadena?

Muchos Strings se crean a partir de cadenas literales. Cuando el compilador encuentra una serie de caracteres entre comillas `("` y `")`, crea un objeto String cuyo valor es el propio texto. El esquema general es el siguiente: 

```python
nombre = "Hola mundo"
```

Si estamos desarrollando una aplicación, todo lo que el usuario escríba dentro de formulatios sera considerado una cadena de caracteres, incluso si el usuario escribe el numero dos (2), este sera considerado una cadena de caracters y no un numero a no ser que nosotros como desarrolladores lo convirtamos en numero explicitamente.

El uso mas común para una cadena de caracteres es utilizando la función print:

```python
print("Hola Mundo!")
# La funcion print recibe una cadena de caracteres y la muestra en la linea de commandos / terminal del computador.
 ```

## Uso de cadenas de caracteres

### Concatenación de cadenas
Python permite concatenar cadenas facilmente utilizando el operador `+`. El siguiente fragmento de código concatena 4 cadenas para producir una salida coherente:

```python
nombre = "Alejandro"
apellido = "Sanched"
print("Mi nombre es "+nombre+" "+apellido)

# Este codigo mostrará: "Mi nombre es Alejandro Sanchez" en la linea de comandos
 ```

En este ejemplo `"Mi nombre es "` es una cadena de caracteres que esta siendo concatenada con el valor de la variable `nombre`, `apellido` y una cadena de caracteres en el medio de nombre y apellido para separar.

### Longitud de cadenas

uno de los métodos mas habituales que se utilizan en un string es `len(<cadena>)`, que devuelve el nro. de caracteres de una cadena dada:

```python
nombre = "Alejandro"
print("La variable 'nombre' tiene "+str(len(nombre))+" caracteres")

# se muestra en el terminal: "La variable `nombre` tiene 9 caracteres"
```


### Extracción de caracteres

Para extraer un único carácter de una cadena, se puede referir a la posicion del caracter de la siguiente manera:

```python
nombre = "Alejandro";
print("El nombre empieza por "+nombre[0])

# Imprimirá "El nombre empieza por A" en la linea de comandos
```

Nota: este método de extracción de caracteres funciona muy parecido a los arreglos o listas en python.

Si se necesita extraer más de un carácter a la vez, se puede especificar la posicion y inicial que se desea substraer:

```python
nombre = "Alejandro"
print("Las primeras tres letras son "+nombre[0:3])
# Las primeras tres letras son Ale
```

### Comparación de cadenas

Si se desean comparar dos cadenas para ver si son iguales, puede utilizar `==` (o cualquier expresión logica). Devolverá `True` si los strings son IDENTICOS, se debe estar muy pendiente de las mayúsculas "Bob" es diferente a "bob" porque tiene la primera letra en mayúcula

Veamos ahora un ejemplo:
```python
cadena1="pepe"
cadena2="juan"
if cadena1 == cadena2:
    # son identicas
if cadena1 != cadena2:
    # no son identicas
```

### Conversión de minúsculas a mayusculas de una cadena

```python
cadena_en_minuscula = lower(cadena1) # Lo convierte a minúsculas.
cadena_en_minuscula = upper(cadena2) # Lo convierte a mayúsculas.
```

### Convertir cadenas a números o visceversa

La clase String no porporciona ningún método para convertir una cadena en un número. Sin embargo, cuatro clases de los "tipos envolventes" (Integer, Double, Float, y Long) proporcionan unos métodos de clase llamados valueOf() que convierten una cadena en un objeto de ese tipo. Aquí tenemos un pequeño ejemplo del método valueOf() de la clase Float:

```python
cadena = "34.4"
convertido_a_entero = int(cadena) # al convertirlo el valor de "convertido_a_numero" sera 34 y no "34.4" (como string)
convertido_a_numero_con_decimales = float(cadena) # al convertirlo el valor de "convertido_a_numero" sera 34.4 y no "34.4" (como string)
```

### Extraer un substring de un string

En muchas ocasiones es necesario extraer una porción o substring de un string dado. Como ya vimos solo debemos saber que posiciones queremos substraer y colocarlas utilizando corchetes de la siguiente manera:

```python

cadena = "El lenguaje Python"
print(cadena[1:5]) # Imprime "l le"
print(cadena[1:]) # Imprime "l lenguaje Python"
print(cadena[:5]) # Imprime "El le"

```