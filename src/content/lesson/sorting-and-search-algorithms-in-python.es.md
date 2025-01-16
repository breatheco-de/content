---
title: "Algoritmos de Ordenamiento y Búsqueda en Python: Optimizando la Gestión de Datos"
subtitle: "Explora los algoritmos de ordenamiento y búsqueda en Python. Aprende a optimizar la gestión de datos con estas técnicas esenciales de programación."
tags: ["python", "algoritmos","algoritmos-de-busqueda"]
authors: ["DF27ARTS"]

---

## Algoritmos de Ordenamiento y Búsqueda en Python 📊🔍

En el mundo del desarrollo de software, los algoritmos de búsqueda y ordenamiento juegan un papel fundamental, estas técnicas permiten organizar y obtener datos de una manera muy eficiente, lo que es esencial para optimizar el rendimiento de las aplicaciones. En este artículo veremos algunos ejemplos de algoritmos en [Python](https://4geeks.com/es/lesson/como-programar-en-python), tanto algoritmos de ordenamiento como algoritmos de búsqueda.

## ¿Qué son los Algoritmos de Ordenamiento? 📊🔄

En la informática, los algoritmos de ordenamiento son cruciales para la optimización de una tarea, estos permiten organizar datos de manera que puedan ser accedidos y utilizados de manera más eficiente. Un algoritmo de ordenamiento permite reorganizar una lista de elementos o nodos en un orden específico, por ejemplo de forma ascendente o descendente dependiendo de la ocasión. A continuación veremos ejemplos en dos de los algoritmos de ordenamiento más conocidos en la programación, el algoritmo de ordenamiento de burbuja **(Bubble Sort)**, y el algoritmo de Ordenamiento por inserción **(Insertion Sort)**.

### Ordenamiento de Burbuja (Bubble Sort)

El algoritmo de ordenamiento por burbuja es uno de los más simples pero menos eficientes. Funciona comparando pares de elementos e intercambiándolos si están en el orden incorrecto, este proceso se hace una y otra vez hasta que la lista esté ordenada de forma correcta.

```py runable=true
def bubble_sort(lista):
    length = len(lista)
    for i in range(length):
        for j in range(0, (length-i) - 1):

            if lista[j] > lista[j + 1]:
                auxiliar = lista[j + 1]
                lista[j + 1] = lista[j]
                lista[j] = auxiliar
    return lista


lista_desordenada = [3, 6, 7, 8, 3, 45, 23, 0, 16, 26, 6, 7, 50]
lista_ordenada = bubble_sort(lista_desordenada)
print(lista_ordenada) # output: [0, 3, 3, 6, 6, 7, 7, 8, 16, 23, 26, 45, 50]
```

En este ejemplo, haciendo uso de la estructura de bucle `for` recorremos la lista de números desordenados dos veces, luego con ayuda de un condicional `if` preguntamos si el número actual es mayor que el número que le sigue, de ser así invertimos la posición de los números, la función hará este mismo proceso una y otra vez hasta que los números estén perfectamente ordenados, por último retornamos la lista ordenada. Este algoritmo tiene una complejidad de tiempo de **O(n^2)** (Chequea este link para saber más sobre complejidad y [optimización de algoritmos](https://4geeks.com/es/lesson/optimizacion-de-algoritmos-y-estructuras-de-datos)) lo que lo hace útil para ordenar listas pequeñas, pero muy ineficiente para ordenar listas más grandes.

### Ventajas y Desventajas del Ordenamiento de Burbuja (Bubble Sort):

#### Ventajas:

 - **Simplicidad**: El algoritmo de burbuja es fácil de entender e implementar, lo que lo convierte en una buena opción para introducir conceptos de ordenamiento en la programación.
 - **Implementación sencilla**: Requiere poca cantidad de código y no involucra estructuras de datos complejas.
    
#### Desventajas:

 - **Lento para listas grandes**: Debido a su complejidad cuadrática el algoritmo de burbuja se vuelve lento en la práctica para listas de tamaño considerable.
 - **No considera el orden parcial**: A diferencia de otros algoritmos, el algoritmo de burbuja realiza el mismo número de comparaciones e intercambios sin importar si la lista ya está en gran parte ordenada.

### Ordenamiento por inserción (Insertion Sort)

El algoritmo de ordenamiento por inserción es un algoritmo simple pero eficiente. Funciona dividiendo la lista en dos partes, una parte ordenada y otra desordenada, a medida que se recorre la lista desordenada, se insertan elementos en la posición correcta en la parte ordenada. A continuación veremos un ejemplo de código:

```py runable=true
def insertion_sort(lista):
    for i in range(1, len(lista)):
        actual = lista[i]
        index = i 

        """
        Este bucle intercambia los dos número de posición 
        mientras que el número anterior sea más grande que el número actual
        """
        while index > 0 and lista[index - 1] > actual:
            lista[index] = lista[index - 1]
            index = index - 1
        lista[index] = actual

    return lista

lista_desordenada = [39, 45, 32, 4, 2, 85, 43, 7, 18, 16, 5, 67, 32]
lista_ordenada = insertion_sort(lista_desordenada)
print(lista_ordenada) # output: [2, 4, 5, 7, 16, 18, 32, 32, 39, 43, 45, 67, 85]
```

En este ejemplo, se toma el segundo elemento de la lista y con ayuda de un bucle `while` intercambiamos el número actual con el número anterior mientras que el número anterior sea más grande que el número actual, este proceso se hace una y otra vez hasta que la lista esté completamente ordenada. El algoritmo de ordenamiento por inserción tiene una complejidad de tiempo de **O(n)** en el mejor caso y de **O(n^2)** en el peor caso donde **n** es el número de elementos de la lista.

### Ventajas y Desventajas del Ordenamiento por inserción (Insertion Sort)

#### Ventajas:

 - **Baja sobrecarga**: Requiere menos comparaciones y movimientos que otros algoritmos como el ordenamiento de burbuja, lo que lo hace más eficiente en términos de intercambios de elementos.
 - **Simplicidad**: el ordenamiento por inserción es uno de los algoritmos de ordenamiento más simples de implementar y entender. Esto lo hace adecuado para enseñar conceptos básicos de ordenamiento.

#### Desventajas:

 - **Ineficiencia en listas grandes**: A medida que el tamaño de la lista aumenta, el rendimiento del ordenamiento por inserción disminuye. Su complejidad cuadrática de **O(n^2)** en el pero caso lo hace ineficiente para las listas grandes.
 - **No escalable**: Al igual que otros algoritmos de complejidad cuadrática, el ordenamiento por inserción no es escalable para listas grandes, ya que su tiempo de ejecución aumenta considerablemente con el tamaño de la lista.

## ¿Qué son los Algoritmos de Búsqueda? 📊🔍

Los algoritmos de búsqueda son métodos que nos permiten encontrar la ubicación de un elemento específico dentro de una lista de elementos. Dependiendo de la lista necesitarás utilizar un algoritmo u otro, por ejemplo si la lista tiene elementos ordenados, puedes usar un algoritmo de **búsqueda binaria**, pero si la lista contiene los elementos de forma desordenada este algoritmo no te servirá, para búscar un elemento en una lista desordenada deberás utilizar un algoritmo de **búsqueda lineal**. Estos algoritmos son dos de los más relevantes y conocidos en la programación, a continuación veremos ejemplos de estos dos algoritmos.

### Búsqueda Lineal

Los algoritmos de búsqueda lineal, también conocidos como búsqueda secuencial, implican recorrer una lista de elementos uno por uno hasta encontrar un elemento específico. Este algoritmo es muy sencillo de implementar en código pero puede ser muy ineficiente dependiendo del largo de la lista y la ubicación donde está el elemento. A continuación veremos un pequeño ejemplo de código en Python.

```py runable=true
def linear_search(lista, objetivo):
 
    for i in range(len(lista)):
        if lista[i] == objetivo:
            return i
         
    return -1


lista = [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 15, 20, 27, 34, 39, 50]
numero_objetivo = 39
resultado = linear_search(lista, numero_objetivo)

if resultado != -1:
    print(f"El número {numero_objetivo} se encuentra en la posición: {resultado}")
else:
    print(f"El número {numero_objetivo} NO se encuentra en la lista.")
```

En este ejemplo de código, necesitamos buscar el número **39**, para buscarlo de forma lineal simplemente recorremos la lista con la ayuda de una estructura de bucle `for` y luego preguntamos si el elemento actual es igual a el elemento que estamos buscando, de ser así retornamos el índice del elemento y terminamos el bucle pero si el bucle termina y no retorno ningún elemento significa que el número que buscamos no se encuentra en la lista por lo que retornamos **-1**. Este algoritmo puede ser útil para recorrer listas pequeñas o listas desordenadas pero no es eficiente para recorrer listas demasiado largas.

### Ventajas y Desventajas del Algoritmo de Búsqueda Lineal

### Ventajas:

 - **Sencillez**: La búsqueda lineal es uno de los algoritmos de búsqueda más simples y fáciles de implementar. Solo requiere iterar a través de la lista de elementos uno por uno hasta encontrar el objetivo.
 - **flexibilidad**: La búsqueda lineal puede aplicarse a cualquier tipo de lista, independientemente de si está ordenada o no.

#### Desventajas:

 - **Ineficiencia en listas grandes**: La principal desventaja de la búsqueda lineal es su ineficiencia en listas grandes. Debido a que compara cada elemento uno por uno, su tiempo de ejecución crece de manera lineal con el tamaño de la lista.
 - **No es adecuada para listas ordenadas**: Aunque puede funcionar en listas no ordenadas, la búsqueda lineal no es eficiente para listas ordenadas. En tales casos, algoritmos de búsqueda más eficientes, como la búsqueda binaria, son preferibles.

### Búsqueda Binaria

El algoritmo de búsqueda binaria es un algoritmo muy eficiente que se aplica solo a listas ordenadas. Funciona dividiendo repetidamente la lista en dos mitades y comparando el elemento objetivo con el elemento del medio, esto reduce significativamente la cantidad de comparaciones necesarias.

A continuación veremos un pequeño ejemplo de búsqueda binaria con Python.

```py runable=true
def binary_search(lista, objetivo, inicio, fin ):
    if inicio > fin:
        return -1

    centro = (inicio + fin) // 2
    if lista[centro] == objetivo:
        return centro
    elif lista[centro] < objetivo:
        return binary_search(lista, objetivo, centro + 1, fin)
    else:
        return binary_search(lista, objetivo, inicio, centro - 1)
        

# Ejemplo de uso
lista = [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 15, 20, 27, 34, 39, 50]
numero_objetivo = 27
inicio_busqueda = 0
fin_busqueda = len(lista) - 1

resultado = binary_search(lista, numero_objetivo, inicio_busqueda, fin_busqueda)

if resultado != -1:
    print(f"El número {numero_objetivo} se encuentra en la posición {resultado}.")
else:
    print(f"El númeor {numero_objetivo} NO se encuentra en la lista.")
```


En este ejemplo, hacemos uso de un algoritmo de búsqueda binario para encontrar el número **27** en una lista de elementos ordenados, para poder encontrar el elemento que buscamos podemos hacer uso de una función [recursiva](https://4geeks.com/es/lesson/que-es-la-recursividad-en-python), en esta función el caso base sería si el número de la lista en la posición `centro` es igual al número  que buscamos, de ser así retornamos el valor de la variable `centro` este sería el índice del número, de lo contrario, dividimos la lista en dos mitades y hacemos el llamado recursivo hasta encontrar el número que buscamos pero si el número no se encuentra en la lista retornamos **-1**.

### Ventajas y Desventajas del Algoritmo de Búsqueda Binaria

#### Ventajas:

 - **Eficiencia de listas ordenadas**: La principal ventaja de la búsqueda binaria es su eficiencia en listas ordenadas. Su tiempo de ejecución es de **O(log n)**, lo que significa que disminuye rápidamente a medida que el tamaño de la lista aumenta.
 - **Menos comparaciones**: Comparado con la búsqueda lineal, la búsqueda binaria realiza menos comparaciones en promedio, lo que lo hace más rápido para encontrar el objetivo.

#### Desventajas:

 - **Requiere una lista ordenada**: La búsqueda binaria sólo es aplicable a listas ordenadas, Si la lista no está ordenada, se debe realizar una operación adicional para ordenarla antes de usar la búsqueda binaria. 
 - **Mayor complejidad de implementación**: Comparado con la búsqueda lineal, la búsqueda binaria es más compleja de implementar debido a su naturaleza recursiva.

## Conclusión

En el mundo de la programación, los algoritmos de ordenamiento y búsqueda son fundamentales para para la manipulación y búsqueda de datos, los algoritmos de ordenamiento nos permiten organizar conjuntos de datos de forma ascendente o descendente mientras que los algoritmos de búsqueda nos permiten localizar información de manera más rápida dependiendo de la situación.

Espero que este artículo te haya sido de utilidad para comprender cómo funcionan los algoritmos de búsqueda y ordenamiento, recuerda practicar estos algoritmos ya que son esenciales en el ámbito de la programación. Puedes chequear el [Blog de 4Geeks](https://4geeks.com/es/) para aprender más contenido interesante. ¡Diviértete en tu proceso de aprendizaje! 😉👍
