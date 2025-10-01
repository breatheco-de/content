---
title: "TypeScript: Advanced Types and Configuration"
author: "rosinni"
tags:
    - TypeScript
    - JavaScript
    - Types
    - Generics
    - Web Development
description: "Master compound types, generics, and TypeScript configuration. A practical guide for developers who want to make the most of static typing in their projects."
---

If you're already familiar with TypeScript's basic types, you've probably realized something: primitive types only get you so far, but when you start building real applications, you need more powerful tools. This is where TypeScript truly shines.

This article explores the features that make TypeScript more than just "JavaScript with types." These are the tools you'll use every day once you move past the "declare everything as string or number" phase.

## Quick Review: Primitive Types

Before diving into advanced topics, a quick review. TypeScript includes all of JavaScript's primitive types plus a few extras:

```typescript
const message: string = "Hello TypeScript";
const count: number = 42;
const isActive: boolean = true;

// Arrays
const numbers: number[] = [1, 2, 3];

// Objects with interfaces
interface User {
    name: string;
    age: number;
    email?: string; // optional
}

const user: User = {
    name: "Ana",
    age: 28
};
```

If these concepts are new to you, it's worth checking out the [introductory TypeScript article](https://4geeks.com/lesson/what-is-typescript) before continuing. What follows assumes you're already comfortable with these basics.

## Compound Types: When Reality Is More Complicated

In the real world, things are rarely black or white. A variable isn't always "just a string" or "just a number." Sometimes it's "a string OR a number." Sometimes it's "this AND that." Compound types exist precisely for these cases.

### Union Types: This OR That

Imagine you're building a function that handles the state of an HTTP request. The state could be 'loading', 'success', or 'error'. How do you type it?

You could use `string`, but that would allow any string, including meaningless values like 'banana'. What you really want is to say: "this variable can be one of these specific values, and nothing else."

```typescript
type Status = 'idle' | 'loading' | 'success' | 'error';

let currentStatus: Status = 'idle';
currentStatus = 'loading'; // ✓ valid
currentStatus = 'pending'; // ❌ Error: TypeScript knows this isn't valid
```

This is a union type. The `|` operator means "or." It's like telling TypeScript: "trust me, this value can only be one of these things."

The beauty of union types is that TypeScript helps you handle each case:

```typescript
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function makeRequest(url: string, method: HttpMethod) {
    // TypeScript knows exactly what values method can have
    console.log(`Making ${method} request to ${url}`);
}

makeRequest('https://example.com/users', 'GET'); // ✓
makeRequest('https://example.com/users', 'PATCH'); // ❌ Error
```

Union types aren't limited to string literals. They can be any combination of types:

```typescript
type Result = number | string;

function processValue(value: Result) {
    if (typeof value === 'number') {
        return value * 2;
    } else {
        return value.toUpperCase();
    }
}
```

Here's something interesting. TypeScript is smart enough to understand that inside the `if`, `value` must be a `number` (because you just checked it). And in the `else`, it must be a `string`. This is called "type narrowing" and it's one of TypeScript's most useful features.

### Intersection Types: This AND That

While union types say "this OR that," intersection types say "this AND that." They're defined with `&`:

```typescript
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

Why would you do this instead of just creating a `Person` interface with both properties? Because sometimes you want to combine interfaces that come from different places:

```typescript
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

// Combine everything without duplicating code
type User = UserData & Identifiable & Timestamped;
```

This is especially useful when working with APIs. You can have base interfaces representing common patterns (like "everything has an ID" or "everything has timestamps") and combine them as needed.

### Type Aliases vs Interfaces: The Million Dollar Question

This is probably one of the most frequently asked questions: "When do I use `type` and when do I use `interface`?"

The honest answer is: for simple objects, either works fine and the choice is mostly stylistic. But there are some practical differences:

```typescript
// With interface - you can extend
interface UserInterface {
    name: string;
    email: string;
}

interface AdminInterface extends UserInterface {
    role: 'admin';
    permissions: string[];
}

// With type alias - use intersection
type UserType = {
    name: string;
    email: string;
};

type AdminType = UserType & {
    role: 'admin';
    permissions: string[];
};
```

**General rule:** If you're defining the shape of an object, especially if you plan to extend it later, use `interface`. For union types, complex intersection types, or more advanced types, use `type`.

But honestly, don't spend too much time worrying about this. Consistency in your project is more important than the specific choice.

### Literal Types: More Specific Than Ever

Literal types take precision to the next level. Instead of saying "this is a string," you can say "this is exactly this string":

```typescript
let answer: 'yes' | 'no';
answer = 'yes'; // ✓
answer = 'maybe'; // ❌ No, you can't be indecisive here

