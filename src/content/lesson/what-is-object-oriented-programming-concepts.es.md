---
title: "Programación Orientada a Objetos"
subtitle: "¡Las clases son las últimas piezas necesarias para dominar los trucos de programación! Bienvenido al increíble mundo de la programación orientada a objetos"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["programacion orientada a objectos"]
status: "published"

---

## ¿Qué es Programación Orientada a Objetos?
***

Todo lo que hemos codificado hasta ahora gira en torno a funciones (es decir, bloques de declaraciones que manipulan datos).  Esto se denomina modo de programación ***orientada a procedimientos***.  Hay otra forma de organizar tu código, que es combinar datos y funcionalidad, y envolverlo dentro de algo llamado un objeto.  Esta forma de codificación es llamada modo de programación ***orientada a objetos***, y es ideal para escribir aplicaciones grandes.

### Todo lo que codificamos ahora está envuelto dentro de objetos…

El universo está hecho de diferentes objetos como: el sol, la tierra, la luna, las sillas y los locos.  Del mismo modo, podemos imaginar que nuestro automóvil está formado por diferentes objetos, como el volante, el aire acondicionado, el motor, etc.  De la misma manera, hay conceptos de programación orientados a objetos que asumen que todo es un objeto e implementan un software para diferentes objetos.

### ¿Por qué usar la Programación Orientada a Objetos?
***

Hay dos tipos de personas en este mundo:

+ Los que les **gusta** la programación orientada a objetos y están dispuestos a morir por ella.
+ Los que **odian** la programación orientada a objetos y nunca la volverán usar.

### ¿Por qué deberías amarla?

Las 2 mayores ventajas son:

+ **Agrupación:**  Estas obligado a agrupar todo tu código en pequeñas partes separadas entre sí. Cada una de esas partes puede ser probada por separado, y cuando funcionan, no tienes que volver a pensar en ellas – puedes usarlas (es similar a usar funciones pero es MUCHO MEJOR).
+ **Reutilización:** Cuando utilices la Programación Orientada a Obejetos de una buena manera, terminarás reutilizando tu código como nunca antes.  Es tan fácil reutilizar que probablemente no solo lo utilices en ese sitio web en particular, sino también en todos los sitios web que realices durante el resto de tu vida.  Escribe el código una vez; úsalo para siempre.

### ¿Por qué deberías odiarlo?

Crear un programa de una forma orientada a objetos puede ser más lento al principio porque tienes que dividir todo tu código en pequeñas partes.  Además, existen ciertos escenarios – muy particulares – que pueden complicar tu programa al usar esta práctica.

¡Pero oye!…no necesitas ser una de esas personas que deben "amar" u "odiar" todo.  En su lugar, trata de entender que todo tiene sus pros y sus contras.  Conviértete en un maestro en esta técnica y úsala sabiamente.

## Objetos y clases
***

Las clases y los objetos son los dos aspectos principales de la programación orientada a objetos.  Una **clase** crea un *nuevo tipo (de objeto)* en donde **los objetos** son **instancias** particulares de una clase particular.

**Ejemplo:**

> Digamos que tienes un auto nuevo con patente/matrícula XHR-ABM.  Ese objeto específico será la instancia de un objeto con la clase auto.

![conceptos sobre programación orientada a objetos](../../assets/images/ed2a2bfb-95eb-473f-af7c-aa9f1d4c055e.jpeg)

## Clases Definitorias (abstracción)
***

Cada aplicación y sitio web que vayas a construir debe tener su propio conjunto de clases.  Las clases dependerán de la lógica de negocios detrás del sitio web (en última instancia, se trata del cliente y las necesidades que están tratando de resolver).

***

### Las clases tienen Propiedades (también conocidas como Atributos) que las describen…

Por ejemplo: Una clase de persona tiene: color de piel, raza, nombre, número de seguridad social, etc.  Todas las propiedades tienen un tipo de datos, como: Integer, String, Float, Null, Arrays.

![conceptos sobre programación orientada a objetos](../../assets/images/10ce9a67-1060-4550-a824-5087688d0630.png)

***

### Algunas propiedades pueden ser una clase en lugar de ser un tipo de datos simple…

Si queremos almacenar la fecha de nacimiento de la persona utilizando tipos de datos simples, tendremos que definir 3 propiedades: yearBirthDate (año de nacimiento), monthBirthDate (mes de nacimiento) y dayBirthDate (día de nacimiento).

