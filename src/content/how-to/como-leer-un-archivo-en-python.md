## ¿Cómo leer un archivo en Python?

La manipulación de archivos en la programación es una técnica muy importante que te permite guardar la información de tu proyecto en archivo. Python tiene una amplia variedad de estructuras que te permiten guardar cualquier tipo de información como los **Diccionarios** o las **Listas**, sin embargo, cuando se cierre la respectiva aplicación esa información se pierde, para que esto no suceda, podemos hacer uso de archivo externo para guardar la información y así poder acceder a ella nuevamente. A continuación veremos un pequeño ejemplo sobre cómo leer la información de un archivo `txt`.

#### prueba.txt

```txt
Hola, este es un archivo de ejemplo.
Estamos aprendiendo a leer archivos en Python.

¡Es emocionante!
```

#### index.py

```py
with open("prueba.txt", "r") as archivo:

    print("Leer todas las líneas de un archivo:\n")
    print(archivo.read())
```

> output del código:

```bash
Leer todas las líneas de un archivo:

Hola, este es un archivo de ejemplo.
Estamos aprendiendo a leer archivos en Python.

Â¡Es emocionante!
```

En este ejemplo, queremos leer la información guardada en el archivo `prueba.txt`, para esto, podemos hacer uso del método `open()` de Python, este método recibe dos parámetros, el primero es el nombre del archivo que deseamos abrir y el segundo es el modo en que deseamos abrirlo, en nuestro ejemplo `"r"` (read). Luego hacemos uso del método `read()` para imprimir la información en la consola.

## ¿Cómo leer el contenido de un archivo?

Para leer el contenido de un archivo necesitamos el método `open()` de Python, este método recibe dos parámetros, el primero es el nombre del archivo que deseamos abrir, y el segundo es modo en que deseamos leer el archivo, este segundo parámetro puede recibir diferentes valores, algunos de ellos son, `"r"` (read), `"w"` (write), etc...

En la siguiente tabla veremos algunos de los valores más relevantes para la función `open()` y una pequeña descripción de cada uno:

| Valor | Descripción                                                                                                                                                     |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `"r"` | Abre el archivo en modo de lectura. Puedes leer el contenido del archivo, pero no puedes modificarlo ni agregarle contenido.                                    |
| `"r+"`|  Abre el archivo en modo de lectura y escritura. Puedes leer y modificar el contenido del archivo.                                                              |
| `"w"` | Abre el archivo en modo de escritura. Si el archivo ya existe, su contenido se eliminará y se puede escribir nuevo contenido, además si el archivo no existe, se creará uno nuevo. |
| `"w+"`| Es similar a `"r+"` pero a diferencia de este, crea un archivo nuevo si no existe y si el archivo ya existe y tiene información, elimina toda la información del archivo y agrega la información nueva. |
| `"a"` | Abre el archivo en modo adjuntar. Si el archivo ya existe, podrás agregar contenido al final de la información ya existente. Si no existe, se creará uno nuevo. |
| `"a+"`| Abre el archivo en modo de adjuntar y lectura. Puedes leer y agregar contenido al final del archivo.                                                            |
| `"x"` | Abre el archivo en modo de creación. Crea un nuevo archivo para escritura, pero si el archivo ya existe, lanzará un error.                                      |
| `"x+"`| Abre un archivo en modo de creación y lectura/escritura. Similar a `"w+"`, pero lanza un error si el archivo ya existe.                                         |
| `"b"` | Modo de archivo binario, se utiliza junto con otros modos como `"rb"` (lectura binaria) `"wb"` (escritura binaria).                                             |


A continuación veremos un ejemplo sobre cómo leer un archivo `txt` y algunos de los métodos más utilizados.

> Nota, en estos ejemplos usaremos la sintaxis `with open(nombre_archivo, modo_lectura) nombre_variable` ya que esta sintaxis se encarga de cerrar el archivo automáticamente una vez que hayamos terminado de trabajar con el.

#### prueba.txt

```txt
Este es un texto de prueba.
Aprenderemos a usar el método readline() para leer solamente una línea de un archivo,

y también aprenderemos a usar el método read() para leer todas las líneas del archivo.
```

#### index.py

```py
with open("prueba.txt", "r", encoding="utf-8") as archivo:
    print("Archivo en la línea 1: ", archivo.readline())
    print("Archivo en la línea 2: ", archivo.readline())

    print("--------------------------------------")
    print("Todas la líneas del archivo:")
    archivo.seek(0)
    print(archivo.read())

    print("\n--------------------------------------")
    print("Extraer todas las líneas del archivo en una lista:")
    archivo.seek(0)
    data = archivo.readlines()
    print(data)
```
> output del código:

