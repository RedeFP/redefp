<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf8">
        <?php require("../res/common/prphead.php"); ?>
        <script src="../js/prpcalendar.js"></script>
    </head>
    <body>
        <?php include("../res/common/prp-nav.php"); ?>
        <main role="main" class="container-fluid" style="margin-top: 71px; padding-top: 10px;">
            <center>
                <h1>Calendário</h1>
            </center>
            <div id="myCalendar"></div>
            <button class="btn btn-success" id="createNewEvent">Criar novo Evento</button>
        </main>
        <?php require("../res/common/modal.php");?>
        <div style="display: none;">
    </body>
</html>