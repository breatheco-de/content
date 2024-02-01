---
title: "Learn What is React Flux"
subtitle: "Without Flux, React is just a cute front-end library. React Flux will make it a framework, giving your application a defined structure, taking care of the data-processing layer, and more about flux."
cover_local: "../../assets/images/b84e07e5-5761-469b-85bb-f7afc87d4dc9.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["reactjs","flux"]
status: "published"

---

Remember how we always say that programming is like Taco Bell? It’s always the same ingredients, except differently! In this particular case, we are going to be relying heavily on Events to create our entire application architecture.

## Why do we need Flux?

We know you are still in the process of learning React. States and props can be confusing, and now, with Flux, things are going to get a little bit harder. But it’s for a good cause!

Without Flux, you can’t create medium or big React applications because everything will become disorganized pretty quickly.

Also, two different views are not able to send data between each other like the components do (using props) because all views are siblings and React Router is instantiating them. We need to have a common store shared between all the views that we are going to call "The Store."

Here is a list of all the advantages of using it:

+ It centralizes and **detaches the application data from the components:** database communication and data-processing will not depend anymore on how the application looks (renders).
+ It **controls the way your application data will flow:** it does not matter if the data was inputted by the user or coming from a database; everything will be available in a clear and accessible way.
+ It differentiates your components in **Views vs Re-usable components:** your components will remain being abstracted from your application logic, making them 100% reusable for future applications.

