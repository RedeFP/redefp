<?php
$img = $_GET['img'];
$x = $_GET['x'];
$y = $_GET['y'];
$w = $_GET['w'];
$h = $_GET['h'];
$url = "http://127.0.0.1/gateway/upload/crop-engine.php?img=$img&x=$x&y=$y&w=$w&h=$h";
$url = str_replace(" ", "%20", $url);
copy($url,$img);
header("Location: ../../profile-pictures.php");