// Numeric literals
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// Useful for configurations with specific values
interface RequestConfig {
    method: 'GET' | 'POST';
    cache: 'no-cache' | 'reload' | 'force-cache';
    credentials: 'omit' | 'same-origin' | 'include';
}
```

This pattern is incredibly common in real code. Think of all the times you've had a value that could only be one of a limited set of options. Literal types make those restrictions explicit and verifiable.

## Generics: TypeScript's Swiss Army Knife

Generics are probably the most intimidating part of TypeScript when you're starting out. You see code with `<T>` everywhere and think "what the heck is that?" But once it clicks, you realize they're incredibly useful.

### The Problem Generics Solve

Imagine you need a function that returns the first element of an array. Without generics, you'd have to do this:

```typescript
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

This is ridiculous. It's the same logic three times. And every time you need a new type, you'd have to write another function.

Generics solve this:

```typescript
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

const firstString = getFirst(['a', 'b', 'c']); // TypeScript knows it's string
const firstNumber = getFirst([1, 2, 3]); // TypeScript knows it's number
const firstBool = getFirst([true, false]); // TypeScript knows it's boolean
```

One function, infinite types. The `<T>` is like a parameter, but for types instead of values. You're telling TypeScript: "I'm going to give you a type when I use this function, and I want you to use that type for both the parameter and the return value."

By convention, people use `T` (for "Type"), but you can use any name. In fact, more descriptive names sometimes help:

```typescript
function wrapInArray<Item>(item: Item): Item[] {
    return [item];
}

wrapInArray(42); // number[]
wrapInArray('hello'); // string[]
```

### Generics with Constraints: Not Everything Goes

Sometimes you want your generic to have certain properties. Not just any type, but types that meet certain requirements. For that, you use `extends`:

```typescript
// Only accepts types that have a 'length' property
function logLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

logLength('hello'); // ✓ strings have length
logLength([1, 2, 3]); // ✓ arrays have length  
logLength(42); // ❌ Error: numbers don't have length
```

This is super useful when you need to access specific properties inside the generic function.

Another common pattern is restricting to objects:

```typescript
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const merged = merge({ name: 'Ana' }, { age: 28 });
// TypeScript knows it has { name: string, age: number }
```

### Generics in the Real World: APIs

Here's where generics really shine. When working with APIs, you tend to have repeating patterns:

```typescript
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

// One structure, multiple data types
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

This pattern appears constantly in production code. Instead of duplicating the response structure for each data type, you define it once with a generic and reuse it.

Other useful patterns:

```typescript
// Generic loading state
interface LoadingState<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

// Generic pagination
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

### Default Values in Generics

If there's a type you use most of the time, you can set it as the default:

```typescript
interface Config<T = string> {
    value: T;
    label: string;
}

// No need to specify the type if it's string
const config1: Config = {
    value: 'hello',
    label: 'Greeting'
};

// But you can override it
const config2: Config<number> = {
    value: 42,
    label: 'Answer'
};
```

## Function Typing: Beyond the Basics

Functions are the heart of JavaScript, and typing them correctly is key to getting the most out of TypeScript.

### Optional Parameters: Controlled Flexibility

Sometimes a function can work with or without certain parameters:

```typescript
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

greet('Ana'); // "Hello, Ana!"
greet('Ana', 'Good morning'); // "Good morning, Ana!"
```

The `?` makes the parameter optional. But be careful: optional parameters must come after required ones. TypeScript won't let you cheat here.

```typescript
// ❌ This doesn't work
function invalid(optional?: string, required: string) {}

// ✓ This does
function valid(required: string, optional?: string) {}
```

Another option is to use default values, which makes things more explicit:

```typescript
function createUser(name: string, role: string = 'user') {
    return { name, role };
}

createUser('Ana'); // { name: 'Ana', role: 'user' }
createUser('Luis', 'admin'); // { name: 'Luis', role: 'admin' }
```

### Rest Parameters: When You Don't Know How Many Arguments Will Come

```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3); // 6
sum(1, 2, 3, 4, 5); // 15
```

This is especially useful for utility functions:

```typescript
function logWithPrefix(prefix: string, ...messages: string[]): void {
    messages.forEach(msg => console.log(`${prefix}: ${msg}`));
}

logWithPrefix('INFO', 'Server started', 'Listening on port 3000');
// INFO: Server started
// INFO: Listening on port 3000
```

