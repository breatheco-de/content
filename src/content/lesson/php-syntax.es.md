---
title: "Entendiendo la Sintaxis de PHP"
subtitle: "Aprende aquí sobre la sintaxis de PHP, con esta increíble lección."
cover_local: "../../assets/images/4cc6fa0b-2530-4052-aa7e-8dac03788ac3.png"
textColor: "white"
date: "2018-10-31"
tags: ["PHP"]
status: "draft"

---

## Que es PHP
***

PHP es uno de los lenguajes de back-end más utilizados en la web. En términos de funcionalidad, le permite hacer prácticamente lo que cualquier otro lenguaje de back-end le permita. La sintaxis es bastante similar a JavaScript, y su mayor fortaleza es la comunidad: puedes encontrar tutoriales y documentación para todo lo que haces.

PHP ha demostrado ser un gran sobreviviente: el 82% de la web usa PHP. Es el segundo idioma con más interés de Google. [En una encuesta de desarrolladores de 2018 de desbordamiento de pila](https://insights.stackoverflow.com/survey/2018), PHP fue el lenguaje más popular entre PHP, Ruby, Nodejs y Python. Los Frameworks PHP son fenomenales: [Laravel](https://laravel.com/), Phpixie, etc.

## JavaScript vs PHP
***

PHP y JavaScript son como las manzanas y las naranjas. En términos de funcionalidad, no tienen NADA en común: no tienen el mismo propósito, no hacen las mismas cosas, vienen de diferentes orígenes, etc.

Las únicas cosas que tienen en común son:

+ **Puede realizar las operaciones lógicas principales y controlar el flujo de la misma manera:** Al igual que en cualquier otro lenguaje de programación, tiene bucles, while, if... else, switch, etc. (PHP tiene aún más opciones, hablaremos sobre los posteriores).
+ **Tienen casi la misma sintaxis: ** Tienes que terminar cada línea con un punto y coma; Las funciones se declaran de la misma manera; Los bucles se declaran de la misma manera; Las operaciones lógicas son las mismas; etc.

## Tipos de datos
***

Sólo hay algunas diferencias, aquí está la explicación:

|**En JavaScript**    |**En PHP**       |
|:--------------------|:----------------|
|Números    |En lugar de un número de tipo de datos, ahora tiene dos: Integer y Float. Un integer o entero no tiene decimales:<br>`python>$myNumber = 23.23;  //float `<br>`python>$myNumber = 54;  //integer `<br>`python>$myNumber = 12.00;  //float (even with 00 as decimals).`     |
|Indefinido o Undefined       |El tipo de datos no definido no está disponible en PHP. Aquí undefined y null son el mismo tipo de datos.<br>`python>$myNumber;  //is null because it was not defined`     |
|Arreglos o Array     |Ambos tienen arreglos de índices numéricos y arreglos asociativas. La diferencia es que JavaScript llama "Diccionarios" a las matrices asociativas de PHP.<br>`python>$array = array('Juan','John','Steven');  //array of numeric indexes`<br> `python>$array = array('SSN-55532323' => 'Juan', 'SSN-99948334' => 'John', 'SSN-99330323' => 'Steven');` <br> //arreglo asociativo, utilizando cadenas como índices en lugar de números enteros.   |
|Cadena o String     |Es lo mismo en PHP.      |


### Valores de Impresión

Console.log es sorprendente en JS, pero en PHP, tendrá que usar echo para tipos de datos simples, y print_r para imprimir tipos de datos más complejos (como arreglos y objetos).

#### ![php syntax](../../assets/images/2de93dfc-263c-43e3-afa5-6557a5e7cf4c.png) Con JavaScript

```javascript
var simpleValue = ‘hello’;
console.log(simpleValue);
//Esto imprimirá el contenido de la variable. 
var arrayValue = [‘Hello’,23, 76, ‘World’,43];
console.log(arrayValue);
//Esto imprimirá el contenido del arreglo y sus elementos.

```

#### ![php syntax](../../assets/images/54a062a9-1b37-4d49-ae22-a23d91ad600f.png) Con PHP

```php{numberLines: true}
$simpleValue = ‘Hello’;
echo $simpleValue;   //esto imprimirá el contenido
$arrayValue = array(‘Hello’,23,76,’World’,43);
echo $arrayValue;   //Esto no funcionará
print_r($arrayValue);  //Esto funcionará, imprimiendo el contenido del arreglo en un formato como este:
CopyArray
(
    [0] => Hello
    [1] => 23
    [2] => 76
    [3] => World
    [4] => 43
)
```

## Trabajando Con Arreglos
***

PHP comenzó como un lenguaje de programación funcional y aún tiene muchas cosas que operarán en funciones en lugar de objetos. Por eso es muy importante revisar las operaciones básicas de la matriz; La sintaxis puede parecer diferente, pero, al final, tienen el mismo propósito.

### Blucles de Arreglos

#### ![php syntax](../../assets/images/2de93dfc-263c-43e3-afa5-6557a5e7cf4c.png) Con JavaScript

```javascript{numberLines: true}
for(var i = 0; i<myArray.length; i++){
console.log(myArray[i];
}
myArray.forEach(function(item,index,array) {
console.log(item);
});
```

```php
for($i=0; $i<count($myArray);$i++){
print_r($myArray[i]);
}
foreach($myArray as $item){
print_r($item);
}
foreach($myArray as $index => $value){
print_r($value);
}
```

### Adición y Eliminación de Elementos

#### ![php syntax](../../assets/images/2de93dfc-263c-43e3-afa5-6557a5e7cf4c.png) Con JavaScript

```javascript
var myArray = [‘Academy’, ‘Coding’];
myArray.push(‘4Geeks’); //Añadiendo un artículo
//para eliminar el elemento en la posición INDEX
myArray.splice(index, 1);
```

#### ![php syntax](../../assets/images/54a062a9-1b37-4d49-ae22-a23d91ad600f.png) Con PHP

```php
$myArray = array(‘Academy’,’Coding’);
array_push($myArray, ‘4Geeks’);  //adding an item 
//to remove the item in the index position 
unset($myArray[index]);
$myArray = array_values($myArray);
```

### Funciones de Clasificación para Arreglos

#### ![php syntax](../../assets/images/54a062a9-1b37-4d49-ae22-a23d91ad600f.png) Con PHP

```php{numberLines: true}
$myArray = array(2,5,1,4,7);
sort($myArray);
print_r($myArray);  //ordenar las arreglos en orden ascendente 
/* Ejemplo de salida
Arreglo
(
[0] => 1
[1] => 2
[2] => 4
[3] => 5
[4] => 7
)*/ 
rsort($myArray);
print_r($myArray);  //ordenar las arreglos en orden descendente
/* Ejemplo de salida
Arreglo
(
[0] => 7
[1] => 5
[2] => 4
[3] => 2
[4] => 1
)*/ 
$myAssosiativeArray = array("SSN-9232323" => "Ramon Cornell", "SSN-5643233" => "Steban Dido", "SSN-5554433" => "Mikelly Reik", "SSN-3423344" => "Bob Stalin");
asort($myAssosiativeArray);
print_r($myAssosiativeArray);  //ordenar arreglos asociativas en orden ascendente, de acuerdo con el valor
/* Ejemplo de salida
Arreglo
(
[SSN-3423344] => Bob Stalin
[SSN-5554433] => Mikelly Reik
[SSN-9232323] => Ramon Cornell
[SSN-5643233] => Steban Dido
)*/ 
ksort($myAssosiativeArray);
print_r($myAssosiativeArray);  //ordenar arreglos asociativas en orden ascendente, de acuerdo con la clave
/* Ejemplo de salida
Arreglo
(
[SSN-3423344] => Bob Stalin
[SSN-5554433] => Mikelly Reik
[SSN-5643233] => Steban Dido
[SSN-9232323] => Ramon Cornell
)*/ 
arsort($myAssosiativeArray);
print_r($myAssosiativeArray);  //ordenar arreglos asociativas en orden descendente, de acuerdo con el valor
/* Ejemplo de salida
Arreglo
(
[SSN-5643233] => Steban Dido
[SSN-9232323] => Ramon Cornell
[SSN-5554433] => Mikelly Reik
[SSN-3423344] => Bob Stalin
)*/ 
krsort($myAssosiativeArray);
print_r($myAssosiativeArray);  //ordenar arreglos asociativas en orden descendente, de acuerdo con la clave
/* Ejemplo de salida
Arreglo
(
[SSN-9232323] => Ramon Cornell
[SSN-5643233] => Steban Dido
[SSN-5554433] => Mikelly Reik
[SSN-3423344] => Bob Stalin
)*/
```

### La Declaración de Cambio

Esto es casi idéntico a la declaración de cambio en JavaScript:

#### ![php syntax](../../assets/images/2de93dfc-263c-43e3-afa5-6557a5e7cf4c.png) Con JavaScript

```javascript{numberLines: true}
favcolor = "red";
switch (favcolor) {
    case "red":
    return "Your favorite color is red!";
    break;
    case "blue":
    return "Your favorite color is blue!";
    break;
    case "green":
    return "Your favorite color is green!";
    break;
    default:
    return "Your favorite color is neither red, blue, nor green!";
}
```

#### ![php syntax](../../assets/images/54a062a9-1b37-4d49-ae22-a23d91ad600f.png) Con PHP

```php{numberLines: true}
<?php
    $favcolor = "red";
    switch ($favcolor) {
    case "red":
    echo "Your favorite color is red!";
    break;
    case "blue":
    echo "Your favorite color is blue!";
    break;
    case "green":
    echo "Your favorite color is green!";
    break;
    default:
    echo "Your favorite color is neither red, blue, nor green!";
}
?>
```

### Objetos

Cuando se trabaja con objetos, tenemos que usar el operador "->" en lugar de "." para acceder a las propiedades del objeto.

#### ![php syntax](../../assets/images/2de93dfc-263c-43e3-afa5-6557a5e7cf4c.png) Con JavaScript

```javascript
var auxCar = new Car();
console.log(auxCar.brand);
```

#### ![what is php tutorial](../../assets/images/54a062a9-1b37-4d49-ae22-a23d91ad600f.png) Con PHP

```php
<?php
    $myCar = new Car();
    echo $car->brand;
?>
```

## Todas las demás operaciones
***

Todas las demás operaciones son más o menos las mismas que en JavaScript. Simplemente use el signo de dólar `$` al principio de cada variable, y use la flecha para acceder a las propiedades del objeto en lugar del punto `.`





