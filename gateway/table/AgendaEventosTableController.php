<?php

class AgendaEventos {
    function insert(){
        $id_responsavel = new Filter();
        $id_responsavel = $id_responsavel->GET("id_responsavel");
        $tp_responsavel = new Filter(); 
        $tp_responsavel = $tp_responsavel->GET("tp_responsavel");
        $dt_inicio = new Filter(); 
        $dt_inicio = $dt_inicio->GET("dt_inicio");
        $dt_fim = new Filter(); 
        $dt_fim = $dt_fim->GET("dt_fim");
        $id_local = new Filter();
        $id_local = $id_local->GET("id_local");

        $sql = "INSERT INTO agenda_eventos (id_responsavel,tp_responsavel,dt_inicio,dt_fim,id_local) VALUES ('$id_responsavel','$tp_responsavel','$dt_inicio','$dt_fim','$id_local')";
        $query = Processa($sql);
        if($query) {
            $response = [
                "data" => mysqli_insert_id($bd),
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
        echo json_encode($responsavel);
    }
    
    function find(){
        $id = ID;
        $sql = "SELECT * FROM agenda_eventos WHERE id='$id' ";
        $query = Processa($sql);
        if(mysqli_num_rows($query) > 0) {
            $response = [
                "data" => mysql_fetch_assoc($query),
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

    function findAll(){
        $sql = "SELECT * FROM agenda_eventos ORDER BY id_evento DESC LIMIT 20";
        $query = Processa($sql);
        if(mysqli_num_rows($query) > 0 and mysqli_num_rows($query) < 21) {
            $rows=[];
            while($row=mysqli_fetch_assoc($query)) { $rows[]=$row; }
            $response = [
                "data" => $rows,
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
    
    function update(){
        $id_evento = ID;
        $id_responsavel = new Filter();
        $id_responsavel = $id_responsavel->GET("id_responsavel");
        $tp_responsavel = new Filter(); 
        $tp_responsavel = $tp_responsavel->GET("tp_responsavel");
        $dt_inicio = new Filter(); 
        $dt_inicio = $dt_inicio->GET("dt_inicio");
        $dt_fim = new Filter(); 
        $dt_fim = $dt_fim->GET("dt_fim");
        $id_local = new Filter();
        $id_local = $id_local->GET("id_local");

        $sql = "UPDATE agenda_eventos SET id_responsavel = '$id_responsavel', tp_responsavel = '$tp_responsavel', dt_inicio = '$dt_inicio', dt_fim = '$dt_fim', id_local = '$id_local' WHERE id_evento = '$id_evento' ";
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
    
    function delete(){
        $id = ID;
        $sql = "DELETE FROM agenda_evento WHERE id_evento = '$id'";
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