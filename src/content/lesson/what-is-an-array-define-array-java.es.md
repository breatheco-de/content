---
title: "Es Hora de Aprender lo que es un Arreglo o Matriz en java"
subtitle: "¿Se puede trabajar con arreglos? Si no puedes, no te preocupes aquí, aprenderás qué es una matriz y cómo trabajar con ellas."
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
date: "2019-11-11"
tags: ["arreglo","matriz","java","Listas","Diccionarios"]
status: "draft"

---

Dominar el uso de los arreglos y bucles es una de las 5 habilidades fundamentales de construir algoritmos:

1. Variables.
2. Condicionales.
3. `Arrays(Arreglos)`.
4. `Loops(Bucles)`.
5. Funciones.


## ¿Por qué están los arreglos en una lección separada?
***

¡Porque los arreglos son impresionantes! ¡Los necesitas! Y debemos enfocarnos mucho en ellos para prepararte para la vida real 🙂

**No no no…Espera:  Arreglos?  Que?**

Un arreglo es, normalmente, cualquier lista o colección de valores. Las reglas de cómo agregar o eliminar elementos de esa lista pueden cambiar de un lenguaje de programación a otro. Pero - en general - son las únicas formas en que los desarrolladores pueden crear elementos.
Los arreglos son la única forma en que tenemos que enumerar las cosas - independientemente de la aplicación con la que esté trabajando, siempre tendrás cosas que enumerar. Por ejemplo: lista de estudiantes, lista de artistas, lista de transacciones ... ¡cualquier cosa!

Este tipo de datos hace muchas más cosas que los otros. Las listas son la única forma de almacenar más de un tipo de datos en la misma variable.

Cada arreglo tiene los mismos conceptos básicos:

**The items:** Son los valores reales dentro de cada posición del arreglo.

**The length:** es el tamaño del arreglo (cuántos elementos tiene el arreglo).

**Index:** es la posición del elemento.

