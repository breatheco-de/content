---
title: "¿Qué es Typescript? Aprenderás a Programar usando este superSet de javascript"
subtitle: "Ya sabes JavaScript, ya es hora que aprendas a programar utilizando TypesCript para llevar tus desarrollos javascript al siguiente nivel."
cover_local: "../../assets/images/typescript.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["typescript"]
status: "draft"

---

Javascript es un lenguaje que tiene un tipado débil, esto quiere decir que las variables son declaradas sin un tipo y dependiendo del valor que se asigne es el tipo de dato que asume la variable. Por ejemplo, ponertelo más claro, no tienes que decir si la variable `let nombre` va a contener un string o un entero dentro, no hay nadie que te diga que no puedes llenar la variable nombre con el numero dos `let nombre = 2`. Con lenguajes de tipado débil como JS or Python podemos modificar, operar y comparar los los valores entre ellos sin que tengamos que hacer una conversión previa o sin que nadie nos prevenga de hacerlo. 

En el siguiente ejemplo podemos ver como cambiamos el tipo de datos sin algún tipo de conversión:

```javascript

let name = "Aprendiendo Javascript"
console.log(typeof name)
// "string"

name = 33
console.log(typeof name)
// "number"
```
Nota: en un lenguaje como C# or C++ esto seria imposible, si declaras una variable `name` y dices que va a ser un string, siempre debera contener strings en el futuro, de lo contrario recibirás un error de compilación.

## ¿Qué es typeScript?

Typescript es una nueva syntaxis extendida para JS que agrega reglas y nuevas formas de hacer las cosas, basicamente Typescript convierte a Javascript en un nuevo lenguaje de programacion un poco más riguroso pero con altos beneficios, esto es conocido como un superset.   Un superset se escribe tomando como base otro lenguaje de programación aplicando mejoras en el lenguaje original.   Por esta razón Typescript se escribió sobre javascript para agregar nuevas funcionalidades que veres más adelante.

Typescript es la solución a muchos de los problemas de JavaScript, está pensado para el desarrollo de aplicaciones grandes y robustas, importanto muchas funcionalidades de otros lenguajes mas maduros como Java, C#, etc. Las nuevas caracteristias de Typescript nos permiten desarrollar herramientas con menos bugs y errores ya que esta enfocado en la prevención y mantenimiento.


## Tipado estático

El tipado estático define que:

- Las variables tienen un solo tipo de datos

- Los valores asignados a las variables deben tener el mismo tipo que la variable.


En el siguiente ejemplo se está declarando la variable `message` del tipo `string`. El valor que asignaremos a nuestra variable debe ser del mismo tipo, por esta razón se asigna el string `Conociendo TypeScript`

```javascript
let message: string = 'Conociendo TypeScript'; //esta variable siempre debera ser un string.
```


## Tipos de Datos en TypeScript
***
Las variables pueden tener diferentes tipos de valores, a continuación detallaremos como podemos definir cada tipo usando TypesCript:


- **Boolean**:  Solo acepta valores: Verdadero o Falso
```
let isExist:boolean =  true
```  


- **String**:  Cualquier serie de caracteres
```
let message:string = "Conociendo TypeScript"
```


- **Number**: Solo acepta números
```
let age:number = 33
```


- **null**: Acepta valores indefinidos o vacíos
```
let isNotExist:null = null
```


- **Array**: Una lista con un tipo de dato.
```
let arrayNumber:Array<number> = [1, 2, 3, 4]
let arrayNumber:Array<string> = ["uno", "dos", "tres", "cuatro"]
```


- **Tuplas**: Acepta una lista con tipos de datos predefinidos.
```
let arraytupla: = [number, string, number]
arraytupla = [23, 'Hello World', true]
```


- **Void**: Se utiliza para indicar que no tenemos un tipo de datos definido
```
let notDataType:void = undefined
```


- **Enum**: Permite definir posibles valores que pueden ser asignados a la variable
```
enum Animals {cat, lion, dog, cow, monkey}
let c: Animals = Animals.cat;
```


- **Any**: Se utiliza cuando el tipo de datos puede ser cualquiera de los anteriores
```
let wherever: any = 14;
wherever = "people";
```


### Clases

Así como en cualquier otro lenguaje de programación orientado a objetos, en TypeScript las clases tienen campos, constructores, propiedades y funciones. Las clases actúan como contenedores que encapsulan código para ser consumidos de una manera más fácil.

Al definir una clase utilizamos la palabra `class` y cerramos con llaves `{}`, así como en c# y java por ejemplo y luego definimos adentro nuestros campos, constructores, propiedades y funciones.

