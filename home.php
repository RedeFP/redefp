<!DOCTYPE html>
<html>
    <head>
    	<?php include("./res/common/head.php"); ?>
        <script src="js/home.js"></script>
    </head>
    <body>
    <?php include('./res/common/nav.php'); ?>
    <main role="main" class="container" style="margin-top: 37px; padding-top: 10px;">
        <div class="row">
            <div class="col-8 bk-grey" id="postline">
            </div>
            <div class="col-4 bk-grey" id="prodtud" style="height: calc(100vh - 82px); padding-bottom: 20px; ">
                <div class="row container-fluid bk-lgrey" id="lista_produtos">
                    <center style="width: 100%;">Últimos produtos</center>
                    <br />
                </div>
            </div>
        </div>
    </main>
    <?php include("res/common/modal.php");?>
        <div style="display: none;">
    </body>
</html>