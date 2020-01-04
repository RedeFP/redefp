<?php 

class Errors {
    function Forbidden() {
        $response = [
            "data" => "403 Forbidden",
            "error" => true,
            "operation" => route
        ];
        echo json_encode($response);
    }
    function NotFound() {
        $response = [
            "data" => "404 Not Found",
            "error" => true,
            "operation" => route
        ];
        echo json_encode($response);
    }
}