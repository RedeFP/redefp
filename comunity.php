<!DOCTYPE html>
<html>
    <head>
    	<?php include("./res/common/head.php"); ?>
        <script src="js/comunity-home.js"></script>
    </head>
    <?php include("res/common/nav.php"); ?>
        <main role="main" class="container-fluid" style="margin-top: 71px; padding-top: 10px;">
            <div class="container">
                <?php include("./res/common/comunity-nav.php"); ?>
                <a onclick="montaModalAddPost()"><button class="btn btn-primary"  style="width:100% !important"><i class="fas fa-plus"></i>&nbsp;Adicionar nova publicação</button></a>
                <div id="import"></div>
                </div>
            </div>
        </main> 
        <?php include("res/common/modal.php");?>
        <div style="display: none;">
    </body>
</html>