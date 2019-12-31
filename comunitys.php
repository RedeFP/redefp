<!DOCTYPE html>
<html>
    <head>
        <?php include("./res/common/head.php"); ?>
        <script src="js/loadComunitys.js"></script>
    </head>
    <body>
        <?php include("./res/common/nav.php");?>
        <main role="main" class="container-fluid" style="margin-top: 71px; padding-top: 10px;">
            <div class="container">
                <h2 class='title-center' >Comunidades que você participa</h2>
                <div class="row comunity-list-group" id="import1">
                    <!-- AJAX result here -->
                </div>
            </div>
            <div class="container">
                <h2 class='title-center'>Comunidades Novas</h2>
                <div class="row comunity-list-group" id="import2">
                    <!-- AJAX result here -->
                </div>
            </div>
        </main>
        <?php include("./res/common/modal.php"); ?>
    </body>
</html>