![React Flux](https://github.com/breatheco-de/content/blob/master/src/assets/images/aa1a5994-8de9-4d24-99ce-3a0d686c30bd.png?raw=true)

### Flux Divides the Application in 3 Layers:

|&nbsp;     |&nbsp;       |
|:-----------|:----------------|
Views (Components)     |Every React Component that calls any Flux action is called a view. The reason to call those components differently is that React components are supposed to communicate with each other through their props (without Flux).<br> <br>Once a React Component is hard-coded to Flux, you will not be able to reuse that component in the future (on this or any other development).       |
|Actions       |Actions can be triggered components (when the user clicks or interacts with the application) or by the system (for example, the auto-save functionality). Actions are the first step of any Flux workflow, and they always need to dispatch to the store.      |
|Store        |The store contains all the application data. It handles everything incoming from the dispatcher and determines the way data should be stored and retrieved.            |

## Building a to-do list with flux.

### 1) Let's build a reducer that implements the flux pattern.

To take control over the flow of the data in our application we'll use a `reducer` to group the functions and the logic of the application (actions) along with the data that the y handle and must be available to all the other components (state).

For now let's just say that the reducer is a function that generates a new state every time it runs,  and what it does depends of the information passed to the `action` function. This allow us to call the `actions` to update the state as indicates the flux pattern. To understand better how a reducer works, you can read [this article]() where we cover this in more depth.

```javascript
// This is the reducer function
const TaskReducer = (state, action) => {
  // Deppending on the action type, it performs a specific action
 switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      let newState=[...state]
      newState.splice(action.index, 1);
      return newState
    default:
      return state;
  }
};
```

Th next step is to make this funcion available for all the other components of the application, for that we'll use a context with the hook `useReducer`, wich will allow us to create a state and the `actions` function to publish it to the rest of the components.

```react
//TaskConext.jsx
import { useReducer, createContext } from "react";

// Create an empty context
const TaskContext = createContext(null);

const TaskReducer = (state, action) => {
 // Here is the reducer defined previously👆
};

// Create a component to wrap our application within the context
export function TaskProvider({ children }) {
  // Create the state 'tasks' and the dispatcher 'taskActions'
  // additionally we'll pass an empty array as an initial value.
  const [tasks, taskActions ]= useReducer(TaskReducer, []);
  return (
    {/* Create the context with our state and actions */}
    <TaskContext.Provider value={{tasks, taskActions}}>{children}</TaskContext.Provider>
  );
}

// Is necessary to export the context for it to be used in other components.
export default TaskContext;
```

Now the context is ready with our tasks, all we have to do is wrap our app with this component to start using our context.

```react
//index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
);

```
The only thing left to do is to call the context in the components that need to use our tasks.

### 2) Let's start adding a new task.

Fora ello usaremos un componente que muestre una caja de texto y un boton que realiza la accion de agregar la tarea, todo dentro de un formulario para facilitar el manejo del evento de envio(submit).

Todo esto es básico de un formulario en react, pero como queremos utilizar las `actions` del contexto, necesitamos llamarlo en el componente.

```react
import { tasks, useContext } from "react";
import TaskContext from "./TaskContext.jsx";

export default function AddItem() {
  const { taskActions } = useContext(TaskContext);
  // A partir de este punto tenemos disponibles las actions del reducer
  // ...
}
```

Para hacer uso de estas `actions` se llama a la funcion y se le pasa como parametro un objeto con la propiedades de la accion que queremos realizar, siendo la mas importante `type` que indica la accion especifica a ejecutar. El resto de las propiedades son datos opcionales que pueden ser requeridos por la accion.

```react
// AddItem.jsx
import { useContext } from "react";
import TaskContext from "./TaskContext.jsx";

export default function AddItem() {
  // Hacemos uso del contexto y accedemos a la funcion 'taskActions'
  const { taskActions } = useContext(TaskContext);
  function handleAddTask(e) {
    e.preventDefault();
    // Llamamos al actions especificandole 'type'
    // asi como tambien la tarea que se va a agregar
    let textbox = e.target.elements.task;
    taskActions({ type: "add", payload: textbox.value });
    textbox.value = "";
  }
  return (
    <li>
      <form onSubmit={handleAddTask}>
        <input name="task" type="text"/>
        <button type="submit">+</button>
      </form>
    </li>
  );
}
```

### 3) Ahora vamos a mostrar la lista

De la misma forma como accedemos a `taskActions`, tambien podemos acceder al objeto `tasks` que contiene el estado con la lista. Igual que antes, debemos hacer uso de `useContext` en nuestro componente.

```react
import { useContext } from "react";
import "./App.css";
import TaskContext from "./TaskContext.jsx";
import ListItem from "./ListItem.jsx";
import AddItem from "./AddItem.jsx";

export default function App() {
  // Accedemos al contexto, pero esta vez solo vamos a usar 'tasks'
  const {tasks} = useContext(TaskContext);

  return (
    <main>
      <h2>Todo list</h2>
      <ul className="list-group w-50">
        <AddItem />
        {tasks.map((task, index) => (
          <ListItem key={index} task={task} index={index} />
        ))}
      </ul>
    </main>
  );
}
```

Puedes notar que aparece el componente `AddItem` que vimos previamente y desde donde se pueden agregar tarea. Luego de eso se hace el renderizado de la lista con la funcion `map`, pero notamos que se esta usando un componente `ListItem` para mostrar los elementos, no solo eso sino que ahi tambien corresponde hacer la eliminacion de la tarea, veamos ese componente.

### 4) Eliminacion de items

Si bien el renderizado es básico (un elemento `li` con el texto y un boton), lo interesante es como hacemos la eliminacion del item con las actions.

***Todo comienza cuando el usuario haga clic en el icono de la papelera. Es por eso que necesitamos iniciar nuestra aplicación escuchando el típico evento onClick en el botón de eliminar.***

```react
  onClick={() => taskActions({ type: "remove", index })}
```

Notamos que el llamado al action es parecido al que usamos para agregar items, pero se le esta pasando un parámetro distinto llamado `index`, que le indica al dispatcher que elemento va a eliminar. Asi como vimos en ambos ejemplos, podemos pasar la data que necesite nuestra action al momento de llamarla como parámetros adicionales.

```react
import { useContext } from "react";
import TaskContext from "./TaskContext.jsx";

export default function ListItem({ task, index }) {
  const { taskActions } = useContext(TaskContext);

  return (
    <li>
      {task}
      <button
        onClick={() => taskActions({ type: "remove", index })}
      >
        {/* Icono de papelera */}
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
}
````

## Resultado final

Ya hemos implementado la lógica de nuestra aplicacion en un contexto aplicando el patrón flux, permitiendo su uso en distintos componentes. A continuacion podemos ver el resultado final.

<iframe src="https://replit.com/@4GeeksAcademy/flux-sample?lite=1&embed=true#src/App.jsx"></iframe>
