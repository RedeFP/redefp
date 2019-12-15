<!DOCTYPE html>
<html>
    <head>
        <?php include("./res/common/head.php"); ?>
        <script src="js/loadEvento.js"></script>
    </head>
    <body>
        <?php include("./res/common/nav.php"); ?>
        <main role="main" class="container-fluid" style="margin-top: 71px; padding-top: 10px;">
			<div class="jumbotron" style="background-color: #e30613;">
				<h1 class="display-6" id="event-name">Nome do Evento</h1>
				<h3 id="event-date">25/12/2011 23:59</h3>
				<h4 id="place-name">ABC</h6>
				<h5 id="place-address">ABC</h5>
				<h6 id="event-owner">ABC</h6>
			</div>
			<?php include("res/common/evento-nav.php") ?>
			<div class="jumbotron" style="background-color: #00ff00;">
				<h2>Ingressos</h2>
				<h4 id="event-price">R$15,00 + Um quilo de alimento</h4>
			</div>
			<div class="jumbotron" style="background-color: #7fffd4;">
				<h1>Avisos de administradores</h1>
				<div class="row" id="import1">
				</div>
			</div>
			<div class="jumbotron" style="background-color: #DA70D6;">
				<h2>Quem vai?</h2>
				<div class="row" id="import2">
				</div>
			</div>
			<div class="jumbotron" style="background-color: #FF69B4;">
				<h2>Quem quer ir?</h2>
				<div class="row" id="import3">
				</div>
			</div>
    	</main>
    <?php include("./res/common/modal.php"); ?>
    </body>
</html>
