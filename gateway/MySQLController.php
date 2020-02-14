<?php

function processaMySQLError($bd) {
    return mysqli_error($bd);
}

function Processa($sql) {
    $bd = new mysqli(BD_HOST,BD_USER,BD_PASS,BD_DATA);
    return mysqli_query($bd,$sql);
}