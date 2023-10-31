---
title: "Enrutando nuestras vistas con React Router"
subtitle: "Crea la estructura de tu aplicación y conecta tus vistas con React Router"
cover_local: "../../assets/images/8c053abc-2f09-47e9-b586-751538d180c4.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["reactjs","react router"]
status: "published"

---

## ¿Qué es React Router?

React Router, una librería JS disponible a través de NPM que ayuda principalmente con 2 problemas:

+ Visualización condicional para los componentes React basados en la URL del sitio web actual.
+ Navegación de aplicaciones web sin necesidad de actualizar.

El siguiente comando de terminal te permite instalar React Router en tu proyecto:

```bash
$ npm install --save react-router
```

## ¿Por qué necesito esto?

Deja de leer si no estás creando aplicaciones completas usando React, no necesitas React-Router para aplicaciones de una sola página o componentes pequeños.

Para el resto de nosotros que creamos aplicaciones web reales, necesitamos conectar varias vistas (componentes React) en una sola aplicación grande. Ese proceso se llama  "routing" (enrutamiento).

Por ejemplo, necesitamos las siguientes URL de aplicación para que coincidan con los siguientes componentes:

![react router](https://github.com/breatheco-de/content/blob/master/src/assets/images/6fd2b44b-598b-4ddb-85ba-9c32b086127f.png?raw=true)

## Definiendo tus Rutas de Aplicación

¿Qué páginas/vistas quieres que tenga tu aplicación? Siempre puedes empezar con lo básico:

+ Home: Lo que sus usuarios públicos ven cuando llegan a tudominio.com
+ Login/Signup/Forgot: Un formulario de inicio de sesión y un formulario de registro y el formulario de recordatorio de contraseña.
+ Private: Lo que sus usuarios privados ven justo después de iniciar sesión.

El resto de las páginas dependen de tu aplicación y de cómo quieres que los usuarios naveguen por tu sitio.

![react router](https://github.com/breatheco-de/content/blob/master/src/assets/images/205cd2de-dfae-4712-a5e4-1c922994e60d.png?raw=true)

## Mapeando tus Vistas a URLs

Este es el mapa del sitio para cualquier sitio web de comercio electrónico típico:

![react router](https://github.com/breatheco-de/content/blob/master/src/assets/images/9021be43-57ae-4667-8c1a-435b8521ce59.png?raw=true)

## Codificando tus Rutas de Aplicación

Una vez que hayas terminado de asignar las vistas de la aplicación con las URL, puedes comenzar a programar todo, ¡y aquí es cuando entra en juego React-Router!

La mejor práctica es siempre crear un componente llamado `<Layout />` que se encargue de encaminar al usuario a las vistas específicas que debería ver, dependiendo de cada URL en particular.

Este es un ejemplo del mismo mapa del sitio de comercio electrónico pero ahora utilizando React Router v6:

```jsx
//este componente Layout se encargará de enrutar las URL con todas las vistas de mi aplicación

export const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Demo />} path="/demo" />
                    <Route element={<Single />} path="/single/:theid" />
                    <Route element={<h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
```

Hay 3 componentes que entender aquí:

+ `<BrowserRouter>` : Cada vez que abres una nueva etiqueta de BrowserRouter, básicamente le estás diciendo a React que todo lo que está en el medio debe ser condicionalmente renderizado en base a `<Routes>` particulares (URLs).
+ `<Routes>` : Funciona de manera similar a la instrucción `switch` en Javascript pero para Rutas... Le dice a React que muestre la única `<Route>` que coincide con la URL mostrada.
+ `<Route>` : Es la forma en que React-Router mapea rutas con componentes, por ejemplo:

```jsx
<Route path="/sign-up" element={<Signup />} />
```

Esta ruta le dice a React que: cuando la URL coincida con "sign-up", debería mostrarse el componente Signup.

## Las anclas `<a>` ahora son un problema

Los anclajes llevan a los usuarios a otros sitios web o URL, y eso es sorprendente para un HTML + JS básico, pero ahora NO queremos que nuestros usuarios sean llevados a otros sitios web o URL. Queremos que permanezcan en la misma pestaña pero cargando la página siguiente sin tener que actualizar. Tenemos dos formas posibles de hacer eso:

### 1. Usando una etiqueta `<Link>`:

React Router creó un componente que podemos usar en lugar de `<a>`:

```jsx
<Link to="/login">Take me to login</Link>
```

### 2. Usando history.push(‘new/url/here’):

React Router siempre pasa una prop (propiedad) a cada vista un elemento llamado "history" que contiene mucha información útil para usar cuando se enruta a los usuarios. Una de las muchas utilidades es la función "push" que básicamente redirige al usuario a la ruta dada.
    
Puedes acceder al objeto de history usando el hook de react `useNavigate` de esta manera:

```js
import { useNavigate } from "react-router-dom";

// dentro del componente declaras navegar de esta manera:
const navigate = useNavigate();
```

Luego, en cualquier parte de cualquiera de tus componentes, puedes redireccionar a los usuarios de forma programática de la siguiente manera:

```jsx
<button onClick={() => navigate.push("/login")}>Take me to login</button>
```

## Ejemplo en Vivo:

Aquí hay un ejemplo en vivo que utiliza todo lo que hemos aprendido durante esta lectura, haz clic y juega para entenderlo, aprenderlo y repetirlo:

<iframe src="https://codesandbox.io/embed/infallible-glitter-soi3js?autoresize=1&module=%2Fsrc%2FLayout.jsx&moduleview=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

<div align="right"><small><a href="https://codesandbox.io/embed/infallible-glitter-soi3js?autoresize=1&module=%2Fsrc%2FLayout.jsx&moduleview=1">Haz clic aquí para abrir el demo en una nueva ventana</a></small></div>
