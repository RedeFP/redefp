<?php
    //$bd = new mysqli('localhost','id6136795_admin','fernandotop2018','id6136795_redefp'); //00 Quando enviar pro servidor remova o //
    //$bd = new mysqli('localhost','root','root','id6136795_redefp'); //uWamp
    // $bd = new mysqli('localhost','root','','id6136795_redefp'); //Xampp
    //$bd = new mysqli('localhost','1126067','fernandotop2018','1126067'); //Netscape
    //$bd = new mysqli('localhost','juliano','123','id6136795_redefp'); //Servidor GCP
    $bd = new mysqli('localhost','alberto',123,'id6136795_redefp'); //Linux
    mysqli_set_charset($bd, 'utf8');
    require("config.php");