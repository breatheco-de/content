---
title: "Creando Componentes de React"
subtitle: "React.js, conviértete en master de Componentes de React y habrás conquistado el mundofront-end de React."
cover_local: "../../assets/images/84c4d84c-51b9-4906-a572-71cc07ecfc8c.jpeg"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["reactjs"]
status: "published"

---

## En React.js todo es un `<Componente />`

React.js separa tu código en pequeñas partes llamadas Componentes que pueden crearse / definirse como **class** o como **function**. Cada componente es como una aplicación de React más pequeña que tiene su propia lógica y tiene un propósito final que es **renderizar** algo. (Por ejemplo: un `navbar` de bootstrap, una _dropdown list_ - lista desplegable, un modelo, un formulario dinámico, galería de imágenes, formulario de suscripción, casi todo puede diseñarse y codificarse como un componente React). Para hacer eso, el componente de React debe tener un `return` que devuelva código JSX (HTML + JS anidado).

```jsx

import React from 'react';

// como componente funcional
function NavBar(props){
    return (<nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
           </nav>);
}

//o como un componente de clase
import React from 'react';

class Navbar extends React.Component{
    render(){
        return (<nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
           </nav>);
    }
}
```

> :point_up: Este es un componente de clase. Te recomendamos que uses componentes funcionales y hooks en su lugar ya que los componentes de clase están considerados como legacy (deprecados).

## Usando un Componente

Una vez que hayas creado tu componente puedes mostrarlos usando tags de esta forma:

```jsx
import React from "react";

import { render } from "react-dom";

// aquí le decimos a React que ponga nuestro componente principal <Home /> dentro del elemento DOM con id #myApp 
ReactDOM.render(
  <Home />,
  document.querySelector("#myApp")
);

// o podemos usar el componente Navbar y mostrarlo en la parte superior de nuestro componente Home
function Home(props){
    return (
        <div className="container-fluid"> // en JSX debemos usar un atributo llamada 'className en vez de 'class'
            <Navbar />
            <div>
                ... The rest of Home's contents ...
            </div>
        </div>
    );
}

```

## El Componente Props

A veces un componente necesita información dinámica para mostrar. Por ejemplo, necesitamos nuestro componente `<Navbar />` para mostrar la lista de enlaces disponibles y el logo de la marca. Podemos incluir esa información dentro de la llamada del componente `<Navbar />` de la misma manera que lo hacemos en los tags HTML.

```jsx

<Navbar foo="bar" foo2="bar2" />

```

En este ejemplo, estamos pasando un array de elementos de menú y una URL con el logo al componente NavBar que acabamos de declarar anteriormente.

```jsx
let menu = [
    {label: 'Home', url: '/home'}
    {label: 'Contact Us', url: '/contact-us'}
];
<Navbar items={menu} logo="http://path/to/logo.png" />
```

Ahora, dentro de `<Navbar />` podemos usar esos valores (que se entregan a través de la variable Props) para renderizar la información proporcionada.

Y, por último, debemos indicarle a React dónde debe renderizar ese componente en el DOM.

<iframe src="https://codesandbox.io/embed/zwlnpwmxll?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/zwlnpwmxll?hidenavigation=1">Haz clic aquí para abrir una nueva ventana</a></small></div>


### Características de los componentes `class` 

## El Estado del Componente

Llamamos a los componentes de clase en React ***stateful*** porque vienen con un objeto de `estado` global (compartido solo dentro del mismo componente) que tiene el único propósito de almacenar los datos necesarios para renderizar el componente. Un uso obvio del objeto **state** sería, por ejemplo, si tenemos un formulario con campos de entrada que deben ser poblados por el usuario. Los datos ingresados por el usuario deberán ser guardados en algún lugar para poder ser utilizados. El `state` será ese lugar.

En otro ejemplo, digamos que estás desarrollando un componente `<Clock />` que tiene que imprimir la hora actual cada segundo. Esto significa que nuestro componente tendrá que volver a renderizar cada segundo.

