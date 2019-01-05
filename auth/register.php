<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
        <title>RedeFP - Uma rede social escolar</title>
        <link rel="stylesheet" href="../css/index.css">
        <link rel="icon" href="css/logo.png">
        <script src="../vendor/jquery-3.3.1.min.js"></script>
        <script src="../vendor/popper.js"></script>
        <script src="../js/register.js"></script>
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
        
        
    
    <div class="form-group row">
        <label for="inputNome" class="col-sm-2 col-form-label">Nome</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" maxlength="100" size="40" name="inputNome" id="inputNome" placeholder="SEU NOME" autocomplete="name">
        </div>
    </div>
    <div class="form-group row">
        <label for="inputApelido" class="col-sm-2 col-form-label">Apelido</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="inputApelido" placeholder="Apelido">
        </div>
    </div>
    <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="000@mail.com" >
    </div>
    </div>
    <div class="form-group row">
    <label for="inputEmail2" class="col-sm-2 col-form-label">Email Institucional</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail2" placeholder="000@etec.sp.gov.br">
    </div>
    </div>
    <div class="form-group row">
        <label for="inputTelefone" class="col-sm-2 col-form-label">Telefone</label>
        <div class="col-10">
            <input type="tel" class="form-control" id="inputTelefone" placeholder="(00)00000-0000">
        </div>
    </div>
    <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Senha</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" placeholder="*****">
        </div>
    </div>
    <div class="form-group row">
        <label for="inputRA" class="col-sm-2 col-form-label">RA</label>
        <div class="col-sm-10">
            <input type="number" class="form-control" maxlength="6" size="7" name="inputRA" id="inputRA" step="0" placeholder="RA">
        </div>
    </div>
    <div class="form-row align-items-center row">
    <div class="col-sm-2 my-1">
      <label class="my-1 mr-2" for="inlineFormCustomSelect1">Curso</label>
    </div>
    <div class="col-sm-10">    
      <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelect1">
        <option selected>Escolha...</option>
      </select>
    </div>
    </div>
    <div class="form-row align-items-center row">
      <label class="col-sm-2" for="inlineFormCustomSelect2">Período</label>
      <div class="col-sm-10">
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelect2">
          <option selected>Escolha...</option>
          <option value="1">1º ANO/SEMESTRE</option>
          <option value="2">2º ANO/SEMESTRE</option>
          <option value="3">3º ANO/SEMESTRE</option>
        </select>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-10">&nbsp;</div>
        <div class="col-sm-2" align='right'>
            <button class="btn btn-success" onclick="Submit();">Registrar</button>
        </div>
    </div>
    </div>
    </body>
    </html>