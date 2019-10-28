<?php
require('../res/config.php'); 
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
 //Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        $error ="File is an image - " . $check["mime"] . "."; //O arquivo existe
        $uploadOk = 1;
    } else {
        $error ="File is not an image."; //O arquivo não existe
        $uploadOk = 0;
    }
}
 //Check if file already exists
if (file_exists($target_file)) {
    $error ="Sorry, file already exists."; //O arquivo já existe
    $aproves = 1;
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    $error ="Sorry, your file is too large."; //O arquivo é muito pesado
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    $error ="Sorry, only JPG, JPEG, PNG & GIF files are allowed."; //O arquivo não está no suporte dessa porra PS: já está com accept de imagem, ou seja, é alguma arquivo de imagem bem esquisito fudido ou TIFF que não tem suporte web nessa merda de interwebs
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    $error ="Sorry, your file was not uploaded."; //Foda se deu erro
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        $error ="The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded."; //eeee porra foi essa merda
    } else {
        $uploadOk = 0;
        $error = "Sorry, there was an error uploading your file."; //Demonio nao deu certo na ultima parte
    }
}

include("../res/bd.php");
$id_aluno = filter_input(INPUT_POST,'id');
$photo_url = $target_file;
$search = "UPDATE aluno SET profile_pic_url='handler/$target_file' WHERE id='$id_aluno'";
if($uploadOk == 1 or $aproves == 1) {
    $query = mysqli_query($bd,$search);
}
if($uploadOk == 0) {
    $pathmod = "?error=".$error;
} else {

}
header("Location: ../profile.php?save=handler/".$target_file);
