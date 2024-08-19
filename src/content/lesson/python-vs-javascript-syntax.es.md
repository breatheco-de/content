---
title: "Entendiendo la Sintaxis de Python"
subtitle: "Desata tu poder aprendiendo con esta lección, usando uno de los Reyes del Desarrollo de Back-End. Ahora podrás integrar AI, Big Data, Aprendizaje automático, APIs e integrar aplicaciones de terceros en la tuya. Disfruta esta lección sobre la sintaxis de Python"
cover_local: "../../assets/images/576d4b0e-8b35-493d-879c-4d8f914c585f.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["python"]
status: "published"

---

El título de esta lección debería ser "De Python a JS", porque así es como evolucionó la historia. Python nació primero y es mucho más maduro. Con Python, eres capaz de hacer muchas más cosas porque es un lenguaje de back-end y tiene librerías y herramientas para cualquier cosa que puedas imaginar.

Python y JavaScript son amigos. Juntos forman el mejor equipo posible para realizar cualquier desarrollo importante que puedas imaginar.

<br>

## ¿Por qué Python?

Con JavaScript, estabas vinculado y limitado al navegador, no puedes acceder al computador del cliente y es básicamente un lenguaje de renderización. Pero Python es diferente, al ser un lenguaje de back-end, se ejecuta en tu propio servidor, lo que significa que tiene acceso y puedes controlar toda la computadora con él. Tienes acceso a cualquier aplicación que se ejecute en la misma computadora, acceso a la consola, a la red a la que está conectada la computadora y mucho más.

Por otro lado, Python es el lenguaje de back-end de más rápido crecimiento en el mundo. Es el lenguaje más versátil y fácil de codificar con una de las comunidades más sólidas.

Cuando lo comparas con otros lenguajes de back-end, Python lidera en casi todas las funciones que ofrece: Data Science, AI, desarrollos de API, desarrollos web, etc.

**Estas son algunas de las razones por las cuales Python ha llegado hasta este punto:**

|Simplicidad      |Rendimiento    |
|:---------------:|:------------------:|
|Python estaba destinado a ser simple y fácil. Aquí está el manifiesto de Python: <br> https://es.wikipedia.org/wiki/Zen_de_Python <br> <br> **Nota:** Ya no hay más punto y coma, corchetes, declarar variables, o la confusa funcionalidad del `this`.   |Python es más rápido que Java, PHP, Ruby y el 90% de los otros lenguajes back-end. Solo los lenguajes de bajo nivel como C++ (difícil de usar) o muy especializados como Node.js pueden superarlo. <br> <br> La escalabilidad de Python se ha demostrado una y otra vez con aplicaciones como el motor de búsqueda de Google, YouTube, Google Apps, etc.  |


