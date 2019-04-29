---
title: "Haciendo Componentes de React"
subtitle: "React.js bread and butter, become a master in React Components and you have conquered the front-end world of React."
cover: "https://ucarecdn.com/84c4d84c-51b9-4906-a572-71cc07ecfc8c/"
textColor: "white"
date: "2018-11-14"
tags: ["reactjs"]
---

## En React.js todo es un `<Component />`
***

React.js separa tu código en pequeñas partes llamadas Componentes que pueden crearse / definirse como **class** o como **function**.  Cada componente es como una aplicación de React más pequeña que tiene su propia lógica y tiene un propósito final que es mostrar (Render) algo (por ejemplo: una barra de navegación de bootstrap, una lista desplegable, un modelo, un formulario dinámico, galería de imágenes, formulario de suscripción, casi todo puede diseñarse y codificarse como un componente React).

```jsx{numberLines: true}
// como una function 
function NavBar(props){
    return (<nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
           </nav>);
}

//o como una class 
import React from 'react';
class Navbar extends React.Component{
    render(){
        return (<nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">Navbar</a>
           </nav>);
    }
}
```

## Usando un Componente
***


Una vez que la declaración del componente haya finalizado, puede hacer referencia a ella utilizando etiquetas como esta:

```jsx
import React from "react";
import { render } from "react-dom";

/// Aquí le dices a react que ponga <NavBar /> dentro del elemento DOM #myApp
render(
  <NavBar />,
  document.querySelector("#myApp")
);
```
## El Componente Props
***

A veces un componente necesita información dinámica para mostrar. Por ejemplo, necesitamos nuestro componente `<Navbar />` para mostrar la lista de enlaces disponibles y el logotipo de la marca. Podemos incluir esa información dentro de la llamada del componente `<Navbar />` de la misma manera que lo hacemos en las etiquetas HTML.

`<Navbar foo="bar" foo2="bar2" />`

En este ejemplo, estamos pasando una serie de elementos de menú y una URL de logotipo al componente NavBar que acabamos de declarar anteriormente.

```jsx
let menu = [
    {label: 'Home', url: '/home'}
    {label: 'Contact Us', url: '/contact-us'}
];
<Navbar items={menu} logo="http://path/to/logo.png" />
```

Ahora, dentro de `<Navbar />` podemos usar esos valores (que se entregan a través de la variable Props) para procesar la información proporcionada.

Y, por último, debe indicar a React dónde debe renderizar ese componente en el DOM.

<iframe src="https://codesandbox.io/embed/zwlnpwmxll?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/zwlnpwmxll?hidenavigation=1">Click here to open demo in a new window</a></small></div>

## El Estado del Componente
***

¿Pero qué pasa si mi componente cambia con el tiempo? Por ejemplo, un componente `<Reloj />` deberá actualizarse cada segundo y mostrar la hora actual. Para hacerlo, tenemos el estado y solo se puede utilizar en componentes que se han declarado como una clase.

### Que es this.**state**?

Es una variable de **class** (disponible en toda la clase que usa esto) que necesita declarar e inicializar dentro del método del constructor de clases. React.js volverá a representar el DOM completo cada vez que actualice esa variable en particular.

Sin embargo, hay una trampa. El estado no se puede cambiar, lo que significa que no se puede editar, por lo que debemos anularlo mediante la función *** this.setState () *** que recibe el nuevo objeto de estado (que reemplaza al anterior).

```jsx{numberLines: true}
// ¡INCORRECTO! Nunca actualizar el estado directamente 
this.state.foo = "bar";

//¡CORRECTO! Llame a la función this.setState () y pásele el nuevo estado.
const newState = {
    foo: "bar"
};
this.setState(newState);

// TAMBIÉN CORRECTO! Puedes hacerlo en línea
this.setState({
    foo: "bar"
});
```

Aquí hay un ejemplo del componente `<Clock />` del que acabamos de hablar:

<iframe src="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


<div align="right"><small><a href="https://codesandbox.io/embed/zw852wvqp4?autoresize=1&amp;hidenavigation=1">Click here to open demo in a new window</a></small></div>


## pero espera, deberia usar Function o Class?
***

¡Ambos! Depende de cuán complejo sea su componente:

