---
title: "TypeScript: Tipos Avanzados y Configuración"
author: "rosinni"
tags:
  - TypeScript
  - JavaScript
  - Tipos
  - Genéricos
  - Desarrollo Web
description: "Domina tipos compuestos, genéricos y configuración de TypeScript. Una guía práctica para desarrolladores que quieren aprovechar al máximo el tipado estático en sus proyectos."
---

Si ya conoces los tipos básicos de TypeScript, probablemente te hayas dado cuenta de algo, los tipos primitivos te llevan hasta cierto punto, pero cuando empiezas a construir aplicaciones reales, necesitas herramientas más potentes. Aquí es donde TypeScript realmente brilla.

Este artículo explora las características que hacen que TypeScript sea más que "JavaScript con tipos". Son las herramientas que usarás todos los días una vez que superes la fase de "declarar todo como string o number".

## Repaso Rápido: Tipos Primitivos

Antes de entrar en lo avanzado, un repaso rápido. TypeScript incluye todos los tipos primitivos de JavaScript más algunos extras:

```typescript
const message: string = "Hola TypeScript";
const count: number = 42;
const isActive: boolean = true;

// Arrays
const numbers: number[] = [1, 2, 3];

// Objetos con interfaces
interface User {
  name: string;
  age: number;
  email?: string; // opcional
}

const user: User = {
  name: "Ana",
  age: 28
};
```

