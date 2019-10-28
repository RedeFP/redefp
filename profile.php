<!DOCTYPE html>
<html>
    <head>
		<?php include("./res/common/head.php"); ?>
        <script src="js/navmob.js"></script>
        <script src="js/profile_post.js"></script>
    </head>
    <body>
        <?php include("res/common/nav.php"); ?>
        <main role="main" class="container" style="margin-top: 71px; padding-top: 10px;">
            <div class="row">
                <div class="col-4 profile-list">
                    <div class="user-pic-div">
                          <img src="css/user.png" class="user-pic">
                    </div>
                    <div>
                        <center><b><a href="#" id="aluno_id">Fulano</a></b><br />
                        <a id="aluno_apelido" href="profile.php?id=" style="color: black;">@fulano</a></center>
                    </div>
                    <div class="user-items" style="margin-top: 20px;">
                        <ul class="list-group">
                            <a href="profile.php" id="l1"><li class="list-group-item list-group-item-danger" style="margin-top:2px; ">Publicações</li></a>
                            <a href="profile-pictures.php" id="l2"><li class="list-group-item list-group-item-hover-success" style="margin-top:2px; " id="l3">Fotos</li></a>
                            <a href="profile-comunity.php" id="l3"><li class="list-group-item list-group-item-hover-warning" style="margin-top: 2px;">Comunidades</li></a>
                            <a href="profile-contact.php" id="l4"><li class="list-group-item list-group-item-hover-primary" style="margin-top:2px; ">Contato</li></a>
                        </ul>
                    </div>
                </div>
                <div class="col-8">
                    
                </div>
            </div>
        </main>
        <div class="modal fade" id="commentmodal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>
        <div style="display: none;">
    </body>
</html>