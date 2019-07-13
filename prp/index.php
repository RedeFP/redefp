<?php
/*    if(isset($_COOKIE['session']))
    {
        $session = md5(getenv("REMOTE_ADDR"));
        $local = $_COOKIE['session_prp'];    
        if($session == $local)
        {
            header("Location: home.php");
        }
    } */
?>
<!DOCTYPE html>
<html>
    <head>
        <?php include('../res/common/prphead.php'); ?>
    </head>
    <body>
        <div class="container-fluid">
            <div class="jumbotron justify-content-between">
                <div class="row">
                    <div class="col-8"><img src="../css/logo.png" width="320" height="180"></div>
                    <div class="col-4" align="right" style="line-height: 180px;padding-right: 30px;">
                        <a href="../prp/login.php"><button class="btn btn-success">Login</button></a>
                    </div>
                </div>
            </div>
            <center><img src="../css/logo.png" width="800" height="450"></center>
            <p style="text-indent: 2em; font-size: xx-large">Você atualmente está no sistema PRP do projeto, onde você poderá ver as anotações de suas reuniões, conversar com os outros professores e gerenciar os pedidos da secretaria.</p>
        </div>
    </body>
</html>