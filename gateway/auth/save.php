<?php

$get = filter_input(INPUT_GET,'id');

include('../../res/bd.php');
$session = md5(getenv("REMOTE_ADDR"));
    setcookie("session", $session,time()+(86400*30),"/");
    header("Location: ../../home.php");