|Comunidad        |Herramientas    |
|:---------------:|:------------------:|
|Python es el lenguaje oficial de Google. También es uno de los lenguajes más antiguos con comunidades enormes alrededor de cada una de sus librerías/herramientas. MIT lo usa para enseñar código. La NASA para construir cohetes. Quora, Facebook, Yahoo, Amazon, etc. ¡Casi todas las grandes empresas del mundo tienen que usarlo!      |La mayoría de las librerías de Python son las mejores en lo que hacen: [MatLab](https://www.mathworks.com/help/matlab/matlab-engine-for-python.html?requestedDomain=true) (para procesamiento de datos) , [Pandas](https://pandas.pydata.org/) (big data), [Web.py](http://webpy.org/) (servidor web), [Django](https://www.djangoproject.com/) (web framework), [PyBrain](http://pybrain.org/) (AI), [TensorFlow](https://www.tensorflow.org/) (Machine Learning), etc. ¡Podríamos estar aquí todo el día! Lo más sorprendente es que estas librerías solo están a una `$ pip install` (como cuando usamos NPM con JS).  |


## Sintaxis de Javascript vs Python

Python y JavaScript se complementan entre sí, pero en cuanto a funcionalidad, no tienen NADA en común, no tienen el mismo propósito, no hacen las mismas cosas, provienen de diferentes orígenes, etc.

Lo único que recordarás de JavaScript es lo básico de cualquier lenguaje de programación: bucles, uso de condicionales, variables, clases, funciones y objetos.


### Tipos de Datos

Solo hay unas pocas diferencias; aquí está la explicación:

|En JavaScript          |En Python       |
|:----------------------|:-------------------|
|Number           |Python tiene el mismo tipo de datos "Number" pero puede aceptar más opciones que JS, como fracciones (float) o números complejos. <br> `myNumber = 23.23  # Float` <br> `myNumber = 54  # Entero` <br> `myNumber = 12.00  # Float (incluso con 00 como decimales)`    |
|Undefined/Null ahora es: `None`    |El tipo de dato `undefined` no está disponible en Python. Aquí `undefined` y `null` son el mismo tipo de datos: `None` <br> `myNumber # es 'None' porque no está definido`       |
|Array  |En Python, los array se denominan "List" y son similares a los array de JS, pero son mucho más flexibles y fáciles de utilizar. <br> `myArray = ['Juan','John','Steven'] # Lista con índices numéricos`       |
|Object       |En JavaScript, los objetos y los diccionarios son casi lo mismo. Puedes hacer lo que quieras con un objeto porque no tienes que declarar primero su Clase y atenerse a su definición. <br> `let myCar = {}`<br> `myCar.color = 'blue';` <br><br>Python, por otro lado, separa el tipo de datos Diccionario del tipo de datos Objeto. Los objetos no pueden ser declarados informalmente. Primero debes definir su clase antes de poder crear una instancia de ellos.<br><br>`class Car(object):` <br> `def __init__(self, color):` <br> `self.color = color` <br> `myCar = Car('blue')`       |
|Sets y Tuples     |JavaScript no tiene nada similar, pueden ser muy útiles: las tuplas se ordenan; los conjuntos (Sets) son secuencias inmutables de valores.   |
|String     |Es lo mismo en Python.    |


## Paquetes (Importando desde otros archivos)

En Javascript, puedes importar variables de otros archivos con el comando `import` o `require`, pero tienes que `export` los archivos de las variables primero.

En Python, puedes hacer de cualquier carpeta un paquete creando un archivo `\__init\__.py` dentro de ella. Luego, puedes importar lo que quieras en esa carpeta sin tener que exportar explícitamente nada.


#### Con Python

```python
from package1 import module1

from package1.module2 import function1

```


### Gestores de Paquetes

Lo que es NPM es para JavaScript, PIP es para Python. Ambas bestias son increíbles pero muy diferentes por dentro. La mayor diferencia es que los paquetes NPM se descargan localmente a una carpeta `node_modules` mientras que los paquetes PIP se instalan en toda la máquina, fuera de la carpeta del proyecto. Otra pequeña diferencia es que NPM usa `package.json` y PIP usa un archivo `requirements.txt`.


### Analizando tipos de datos

JavaScript es tan flexible que no tienes que prestar mucha atención a los tipos de datos. A Python no le gusta eso... en Python, te acostumbrarás a declarar variables y convertirlas entre tipos de datos.

#### Con JavaScript

```javascript
let result = '5' - '2'; 
// Ahora "result" es igual a 3
```

#### Con Python

```python
# En Python sustraer strings producirá un error, en lugar de eso debes hacer esto:

result = int('5') - int('2')  # Ahora "result" es igual a 3
```


### Imprimir Valores

Python tiene `print()` para escribir en la consola. Recuerda que, dado que Python (como cualquier otro lenguaje de back-end) se ejecuta antes del evento de preload, no tiene acceso a la consola de JavaScript.


#### Con JavaScript

```javascript
let simpleValue = 'Hello';
console.log(simpleValue); // Esto imprimirá el contenido de la variable

let arrayValue = ['Hello', 23, 76, 'World', 43];
console.log(arrayValue); // Esto imprimirá el contenido del array y sus elementos
```


#### Con Python

```python
simple_value = 'Hello'
print(simple_value)  # Esto imprimirá el contenido de la variable

list_value = ['Hello', 23, 76, 'World', 43]
print(list_value)  # Esto funcionará, imprimiendo el contenido de la lista en un formato como este: ['Hello', 23, 76, 'World', 43]
```


### Función Lambda vs Función flecha

Finalmente, en ES2015, JavaScript incluye las "funciones flecha". Esa es una manera muy fácil y liviana de declarar y usar funciones. Python, por otro lado, tiene algo similar llamado funciones `lambda` que básicamente te permiten usar pequeñas funciones anónimas en línea como accesos directos.


#### Con JavaScript

```javascript
// Usando una función flecha para mapear una lista 

let peopleArray = [{ name: "Mario Peres" }, { name: "Emilio Peres" }, { name: "Yusaiba Peres" }];
let returningMapObject = peopleArray.map(person => person.name);
console.log(returningMapObject);
```

#### Con Python

```python
# Usando lambda para mapear una lista

people_list = [{"name": "Mario Peres"}, {"name": "Emilio Peres"}, {"name": "Yusaiba Peres"}]
returning_map_object = map(lambda obj: obj['name'], people_list)
names_list = list(returning_map_object)
print(names_list)

# Ahora names_list es una lista de nombres como ["Mario Peres", "Emilio Peres", "Yusaiba Peres"]
```

> 📺 Aquí hay un video extraño, pero sorprendente que explica las funciones lambda: https://www.youtube.com/watch?v=25ovCm9jKfA


### Bucles en listas (similar a arrays)

#### Con JavaScript

```javascript
// Haciendo un bucle forEach en JS
myArray.forEach(function(item,index,array) {
    console.log(item);
});

// Haciendo un bucle for en JS
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
```


#### Con Python

```python
colors = ["red", "green", "blue", "purple"]
for color in colors:
    print(color)
```

### Adición y Eliminación de Elementos

#### Con JavaScript

```javascript
let myArray = ['Academy', 'Coding'];
myArray.push('4Geeks');  // Añadiendo un item

// Para eliminar el elemento en la posición 1
myArray.splice(1, 1);
```

#### Con Python

```python
my_list = ['The', 'earth', 'revolves', 'around', 'sun']

my_list.insert(0, "Yes")
print(my_list)  # ['Yes', 'The', 'earth', 'revolves', 'around', 'sun'] 

my_list.remove("Yes")
print(my_list)  # ['The', 'earth', 'revolves', 'around', 'sun']
```

### Funciones para clasificar Listas

#### Con Python

```python
# Orden ascendente
number_list = [5, 2, 3, 1, 4]
number_list.sort()
print(number_list)  # [1, 2, 3, 4, 5]

# Ordenar la lista de objetos usando un parámetro "key"
my_list = [{"name": "Mario Peres"}, {"name": "Emilio Peres"}, {"name": "Yusaiba Peres"}]
my_list.sort(key=lambda person: person['name'])
```

> 📺 Llamemos a Socratica de nuevo para entender el *sorting* en Python: https://www.youtube.com/watch?v=QtwhlHP_tqc

### La Declaración switch

Ahora no hay una manera de hacer "switch"... pero ¿a quién le importa? 🙂

### Listas vs Tuplas

Python trae un nuevo tipo de datos llamado "Tupla". Piensa en ello como una lista de alto rendimiento liviana y rápida. Pero, como siempre, para aumentar el rendimiento necesitamos disminuir la funcionalidad.

> 📺 Este es un video obligatorio que explica la diferencia entre ellos: https://www.youtube.com/watch?v=NI26dqhs2Rk

### Objetos

#### Con JavaScript

```javascript
// Hay dos maneras de declarar un objeto

// Como un objeto literal
let obj = { "name": "Mario", "lastname": "Perez" };

// Como una Clase 
class Person{
    constructor() {
         this.name = "";
         this.lastname = "";
    }
}

let obj = new Person();
obj.name = "Mario";
obj.lastname = "Perez";
```

#### Con Python

```python
# En Python tenemos Clases y Diccionarios

# Así es como se declara y usa un diccionario
my_dict = {}
my_dict['name'] = "Mario"
my_dict['lastname'] = "Perez"

# Así es como se declara y usa una clase
class Person:
    def __init__(self):
        self.name = ''
        self.lastname = ''

my_person = Person()
my_person.name = "Mario"
my_person.lastname = "Perez"
```

> 📺 Socratica, nuestro gran espécimen y amigo evolucionado, explica Objetos de una manera excelente: https://www.youtube.com/watch?v=apACNr7DC_s


## PEPs - Python Enhancement Proposals

Las PEPs son "propuestas de mejora de Python" desarrolladas, aprobadas y publicadas por la comunidad de Python y no son opcionales.

Hay algunas que debemos conocer desde el inicio de nuestro aprendizaje. 

[PEPs](https://www.python.org/dev/peps/)


## PEP 8 - Style Guide for Python Code

Una en particular es la PEP8. La PEP8 es la "Guía de estilo de código para Python". Si bien es una guía, en la comunidad Python es muy, pero muy utilizada y si no la utilizas adecuadamente, quien lea tu código lo sabrá inmediatamente.

A continuación vamos a listar algunos ejemplos (no todos):

### PEP 8: variables

Utilizar nombres descriptivos (siempre) y en minúsculas. Para nombres compuestos, separar las palabras con guiones bajos.

```python
mi_variable = 12
```

### PEP 8: constantes

Utilizar nombres descriptivos y en mayúsculas para variables constantes separando palabras con guiones bajos. 

```python
MI_CONSTANTE = 12
```

### PEP 8: operadores

Siempre colocar un espacio en blanco, antes y después de un operador

```python
monto_bruto = 175
tasa_interes = 12
monto_interes = monto_bruto * tasa_interes / 100
tasa_bonificacion = 5
importe_bonificacion = monto_bruto * tasa_bonificacion / 100
monto_neto = (monto_bruto - importe_bonificacion) + monto_interes
```

### PEP 8: comentarios

Los comentarios en la misma línea del código deben separarse con dos espacios en blanco y luego del símbolo # debe ir un solo espacio en blanco. 

```python
edad = 15  # Edad de María
```

### PEP 8: indentación

Una indentación de 4 (cuatro) espacios en blanco indica que las instrucciones indentadas forman parte de una misma estructura de control o bloque.
```python
numero = 50
if numero < 100:
    print('Hola')
    print('Menor que 100')
elif numero < 200:
    print('Chao')
    print('Mayor a 200')
else:
    print('Adiós')
    print('mayor o igual a 100 y menor o igual que 200')
```

