<!DOCTYPE html>
<html>
<head>
    <?php require("../res/bd.php"); ?>
    <meta charset="UTF-8">
    <title>RedeFP - Uma rede social escolar</title>
    <link rel="stylesheet" href="<?php echo URL; ?>css/index.css">
    <link rel="icon" href="<?php echo URL; ?>css/logo.png">
    <script src="<?php echo URL; ?>vendor/jquery-3.3.1.min.js"></script>
    <script src="<?php echo URL; ?>vendor/popper.js"></script>
    <script src="<?php echo URL; ?>vendor/bootstrap/js/bootstrap.js"></script>
    <script src="<?php echo URL; ?>vendor/bootstrap/js/bootstrap.bundle.js"></script>
    <script src="<?php echo URL; ?>js/libGET.js"></script>
    <link rel="stylesheet" href="<?php echo URL; ?>vendor/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="<?php echo URL; ?>vendor/bootstrap/css/bootstrap-grid.css">
    <link rel="stylesheet" href="<?php echo URL; ?>vendor/bootstrap/css/bootstrap-reboot.css">
    <script src="<?php echo URL; ?>vendor/mobile-detect.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="<?php echo URL; ?>js/prplogin.js"></script>
    <script>
        $(function(){
            $("#type").prop('selectedIndex',1);
            $("#type").change(function(){
                console.log($("#type").val());
                if($("#type").val() == 1) {
                    console.log("Selecionou aluno");
                    window.location.href = "../auth/login.php"
                }
            });
        });
    </script>
</head>
<body style="background: lightgrey">
    <div class="container-fluid" style="padding: 0px;">
        <div class="jumbotron">
            <a href="../"><img src="../css/logo.png" class="logicon" style="max-width: 250px !important"></a>
        </div>
        <div class="alert alert-warning alert-dismissible fade show" role="alert" id="box-alert">
            <strong id="alert"></strong>
            <button type="button" class="close" aria-label="Close" onclick="HideAlert()">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="container containerlog">
        <div class="form-group row">
            <label for="exampleFormControlSelect1" class="col-3 col-form-label text-right">Login como</label>
            <div class="col-9">
                <select class="form-control" id="type">
                <option value="1" checked="checked">Aluno</option>
                <option value="2">Professor</option>
                </select>
            </div>
        </div>
        <form id="form1" method="POST">
            <div class="form-group row">
                <label for="inputRA" class="col-3 col-form-label text-right">E-mail</label>
                <div class="col-sm-9">
                    <input type="email" class="form-control" maxlength="100" name="inputEmail" id="inputEmail" step="0" placeholder="@etec.sp.gov.br">
                    <small id="emailHelp" class="form-text text-muted">Utilize o E-mail provido pela Secretaria Acadêmica.</small>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-3 col-form-label text-right">Senha</label>
                <div class="col-sm-9">
                    <input type="password" class="form-control" id="inputPassword" placeholder="*****">
                </div>
            </div>
            <div class="col" style="text-align: center">
                <input type="button" class="btn btn-success" value="Entrar" onclick="Submit()" />
            </div>
            <div class="col" style="text-align: center">
            <small id="emailHelp" class="form-text text-muted"><a href="register.php">Perdeu sua senha? (Registros até pré-lançamento)</a></small>
            </div>
        </div>
    </form>
    </div>
</body>
</html>