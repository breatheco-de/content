---
title: "Modelado de bases datos"
subtitle: "Uno de los retos de trabajar con bases de datos es organizar la información en tablas de forma eficiente y que garantice la consistencia de los datos, para ello las formas normales no dicen que debemos cumplir para tener la base de datos mejor ordenada."
cover_local: "https://github.com/breatheco-de/content/blob/master/src/content/lesson/../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png?raw=true"
textColor: "white"
tags: ["database","SQL","Postgres","modeling"]

---

## Conceptos básicos

Cuando hablamos de bases de datos relacionales la principal ventaja que se nos viene a la mente es la integridad de los datos. Estas bases de datos permiten distribuir la información en tablas distintas para agrupar información según sea pertinente y crear relaciones entre las tablas para asociar los datos. Sin embargo para mantener la integridad es necesario cumplir ciertos estándares a la hora de diseñar nuestras tablas. Necesitamos que la estructura sea pertinente a los datos que queremos almacenar y que garantice la integridad de la información así como su consistencia y evite tener información redundante innecesaria.

Para ello existe la normalización de base de datos, se trata de cinco formas normales que de cumplirlas tu base de datos garantizará la integridad de la información y la optimización a la hora de hacer consultas. las formas cuatro y cinco generalmente se contemplan para escenarios más avanzados y de mayor complejidad, para la mayoría de los casos bastará con cumplir las tres primeras formas normales que cubriremos a continuación en este artículo.

Antes de hablar de las formas normales debemos manejar algunos conceptos fundamentales.

El primer concepto es entidad, se trata de una abstracción de un objeto de la realidad, o de un proceso de la organización, cuya información debe ser almacenada en la base de datos de manera agrupada y correlacionada.

El segundo concepto es llave o clave primaria, se trata de un atributo o columna que sirve para identificar de manera inequívoca a una entidad dentro de una tabla.

## Primera forma Normal - 1NF

Para que una tabla cumpla con la primera forma normal debe cumplir los siguientes parámetros:


* Cada celda debe tener un único valor
* Debe haber una llave primaria para identificar cada entidad
* No debe haber filas o columnas duplicadas 

Si por ejemplo tenemos una tabla de pedidos de productos de la siguiente forma:

<table>
  <tr>
   <td>IdPedido 
   </td>
   <td>Fecha
   </td>
   <td>Detalle
   </td>
   <td>Cliente
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>01-01-23
   </td>
   <td>2 Zapatos
   </td>
   <td>Pedro
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>01-01-23
   </td>
   <td>3 Pantalones
   </td>
   <td>Pedro
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>03-02-23
   </td>
   <td>1 Bolso
   </td>
   <td>María
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>02-03-23
   </td>
   <td>1 Camisa
   </td>
   <td>Ana
   </td>
  </tr>
</table>

Podemos notar que la columna “Detalle” contiene dos datos importantes para el pedido: la cantidad y el nombre del producto. De la misma forma podemos notar cómo si bien Podemos identificar el pedido con el “IdPedido” no ocurre lo mismo en el caso de los productos y del cliente puesto que solo tenemos un nombre que no necesariamente es único para cada uno y puede ser repetido. Vamos a corregir eso:

<table>
  <tr>
   <td>IdPedido 
   </td>
   <td>Fecha
   </td>
   <td>IdProducto
   </td>
   <td>NombreProducto
   </td>
   <td>Cantidad
   </td>
   <td>IdCliente
   </td>
   <td>Cliente
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>01-01-23
   </td>
   <td>1
   </td>
   <td>Zapatos
   </td>
   <td>2
   </td>
   <td>1
   </td>
   <td>Pedro
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>01-01-23
   </td>
   <td>2
   </td>
   <td>Pantalones
   </td>
   <td>6
   </td>
   <td>1
   </td>
   <td>Pedro
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>03-02-23
   </td>
   <td>3
   </td>
   <td>Bolso 
   </td>
   <td>4
   </td>
   <td>2
   </td>
   <td>María
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>02-03-23
   </td>
   <td>1
   </td>
   <td>Zapatos
   </td>
   <td>1
   </td>
   <td>3
   </td>
   <td>Ana
   </td>
  </tr>
</table>

Ahora podemos ver cómo no solo el pedido se puede identificar con su ID sino que también Contamos con ids para el producto y el cliente de manera que cada una de estas entidades pueda ser identificada. También se separaron la cantidad y el nombre del producto a columnas distintas para cumplir así con la primera forma normal.

## Segunda forma normal - 2NF

Para la segunda forma normal el objetivo es eliminar grupos repetitivos por lo que se deben cumplir los siguientes criterios:

