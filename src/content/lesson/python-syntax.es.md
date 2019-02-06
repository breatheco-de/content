---
title: "Entendiendo la Sintaxis de Python"
subtitle: "Desata tu poder aprendiendo con esta lección, usando uno de los Reyes del Desarrollo de Back-End. Ahora podrás integrar IA, Big Data, Aprendizaje automático, API e integrar aplicaciones de terceros en su propia cuenta. Disfrute de esta lección sobre la sintaxis de Python"

cover: "http://breatheco.de/wp-content/uploads/2018/01/python-background.jpg"

textColor: "white"
date: "2018-05-11"
tags: ["fale"]
---

El título de esta lección debe ser "De Python a JS", porque así es como evolucionó la historia. Python nació primero y es mucho más maduro. Con Python, eres capaz de hacer muchas más cosas porque es un lenguaje de backend y tiene librerias y herramientas para cualquier cosa que puedas imaginar.

Python y Javascript son amigos. Juntos forman el mejor equipo posible para realizar cualquier desarrollo importante que puedas imaginar.

<br>
<br>

## ¿Porqué Python?
***

Con Javascript, estaba vinculado y limitado al navegador, no puede acceder a la computadora del cliente y es básicamente un lenguaje de representación. Pero Python es diferente ... al ser un lenguaje de backend, se ejecuta en su propio servidor, lo que significa que tiene acceso y puede controlar toda la computadora con él. Tienes acceso a cualquier aplicación que se ejecute en la misma computadora. Tienes acceso a la consola. Tiene acceso a la red a la que está conectada la computadora y mucho más.

Por otro lado, Python es el lenguaje de back-end de más rápido crecimiento en el mundo. Es el lenguaje más versátil y fácil de codificar con una de las comunidades más sólidas.

Cuando lo comparas con otros lenguajes de back-end, Python lidera en casi todas las funciones que ofrece: Data Science, IA, desarrollos de API, desarrollos web, etc.

**Here are some of the reasons Python has come to this point:**


|**Simplicidad**   |**Rendimiento**    |
|:---------------:|:------------------:|
|Python estaba destinado a ser simple y fácil. Aquí está el manifiesto de Python: <br> https://en.wikipedia.org/wiki/Zen_of_Python <br> <br> **Nota:** Ya no hay más punto y coma o corchetes, o declarar variables, o confuso " esta "funcionalidad.   |Python es más rápido que Java, PHP, Ruby y el 90% de los otros lenguajes backend. Solo los lenguajes de bajo nivel como C ++ (difícil de usar) o muy especializados como Node.js pueden superarlo. <br> <br> La escalabilidad de Python se ha demostrado una y otra vez con aplicaciones como el motor de búsqueda de Google, Youtube, Google Apps, etc.  |


