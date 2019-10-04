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

if($resposta2) {
    $error = false;
    $erro = $message;
    $data = mysqli_fetch_assoc($resposta2a);
    unset($data["pwsenha_professores"]);
} else {
    $error = true;
    $erro = $erro;
    $data = "";
}

$return = array(
    "error" => $error,
    "message" => $erro,
    "data" => $data
);
echo json_encode($return);
