<?php
$aluno = filter_input(INPUT_POST,'aluno');
$dtpublicacao = filter_input(INPUT_POST,'datetime');
$txlegenda = filter_input(INPUT_POST,'txlegenda');
$target_dir = "../../uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        $error = "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        $error = "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    $error = "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 5000000) {
    $error = "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    $error = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo $error;
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        include("../../res/bd.php");
        $query = mysqli_query($bd,"INSERT INTO aluno_galeria (id_aluno,dtpublicacao,txlegenda,image_url) VALUES ('$aluno','$dtpublicacao','$txlegenda','$target_file')");
        error_reporting(E_ALL);
        if(mysqli_error($bd) != "") { echo mysqli_error($bd); }
        header("Location: crop-image.php?img=$target_file");
    } else {
        echo $error;
    }
}
?>