---
title: "Qué son las entradas controladas o no controladas en React.js"
subtitle: "Hacer formularios en React.js es algo que puede resultar un tanto engorroso"
cover_local: "../../assets/images/e16d59ad-4c11-4ca0-8bfc-5a9d147c6c2e.jpeg"
textColor: "white"
status: "published"
date: "2020-10-19T16:36:30+00:00"
tags: ["react-js"]
canonical: ""

---

Esta lección habla un poco más sobre **cómo trabajar con entradas en react** que sobre **qué es una entrada controlada**. Es mejor explicar las razones por las que las necesitamos y por qué las **entradas controladas** se consideran el mejor enfoque en las aplicaciones React.js.


## Entradas en Javascript Vanilla.js simple

Si quieres recuperar un valor de una entrada en JavaScript / HTML simple, puede hacer algo como esto:

```jsx

// Suponiendo que tienes esta entrada con un ID=first_name:
<input type="text" id="first_name" /> 

// En javascript puedes usar:
const value = document.querySelector('#first_name').value;
```
Pero con React la solución no es tan simple; la única forma de mantener los datos que pueden cambiar con el tiempo dentro de los componentes de React es usando el famoso `state` o "estado".

## ¿Qué es una entrada controlada?

Una entrada controlada es solo otra entrada con la diferencia de que su valor está sincronizado con el estado de un componente, algo como esto:

```jsx
const AnyComponent = () => {
    const [inputValue, setInputValue ] = useState('');
    
    return <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
}
```

Cuando usas la propiedad de entrada `onChange` junto con la propiedad` value`, básicamente estás forzando el valor de la entrada a estar completamente sincronizado por dos vías con la variable `inputValue` de estado hooked. 


1. Si se llamas a la función onChange => se actualizará inputValue.
2. Si la variable `inputValue` se actualiza => la entrada también cambiará su valor.

## ¿Por qué utilizar entradas controladas?

Una entrada controlada no es la única forma de acceder y/o actualizar el valor de una entrada, también puedes usar el hook `useRef` e intentar manipular la entrada de la manera tradicional, usando el DOM, pero a largo plazo, terminará siendo más complicado y más difícil de mantener que las entradas controladas.

Además, una entrada controlada te brinda muchos beneficios adicionales como acceso inmediato al valor de entrada para validaciones, una actualización instantánea de la entrada, etc.

## Validando entradas en React con entradas controladas

Una vez que tu entrada controlada está lista, las validaciones son simples porque ahora tienes la variable `inputValue` a su disposición; por ejemplo, si deseas validar que la entrada no está vacía cuando se hace clic en un botón, puedes hacer algo como esto:


```jsx
const AnyComponent = () => {
    const [inputValue, setInputValue ] = useState('');
    
    const validateInput = () => {
      if(inputValue === "") alert("The input cannot be empty"));
    }
    return <div>
        <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
        <button onClick={validateInput}
    </div>;
}
```

Puedes ver un ejemplo en vivo aquí:

<iframe width="100%" height="300" src="//jsfiddle.net/BreatheCode/yjcwozed/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

[Clic para agrandar∫](https://jsfiddle.net/BreatheCode/yjcwozed/)
