<!DOCTYPE html>
<html>
    <head>
		<?php include("./res/common/head.php"); ?>
        <script src="js/profile_picture.js"></script>
    </head>
    <body>
        <?php include("./res/common/nav.php"); ?>
        <main role="main" class="container" style="margin-top: 71px; padding-top: 10px;">
            <div class="row">
                <div class="col-3" height="80vh" style="background: salmon; padding-bottom: 10px;">
                    <div class="user-pic-div">
                        <img src="css/user.png" class="user-pic">
                    </div>
                    <div align="center">
                        <center><b><a href="#" id="aluno_id">Fulano</a></b><br />
                        <a id="aluno_apelido" href="profile.php?id=" style="color: black;">@fulano</a></center> 
                    </div>
                    <div class="user-items" style="margin-top: 20px;">
                        <ul class="list-group">
                            <a href="profile.php" id="l1"><li class="list-group-item list-group-item-hover-danger" style="margin-top:2px; ">Publicações</li></a>
                            <a href="profile-pictures.php" id="l2"><li class="list-group-item list-group-item-success" style="margin-top:2px; ">Fotos</li></a>
                            <a href="profile-comunity.php" id="l3"><li class="list-group-item list-group-item-hover-warning" style="margin-top: 2px;">Comunidades</li></a>
                            <a href="profile-contact.php" id="l4"><li class="list-group-item list-group-item-hover-primary" style="margin-top:2px; ">Contato</li></a>
                        </ul>
                    </div>
                </div>
                <div class="col-9">
                    <div class="row" id="import">
                    </div>
                </div>
            </div>
        </main>
    </body>
</html>