## Expresiones regulares PHP

```php

// Validar un correo electrónico con expresiones regulares en PHP
$patron = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
$correo = "ejemplo@email.com";

if (preg_match($patron, $correo)) {
    echo("El correo electrónico es válido");
} else {
    echo("El correo electrónico es invalido");
};

// Modificar una cadena de texto con expresiones regulares en PHP
$cadena_texto = "La fecha actual es 23/09/2022";
$patron = "/[0-9]{2}\\/[0-9]{2}\\/[0-9]{4}/";

$texto_modificado = preg_replace($patron, "DD/MM/YYYY", $cadena_texto);
echo($texto_modificado); // (putput) "La fecha actual es DD/MM/YYYY"

// Seleccionar elementos de una cadena de texto con expresiones regulares en PHP
$mensaje = "Hola, ¿cómo estás?";
if (preg_match_all("/a|á|A|Á/", $mensaje, $result)) {
    print_r($result[0]); // (output) Array([0] => a [1] => á)
};

```

  

## ¿Qué es una expresión regular en PHP?

Las expresiones regulares en PHP nos permiten crear patrones de coincidencia para verificar si una cadena (o parte de ella) coincide con un patrón de texto específico también nos permite modificar los elementos de la cadena que cumplen este patrón.

En este artículo veremos algunos ejemplos de expresiones regulares y las funciones que puedes usar para trabajar con ellas en PHP.

## ¿Cómo trabajar con expresiones regulares en PHP?

### Método preg_match()

El método [preg_match](php.net/manual/es/function.preg-match.php) realiza una comparación entre una expresión regular y el texto proporcionado.

```php
$resultado = preg_match("/PRUEBA/i", "Este texto es una prueba", $coincidencia, PREG_OFFSET_CAPTURE, $indice_inicial = 0);

echo $resultado; // (output) 1
print_r($coincidencia); // (output) Array([0] => Array([0] => prueba [1] => 18))
```

Este método puede recibir vários parámetros el primero es una expresión regular, el segundo es el texto que quieres comparar, el tercero es un array que guarda la coincidencia encontrada como primer valor, el cuarto parámetro puede recibir varios valores si le pasas el valor **PREG_OFFSET_CAPTURE** te devuelve el índice donde encontró la coincidencia como segundo valor en el array **$coincidencia** y el quinto es el índice desde donde quieres que empiece a buscar la coincidencia que por defecto es 0.

Ejemplos de uso del método `preg_match()` en PHP.

Validar un correo electrónico

```php
$patron = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
$correo = "ejemplo@email.com";

if (preg_match($patron, $correo)) {
    echo("El correo electrónico es válido");
} else {
    echo("El correo electrónico es invalido");
};
```

  

Validar un número de teléfono

```php
$patron = '/^\+\d{2,3} \d{3} \d{3} \d{4}$/';

if (preg_match($patron, "+01 111 111 1111")) {
    echo "El número telefónico es válido";
} else {
    echo "El número telefónico es invalido";
};
```

Extraer información de una cadena de texto

```php
$cadena = "Mi fecha de nacimiento: 15-08-1990";
$patron = "/Fecha de nacimiento: (\d{2}-\d{2}-\d{4})/i";

if (preg_match($patron , $cadena, $coincidencia)) {
    print_r($coincidencia); // (output) Array([0] => fecha de nacimiento: 15-08-1990 [1] => 15-08-1990)
    
    $fechaNacimiento = $coincidencia[1];
    echo "La fecha de nacimiento es: " . $fechaNacimiento; // (putput) La fecha de nacimiento es: 15-08-1990
} else {
    echo "No se encontró una fecha de nacimiento en la cadena.";
}

```

### Método preg_match_all()

