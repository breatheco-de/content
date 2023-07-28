
## Introducción a la Programación Orientada a Objetos en Python 

¡Hola, futuro maestro del código! En esta lectura, exploraremos el fascinante mundo de la Programación Orientada a Objetos (POO). Descubrirás qué es la POO y cómo esta poderosa técnica te permite crear programas más organizados, reutilizables y fáciles de mantener. ¡Prepárate para convertirte en un mago de la programación!  💫

A continuación veremos un pequeño ejemplo sobre cómo representar una persona con una clase de Python.

```py
class Persona:
    def __init__(self, nombre, apellido, edad):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad

    def mensaje_presentacion(self):
        return f"!Hola¡, me llamo {self.nombre} {self.apellido} y tengo {self.edad} años de edad"


persona = Persona("Thomas", "Smith", 27)
print(persona.mensaje_presentacion()) # output: !Hola¡, me llamo Thomas Smith y tengo 27 años de edad
```

En este ejemplo vemos cómo representar una persona haciendo de este estilo de la programación orientada a objetos (POO), para representar un objeto del mundo real en una clase, primeros debes crear una clase con el nombre de ese objeto, luego dentro de la clase creas la función `__init__()` y dentro de esta función crearás las propiedades de tu objeto como por ejemplo el nombre, la edad, el peso etc..., también puedes crear funciones (métodos) para tu manipular las propiedades de objeto.

## ¿Qué es la Programación Orientada a Objetos (POO)?  

La Programación Orientada a Objetos (POO) es un enfoque de programación que se basa en la idea de "objetos". En lugar de escribir líneas de código secuencial, en la POO creamos objetos que representan entidades del mundo real o conceptos abstractos. Estos objetos contienen tanto datos (atributos) como funciones (métodos) que actúan sobre esos datos. 🏰🔧 

La programación orientada a objetos (POO) se basa en cuatro principios fundamentales.

1.  **Abstracción**: Representamos entidades y conceptos del mundo real en forma de objetos con atributos y métodos.
    
2.  **Encapsulación**: Ocultamos los detalles internos del objeto y solo exponemos una interfaz para interactuar con él.
    
3.  **Herencia**: Los objetos pueden heredar atributos y métodos de otros objetos, lo que permite crear jerarquías de clases.
    
4.  **Polimorfismo**: Los objetos pueden utilizar los mismos métodos con distintas implementaciones.

> No te preocupes, luego explicaremos más a fondo cada uno de estos conceptos.

## Clases y Objetos: Los Pilares de la POO 

En la POO, definimos las características y comportamientos de un objeto mediante una "clase". Una clase es como un plano o plantilla que describe cómo se crea el objeto y qué puede hacer. Por ejemplo, podemos tener una clase  `Perro`  que tenga atributos como  `nombre`  y  `edad`, y métodos como  `ladrar()`  y  `jugar()`.  🐶

A continuación crearemos una clase que representa una computadora paso a paso, para que puedas entender mejor cómo funciona el concepto de clases en Python.

1. Primero crea una clase haciendo uso de la palabra reservada `class`, luego en esta clase crea las propiedades necesarias para representar una computadora y los métodos necesarios para manipular o extraer estas propiedades.

```py
class Computadora:
    def __init__(self, marca, precio, color, procesador):
        self.marca = marca
        self.precio = precio
        self.color = color
        self.procesador = procesador

    def obtener_informacion(self):
        return {
            "Marca": self.marca,
            "Precio": self.precio,
            "Color": self.color,
            "Procesador": self.procesador
        }
```

2. Luego puedes crear **instancias** u **objetos** basados en esa clase. Cada objeto es una entidad independiente con sus propios valores de atributos y puede invocar los métodos definidos en la clase.

```py
computador_apple = Computadora("MacOS", 300_000, "Gris", "Apple M1")
computador_hp = Computadora("Hewlett-Packard HP", 200_000, "Azul", "Intel core 5")

print("Apple: ", computador_apple.obtener_informacion())
print("HP: ", computador_hp.obtener_informacion())
```
> output:
```bash
Apple: {
    'Marca': 'MacOS', 
    'Precio': 300000, 
    'Color': 'Gris', 
    'Procesador': 'Apple M1'
}
HP: {
    'Marca': 'Hewlett-Packard HP', 
    'Precio': 200000, 
    'Color': 'Azul', 
    'Procesador': 'Intel core 5'
}
```