Para que el estado mantenga una página web actualizada, está programado para volver a renderizar el DOM cada vez que se modifica. Entonces, probablemente ya puedas ver cómo puedes aprovechar esta característica: manteniendo tu hora actual dentro del estado y reasignándola con la hora más actual cada segundo. Así:

:point_up:El siguiente demo actualiza la hora actual cada segundo:

<iframe src="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1">Haga clic aquí para abrir la demo en una nueva ventana</a></small></div>

El estado siempre está dentro del método `constructor()` de los componentes de clase y se expresa como un literal de objeto JS simple.

#### El objeto State se considera inmutable (no debe cambiarse directamente)

Al hablar de modificar el valor del estado, debes recordar que el estado no debe ser mutado directamente. Solo debe modificarse llamando al método especialmente designado      `this.setState()`. En él, tendrás que pasar un nuevo objeto de estado actualizado que reemplazará los valores de estado anteriores. Por ejemplo:

```jsx  

// una asignación directa de this.state solo está permitida en el método constructor de su clase; en cualquier otro lugar puede causar un error en sus datos almacenados
constructor(){
   super();
   this.state = {
      counter: 0
   }
}

// desde cualquier otro lugar de la clase, podemos restablecer el valor de una variable de estado pasando un objeto ACTUALIZADO al método setState() 
const newState = {
    counter: 2
};
this.setState(newState);

// también puedes hacer la misma operación en línea
this.setState({
   counter: 2
});
// observa cómo arriba hemos pasado la nueva versión completa del estado con {} y el valor del contador actualizado dentro
// observa que esta nueva versión reemplazará por completo la versión anterior del estado, borrando cualquier otro dato que pueda haber en él
```

Los cambios de estado ocurren de manera asíncrona y la mutación directa del estado crea una oportunidad para que los valores se actualicen incorrectamente y causen inconsistencias de datos en su aplicación web.

### El constructor del componente

Como se mencionó anteriormente, el lugar para inicializar el estado de su componente es en el método constructor.

El constructor de cada componente se llama automáticamente muy temprano en la ejecución de la aplicación, incluso antes de que su sitio web se haya montado.

Si no necesitas usar el estado, no necesitas implementar explícitamente un método constructor y en algunos ejemplos, verá que este método falta. Sin embargo, si necesitaras usar el estado, es extremadamente importante inicializar tus valores, de lo contrario, en el primer render, tu aplicación devolverá tus variables de estado como ***undefined***.

También necesitarás implementar tu método constructor si usarás alguna propiedad, con el método `super(props)`. Eso le permite heredar de la superclase `React.Component` de la que todos los componentes de clase React son subclases.

```javascript
class ClockComponent extends React.Component {
  constructor(props){
    super(props);
     // aquí hay un gran lugar para definir el primer valor que tendrá el estado de tu componente
    this.state = {
    	currentTime: new Date()
    };
  }
}
```

Aquí hay una plantilla completa de componente de clase React como referencia:

```jsx

class Clock extends React.Component {
  // el método constructor estándar con props y this.state inicializado
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // un método de ciclo de vida de React
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
    
  // un método de ciclo de vida de React 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // un método personalizado creado por el desarrollador para cumplir un propósito
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // el método de renderizado estándar con el retorno del componente 
  render() {
    // aquí se puede insertar cualquier código JS que deba ejecutarse en cada renderizado y se usaría en el retorno a continuación, como variables o declaraciones dinámicas
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

```
> :point_up: Esto es un componente de clase. Recomendamos encarecidamente que use componentes funcionales y ganchos en su lugar porque los componentes de clase son legado.

## Características de los `componentes` funcionales

Los componentes funcionales son componentes de React simplificados originalmente destinados a fines presentacionales.
Por esa razón, tradicionalmente son **estáticos**: no tienen estado propio. Esto les permite ser más ligeros, más rápidos y más fáciles de escribir.

El estado estático de las funciones fue abordado con React 16.8.0, que introdujo los populares ganchos de React. Desde entonces, el gancho `useState` nos permite reproducir el comportamiento de estado en nuestros componentes funcionales:

#### Actualización del estado de un componente funcional

