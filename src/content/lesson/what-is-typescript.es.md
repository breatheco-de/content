---
title: ¿Qué es Typescript? Aprenderás a Programar usando este superSet de javascript
tags:
  - typescript
  - javascript
description: >-
  Aprende qué es TypeScript, el superset de JavaScript que mejora tus
  desarrollos. ¡Descubre sus ventajas y comienza a programar hoy mismo!
---
Javascript es un lenguaje que tiene un tipado débil, esto quiere decir que las variables son declaradas sin un tipo y dependiendo del valor que se le asigne es el tipo de dato que asume la variable. Podemos modificar, operar y comparar los los valores entre ellos sin que tengamos que hacer una conversión previa. 

En el siguiente ejemplo podemos ver como cambiamos el tipo de datos sin ningún tipo de conversión:

```javascript

let name = "Aprendiendo Javascript"
console.log(typeof name)
// "string"

name = 33
console.log(typeof name)
// "number"
```
## ¿Qué es TypeScript?

Typescript es un lenguaje de programación que agrega nuevas funcionalidades a Javascript, esto es conocido como un superset. Un superset se escribe tomando como base otro lenguaje de programación aplicando mejoras en el lenguaje original. Por esta razón Typescript se escribió sobre javascript: para agregar nuevas funcionalidades que verás más adelante.

Typescript es la solución a muchos de los problemas de JavaScript: está pensado para el desarrollo de aplicaciones robustas, implementando características en un lenguaje que nos permitan desarrollar herramientas más avanzadas para el desarrollo de aplicaciones.

## Tipado estático

El tipado estático define que :

- Las variables tienen un solo tipo de datos

- Los valores asignados a las variables deben tener el mismo tipo que la variable.


En el siguiente ejemplo se está declarando la variable `message` del tipo `string`. Los valores deben tener el mismo tipo de dato que la variable, por esta razón se asigna el string `Conociendo TypeScript`

```javascript
const message: string;
message: 'Conociendo TypeScript';
```

En este otro ejemplo, estamos creando un nuevo tipo `myAge` (el cual, a su vez, usa el tipo `number`). Luego podamos usar este nuevo tipo directamente en la variable `age`

```javascript
type myAge = number
const age: myAge;
message: 'Conociendo TypeScript';
```

En este otro ejemplo, estamos creando una funcion que recibe dos parametros, `par1` del tipo numero y `par2` del tipo string, y que devuelve a su vez un `string`

```javascript
function testMyFunction(par1:number, par2:string):string {
    const parsedVal = number * 2
    return `${par2} is: ${parsedVal}`
}
const myTest = testMyFunction()
// myTest es un string
```

## Tipos de Datos en TypeScript
Las variables pueden tener diferentes tipos de valores, a continuación detallaremos como podemos definir cada tipo usando TypeScript:


- **Boolean**:  Solo acepta valores: Verdadero o Falso
```javascript
const isExist:boolean =  true
```  

- **String**:  Cualquier serie de caracteres
```javascript
const message:string = "Conociendo TypeScript"
```

- **Number**: Solo acepta números
```javascript
const age:number = 33
```
> Typescript tambien cuenta con un tipo "Number", pero este hace referencia a una instancia de la clase Number, no a un entero

- **Array**: Una lista con un tipo de dato.
```javascript
const arrayNumber:Array<number> = [1, 2, 3, 4]
const arrayStringFirst:Array<string> = ["uno", "dos", "tres", "cuatro"]
const arrayStringSecond:string[] = ["uno", "dos", "tres", "cuatro"]
```

- **Tuplas**: Acepta una lista con tipos de datos predefinidos. Util para arrays con longitudes fijas
```javascript
let arraytupla:[number, string, number]
arraytupla = [23, 'Hello World', true]
```

- **null**: Acepta valores vacíos
```javascript
const isNotExist:null = null
```

- **undefined**: Acepta valores indefinidos
```javascript
const isNotDeclared:undefined
```

- **Void**: Se utiliza para indicar que la referencia no devuelve un valor util. Usado principalmente en funciones
```javascript
function printMyInput(test:string): void {
    console.log('test', test)
}
```

- **Enum**: Permite definir una colección nombrada de constantes. Por default es numérico (incremental), pero admite otros tipos
```javascript

enum Animals {
    CAT = 'Silvestre',
    LION = 'Gado',
    DOG = 'Pluto',
    COW = 'Vaquita',
    MONKEY = 'Luffy'
}
let c: Animals = Animals.CAT; // El valor de c es Silvestre
```

- **Unknown**: Describe un valor que no es conocido, pero que debe ser "refinado" posteriormente. Cuando se usa este tipo, se espera que el codigo realice algun tipo de validacion para conocer el tipo correcto
```javascript
// Ejem: Una funcion que recibe un parametro de algun servicio externo, cuyo tipo desconoce
const testPrintResponse = (response: unknown) => {
  if (typeof response === "string") {
    console.log(response.toUpperCase()); // Safe to use string methods
  } else if (typeof response === "number") {
    console.log(response * 2); // Safe to perform numeric operations
  } else {
    console.log("Tipo no conocido", response);
  }
}
```

