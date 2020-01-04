<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
        <title>RedeFP - Uma rede social escolar</title>
        <link rel="stylesheet" href="../css/index.css">
        <link rel="icon" href="css/logo.png">
        <script src="../vendor/jquery-3.3.1.min.js"></script>
        <script src="../vendor/popper.js"></script>
        <script src="../vendor/inputmask.bundle.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>
</head>
<body style="background: lightgrey">
    <div class="container-fluid">
        <div class="jumbotron" style="padding: 5px;">
            <a href="../"><img src="../css/logo.png" width="320" height="180"></a>
        </div>
        <?php
            if(isset($_GET['error']))
            {
                $error = $_GET['error'];
                echo "<div class='alert alert-danger'><strong>Erro</strong>: $error </div>";
            }
        ?>
        
<div style=" background: #eee; padding: 10px 10px; border-radius: 20px;width: 70%; max-width: 550px; margin-left: auto; margin-right: auto;">
    <div class="containerreg" style="">
    <form method="POST" action="../gateway/auth/sendPRPRegister.php">
        <div class="form-group row">
            <label for="inputNome" class="col-4 col-form-label">Nome</label>
            <div class="col-8">
                <input type="text" class="form-control" maxlength="100" size="40" name="inputNome" id="inputNome" placeholder="SEU NOME" autocomplete="name">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail2" class="col-4 col-form-label">Email Institucional</label>
            <div class="col-8">
                <input type="email" class="form-control" name="inputEmail2" id="inputEmail2" placeholder="000@etec.sp.gov.br">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-4 col-form-label">Senha</label>
            <div class="col-8">
                <input type="password" class="form-control" name="inputPassword" id="inputPassword" placeholder="*****">
            </div>
        </div>
        <div class="row">
            <div class="col" align='right'>
                <input type="submit" class="btn btn-success" onclick="Submit();" value="Registrar">
            </div>
        </div>
    </div>
        </div>
        </div>
    </body>
    </html>