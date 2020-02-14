<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="<?php echo URL;?>home.php">
            <img src="<?php echo URL; ?>css/logo.png" width="80" height="45"></a>
            <button class="navbar-toggler navbar-toggler-right float-xs-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="<?php echo URL; ?>home.php">Inicio <span class="sr-only"> Current </span></a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="<?php echo URL; ?>profile.php">Perfil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?php echo URL; ?>comunitys.php">Comunidades</a>
                </li>
                <li class="nav-item">
                	<a class="nav-link" href="<?php echo URL; ?>diary.php">Agenda</a>
                </li>
                <li class="nav-item disabled">
                	<a class="nav-link disabled" href="<?php echo URL; ?>directs.php">Mensagens</a>
                </li>
                <li class="nav-item dropdown disabled">
                    <a class="nav-link disabled dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lojinhas</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                    <a class="dropdown-item" href="#">Oficiais da ETEC</a>
                    <a class="dropdown-item" href="#">Turmas</a>
                    <a class="dropdown-item" href="#">Artesanato</a>
                    </div>
                </li>
                </ul>
            </div>
            <div class="col" style="color: white;">
            <a href="<?php echo URL; ?>gateway/auth/logout.php" class="nav-link btn btn-danger" style="max-width: max-content; margin-left: auto">Logout</a>
            </div>
        </nav>