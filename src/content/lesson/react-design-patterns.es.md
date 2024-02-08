## ¿Que son patrones de diseño?

La programación se trata de escribir instrucciones para ser interpretadas por una maquina, lo que nos lleva en muchos casos a que existan muchas formas de solucionar un mismo problema. Aun asi hay asuntos comunes que se deben considerar a la hora de hacer crecer un sistema o lograr que tenga un buen desempeño si tiene una gran concurrencia, ahi los patrones de diseño nos ayudan a dar solución a estos escenarios.

> Los patrones de diseño son estrategias para solucionar problemas comunes en la programación. Algunos solucionan problemas de reutilización de código, otros problemas de escalabilidad o eficiencia. No se trata de librerías o frameworks específicos, son mas bien formas de utilizar las herramientas que te ofrece una determinada tecnología, para evitar problemas que ya son bien conocidos y cuyas soluciones ya han sido probadas.

Los planteamientos de los patrones de diseño se hacen de forma genérica, de manera que puedan ser implementados en contextos específicos con sus propias particularidades. En éste articulo vamos a ver algunos patrones utilizados en React y que sirven para hacer nuestra aplicación mas escalable y eficiente.

## Patrón proveedor (Provider)

Este patrón se popularizo en la comunidad de React desde que se introdujo la api de contexto (Context API), se trata de básicamente de crear un componente que **provee** de un estado a todos los componentes en su interior. Tratándose de aplicaciones que se forman en base a componentes, se pueden crear varias capas de proveedores (cada una dentro de otra) que provean de varios contextos a tu aplicación.