```jsx

//     elegir un nombre de variable.         valor inicial
//       ⬇                            ⬇
const [ error, setError ] = useState(null);
//               ⬆
//             elige el nombre del modificador


```
Por ejemplo, podemos elegir cualquier variable y modificador como este:

```jsx
const [ size, setSize ] = useState(2);
const [ color, setColor ] = useState("pink");
const [ anything, setAnything ] = useState(<any value>);
```

#### Uso de un componente basado en funciones (con hooks/ganchos)

<iframe
     src="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Current Time in React (hook-based)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/current-time-in-react-hook-based-dj7k9?fontsize=14&hidenavigation=1&theme=dark">Click here to open demo in a new window</a></small></div>

## ¿Pero espera, ¿debo usar Función o Clase?

Entonces, los Hooks de React cambiaron efectivamente la naturaleza de los componentes funcionales originales de React y ahora ambos tipos de componentes son muy similares en las cosas que pueden hacer.
Debido a eso, te recomendamos encarecidamente que uses funciones y ganchos tanto como sea posible.

+ Las funciones son súper simples.
+ El tamaño de tu paquete (todo tu sitio web) será más ligero y se descargará más rápido.
+ Eventualmente, las clases serán obsoletas.

¡Puedes cambiar de un tipo de declaración al otro sin ningún dolor! Aquí hay una comparación de ambos tipos de componentes:

### Simplicidad del componente

Como **Función** Declaración y uso muy simples. El único propósito de la función es devolver HTML con lo que este componente debe mostrar cuando se coloca en el sitio web.

Como **Clase** es más complejo; la declaración de la clase debe heredar de React.Component y contiene muchas más funcionalidades que permiten al desarrollador personalizar la lógica del componente como métodos de ciclo de vida y el estado. Tenga en cuenta que puede crear tantos métodos de clase adicionales como desee.

### Declaración del componente
```jsx
// usando funciones
function MyComponent(){
    return Hello;
}
// o usando funciones de flecha
const MyComponent = () => Hello;

// usando clases
import React from 'react';
class MyComponent extends React.Component{
    render(){
        return Hello;
    }
}
```

### Estado del componente

Como **Función**:

Cada variable debe declararse usando el Hook useState dentro de la función

Como **Clase**:

El estado debe declararse en el constructor y luego usar la función `this.setState` para actualizarlo.

```jsx
 MyComponent{
     constructor(){
        super();
        this.state = {
        foo: "var"
        }
      }  
 } 

jsx
class MyComponent{
    constructor(){
        //do something
    }
    componentDidMount(){
        //do something
    }
    render(){
        return Hello {this.props.name};
    }
}
```

### Propiedades del componente

Como **Función**:

Las propiedades se reciben como el primer parámetro de la función de esta manera:

```jsx
function MyComponent(props){
    return Hello {props.name};
}
```

Como **Clase**:

Las propiedades están dentro de la variable de clase `this.props`, y puedes hacer referencia a ella en cualquier lugar de esta manera:

```jsx
class MyComponent{
    render(){
        return Hello {this.props.name};
    }
}
```

### Métodos del ciclo de vida

Como **Función**:

Usa el gancho useEffect para el ciclo de vida. [Más información aquí](https://content.breatheco.de/lesson/react-hooks-explained).

Como **Clase**:

Tienes todos los métodos disponibles con estos siendo los más importantes: Constructor, ComponentDidMount (o useEffect para Hooks), ComponentWillUnmount (o useEffect para Hooks), etc.<br> <br> Puedes declarar dentro de tu clase de componente esos métodos y serán llamados mágicamente por React en el momento adecuado, así:

```jsx
class MyComponent{
    constructor(){
        super();
        this.state = { //inicializa tu estado }
        }
       componentDidMount(){  /* hacer algo al estado aquí */ }
      componentWillUnmount(){  /* el mejor lugar para eliminar oyentes */ }
      static getDerivedStateFromProps(nextProps, prevState){ /* devolver el estado actualizado */ } 
      //hay muchos más métodos de ciclo de vida
    }
```   

> :link: Here you can find [more information about all the React JS lifecycle methods.](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
