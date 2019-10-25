<<<<<<< HEAD
function loadPerfil()
{
    var id;
    if(typeof($_GET['id']) != "undefined") {
        id = $_GET['id'];    
    } else {
        id = JSON.parse(localStorage.user)['id'];
    }
    $.get("gateway/getJSON.php",{f:"one-profile", id: id}, function(result){
        aluno = JSON.parse(result);
        if(aluno.profile_pic_url != "") {
            $(".user-pic").attr("src",aluno.profile_pic_url);
        }
        $("#aluno_id").attr("href","profile.php?id="+aluno.id);
        $("#aluno_id").html(aluno.nome);
        $("#aluno_apelido").html("@"+aluno.apelido);
        document.getElementById("aluno_apelido").setAttribute("href","profile.php?id="+aluno.id);
        $("#l1").attr("href","profile.php?id="+aluno.id);
        $("#l2").attr("href","profile-pictures.php?id="+aluno.id);
        $("#l3").attr("href","profile-comunity.php?id="+aluno.id);
        $("#l4").attr("href","profile-contact.php?id="+aluno.id);
        $("#mail").html(aluno.institucional);
        $("#mail").attr("href","malito:"+aluno.institucional);
        var str = aluno.telefone;
        var res = str.slice(0, 2);
        var res2 = str.slice(2, 7);
        var res3 = str.slice(7,11);
        var tel = "("+res+")"+res2+"-"+res3;
        $("#tel").html(tel);
        $("#tel").attr("href","tel:"+aluno.telefone);
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
=======
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
        $("#mail").html(aluno.institucional);
        $("#mail").attr("href","malito:"+aluno.institucional);
        var str = aluno.telefone;
        var res = str.slice(0, 2);
        var res2 = str.slice(2, 7);
        var res3 = str.slice(7,11);
        var tel = "("+res+")"+res2+"-"+res3;
        $("#tel").html(tel);
        $("#tel").attr("href","tel:"+aluno.telefone);
    });
}

function modalEditTelefone() {
    $(".modal-title").text("Editando telefone cadastrado");
    $(".modal-body").html(`Telefone:&nbsp;<input type="tel" id="varTelefone" class="form-control" style="width:50%;display: inline-block"> `);
    $(".btn-primary").addClass("btn-success").text("Salvar").attr("onclick","salvarTelefone()");
    $("#varTelefone").val(JSON.parse(localStorage.user)['telefone']).inputmask({mask: "99 99999-9999",autoUnmask:"true"});
    showModal();
}

function salvarTelefone() {
    $data = {
        id: JSON.parse(localStorage.user).id,
        f: "saveTelefone",
        telefone: $("#varTelefone").val()
    }
    $.get(URLBASE+"gateway/getJSON.php",$data,function(result){
        if(result != "false") {
            obj = JSON.parse(localStorage.user);
            obj.telefone = result;
            localStorage.user = JSON.stringify(obj);
            window.location.reload();
        } else {

        }
    })
}

function modalFotoPerfil() {
    hideModal();
    $(".modal-title").text("Foto de Perfil");
    $(".modal .btn-primary").hide();
    $(".modal .btn-success").hide();
    $(".modal .btn-secondary").hide();
    if(parseUser().profile_pic_url != "") {
        $(".modal .btn-warning").show().html("<i class='fas fa-sync-alt'></i>");
        $(".modal .modal-body").html("<img src='"+URLBASE+parseUser().profile_pic_url+"' style='width: 100%'>")
        $(".modal .btn-danger").show().html(`<i class="fas fa-trash-alt"></i>`).attr("onclick","modalDeleteFotoPerfil()");
    } else {
        $(".modal .modal-body").hide();
        $(".modal .btn-success").show().html(`<i class="fas fa-plus"></i>`).attr("onclick","modalAddFotoPerfil()");
    }
    showModal();
}

function modalDeleteFotoPerfil() {
    $(".modal-title").text("Removendo a foto de perfil");
    $(".modal .btn-primary").hide();
    $(".modal .btn-warning").hide();
    $(".modal .btn-danger").show().html("<i class='fas fa-times'></i>").data("dismiss","modal");
    $(".modal .btn-success").show().html("<i class='fas fa-check'></i>").attr("onclick","deleteFotoPerfil()");
    $(".modal .btn-secondary").hide();
    $(".modal .modal-body").text("Você tem certeza disso?");
}

function deleteFotoPerfil() {
    $data = {
        f: "deleteFotoPerfil",
        id: parseUser().id
    };
    $.get(URLBASE+"gateway/getJSON.php",$data,function(result){
        if(result == true) {
            obj = parseUser();
            obj.profile_pic_url = "";
            localStorage.user = JSON.stringify(obj);
            window.location.reload();
        } else {
            $(".modal-body").html(result);
        }
    })
}

function modalAddFotoPerfil() {
    $(".modal-title").text("Adicionando uma foto de Perfil");
    $(".modal .btn-primary")
}

$(function(){
    $.getScript(URLBASE+"vendor/inputmask.js");
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
    });
    $(".user-pic").click(modalFotoPerfil);
>>>>>>> 9efad11b96089a109b98b8fd30234bb035a5d9b9
});