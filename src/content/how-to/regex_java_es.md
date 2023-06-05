Las expresiones regulares (regex) en Java son sumamente útiles cuando queremos extraer cierta información de un texto por medio de patrones específicos de búsqueda. Al ser aplicados, estos patrones coincidirán con uno o más caracteres y nos darán como resultado únicamente la información que buscabamos.  

Una expresion regular puede ser un caracter único como por ejemplo la letra `"a"` o puede ser mucho más complicado, como en este regex; `"^([a-zA-Z0-9._%-]+)@([a-zA-Z0-9.-]+).([a-zA-Z]{2,6})$"` en el que se definen una serie de reglas para encontrar direcciones de email.
Para poder aplicar una expresión regular en Java necesitamos escencialmente de 2 partes:

- Patrón: Este será el conjunto reglas con los cuales la función de búsqueda se guiará para poder obtener el resultado esperado. Por ejemplo este patrón buscará unicamente letras de la `a` a la `z` en minúscula o mayúscula: `myPattern = "[a-zA-Z]"`
    
- Cadena de texto: Este será cualquier texto en el cual queremos realizar la búsqueda. Debe de ser de tipo `String`.

## Lista de metacaracteres para expresiones regulares en Java
  
Las expresiones regulares permiten el uso de ciertos caracteres especiales o "metacaracteres" que cuentan con un significado predefinido. Estos metacaracteres nos ayudan a simplificar la expresión regular.    
Por ejemplo; en vez de utilizar la expresión `[a-zA-Z0-9_]` para indicar la busqueda de letras minúsculas y mayúsculas, dígitos del `0` al `9` y `_`, simplemente utilizamos la expresión `\\w` que contiene las mismas reglas.  
A continuación podemos encontrar un listado de los metacaracteres más utilizados en Java:  

|Caracter | Descripción |
|:------:|--------------|
| `.`	| Cualquier caracter. |
| `\\d` | Dígitos. Equivalenta a `[0-9]` |
| `\\D` |	Caracteres que no sean dígitos. Equivalente a `[^0-9]` |
| `\\s` |	Espacio en blanco. Equivalente a `[\t\n\x0B\f\r]` que incluye, espacio, tab, nueva linea, tab vertical, salto de página y retorno de carrete. |
| `\\S` |	Caracteres que no sean espacio en blanco. Equivalente a `[^\s]`. |
| `\\w` |	Palabras o nombres de usuario. Equivalente a `[a-zA-Z_0-9]`. |
| `\\W`	| Caracteres que no sean palabras. Equivalente a `[^\w]`. |

## Expresiones regulares en Java utilizando la biblioteca java.util.regex

Para poder aplicar expresiones regulares con la librería `java.util.regex`, primero, debemos utilizar el método `compile()` de la clase `Pattern` para registrar la expresión regular, luego con ayuda del método `matcher()` registramos el texto en el que realizaremos la búsqueda y finalmente utilizando la clase, `Matcher`, aplicaremos el método `find()` que realizará un scan en el texto previamente registrado, permitiendo encontrar multiples coincidencias.

Debido a que el método `find()` va escaneando el texto de principio a fin en busca de coincidencias, debemos utilizar un ciclo `while` si queremos obtener cada una de estas coincidencias, de lo contrario unicamente obtendremos la primera coincidencia.
La clase `Matcher` también nos permite obtener el texto que ha coincidido con la búsqueda, por medio del método `group()`, así como el índice de inicio y final de la úbicación de este texto encontrado por medio de los métodos `start()` y `end()`.

A continuación podemos ver un ejemplo en el cuál hacemos uso de todos estos métodos para obtener la información que buscamos a través de las expresiones regulares.

```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
  public static void main(String[] args) {
    Pattern myPattern = Pattern.compile("\\w+");
    Matcher myMatcher = myPattern.matcher("=((4_geeks %&Academy$·$%$·$·");
    while (myMatcher.find()) {
    	System.out.println("Encontrado: " + myMatcher.group() + " en: " + myMatcher.start() + "," + myMatcher.end());
    }
  }
}
// Consola:   
// Encontrado: 4_geeks en: 3,10
// Encontrado: Academy en: 13,20

```

Al aplicar la expresión regular `\\w` al texto, encontraremos nombres de usuario, o bien, palabras con minúsculas o mayúsculas que pueden contener numeros del `0` al `9` y guión bajo `_` descartando cualquier otro caracter especial y el símbolo `+` indicará que la palabra puede tener 1 o más caracteres.

El método `compile()` también acepta una serie de "banderas", que pueden ser útiles en caso de que quisieramos habilitar o ignorar algunos detalles del patrón que vamos a utilizar.

| Banderas | Descripción |
| --- | --- |
| Pattern.CASE_INSENSITIVE | Habilita la distinción entre mayúsculas y minúsculas. |
| Pattern.COMMENTS | Los espacios en blanco y comentarios empezando con # son ignorados |
| Pattern.MULTILINE | Una expresión puede coincidir en multiples lineas |
| Pattern.DOTALL | La expresión "." coincidirá con cualquier caracter incluyendo caracteres de terminación de linea. |
| Pattern.UNIX_LINES | Unicamente la expresión '\\n' será reconocida como final de linea. |

## Expresiones regulares en Java utilizando el método matches()

El método `matches()` es inherente de la clase String, por lo que la variable a la que vamos a aplicarle este método debe de ser una instancia de esta clase.

Algo peculiar de este método es que la búsqueda del patrón unicamente será verdadera si la expresión regular coincide con el texto completo. Dicho en otras palabras, cuando escribimos la expresión regular, debemos de indicar explícitamente si el texto debería contener únicamente los caracteres que buscamos o si podría incluir texto antes o después de ellos.
Por ejemplo:

```java
public class Main {
    public static void main(String[] args) {
        String myString = "   %usuario1usuario2$%&";
        String myPattern1 =  "\\s+"; 
        Boolean matchExists1 = myString.matches(myPattern1);
        String myPattern2 =  "\\s+.*";
        Boolean matchExists2 = myString.matches(myPattern2);

        System.out.println("Se han encontrado palabras: " + matchExists1);
        System.out.println("Se han encontrado palabras: " + matchExists2);
  }
}
// Consola:		
// Se han encontrado palabras: false
// Se han encontrado palabras: true

```

- La expresión regular `\\s` nos sirve para encontrar espacios en blanco, al agregarle el símbolo `+` le indicamos que el espacio en blanco puede ser de cualquier longitud.
- La expresión regular `.*` indica que puede haber cualquier cosa después del espacio en blanco que buscamos.

Ahora bien, podemos notar que si utilizamos únicamente `\\s+` sin las expresión `.*` , no podremos encontrar el espacio en blanco, ya que el texto completo: `usuario_1$%&`, tiene caracteres que no están incluidos en las reglas de `\\s+` y por ende no es exactamente igual a lo que buscamos.

## Ejemplos de expresiones regulares en Java:

### Encontrar nombres de usuario

```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
  public static void main(String[] args) {
    Pattern myPattern = Pattern.compile("\\w+");
    Matcher myMatcher = myPattern.matcher("=((4_geeks %&Academy$·$%$·$·");
    while (myMatcher.find()) {
    	System.out.println("Encontrado: " + myMatcher.group());
    }
  }
}
// Consola:   
// Encontrado: 4_geeks
// Encontrado: Academy

```

La expresión regular `\\w+` nos sirve para encontrar nombres de usuario, o bien, palabras con minúsculas o mayúsculas que pueden contener numeros del `0` al `9` y guión bajo `_`.

### Encontrar números con punto decimal

```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
  public static void main(String[] args) {
    Pattern myPattern = Pattern.compile("(\\d*)[.,](\\d{2})");
    Matcher myMatcher = myPattern.matcher("=(-(444.333333_geeks %&");
    while (myMatcher.find()) {
    	System.out.println("Encontrado: " + myMatcher.group());
    }
  }
}
// Consola: Encontrado: 444.33

```

En este ejemplo utilizamos la expresión regular `\\d` que sirve para identificar dígitos del `0` al `9`.

Para poder encontrar específicamente los números que tienen punto decimal, primero debemos indicar que buscamos un `.` o `,` entre los dígitos, utilizando la expresión `[.,]`.  
También podemos indicar de que tamaño serán los dígitos antes y después del punto decimal, en el caso del primer dígito agregamos `*` para indicar que puede ser de cualquier tamaño, mientras que en el segundo dígito agregamos `{2}` para indicar que únicamente queremos tomar los primeros 2 caracteres después del punto.  
Es muy importante tomar en cuenta que para unir 2 expresiones diferentes debemos de escribir cada expresión dentro de paréntesis `()`.  
  
### Encontrar direcciones de email

```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
  public static void main(String[] args) {
    Pattern myPattern = Pattern.compile("([a-zA-Z0-9._%-]+)@([a-zA-Z0-9.-]+).([a-zA-Z]{2,6})");
    Matcher myMatcher = myPattern.matcher("=ssss- ***çhola@4geeks.com#(+++) %&");
    while (myMatcher.find()) {
    	System.out.println("Encontrado: " + myMatcher.group());
    }
  }
}
// Consola: Encontrado: hola@4geeks.com 

```

La gran mayoría de direcciones de email se componen esencialmente de 3 textos unidos por el caracter `@` y por el `.` que contiene el nombre de dominio. Por lo cual nuestro patrón también tendrá 3 partes:

- La primera `([a-zA-Z0-9._%-]+)` indica que permitirá cualquier letra minúscula o mayúscula, cualquier dígito del `0` al `9` y luego vemos los caracteres: `._%-` que también son válidos en esta parte del email, finalmente cerramos el `]` y agregamos el caracter `+` para indicar que la longitud de esta parte puede ser mayor a 1.
- La segunda parte `([a-zA-Z0-9.-]+)` nuevamente permite cualquier letra minúscula o mayúscula, cualquier dígito del `0` al `9` pero ahora únicamente permitiremos los caracteres `.-` que puede contener el nombre de dominio antes del punto y finalmente también agregamos el caracter `+` para indicar que la longitud de esta parte puede ser mayor a 1.
- La tercera parte `([a-zA-Z]{2,6})` se refiere al texto que va despues del punto en el nombre de dominio, por lo que vamos a permitir únicamente letras minusculas o mayúsculas y al cerrar el `]` agregamos la expresión `{2,6}` para indicar que este texto debe tener al menos 2 caracteres y no puede ser mayor de 6 caracteres.

Como hemos visto anterioremente cada una de estas expresiones individuales debe de ir dentro de parentesis `()`.  
  
## Casos de uso de las expresiones regulares en Java

Algunos de los casos de uso más comunes para las expresiones regulares en Java son:

- Validar una dirección de correo electrónico.
- Validar un número telefónico.
- Encontrar urls en un texto.
- Validar si un texto contiene caracteres especiales.
- Validar las características de una contraseña, por ejemplo, que contenga números, mayúsculas, minusculas y caracteres especiales.

## Conclusión

Las expresiones regulares son extremadamente útiles para extraer información de cualquier texto buscando una o más coincidencias de un patrón de búsqueda específico. Para poder utilizar de forma correcta estas expresiones es necesario conocer las distintas reglas que podemos aplicar dependiendo de cada caso de uso y así sacar el mayor provecho de esta herramienta.