Si estos conceptos te resultan nuevos, vale la pena revisar el artículo [introductorio de TypeScript](https://4geeks.com/es/lesson/que-es-typescript) antes de continuar. Lo que viene a continuación asume que ya te sientes cómodo con estos fundamentos.

## Tipos Compuestos: Cuando la Realidad es Más Complicada

En el mundo real, las cosas rara vez son blanco o negro. Una variable no siempre es "solo un string" o "solo un número". A veces es "un string O un número". A veces es "esto Y aquello". Los tipos compuestos existen precisamente para esos casos.

### Union Types: Esto O Aquello

Imagina que estás construyendo una función que maneja el estado de una petición HTTP. El estado podría ser 'loading', 'success', o 'error'. ¿Cómo lo tipas?

Podrías usar `string`, pero eso permitiría cualquier string, incluyendo valores sin sentido como 'banana'. Lo que realmente quieres es decir: "esta variable puede ser uno de estos valores específicos, y nada más".

```typescript runable=true
type Status = 'idle' | 'loading' | 'success' | 'error';

let currentStatus: Status = 'idle';
currentStatus = 'loading'; // ✓ válido
currentStatus = 'pending'; // ❌ Error: TypeScript sabe que esto no es válido
```

Este es un union type. El operador `|` significa "o". Es como decirle a TypeScript: "confía en mí, este valor solo puede ser una de estas cosas".

La belleza de los union types es que TypeScript te ayuda a manejar cada caso:

```typescript runable=true
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function makeRequest(url: string, method: HttpMethod) {
  // TypeScript sabe exactamente qué valores puede tener method
  console.log(`Making ${method} request to ${url}`);
}

makeRequest('https://example.com/users', 'GET'); // ✓
makeRequest('https://example.com/users', 'PATCH'); // ❌ Error
```

Los union types no se limitan a strings literales. Pueden ser cualquier combinación de tipos:

```typescript runable=true
type Result = number | string;

function processValue(value: Result) {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value.toUpperCase();
  }
}
```

Aquí pasa algo interesante. TypeScript es lo suficientemente inteligente para entender que dentro del `if`, `value` debe ser un `number` (porque acabas de verificarlo). Y en el `else`, tiene que ser un `string`. Esto se llama "type narrowing" y es una de las características más útiles de TypeScript.

### Intersection Types: Esto Y Aquello

Mientras los union types dicen "esto O aquello", los intersection types dicen "esto Y aquello". Se definen con `&`:

```typescript runable=true
interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

type Person = HasName & HasAge;

const person: Person = {
  name: 'Carlos',
  age: 30
};
```

¿Por qué querrías hacer esto en lugar de simplemente crear una interface `Person` con ambas propiedades? Porque a veces quieres combinar interfaces que vienen de diferentes lugares:

```typescript runable=true
interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
}

interface Identifiable {
  id: string;
}

interface UserData {
  name: string;
  email: string;
}

// Combina todo sin duplicar código
type User = UserData & Identifiable & Timestamped;
```

Esto es especialmente útil cuando trabajas con APIs. Puedes tener interfaces base que representan patrones comunes (como "todo tiene un ID" o "todo tiene timestamps") y combinarlas según necesites.

### Type Aliases vs Interfaces: La Pregunta del Millón

Esta es probablemente una de las preguntas más frecuentes: "¿cuándo uso `type` y cuándo uso `interface`?"

La respuesta honesta es: para objetos simples, cualquiera funciona bien y la elección es mayormente estilística. Pero hay algunas diferencias prácticas:

```typescript runable=true
// Con interface - puedes extender
interface UserInterface {
  name: string;
  email: string;
}

interface AdminInterface extends UserInterface {
  role: 'admin';
  permissions: string[];
}

// Con type alias - usas intersection
type UserType = {
  name: string;
  email: string;
};

type AdminType = UserType & {
  role: 'admin';
  permissions: string[];
};
```

**La regla general:** Si estás definiendo la forma de un objeto, especialmente si planeas extenderlo después, usa `interface`. Para union types, intersection types complejos, o tipos más avanzados, usa `type`.

Pero honestamente, no pierdas mucho tiempo preocupándote por esto. La consistencia en tu proyecto es más importante que la elección específica.

### Tipos Literales: Más Específicos que Nunca

Los tipos literales llevan la precisión al siguiente nivel. En lugar de decir "esto es un string", puedes decir "esto es exactamente este string":

```typescript runable=true
let answer: 'yes' | 'no';
answer = 'yes'; // ✓
answer = 'maybe'; // ❌ No, no puedes estar indeciso aquí

// Números literales
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// Útil para configuraciones con valores específicos
interface RequestConfig {
  method: 'GET' | 'POST';
  cache: 'no-cache' | 'reload' | 'force-cache';
  credentials: 'omit' | 'same-origin' | 'include';
}
```

Este patrón es increíblemente común en código real. Piensa en todas las veces que has tenido un valor que solo puede ser uno de un conjunto limitado de opciones. Los tipos literales hacen que esas restricciones sean explícitas y verificables.

## Genéricos: La Navaja Suiza de TypeScript

Los genéricos son probablemente lo más intimidante de TypeScript cuando empiezas. Ves código con `<T>` por todos lados y piensas "¿qué demonios es eso?". Pero una vez que haces clic, te das cuenta de que son increíblemente útiles.

### El Problema que Resuelven los Genéricos

Imagina que necesitas una función que retorna el primer elemento de un array. Sin genéricos, tendrías que hacer esto:

```typescript runable=true
function getFirstString(arr: string[]): string {
  return arr[0];
}

function getFirstNumber(arr: number[]): number {
  return arr[0];
}

function getFirstBoolean(arr: boolean[]): boolean {
  return arr[0];
}
```

Esto es ridículo. Es la misma lógica tres veces. Y cada vez que necesites un nuevo tipo, tendrías que escribir otra función.

Los genéricos resuelven esto:

```typescript runable=true
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstString = getFirst(['a', 'b', 'c']); // TypeScript sabe que es string
const firstNumber = getFirst([1, 2, 3]); // TypeScript sabe que es number
const firstBool = getFirst([true, false]); // TypeScript sabe que es boolean
```

Una función, infinitos tipos. El `<T>` es como un parámetro, pero para tipos en lugar de valores. Le estás diciendo a TypeScript: "voy a pasarte un tipo cuando use esta función, y quiero que uses ese tipo para tipar tanto el parámetro como el retorno".

Por convención, la gente usa `T` (de "Type"), pero puedes usar cualquier nombre. De hecho, nombres más descriptivos a veces ayudan:

```typescript runable=true
function wrapInArray<Item>(item: Item): Item[] {
  return [item];
}

wrapInArray(42); // number[]
wrapInArray('hello'); // string[]
```

### Genéricos con Restricciones: No Todo Vale

A veces quieres que tu genérico tenga ciertas propiedades. No cualquier tipo, sino tipos que cumplan con ciertos requisitos. Para eso usas `extends`:

```typescript runable=true
// Solo acepta tipos que tengan una propiedad 'length'
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength('hello'); // ✓ strings tienen length
logLength([1, 2, 3]); // ✓ arrays tienen length  
logLength(42); // ❌ Error: numbers no tienen length
```

Esto es súper útil cuando necesitas acceder a propiedades específicas dentro de la función genérica.

Otro patrón común es restringir a objetos:

```typescript runable=true
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: 'Ana' }, { age: 28 });
// TypeScript sabe que tiene { name: string, age: number }
```

### Genéricos en el Mundo Real: APIs

Aquí está donde los genéricos realmente brillan. Cuando trabajas con APIs, tiendes a tener patrones que se repiten:

```typescript runable=true
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: Date;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface Product {
  id: string;
  title: string;
  price: number;
}

// Una estructura, múltiples tipos de datos
const userResponse: ApiResponse<User> = {
  data: {
    id: '1',
    name: 'Ana',
    email: 'ana@example.com'
  },
  status: 200,
  message: 'Success',
  timestamp: new Date()
};

const productsResponse: ApiResponse<Product[]> = {
  data: [
    { id: '1', title: 'Laptop', price: 999 },
    { id: '2', title: 'Mouse', price: 29 }
  ],
  status: 200,
  message: 'Success',
  timestamp: new Date()
};
```

Este patrón aparece constantemente en código de producción. En lugar de duplicar la estructura de respuesta para cada tipo de datos, la defines una vez con un genérico y la reutilizas.

Otros patrones útiles:

```typescript runable=true
// Estado de carga genérico
interface LoadingState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

// Paginación genérica
interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

type UserList = Paginated<User>;
type ProductList = Paginated<Product>;
```

### Valores por Defecto en Genéricos

Si hay un tipo que usas la mayoría del tiempo, puedes establecerlo como default:

```typescript runable=true
interface Config<T = string> {
  value: T;
  label: string;
}

// No necesitas especificar el tipo si es string
const config1: Config = {
  value: 'hello',
  label: 'Greeting'
};

// Pero puedes sobrescribirlo
const config2: Config<number> = {
  value: 42,
  label: 'Answer'
};
```

## Tipado de Funciones: Más Allá de lo Básico

Las funciones son el corazón de JavaScript, y tiparlas correctamente es fundamental para aprovechar TypeScript.

### Parámetros Opcionales: Flexibilidad Controlada

A veces una función puede funcionar con o sin ciertos parámetros:

```typescript runable=true
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

greet('Ana'); // "Hello, Ana!"
greet('Ana', 'Buenos días'); // "Buenos días, Ana!"
```

El `?` hace que el parámetro sea opcional. Pero hay que tener cuidado: los parámetros opcionales deben ir después de los obligatorios. TypeScript no te deja hacer trampa aquí.

```typescript runable=true
// ❌ Esto no funciona
function invalid(optional?: string, required: string) {}

// ✓ Esto sí
function valid(required: string, optional?: string) {}
```

Otra opción es usar valores por defecto, que hace las cosas más explícitas:

```typescript runable=true
function createUser(name: string, role: string = 'user') {
  return { name, role };
}

createUser('Ana'); // { name: 'Ana', role: 'user' }
createUser('Luis', 'admin'); // { name: 'Luis', role: 'admin' }
```

### Rest Parameters: Cuando No Sabes Cuántos Argumentos Vendrán

```typescript runable=true
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3); // 6
sum(1, 2, 3, 4, 5); // 15
```

Esto es especialmente útil para funciones de utilidad:

```typescript runable=true
function logWithPrefix(prefix: string, ...messages: string[]): void {
  messages.forEach(msg => console.log(`${prefix}: ${msg}`));
}

logWithPrefix('INFO', 'Server started', 'Listening on port 3000');
// INFO: Server started
// INFO: Listening on port 3000
```

### Function Types: Funciones Como Ciudadanos de Primera Clase

Las funciones pueden ser valores, y esos valores necesitan tipos:

```typescript runable=true
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

function calculate(a: number, b: number, operation: MathOperation): number {
  return operation(a, b);
}

calculate(5, 3, add); // 8
calculate(5, 3, multiply); // 15
```

Esto hace que tu código sea más flexible. En lugar de tener una función rígida que hace una sola cosa, tienes una función que acepta comportamiento como parámetro.

También puedes definir function types con interfaces:

```typescript runable=true
interface Validator {
  (value: string): boolean;
}

const isEmail: Validator = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const isNotEmpty: Validator = (value) => {
  return value.length > 0;
};
```

### Funciones Asíncronas: Promesas Tipadas

Las funciones async siempre retornan una `Promise`, y TypeScript necesita saber qué tipo de dato está dentro de esa promesa:

```typescript runable=true
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`https://example.com/users/${id}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  return data;
}
```

Fíjate en el `: Promise<User>`. Está diciendo "esta función retorna una promesa que eventualmente contendrá un User".

Si la función async no retorna nada significativo, usa `Promise<void>`:

```typescript runable=true
async function saveUser(user: User): Promise<void> {
  await fetch('https://example.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  // No retorna nada
}
```

El manejo de errores también puede tiparse:

```typescript runable=true
async function getUserSafely(id: string): Promise<User | null> {
  try {
    const user = await fetchUser(id);
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}
```

Aquí estás diciendo explícitamente: "esta función puede retornar un User o null si algo sale mal".

### Callbacks: Funciones que Llaman Funciones

Los callbacks son funciones que pasas a otras funciones, y necesitan ser tipados correctamente:

```typescript runable=true
function processArray(
  arr: number[],
  callback: (item: number) => number
): number[] {
  return arr.map(callback);
}

const doubled = processArray([1, 2, 3], (n) => n * 2);
// [2, 4, 6]
```

En situaciones más complejas, como cuando trabajas con APIs, los callbacks se vuelven más sofisticados:

```typescript runable=true
interface FetchOptions {
  onSuccess: (data: any) => void;
  onError: (error: Error) => void;
  onFinally?: () => void;
}

async function fetchData(url: string, options: FetchOptions): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    options.onSuccess(data);
  } catch (error) {
    options.onError(error as Error);
  } finally {
    options.onFinally?.();
  }
}

