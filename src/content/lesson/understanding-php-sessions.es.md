---
title: "Entendiendo las sesiones de PHP"
subtitle: "¿Te sientes cómodo con las sesiones del servidor? No te preocupes, después de leer esta lección, serás un maestro en las sesiones de PHP."
cover_local: "../../assets/images/980ce2e0-b73e-4019-8e97-3510e3028e10.jpeg"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["PHP"]
status: "published"

---

## Sesiones de Servidor
***

Hasta hoy, todo lo que codificamos en PHP se ejecuta una vez cuando llamamos al archivo PHP: las variables nacen, se usan y mueren durante la misma actualización de la página. Si actualizo de nuevo el sitio web, volverá a empezar.

Si queremos que algunas variables sigan viviendo para la próxima actualización del sitio web, podemos usar cookies o sesiones, pero estamos aquí hoy para hablar sobre las sesiones.

Una sesión es un concepto antiguo. No solo se utiliza en el desarrollo web de back-end. Cuando inicias sesión en su computador, inicias una nueva sesión; todo lo que haces durante esa sesión se guardará, y la próxima vez que inicies sesión en tu computador, todo estará exactamente como lo dejaste.

Lo bueno de las sesiones en PHP es que le permiten guardar información en el servidor durante horas o incluso días. Son la única forma de tener aplicaciones sin estado: aplicaciones que pueden vivir durante más de una actualización de una sola página.

## ¿Cómo Empezamos una Sesión?
***

Cuando quieras iniciar una sesión nueva o una creada anteriormente, debes escribir session_start(); en tu archivo PHP. Esto hace que PHP lea el ID de sesión del usuario y cargue los datos en la memoria RAM. Una vez cargado, es accesible a través del array súper global $_SESSION. Desde allí, puedes modificar los contenidos de $_SESSION.

```php
//inicia la sesión
session_start();

//IF $_SESSION['user'] no se ha configurado, lo configuro con un valor
if(!isset($_SESSION['user']))
{
    $_SESSION['user'] = array(
        "id" => 1,
        "username" => "alesanchezr"
    );
}

//Podremos usar $ _SESSION ['usuario'] cuando queramos, el valor se mantendrá incluso si recargamos el sitio web.
```

## Uso de las variables de sesión
***

Ahora que la sesión está disponible, podemos asumir que las variables de la sesión también están disponibles. Puedes trabajar con ellas de la misma manera en que usarías cualquier otra variable simple.

**Por Ejemplo:**  Si estamos implementando un Carrito de compras, podemos almacenar la lista de productos en un array $ _SESSION [‘productos’]. Si el usuario agrega un nuevo producto, simplemente lo agregamos al array. Podemos imprimir la lista en cualquier momento.

```php
//inicia la sesión siempre antes de usar cualquier variable $ _SESSION
session_start();
if(!isset($_SESSION['products'])) $_SESSION['products'] = array();
else
{
     //Podemos contar la cantidad de productos. 
    $totalProducts = count($_SESSION['products']);
    echo "You have $totalProducts in your session";

     //Podemos agregar nuevos productos a la sesión del carrito de compras /
    $newProduct = new Product();
    array_push($_SESSION['products'],$newProduct);

     //Podemos hacer lo que queramos con el arrayde productos !!
}
```

## Cerrando la Sesion
***


Es una buena práctica cerrar la sesión una vez que hayas terminado de actualizar el array $ _SESSION. Esto obligará a PHP a guardar todo (al igual que el COMMIT en la base de datos o en GIT).

¡No te preocupes! Puedes volver a abrir la sesión cuando quieras, ya sea en la recarga de la página actual o en la siguiente. Si deseas destruir completamente la sesión, puede llamar a session_destroy ();

```php
session_start();
if(!isset($_SESSION["website_hits"])) $_SESSION["website_hits"] = 0;
$_SESSION["website_hits"] ++;
echo "You've visited this page " . $_SESSION["website_hits"] . " time(s).";
session_close();
```


> :point_up: Nota: session_start() no se puede llamar una vez que se ha iniciado una salida. Se mostrará una advertencia y es posible que la sesión se pierda. Si ves el error "No se puede enviar el limitador de caché de sesión", verifica que no haya una salida en el navegador. Un problema común es un espacio o pestaña no deseado en el tamaño exagerado de las etiquetas PHP.

## Destruyendo la Sesión
***

Un buen ejemplo de cómo destruir una sesión es el típico "sign out" o "cierre de sesión" de cualquier sitio web. Eso destruirá todas las variables de la sesión (limpiando cualquier evidencia de que el usuario haya estado allí).

Para destruir una sesión, todo lo que necesitas hacer es lo siguiente:

```php
// restablece los datos de la sesión para el resto del tiempo de ejecución
$_SESSION = array();
// envía como Set-Cookie para invalidar la cookie de sesión
if (isset($_COOKIE[session_name()])) { 
    $params = session_get_cookie_params();
    setcookie(session_name(), '', 1, $params['path'], $params['domain'], $params['secure'], isset($params['httponly']));
}
session_destroy();
```

## Consideraciones de Seguridad
***

Las sesiones parecen un concepto bastante simple, y lo son. Pero, tienes que tomar esto:

### Vigencia de la sesión

 Considerar cuando expira una sesión es muy importante si tratas con usuarios que han iniciado sesión en su sitio web o aplicación. Si un usuario inicia sesión en su sitio en un cibercafé y luego sale de la cafetería sin cerrar sesión, ¿cómo puedes evitar que el siguiente usuario en esa computadora siga teniendo acceso a la sesión del usuario anterior? Bueno, para eso, puedes usar el siguiente código:

```php
session_start();
// establecer el tiempo de espera (en segundos)
$inactive = 600;

// compruebe si $ _SESSION ["timeout"] está configurado
if (isset($_SESSION["timeout"])) {
     // Calcula el "tiempo de vida" de la sesión.
    $sessionTTL = time() - $_SESSION["timeout"];
    if ($sessionTTL > $inactive) {
        session_destroy();
        header("Location: /logout.php");
    }
}

$_SESSION["timeout"] = time();

```

> :point_up: El código garantiza que si no hay actividad durante más de 600 segundos (10 minutos), la solicitud se redirige a la página de cierre de sesión, lo que cerraría con éxito la sesión del usuario.

### Regenera la ID de sesión

La función session_regenerate_id () crea una nueva ID única para representar la sesión del usuario actual. Esto se debe volver a generar en cualquier momento que se realice una acción de autenticación importante - como iniciar sesión o actualizar los datos del perfil de usuario. Darle a cada sesión un nuevo ID después de tales acciones permite que tu aplicación sea más segura al reducir el riesgo de un ataque específico conocido como "secuestro de sesión".

```php
session_start();

if ($_POST["username"] == "admin" && $_POST["password"] == sha1("password")) {
    $_SESSION["authorized"] = true;
    session_regenerate_id();
}
```

### Destruir una sesión

Como se mencionó anteriormente, tienes que usar session_destroy () una vez que ya no necesites usar la sesión. Esto evita que los atacantes secuestren la sesión obsoleta (de nuevo, aumenta la seguridad relacionada con la sesión de su sitio web).
