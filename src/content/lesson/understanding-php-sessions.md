---
title: "Understanding PHP Sessions"
subtitle: "Are you confortable with server sessions ? Don't worry, after reading this lesson you will be a master in PHP sessions"
cover: "https://ucarecdn.com/980ce2e0-b73e-4019-8e97-3510e3028e10/"
textColor: "white"
date: "2018-11-14"
tags: ["PHP"]
status: "draft"

---

## Server Sessions
***

Until today, everything we code in PHP runs one time when we call the PHP file: variables are born, are used and die during the same page refresh.  If I refresh the website again it will start all over again.

If we want some variables to stay living for the next website refresh, we can use cookies or sessions, but we are here today to talk about sessions.

A session is an old concept.   It is not only used in back-end web development.   When you login your computer, you start a new session; everything you do during that session will be saved, and the next time you login to your computer, everything will be just how you left it.

The cool thing about sessions in PHP is that they allow you to save information on the server for hours or even days.  They are the only way to have non-stateless applications: applications that can live for more than one single page refresh.

## How do we Start a Session?
***

When you want to start either a new or a previously created session, you have to type session_start(); in your PHP file.  This causes PHP to read the user’s session id and load the data into the RAM memory.  Once loaded, it is accessible via the $_SESSION super global array.  From there, you can modify the contents of $_SESSION.

```php{numberLines: true}
//start the session 
session_start();

//IF $_SESSION['user'] has not been set, i set it to a value 
if(!isset($_SESSION['user']))
{
    $_SESSION['user'] = array(
        "id" => 1,
        "username" => "alesanchezr"
    );
}

//We are be able to use $_SESSION['user'] whenever we want, the value will stay even if we reload the website.
```

## Using the Session Variables
***

Now that the session is available, we can assume that the session variables are available as well.  You can work with them the same way you would use any other simple variable.

**For Example:**  If we are implementing a Shopping Cart, we can store the list of products on a$_SESSION[‘products’] array.  If the user adds a new product, we just add it to the array.  We can print the list anytime.

```php{numberLines: true}
//start the session always before using any $_SESSION variable 
session_start();
if(!isset($_SESSION['products'])) $_SESSION['products'] = array();
else
{
     //we can count the number of products 
    $totalProducts = count($_SESSION['products']);
    echo "You have $totalProducts in your session";

     //we can add new products to the sopping cart session/ 
    $newProduct = new Product();
    array_push($_SESSION['products'],$newProduct);

     //We can do whatever we want with the products array!! 
}
```

## Closing the Session
***


Closing the Session
It is good practice to close the session once you have finished updating the $_SESSION array.  This will force PHP to save everything  (just like the COMMIT in the database or in GIT).

Don’t worry!  You can reopen the session whenever you want – either in the current or in the next page reload.  If you want to fully destroy the session, you can call session_destroy();

```php
session_start();
if(!isset($_SESSION["website_hits"])) $_SESSION["website_hits"] = 0;
$_SESSION["website_hits"] ++;
echo "You've visited this page " . $_SESSION["website_hits"] . " time(s).";
session_close();
```


[[info]]
| :point_up: Note: session_start() cannot be called once an output has started.  A warning will be displayed, and it is possible that the session could be lost.  If you are seeing the error "Cannot send session cache limiter," check to make sure that no output is going to the browser.  A common problem is an unwanted space or tab at the outsize of the PHP tags.

## Destroying the Session
***

A good example of destroying a session is the typical "sign out" from any website.  That will destroy all the session variables (cleaning any and all evidence that the user was ever there).

To destroy a session, all you need to do is the following:

```php
// resets the session data for the rest of the runtime 
$_SESSION = array();
// sends as Set-Cookie to invalidate the session cookie 
if (isset($_COOKIE[session_name()])) { 
    $params = session_get_cookie_params();
    setcookie(session_name(), '', 1, $params['path'], $params['domain'], $params['secure'], isset($params['httponly']));
}
session_destroy();
```

## Security Considerations
***

Sessions seem like a pretty simple concept, and they are.  But, you have to take this:

### Session Time-Outs

Timing-out sessions is a very important action if you are dealing with users logged into your website or application.  If a user logs into your site in an Internet café and then leaves the café without logging out, how do you stop the next user on that computer from still having access to the previous user’s session?  Well, for that, you can use the following code:

```php{numberLines: true}
session_start();
// set time-out period (in seconds) 
$inactive = 600;

// check to see if $_SESSION["timeout"] is set 
if (isset($_SESSION["timeout"])) {
     // calculate the session's "time to live" 
    $sessionTTL = time() - $_SESSION["timeout"];
    if ($sessionTTL > $inactive) {
        session_destroy();
        header("Location: /logout.php");
    }
}

$_SESSION["timeout"] = time();

```

[[info]]
| :point_up: The code ensures that if there is no activity for more than 600 seconds (10 minutes), the request is redirected to the logout page which would successfully logout the user.

### Regenerate the Session ID

The session_regenerate_id() function creates a new unique-ID to represent the current user’s session.  This should be regenerated anytime important authentication action is performed – such as logging in or updating user profile data.  Giving each session a new ID after such actions makes your application more secure by reducing the risk of a specific attack known as "Session Hijacking."

```php
session_start();

if ($_POST["username"] == "admin" && $_POST["password"] == sha1("password")) {
    $_SESSION["authorized"] = true;
    session_regenerate_id();
}
```

### Destroying Sessions

As previously mentioned, you should use session_destroy() once you don’t need to use the session anymore.  This prevents attackers from hijacking the stale session (again, increasing the session-related security of your website).
