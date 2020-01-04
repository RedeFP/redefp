<!DOCTYPE html>
<html>
	<head>
		<?php include("./res/common/head.php"); ?>
		<script src="./js/loadEventoChat.js"></script>
	</head>
	<body>
		<?php include("./res/common/nav.php"); ?>
		<main class="container" role="main" style="margin-top: 71px; padding-top: 10px;">
		<div class="jumbotron" style="background-color: #e30613;">
			<h1 id="event-name" class="display-4">Nome do Evento</h1>
			<h3 id="event-date">25/12/2018 23:59</h3>
			<h4 id="place-name">Quadra da ETEC Fernando Prestes</h6>
			<h5 id="place-address">Rua Natal, 340 - Jd. Paulistano - Sorocaba</h5>
			<h6 id="event-owner">Organizado por: Unidade 016</h6>
		</div>
		<?php include("./res/common/evento-nav.php"); ?>
			<h1 >Publicações dos administradores</h1>
			<div class="container-fluid" id="import1">
			</div>
			<br>
			<h1>Publicações dos membros</h1>
			<div class="container-fluid" id="import2">
			</div>
			<h1>Galeria de fotos</h1>
			<p>Implementar isto, usando o Lightbox (disponivel em vendor/lightbox)</p>
		</main>
		<?php include("./res/common/modal.php"); ?>
	</body>
</html>