```javascript

class User {
    # fields
    private name: string;
    private lastName: string;
    
    # Constructor
    constructor(name: string, lastName: string){
        this.name = name;
        this.lastName = lastName;
    }

    # Properties
    get getName(): string {
        return this.name;
    }

    set setName(value : string): string {
        if(value === undefined) throw 'Ingrese un valor válido';
        this.name = value;
    }

    #Functions
    fullName(){
        return this.name + ' ' + this.lastName
    }
}

const newUser = new User('Juanin','JanJarri');
console.log('El nuevo usuario es:', newUser.fullName())

```
En el ejemplo anterior se define un método `constructor()` que recibe los parámetros `name: String, lastName: String`, estos parámetros son asignados a los valores internos de la clase utilizando el método `this` para referenciarlos.

Además las `Properties` nos permiten obtener y asignar datos de variables o métodos internas de la clase.   En el ejemplo el método `setName()` permite asignar el valor recibido como parámetro a la propiedad interna llamada `name`.   El método `getName()` permite obtener el valor de la propiedad interna 'name'

Las `Functions` nos permiten ejecutar funciones o métodos internos de las clase, en el ejemplo el metódo `fullName()` devuelve la unión de las propiedades internas `name` más `lastName`.

Para crear una instancia de la clase `User` definimos la siguiente constante `const newUser = new User('Juanin','JanJarri');`  En estas lineas de código se puede apreciar que al crear esta instancia se envían los parámetros `'Juanin','JanJarri'` al constructor para inicializar la clase con esos valores.

## Interfaces

En oportunidades llamadas firmas, es el mecanismo que usa Typescript para definir tipos en las clases. Permiten definir la estructura o el tipo de objetos más complejos.  

La forma en que se utiliza una interface es muy similar a como se define una clase, pero solo se declaran atributos y métodos si su implementación. 

Al igual que los tipos de variables simples, estos objetos también deberán seguir un conjunto de reglas creadas por ti. Esto puede ayudarlo a escribir código con más confianza y con menos posibilidades de error.

En el siguiente ejemplo definimos una interface llamada `Lakes`:

```js
interface Lakes {
    name: string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[]
}
```

La `Lakes` interface contiene el tipo de cada propiedad que vamos a utilizar al crear nuestros objetos.  A continuación crearemos un nuevo objeto `firstLake` que heredará las propiedades que tiene la interface `Lakes`.

```js
let firstLake: Lakes = {
    name: 'Caspian Sea',
    length: 1199,
    depth: 1025,
    area: 371000,
    isFreshwater: false,
    countries: ['Kazakhstan', 'Russia', 'Turkmenistan', 'Azerbaijan', 'Iran']
}
```
Como puede ver, no importa el orden en el que asigne un valor a estas propiedades. Sin embargo, no puedes omitir un valor. 
Deberás asignar un valor a cada propiedad para evitar errores al compilar el código. 

De esta manera, TypeScript se asegura de que no se pierda ninguno de los valores requeridos por error. 


### Propiedades opcionales
A veces, es posible que necesites una propiedad solo para algunos objetos específicos. 

Por ejemplo, supongamos que desea agregar una propiedad para especificar los meses en los que se congela un lago. Si agrega la propiedad directamente a la interfaz, como hemos hecho hasta ahora, obtendrá un error para otros lagos que no se congelan y por lo tanto no tienen la propiedad `frozen`.  De manera similar, si agrega esa propiedad a los lagos que están congelados pero no en la declaración de la interfaz, aún obtendrá un error.

En tales casos, puede agregar un signo de interrogación `?` después del nombre de una propiedad para establecerla como opcional en la declaración de la interfaz. De esta manera, no obtendrá un error por propiedades faltantes o propiedades desconocidas. El siguiente ejemplo se vuelve a definir la interface `Lakes` pero la propiedad `area` queda como opcional.

```js
interface Lakes {
    name: string,
    area?: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[]
}
```



## Playground

<iframe width="830" height="467" src="https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBBCcQQ0MwAUVWDEQNUgADVHBQGNJ3KAALygABEAAkYNAMOB4GRogLFFTBPB3AExcwABT0xnM9zsyhc9wASmCKhwDQ8ZC8iElzhB7Bo3zcZmY7AYzEg-Fg0HUiS58D0Ii8AoZTJZggFSRxAvADlQAHJhAA5SASAVBFQAeW+ZF2gldWkgx1QjgUrmkeFATgtOlGWH0KAQiBhwiudokkuiIgMHBx3RYbC43CCJSAA" frameborder="0"></iframe>


## Conclusión

Esta lectura presentó todos los tipos que están disponibles en TypeScript. Aprendimos cómo la asignación de un tipo diferente de valor a una variable mostrará errores en TypeScript. Esta comprobación puede ayudarlo a evitar muchos errores al trabajar en aplicaciones grande y robustas.
