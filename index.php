<?php
    if(isset($_COOKIE['session']))
    {
        $session = md5(getenv("REMOTE_ADDR"));
        $local = $_COOKIE['session'];    
        if($session == $local)
        {
            header("Location: home.php");
        }
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <?php include('./res/common/head.php'); ?>
        <script src="js/index.js"></script>
    </head>
    <body>
        <link rel="stylesheet" href="css/index.css">
        <div class="container-fluid">
            <div class="jumbotron justify-content-between mob">
                <div class="row">
                    <div class="col mob2"><img src="css/logo.png" style="width:30vw"></div>
                    <div class="col btnicon">
                        <a href="auth/register.php"><button class="btn btn-danger">Registrar</button></a>
                        <a href="auth/login.php"><button class="btn btn-success">Login</button></a>
                    </div>
                </div>
            </div>
            <img src="css/logo.png" class="indexlogo">
            <p style="font-size: medium; text-align: justify">A rede social Centrão está para trazer uma inovação à escola técnica de SP, Fernando Prestes uma experiência imerciva e profunda entre colegas de classe e também facilitar a venda de camisetas da escola.</p>
        </div>
    </body>
</html>
