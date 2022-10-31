---
title: "Utilizando estructuras de datos para almacenar las necesidades de nuestro negocio"
subtitle: "Es imposible hacer un software sin almacenar información, es hora de prácticar y dominar la ciencia detrás del almacenamiento"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
status: "unassigned"
date: "2020-10-19T16:36:31+00:00"
tags: ["data structures","business model"]

---

Casi todos los lenguajes de programación tienen tipos de datos primitivos como: lógicos (boolean), caracteres y cadenas de texto (Char y String), numéricos (Integer y Float/Decimal), nulos (Null/None)...

Pero, ¿y si quieres almacenar muchos `boolean` o muchos `strings` en una sola estructura? Por ejemplo: Si tienes una lista de cosas por hacer (string) y quisieras ponerlas juntas en una lista así:

```python
por_hacer = ['hacer la cama', 'limpiar la casa', 'pagar impuestos']
```

Para casos como estos, el mundo de la informática ha creado otros tipos de datos más complejos entre los que están las listas. Este grupo es conocido como `Estructuras de datos`.

# ¿Qué es una estructura de datos?

Es una forma de organizar datos que se utilizarán de manera más efectiva en una situación en particular.

## Tipos de estructuras de datos

Hay muchas estructuras de datos conocidas y también puedes crear las tuyas. Partamos por revisar las más populares:


| Tipo | Qué es | Propósito y eficiencia|
| ---- | ---------- | --------------------- |
| Array o Lista | Es una forma de tener muchos valores o de un mismo tipo en una sola variable | Agrupar valores, relacionarlos entre si, para que sean más accesibles como hemos hecho con la lista anterior. El computador reservará espacios sucesivos en la memoria para todos los valores, para acceder a ellos más rápido |
| Matrix o Matriz | Es un array de dos(o más) dimensiones en donde accedes a los elementos usando dos posiciones así:`print(matrix[0][1])`| Las matrices son ideales para las coordenadas; puedes hacer un gráfico cartesiano con facilidad| 
| Stack o Pila | Stack es una estructura de datos lineal, es como un Array pero con dos métodos adicionales: `stack.pop()` que elimina el último elemento y `stack.push()` que añade un elemento al final. orden LIFO(Last In First Out o último en entrar primero en salir)/FILO(First In Last Out o primero en entrar último en salir). | Como es lineal, es muy eficiente en cuanto a memoria porque el computador solo escribe en los bordes de la estructura |
| Queue  o cola| La queue o cola es como el stack pero puede obtener el elemento en la primera posición: FIFO(First in First Out o primero en entrar primero en salir) | Es un poco menos eficiente que el stack, pero es bastante rápido y utilizado en muchos escenarios de la vida real |
| Hash Table o tabla hash| La tabla hash es como un array pero puedes usar letras para identificar las posiciones en la lista. Por ej. `print(person["name"])`. En Python le llamamos Diccionarios en Javascript objetos literales.| Al poder acceder a los elemnetos usando un string como key es ideal para algunas situaciones. Por ejemplo: podríamos tener una estructura para cada idioma e imprimir ambos idiomas así:`print(german["Hello World"])` y `print(spanish["Hello World"])` | 
| Graph o grafos| Los grafos son una estructura de datos en la cual cualquier elemento (llamado node) puede apuntar hacia cualquier otro node. Puedes usar grafos para representar jerarquías, calles de una ciudad, etc. | Los grafos son muy eficientes porque te permiten apuntar directamente a otros nodes en vez de tener que hacerle un bucle a una secuencia, por ejemplo Google Maps Traffic usa graphs para calcular la hora estimada de llegada |
| Tree o árbol| Trees son un tipo de grafos con jerarquía (padres e hijos), todo empieza en el node superior y puedes usar `node.childs()` para obtener los hijos de cualquier elemento y seguir profundizando en la jerarquía. Los trees son eficientes en muchas jerarquías de la vida real en nuestro presente como por ej: representar a una familia, el directorio de archivos de un computador, el menu de un sitio web, etc. |

> :point_up: Hay otros tipos de estructuras de datos y también puedes crear tus propias estructuras pero abordamos estos casos porque representan la gran mayoría de las situaciones de la vida real que encontrarás mientras programas.

##  Array

Cada lenguaje de programación tiene una implementación de array diferente pero la idea más básica y original era tener una forma eficiente de bajo nivel para almacenar valores relacionados. Los arrays son una forma eficiente de almacenar porque:

