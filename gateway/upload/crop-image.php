<?php $img = $_GET['img']; ?>
<html lang="pt-br">
    <head>
        <script src="../../vendor/jquery-3.3.1.min.js"></script>
        <script src="../../vendor/jcrop/jquery.Jcrop.js"></script>
        <link rel="stylesheet" href="../../vendor/jcrop/jquery.Jcrop.css" type="text/css" />
        <script language="Javascript">
            $(function(){
                $('#cropbox').Jcrop({
                    aspectRatio: 1,
                    onSelect: updateCoords
                });
            });
            function updateCoords(c)
            {
                $('#x').val(c.x);
                $('#y').val(c.y);
                $('#w').val(c.w);
                $('#h').val(c.h);
            };
            function checkCoords()
            {
                if (parseInt($('#w').val())) return true;
                alert('Selecione a área para recorte.');
                return false;
            };
        </script>
    </head>
    <body>
    <div id="outer">
    <div class="jcExample">
    <div class="article">
        <h1>Crop jQuery</h1>
        <img src="<?php echo $img ?>" id="cropbox" />
        <form action="crop-motor.php" method="get" onsubmit="return checkCoords();">
            <input type="hidden" id="x" name="x" />
            <input type="hidden" id="y" name="y" />
            <input type="hidden" id="w" name="w" />
            <input type="hidden" id="h" name="h" />
            <input type="hidden" id="img" name="img" value="<?php echo $img ?>" />
            <input type="submit" value="Crop Image" />
        </form>
    </div>
    </div>
    </div>
    </body>
</html>