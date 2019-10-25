<?php
    $targ_w = $targ_h = 150;
    $jpeg_quality = 100;
 
    $src = $_GET['img'];
    $ext = pathinfo($src, PATHINFO_EXTENSION);

    switch ($ext){
        case 'png':
            $img_r = imagecreatefrompng($src);
            break;
        
        case 'jpeg':
        case 'jpg':
            $img_r = imagecreatefromjpeg($src);
            break;
        
        case 'gif':
            $img_r = imagecreatefromgif($src);
            break;
        }
    
    $dst_r = ImageCreateTrueColor( $targ_w, $targ_h );
 
    imagecopyresampled($dst_r,$img_r,0,0,$_GET['x'],$_GET['y'],
    $targ_w,$targ_h,$_GET['w'],$_GET['h']);
 
    header('Content-type: image/jpeg');
    imagejpeg($dst_r,null,$jpeg_quality);
    exit;