Una mejor solución será usar clases de fecha predefinidas (pre-defined Date Classes) o funciones que vienen con la mayoría de los lenguajes de programación de back-end, por ejemplo [PHP Date](https://www.w3schools.com/php/php_date.asp) o [Python datetime.](https://www.pythonforbeginners.com/basics/python-datetime-time-examples)

![conceptos sobre programación orientada a objetos](../../assets/images/6f07bc8b-6d21-46e6-8710-34992df2508b.png)

***

### Las clases pueden tener propiedades calculadas

Algunas propiedades son calculadas durante el tiempo de ejecución cada vez que las necesitamos.  Por ejemplo: edad.  El problema con la edad es que cambia con el tiempo.  Por eso no es una buena idea almacenar la edad actual del usuario.   En su lugar, es mejor declarar una propiedad calculada llamada "Edad" y declarar una función que calcula la edad actual del usuario en función de su fecha de nacimiento (birthDate).


![conceptos sobre programación orientada a objetos](../../assets/images/a2a08a9f-5a5c-415e-93d6-c8a45aecb23d.png)



## ¡Vamos a hacer nuestro primer diagrama de clase!
***

¡Vamos a hacer nuestro primer diagrama de clase!
Digamos que estás diseñando el modelo orientado a objetos de un nuevo sitio web, y tu cliente desea crear un carrito de compras.  Esto es fácil porque este tipo de sitios web se hacen todos los días (en realidad, será más inteligente y más eficiente clonar un modelo ya hecho; sin embargo, por el bien de esta lección, vamos a continuar con nuestro ejemplo).

Al crear cualquier Diagrama de Clase de tu aplicación, debes tener en cuenta los siguientes puntos:

+ El nombre que se le da a cada clase debe describir adecuadamente el aspecto del sistema que representa esa clase particular.
+ Cada clase y sus relaciones deben ser identificadas con anticipación.
+ Las propiedades y funciones de cada clase deben estar claramente identificadas en el diagrama.
+ Para cada clase, se debe especificar el número mínimo de propiedades (las propiedades innecesarias harán que el diagrama sea complicado).
+ Usa notas cuando sea necesario para describir algún aspecto del diagrama.  Al finalizar el dibujo, debe ser comprensible para el desarrollador / codificador.

> :point_up: Es importante decir que no hay soluciones correctas o incorrectas para este tipo de problemas.  Debes permanecer confiado y atenerte a tu estrategia.  Sin embargo, asegúrate de tomarte el tiempo suficiente para diseñar una buena estrategia antes de agregar algún código – de lo contrario, será difícil cambiar las cosas durante el desarrollo de aplicaciones grandes (con muchas clases).

### Construyendo un sitio web de concesionarios de autos

Tenemos un cliente que quiere comenzar a vender autos en internet. ¿Qué hacemos?  El sitio web probablemente necesitará tener un archivo/página index con una lista de todos los autos que tiene disponible en este momento.  El usuario podrá agregar autos a un carrito de compras y finalizar el pedido cuando esté listo.

### Comenzando la Abstracción…

Bien, es obvio que los primeros objetos que necesitamos son una clase *ShoppingCart* y una clase *Car*.

Ahora que tenemos nuestras primeras 2 clases de objetos, para continuar desarrollando el modelo, puedes preguntarte (o al cliente) lo siguiente:

+ **Para añadir más clases:**  ¿Quién interactúa con mis clases actuales?  Y, ¿cuál es la relación entre las clases?
Un ShoppingCart tiene un Cliente, un ShoppingCart tiene varios Cars.
+ **Para añadir más propiedades:**  ¿Cómo puedo describir un Cliente, ShoppingCart o Car en particular?
Los clientes tienen nombres de usuario, nombres, apellidos.  Cars tienen color, marca, precio, etc.  ShoppingCarts tienen precio total, lista de productos, propietario del usuario, etc.

### Nuestro modelo de clase se ve así:

![conceptos sobre programación orientada a objetos](../../assets/images/61908aa1-63a5-40b1-8a53-8c7b202d4ef3.png)

### Escribiendo las funciones, relaciones y herencia.

Los diagramas de clase también deben expresar la forma en que las clases se relacionan entre sí y las funciones que tienen  (incluyendo las funciones "getter" y "setter").

## Escribiendo una Clase (sintaxis)
***

Para declarar una clase necesitamos usar la palabra "class" en cualquier lugar de nuestro código, seguido del nombre de la clase que queremos asignarle.  Comienza y termina cada clase con corchetes.

Las propiedades se declaran al comienzo de cada clase; globalmente dentro de los corchetes de esa clase en particular.

Justo después de las propiedades, tienes que declarar las funciones.

## El constructor de clase
***


El "constructor de clase" es la primera función que se llama en toda la clase.  Se llama tan pronto como se crea el objeto.  Es una buena práctica asignar valores iniciales a las propiedades de la clase dentro de su método de construcción.

Llamamos al constructor una de las "funciones mágicas."  Son "mágicas" porque no tienes que llamar a esas funciones tú mismo – el servidor las llama mágicamente según el propósito que tengan (en el caso del constructor, recuerda que el propósito es la inicialización).

Las funciones mágicas siempre comienzan con dos guiones bajos, y el __construct() .  Usamos __construct() para hacer algo tan pronto como creamos un objeto fuera de una clase.  Una función de este tipo se llama un constructor.  Usualmente usamos el constructor para establecer un valor para una propiedad.

## El Operador "this" o "self"
***

El "this" (en JavaScript y PHP) o "self" (en Python) indica que estamos utilizando los métodos y propiedades específicos de la clase, y nos permite tener acceso a ellos dentro del alcance de la clase específica.

## Sintaxis de Propiedades de Clase
***

Las propiedades se declaran al comienzo de cada clase (globalmente dentro de los paréntesis de esa clase en particular).  Justo después de las propiedades, también tiene que declarar las propiedades calculadas.

### Propiedades públicas y privadas

Todas las propiedades de clase tienen una visibilidad pública por defecto; puedes cambiar su visibilidad a privada si te parece mejor:*

> :point_up: *JavaScript y Python no tienen propiedades privadas o públicas – todos son públicas por defecto.  Es una buena práctica usar el símbolo de guión bajo para simular el mismo comportamiento.

***

#### Propiedades Públicas

Propiedades a las que se puede acceder desde fuera de la clase usando el operador ->.

***

#### Propiedades Privadas

No se puede acceder a ellos desde fuera de la clase; la única forma de acceder o usarlos es dentro de las funciones de clase usando el operador $this-> .
Para acceder a una propiedad privada necesitas crear dos funciones: ***una captadora (getter) y una establecedora (setter):***

+ La función getter será responsable de acceder al valor internamente y devolverlo a quien lo solicite.
+ La función setter es responsable de asignar el valor dado (como parámetro) a la propiedad privada interna.

***

### ¿Cuál es el punto de usar "getters" y "setters"?

Quizas puedas sentir que no tiene sentido usar "getters" y "setters" para cada propiedad, y probablemente tengas razón en la mayoría de los casos.  Pero, incluso si crees que escribir los "getters" y "setters" NO son necesarios para una propiedad en particular, es una muy buena práctica porque nunca se sabe cuándo los necesitarás.

**¿Cuándo necesitamos realmente propiedades privadas y un "getter/setter"?**

+ **Cuando queremos validar los datos:**  Digamos que queremos validar que el nombre de una persona no puede contener números – un setter es genial porque puedes evitar asignar el valor si no es como te gusta.
+ **Algunas propiedades necesitan ser establecidas internamente:**  Por ejemplo: una ID generada automáticamente que no deseas que el usuario pueda configurar, pero sí deseas que el usuario la obtenga.
  
*Aquí hay otro ejemplo de un "getter/setter" en la vida real:*

![conceptos sobre programación orientada a objetos](../../assets/images/js.png)

<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Object-Oriented-Javascript?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Object-Oriented-Javascript?lite=true">Click aquí para abrir el demo en una nueva ventana</a></small></div>

![conceptos sobre programación orientada a objetos](../../assets/images/python.png)
<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Python-Class-Example?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div align="right"><small>
<a href="https://repl.it/@4GeeksAcademy/Python-Class-Example?lite=true">Click aquí para abrir el demo en una nueva ventana</a></small></div>

![conceptos sobre programación orientada a objetos](../../assets/images/php.png)
<iframe src="https://repl.it/G1cx/0?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small><a href="https://repl.it/G1cx/0?lite=true">Haz clic aquí para abrir el demo en una nueva ventana</a></small></div>

> :point_up: Algunos lenguajes, como PHP, tienen sus propias funciones mágicas __get y __set para implementar getters y setters.  Sin embargo, esto no es una buena idea debido a problemas de rendimiento.  Es una mejor idea crear tus propias funciones "get/set" de acuerdo con las necesidades de tu proyecto.  [Aquí está el razonamiento detrás de esto.](https://stackoverflow.com/questions/6184337/best-practice-php-magic-methods-set-and-get)



## Agrupación (Dividir y Conquistar)
***

***Agrupación*** es el proceso de combinar datos y funciones en una sola unidad llamada "clase".

Cuando creas un objeto en un lenguaje orientado a objetos, puedes ocultar la complejidad del funcionamiento interno del objeto.  Como desarrollador, hay dos razones principales por las que elegirías ocultar la complejidad:

La primera razón es proporcionar una forma simplificada y comprensible de usar tu objeto sin la necesidad de comprender su complejidad interna..

Por ejemplo, un conductor de automóvil no necesita saber cómo funciona un motor de combustión interna.  Es suficiente saber cómo arrancar el automóvil, cómo activar la transmisión (si desea moverse), cómo suministrar combustible, cómo detener el automóvil y cómo apagar el motor. Tú sabes cómo usar la llave, la palanca de cambios (y posiblemente el embrague), el pedal del acelerador y el pedal del freno para realizar cada una de estas operaciones. Estas operaciones básicas forman una interfaz para el auto. Piensa en una interfaz como la colección de cosas que puedes hacer con el auto sin saber cómo funcionan cada una de esas cosas.

Al ocultar la complejidad del auto al usuario, cualquier persona, no solo un mecánico, puede conducir un automóvil.  De la misma manera, ocultar la compleja funcionalidad de tu objeto al usuario le permite a CUALQUIERA usarlo y encontrar formas de reutilizarlo en el futuro (independientemente de su conocimiento del funcionamiento interno). Este concepto de mantener los detalles de la implementación ocultos del resto del sistema es clave para el diseño orientado a objetos.

## Herencia
***

En [programación orientada a objetos](https://searchmicroservices.techtarget.com/definition/object-oriented-programming-OOP), herencia significa que al definir una [clase](https://whatis.techtarget.com/definition/class) de [objetos](https://searchmicroservices.techtarget.com/definition/object), cualquier subclase definida puede heredar las definiciones de una o más clases generales.  Esto significa que, para el programador, un objeto en una subclase no necesita llevar su propia definición de datos y métodos que son genéricos para la clase (o clases) de la que forma parte.  Esto no solo acelera el desarrollo del programa; también garantiza una validez inherente al objeto de subclase definido (lo que funciona y es consistente acerca de la clase también funcionará para la subclase).

**Por ejemplo:**

"Car" es una clasificación de "Four-Wheeler."  Aquí, "Car" adquiere las propiedades de un "Four-Wheeler."  Otras clasificaciones pueden ser un Jeep, Tempo, van etc. "Four-Wheeler" define una clase de vehículos que tiene cuatro ruedas, un rango específico de potencia del motor, capacidad de carga, etc.  "Car" (denominado como una subclase) adquiere estas propiedades de "Four-Wheeler" (denominado como una superclase), y tiene ALGUNAS propiedades específicas que son diferentes de otras clasificaciones de "Four Wheeler", como lujo, confort, forma , tamaño, uso, etc.

"Car" puede tener una clasificación adicional como "Open Car," "Small Car," "Large Car," etc, que van a adquerir las propiedades de AMBOS "Four-Wheeler" Y "Car" – pero aún tendrá algunas propiedades específicas.  De esta manera, el nivel de jerarquía se puede extender a cualquier nivel.
![conceptos sobre programación orientada a objetos](../../assets/images/js.png)
<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/ObjectOriented2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/ObjectOriented2?lite=true">Haz clic aquí para abrir el demo en una nueva ventana</a></small></div>

![conceptos sobre programación orientada a objetos](../../assets/images/php.png)
<iframe src="https://repl.it/G1cq/0?lite=true" frameborder="0" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" width="100%" height="400px" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe>

<div align="right"><small ><a href="https://repl.it/G1cq/0?lite=true">Haz Clic aquí para abrir el demo en una nueva ventana</a></small></div>

![conceptos sobre programación orientada a objetos](../../assets/images/python.png)
<iframe height="400px" width="100%" src="https://repl.it/@4GeeksAcademy/Python-Class-Inheritance?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div align="right"><small><a href="https://repl.it/@4GeeksAcademy/Python-Class-Inheritance?lite=true">Haz clic aquí para abrir el demo en una nueva ventana</a></small></div>









  








  

