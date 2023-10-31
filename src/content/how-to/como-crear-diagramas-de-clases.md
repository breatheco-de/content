---
title: "¿Cómo crear diagramas de clases UML?"
subtitle: "Aprende a crear diagramas de clases UML. Descubre cómo representar las estructuras de tus programas de manera visual y efectiva. ¡Domina la técnica ahora!"
tags: ["uml", "class-diagram"]
authors: ["DF27ARTS"]

---

## ¿Cómo crear un diagrama de clases UML?

Un diagrama de clases es una de las herramientas más importantes en el lenguaje de modelado UML (Unified Modeling Language), utilizado para visualizar las clases y sus relaciones en un sistema POO (Programming Object Oriented). Un diagrama de clases muestra las clases del sistema, sus atributos, métodos y las relaciones entre ellas, como la herencia y la asociación de clases. En este artículo veremos ejemplos sobre cómo crear un diagrama de clases UML paso a paso.

## Crear un diagrama de clases UML paso a paso

Vamos a crear un diagrama de clases paso a paso, existen varias plataformas en internet que te ayudarán a crear un diagrama de clases o de cualquier otro tipo, para este ejemplo, vamos a usar el sitio web gratuito [draw.io](https://app.diagrams.net) uno de las más populares para crear diagramas UML. Si te gusta trabajar con VS code, la exteción de [draw.io](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) para VS code te permite crear diagramas UML directamente en tu entorno de desarrollo.

### 1. Crear un archivo de diagramas UML

El siguiente video te ayudará a entender mejor cómo crear un nuevo archivo en **draw.io** y guardarlo en tu cuenta de [google drive](https://drive.google.com).

<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/XmSUk7qeXdg" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
></iframe>

Si en la sección de nuevo archivo en tu cuenta de google drive no te aparece **diagrams.net** significa que aun no tienes esta aplicación integrada con tu cuenta de drive, para integrar **draw.io** con tu cuenta de drive sigue las siguientes instrucciones: 

1. Presiona en el botón de `+ Nuevo`, se te abrirá un pestaña para escoger el tipo de archivo que deseas crear.
2. Dentro de esta pestaña, presiona en el botón que dice **Más**, se te abrirá otra pestaña con más opciones.
3. Dentro de esta nueva pestaña, presiona en el botón **Conectar más aplicaciones**, esto te abrirá una pequeña página donde puedes descargar y agregar más aplicaciones con tu cuenta de drive.
4. En esta página, escribe en el buscador (draw.io) y luego cuando te aparezca la aplicación, presiona sobre ella para ver más detalles y haz click en el botón **Instalar**, una vez instalada ya puedes acceder a ella desde tu cuenta de google drive.

### 2. Identifica las clases necesarias

El segundo paso para crear un diagrama de clases UML es identificar las clases que vas a necesitar para tu proyecto. Una clase es una representación abstracta de un objeto que tiene atributos y comportamientos específicos. Para nuestro ejemplo vamos a modelar las clases necesarias para una aplicación de venta de libros, básicamente una biblioteca.

Para crear esta aplicación las clases principales son las siguientes:

1. **Biblioteca**: la clase biblioteca será básicamente la clase principal de la aplicación que tendrá dentro todos los libros de nuestra app.
2. **Libro**: la clase libro representa un libro y todas sus características, esta clase es una clase agregada a la clase biblioteca.
3. **Persona**: esta clase nos servirá como una clase abstracta para representar los valores comunes tanto de la clase vendedor como de la clase cliente.
4. **Vendedor**: la clase vendedor será una subclase de la clase persona pero con atributos más específicos para representar un vendedor.
5. **Cliente**: la clase cliente también será una subclase de la clase Persona pero le agregaremos algunas nuevas características para representar mejor a un cliente.

### 3. Definir los atributos y métodos

El tercer paso es definir los atributos y métodos de cada clase, a continuación vamos a definir estos atributos en todas las clases de nuestra aplicación. 

![https://res.cloudinary.com/dleo66u17/image/upload/v1691009711/Captura_de_pantalla_2023-08-02_155300_nhlqka.png](https://res.cloudinary.com/dleo66u17/image/upload/v1691009711/Captura_de_pantalla_2023-08-02_155300_nhlqka.png)

Como puedes ver en este ejemplo, debemos definir cada clase junto con sus atributos y métodos, las cadenas de texto que se encuentran en la parte superior de la línea central son los atributos y las que se encuentran en la parte inferior son los métodos. La estructura básica de un diagrama de clases es la siguiente: 

- Para declarar los atributos de nuestra clase usa los siguientes signos:  
    - (+) Pública: Representa que se puede acceder al atributo o método desde cualquier parte de la aplicación.
    - (-) Privada: Representa que se puede acceder al atributo o método únicamente desde la misma clase.
    - (#) Protegida: Representa que el atributo o método puede ser accedido únicamente desde la misma clase o desde las clases que hereden de ella (clases hijas o subclases).
- Los atributos se declaran con la siguiente sintaxis:
```
+ NombreAtributo: TipoDeDato
```
- Los métodos de las clases se declaran de la siguiente manera:
```
+ NombreMetodo(nombreParametro: TipoDeDato): TipoDeDatoRetornado
```

Esta es la estructura convencional para crear una diagrama de clases, aunque es importante mencionar que no hay una estructura exacta ya que esto depende de cada proyecto, además también es importante tener en cuenta que los colores de las clases tampoco tiene una estructura convencional, simplemente se usan para diferenciar los diferentes tipos de clases pero puedes usar los colores que quieras o simplemente no usar colores.

### 4. Establecer las relaciones

El cuarto y último paso para crear un diagrama de clases es establecer las relaciones entre las clases, como se muestra en el siguiente ejemplo: 

![https://res.cloudinary.com/dleo66u17/image/upload/v1691172317/Captura_web_4-8-2023_13135_app.diagrams.net_kmisyp.jpg](https://res.cloudinary.com/dleo66u17/image/upload/v1691172317/Captura_web_4-8-2023_13135_app.diagrams.net_kmisyp.jpg)

En este ejemplo, la clase **Persona** que es una clase abstracta la relacionamos con sus clases hijas o subclases, la clase **Vender** y la clase **Cliente** haciendo uso de una línea sólida con una flecha en forma de triángulo, luego la clase principal **Biblioteca** la relacionamos con las demás clases que contiene, la clase **LIbro**, la clase **Vendedor** y la clase **Cliente** haciendo uso de una linea solida y una flecha con forma de rombo y un color de fondo negro.

> Es muy importante resaltar que cuando diseñes el diagrama UML de tu aplicación no será un diseño estático, en el momento que empieces a generar el código y quieras agregar más atributos o clases que no tomaste en cuentas al momento de hacer el diseño puedes hacerlo sin ningun problema, solo ten en cuenta que el diseño del diagrama UML de tu aplicación debe representar todos los atributo, métodos e interacciones de tu aplicación de la forma más precisa posible.

## Aplicaciones para crear diagramas de clases UML

Existen varias aplicaciones o sitios web que puedes usar para realizar un diagrama de clases UML o de cualquier otro tipo, muchas de ellas tiene acceso a **google drive** para guardar los archivos. Es recomendable guardar tus diseños en algún almacenamiento en la nube como Google dive, Gihub etc... de esta forma estará más seguro. A continuación podrás ver las tres aplicaciones más comunmente utilizadas para diseñar diagramas de cualquier tipo:

1. **Draw.io**:  [draw.io](https://app.diagrams.net) es una herramienta gratuita y de código abierto que ofrece una amplia gama de plantillas, incluyendo diagramas de clases UML o de cualquier otro tipo, como diagramas de objetos o de bases de datos y te permite guardar los archivos en diferentes partes como, google drive, github o tu almacenamiento local.
2. **Visual Paradigm**: [visual paradigm](https://www.visual-paradigm.com) es una aplicación completa de modelado UML con una interfaz gráfica intuitiva que permite crear diagramas de clases, así como otros tipos de diagramas UML.
3. **Lucidchart**: [lucidchart](https://www.lucidchart.com/pages/es) le permite a los usuarios crear diagramas UML de forma fácil y rápida. Es una buena opción para equipos pequeños o grandes y ofrece una amplia variedad de funciones.

## Conclusión

Los diagramas de clases UML son una herramienta esencial para el modelado de sistemas orientados a objetos, Declararlos de forma correcta y usando las aplicaciones adecuadas dependiendo del tipo de proyecto nos permiten visualizar de manera más efectiva las estructuras de nuestro sistema, lo que contribuye a un proceso de desarrollo de software más eficiente y exitoso. Encontrarás más información valiosa en el Blog de [4Geeks](https://4geeks.com/es).