```bash
Archivo en la línea 1:  Este es un texto de prueba.
Archivo en la línea 2:  Aprenderemos a usar el método readline() para leer solamente una línea de un archivo,

--------------------------------------
Todas la líneas del archivo:
Este es un texto de prueba.
Aprenderemos a usar el método readline() para leer solamente una línea de un archivo,

y también aprenderemos a usar el método read() para leer todas las líneas del archivo.

--------------------------------------
Extraer todas las líneas del archivo en una lista:
[
    'Este es un texto de prueba.\n', 
    'Aprenderemos a usar el método readline() para leer solamente una línea de un archivo,\n', 
    '\n', 
    'y también aprenderemos a usar el método read() para leer todas las líneas del archivo.'
]

```

El contenido de un archivo se puede leer con varios métodos de Python, en este ejemplo vemos los tres métodos más relevantes, el método `readline()` lee solo una linea del archivo, si lo llamas tres veces seguidas entonces tendrás las tres primeras líneas del archivo, además le puedes pasar un entero como parámetro que le indica cuántos caracteres debe leer, por ejemplo si le pasas **4** como parámetro `readline(4)` te retornará el texto "Este" ya que esos son los primeros 4 caracteres de la primera línea, el método `read()` muestra todas las líneas del archivo y el método `readlines()` te retorna una lista con todas las líneas del archivo.

## ¿Cómo modificar el contenido de un archivo?

Para modificar el contenido de un archivo, el método `open()` de Python ofrece varias alternativas, a continuación veremos algunos ejemplos sobre cómo modificar el contenido de un archivo `txt`.

Suponiendo el siguiente archivo de texto, `prueba.txt`

```txt
La Tierra, nuestro planeta azul, es un remanso de vida en el vasto cosmos. Océanos y 
continentes se entrelazan en una danza de biodiversidad. 
Montañas se alzan mientras valles se extienden, creando paisajes diversos.
```

Veremos dos de los ejemplos más relevantes sobre cómo puedes modificar este archivo. Para el primer ejemplo usaremos el método `open()` y le pasaremos como segundo parámetro el valor de `"w"` (write) que te permite modificar el archivo original pero elimina los valores anteriores, para el segundo ejemplo usaremos el valor de `"a"` (append) que te permite modificar el archivo sin la necesidad de eliminar el contenido que tenía anteriormente.

### Ejemplo con el valor de "w" (write)

```py
with open("prueba.txt", "w", encoding="utf-8") as archivo:
    nueva_linea = "\nEsta es una nueva línea de texto agregada a el archivo prueba.txt"
    archivo.write(nueva_linea)
```

Con la ejecución del código anterior, el archivo `prueba.txt` quedaría de la siguiente manera:

```txt
Esta es una nueva línea de texto agregada a el archivo prueba.txt
```

Para modificar el contenido de un archivo podemos usar el método `write()` de Python, este método recibe cómo parámetro el texto con el que deseas modificar el archivo, en este ejemplo hacemos uso de método `open()` y le pasamos cómo segundo parámetro el valor de `"w"`, este valor te permite modificar el contenido de un archivo pero antes de agregar el contenido nuevo elimina el contenido que tenía anteriormente el archivo.

### Ejemplo con el valor de "a" (append)

```py
with open("prueba.txt", "a", encoding="utf-8") as archivo:
    nueva_linea = "\n \nEsta es una nueva línea de texto agregada a el archivo prueba.txt"
    archivo.write(nueva_linea)
```

Al ejecución el código anterior, el archivo `prueba.txt` quedaría de la siguiente manera:

```txt
La Tierra, nuestro planeta azul, es un remanso de vida en el vasto cosmos. Océanos y 
continentes se entrelazan en una danza de biodiversidad. 
Montañas se alzan mientras valles se extienden, creando paisajes diversos.

Esta es una nueva línea de texto agregada a el archivo prueba.txt
```


En este ejemplo, de nuevo hacemos uso del método `open()` de Python pero esta vez le pasamos cómo segundo parámetro el valor de `"a"` que te permite modificar el contenido de un archivo pero a diferencia del valor `"w"` este agrega el nuevo contenido al final del contenido ya existente. Estos dos valores son muy importantes y puedes usarlos dependiendo de la tarea que necesites realizar en el archivo, recuerda que al agregar el símbolo `"+"` al final de cada uno de estos valores `"w+"`, `"a+"` podras leer y escribir en un archivo.

