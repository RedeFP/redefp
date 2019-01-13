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
    </head>
    <body>
        <div class="container-fluid">
            <div class="jumbotron justify-content-between">
                <div class="row">
                    <div class="col-8"><img src="css/logo.png" style="width:30vw"></div>
                    <div class="col-4" align="right" style="line-height: 180px;padding-right: 30px;">
                        <a href="auth/register.php"><button class="btn btn-danger">Registrar</button></a>
                        <a href="auth/login.php"><button class="btn btn-success">Login</button></a>
                    </div>
                </div>
            </div>
            <center><img src="css/logo.png" style="width:800;"></center>
            <p style="text-indent: 2em; font-size: xx-large">A rede social Centrão está para trazer uma inovação à escola técnica de SP, Fernando Prestes uma experiência imerciva e profunda entre colegas de classe e também facilitar a venda de camisetas da escola.</p>
        </div>
    </body>
</html>
