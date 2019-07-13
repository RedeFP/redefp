<?php
error_reporting(E_ALL);

//Obtem as informações as variaveis via method
$login = filter_input(INPUT_GET,'user', FILTER_SANITIZE_STRING);
$senha = md5(filter_input(INPUT_GET,'pass', FILTER_SANITIZE_STRING));

include('../../res/bd.php');
$consulta1 = "SELECT * FROM professores WHERE txmail_professores = '$login'";
$resposta1 = mysqli_query($bd,$consulta1);

if(mysqli_num_rows($resposta1) > 0) {
    $consulta2 = "SELECT * FROM professores WHERE txmail_professores ='$login' AND pwsenha_professores = '$senha'";
    $resposta2a = mysqli_query($bd,$consulta2);
    if(mysqli_num_rows($resposta2a) == 1) {
        $resposta2 = true;
    } else { 
        $resposta2 = false; 
    }
    if($resposta2) {
            $message = "OK";
    } else {
        $erro = "Senha incorreta!";
    }
} else {
    $erro = "Login incorreto";
}

if(!$erro) {
    $error = false;
    $erro = $message;
} else {
    $error = true;
    $erro = $erro;
}

$return = array(
    "error" => $error,
    "message" => $erro
);
echo json_encode($return);
