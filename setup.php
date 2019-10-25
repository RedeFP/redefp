<?php

function parseScript($script) {

  $result = array();
  $delimiter = ';';
  while(strlen($script) && preg_match('/((DELIMITER)[ ]+([^\n\r])|[' . $delimiter . ']|$)/is', $script, $matches, PREG_OFFSET_CAPTURE)) {
    if (count($matches) > 2) {
      $delimiter = $matches[3][0];
      $script = substr($script, $matches[3][1] + 1);
    } else {
      if (strlen($statement = trim(substr($script, 0, $matches[0][1])))) {
        $result[] = $statement;
      }
      $script = substr($script, $matches[0][1] + 1);
    }
  }

  return $result;

}

function executeScriptFile($fileName, $dbConnection) {
  $script = file_get_contents($fileName);
  $statements = parseScript($script);
  foreach($statements as $statement) {
    mysqli_query($dbConnection, $statement);
  }
}

$hostName = 'localhost';
$userName = 'alberto';
$password = '123';
$dataBaseName = 'id6136795_redefp';
$port = '3306';
$fileName = 'id6136795_redefp.sql';

if ($connection = @mysqli_connect($hostName, $userName, $password, $dataBaseName, $port)) {
  executeScriptFile($fileName, $connection);
} else {
  die('Can not connect to MySQL');
}