## ¿Cómo utilizar un archivo txt para almacenar datos?

Los archivos `txt` pueden ser utilizados para almacenar información cómo por ejemplo una lista de diccionarios con cualquier tipo de información. A continuación veremos un ejemplo sobre cómo usar un archivo `txt` para guardar la información de tres usuarios de prueba.

### Agregar una lista de diccionarios en un archivo txt

Para poder ingresar una lista de diccionarios en un archivo `txt` primero necesitamos pasarlo a un tipo de dato `json` (JavaScript Object Notation), para esto haremos uso del módulo `json`  de Python.

```py
import json

data = [
    {"nombre": "Thomas", "apellido": "Smith", "edad": 35},
    {"nombre": "Jonathan", "Doe": "Smith", "edad": 53},
    {"nombre": "Jane", "apellido": "Watson", "edad": 29}
]

with open("prueba.txt", "w+", encoding="utf-8") as archivo:
    json.dump(data, archivo, indent=4)
```

Al ejecutar este código,  el archivo `prueba.txt` debería verse de la siguiente manera:

```txt
[
    {
        "nombre": "Thomas",
        "apellido": "Smith",
        "edad": 35
    },
    {
        "nombre": "Jonathan",
        "Doe": "Smith",
        "edad": 53
    },
    {
        "nombre": "Jane",
        "apellido": "Watson",
        "edad": 29
    }
]
```

En este ejemplo, hacemos uso del módulo `json` y el método `dump()` para poder convertir la lista de diccionarios en una archivo de tipo `json` y guardarlo en el archivo `prueba.txt`, el método `dump()` recibe  tres parámetros, el primer parámetro es la información que deseas guardar en el archivo `txt`, este parámetro es obligatorio, el segundo parámetro es la variable `archivo` que le indica a el método donde guardar la información, este parámetro también es obligatorio, el tercer parámetro es la variable `indent=4` que le indica al método como formatear la información dentro del archivo `txt`, este parámetro es opcional.

### Leer el archivo y convertirlo de nuevo en una lista de diccionarios

Para leer el archivo `txt` y convertir la información de nuevo en una lista, también necesitamos usar el módulo `json`, este módulo tiene un método llamado `load()` que convierte la información de tipo `json` nuevamente en una lista de diccionarios, cómo se muestra en el siguiente ejemplo:

```py
import json

data = [
    {"nombre": "Thomas", "apellido": "Smith", "edad": 35},
    {"nombre": "Jonathan", "Doe": "Smith", "edad": 53},
    {"nombre": "Jane", "apellido": "Watson", "edad": 29}
]

with open("prueba.txt", "w+", encoding="utf-8") as archivo:
    # El método dump() ingresa la información en el archivo txt.
    json.dump(data, archivo, indent=4)

    # El método load() lee la información del archivo txt y la convierte nuevamente en una lista de diccionarios.
    archivo.seek(0)
    datos_recuperados = json.load(archivo)

    print("Información de los usuarios: ", datos_recuperados)
```

> output del código:

```bash
Información de los usuarios:  [
    {'nombre': 'Thomas', 'apellido': 'Smith', 'edad': 35}, 
    {'nombre': 'Jonathan', 'Doe': 'Smith', 'edad': 53}, 
    {'nombre': 'Jane', 'apellido': 'Watson', 'edad': 29}
]
```


El método `load()` recibe cómo parámetro la variable `archivo` que le indica cual archivo debe leer y convertir de nuevo en código de Python, este método retorna la información de los usuarios que se guarda en la variable `datos_recuperados`, por último simplemente imprimimos los resultado en la consola.

## Conclusión

La manipulación de archivos es una habilidad esencial en la programación, en Python podemos manipular cualquier tipo de archivo ya sea un archivo `txt`, un archivo de tipo `json`, etc... En este artículo hemos explorado cómo leer y modificar archivos con ayuda de la función `open()` de Python, además vimos cómo agregar y modificar estructuras de datos más complejas como una lista de diccionarios. 

Espero que este artículo te haya sido de utilidad y que te haya ayudado a entender mejor cómo manipular archivos con ayuda de los métodos de Python, recuerda practicar lo más que puedas y crear tus propias aplicaciones para reforzar los conocimientos aprendidos en este artículo.

¡Divierte Aprendiendo a manipular archivos con ayuda de Python! 😉👋
