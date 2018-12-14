<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        //echo "File is an image - " . $check["mime"] . "."; O arquivo existe
        $uploadOk = 1;
    } else {
        //echo "File is not an image."; O arquivo não existe
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    //echo "Sorry, file already exists."; O arquivo já existe
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    //echo "Sorry, your file is too large."; O arquivo é muito pesado
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    //echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed."; O arquivo não está no suporte dessa porra PS: já está com accept de imagem, ou seja, é alguma arquivo de imagem bem esquisito fudido ou TIFF que não tem suporte web nessa merda de interwebs
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    //echo "Sorry, your file was not uploaded."; Foda se deu erro
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        //echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded."; eeee porra foi essa merda
    } else {
        //echo "Sorry, there was an error uploading your file."; Demonio nao deu certo na ultima parte
    }
}

include("../res/bd.php");
$id_aluno = filter_input(INPUT_POST,'id_aluno',FITLER_SANITIZE_NUMBER_INT);
$txlegenda = filter_input(INPUT_POST,'txlegemda',FILTER_SANITIZE_STRING);
$dtpublicacao = date("d/m/Y H:i");
$photo_url = $target_file;
$search = "INSERT INTO aluno_galeria (id_aluno,dtpublicacao,txlegenda,photo_url) VALUES ('$id_aluno','$dtpublicacao','$txlegenda','$photo_url')";
$query = mysqli_query($bd,$search);
