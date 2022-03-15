---
title: "Qué es React Flux"
subtitle: "Sin Flux, React es solo una linda librería de front-end. React Flux lo convertirá en un marco - que le dará a tu aplicación una estructura definida - ocupándose de la capa de procesamiento de datos y, aún más, el flujo."
cover_local: "../../assets/images/b84e07e5-5761-469b-85bb-f7afc87d4dc9.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["reactjs","flux"]
status: "published"

---

¿Recuerdas que siempre decimos que la programación es como Taco Bell?  ¡Siempre son los mismos ingredientes utilizados de una manera diferente!  En este caso particular, vamos a confiar mucho en los Eventos para crear toda la arquitectura de la aplicación.

## ¿Por qué necesitamos Flux?
***

Sabemos que todavía estás aprendiendo React.  Los states (estados) y las props (propiedades) pueden ser confusos, y ahora, con Flux, las cosas se van a poner un poco más difíciles ¡Pero es por una buena causa!

Sin Flux, no puedes crear aplicaciones React medianas o grandes porque todo se desorganizará bastante rápido.

Además, dos vistas diferentes no pueden enviar datos entre sí como lo hacen los componentes (utilizando props) porque todas las vistas son parientes y React Router las está instanciando. Necesitamos tener un store común compartido entre todas las vistas que vamos a llamar "The Store"

Aquí hay una lista de todas las ventajas de usarlo:

+ Centraliza y **separa los datos de la aplicación de los componentes:** la comunicación de la base de datos y el procesamiento de los datos ya no dependerán de cómo se vea la aplicación (renderización).
+ **Controla la forma en que fluirán los datos de tu aplicación:** no importa si los datos fueron ingresados por el usuario o provienen de una base de datos; todo estará disponible de forma clara y accesible.
+ Diferencia sus componentes en **vistas vs componentes reutilizables:** sus componentes seguirán siendo abstraídos desde la lógica de tu aplicación – haciéndolos 100% reutilizables para futuras aplicaciones.

![React Flux](../../assets/images/aa1a5994-8de9-4d24-99ce-3a0d686c30bd.png)

### Flux divide la aplicación en 3 capas:

|&nbsp;     |&nbsp;       |
|:-----------|:----------------|



Vistas/Views (Components)     |Cada componente React que llama a cualquier acción Flux es llamada una vista.  La razón para llamar a esos componentes de una manera diferente es porque se supone que los componentes de React se comunican entre sí a través de sus accesorios (sin Flux).<br> <br>Una vez que un componente React esté vinculado de forma rígida a Flux, no podrá reutilizar ese componente en el futuro (en este o en cualquier otro desarrollo).       |
|Acciones (Actions)       |Las acciones pueden ser activadas por componentes (cuando el usuario hace click o interactúa con la aplicación) o por el sistema (por ejemplo, la funcionalidad de guardado automático).  Las acciones son el primer paso de cualquier flujo de trabajo de Flux y siempre deben enviarse a la tienda.      |
| Store     |El store contiene todos los datos de la aplicación.  Maneja todo lo que recibe el despachador y determina la forma en que se deben almacenar y recuperar los datos.            |

## Construyendo nuestra primera historia de usuario con Flux
***

El siguiente proyecto es una aplicación de To-Do List (lista de tareas) con 2 historias de usuario principales:

+ Crear tarea (ya desarrollada y en funcionamiento).
+ Eliminar tarea.

Para codificar la función para eliminar tareas, tenemos que actualizar 4 archivos principales: (1) El Componente (The Component) (para cuando el usuario haga clic), (2) las Acciones (The Actions), (3) El Store) (dos veces), y, (4) el Componente (The Component) una última vez.  Son solo 3 archivos y 5 actualizaciones.  Y tienes que hacer eso para cada historia de usuario que vayas a construir en tu aplicación.


> *Al final, trabajar con Flux tiene que convertirse en algo tan automático como andar en bicicleta.*


![react flux](../../assets/images/77c93bfa-92cb-44e3-a7c5-c959e27c5ccc.jpeg)

## Permite implementar la función eliminar tarea
***

#### 1) ¿Qué acción del usuario inicia la función?

(Siempre es un evento típico de JS como: hacer clic, on hover, cambiar el tamaño, etc.)

***Todo comienza cuando el usuario debe hacer clic en el icono de la papelera. Es por eso que necesitamos iniciar nuestra aplicación escuchando el típico evento onClick en el botón de eliminar.***

```javascript

// En el componente que representa cada elemento de tarea, debemos agregar un botón y también un sensor onClik que llame 

// a la respectiva función TodoAction.deleteTodo(task) que crearemos en las acciones: 

<button onClick={()=>MyActions.deleteTodo(taskToDelete)}>delete</button>
```

#### 2) Luego necesitamos codificar nuestra acción dentro del archivo MyActions.js de esta forma:

```javascript
MyActions.js

// En este caso, decidimos que esta función (conocida como action) recibirá el ID de la tarea que se eliminará.
class MyActions extends Flux.Actions{
    deleteTask(taskToDelete){
         //obtiene la lista actual de acciondes del store
        let currentActions = MyStore.getActions();
        let updatedActions = currentActions.filter((task) => {
             return (task.id != taskToDelete.id);
        });

        this.dispatch('MyStore.setActions', updatedActions);
    }
}
```


> :point_up: Este es un componente de clase. Te recomendamos que uses componentes funcionales y hooks en su lugar ya que lo componentes de clase están considerados como legacy(deprecados).


#### 3) Actualizar el store para manejar la nueva acción enviada


```javascript
// Dentro de todoStore tenemos un método HandleActions que contiene la lógica para manejar cada acción distribuida. 
// Tenemos que agregar un nuevo caso al switch con el nombre 'DELETE_TODO'  
// Tiene que coincidir con el nombre de la acción que se envió. 
  
handleActions(action) {
  switch (action.type) {
    ...
    case 'DELETE_TODO': {
      this.deleteTodo(action.id);
      break;
    }
  }
}
```

#### 4) Dentro del To-Do Store, implementa la lógica real para eliminar la tarea y emitir los cambios

```javascript

// En cualquier lugar de tu clase TodoStore, agrega un nuevo método que finalmente elimine la tarea del to-do list. 
// En este caso estamos usando la función de filter porque devuelve el mismo array pero sólo con
// los elementos que coinciden con la pregunta lógica dentro del filtro (task.id! = id) 

class TodoStore extends EventEmitter {
  ...
  deleteTodo(id){
    this.todos = this.todos.filter((task)=>{
       //filtra todas las tareas que tienen el id dado
      return (task.id != id);
    });
    this.emit('change');
  }
  ...
}
```

> :point_up: Este es un componente de clase. Te recomendamos que uses componentes funcionales y hooks en su lugar ya que lo componentes de clase están considerados como legacy(deprecados).


## El Resultado
***

Finalmente, tenemos una nueva función implementada en nuestro proyecto.  Para seguir agregando más funciones, sólo tienes que iniciar de nuevo el flujo de trabajo de codificación de Flux desde el paso 1.


<iframe src="https://codesandbox.io/embed/j1nvpono23" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/j1nvpono23">Haz clic aquí para abrir el demo en una nueva ventana</a></small></div>



