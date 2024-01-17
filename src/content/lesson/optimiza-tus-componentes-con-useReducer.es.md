---
title: "Optimizando tus componentes con useReducer"
subtitle: "Los componentes REACT son faciles de optimizar cuando esto se hace necesario. Para ello contamos con el hook useReducer, que permite encapsular no solo el estado de un componente, sino tambien la lógica que lo acompaña. A continuacion verem..."
cover: "https://www.desktopbackground.org/p/2013/09/13/637935_nasa-wallpapers_1600x1200_h.jpg"
textColor: "white"
date: "2024-01-16T16:45:31-04:00"
tags: ["react","componentes","usereducer"]
status: "draft"

---

## Los componentes y su lógica

Estamos acostumbrados a percibir los componentes como la unidad que agrupa la vista y la lógica para su funcionamiento, hasta ahi todo bien. Pero ¿Qué pasa si necesitamos reutilizar solo la lógica en otros componentes? Podriamos hablar de estados centralizados, pero ¿ Qué pasa si solo quiero reutilizar la logica y que cada componente tenga un estado propio? La solucion arcaica seria copiar y pegar, o exportar las funciones desde un archivo aparte y buscar alguna intrincada manera de hacerlas trabajar con el estado de cada componente 😰. Eso no suena divertido...

La solucion a este problema es `useReducer`, que como dice su nombre, **reduce** un estado y su logica a una unidad reutilizable, permitiendo que esta se pueda exportar desde un archivo a los componentes que lo necesiten 💪.

## Encapsulando con useReducer

El hook `useReducer` recibe como parámetro una funcion que define el `reducer`, y va a retornar una tupla que permite acceder al nuevo estado y despachar las acciones que van a ejecutar la respectiva lógica.

```javascript
  const [state, dispatch] = useReducer(counterReducer, counterReducer());
```

Esta funcion reducer se va a ejecutar en cada llamado de accion y deberá retornar una nueva version del estado que reemplaza por completo la anterior, por lo que hay que ser cuidadoso y solo alterar lo que necesitamos y retornar siempre los demas valores del estado utilizando la desesctructuracion 🤓.

👍**SI**

```javascript
return { ...state, counter: state.counter + 1 }
```

🚫**NO**   
```javascript
return { counter: state.counter + 1 }
```

## Migrando de useState a useReducer




## Comparemos ambos casos

<iframe src="https://codesandbox.io/embed/t34ldl?view=Editor+%2B+Preview&module=%2Fsrc%2Freducercounter.js&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useReducer Demo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

   <iframe width="100%" height="300" src="https://codesandbox.io/embed/t34ldl?view=Editor+%2B+Preview&module=%2Fsrc%2Freducercounter.js&hidenavigation=1" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>