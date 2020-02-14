<?php

class Filter {
    function GET($param) {
        return filter_input(INPUT_GET,$param);
    }
    function POST($param) {
        return filter_input(INPUT_POST,$param);
    }
}

function init() {
    $id = new Filter();
    define("ID",$id->GET("id")); 
    $route = new Filter();
    define("route",$route->GET("f"));
    $debug = new Filter();
    if($debug->GET("debug") != "") {
        debug();
    } else {
        header("Content-Type: application/json");
    }
   $status = filter_input(INPUT_GET,'debug');
   require "../res/config.php";
   require "MySQLController.php";
   require "ErrorController.php";
}

function callTables() {
    require tables."AccessTokensTableController.php";
    require tables."AgendaEventosTableController.php";
}


function debug() {
    echo "<strong>Debug</strong>:<br>".PHP_EOL;
    echo "GET:".PHP_EOL;
    var_dump($_GET);
    error_reporting(E_ALL);
    error_reporting(E_WARNING);
    echo "<br>";
}

function callRoute() {
    require "RoutesController.php";
    $destino = new Route();
    $destino->callRoute(route);
}

init();
callTables();
callRoute();
