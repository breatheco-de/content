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
***

React.js separa tu código en pequeñas partes llamadas Componentes que pueden crearse / definirse como **class** o como **function**.  Cada componente es como una aplicación de React más pequeña que tiene su propia lógica y tiene un propósito final que es renderizar algo. Por ejemplo: un `navbar` de bootstrap, una _dropdown list_ (lista desplegable), un modelo, un formulario dinámico, galería de imágenes, formulario de suscripción, casi todo puede diseñarse y codificarse como un componente React). Para hacer eso, el componente de React debe tener un `return` que devuelva código JSX (HTML + JS anidado).

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
[[warning]
| :point_up: Este es un componente de clase. Te recomendamos que uses componentes funcionales y hooks en su lugar ya que los componentes de clase están considerados como legacy (deprecados).


## Usando un Componente

Una vez que hayas creado tu componente puedes mostrarlos usando etiquetas de esta forma:

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

## Las Props
***

A veces un componente necesita información dinámica para mostrar. Por ejemplo, necesitamos nuestro componente `<Navbar />` para mostrar la lista de enlaces disponibles y el logo de la marca. Podemos incluir esa información dentro de la llamada del componente `<Navbar />` de la misma manera que lo hacemos en las etiquetas HTML.

`<Navbar foo="bar" foo2="bar2" />`

En este ejemplo, estamos pasando un array de elementos de menú y una URL con el  logo al componente NavBar que acabamos de declarar anteriormente.

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


### Características de los componentes de clases (`class` components)



## El Estado del Componente
***

¿Pero qué pasa si mi componente cambia con el tiempo? Por ejemplo, un componente `<Reloj />` deberá actualizarse cada segundo y mostrar la hora actual. Para hacerlo, tenemos el estado y solo se puede utilizar en componentes que se han declarado como una clase.

### Que es this.**state**?

Es una variable de **class** (disponible en toda la clase que usa esto) que necesita declarar e inicializar dentro del método del constructor de clases. React.js volverá a representar el DOM completo cada vez que actualice esa variable en particular.

Sin embargo, hay una trampa. El estado no se puede cambiar, lo que significa que no se puede editar, por lo que debemos anularlo mediante la función *** this.setState () *** que recibe el nuevo objeto de estado (que reemplaza al anterior).

```jsx
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

[[warning]]
| :point_up:Este es un componente de clase. Te recomendamos que uses componentes funcionales y hooks en su lugar ya que lo componentes de clase están considerados como legacy(deprecados).


## pero espera, deberia usar Function o Class?
***

¡Ambos! Depende de cuán complejo sea su componente:

+ Las funciones son super simples y pequeñas pero muy limitadas, trate de usarlas siempre a menos que esté obligado a usar una Clase.
+ Las clases son para componentes más grandes que requieren más lógica. Tienen un estado local (this.state) y métodos de ciclo de vida de componentes.
  
¡Pero no te preocupes! ¡Puedes cambiar de un tipo de declaración a la otra sin ningún problema! Aquí hay una comparación de ambos tipos de componentes:

+ Componente Sencillez   

Como una **Función**:

Muy simple declaración y uso. El único propósito de la función es devolver un HTML con todo lo que este componente debe mostrar cuando se coloca en el sitio web.     

Como una **Clase**   

Más complejo - la declaración de clase debe heredarse de React.Component y contiene muchas más funcionalidades que le permiten al desarrollador personalizar la lógica de los componentes, como los métodos de ciclo de vida y el estado. Ten en cuenta que puedes crear tantos métodos de clase adicionales como desees.  

+ Componente declaración     

Como una **Función**

```jsx
// usando funciones
function MyComponent(){
    return Hello;
}

// o usando funciones de flecha
const MyComponent = () => Hello;
```  
  
Como una **Clase**:

```jsx
// usando clases
import React from 'react';
class MyComponent extends React.Component{
   render(){
     return Hello;
    }
} 
```

+ Estado del Componente  

Como una **Función**:

 **No tiene estado**. Este es un componente sin estado en el que no tiene forma de usar un estado global; Este estado no está disponible.    

Como una **Clase**:

Tienes el estado disponible en cualquier momento usando this.state; debe inicializar el estado a algunos valores en el constructor de la clase.

```jsx

class MyComponent{ 
    constructor(){
        super();
        this.state = {
            foo: "var"
            }
         }
    }
```       

+ Propiedades del Componente   

Como una **Función**     

Las propiedades se reciben como la primer parámetro de la función:
 
<br><br>`python>function MyComponent(props){`<br> &nbsp;  &nbsp; &nbsp; &nbsp; `python>return Hello {props.name};` <br> `python>}`     

Como una **Clase**   

Las propiedades están dentro de la variable de clase this.props, y puedes hacer referencia a ellas en cualquier lugar así:

```jsx
class MyComponent{
    render(){
        return Hello {this.props.name};
        }
    }
```           

+ Métodos de ciclo de vida    

Como una **Función**:     

No hay métodos de ciclo de vida disponibles.

Como una **Clase**:   

Tiene todos los métodos disponibles, siendo estos los más importantes: Constructor, ComponentWillMount, ComponentWillUnmount, getDerivedStateFromProps, etc. Puedes declarar dentro de tu componente de clase esos métodos y mágicamente los llamará React en el momento adecuado, así:

```jsx
class MyComponent {
    constructor() {
        super();
        this.state = { /* inicializa tu estado */ } 
        }
        componentDidMount(){  /* haz algo con tu estado aquí */ }
        componentWillUnmount(){  /* mejor lugar para eliminar listeners */ }
        static getDerivedStateFromProps(nextProps, prevState){ /* devuelve (return) el estado actualizado */ } 
        //hay muchos más métodos lifecycle 
    }
```        

[[info]]

|:link: Aquí puedes encontrar [más información sobre todos los métodos de ciclo de vida de React JS.](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

[[warning]]
| :point_up:Este es un componente de clase. Te recomendamos que uses componentes funcionales y hooks en su lugar ya que lo componentes de clase están considerados como legacy(deprecados).