// Uso
fetchData('https://example.com/users', {
  onSuccess: (data) => console.log('Got data:', data),
  onError: (error) => console.error('Oops:', error),
  onFinally: () => console.log('Done!')
});
```


## Configuración: La base de todo

Una buena configuración de TypeScript es como tener buenos cimientos en una casa. No es glamoroso, pero hace toda la diferencia. El archivo `tsconfig.json` controla cómo TypeScript compila tu código. Aquí está una configuración sólida para empezar:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    
    "outDir": "./dist",
    "rootDir": "./src",
    
    "lib": ["ES2020"],
    
    "strict": true,
    
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

Esto puede parecer mucho, pero cada opción tiene un propósito.

### La Opción Más Importante: strict

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Esta única línea activa todas las verificaciones estrictas de TypeScript. Es tentador desactivarla cuando empiezas porque hace que el compilador se queje de todo. Pero resiste la tentación. `strict: true` es lo que hace que TypeScript realmente te proteja de bugs.

Cuando está activado, TypeScript te obliga a:

- No usar `any` implícitamente
- Manejar casos `null` y `undefined` explícitamente
- Tipar todos los parámetros de funciones
- Y más...

```typescript runable=true
// Con strict: true
function greet(name: string | null): string {
  if (name === null) {
    return 'Hello, stranger!';
  }
  return `Hello, ${name}!`;
}