- **Any**: Desactiva el chequeo estático y admite cualquier valor.
```javascript
let wherever: any = 14;
wherever = "people";
```

### Trabajando con objetos

```javascript
type myObjType = {
    myName: string
    myAge: number
}
const myObjTest:myObjType = {
    myName: 'jose',
    myAge: 123
}
```

### Clases

Así como en cualquier otro lenguaje de programación orientado a objetos, en TypeScript las clases tienen campos, constructores, propiedades y funciones. Las clases actúan como contenedores que encapsulan código para ser consumidos de una manera más fácil.

Al definir una clase utilizamos la palabra `class` y cerramos con llaves `{}`, así como en c# y java por ejemplo y luego definimos adentro nuestros campos, constructores, propiedades y funciones.

```typescript runable=true

class User {
    // fields
    private name: string;
    private lastName: string;
    
    // Constructor
    constructor(name: string, lastName: string){
        this.name = name;
        this.lastName = lastName;
    }

    // Properties
    get getName(): string {
        return this.name;
    }

    set setName(value : string | undefined): string {
        if(value === undefined) {
            throw new Error('Ingrese un valor válido');
        }
        this.name = value;
    }

    //Functions
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

Para casos en los que se necesita describir objetos mas complejos, como modelos, entidades, DTOs, props simples, entre otros, se puede utilizar `interface`, cuya forma de uso es muy similar a como se define una clase, pero solo se declaran atributos y métodos, además de su implementación. 

Al igual que los tipos de variables simples, estos objetos también deberán seguir un conjunto de reglas creadas por ti. Esto puede ayudarte a escribir código con más confianza y con menos posibilidades de error.

En el siguiente ejemplo definimos una interface llamada `Lakes`:

```javascript
interface Lakes {
    name: string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[]
}
```
La interface `Lakes` contiene el tipo de cada propiedad que vamos a utilizar al crear nuestros objetos.  A continuación crearemos un nuevo objeto `firstLake` que heredará las propiedades que tiene la interface `Lakes`.

```javascript
let firstLake: Lakes = {
    name: 'Caspian Sea',
    length: 1199,
    depth: 1025,
    area: 371000,
    isFreshwater: false,
    countries: ['Kazakhstan', 'Russia', 'Turkmenistan', 'Azerbaijan', 'Iran']
}
```
Como puedes ver, no importa el orden en el que asignes un valor a estas propiedades. Sin embargo, no puedes omitir un valor. 
Deberás asignar un valor a cada propiedad para evitar errores al compilar el código. 

De esta manera, TypeScript se asegura de que no se pierda ninguno de los valores requeridos por error.

### Extension e Interseccion

Para los casos en los que deseas re-utilizar una interface existente, pero agregando nuevas propiedades, se puede optar por 2 caminos:

- Usando Extension:
```javascript
interface Ubicacion {
  direccion?: string
  ciudad: string
  distrito: string
  provincia: string
  codigoPostal: string
}
 
interface UbicacionConCoord extends Ubicacion {
  lat: string
  long: string
}
```

- Usando Intersección
```javascript
interface Gato {
    comeRatones: boolean
    saltaEnCasa: boolean
}

interface Ave {
    esCantor: boolean
    aleteaMucho: boolean
}

type GatoVolador = Gato & Ave

```

## Propiedades opcionales

A veces, es posible que necesites una propiedad solo para algunos objetos específicos. 

Por ejemplo, supongamos que deseas agregar una propiedad para especificar los meses en los que se congela un lago. Si agregas la propiedad directamente a la interfaz, como hemos hecho hasta ahora, obtendrás un error para otros lagos que no se congelan y por lo tanto no tienen la propiedad `frozen`.  De manera similar, si agregas esa propiedad a los lagos que están congelados pero no en la declaración de la interfaz, aún obtendrás un error.

En tales casos, puedes agregar un signo de interrogación `?` después del nombre de una propiedad para establecerla como opcional en la declaración de la interfaz (o tipo). De esta manera, no obtendrás un error por propiedades faltantes o propiedades desconocidas. En el siguiente ejemplo se vuelve a definir la interface `Lakes` pero la propiedad `area` queda como opcional.

```javascript
interface Lakes {
    name: string,
    area?: number, // Esto es equivalente a "area: number | undefined"
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[]
}

type Animal = {
    name: string,
    hasClaws?: bool,
}
```

## Conclusión

Esta lectura presentó todos los tipos de datos que están disponibles en TypeScript. Aprendimos cómo la asignación de un tipo diferente de valor a una variable mostrará errores en TypeScript. Esta comprobación te ayudará a evitar muchos errores al trabajar en aplicaciones grande y robustas.
