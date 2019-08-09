<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="home.php">
            <img src="../css/logo.png" width="80" height="45"></a>
            <button class="navbar-toggler navbar-toggler-right float-xs-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="home.php"><i class="fas fa-home"></i>&nbsp;Inicio <span class="sr-only"> Current </span></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="notes.php"><i class="fas fa-sticky-note"></i>&nbsp;Anotações</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="calendar.php"><i class="far fa-calendar-alt"></i>&nbsp;Calendário</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../reservations/"><i class="fas fa-map-marked-alt"></i>&nbsp;Agendamentos</a>
                    </li>
                </ul>
            </div>
            <div class="col-2" style="color: white;">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <a class="btn btn-warning align-middle" href="profiles.php" style="line-height: 32px; "><i class="fas fa-user-circle"></i></a>
                    <a href="../gateway/auth/logout.php" class="nav-link btn btn-danger" style="line-height: 28px; max-width: 100px; width: max-content; margin-left: auto">Logout</a>
                    <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        &nbsp;
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                            <a class="dropdown-item" href="<?php echo URL;?>nsa">Modo Secretária</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>