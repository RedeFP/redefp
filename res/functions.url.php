<?php

function redirect(string $path,int $status,string $msg)
{
    if($status != 200)
    {
        header("Location: $path?error=$msg");
    }
    else
    {
        header("Location: $path");
    }
}