Como vemos en este ejemplo, puedes representar dos computadores diferentes haciendo uso de el mismo objeto/clase, cada vez que creas una nueva instancia de esa clase, el método `obtener_informacion()` retornará los valores de esa instancia de clase, así nos evitamos la necesidad de repetir código innecesario para representar diferentes objetos, esto es muy útil cuando necesitas representar muchos elementos como por ejemplo en un Ecommerce.

## Principios de la Programacion Orientada a Objetos

Como mencionamos anteriormente, la programación orientada a objetos (POO) se basa en cuatro conceptos fundamentales, a continuación veremos cada una de ellos con más detalle y ejemplos de código que te ayudarán a entenderlos mejor. 

### 1. Abstracción 

La abstracción es un concepto muy importante en (POO) que permite representar objetos del mundo real en un programa mediante  el uso de clases y objetos, puedes entender la **abstracción** como una plantilla básica que puedes usar para representar un tipo de objeto en particular como una persona, un electrodoméstico o un animal, luego puedes crear otras clases basadas en estas para representar objetos más específicos como un programador, una tostadora, una Jirafa etc...

Ejemplo:

```py
class Electrodomestico:
    def __init__(self, nombre, marca):
        self.nombre = nombre
        self.marca = marca

class Tostadora(Electrodomestico):
    def __init__(self, nombre, marca, precio):
        super().__init__(nombre, marca)
        self.precio = precio

class Horno(Electrodomestico):
    def __init__(self, nombre, marca, descuento):
        super().__init__(nombre, marca)
        self.descuento = descuento

tostadora = Tostadora("Tostadora", "Kalley", 107_900)
horno = Horno("Horno", "Oster", True)
```

En este ejemplo, la clase base `Electrodomestico` representa un tipo de objeto más ampliamente común un electrodoméstico, podemos decir que esta es una clase abstracta, luego podemos crear clases basadas en esta clase abstracta para representar un objeto mas especifico, en nuestro ejemplo una tostadora y un horno que son electrodomésticos pero tiene caracteristicas mas especificas.

### 2.  Herencia

La herencia de objetos/clases en la programación orientada a objetos es un concepto fundamental, te permite crear una nueva clase basada en una clase ya existente. La clase ya existente se conoce como clase base o superclase, y la clase creada se conoce como clase derivada o subclase.

Ejemplo:

```py
class Persona:
    def __init__(self, nombre, apellido, ciudadania):
        self.nombre = nombre
        self.apellido = apellido
        self.ciudadania = ciudadania

    def obtener_nombre_completo(self):
        return f"{self.nombre} {self.apellido}"

class Programador(Persona):
    def __init__(self, nombre, apellido, ciudadania, salario, compañia):
        super().__init__(nombre, apellido, ciudadania)
        self.salario = salario
        self.compañia = compañia

persona = Persona("Axel", "Castro", "Mexicano")
programador = Programador("Thomas", "Smith", "United States", 800_000, "Google")

print(persona.obtener_nombre_completo()) # output: Axel Castro
print(programador.obtener_nombre_completo()) # output: Thomas Smith
```

En este ejemplo, la clase  `Persona` te permite representar a una persona con sus características básicas, luego la clase `Programador` puede heredar las características de la clase `Persona` y añadirle las demás características que representan a un programador, se puede decir que la clase programador es una clase hija de la clase `Persona` y puede usar las propiedades y métodos esta misma como puedes ver en el ejemplo con el método `obtener_nombre_completo()`. Para que una clase herede las propiedades y métodos de otra debes usar la siguiente sintaxis `class nueva_clase(clase_padre)`, también es muy importante que dentro en la función `__init__()` le pases la función `super().__init__()` con las propiedades de la clase padre para que puedas utilizar sus propiedades en la nueva clase hija.

### 3. Encapsulación

La **encapsulación** también en un concepto muy importante en (POO), es una forma de ocultar la implementación interna de una clase permitiendo que solo alguno atributos y métodos específicos sean directamente accesible. puedes entender la encapsulación como la capacidad de una clase de permitir el accesor a sus atributos declarándolos como públicos o privados. En Python se utilizan convenciones de nomenclatura para indicar la visibilidad de sus miembros, si un atributo o método tiene un nombre que comienza con dos guiones bajos (`__`) se considera fuertemente privado.

