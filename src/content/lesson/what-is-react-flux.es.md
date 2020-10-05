---
title: "Aprendamos qué es React Flux"
subtitle: "Sin Flux, React es solo una linda biblioteca de front-end. React Flux lo convertirá en un marco - que le dará a tu aplicación una estructura definida - cuidando la capa de procesamiento de datos, y mucho más lo que es el flujo."
cover: "https://ucarecdn.com/b84e07e5-5761-469b-85bb-f7afc87d4dc9/"
textColor: "white"
date: "2018-11-14"
tags: ["reactjs","flux"]
status: "draft"

---

¿Recuerdas que siempre decimos que la programación es como Taco Bell?  ¡Siempre son los mismos ingredientes, excepto que se usan de una manera diferente!  En este caso particular, vamos a confiar mucho en los Eventos para crear toda la arquitectura de la aplicación.

## ¿Por qué necesitamos Flux?
***

Sabemos que todavía estás en el proceso de aprender React.  Los estados y los accesorios pueden ser confusos, y ahora, con Flux, las cosas se van a poner un poco más difíciles.  Pero es por una buena causa!

Sin Flux, no puedes crear aplicaciones React medianas o grandes porque todo se desorganizará bastante rápido.

Además, dos vistas diferentes no pueden enviar datos entre sí como lo hacen los componentes (utilizando accesorios) porque todas las vistas son hermanas y React Router las está instanciando. Necesitamos tener una tienda común compartida entre todas las vistas que vamos a llamar "La Tienda"

Aquí hay una lista de todas las ventajas de usarlo:

+ Centraliza y **separa los datos de la aplicación de los componentes:** la comunicación de la base de datos y el procesamiento de los datos ya no dependerán de cómo se vea la aplicación (renders).
+ **Controla la forma en que fluirán los datos de tu aplicación:** no importa si los datos fueron ingresados por el usuario o provenientes de una base de datos; todo estará disponible de forma clara y accesible.
+ Diferencia sus componentes en **vistas vs componentes reutilizables:** sus componentes seguirán siendo abstraídos de la lógica de tu aplicación – haciéndolos 100% reutilizables para futuras aplicaciones.

![React Flux](https://ucarecdn.com/aa1a5994-8de9-4d24-99ce-3a0d686c30bd/-/resize/700x/)

### Flux divide la aplicación en 3 capas:

|&nbsp;     |&nbsp;       |
|:-----------|:----------------|
Vistas/Views (Components)     |Cada componente React que llama a cualquier acción Flux es llamada una vista.  La razón para llamar a esos componentes de una manera diferente es porque se supone que los componentes de React se comunican entre sí a través de sus accesorios (sin Flux).<br> <br>Una vez que un componente React esté codificado de forma rígida a Flux, no podrá reutilizar ese componente en el futuro (en este o en cualquier otro desarrollo).       |
|Acciones (Actions)       |Las acciones pueden ser activadas por componentes (cuando el usuario hace click o interactúa con la aplicación) o por el sistema (por ejemplo, la funcionalidad de guardado automático).  Las acciones son el primer paso de cualquier flujo de trabajo de Flux y siempre deben enviarse a la tienda.      |
|Almacenaje (Stores)       |El almacenaje contiene todos los datos de la aplicación.  Maneja todo lo que recibe el despachador y determina la forma en que se deben almacenar y recuperar los datos.            |

## Construyendo nuestra primera historia de usuario con Flux
***

El siguiente proyecto es una aplicación de To-Do List (lista de tareas) con 2 historias de usuario principales:

+ Crear tarea (ya desarrollada y en funcionamiento).
+ Eliminar tarea.

Para codificar la funcionalidad de borrado, tenemos que actualizar 4 archivos principales: (1) El Componente (The Component) (para cuando el usuario hace click), (2) las Acciones (The Actions), (3) el Almacenaje (The Store) (dos veces), y, (4) el Componente (The Component) una última vez.  Son solo 3 archivos y 5 actualizaciones.  Y tienes que hacer eso para cada historia de usuario que vayas a construir en tu aplicación.


> *Al final, trabajar con Flux tiene que convertirse en algo tan automático como andar en bicicleta.*


![react flux](https://ucarecdn.com/77c93bfa-92cb-44e3-a7c5-c959e27c5ccc/-/resize/1100x/)

## Permite implementar la funcionalidad de eliminar tarea
***

#### 1) ¿Qué acción del usuario inicia la funcionalidad?

(Siempre es un evento típico de JS como: hacer click, desplazar, cambiar el tamaño, etc.)

***Todo comienza cuando el usuario debe hacer click en el icono de la papelera. Es por eso que necesitamos iniciar nuestra aplicación escuchando el típico evento onClick en el botón de eliminar.***

```javascript
// En el componente que representa cada elemento de tarea, debemos agregar un botón y también un sensor onClick que llame 
// a la respectiva función TodoAction.deleteTodo(task) que crearemos en las acciones: 

<button onClick={()=>MyActions.deleteTodo(taskToDelete)}>delete</button>
```

#### 2) Entonces necesitamos codificar nuestra acción dentro del archivo MyActions.js como este:

```javascript{numberLines: true}
MyActions.js

// En este caso, decidimos que esta función (conocida como action) recibirá el ID de la tarea que se eliminará.
class MyActions extends Flux.Actions{
    deleteTask(taskToDelete){
         //get the current list of actions form the store 
        let currentActions = MyStore.getActions();
        let updatedActions = currentActions.filter((task) => {
             return (task.id != taskToDelete.id);
        });

        this.dispatch('MyStore.setActions', updatedActions);
    }
}
```

#### 3) Actualizar el almacenaje para manejar la nueva acción distribuida

```javascript{numberLines: true}
// Dentro de todoStore tenemos un método HandleActions que contiene la lógica para manejar cada acción distribuida. 
// Tenemos que agregar un nuevo caso al conmutador con el nombre 'DELETE_TODO'  
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

```javascript{numberLines: true}
// En cualquier lugar de tu TodoStore class, agrega un nuevo método que finalmente elimine la tarea del to-do list. 
// En este caso estamos usando la función de filtro porque devuelve la misma matriz pero solo con
// los elementos que coinciden con la pregunta lógica dentro del filtro (task.id! = id) 

class TodoStore extends EventEmitter {
  ...
  deleteTodo(id){
    this.todos = this.todos.filter((task)=>{
       //filter all tasks that have the given id 
      return (task.id != id);
    });
    this.emit('change');
  }
  ...
}
```

## El Resultado
***

Finalmente, tenemos una nueva funcionalidad implementada en nuestro proyecto.  Para seguir agregando más funcionalidades, solo tiene que iniciar de nuevo el flujo de trabajo de codificación de Flux desde el paso 1.

<iframe src="https://codesandbox.io/embed/j1nvpono23" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/j1nvpono23">Click aquí para abrir el demo en una nueva ventana</a></small></div>



