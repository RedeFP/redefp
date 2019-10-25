function loadPerfil()
{
    var id;
    if(typeof($_GET['id']) != "undefined") {
        id = $_GET['id'];    
    } else {
        id = JSON.parse(localStorage.user)['id'];
    }
    $.get("gateway/getJSON.php",{f:"one-profile", id: id}, function(result){
        aluno = result;
        if(aluno.profile_pic_url != "") {
            $(".user-pic").attr("src",URLBASE+aluno.profile_pic_url);
        }
        $("#aluno_id").attr("href","profile.php?id="+aluno.id);
        $("#aluno_id").html(aluno.nome);
        $("#aluno_apelido").html("@"+aluno.apelido);
        document.getElementById("aluno_apelido").setAttribute("href","profile.php?id="+aluno.id);
        $("#l1").attr("href","profile.php?id="+aluno.id);
        $("#l2").attr("href","profile-pictures.php?id="+aluno.id);
        $("#l3").attr("href","profile-comunity.php?id="+aluno.id);
        $("#l4").attr("href","profile-contact.php?id="+aluno.id);
        $("#import").load(URLBASE+'/handler/profile-comunity.php?id='+aluno.id)
    });
}

function modalSairComunidade($id) {
    $(".modal-title").text("Saindo de uma comunidade");
    $(".btn-primary").addClass(".btn-danger").html("Confirmar").attr("onclick","sairComunidade("+$id+")");
    $(".modal-body").text("Você tem certeza que quer sair dessa comunidade");
    $(".modal").modal('show');
}

function sairComunidade($id) {
    var id = $id;
    var aluno = JSON.parse(localStorage.user)['id'];
    $var = {
        id: id,
        idaluno: aluno,
        f: 'deleteComunidadeEntrada'
    };
    $.get(URLBASE+"gateway/getJSON.php",$var, function(result) {
        if(result != "false") {
            window.location.reload();
        } else {
            console.log(result)
        }
    });
}

$(function(){
    md = new MobileDetect(window.navigator.userAgent);
    loadPerfil();
    $(".nav-item")[1].setAttribute("class","nav-item active");
    $(document).one("ajaxStop",function(){
        if(md.mobile() != null){
            $(".col-3").remove();
            $(".col-9").attr("class","col");
            if(typeof($_GET['id']) != "undefined") {
                id = $_GET['id'];    
            } else {
                id = JSON.parse(localStorage.user)['id'];
            }
            loadNavMob(id);
        }
    })
});