* Cumplir con la primera forma normal

* todos los atributos deben depender directamente de la clave primaria

Dicho de otra forma todos aquellos atributos que correspondan a distintas claves primarias deben ser separados en Tablas diferentes con sus propias claves primarias y atributos relacionados. Siguiendo el ejemplo de la tabla de pedidos quedaría lo siguiente:

<table>
  <tr>
   <td colspan="2" >Pedidos
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Id
   </td>
   <td>Fecha 
   </td>
   <td>Cliente
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>01-01-23
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>03-02-23
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>02-03-23
   </td>
   <td>3
   </td>
  </tr>
</table>

---

<table>
  <tr>
   <td colspan="2" >Cliente
   </td>
  </tr>
  <tr>
   <td>Id
   </td>
   <td>Nombre
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>Pedro
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>María
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>Ana
   </td>
  </tr>
</table>

---

<table>
  <tr>
   <td colspan="5" >Productos
   </td>
  </tr>
  <tr>
   <td>IdPedido
   </td>
   <td>Fecha
   </td>
   <td>IdProducto
   </td>
   <td>Nombre
   </td>
   <td>Cantidad
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>01-01-23
   </td>
   <td>1
   </td>
   <td>Zapatos
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>01-01-23
   </td>
   <td>2
   </td>
   <td>Pantalones
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>03-02-23
   </td>
   <td>3
   </td>
   <td>Bolso 
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>02-03-23
   </td>
   <td>1
   </td>
   <td>Zapatos
   </td>
   <td>1
   </td>
  </tr>
</table>


Al separar los atributos en sus respectivas tablas con sus propias llaves primarias podemos ver una reducción de las filas repetidas ya que esta redundancia se hace innecesaria cuando se puedan relacionar las distintas tablas a través de sus llaves primarias y foráneas. Por ejemplo solo necesito una fila para registrar al cliente el cual puede aparecer varias veces en la tabla de pedidos, en vez de colocar la información del cliente varias veces para cada pedido.

Aún así podemos notar cierta redundancia en la tabla de productos puesto que nos vemos en la necesidad de repetir los productos para cada uno de los pedidos, aquí es donde viene la…

## Tercera forma normal - 3NF

Para la tercera forma normal lo que queremos es que absolutamente todos los atributos de una tabla dependan únicamente de su clave primaria y no de otra clave no primaria Esto es lo que se conoce como una dependencia transitiva, es decir cuando un atributo depende indirectamente de la clave primaria de otro. Por ejemplo: Los zapatos tienen su propia clave “id”, pero también deben asociarse con otra clave, el “IdPedido”, para saber cuales productos deben incluirse en el pedido.

Para resolver estas dependencias se crean tablas con cada una de las entidades por separado, y se crean tablas transitorias que relacionan las claves primarias de ambas. Con esto eliminamos toda redundancia de datos y logramos una mayor confiabilidad de la información. 

En el caso de la tabla de productos del ejemplo quedaría resuelto de la siguiente manera:


<table>
  <tr>
   <td colspan="2" >Pedidos
   </td>
  </tr>
  <tr>
   <td>IdPedido
   </td>
   <td>Fecha
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>01-01-23
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>03-02-23
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>02-03-23
   </td>
  </tr>
</table>

---

<table>
  <tr>
   <td colspan="2" >Productos
   </td>
  </tr>
  <tr>
   <td>ProductId
   </td>
   <td>Nombre
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>Zapatos
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>Pantalones
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>Bolso 
   </td>
  </tr>
</table>

---

<table>
  <tr>
   <td colspan="3" >Detalle del pedido
   </td>
  </tr>
  <tr>
   <td>IdPedido
   </td>
   <td>IdProducto
   </td>
   <td>Cantidad
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>2
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>3
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>1
   </td>
   <td>1
   </td>
  </tr>
</table>

---

Ahora puedes ver cómo se relacionan los productos de cada pedido, junto con la cantidad de ese producto para el pedido correspondiente. Aquí puedes ver el modelo final de la base de datos.

![Database model](https://raw.githubusercontent.com/breatheco-de/content/master/src/assets/images/database-model.png)
[Abrir en tamaño completo](https://raw.githubusercontent.com/breatheco-de/content/master/src/assets/svg/databaseModel.svg)

El costo de esto es que ahora tenemos que hacer consultas cruzando la información de varias tablas, pero a cambio se tiene una base de datos sin redundancia y con datos más consistentes y confiables. Si por ejemplo un cliente cambia su información, todos los pedidos realizados anteriormente se relacionan únicamente con el registro actualizado del cliente, generando mayor confiabilidad para los usuarios del sistema.
