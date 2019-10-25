<?php
error_reporting(E_ALL);
// var_dump($_POST);
//Obter variaveis via method POST
$noprofessores = filter_input(INPUT_POST,'inputNome',FILTER_SANITIZE_STRING);
$txmail_professores = filter_input(INPUT_POST,'inputEmail2',FILTER_SANITIZE_EMAIL);
$pwsenha_professores = md5(filter_input(INPUT_POST,'inputPassword',FILTER_SANITIZE_STRING));

//Iniciazar o banco de dados
include('../../res/bd.php');

//Gera consulta SQL
$consulta1 = "INSERT INTO professores (noprofessores,txmail_professores,pwsenha_professores) VALUES ('$noprofessores','$txmail_professores','$pwsenha_professores')";
$resposta1 = mysqli_query($bd,$consulta1);

//Verifica se o cadastro foi concluido
if($resposta1) {
    $error = false;
    $erro = "OK";
} else {
    $error = true;
    $erro = mysqli_error($bd);
}

if($error) {
    echo $erro;
} elseif(!$error) {
    header("Location: ../../prp/index.php");
}
