<?php
    include("../res/bd.php");
    $id = filter_input(INPUT_GET,'id');
    $search = "SELECT * FROM aluno_galeria WHERE id_aluno = '$id'";
    $query = mysqli_query($bd,$search);
    while($row = mysqli_fetch_assoc($query)) {
        $date = new DateTime($row['dtpublicacao']);
        $dt = date_format($date, "d/m/Y");
        echo '<div class="col user-image" align="center">';
        echo '<img src="'.$row['image_url'].'" class="user-image-src"><br />';
        echo '<span>'.$row['txlegenda'].'</span><br>';
        echo '<span>'.$dt.'</span>';
        echo '</div>';
    }
    