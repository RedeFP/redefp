<?php

class AccessTokens {
    function insert($bd) {
        $access_token = new Filter();
        $access_token = $access_token->GET("token");
        $access_token = md5($access_token);
        $id = ID;
        $sql = "INSERT INTO access_tokens (access_token,id_aluno) VALUES ('$access_token','$id')";
        $query = Processa($sql);
        if($query) {
            $response = [
                "data" => mysqli_insert_id($bd),
                "error" => false,
                "operation" => route
            ];
        } else {
            $response = [
                "data" => processaMySQLError($bd),
                "error" => true,
                "operation" => route
            ];
        }
        echo json_encode($response);
    }
    function find($bd) {
        $id = ID;
        $sql = "SELECT * FROM access_tokens WHERE id_access = '$id'";
        $query = Processa($sql);
        if($query) {
            $response = [
                "data" => mysqli_fetch_assoc($query),
                "error" => false,
                "operation" => route
            ];
        } else {
            $response = [
                "data" => ProcessaMySQLError($bd),
                "error" => true,
                "operation" => route
            ];
        }
        echo json_encode($response);
    }
    function findAll() {
        $sql = "SELECT * FROM access_tokens ORDER BY id_access DESC LIMIT 20";
        $query = Processa($sql);
        if($query) {
            $rows=[];
            while($row=mysqli_fetch_assoc($query)) {
                $rows[]=$row;
            }
            $response = [
                "data" => $rows,
                "error" => false,
                "operation" => route
            ];
        } else {
            $response = [
                "data" => processaMySQLError($bd),
                "error" => true,
                "operation" => route
            ];
        }
        echo json_encode($response);
    }
    function update($bd){
        $id = ID;
        $token = new Filter();
        $token = $token->GET("token");
        $token = md5($token);
        $sql = "UPDATE access_tokens SET access_token ='$token' WHERE id_aluno='$id'";
        $query = Processa($sql);
        if($query) {
            $response = [
                "data" => ID,
                "error" => false,
                "operation" => route
            ];
        } else {
            $response = [
                "data" => ProcessaMySQLError($bd),
                "error" => true,
                "operation" => route
            ];
        }
        echo json_encode($response);
    }
    function delete($bd){
        $id = ID;
        $sql = "DELETE FROM access_tokens WHERE id_access='$id'";
        $query = Processa($sql);
        if($query) {
            $response = [
                "data" => ID,
                "error" => false,
                "operation" => route
            ];
        } else {
            $response = [
                "data" => ProcessaMySQLError($bd),
                "error" => true,
                "operation" => route
            ];
        }
        echo json_encode($response);
    }
}