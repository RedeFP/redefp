<?php
	if(isset($_COOKIE['session']))
	{
		$session = md5(getenv("REMOTE_ADDR"));
		$local = $_COOKIE['session'];    
		if($session == $local)
		{
			header("Location: home.php");
		}
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<?php include('./res/common/head.php'); ?>
		<script src="js/index.js"></script>
		<link rel="stylesheet" href="css/index.css">
		<style>
			.footer {
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 60px;
				line-height: 58px;
				background-color: #f5f5f5;
			}
			.text-muted {
				color: black !important;
				font-size: small !important;
			}
		</style>
	</head>
	<body>
		<header style="margin-top: -24px;">
			<div class="row" style="max-height: 160px;margin-top: -24px;width:100%;background-color:#fff;margin-left: 0 !important;">
				<div class="col mob2"><img src="css/logo.png" style="width:30vw;max-width: 160px;"></div>
				<div class="col btnicon">
					<!-- <a href="auth/register.php"><button class="btn btn-danger">Registrar</button></a> -->
					<a href="auth/login.php"><button class="btn btn-success">Login</button></a>
				</div>
			</div>
		</header>
		<main role="main" class="container-fluid">
			<img src="css/logo.png" class="indexlogo">
			<p style="font-size: medium; text-align: justify">A rede social Centrão está para trazer uma inovação à escola técnica de SP, a ETEC Fernando Prestes, uma experiência imerciva e profunda entre colegas de classe. Onde todos poderão se conectar, compartilhar experiencias e até mesmo conhecer pessoas que nunca virão pelos corredores. Tudo isso de forma intuitiva e segura através de nosso webapp.</p>
		</main>
		<footer class="footer">
			<div class="container">
				<center><span class="text-muted">O software Centrão está sob licenciamento: <a href="LICENSE.md"><img src="css/MIT.png" style="width:30px"></a>. O código fonte está disponivel em <a href="https://github.com/d3cr1pt/redefp">GitHub</a>.</span></center>
			</div>
		</footer>
	</body>
</html>
