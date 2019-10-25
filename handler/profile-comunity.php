<<<<<<< HEAD
<?php
    include('../res/bd.php');
    $id = filter_input(INPUT_GET,'id');
    $search = "SELECT * FROM comunidade_inscrito WHERE id_aluno = '$id'";
    $query = mysqli_query($bd,$search);
    while($row=mysqli_fetch_assoc($query)) {
        $id_c = $row['id_comunidade'];
        $search_nome = "SELECT * FROM comunidade WHERE id='$id_c'";
        $query_c = mysqli_query($bd,$search_nome);
        $row_c = mysqli_fetch_assoc($query_c);
        $id_e = $row_c['entrada'];
        $search_entrada = "SELECT * FROM comunidade_entrada WHERE id = '$id_e'";
        $query_e = mysqli_query($bd,$search_entrada);
        $row_e = mysqli_fetch_assoc($query_e);
        echo '<a href="comunity.php?id='.$id_c.'">';
        echo '<div class="row list-group-item list-group-item-dark comunityl">';
        echo '<div class="col-12">';
        echo $row_c['nome']."<br>Comunidade ".$row_e['nome'];
        echo '</div>';
        echo '</div>';
        echo '</a>';
    }
=======
<?php
    include('../res/bd.php');
    $id = filter_input(INPUT_GET,'id');
    $search = "SELECT * FROM comunidade_inscrito WHERE id_aluno = '$id'";
    $query = mysqli_query($bd,$search);
    while($row=mysqli_fetch_assoc($query)) {
        $id_c = $row['id_comunidade'];
        $search_nome = "SELECT * FROM comunidade WHERE id='$id_c'";
        $query_c = mysqli_query($bd,$search_nome);
        $row_c = mysqli_fetch_assoc($query_c);
        $id_e = $row_c['entrada'];
        $search_entrada = "SELECT * FROM comunidade_entrada WHERE id = '$id_e'";
        $query_e = mysqli_query($bd,$search_entrada);
        $row_e = mysqli_fetch_assoc($query_e);
        echo '<a href="comunity.php?id='.$id_c.'">';
        echo '<div class="row list-group-item list-group-item-dark comunityl">';
        echo '<div class="col-12">';
        echo $row_c['nome']."<br>Comunidade ".$row_e['nome']."<br>";
        echo '</div>';
        echo '</a>';
            if($row_c['entrada'] == "3") {
                echo '<button class="btn btn-danger" onclick="modalSairComunidade('.$id_c.')"><i class="fas fa-sign-out-alt"></i>&nbsp;Sair</button>';
            }
        echo '</div>';
    }
>>>>>>> 9efad11b96089a109b98b8fd30234bb035a5d9b9
    