El método [preg_match_all](https://www.php.net/manual/es/function.preg-match-all.php) realiza una comparación global entre una expresión regular y una cadena de texto.

```php
$patron = "/\b\w+\b/"; // Patron para busca palabras
$cadena = "Hola mundo, este es un ejemplo.";

if (preg_match_all($patron, $cadena, $coincidencias, PREG_OFFSET_CAPTURE, $indice_inicial = 0)) {
    print_r($coincidencias[0]);
}

// La variable $coincidencias[0] se vería de la siguiente forma

Array
(
  [0] => Array([0] => Hola [1] => 0)
  [1] => Array([0] => este [1] => 6)
  [2] => Array([0] => es [1] => 11)
  [3] => Array([0] => un [1] => 14)
  [4] => Array([0] => ejemplo [1] => 17)
)
```

Este método al igual que el método **preg_match** también recibe varios parámetros, el primero es la expresión regular de comparación, el segundo es el texto, el tercero es un array que contiene todas las coincidencias, el cuarto es un parámetro que puede recibir varios valores si le pasas el valor **PREG_OFFSET_CAPTURE** en el array **$coincidencias** cada una de las coincidencias aparecerá en un array donde el primer valor es la coincidencia y el segundo es el índice, y el ultimo parámetro es el índice desde donde quieres que empiece a buscar las coincidencias que por defecto es 0.

Ejemplos de uso del método `preg_match_all()` en PHP.

Extraer palabras de una cadena de texto que cumplan con un patrón específico.

```php
// Extraer todos los usuarios de un comentario en una red social

$comentario = "¡Hola @usuario1! Gracias por tu comentario. Estoy de acuerdo con lo que dices, @usuario2.";
$patron = "/@(\w+)/";

preg_match_all($patron, $comentario, $coincidencias);

$usuariosMencionados = $coincidencias[0];
print_r($usuariosMencionados );

// Variable $usuariosMencionados (output)

Array
(
  [0] => @usuario1
  [2] => @usuario2
)
```

Extraer las etiquetas HTML de una cadena de texto.

```php
$texto = "<h1>Prueba</h1><p>Este es un párrafo de prueba.</p><img src='imagen.jpg'/>";

$patron = "/<(\w+)[^>]*>/"; // Busca todas las etiquetas HTML de apertura
preg_match_all($patron, $texto, $coincidencias);

$etiquetas = $coincidencias[0];
print_r($etiquetas);

// Variable $etiquetas (output)

Array
(
  [0] => <h1>
  [1] => <p>
  [2] => <img src='imagen.jpg'/>
)
```

#### Método preg_replace()

El método [preg_replace](https://www.php.net/manual/es/function.preg-replace.php) sustituye patrones de caracteres en una cadena de texto por el valor que deseas asignarle.

```php
$cadena_texto = "El color favorito de alex es el azul.";
$patron = "/alex/i";
$reemplazo = "tom";

$resultado = preg_replace($patron, $reemplazo, $cadena_texto, $limite = -1);
echo $resultado; // (output) El color favorito de tom es el azul.
```

El método **preg_replace** recibe hasta cuatro parámetros, el primero es el patrón de expresiones regulares, el segundo es el texto de reemplazo que deseas aplicar, el tercero es la cadena de texto en la que quieres realizar el cambio y el último parámetro es la cantidad de elementos que deseas reemplazar si le pasas un **-1** entonces reemplazará todos los caracteres que coincidan con el patrón pero si le pasas por ejemplo el número 2 entonces reemplazará solo los dos primeros caracteres que coincidan con el patrón de la expresione regular.

Ejemplos de uso del método `preg_replace()` en PHP.

Reemplazar palabras o caracteres de una cadena de texto.

```php
// En este ejemplo se reemplaza el guión entre los números por un espacio vacío

$cadena_texto = "El número telefónico es +74-230-340-7645.";
$patron = "/-/";
$reemplazo = " ";

$resultado = preg_replace($patron, $reemplazo, $cadena_texto);
echo $resultado; // (output) El número telefónico es +74 230 340 7645.
```

Reemplazar etiquetas HTML en una cadena de texto.

```php
// En este ejemplo se reemplaza la etiqueta <p> por la etiqueta <span>

$cadena = "<p>Ejemplo uno</p>, <p>ejemplo dos</p>";
$patron = "/<p>(.*?)<\/p>/";
$reemplazo = "<span>$1</span>";

$resultado = preg_replace($patron, $reemplazo, $cadena);
echo $resultado; // (output) <span>Ejemplo uno/span>, <span>ejemplo dos</span>
```

En resumen las expresiones regulares nos permiten definir patrones de coincidencia y aplicar estos patrones a cadenas de texto, si la cadena de texto (o parte de ella) coincide con el patrón podemos acceder a todos los caracteres que cumplen con este patrón o modificar estos elementos.

Es importante resaltar que existen más formas de trabajar con expresiones regulares que las vistas en este artículo. Este artículo ofrece ejemplos sencillos y básicos sobre expresiones regulares en PHP.