![what is an array define array](https://ucarecdn.com/7ed2c414-0d00-4e68-b659-b65c26d1983a/-/resize/1000x/)


[[info]]
| :point_up: Las posiciones del arreglo comienzan con **cero (0)**; el primer elemento es el elemento en la posición **cero (0)**

## ¿Como Declarar un Arreglo?
***

+ **Arreglos unidimencionales (Vectores,Arrays,arreglos)**
La sintaxis para declarar e inicializar un vector es la siguiente:


```java
tipo_dato [] nombre_vector = new tipo_de_dato[dimension];//ejemplo de sintaxis, esto da error por el compilador

int [] miArreglo=new int [6];// ejemplo de declaración en inicialización de un vector
```

+ `int` es el tipo de dato para los elementos del vector, con esta declaración el vector sólo puede almacenar valores de tipo entero.
+ `[]` los corchetes le indican al compilador que no estoy declarando una variables, si no un vector.
+ `miArreglo` es el nombre que se le da al vector, con este nombre podré acceder a su contenido y utilizar cuantas veces sea necesario dentro del programa.
+ el `operador =` le dice al compilador que debe apuntar a una zona de memoria que se va reservar para el arreglo.
+ la palabra reservada `new` crea un espacio en memoria para el vector y la palabra `int` le dice que será de tipo entero.
+ `[6]` el número entre corchetes le indica que la dimensión para ese arreglo será de 6, esto quiere decir que sólo puede almacenar hasta 6 elementos enteros. **Cabe aclarar que la dimensión de un arreglo es fija, una vez declarado, no se puede cambiar en tiempo de ejecución.**

De acuerdo a lo anterior en un vector podemos almacenar elementos de cualquier tipo de dato (`int`, `char`, `float`, `double` etc.).

La declaración anterior de un vector en memoria se vería algo parecido a la siguiente imagen.

![what is an array define array](https://www.ecodeup.com/wp-content/uploads/2016/09/arreglo-vector-en-java.jpg)

También podemos declarar e inicializar en en 2 sentencias:
```java
tipo_dato [] nombre_variable; // declara

nombre_variable = new tipo_de_dato[dimensión]; // se inicializa
```

## Acceder a los Elementos en el Arreglo
***

Para acceder a un elemento específico en una lista, necesita un índice. Un índice es un valor entero que representa la posición del arreglo a la que desea acceder.

El índice siempre debe comenzar en cero (0). Eso significa que un arreglo de 2 elementos puede tener un índice = 0 o un índice = 1. Tratar de obtener la segunda posición devolverá "indefinido" porque significará que estamos tratando de acceder al tercer elemento (que no existe). Por ejemplo, para obtener cualquier elemento del arreglo, puede hacer lo siguiente:

Para obtener un elemento desde un vector, se lo realiza de la siguiente forma:



```java
    tipo_dato nombre_variable= nombre_vector[indice/posicion];

    int valor= miArrreglo[3];
```
Se está obteniendo el elemento de la posición 3 y se almacena en la variable de tipo entero llamada valor.

[[info]]
| :point_up: Cuando la dimensión de un arreglo es demasiado grande, se puede llenar o imprimir el contenido de un vector utilizando un ciclo for.


## Actualizar Elementos en el Arreglo
***


Un arreglo se maneja a través de posiciones, empezando desde la posición cero y para obtener/almacenar uno de sus elementos se utiliza un índice (una variable), el índice indica la posición del elemento en el arreglo a la que se quiere acceder.

Entonces un arreglo como el del ejemplo con dimensión 6, efectivamente se puede almacenar 6 elementos pero solo tendrá 5 posiciones (puesto que se empieza desde la posición 0) a las cual se puede acceder ya sea para almacenar u obtener elementos almacenados.

Para almacenar un elemento en un arreglo se utiliza la siguiente sintaxis:

**nombre_arreglo [indice/posicion]=valor_asignar;**

Utilizando el ejemplo anterior podríamos escribir la siguiente sentencia:

```java
miArreglo[1]=7;
```
Lo que hicimos fue asignar en la posición 1 del vector, el elemento 7.

[[info]]
| :point_up:Tomar en cuenta que se puede utilizar directamente la posición (como en el ejemplo anterior) para acceder a un elemento, pero lo más común es utilizar una variable, como se verá más adelante.

Otra forma de inicializar un vector, es dándole sus elementos respectivos al momento de declararlo, en este caso no declaramos la dimensión, si no que el compilador asigna la dimensión de acuerdo a los elementos con los que se inicializa el vector:
```java
tipo_dato [] nombre_variable = {valor1,valor2,valor3,valor3,N…};

int[] miArrreglo= {1,5,7,9,4,5,100};
```

## Tamaño del arreglo: .length

Esta variable nos devuelve el número de elementos que posee el array. Hay que tener en cuenta que es una variable de solo lectura, es por ello que no podremos realizar una asignación a dicha variable. Por ejemplo esto nos serviría a la hora de mostrar el contenido de los elementos de un array:
```java
char array[];
array = new char[10];
  System.out.printnln(array.length); // 10
```

## Eliminando Elementos (Libreria Apache Commons Lang)
***

Para eliminar fácilmente un elemento, puede usar la biblioteca Lang de Apache Commons y especialmente el método estático removeElement() de la clase ArrayUtils . A continuación un ejemplo:

```java

int[] array = new int[]{1,2,3,4};
array = ArrayUtils.removeElement(array, 2); //remove first occurrence of 2
System.out.println(Arrays.toString(array)); //[1, 3, 4]
```

Para eliminar fácilmente un elemento, puede usar la biblioteca Lang de Apache Commons y especialmente el método estático removeElement() de la clase ArrayUtils . A continuación un ejemplo:


## Copia de Elementos de un arreglo

La siguiente asignacion solo copia las referencias no crea un nuevo array

`int[] datos = pares;`

para copiar los elementos de un array hemos de crear un nuevo array y copiar los elementos uno a uno
```java
int [] datos = new int[pares.length];
for (i=0; i < pares.length; i++)
datos[i]= pares[i]
```

tambien podemos utilizar una funcion predefinida en la biblioteca de clases estandar de java:

```java
System.arraycopy(from, fromIndex, to, toIndex, n);
int [] datos = new int[pares.length];
System.arraycopy(pares, 0, datos, 0, pares.length);
```

## Ordenar elementos de un arreglo

Lo primero será definir un array en Java. En este caso vamos a crear un array de enteros
```java
int[] numeros = {7,4,5,2,1,10,8};
```

Ahora tenemos que echar mano de la clase Arrays. Esta clase contiene un conjunto de métodos estáticos que nos permiten manipular los arrays. Uno de estos métodos es el método .sort(). Mediante el método .sort() conseguiremos ordenar un array en Java.

Simplemente tendremos que ejecutar la siguiente sentencia:
```java
Arrays.sort(numeros);
```


## Bucle en Arreglo
***

A veces, cuando trabajes con arreglos, tendrás que hacer un bucle. Por ejemplo: ordenándolos manualmente; voltearlos, eliminar un elemento de una posición particular, etc.

Para crear tu bucle, necesitarás usar Array.length para obtener el tamaño actual del arreglo. La mayoría de las veces, los elementos del arreglo cambian durante el tiempo de ejecución. Esta es la razón por la que la única forma de obtener el tamaño del arreglo será usar la función array.length, como esta:

```java
    int[] myArray = {3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12};
    for (i = 0; i < myArray.length; i++) {
        System.out.println(myArray[i]);  //this prints the value of the item in the position i 
    }   
```

## For each
***

Hay una gran adaptación de **sentencia for** para hacer que se formen listas de bucles o arreglos,
esta gran adaptación es el ideal para recorrer colecciones de objetos sean del tipo que sean (arrays, ArrayList, HashMap, …) y en este caso hay que definir un iterador que nos devolverá un elemento de la colección en cada iteración y la colección que se quiere recorrer.
```java
    String[] dias = {"Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"};
        
    System.out.println("Los dias de la semana son:");
    for (String d: dias) {
        System.out.println(d);
    }
//Esto imprime el valor del artículo en el índice de posición.
```
## ArrayList en Java

La clase ArrayList en Java, es una clase que permite almacenar datos en memoria de forma similar a los Arrays, con la ventaja de que el numero de elementos que almacena, lo hace de forma dinámica, es decir, que no es necesario declarar su tamaño como pasa con los Arrays.

ArrayList nos permiten añadir, eliminar y modificar elementos (que pueden ser objetos o elementos atómicos) de forma trasparente para el programador. 

Los principales métodos para trabajar con los ArrayList son los siguientes:

```java
// Declaración de un ArrayList de "String". Puede ser de cualquier otro Elemento u Objeto (float, Boolean, Object, ...)
ArrayList<String> nombreArrayList = new ArrayList<String>();
// Añade el elemento al ArrayList
nombreArrayList.add("Elemento");
// Añade el elemento al ArrayList en la posición 'n'
nombreArrayList.add(n, "Elemento 2");
// Devuelve el numero de elementos del ArrayList
nombreArrayList.size();
// Devuelve el elemento que esta en la posición '2' del ArrayList
nombreArrayList.get(2);
// Comprueba se existe del elemento ('Elemento') que se le pasa como parametro
nombreArrayList.contains("Elemento");
// Devuelve la posición de la primera ocurrencia ('Elemento') en el ArrayList  
nombreArrayList.indexOf("Elemento");
// Devuelve la posición de la última ocurrencia ('Elemento') en el ArrayList   
nombreArrayList.lastIndexOf("Elemento");
// Borra el elemento de la posición '5' del ArrayList   
nombreArrayList.remove(5); 
// Borra la primera ocurrencia del 'Elemento' que se le pasa como parametro.  
nombreArrayList.remove("Elemento");
//Borra todos los elementos de ArrayList   
nombreArrayList.clear();
// Devuelve True si el ArrayList esta vacio. Sino Devuelve False   
nombreArrayList.isEmpty();  
// Copiar un ArrayList 
ArrayList arrayListCopia = (ArrayList) nombreArrayList.clone();  
// Pasa el ArrayList a un Array 
Object[] array = nombreArrayList.toArray();   
```

Otra cosa muy importante a la hora de trabajar con los ArrayList son los "Iteradores" (Iterator). Los Iteradores sirven para recorrer los ArrayList y poder trabajar con ellos. Los Iteradores solo tienen tres métodos que son el "hasNext()" para comprobar que siguen quedando elementos en el iterador, el "next()"  para que nos de el siguiente elemento del iterador; y el "remove()" que sirve para eliminar el elemento del Iterador.

```java
    // Declaración el ArrayList
    ArrayList<String> nombreArrayList = new ArrayList<String>();

    // Añadimos 10 Elementos en el ArrayList
    for (int i=1; i<=10; i++){
	    nombreArrayList.add("Elemento "+i); 
    }

    // Añadimos un nuevo elemento al ArrayList en la posición 2
    nombreArrayList.add(2, "Elemento 3");

    // Declaramos el Iterador e imprimimos los Elementos del ArrayList
    Iterator<String> nombreIterator = nombreArrayList.iterator();
    while(nombreIterator.hasNext()){
	    String elemento = nombreIterator.next();
	    System.out.print(elemento+" / ");
    }
    // recorremos con un for each e imprimimos los elementos del arrayList
    for (String d: nombreArrayList) {
        System.out.println(d);
    }
```
## Map en Java
***

La Interface Map (java.io.Map) en Java, nos permite representar una estructura de datos para almacenar pares "clave/valor"; de tal manera que para una clave solamente tenemos un valor. Esta estructura de datos también es conocida en otros lenguajes de programación como "Diccionarios".
los Maps en java permiten añadir, eliminar y modificar elementos de forma trasparente para el programador.

Los principales métodos para trabajar con los Map son los siguientes:
```java
// Declaración de un Map (un HashMap) con clave "Integer" y Valor "String". Las claves pueden ser de cualquier tipo de objetos, aunque los más utilizados como clave son los objetos predefinidos de Java como String, Integer, Double ... !!!!CUIDADO los Map no permiten datos atómicos
Map<Integer, String> nombreMap = new HashMap<Integer, String>();
nombreMap.size(); // Devuelve el numero de elementos del Map
nombreMap.isEmpty(); // Devuelve true si no hay elementos en el Map y false si si los hay
nombreMap.put(K clave, V valor); // Añade un elemento al Map
nombreMap.get(K clave); // Devuelve el valor de la clave que se le pasa como parámetro o 'null' si la clave no existe
nombreMap.clear(); // Borra todos los componentes del Map
nombreMap.remove(K clave); // Borra el par clave/valor de la clave que se le pasa como parámetro
nombreMap.containsKey(K clave); // Devuelve true si en el map hay una clave que coincide con K
nombreMap.containsValue(V valor); // Devuelve true si en el map hay un Valor que coincide con V
nombreMap.values(); // Devuelve una "Collection" con los valores del Map
```

Otro elemento importante a la hora de trabajar con los Maps (aunque no lo es tanto como a la hora de trabajar con los ArrayList) son los "Iteradores" (Iterator). Los Iteradores sirven para recorrer los Map y poder trabajar con ellos. Los Iteradores solo tienen tres métodos que son el “hasNext()” para comprobar que siguen quedando elementos en el iterador, el“next()”  para que nos de el siguiente elemento del iterador; y el “remove()” que sirve para eliminar el elemento del Iterador. En realidad se puede prescindir de los iteradores para trabajar con los Map ya que la gran ventaja de los Map frente a los ArrayList, es que estos tienen una clave asociada al objeto y se les puede buscar por la clave, aunque nunca esta de más saber utilizar los iteradores para manejar los Map.

**Clases Map**

+ **HashMap:** Los elementos que inserta en el map no tendrán un orden específico. No aceptan claves duplicadas ni valores nulos.

```java
Map<Integer, String> map = new HashMap<Integer, String>();
map.put(1, "Casillas");		map.put(15, "Ramos");
map.put(3, "Pique");		map.put(5, "Puyol");
map.put(11, "Capdevila");	map.put(14, "Xabi Alonso");
map.put(16, "Busquets");	map.put(8, "Xavi Hernandez");
map.put(18, "Pedrito");		map.put(6, "Iniesta");
map.put(7, "Villa");

// Imprimimos el Map con un Iterador
Iterator it = map.keySet().iterator();
while(it.hasNext()){
  Integer key = it.next();
  System.out.println("Clave: " + key + " -> Valor: " + map.get(key));
}
```

El resultado que tenemos es el siguiente, en el que vemos que nos da los objetos sin un "orden lógico":

```java
Clave: 16 -> Valor: Busquets
Clave: 1  -> Valor: Casillas
Clave: 18 -> Valor: Pedrito
Clave: 3  -> Valor: Pique
Clave: 5  -> Valor: Puyol
Clave: 6  -> Valor: Iniesta
Clave: 7  -> Valor: Villa
Clave: 8  -> Valor: Xavi Hernandez
Clave: 11 -> Valor: Capdevila
Clave: 14 -> Valor: Xabi Alonso
Clave: 15 -> Valor: Ramos
```


+ **TreeMap:** El Mapa lo ordena de forma "natural". Por ejemplo, si la clave son valores enteros (como luego veremos), los ordena de menos a mayor.

```java
Map<Integer, String> treeMap = new TreeMap<Integer, String>();
treeMap.put(1, "Casillas");	treeMap.put(15, "Ramos");
treeMap.put(3, "Pique");	treeMap.put(5, "Puyol");
treeMap.put(11, "Capdevila");	treeMap.put(14, "Xabi Alonso");
treeMap.put(16, "Busquets");	treeMap.put(8, "Xavi Hernandez");
treeMap.put(18, "Pedrito");	treeMap.put(6, "Iniesta");
treeMap.put(7, "Villa");

// Imprimimos el Map con un Iterador que ya hemos instanciado anteriormente
it = treeMap.keySet().iterator();
while(it.hasNext()){
  Integer key = it.next();
  System.out.println("Clave: " + key + " -> Valor: " + treeMap.get(key));
}
```

El resultado que tenemos es el siguiente en el que vemos que nos ordena los objetos por clave en "orden natural":

```java
Clave: 1  -> Valor: Casillas
Clave: 3  -> Valor: Pique
Clave: 5  -> Valor: Puyol
Clave: 6  -> Valor: Iniesta
Clave: 7  -> Valor: Villa
Clave: 8  -> Valor: Xavi Hernandez
Clave: 11 -> Valor: Capdevila
Clave: 14 -> Valor: Xabi Alonso
Clave: 15 -> Valor: Ramos
Clave: 16 -> Valor: Busquets
Clave: 18 -> Valor: Pedrito
```

+ **LinkedHashMap:** Inserta en el Map los elementos en el orden en el que se van insertando; es decir, que no tiene una ordenación de los elementos como tal, por lo que esta clase realiza las búsquedas de los elementos de forma más lenta que las demás clases.

```java
Map<Integer, String> linkedHashMap = new LinkedHashMap<Integer, String>();
linkedHashMap.put(1, "Casillas");	linkedHashMap.put(15, "Ramos");
linkedHashMap.put(3, "Pique");		linkedHashMap.put(5, "Puyol");
linkedHashMap.put(11, "Capdevila");	linkedHashMap.put(14, "Xabi Alonso");
linkedHashMap.put(16, "Busquets");	linkedHashMap.put(8, "Xavi Hernandez");
linkedHashMap.put(18, "Pedrito");	linkedHashMap.put(6, "Iniesta");
linkedHashMap.put(7, "Villa");

// Imprimimos el Map con un Iterador que ya hemos instanciado anteriormente
it = linkedHashMap.keySet().iterator();
while(it.hasNext()){
  Integer key = it.next();
  System.out.println("Clave: " + key + " -> Valor: " + linkedHashMap.get(key));
}
```

El resultado que tenemos es el siguiente en el que vemos que nos ordena los objetos tal y como los hemos ido introduciendo:
```java
Clave: 1  -> Valor: Casillas
Clave: 15 -> Valor: Ramos
Clave: 3  -> Valor: Pique
Clave: 5  -> Valor: Puyol
Clave: 11 -> Valor: Capdevila
Clave: 14 -> Valor: Xabi Alonso
Clave: 16 -> Valor: Busquets
Clave: 8  -> Valor: Xavi Hernandez
Clave: 18 -> Valor: Pedrito
Clave: 6  -> Valor: Iniesta
Clave: 7  -> Valor: Villa
```

Otra de las cosas más útiles al trabajar con los Map es el recorrerlos como si fuese un ArrayList, y eso lo conseguimos de la siguiente forma. Si queremos obtener los pares clave/valor o solo las claves o los valores por separado (cuidado ahora estamos trabajando con el LinkedHashMap del ejemplo):
```java
System.out.println("Foreach: Forma alternativa para recorrer los Map mostrando la Clave y el valor:");
for (Entry<Integer, String> jugador : linkedHashMap.entrySet()){
	Integer clave = jugador.getKey();
	String valor = jugador.getValue();
	System.out.println(clave+"  ->  "+valor);
}
```
Como salida a este fragmento de código tenemos lo siguiente (que son a los jugadores por orden de inserción en el Map):

```java
Foreach: Forma alternativa para recorrer los Map mostrando la Clave y el valor:
1  ->  Casillas
15 ->  Ramos
3  ->  Pique
5  ->  Puyol
11 ->  Capdevila
14 ->  Xabi Alonso
16 ->  Busquets
8  ->  Xavi Hernandez
18 ->  Pedrito
6  ->  Iniesta
7  ->  Villa
```
