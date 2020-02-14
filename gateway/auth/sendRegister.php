<?php
    $info_ra = filter_input(INPUT_GET,'inputRA',FILTER_SANITIZE_STRING);
    $info_curso = filter_input(INPUT_GET, 'inlineFormCustomSelect1', FILTER_SANITIZE_NUMBER_INT);
    $info_nome = filter_input(INPUT_GET, 'inputNome', FILTER_SANITIZE_STRING);
    $info_email = filter_input(INPUT_GET, 'inputEmail3', FILTER_SANITIZE_EMAIL);
    $info_institucional = filter_input(INPUT_GET, 'inputEmail2', FILTER_SANITIZE_EMAIL);
    $info_senha = filter_input(INPUT_GET, 'inputPassword', FILTER_SANITIZE_STRING);
    $info_ano = filter_input(INPUT_GET, 'inlineFormCustomSelect2', FILTER_SANITIZE_NUMBER_INT);
    $info_telefone = filter_input(INPUT_GET, 'inputTelefone', FILTER_SANITIZE_STRING);
    $info_apelido = filter_input(INPUT_GET, 'inputApelido', FILTER_SANITIZE_STRING);
    
    include_once('../../res/bd.php');
    include_once('../../res/functions.handler.php');
    
    
    $mysqli_search = "INSERT INTO aluno (`ra`, `curso`, `ano`, `nome`, `apelido`, `email`, `institucional`, `telefone`, `senha`) VALUES ('$info_ra','$info_curso','$info_ano','$info_nome','$info_apelido','$info_email','$info_institucional','$info_telefone','$info_senha')";
    $query = mysqli_query($bd, $mysqli_search);
    if($query) {
        echo "200 OK";
    } else {
        echo 'Erro de registro: '.mysqli_error($bd);
    }