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
        alert('Selecione a região para recortar.');
        return false;
    };
</script>
<form action="crop.php" method="post" onsubmit="return checkCoords();">
    <input type="hidden" id="datetime" value="<?php echo $_POST['datetime']?>">
    <input type="hidden" id="txlegenda" value="<?php echo $_POST['txlegenda']?>">
    <input type="hidden" id="aluno" value="<?php echo $_POST['aluno']?>">
    <input type="hidden" id="x" name="x" />
    <input type="hidden" id="y" name="y" />
    <input type="hidden" id="w" name="w" />
    <input type="hidden" id="h" name="h" />
    <input type="submit" value="Crop Image" />
</form>