Ejemplo:

```py
class Casa:
    def __init__(self, area_cuadrada, lugar, precio):
        self.area_cuadrada = area_cuadrada
        self.lugar = lugar
        self.__precio = precio

    def get_precio(self):
        return self.__precio

    def set_precio(self, value):
        self.__precio = value

nueva_casa = Casa(100_000, "México", 700_000_000)

print(nueva_casa.__precio) # output: 'Casa' object has no attribute '__precio'. Did you mean: 'get_precio'?
print(nueva_casa.get_precio())  # output: 700000000

nueva_casa.__precio = 500_000_000  # No te permite modificar la propiedad __precio
print(nueva_casa.get_precio())  # output: 700000000

nueva_casa.set_precio(400_000_000)
print(nueva_casa.get_precio())  # output: 400000000
```

Como puedes ver en el ejemplo, en la clase `Casa` las porpiedades `area_cuadrada` y `lugar` son propiedades públicas a las cuales puedes acceder sin ningún problema, pero la propiedad `__precio` por otro lado es una propiedad privada y no puedes acceder a ella directamente, para poder acceder o modificar una propiedad privada debes hacer uso de las funciones **Getter** y **Setter** `get_precio()`, `set_precio()` estan son convenciones en la programación orientada a objetos, los método **get** y **set** se utilizan para obtener o modificar propiedades privadas dentro de la clase.

### 4. Polimorfismo

Por último, el **polimorfismo** es otro concepto fundamental en la programación orientada a objetos. En términos sencillos, 
el polimorfismo permite que diferentes clases se comporten de manera similar, pero con implementaciones específicas para cada una de ellas.

Ejemplo:

```py
class Automovil:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    def obtener_modelo(self):
        pass

class Auto_familiar(Automovil):
    def __init__(self, marca, modelo):
        super().__init__(marca, modelo)

    def obtener_modelo(self):
        return f"El auto familiar tiene un modelo: '{self.modelo}'"

class Auto_deportivo(Automovil):
    def __init__(self, marca, modelo):
        super().__init__(marca, modelo)

    def obtener_modelo(self):
        return f"El modelo '{self.modelo}' del auto deportivo es el más reciente"

auto_familiar = Auto_familiar("Ford", "Familiar 2023")
auto_deportivo = Auto_deportivo("Tesla", "Tesla motors sport")

print(auto_familiar.obtener_modelo()) # output: El auto familiar tiene un modelo: 'Familiar 2023'
print(auto_deportivo.obtener_modelo()) # output: El modelo 'Tesla motors sport' del auto deportivo es el más reciente
```

El polimorfismo se basa en la capacidad de un objeto/clase de tomar diferentes formas, en el ejemplo enterior el método `obtener_modelo()` de la clase abstracta `Automovil` se utiliza de formas diferentes en la clases `Auto_familiar` y `Auto_deportivo` retornando mensajes diferentes cada una, esto es un pequeño ejemplo sobre el concepto de polimorfismo la capacidad de usar la misma función de una clase de formas diferentes.

## Ventajas de la Programación Orientada a Objetos  🌟💼

La POO ofrece numerosas ventajas que hacen que la programación sea más eficiente y efectiva:

-   **Reutilización de Código**: Con la POO, puedes reutilizar clases y objetos existentes para crear nuevos programas, lo que ahorra tiempo y esfuerzo.
    
-   **Mantenimiento Simplificado**: La encapsulación permite modificar una clase sin afectar el resto del programa, facilitando el mantenimiento y evitando efectos secundarios no deseados.
    
-   **Organización y Claridad**: La POO promueve una estructura clara y organizada en el código, lo que facilita su lectura y comprensión.
    
-   **Modelado del Mundo Real**: La POO te permite modelar entidades y procesos del mundo real de manera natural, lo que hace que el código sea más intuitivo.

La Programación Orientada a Objetos (POO) es una técnica fundamental que te permite crear programas más organizados, reutilizables y fáciles de mantener. Ahora que tienes una comprensión básica de la POO, ¡puedes comenzar a crear tus propias clases y objetos para darle vida a tus proyectos!

Si tienes alguna pregunta o necesitas más información, no dudes en preguntar. ¡Estoy aquí para ayudarte! 😊💻

¡Happy coding!  ✨👨‍💻
