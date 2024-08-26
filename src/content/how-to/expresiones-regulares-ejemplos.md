## Expresiones Regulares Ejemplos

Las expresiones regulares (regex), nos permiten buscar, verificar y modificar una patrón específico en una cadena de texto, estas estructura son muy utilizadas en la programación ya sea para buscar una palabra específica en una cadena de texto o más comúnmente en formularios para acergurar que los usuarios ingresen la información con una estructura correcta. 

A continuación veremos algunos ejemplos prácticos de expresiones regulares que puedes usar en tu día a día cómo desarrollador con ejemplos en dos de los lenguajes de programación más relevantes actualmente **JavaScript** y **Python**, pero antes de eso veamos algunas de las reglas más básicas de las expresiones regulares.

|Regex  | Descripción                                                                                                                                                     |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`.`    | El punto en una expresión regular se utiliza para representar cualquier carácter, excepto un salto de línea.                                                    |
|`^`    | El símbolo (caret) en una expresión regular se utiliza para indicar el principio de una línea o cadena de texto.                                                |
|`$`    | El símbolo de dólar en una expresión regular se utiliza para representar el final de una línea o cadena de texto.                                               |
|`?`    | Este símbolo en expresiones regulares significa que el carácter anterior puede ser opcional.                                                                    |
|`*`    | El asterisco en una expresión regular se utiliza cómo un cuantificador que indica que el elemento que lo precede puede aparecer cero o más veces en una cadena. |
|`+`    | El símbolo (más) en una expresión regular se utiliza cómo un cuantificador para indicar que el elemento o elementos que le preceden deben aparecer al menos una o más veces en el texto. |
|`\`    | Esta expresión se utiliza para dar un significado especial a ciertos caracteres que, de otro modo serían interpretados de manera literal, por ejemplo si quieres buscar un punto en una cadena de texto debes usar la sintaxis `\.` ya que si colocas solo el punto lo tomara como una sintaxis de expresión regular.                                |
|`()`   | Los paréntesis se utilizan para agrupar partes de una expresión regular en un solo grupo.                                                                       |
|`[ ]`  | Los corchetes en una expresión regular se utilizan para especificar qué caracteres son válidos en una cadena de texto, por ejemplo esta sintaxis `[a-z]` solo buscaría palabras de la **a** a la **z** excluyendo cualquier otro símbolo o número. |
|`[^ ]` | Esta expresión coincide con cualquier carácter o caracteres que NO sean los que están dentro de los corchetes, por ejemplo esta sintaxis `[^0-9]` buscaría cualquier símbolo que no sea un número. |
|`{3}`  | Esta expresión regular indica que el elemento o conjunto de elementos anteriores a el deben aparecer exactamente tres veces para que haya una coincidencia.     |
|`{1,3}`| Esta expresión regular indica que el elemento o grupo de elementos anteriores a el deben aparecer mínimo una vez y máximo tres veces.                           |

## Ejemplos de uso

### 1. Validar la sintaxis de un email

Uno de los usos más comunes para las expresiones regulares es la validación de información, en el siguiente ejemplo veremos como validar que un email tenga una sintaxis adecuada y que siga los estándares de uso.

#### Código Javascript 
```js
const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const correoElectronico = "ejemplo@email.com";

if (correoElectronico.match(patron)) {
  console.log("El correo electrónico es válido");
} else {
  console.log("La sintaxis del correo electrónico es incorrecta");
}
```

#### Código Python
```py
import re

patron = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
correoElectronico = "ejemplo@email.com"

if re.match(patron, correoElectronico):
    print("El correo electrónico es válido")
else:
    print("La sintaxis del correo electrónico es incorrecta")
```

En este ejemplo utilizamos una expresión regular y una estructura de código condicional `if else` para validar que un correo electrónico tenga una sintaxis adecuada, en Javascript simplemente utilizamos el método `match()` y le pasamos cómo parámetro el pátron de expresiones regulares que deseamos validar, en Python primero necesitamos importar el módulo `re` para poder hacer uso del método `match()`, este método recibe dos parámetros, el primero es el pátron de expresiones regulares y el segundo es la cadena de texto que deseamos validar.

### 2. Encontrar un link en una cadena

Otro uso bastante común para las expresiones regulares es la búsqueda de patrones específicos dentro de cadenas de texto, en el siguiente ejemplo veremos cómo buscar un link en una cadena de texto.

#### Código Javascript
```js
const patron = /https:\/\/\S+|www.\S+/g;
const texto = "Esta es la página de google: https://www.google.com y esta es la de youtube: www.youtube.com";
const links = texto.match(patron);