![Las apps de react son como cebollas](https://breathecode.herokuapp.com/v1/media/file/apps-de-react-son-como-cebollas "Las apps de react son como cebollas").

Algunas librerías implementan este patrón por defecto, como por ejemplo React Router que envuelve toda la aplicación en un componente `<BrowserRouter>` y luego te permite crear layouts con rutas dinámicas con el componente `<Routes>`, creando asi varias capas de proveedores. Si quieres saber más de como usar React Router puedes visitar [éste artículo](https://4geeks.com/es/lesson/routing-our-views-with-react-router-es).
[this article](https://4geeks.com/lesson/routing-our-views-with-react-router).

Claro que también puedes crear tus propios contextos con lo que necesites, por ejemplo puedes crear un contexto que sirva para cambiar el diseño de tu aplicación de un modo claro a un modo oscuro, veamos como hacerlo:

```react
// ThemeProvider.jsx
import React, { createContext, useContext, useState } from "react";

// Crearemos nuestro contexto y creamos la instancia que se va a exportar
const ThemeContext = createContext();
function useTheme() {
  return useContext(ThemeContext);
}
export default useTheme;

// Se crea el proveedor para envolver nuestra app, 
// usando como valor un estado para el tema 
// y una función que alterna entre claro y oscuro.
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

Luego de esto solo queda envolver nuestra aplicación en el proveedor y empezar a usar el contexto en nuestros componentes.

```react
// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* El proveedor se usa para envolver el componente raíz de la app */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
```

```react
// App.jsx
import "./App.css";
// Importamos el contexto de nuestro tema
import useTheme from "./ThemeProvider";

export default function App() {
  // Accedemos al estado del tema y la función que lo cambia
  const { theme, changeTheme } = useTheme();
  return (
    <main className={theme}>
      <h2>Theme {theme}</h2>
      <button onClick={changeTheme}>Change theme</button>
    </main>
  );
}
```

Puedes ver otros usos de la api de contexto en [ésta lección](https://4geeks.com/lesson/context-api). Aquí podemos ver el resultado final en funcionamiento:
<iframe src="https://replit.com/@4GeeksAcademy/Demo-Context-API?embed=true&run=true#src/index.jsx"></iframe>

## Componentes de orden superior (Higher order components - HOC)

Este patrón plantea la creación de componentes que estén diseñados para contener en su interior a otro componente, al mismo tiempo que le agrega funcionalidades. Este componente contenedor, llamado de orden superior, tiene que contemplar funcionalidades comunes que puedan ser requeridas por los demás componentes que serán envueltos con él.

En este ejemplo tenemos un componente de tarjeta (Card) de bootstrap que tiene una funcionalidad básica, pero que implementa el patrón HOC para que recibir otros componentes como cuerpo de dicha tarjeta. Esto permite tener componentes de tarjeta similares, que comparten funcionalidades comunes, pero que tienen una estructura propia para el contenido.

```react
// Card.jsx
export default function wrapCard(BodyComponent) {
  const CardWrapper = (props) => {
    // Esta función será utilizada por todos los componentes envueltos en este
    const saveClick = () => {
      console.log("Saved props: " + JSON.stringify(props));
    };
    return (
      <>
        <div className="card">
          <div className="card-header">
            <ul className="nav">
                {/* Barra de herramienta para las tarjetas*/}
            </ul>
          </div>
          {/* Aquí se coloca el componente del cuerpo de la tarjeta*/}
          <BodyComponent {...props} />
        </div>
      </>
    );
  };
  return CardWrapper;
}
```

A la hora de crear el componente para el cuerpo se debe exportar llamando a la función que lo va a envolver en el componente de nivel superior.

```react
// Character.jsx
import wrapCard from "./Card";

const CharacterCard = ({ character }) => {
  return (
    <>
      <div className="card-header">
        {/* Encabezado de la tarjeta */}        
      </div>
      <div className="card-body">
        {/* Cuerpo de la tarjeta */}
      </div>
    </>
  );
};
// Se exporta envuelto en el componente de nivel superior
export default wrapCard(CharacterCard);
```

Así como este componente pueden crearse todos los que sean necesarios utilizando el patrón HOC para que todos compartan funcionalidades y estilos. Aquí tienes un ejemplo implementando esta tarjeta:

<iframe src="https://replit.com/@4GeeksAcademy/Higher-Order-Component?embed=true&theme=dark#src/Card.jsx"></iframe>

## Patrón de componentes compuestos (Compound components)

Este patrón plantea la integración de componentes que están hechos para trabajar juntos o muy integrados. Para ello el componente principal crea un contexto y lo expone a los componentes hijos que deben ir dentro, lo que les permite compartir datos y funciones dentro del conjunto. Una librería que implementa este patrón es **React Bootstrap**, que implementa sus formularios como un componente que debe estar integrado por otros subcomponentes para los controles, permitiéndole integrar funciones como la validación de manera conjunta.

Si bien los componentes hijos se declaran como cualquier otro componente, se suelen exportar como miembros del componente principal, para que en implementación sea mas notoria su integración.

```react
// Contexto para el conjunto de componentes
const SelectContext = createContext();

// Componente principal
const Select = (props) => {...};

// Componente hijo
const Option = (props) => {...};

// Se agrega al componente principal una propiedad que contiene al hijo
Select.Option = Option;

export default Select;
```

 Para el ejemplo crearemos un selector de opciones para un formulario. El componente padre será `<Select>` y es el que va a crear el contexto para exponer los datos y la lógica que necesita el conjunto.

```react
const Select = ({ children, onUpdateSelected, name }) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    // Cuando hay un cambio en las opciones ejecuta la función parámetro
    // Esto permite a otros componentes acceder a las opciones
    onUpdateSelected(selected);
  }, [selected]);

  function checkOption(option) {
    // Busca la opción que ha sido clickeada
    let index = selected.findIndex((opt) => option === opt);
    if (index == -1) {
      // Si no existe, la agrega al final
      setSelected([...selected, option]);
    } else {
      // Si ya existe, la elimina
      let newSelected = [...selected];
      newSelected.splice(index, 1);
      setSelected(newSelected);
    }
  }

  return (
    <SelectContext.Provider value={{ checkOption, name }}>
      <fieldset>{children}</fieldset>
    </SelectContext.Provider>
  );
};
```

El componente hijo `<Select.Option>` va a necesitar la función 'checkOption' y la propiedad 'name' para los inputs, por lo que no podrá funcionar fuera del contexto donde estén estos elementos. Adicionalmente también se suelen colocar validaciones que impiden que los componentes hijos se usen fuera del contexto debido.

```react
// Componente option
const Option = ({ value, children }) => {
  const { checkOption, name } = useContext(SelectContext);
  if (!checkOption) {
    throw new Error(
      "Missing 'checkOption' context. Option must be wrapped in a Select component",
    );
  }
  if (!name) {
    throw new Error(
      "Missing 'name' context. Option must be wrapped in a Select component",
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => checkOption(value)}
        name={name}
        value={value}
      />
      <label>{children}</label>
    </div>
  );
};
```

En esta demostración podemos ver la implementación final de nuestro selector utilizando el patron de componentes compuestos:

<iframe src="https://replit.com/@4GeeksAcademy/Compound-component-demo?embed=true#src/App.jsx"></iframe>

## Conclusión

Como hemos visto los patrones nos ofrecen soluciones a problemas típicos que nos encontramos en el desarrollo de un software. No son mas que una manera ingeniosa de utilizar las herramientas que ya tenemos con React, para que faciliten determinada función.

No podemos decir que uno sea mejor que otro, solo que cada uno sirve para casos específicos o se adaptan mejor a determinada situación. Tampoco es obligatorio su uso, mas bien es bueno implementarlos en casos donde se necesite escalar en la complejidad, pero para casos muy sencillos puede llegar a ser excesivos. Ahora que conoces estos patrones, piensa en qué proyectos los puedes aprovechar.