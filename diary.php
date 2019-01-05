<!DOCTYPE html>
<html>
<head>
<?php include("./res/common/head.php"); ?>
    <script src="js/loadAgendaAluno.js"></script>
</head>
<body>
    <?php include("./res/common/nav.php");?>
    <main role="main" class="container" style="margin-top: 71px; padding-top: 10px;">
        <div class="row">
            <div class="col-12" id="import1">
                <h1>Eventinhos que persigo</h1>
                <div class="row">
                    
                    <div class="col-3 evento " style=" width: calc(99% - 2px)">
                        <div class="row">
                            <div class="col-12" style="background-color: lightblue; border-radius: 10px; padding: 2px">
                                <center>
                                    <h6>Oscar 2018</h6>
                                    <img src="./uploads/oscar2018capa.jpg" width="100%" style="margin-bottom: 5px">
                                    <br>
                                    <button class="btn btn-primary" onclick="window.location = 'evento.php'">Detalhes</button>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 evento " style=" width: calc(99% - 2px)">
                        <div class="row">
                            <div class="col-12" style="background-color: lightblue; border-radius: 10px; padding: 2px">
                                <center>
                                    <h6>Oscar 2018</h6>
                                    <img src="./uploads/oscar2018capa.jpg" width="100%" style="margin-bottom: 5px">
                                    <br>
                                    <button class="btn btn-primary" onclick="window.location = 'evento.php'">Detalhes</button>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 evento " style=" width: calc(99% - 2px)">
                        <div class="row">
                            <div class="col-12" style="background-color: lightblue; border-radius: 10px; padding: 2px">
                                <center>
                                    <h6>Oscar 2018</h6>
                                    <img src="./uploads/oscar2018capa.jpg" width="100%" style="margin-bottom: 5px">
                                    <br>
                                    <button class="btn btn-primary" onclick="window.location = 'evento.php'">Detalhes</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" id="import2">
                <h1>Eventinhos ao meu redor</h1>
            </div>
        </div>
    </main>
    <?php include("./res/common/modal.php");?>
</body>
</html>