1. El computador reserva la memoria para almacenar los valores de los array en una secuencia, haciendo rápidamente la operación i/o para escribir y recuperar valores de un array.
2. En algunos lenguajes, los arrays pueden contener valores del mismo tipo, haciendo la gestión de la memoria de la estructura de datos mas predecible y fácil.
3. En algunos lenguajes, los arrays no incluyen casi ningún método append, insert, map, etc. En vez de eso, los arrays son estructuras muy livianas.

Puedes manipular arrays de esta forma en casi cualquier lenguaje de programación:

```python
# obtener un valor
primera_tarea = tareas[0]

# restablecer el valor de la 3º posición
tareas[2] = "comprar comida"

# añade un nuevo valor al final de la lista 
todos.append("Call mom")
```

## Matriz

Si almacenas arrays dentro de un array obtienes una matriz, por ejemplo:

```python
# tablero de un juego de gato
tablero = [ 
    [ 0,0,0 ],
    [ 0,0,0 ],
    [ 0,0,0 ]
]
```
En el ejemplo anterior replicamos el tablero de un juego de gato usando una matriz (un array de dos dimensiones), si quisieramos restablecer cualquiera de estos valores tendríamos que hacer algo así:

```python
tablero[0][1] = "x"

# el tablero se vería así:
tablero = [ 
    [ 0,1,0 ],
    [ 0,0,0 ],
    [ 0,0,0 ]
]
```

Hay muchas cosas que puedes representar con una matriz: mapas, gráficos cartesianos, planos, etc.

## Stack o pila

Los stacks son buenos porque también son muy rápidos y eficientes. El stack sigue la regla FILO: primero en entrar, primero en salir 

En la vida real hay muchas situaciones que replican un stack:

1. Un stack o pila de platos en una mesa de buffet
2. Un stack o pila de sacos de harina
3. Una baraja de cartas

```python
my_stack = []

my_stack.append("A")
my_stack.append("W")
my_stack.append("F")

# Si quiero obtener A tendría que usar pop (eliminar desde el final) F y W primero

f = my_stack.pop() # elimina F y lo devuelve
w = my_stack.pop() # elimina W y lo devuelve
a = my_stack.pop() # elimina A y lo devuelve

```

## Queue o cola

Al igual que el stack, queue se usa en escenarios de la vida real:

1. Hacer la cola para subirse a la montaña rusa
2. Hacer la cola para comprar un helado
3. Los computadores usan queues para procesar el envío de correo electrónicos y de sms.

Una Queue es como un stack pero con comportamiento FIFO: primero en entrar, primero en salir

```python
my_queue = []

my_queue.append("A")
my_queue.append("W")
my_queue.append("F")

# A será el primero en obtenerse porque fue el primero en entrar
a = my_queue.pop(0) # saca de la cola a A y lo devuelve
w = my_queue.pop(0) # saca de la cola a W y lo devuelve
f = my_queue.pop(0) # saca de la cola a F y lo devuelve
```

## Hash Table o Tabla Hash

Algunas de las implementaciones más populares de tablas hash son:

1. Traducciones de idiomas
2. Memoria caché

```python
language_hash_table = {
    "hello world": {
        "german": "Hallo Welt",
        "spanish": "Hola Mundo"
    }
}

# Ahora podemos obtener cualquier idioma instantáneamente en base al inglés:
print(language_hash_table["hello world"]["german"])
print(language_hash_table["hello world"]["spanish"])

```

## Graphs o grafos

Los grafos son una forma totalmente nueva para almacenar y acceder a datos, ahora en vez de tener un array o una lista en una secuencia, puedes tener elementos que se apunten entre si.

Los graphs o grafos son ideales para representar relaciones, jerarquías y conexiones. Por ejemplo:

1. Contruir un mapa de una ciudad
2. Árbol genealógico
3. Grafo social (como las conexiones en Facebook o Linkedin)

Un grafo puede representarse a través de una tabla hash de esta forma:

```python
graph = {
    'A': ['B', 'C'],
    'B': ['C', 'D'],
    'C': ['D'],
    'D': ['C'],
    'E': ['F'],
    'F': ['C']
}
```


## Trees o árboles

Puedes ver a los árboles como un subtipo de grafos, porque los nodos de los árboles están conectados entre sí, pero el único tipo de conexión que puede existir entre ellos es la relación Padre->Hijo

Los árboles pueden usarse en varias situaciones como:

1. El DOM (Document Object Model) de una página web.
2. Cualquier directorio de archivos de un computador
3. Árbol genealógico

Un árbol puede representarse usando un grafo de esta manera:

```python
pequeña_familia = {
    'A': {
        "hijos": ['C', 'D']
    },
    'B': {
        "hijos": ['C', 'D']
    }
    'C': {
        "hijos": ['E']
    }
}
```

Nota: A y B son probablemente cónyuges, C es hijo de A & B y E es hijo de C.
