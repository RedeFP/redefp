<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include("../res/common/prphead.php"); ?>
    </head>
    <body>
        <?php include("../res/common/prp-nav.php"); ?>
        <main role="main" class="container" style="margin-top: 71px; padding-top: 10px;">
            <?php 
                $id = $_COOKIE[''];
                mysqli_query($bd,"SELECT * FROM notes WHERE idprofessores = '$id'");





            ?>
        </main>
        <?php include("../res/common/modal.php"); ?>
    </body>
</html>
