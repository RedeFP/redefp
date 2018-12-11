<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
        <title>RedeFP - Uma rede social escolar</title>
        <link rel="stylesheet" href="../css/index.css">
        <link rel="icon" href="css/logo.png">
        <script src="../js/login.js"></script>
        <script src="../../vendor/jquery-3.3.1.min.js"></script>
        <script src="../../vendor/popper.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>
</head>
<body style="background: lightgrey">
    <div class="container-fluid">
        <div class="jumbotron" style="padding: 5px;">
            <a href="../"><img src="../css/logo.png" width="320" height="180"></a>
        </div>
        <div id="error"></div>
        <div class="container" style="background: #ffffff;padding-top: 10px;padding-bottom: 10px;border-radius: 5px;width: 50vh;">
            <div class="form-group row">
                <label for="inputRA" class="col-sm-2 col-form-label">RA</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" maxlength="6" size="7" name="inputRA" id="inputRA" step="0" placeholder="RA">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Senha</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" placeholder="*****">
                </div>
            </div>
            <div class="col-sm-12" align="right">
                <input type="submit" onclick="Submit()" class="btn btn-success" value="Entrar"/>
            </div>
        </div>
    </div>
</body>
</html>