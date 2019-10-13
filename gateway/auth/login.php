<?php
    include('../../res/bd.php');
    $info_ra = filter_input(INPUT_GET,'ra');
    $info_senha = md5(filter_input(INPUT_GET,'pass'));
    
    $search = "SELECT * FROM aluno WHERE ra = '$info_ra' AND senha = '$info_senha'";
    $query = mysqli_query($bd,$search);
    $error = mysqli_error($bd);
    if(mysqli_num_rows($query) > 0 ) {
        $array = [[
            "dados" => mysqli_fetch_assoc($query),
            "error" => false
        ]];
        
    } else {
        if($info_ra == 0 && $info_senha == "julianomanda")
        {
            $array = [[
                "dados" => [
                    "redireciona" => true,
                    "local" => "/prp"
                ],
                "error" => true
            ]];
        } else {
            $array = [
                [
                    "dados" => "Incorreto",
                    "error" => true
                ]
            ];
        }
        
    }
    
    echo json_encode($array);
