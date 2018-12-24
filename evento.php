<!DOCTYPE html>
<html>
    <head>
        <?php include("./res/common/head.php"); ?>
        <script src="js/loadEvento.js"></script>
    </head>
    <body>
        <?php include("./res/common/nav.php"); ?>
        <main role="main" class="container" style="margin-top: 71px; padding-top: 10px;">
	<div class="jumbotron" style="background-color: #e30613;">
		<h1 class="display-4" id="event-name">Nome do Evento</h1>
		<h3 id="event-date">25/12/2018 23:59</h3>
		<h4 id="place-name">Quadra da ETEC Fernando Prestes</h6>
		<h5 id="place-address">Rua Natal, 340 - Jd. Paulistano - Sorocaba</h5>
		<h6 id="event-owner">Organizado por: Unidade 016</h6>
	</div>
	<?php include("./res/common/evento-nav.php"); ?>
	<div class="jumbotron" style="background-color: #00ff00;">
		<h2>Ingressos</h2>
		<h4>R$15,00 + Um quilo de alimento</h4>
	</div>
	<div class="jumbotron" style="background-color: #7fffd4;">
		<h1>Avisos de administradores</h1>
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-header">Informação</div>
					<div class="card-body">
						<h5 class="card-title">Local Confirmado</h5>
						<p class="card-text">O local escolhido para o evento foi a quadra esportiva da nossa escola</p>
						<a href="info.php?i=20" class="btn btn-primary">Ver detalhes</a>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card">
					<div class="card-header">Informação</div>
					<div class="card-body">
						<h5 class="card-title">Preço dos ingressos</h5>
						<p class="card-text">Decidimos colocar este preço para que todos possam participar do nosso evento</p>
						<a href="info.php?i=21" class="btn btn-primary">Ver detalhes</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="jumbotron" style="background-color: #DA70D6;">
		<h2>Quem vai?</h2>
		<div class="row">
			<div class="col">
				<div class="card" style="width:18rem">
					<img class="card-img-top" src="./photo/IMG201811152232.jpeg" alt="Imagem">
					<div class="card-body">
						<h5 class="card-title">Jeovana Kitagaki</h5>
						<a class="btn btn-primary" href="profile.php?id=18">Ver perfil</a>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card" style="width:18rem">
					<img class="card-img-top" src="./photo/IMG201810141520.jpg" alt="Imagem">
					<div class="card-body">
						<h5 class="card-title">Alberto Benedito de Morais Trevisan</h5>
						<a class="btn btn-primary" href="profile.php?id=15">Ver perfil</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="jumbotron" style="background-color: #FF69B4;">
		<h2>Quem quer ir?</h2>
		<div class="row">
			<div class="col">
				<div class="card" style="width:18rem">
					<img class="card-img-top" src="./photo/IMG201810141943.jpg" alt="Imagem">
					<div class="card-body">
						<h5 class="card-title">Laura Silva Dias</h5>
						<a class="btn btn-primary" href="profile.php?id=16">Ver perfil</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    </main>
    <?php include("./res/common/modal.php"); ?>
    </body>
</html>
