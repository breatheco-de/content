---
title: "Entendiendo las sesiones de PHP"
subtitle: "¿Estás cómodo con las sesiones del servidor? No te preocupes, después de leer esta lección, serás un maestro en las sesiones de PHP."
cover: "https://ucarecdn.com/980ce2e0-b73e-4019-8e97-3510e3028e10/"
textColor: "white"
date: "2018-11-14"
tags: ["fale"]
---

## Sesiones de Servidor
***

Hasta hoy, todo lo que codificamos en PHP se ejecuta una vez cuando llamamos al archivo PHP: las variables nacen, se usan y mueren durante la misma actualización de la página. Si actualizo de nuevo el sitio web, volverá a empezar.

Si queremos que algunas variables sigan viviendo para la próxima actualización del sitio web, podemos usar cookies o sesiones, pero estamos aquí hoy para hablar sobre las sesiones.

Una sesión es un concepto antiguo. No solo se utiliza en el desarrollo web de back-end. Cuando inicia sesión en su computadora, inicia una nueva sesión; todo lo que haga durante esa sesión se guardará, y la próxima vez que inicie sesión en su computadora, todo será exactamente como lo dejó.

Lo bueno de las sesiones en PHP es que le permiten guardar información en el servidor durante horas o incluso días. Son la única forma de tener aplicaciones sin estado: aplicaciones que pueden vivir durante más de una actualización de una sola página.

## ¿Cómo Empezamos una Sesión?
***

Cuando desee iniciar una sesión nueva o una sesión creada anteriormente, debe escribir session_start(); en su archivo PHP. Esto hace que PHP lea el ID de sesión del usuario y cargue los datos en la memoria RAM. Una vez cargado, es accesible a través de la matriz súper global $_SESSION. Desde allí, puede modificar los contenidos de $_SESSION.

```php{numberLines: true}
//inicia la sesión
session_start();

//IF $_SESSION['user'] no se ha establecido, lo establezco en un valor
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

Ahora que la sesión está disponible, podemos asumir que las variables de la sesión también están disponibles. Puede trabajar con ellos de la misma manera que usaría cualquier otra variable simple.

**Por Ejemplo:**  Si estamos implementando un Carrito de compras, podemos almacenar la lista de productos en una matriz $ _SESSION [‘productos’]. Si el usuario agrega un nuevo producto, simplemente lo agregamos a la matriz. Podemos imprimir la lista en cualquier momento.

```php{numberLines: true}
//inicia la sesión siempre antes de usar cualquier variable $ _SESSION
session_start();
if(!isset($_SESSION['products'])) $_SESSION['products'] = array();
else
{
     //Podemos contar el número de productos. 
    $totalProducts = count($_SESSION['products']);
    echo "You have $totalProducts in your session";

     //Podemos agregar nuevos productos a la sesión del carrito de compras /
    $newProduct = new Product();
    array_push($_SESSION['products'],$newProduct);

     //Podemos hacer lo que queramos con la gama de productos !!
}
```

## Cerrando la Sesion
***


Cierre de la sesión Es una buena práctica cerrar la sesión una vez que hayas terminado de actualizar la matriz $ _SESSION. Esto obligará a PHP a guardar todo (al igual que el COMMIT en la base de datos o en GIT).

No te preocupes Puede volver a abrir la sesión cuando lo desee, ya sea en la recarga de la página actual o en la siguiente. Si deseas destruir completamente la sesión, puede llamar a session_destroy ();

```php
session_start();
if(!isset($_SESSION["website_hits"])) $_SESSION["website_hits"] = 0;
$_SESSION["website_hits"] ++;
echo "You've visited this page " . $_SESSION["website_hits"] . " time(s).";
session_close();
```


[[info]]
| :point_up: Nota: session_start() no se puede llamar una vez que se ha iniciado una salida. Se mostrará una advertencia y es posible que la sesión se pierda. Si ve el error "No se puede enviar el limitador de caché de sesión", verifique que no haya una salida en el navegador. Un problema común es un espacio o pestaña no deseado en el tamaño exagerado de las etiquetas PHP.

## Destruyendo la Sesión
***

Un buen ejemplo de cómo destruir una sesión es el típico "cierre de sesión" de cualquier sitio web. Eso destruirá todas las variables de la sesión (limpiando cualquier evidencia de que el usuario haya estado allí).

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

### Tiempos de espera de sesión

Las sesiones de tiempo de espera son una acción muy importante si trata con usuarios que han iniciado sesión en su sitio web o aplicación. Si un usuario inicia sesión en su sitio en un cibercafé y luego sale de la cafetería sin cerrar sesión, ¿cómo puede evitar que el siguiente usuario en esa computadora siga teniendo acceso a la sesión del usuario anterior? Bueno, para eso, puedes usar el siguiente código:

```php{numberLines: true}
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

[[info]]
| :point_up: El código garantiza que si no hay actividad durante más de 600 segundos (10 minutos), la solicitud se redirige a la página de cierre de sesión, lo que cerraría con éxito la sesión del usuario.

### Regenera la ID de sesión

La función session_regenerate_id () crea una nueva ID única para representar la sesión del usuario actual. Esto se debe volver a generar en cualquier momento que se realice una acción de autenticación importante - como iniciar sesión o actualizar los datos del perfil de usuario. Darle a cada sesión una nueva identificación después de tales acciones hace que su aplicación sea más segura al reducir el riesgo de un ataque específico conocido como "secuestro de sesión".

```php
session_start();

if ($_POST["username"] == "admin" && $_POST["password"] == sha1("password")) {
    $_SESSION["authorized"] = true;
    session_regenerate_id();
}
```

### Sesiones de Destrucción

Como se mencionó anteriormente, debe usar session_destroy () una vez que ya no necesite usar la sesión. Esto evita que los atacantes secuestren la sesión obsoleta (de nuevo, aumenta la seguridad relacionada con la sesión de su sitio web).
