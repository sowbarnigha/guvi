<?php

require 'useractions.php';
session_start();


if(isset($_SESSION['loggedin'])){
    $user = fetch_user_by_email($_SESSION['email']);

?>    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
    </head>
    <body>
        <h1 style="color:blue;text-align: center;background-color:bisque;">Welcome <?=($user['gender']==='Male')?"Mr. ":"Ms. "?><?=$user['first_name']." ".$user['last_name']?></h1>
        <footer><a href="/guvi/logout.php">Logout</a></footer>
    </body>
    </html>
<?php
}

?>