+ Las funciones son super simples y pequeñas pero muy limitadas, trate de usarlas siempre a menos que esté obligado a usar una Clase.
+ Las clases son para componentes más grandes que requieren más lógica. Tienen un estado local (this.state) y métodos de ciclo de vida de componentes.
  
¡Pero no te preocupes! ¡Puedes cambiar de un tipo de declaración a la otra sin ningún problema! Aquí hay una comparación de ambos tipos de componentes:

|&nbsp; &nbsp;   |Como una **Function**     |Como una **Class**   |
|:---------|:--------:|:---------:|
|Sencillez      |Muy simple declaración y uso. El único propósito de la función es devolver un HTML con todo lo que este componente debe mostrar cuando se coloca en el sitio web.     |Más complejo - la declaración de clase debe heredarse de React.Component y contiene muchas más funcionalidades que le permiten al desarrollador personalizar la lógica de los componentes, como los métodos de ciclo de vida y el estado. Ten en cuenta que puedes crear tantos métodos de clase adicionales como desees.    |
|Declaración       |`python>// usando functions`<br>`python>function MyComponent(){`<br>&nbsp;&nbsp;`python>return Hello;`<br>`}`<br><br>`python>// o usando funciones de flecha` <br>`python>const MyComponent = () => Hello;`     |`python>// usando classes`<br>`python>import React from 'react';`<br>`python>class MyComponent extends React.Component{`<br> &nbsp; &nbsp;    `python>render(){`<br>  &nbsp; &nbsp; &nbsp;       `python>return Hello;`<br> &nbsp; &nbsp;   `python>}`<br>`python>}`         |
|Estado del Componente       |&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; **No state** <br> <br> Este es un componente sin estado en el que no tiene forma de usar un estado global; Este estado no está disponible.    |Tienes el estado disponible en cualquier momento usando this.state; debe inicializar el estado a algunos valores en el constructor de la clase.<br> <br> `python>class MyComponent{`<br>&nbsp; &nbsp;    `python>constructor(){`<br> &nbsp; &nbsp; &nbsp; &nbsp;`python> super();`<br> &nbsp; &nbsp; &nbsp; &nbsp; `python>python>this.state = {`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>foo: "var"`<br> &nbsp; &nbsp; &nbsp; &nbsp;` python>}`<br> &nbsp; &nbsp; `python>}`<br>`python>}`         |
|Propiedades del Component   |Las propiedades se reciben como el primer parámetro de la función como este:<br><br>`python>function MyComponent(props){`<br> &nbsp;  &nbsp; &nbsp; &nbsp; `python>return Hello {props.name};` <br> `python>}`       |Las propiedades están dentro de la variable de clase this.props, y puedes hacer referencia a ellas en cualquier lugar así:<br><br> `python>class MyComponent{`<br> &nbsp; &nbsp; &nbsp; `python>render(){`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>return Hello {this.props.name};`<br> &nbsp; &nbsp; &nbsp; `python>}`<br>`python>}`      |
|Metodos de ciclo de vida    |No hay métodos de ciclo de vida disponibles.     |Tiene todos los métodos disponibles, siendo estos los más importantes: Constructor, ComponentWillMount, ComponentWillUnmount, getDerivedStateFromProps, etc.<br> <br> Puedes declarar dentro de tu componente de clase esos métodos y mágicamente los llamará React en el momento adecuado, así:<br> <br> `python>class MyComponent{`<br> &nbsp; &nbsp; &nbsp; `python>constructor(){`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>super();`<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>//initialize your state` <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `python>this.state = {}`<br> &nbsp; &nbsp; &nbsp; `}`<br> &nbsp; &nbsp; &nbsp; `python>componentDidMount(){  //do something to the state here }` <br> &nbsp; &nbsp; &nbsp; `python>componentWillUnmount(){  //best place to remove listeners }` <br> &nbsp; &nbsp; &nbsp; `python>static getDerivedStateFromProps(nextProps, prevState){ //return the updated state } `<br> &nbsp; &nbsp; &nbsp; `python>//there are many more lifecycle methods` <br> `python>}`        |

[[info]]
|:link: Aquí puede encontrar [más información sobre todos los métodos de ciclo de vida de React JS.](https://reactjs.org/docs/react-component.html#the-component-lifecycle)


