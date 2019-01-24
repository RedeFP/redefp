<!DOCTYPE html>
<html>
    <head>
		<?php include("./res/common/head.php"); ?>
        <script src="js/navmob.js"></script>
        <script src="js/profile_contact.js"></script>
    </head>
    <body>
        <?php include("res/common/nav.php"); ?>
        <main role="main" class="container" style="margin-top: 71px; padding-top: 10px;">
            <div class="row">
                <div class="col-3" height="80vh" style="background: salmon; padding-bottom: 10px;">
                    <div class="user-pic-div">
                        <img src="css/user.png" class="user-pic">
                    </div>
                    <div>
                        <center><b><a href="#" id="aluno_id">Fulano</a></b><br />
                        <a id="aluno_apelido" href="profile.php?id=" style="color: black;">@fulano</a></center>
                    </div>
                    <div class="user-items" style="margin-top: 20px;">
                        <ul class="list-group">
                            <a href="profile.php" id="l1"><li class="list-group-item list-group-item-hover-danger" style="margin-top:2px; ">Publicações</li></a>
                            <a href="profile-pictures.php" id="l2"><li class="list-group-item list-group-item-hover-success" style="margin-top:2px; ">Fotos</li></a>
                            <a href="profile-comunity.php" id="l3"><li class="list-group-item list-group-item-hover-warning" style="margin-top: 2px;">Comunidades</li></a>
                            <a href="profile-contact.php" id="l4"><li class="list-group-item list-group-item-primary" style="margin-top:2px; ">Contato</li></a>
                        </ul>
                    </div>
                </div>
                <div class="col-9">
                    <div class="row bk-lgrey">
                        <div class="col-12">
                            <div style="vertical-align: middle;" class="form-control-plaintext">Email Institucional: <a href="malito:fulano@etec.sp.gov.br" id="mail">fulano@etec.sp.gov.br</a></div>
                            <div class="form-control-plaintext" style="vertical-align: middle;">Telefone: <a href="tel:00 00000-0000" id="tel">00 00000-0000</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>
</html>