### Function Types: Functions as First-Class Citizens

Functions can be values, and those values need types:

```typescript
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

function calculate(a: number, b: number, operation: MathOperation): number {
    return operation(a, b);
}

calculate(5, 3, add); // 8
calculate(5, 3, multiply); // 15
```

This makes your code more flexible. Instead of having a rigid function that does only one thing, you have a function that accepts behavior as a parameter.

You can also define function types with interfaces:

```typescript
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

### Async Functions: Typed Promises

Async functions always return a `Promise`, and TypeScript needs to know what type of data is inside that promise:

```typescript
async function fetchUser(id: string): Promise<User> {
    const response = await fetch(`https://example.com/users/${id}`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
}
```

Notice the `: Promise<User>`. It's saying "this function returns a promise that will eventually contain a User."

If the async function doesn't return anything meaningful, use `Promise<void>`:

```typescript
async function saveUser(user: User): Promise<void> {
    await fetch('https://example.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    // Doesn't return anything
}
```

Error handling can also be typed:

```typescript
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

Here you're explicitly saying: "this function may return a User or null if something goes wrong."

### Callbacks: Functions That Call Functions

Callbacks are functions you pass to other functions, and they need to be typed correctly:

```typescript
function processArray(
    arr: number[],
    callback: (item: number) => number
): number[] {
    return arr.map(callback);
}

const doubled = processArray([1, 2, 3], (n) => n * 2);
// [2, 4, 6]
```

In more complex situations, like when working with APIs, callbacks become more sophisticated:

```typescript
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

// Usage
fetchData('https://example.com/users', {
    onSuccess: (data) => console.log('Got data:', data),
    onError: (error) => console.error('Oops:', error),
    onFinally: () => console.log('Done!')
});
```

## Configuration: The Foundation of Everything

A good TypeScript configuration is like having a solid foundation for a house. It's not glamorous, but it makes all the difference. The `tsconfig.json` file controls how TypeScript compiles your code. Here's a solid starter configuration:

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

This may look like a lot, but every option has a purpose.

### The Most Important Option: strict

```json
{
    "compilerOptions": {
        "strict": true
    }
}
```

This single line enables all of TypeScript's strict checks. It's tempting to turn it off when you're starting out because it makes the compiler complain about everything. But resist the temptation. `strict: true` is what makes TypeScript really protect you from bugs.

When enabled, TypeScript forces you to:

- Not use implicit `any`
- Handle `null` and `undefined` cases explicitly
- Type all function parameters
- And more...

```typescript
// With strict: true
function greet(name: string | null): string {
    if (name === null) {
        return 'Hello, stranger!';
    }
    return `Hello, ${name}!`;
}

// Without strict, you could do this and TypeScript wouldn't complain:
function greetUnsafe(name) { // Implicitly 'any'
    return `Hello, ${name.toUpperCase()}!`; // Could crash if name is null
}
```

### Additional Checking Options

Beyond `strict`, there are options that catch subtle problems:

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

**noUnusedLocals**: Warns you when you declare variables you never use.

```typescript
function calculate(a: number, b: number): number {
    const temp = a + b; // ⚠️ Warning: never used
    return a * b;
}
```

**noImplicitReturns**: Ensures all branches of a function return a value.

```typescript
function getDiscount(price: number): number {
    if (price > 100) {
        return price * 0.1;
    }
    // ❌ Error: Not all branches return a value
}
```

### Configuration for Different Environments

Depending on where your code runs, you'll need different configurations:

**For Node.js:**
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

**For browsers:**
```json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "ESNext",
        "lib": ["ES2020", "DOM"]
    }
}
```

The key difference is in `lib`, which defines what APIs are available. If you include "DOM", TypeScript knows about things like `document` and `window`. If you include "node", it knows about `process` and `Buffer`.

In conclusion, TypeScript can seem like a lot at first. Generics are confusing. Compound types feel unnecessary. But here's the truth: each of these features exists because it solves a real problem you'll encounter in production code. Generics prevent duplication. Union types make restrictions explicit. Strict configuration prevents subtle bugs.

Over time, writing TypeScript will feel as natural as writing JavaScript, but with a giant safety net. Every error the compiler catches is a bug that didn't make it to production. Every type you define is living documentation that never gets outdated. TypeScript isn't perfect. Sometimes it's verbose. Sometimes it makes you jump through unnecessary hoops. But on balance, it makes code safer, more maintainable, and easier to understand. And that's worth every `<T>` you write.
