
function loadCursos(){
    $.get('../gateway/getJSON.php',data = { f: "cursos"}, function(result){
        obj = JSON.parse(result);
        obj.forEach(generateCursos);
    });
}

function generateCursos(item) {
    opt = document.createElement("option");
    opt.value = item.id;
    opt.innerHTML = item.nome;
    document.getElementById("inlineFormCustomSelect1").appendChild(opt);
}

$(function(){
    loadCursos();
    $("#inputTelefone").inputmask({
        "mask" : "(99)99999-9999",
        "autoUnmask" : true
    });
});



function Submit() {
    data = {
        'inputRA' : $("#inputRA").val(),
        'inlineFormCustomSelect1':$("#inlineFormCustomSelect1").val(),
        'inputNome' : $("#inputNome").val(), 
        'inputEmail3' : $("#inputEmail3").val(),
        'inputEmail2' : $("#inputEmail2").val(),
        'inputPassword' : $("#inputPassword").val(), 
        'inlineFormCustomSelect2' : $("#inlineFormCustomSelect2").val(), 
        'inputTelefone' : $("#inputTelefone").val(),
        'inputApelido' : $("#inputApelido").val() 
    };
    $.get('../gateway/auth/sendRegister.php',data,function(result) {
       console.log(result);
       if(result == "200 OK") 
       {
           window.location.href="../";
       }
    });
}