|**Comunidad**   |**Herramientas**    |
|:---------------:|:------------------:|
|Python es el idioma oficial de Google. También es uno de los idiomas más antiguos con comunidades enormes alrededor de cada una de sus librerias\herramientas. MIT lo usa para enseñar código. La NASA para construir cohetes. Quora, Facebook, Yahoo, Amazon, etc. ¡Casi todas las grandes empresas del mundo tienen que usarlo!      |La mayoría de las librerias de Python son las mejores en lo que hacen: [MathLab] (https://www.mathworks.com/help/matlab/matlab-engine-for-python.html?requestedDomain=true) (para procesamiento de datos) , [Pandas] (https://pandas.pydata.org/) (big data), [Web.py] (http://webpy.org/) (servidor web), [Django] (https: // www .djangoproject.com /) (web framework), [PyBrain] (http://pybrain.org/) (AI), [TensorFlow] (https://www.tensorflow.org/) (Machine Learning), etc. ¡Podríamos estar aquí todo el día! Lo más sorprendente es que estas librerias solo están a una "instalación de pip" (como cuando se usa NPM con JS).  |

<br>
<br>

## Sintaxis de Javascript vs Python
***

Python y Javascript se complementan entre sí. En cuanto a la funcionalidad, no tienen NADA en común - no tienen el mismo propósito, no hacen las mismas cosas, provienen de diferentes orígenes, etc.

Lo único que recordarás de Javascript es lo básico de cualquier lenguaje de programación: bucle, uso de condicionales, variables, clases, funciones y objetos.

<br>
<br>

### Tipos de Datas
***

Sólo hay unas pocas diferencias; Aquí está la explicación:

|**En Javascript**      |**En Python**       |
|:----------------------|:-------------------|
|Números                 |Python tiene el mismo tipo de datos "Número" pero puede aceptar más opciones que JS, como fracciones (2/3) o números complejos.<br> `python>myNumber = 23.23;  //float`<br>`python> myNumber = 54;  //integer` <br>`python>myNumber = 12.00;  //float (even with 00 as decimals). `    |
|Undefined/Null ahora es: ***None***    |El tipo de datos ***undefined*** no está disponible en Python. Aquí "undefined" y "null" son el mismo tipo de datos: ***None.***<br> `python>myNumber;  //is None because it was not defined`       |
|Array o Arreglos    |En Python, los arreglos se denominan "List" y son similares a los arreglos de JS, pero son mucho más flexibles y fáciles de utilizar..<br>`python>myArray = ['Juan','John','Steven']; //array of numeric indexes`       |
|Objetos       |En Javascript, los objetos y los diccionarios son casi lo mismo. Puede hacer lo que quiera con un objeto porque no tienes que declarar primero su Clase y atenerse a su definición.<br> `python>var myCar = {}`<br> `python>myCar.color = 'blue';` <br><br>Python, por otro lado, separa el tipo de datos Diccionario del tipo de datos Objeto. Los objetos no pueden ser declarados informalmente. Primero debes definir su clase antes de poder crear una instancia de ellos.<br><br>`python>class Car(object):`<br>`python>def __init__(self, color):`<br>`python>self.color = i` <br>`python>myCar = Car('blue')`       |
|Conjuntos y Tuplas      |Javascript no tiene nada similar, pueden ser muy útiles: las tuplas se ordenan; Secuencias inmutables de valores son bolsas de valores desordenadas.   |
|String o Cadenas       |Es lo mismo en Python.    |


<br>
<br>

## Paquetes (Importando desde otros archivos)
***

En Javascript, puede importar variables de otros archivos con el comando ***import*** o ***require***, pero necesita **exportar** los archivos de variables primero.

En Python, puedes hacer de cualquier carpeta un paquete creando un archivo *\ __ init \ __. Py* dentro de él. Luego, puede importar lo que quiera en esa carpeta sin tener que exportar explícitamente nada.

<br>
<br>

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
from . import
```
<br>
<br>

## Gestores de Paquetes
***

Lo que NPM es para Javascript, PIP es para Python. Ambas bestias son increíbles pero muy diferentes por dentro. La mayor diferencia es que los paquetes NPM se descargan localmente en una carpeta "node_modules" mientras que los paquetes PIP se instalan en toda la máquina, fuera de la carpeta del proyecto. Otra pequeña diferencia es que NPM usa package.json y PIP usa un archivo Requirements.txt.

<br>
<br>

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
# En Python sustraer las cadenas o strings producirá un error, en lugar de eso debes hacer:

var result = int('5') - int('2'); 
#el resultado ahora es igual a 3
```

<br>
<br>


### **Casting (análisis) Tipos de datos**
***

Javascript es tan flexible que no tiene que prestar mucha atención a los tipos de datos. A Python no le gusta eso... en Python, te acostumbrarás a lanzar variables y convertirlas entre tipos de datos.

### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/)  With JavaScript

```javascript
var result = '5' - '2'; 
//el resultado ahora es igual a 3
```

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
#  En Python sustraer las cadenas o strings producirá un error, en lugar de eso debes hacer:

var result = int('5') - int('2'); 
#el resultado ahora es igual a 3
```

<br>
<br>


### **Valores de Impresión**
***

Python tiene "print" para escribir en un documento o en la consola. Recuerde que, dado que Python - como cualquier otro lenguaje de back-end - se ejecuta antes del evento de precarga, no tiene acceso a la consola de Javascript.

<br>
<br>


#### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/) With  JavaScript

```javascript
var simpleValue = ‘hello’;
console.log(simpleValue);
//Esto imprimirá el contenido de la variable.
var arrayValue = [‘Hello’,23, 76, ‘World’,43];
console.log(arrayValue);
//Esto imprimirá el contenido del arreglo y sus elementos.
```


#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
simpleValue = ‘Hello’;
print(simpleValue);  //Esto imprimirá el contenido.
arrayValue =[‘Hello’,23,76,’World’,43];
print(arrayValue); //Esto funcionará, imprimiendo el contenido del arreglo en un formato como este: [‘Hello’,23,76,’World’,43]
```
  




<br>
<br>


<br>
<br>

### La Función Lambda vs Función Arrow
***

Finalmente, en ES2015, Javascript incluye las "funciones arrow". Esa es una manera muy fácil y liviana de declarar y usar funciones. Python, por otro lado, tiene algo similar llamado funciones lambda que básicamente te permiten usar pequeñas funciones anónimas en línea como accesos directos.

<br>
<br>

#### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/)  With JavaScript

```javascript
//haciendo un bucle foreach en js 
myArray.forEach(function(item,index,array) {
    console.log(item);
});

//haciendo un bucle for en js
for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
```

<br>
<br>

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
# Usando lambda para mapear una lista
peopleArray = [{ "name": "Mario Peres" },{ "name": "Emilio Peres" },{ "name": "Yusaiba Peres" }]
returningMapObject = map(lambda obj: obj['name'], peopleArray)
namesArray = list(returningMapObject)
print(namesArray)

# ahora stringsArray es una lista de nombres como ["Mario Peres","Emilio Peres","Yusaiba Peres"]
```


[[info]]
| :tv: Aquí hay un video extraño pero sorprendente que explica las funciones de lambda: https://www.youtube.com/watch?v=25ovCm9jKfA

<br>
<br>

### **Lista de bucles (similar a arreglos)**
***

#### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/) With  JavaScript

```javascript
//haciendo un bucle foreach en js 
myArray.forEach(function(item,index,array) {
    console.log(item);
});

//haciendo un bucle for en js
for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
```

<br>
<br>

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
colors = ["red", "green", "blue", "purple"]
for color in colors:
    print(color)
```

<br>
<br>

### **Adición y Eliminación de Elementos**
***

<br>
<br>

#### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/)    With JavaScript

```javascript
var myArray = [‘Academy’, ‘Coding’];
myArray.push(‘4Geeks’);  //Añadiendo un artículo 
//para eliminar el elemento en la posición INDEX
myArray.splice(index, 1);
```

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
myList = ['The', 'earth', 'revolves', 'around', 'sun']
myList.insert(0,"Yes")
print(myList)
# Salida: ['Yes', 'The', 'earth', 'revolves', 'around', 'sun'] 

myList.remove("Yes")
print(myList)
['The', 'earth', 'revolves', 'around', 'sun']
```

### **Funciones de Ordenamiento para Listas**
***

#### ![python syntax](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python
# Orden ascendente
a = [5, 2, 3, 1, 4]
a.sort()

# Ordenar la lista de objetos usando un parámetro "clave"
myArray = [{ "name": "Mario Peres" },{ "name": "Emilio Peres" },{ "name": "Yusaiba Peres" }]
myArray.sort(key=lambda person: person['name'])
```


[[info]]
| :tv: Llamemos a Socratica de nuevo para entender la clasificación en Python: https://www.youtube.com/watch?v=QtwhlHP_tqc

### **La Declaración de Cambio**

**Ahora hay una manera de hacer "switch"… pero ¿a quién le importa? 🙂**

### **Listas vs Tuplas**

Python trae un nuevo tipo de tipo de datos llamado "Tupla". Piense en ello como una lista de rendimiento super delgado y rápido. Pero, como siempre, para aumentar el rendimiento necesitamos disminuir la funcionalidad.

[[info]]
| :tv: Este es un video obligatorio que explica la diferencia entre ellos: https://www.youtube.com/watch?v=NI26dqhs2Rk

### **Objetos**

#### ![python syntax](https://ucarecdn.com/2de93dfc-263c-43e3-afa5-6557a5e7cf4c/) With JavaScript

```javascript{numberLines: true}
//Hay dos maneras de declarar un objeto

//Como un objeto literal
var obj = { "name": "Mario", "lastname": "Perez" };

//Como una Clase 
class Person{
    constructor(){
         this.name = "";
         this.lastname = "";
    }
}

var obj = new Person();
obj.name = "Mario";
obj.lastname = "Perez";
```

#### ![python syntaxpython syntaxpython tutorial python class](https://ucarecdn.com/16dbf0c1-afa2-418c-a1b6-3bc8cb1d5c81/) With Python

```python{numberLines: true}
# En Python tenemos Clases y Diccionarios.

# Así es como tu declaras y usas un diccionario.
obj = {}
obj['name'] = "Mario"
obj['lastname'] = "Perez"

# Así es como declaras y usas una clase.
class Person:
    def __init__(self):
        name = ''
        lastname = ''

obj = Person()
obj.name = "Mario"
obj.lastname = "Perez"
```


[[info]]
| :tv: Socratica, nuestro gran espécimen y amigo evolucionado, explica Objetos de una manera excelente: https://www.youtube.com/watch?v=apACNr7DC_s


