if (links.length) {
  console.log(links);
} else {
  console.log("No se encontraron enlaces válidos en el texto");
}
```
> output código javascript:
```bash
[ 'https://www.google.com', 'www.youtube.com' ]
```

#### Código Python
```py
import re

patron = r"https?://\S+|www\.\S+"
texto = "Esta es la página de google: https://www.google.com y esta es la de youtube: www.youtube.com"
links = re.findall(patron, texto)

if len(links):
    print(links)  
else:
    print("No se encontraron enlaces válidos en el texto")
```
> output código python:
```bash
['https://www.google.com', 'www.youtube.com']
```

En este ejemplo hacemos uso de una expresión regular para encontrar todos los links dentro de una cadena de texto, para esto en Javascript hacemos uso del método `match()`, mientras que en Python debemos hacer uso del método `findall()`. En los dos ejemplos haciendo uso de una estructura condicional `if else` y verificamos si el array que retornan los métodos tiene elementos dentro, de ser así imprimimos el array en la consola, de lo contrario mostramos en consola un mensaje que indica que no se encontraron links validos.

### 3. Encontrar palabras en una cadena (no case sensitive)

Para encontrar palabras no case sensitive en una cadena de texto es decir palabras que pueden tener letras tanto mayúsculas cómo minúsculas, existen algunas diferencias dependiendo del lenguaje de programación como se muestra en los siguientes ejemplos.

#### Código Javascript
```js
const patron = /ejemplo/gi;
const texto = "Este es un ejemplo, ESTE ES OTRO EJEMPLO y este es un último Ejemplo";
const palabras = texto.match(patron);

if (palabras.length) {
  console.log(palabras); // 
} else {
  console.log("No se encontraron palabras que coincidan con el texto proporcionado");
}
```
> output código javascript:
```bash
[ 'ejemplo', 'EJEMPLO', 'Ejemplo' ]
```

#### Código Python
```py
import re

patron = re.compile(r"ejemplo", re.IGNORECASE)
texto = "Este es un ejemplo, ESTE ES OTRO EJEMPLO y este es un último Ejemplo"
palabras = re.findall(patron, texto)

if len(palabras):
    print(palabras)  # ['ejemplo', 'EJEMPLO', 'Ejemplo']
else:
    print("No se encontraron palabras que coincidan con el texto proporcionado")
```
> output código python:
```bash
['ejemplo', 'EJEMPLO', 'Ejemplo']
```

Para encontrar palabras no case sensitive existen algunas diferencia entre Javascript y Python, en Javascript solo necesitas hacer uso de dos banderas al final de la expresión regular, la primera bandera es la `g` que le indica a la expresión regular que debe buscar en toda la cadena texto y la segunda bandera es la `i` que indica que la palabra que busca el pátron puede estar en mayúscula o en minúscula. Por otro lado, en Python necesitamos hacer uso del método `compile()` que recibe dos parámetros el primero es la expresión regular con la palabra que deseas buscar y el segundo parámetro es la bandera `re.IGNORECASE` que indica que la palabra puede contener mayúscula o minúsculas. 

## Conclusión

Las expresiones regulares son un tema profundo y extenso, y este artículo ha servido como una introducción a sus conceptos básicos. Sin embargo, es importante recordar que la maestría en expresiones regulares requiere práctica y dedicación. A medida que te adentres más en el mundo de la programación, descubrirás nuevas y creativas formas de aplicar las expresiones regulares para resolver problemas cada vez más complejos.

Te invitamos a explorar la amplia documentación disponible en línea, así como a participar en comunidades de desarrolladores donde podrás compartir tus conocimientos y aprender de otros. Recuerda que el aprendizaje es un proceso continuo, y las expresiones regulares son una herramienta que te acompañará a lo largo de tu carrera como programador.