// Sin strict, podrías hacer esto y TypeScript no se quejaría:
function greetUnsafe(name) { // Implícitamente 'any'
  return `Hello, ${name.toUpperCase()}!`; // Podría explotar si name es null
}
```

### Opciones de Verificación Adicionales

Más allá de `strict`, hay opciones que detectan problemas sutiles:

```json
{
  "compilerOptions": {
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

**noUnusedLocals**: Te avisa cuando declaras variables que nunca usas.

```typescript runable=true
function calculate(a: number, b: number): number {
  const temp = a + b; // ⚠️ Warning: nunca se usa
  return a * b;
}
```

**noImplicitReturns**: Asegura que todas las ramas de una función retornen un valor.

```typescript runable=true
function getDiscount(price: number): number {
  if (price > 100) {
    return price * 0.1;
  }
  // ❌ Error: No todas las ramas retornan un valor
}
```

### Configuración para Diferentes Entornos

Dependiendo de dónde corra tu código, necesitarás diferentes configuraciones:

**Para Node.js:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "lib": ["ES2020"],
    "types": ["node"]
  }
}
```

**Para navegadores:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"]
  }
}
```

La diferencia clave está en `lib`, que define qué APIs están disponibles. Si incluyes "DOM", TypeScript conoce cosas como `document` y `window`. Si incluyes "node", conoce `process` y `Buffer`.



En conclusión, typeScript puede parecer mucho al principio. Los genéricos son confusos. Los tipos compuestos se sienten innecesarios. Pero aquí está la verdad, cada una de estas características existe porque resuelve un problema real que encontrarás en código de producción. Los genéricos evitan duplicación. Los union types hacen que las restricciones sean explícitas. La configuración estricta previene bugs sutiles.

Con el tiempo, escribir TypeScript se volverá tan natural como escribir JavaScript, pero con una red de seguridad gigante. Cada error que el compilador atrapa es un bug que no llegó a producción. Cada tipo que defines es documentación viviente que nunca queda desactualizada. TypeScript no es perfecto. A veces es verboso. A veces te hace saltar aros innecesarios. Pero en el balance, hace que el código sea más seguro, más mantenible, y más fácil de entender. Y eso vale cada `<T>` que escribas.