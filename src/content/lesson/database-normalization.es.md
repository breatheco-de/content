## Conceptos básicos

Cuando hablamos de bases de datos relacionales La principal ventaja que se nos viene a la mente es la integridad de los datos estas bases de datos permiten distribuir la información en Tablas distintas  para agrupar información Según sea pertinente y crear relaciones entre las tablas para asociar la información.  sin embargo para mantener la integridad es necesario cumplir ciertos estándares a la hora de diseñar nuestras tablas Necesitamos que la estructura sea pertinente a los datos que queremos almacenar y que garantice la integridad de la información así como su consistencia y evite Tener información redundante innecesaria.

Para ello existe la normalización de base de datos.  se trata de cinco formas normales  que de cumplirlas tu base de datos garantizará la integridad de la información y la optimización a la hora de hacer consultas.  las formas cuatro y cinco generalmente se contemplan para escenarios más avanzados y de mayor complejidad,   para la mayoría de los casos bastará con cumplir las tres primeras formas normales que cubriremos a continuación en este artículo.

Antes de hablar de las formas normales debemos manejar  algunos conceptos fundamentales.  

El primer concepto es entidad,  se trata de una abstracción de un objeto de la realidad o de un proceso de la organización cuyos datos deben ser almacenados en la base de datos de manera agrupada y correlacionada.

El segundo es llave primaria,  se trata de un atributo o columna que sirve para identificar de manera inequívoca a una entidad dentro de una tabla. 


## Primera forma Normal - 1NF

Para que una tabla cumpla con la primera forma normal debe cumplir los siguientes parámetros:



* Cada celda debe tener un único valor
* Debe haber una llave primaria para identificar cada entidad
* No debe haber filas o columnas duplicadas 

Si por ejemplo tenemos una tabla de pedidos de productos de la siguiente forma:


<table>
  <tr>
   <td>Pedido
   </td>
   <td>Detalle
   </td>
   <td>Cliente
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>2 Zapatos
   </td>
   <td>Pedro
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>3 Pantalones
   </td>
   <td>Pedro
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>1 Bolso
   </td>
   <td>María
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>1 Camisa
   </td>
   <td>Ana
   </td>
  </tr>
</table>


Podemos notar que la columna detalle contiene dos datos importantes para el pedido la cantidad y la información del producto.  de la misma forma podemos notar como si bien Podemos identificar el pedido con el ID no ocurre lo mismo en el caso de los productos y del cliente puesto que solo tenemos un nombre que No necesariamente es único para cada uno y puede ser repetido.


<table>
  <tr>
   <td>Pedido
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
   <td>1z
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
   <td>3P
   </td>
   <td>Pantalones
   </td>
   <td>3
   </td>
   <td>1
   </td>
   <td>Pedro
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>2B
   </td>
   <td>Bolso 
   </td>
   <td>1
   </td>
   <td>2
   </td>
   <td>María
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>2Z
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


Ahora podemos ver cómo no solo el  pedido se puede identificar con su ID sino que también Contamos con ideas para el producto y el cliente de manera que cada una de estas entidades pueda ser identificada.


## Segunda forma normal - 2NF.
