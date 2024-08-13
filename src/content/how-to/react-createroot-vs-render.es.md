---
subject: "Acerca de la función ReactDOM.createRoot vs ReactDOM.render"
description: "Descubre los beneficios de usar la función createRoot de React, introducida en React v18, mientras exploramos su papel en reemplazar ReactDOM.render"
tags: ["react", "javascript"]
authors: ["alesanchezr"]

---

El método React.createRoot debería ser la primera función llamada en tu aplicación de React. Reemplaza el método anterior ReactDOM.render (desde React v18) y tiene varias mejoras que ayudan a hacer tu aplicación más eficiente y responsiva.

Aquí está la aplicación React JS más pequeña posible y cómo debes usar la función **createRoot** para comenzar a usar React:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// Define un componente simple que será toda tu aplicación React.js (por ahora)
const App = () => {
  return (
    <div>¡Hola, Mundo!</div>
  );
};

// Crea un contenedor raíz y renderiza el componente
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## createRoot es lo que conecta React al DOM tradicional de JS

Todo React.js es solo un truco mágico para facilitar la vida del desarrollador, en realidad, la única forma de hacer sitios web dinámicos con javascript es usando [el DOM (modelo de objeto de documento)](https://4geeks.com/es/lesson/que-es-el-dom-document-object-model), y es realmente molesto de usar.

React todavía tiene que conectarse al DOM antes de poder comenzar a hacer su trabajo, el método `ReactDOM.createRoot` fue creado justamente para eso; vincula tu primer componente de react (generalmente llamado `<App>`) a tu primera etiqueta div de HTML (generalmente con el id `root`).

Necesitas un sitio web HTML tradicional y casi vacío con al menos una etiqueta `<div>` con el ID `root` como este:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>La Aplicación React Más Pequeña</title>
</head>
<body>
  <div id="root"></div>
  <script src="index.js"></script>
</body>
</html>
```

Y luego puedes llamar a la función ReactDOM.createRoot usando javascript de esta manera:

```jsx
// Crea un contenedor raíz y renderiza el componente
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

> Observa cómo el componente `<App />` se referencia como el primer componente React.js de esta aplicación.

## Olvídate del DOM para siempre

Después de llamar a la función `createRoot`, no tienes que preocuparte por [el DOM](https://4geeks.com/technology/the-dom) nunca más, puedes crear tantos componentes react js como necesites y referenciarlos dentro del código, por ejemplo:

```jsx
// Este componente es usado por App
const Card = () => {
  return (
    <div>Soy una tarjeta</div>
  );
};

// Tu componente principal App utiliza otro componente Card
const App = () => {
  return (
    <div>¡Hola, Mundo!</div>
    <div>Aquí están los coches: <Card /></div>
  );
};

// Crea un contenedor raíz y renderiza el componente
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## `ReactDOM.render` ya no se usa

En versiones anteriores de react usábamos `ReactDOM.render` en lugar de `ReactDOM.createRoot`, pero esa función está obsoleta y ya no se recomienda más. El cambio se realizó desde React v18 porque la nueva función tiene un rendimiento mucho mejor y muchas otras ventajas como:

- **Mejor gestión de recursos**: Ayuda a React a gestionar los recursos del sistema de manera más eficiente, asegurando que las actualizaciones de tu aplicación se manejen de una manera que optimice el rendimiento y la responsividad.
- **Mejora de la experiencia del usuario**: El método permite a React gestionar mejor cómo y cuándo se muestran las actualizaciones al usuario, lo que resulta en una experiencia más fluida y sin interrupciones.
- **Flexibilidad para los desarrolladores**: Los desarrolladores ahora pueden definir qué actualizaciones son urgentes y cuáles pueden diferirse, brindando más control sobre el proceso de renderizado.

### `ReactDOM.render` vs `ReactDOM.createRoot`

Si queremos ponernos técnicos, lo que hace `createRoot` una función mejor es su capacidad de realizar renderizado concurrente: El renderizado concurrente permite a React trabajar en múltiples tareas simultáneamente. Puede comenzar a renderizar una actualización, pausarla si surge algo más urgente (como entrada del usuario), y luego continuar el proceso de renderizado más tarde. Este comportamiento no bloqueante ayuda a mantener la interfaz de usuario responsiva.
