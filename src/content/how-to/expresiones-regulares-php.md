---
title: "¿Cómo usar Expresiones Regulares en PHP?"
subtitle: "Aprende a utilizar regex para manipular y validar datos en tus proyectos de PHP. Conoce los métodos más utilizados y la sintaxis para crear tus propias regex."
tags: ["php","expresiones regulares"]
authors: ["diegorojas"]
status: "published"

---

## Expresiones regulares PHP

Las[ expresiones regulares](https://4geeks.com/es/lesson/regex-tutorial-regular-expression-ejemplo) en PHP se pueden utilizar para la validación y extracción de datos, la manipulación de cadenas y más! Aquí hay un ejemplo del uso de expresiones regulares en PHP para validar un correo electrónico:

```php
$patron = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
$correo = "ejemplo@email.com";

if (preg_match($patron, $correo)) {
    echo("El correo electrónico es válido");
} else {
    echo("El correo electrónico es invalido");
};
```

Este código es un buen ejemplo del uso que le puedes dar a las expresiones regulares en **php**, este ejemplo utiliza un estructura condicional `if()` para comprobar si una cadena de texto coincide con el patrón de un **correo electrónico**, de ser así entra en la estructura condicional de lo contrario significa que la cadena de texto no coincide con el patrón de **expresiones regulares**.

## ¿Qué son las expresiones regulares en PHP?

Las expresiones regulares (regex o regexp) en PHP son una secuencia de caracteres que definen un patrón de coincidencia `/[a-z]/i`. Este patrón nos permite verificar si una cadena de texto (o parte de ella) coincide con el patrón **regex** proporcionado, también nos permite modificar los caracteres de la cadena que coinciden con este este patrón.

Las **expresiones regulares** se utilizan en la mayoría de los lenguajes de programación con una estructura muy similar, estos patrones de expresiones regulares son muy útiles a la hora de validar correos electrónicos, teléfonos, contraseñas y muchas cosas más.

## Ejemplos de expresiones regulares

|expresión regular | descripción |
|-----------------|---------------|
|`/[a-z]/i` | Esta expresión regular busca todas las letras de la "a" a la "z" en una cadena de texto y es insensible a mayúsculas o minúsculas. |
|`/[0-9]/` | Está expresión regular busca todos los números del "0" al "9" individualmente de una cadena de texto. |
|`'/^\+\d{2,3} \d{3} \d{3} \d{4}$/'` | Está expresión regular verifica que un número de telefono tenga una estructura adecuada `+01 111 111 1111`. |
|`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}` | Esta expresión regular verifica que un correo electrónico tenga una estructura correcta y válida. |
|`/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-=_+{};:,<.>]).{8,20}$/` | Esta expresión regular verifica que una contraseña sea segura con al menos, una letra mayúscula, un número, un símbolo, al menos 8 caracteres y menos de 20 caracteres. |

## ¿Cómo trabajar con expresiones regulares en PHP?

Existen diferentes formas de trabajar con expresiones regulares en php, este lenguaje nos ofrece varios **métodos** que nos permiten trabajar con expresiones regulares veremos algunos de ellos a continuación.

## Método preg_match()

El método [preg_match](https://www.php.net/manual/es/function.preg-match.php) realiza una comparación entre una expresión regular y una cadena de texto y retorna la primera coincidencia.

```php
$patron = "/PRUEBA/i";
$texto = "Este texto es una prueba";

$resultado = preg_match(
    $patron, // parámetro con la expresión regular
    $texto, // parámetro con la cadena de texto a comparar
    $coincidencia, // array con la primera coincidencia encontrada
    PREG_OFFSET_CAPTURE, // parámetro que te permite acceder al índice donde encuentra la coincidencia
    $indice_inicial = 0 // parámetro que te indica el índice desde el cual empieza a buscar
);

echo $resultado; // (output) 1
print_r($coincidencia[0]);
```
> (output) de la variable `$coincidencia[0]` 
```php
Array([0] =>
  Array
  (
    [0] => prueba  // valor
    [1] => 18 // indice del valor en el array
  )
)
```

> Cómo se muestra en el ejemplo este método puede recibir varios parámetros pero no todos son obligatorios solo el primero y el segundo parámetro son obligatorios los demás son opcionales.

En este ejemplo la función **preg_match** retorna un `1` si encuentra una coincidencia con el texto o retorna `0` en el caso de lo contrario, este valor se guarda el la variable `$resultado`. La variable `$coincidencia` es un array que guarda la primera coincidencia que encuentra.

Otro ejemplo en el que podemos hacer uso del método **preg_match** es para verificar un correo electrónico.

```php
$patron = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
$correo = "ejemplo@email.com";

if (preg_match($patron, $correo)) {
    echo("El correo electrónico es válido");
} else {
    echo("El correo electrónico es invalido");
};
```

> En este ejemplo verificamos si un correo electrónico es válido, si el correo electrónico coincide con el patrón de la **expresión regular** entonces entra en la estructura condicional de lo contrario significa que el correo electrónico no es válido.

Otro caso en el que podemos usar el método **preg_match** es para verificar un número telefónico.

```php
$patron = '/^\+\d{2,3} \d{3} \d{3} \d{4}$/';
$número = "+01 111 111 1111";

if (preg_match($patron, $número)) {
    echo "El número telefónico es válido";
} else {
    echo "El número telefónico es invalido";
};
```

> Si el número de teléfono cumple con el **patrón** `+00 000 000 0000` entonces entra en la estructura condicional, de lo contrario significa que el número es invalido. De está forma podemos tener control y trabajar solo con los números que coinciden con el patrón que deseamos.

## Método preg_match_all()

El método [preg_match_all](https://www.php.net/manual/es/function.preg-match-all.php) realiza una comparación global entre un patron de expresión regular y una cadena de texto y luego retorna todas las coincidencias.

```php
$patron = "/\b(?![0-9]+\b)\p{L}+\b/ui"; // Patron para busca palabras
$cadena = "Hola mundo, éste es un ejemplo 1234.";

$resultado = preg_match_all(
    $patron, // parámetro con la expresión regular
    $cadena, // parámetro con la cadena de texto a comparar
    $coincidencias, // array con todas las coincidencias encontradas
    PREG_OFFSET_CAPTURE, // parámetro que te permite acceder al índice donde encuentra las coincidencias
    $indice_inicial = 0 // parámetro que indica el índice desde el cual empieza a buscar
);

print_r($resultado); // (output) 6 / número de coincidencias encontradas
print_r($coincidencias[0]);

```
> (output) de la variable `$coincidencias[0]` 
```php
Array
(
    [0] => Array([0] => Hola [1] => 0)
    [1] => Array([0] => este [1] => 6)
    [2] => Array([0] => es [1] => 11)
    [3] => Array([0] => un [1] => 14)
    [4] => Array([0] => ejemplo [1] => 17)
)
```

> Cómo vemos en este ejemplo este método también puede recibir varios parámetros pero solo los dos primero son obligatorios los demás son opcionales.

En este ejemplo el método **preg_match_all** retorna la cantidad de elementos que coinciden con el patrón de **expresiones regulares** que se guarda en la variable `$resultado`. Por otro lado, todas las coincidencias que encuentra las guarda en la variable `$coincidencias` junto con el indice donde las encuentra.

Otro ejemplo donde podemos usar el método **preg_match_all** es para buscar etiquetas HTML en una cadena de texto.

```php
$texto = "<h1>Prueba</h1><p>Este es un párrafo de prueba.</p><img src='imagen.jpg'/>";
$patron = "/<(\w+)[^>]*>/"; // Busca todas las etiquetas HTML de apertura

preg_match_all($patron, $texto, $coincidencias);

$etiquetas = $coincidencias[0];
print_r($etiquetas);
```
> (output) de la variable `$etiquetas` 
```php
Array
 (
   [0] => <h1>
   [1] => <p> 
   [2] => <img src='imagen.jpg'/>
 )
```

En este ejemplo usamos el método **preg_match_all** para buscar etiquetas de apertura HTML en una cadena de texto. El array con las etiquetas se guarda en la variable `$etiquetas`.

## Método preg_replace()

El método [preg_replace](https://www.php.net/manual/es/function.preg-replace.php) sustituye un patrón de caracteres en una cadena de texto por el valor que deseas asignarle.

```php
$cadena_texto = "El color favorito de alex es el azul.";
$patron = "/alex/i";
$reemplazo = "tom";

$resultado = preg_replace(
    $patron, // parámetro con la expresión regular
    $reemplazo, // parámetro con el texto de reemplazo
    $cadena_texto, // parámetro con la cadena de texto a reemplazar
    $limite = -1 // cantidad de elementos que se deben reemplazar
);

echo $resultado; // (output) El color favorito de tom es el azul.
```

Este método puede recibir hasta cuatro parámetros aunque solo tres de ellos son requeridos, el cuarto parámetro es opcional y representa la cantidad de elementos que se deben reemplazar, por defecto tiene el valor `-1` lo que significa que cambia todos los elementos que coincidan con el patrón proporcionado.

En este ejemplo el método realiza el cambio y guarda el texto actualizado en la variable `$resultado`;

Otra forma en la que podemos usar el método **preg_replace** es para reemplazar una etiqueta HTML por otra en una cadena de texto.

```php
$cadena = "<p>Ejemplo uno</p>, <p>ejemplo dos</p>, <p>ejemplo tres</p>";
$patron = "/<p>(.*?)<\/p>/";
$reemplazo = "<span>$1</span>";

$resultado = preg_replace($patron, $reemplazo, $cadena, $limite = 2);
echo $resultado; // (output) "<span>Ejemplo uno/span>, <span>ejemplo dos</span>, <p>ejemplo dos</p>"
```


En este ejemplo usamos el método **preg_replace** para reemplazar las etiquetas `<p>` en una cadena de texto por una etiqueta `<span>`.

El texto actualizado con las etiquetas `<span>` se guardan en la variable `$resultado` y al pasarle la variable `$limite = 2` cambia solo las dos primeras coincidencias que encuentra.

## Conclusión

En resumen las expresiones regulares nos permiten definir patrones de coincidencia y aplicar estos patrones a cadenas de texto para verificar, extraer o modificar los caracteres que coinciden con este patrón.

Es importante resaltar que existen más formas y métodos para trabajar con expresiones regulares que las mencionadas en este artículo. Este artículo ofrece [ejemplos sencillos y fáciles de entender de expresiones regulares](https://4geeks.com/es/lesson/regex-tutorial-regular-expression-ejemplo) para que te familiarices con el concepto de expresiones regulares en PHP. Si deseas conocer mas sobre temas relacionados como las [expresiones regulares en Javascript](https://4geeks.com/es/lesson/expresiones-regulares-javascript) u otros puedes buscarlos en el [Blog de 4Geeks](https://4geeks.com/).

