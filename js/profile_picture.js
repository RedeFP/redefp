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
        $("#import").load(URLBASE+'/handler/profile-pictures.php?id='+aluno.id,function(){
            $("#import").prepend('<div class="col user-image" id="upload" align="center"><i class=" fas fa-plus fa-5x user-plus"><br><span><h6>Enviar fotos</h6></span><br><span></span></div>');
            $("#upload").on("click",function(){
                $(".modal-title").html('Upload de Fotos');
                $(".modal-body").html('<form id="fotoup" action="'+URLBASE+'handler/photo_create.profile.php" method="post" enctype="multipart/form-data"><div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">Escolha</span></div><div class="custom-file"><input type="file" name="fileToUpload" id="fileToUpload" accept="image/*" class="custom-file-input"><label class="custom-file-label" for="fileToUpload">Imagem</label></div></div><div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">Legenda da foto</span></div><input type="text" class="form-control" name="txlegenda" maxlength="120"></div></form>');
                $(".btn-primary").html('<i class="fas fa-save"></i>').attr('onclick','salvarFoto()');
                $(".btn-secondary").html('Cancelar').hide();
                $("#commentmodal").modal('show');
            });
        });
    });
}

function salvarFoto()
{
    info = {
        aluno: JSON.parse(localStorage.user)['id']
    };
    $("#fotoup").append('<input type="hidden" name="aluno" value="'+info.aluno+'">');
    $("#fotoup").append('<input type="hidden" name="datetime" value="'+new Date().toISOString().slice(0, 19).replace('T', ' ')+'">');
    document.getElementById("fotoup").submit();
}

$(function(){
    if($_GET['error'] != undefined ) {
        alert($_GET['error']);
    }
    if($_GET['save'] != undefined) {
        obj = parseUser()
        obj.profile_pic_url = $_GET['save'];
        localStorage.user = JSON.stringify(obj);
    }
    md = new MobileDetect(window.navigator.userAgent);
    loadPerfil();
    $("#commentmodal").on("hide.bs.modal",function() {
        limpaModal();
    });
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

$(document).one("ajaxStop",function(){
    $(".user-image-src").click(function(){
        expandePhoto($(this).attr("data-id")); 
    });
    $(".user-pic").click(modalFotoPerfil);
});

function limpaModal()
{
    $(".modal-title").html("");
    $(".modal-body").html("");
    $(".btn-primary").attr("onclick","");
    $(".btn-success").remove();
    $(".btn-warning").remove();
    $(".btn-danger").remove();
    $(".btn-primary").css("display","initial");
    $(".btn-secondary").css("display","initial");
    $(".modal-lg").removeClass(".modal-lg");
}

function expandePhoto(id)
{
    data = {f: "searchFoto", id:id};
    $.get("gateway/getJSON.php",data,function(result){
        rec = JSON.parse(result);
        $(".modal-title").html("Foto de @"+rec.id_aluno.apelido);
        $(".modal-body").html('<center><img src="'+rec.image_url+'" class="fullview"><br>'+rec.txlegenda+'</center>');
        $(".btn-primary").css("display","none");
        $(".btn-secondary").html("Fechar").hide();
        if(JSON.parse(localStorage.user)['id'] == rec.id_aluno.id)
        {
            $(".modal-footer").prepend('<button type="button" class="btn btn-danger" onclick="deletarFoto('+rec.id_foto+')"><i class="fas fa-trash-alt"></i></button>');
        }
        $(".modal").modal("show");
    });
}

function deletarFoto(post)
{
    $(".btn-warning").remove();
    $(".btn-danger").remove();
    $(".modal-footer").append('<button type="button" class="btn btn-success" style="display: initial;" onclick="delPost('+post+')">Confirmar</button>');
    $(".modal-footer").append('<button type="button" class="btn btn-danger" data-dismiss="modal" onclick="$("#commentmodal").modal("hide")">Fechar</button>');
    $(".btn-secondary").css("display","none");
    $(".btn-primary").css("display","none");
    $(".modal-body").html("Tem certeza que quer deletar a publicação?");
    $(".modal-title").html("Deletando publicação");
}

function delPost(post)
{
    data = {
        f: "delFoto",
        id: post
    };
    $.get("gateway/getJSON.php",data,function(result){
        console.log(result);
        if(result != "400 ERROR") {
            window.location.reload();
        }
    });
}

function modalFotoPerfil() {
    hideModal();
    $(".modal-title").text("Foto de Perfil");

    $(".modal .btn-primary").hide();
    $(".modal .btn-success").hide();
    $(".modal .btn-secondary").hide();
    if(parseUser().profile_pic_url != "") {
        $(".modal .btn-warning").show().html("<i class='fas fa-sync-alt'></i>").attr("onclick","modalEditFotoPerfil()");
        $(".modal .modal-body").html("<img src='"+URLBASE+parseUser().profile_pic_url+"' style='width: 60%;'>").attr("align","center");
        $(".modal .btn-danger").show().html(`<i class="fas fa-trash-alt"></i>`).attr("onclick","modalDeleteFotoPerfil()");
    } else {
        $(".modal .modal-body").hide();
        $(".modal .btn-success").show().html(`<i class="fas fa-plus"></i>`).attr("onclick","modalAddFotoPerfil()");
    }
    showModal();
}

function modalEditFotoPerfil() {
    $(".modal-title").text("Atualizando a Foto de Perfil");
    $(".modal .btn-primary").hide();
    $(".modal .btn-success").show().html(`<i class="fas fa-check"></i>`).attr("onclick","saveEditFotoPerfil()");
    $(".modal .btn-danger").show().html(`<i class="fas fa-times"></i>`).attr("onclick","").attr("data-dismiss","modal");
    $(".modal .btn-warning").hide();
    $(".modal .btn-secondary").hide();
    $(".modal .modal-body").html(`<form id="dataFoto" enctype="multipart/form-data" name="dataFoto" method="post" action="handler/photo_upload.profile.php"><input type="file" name="fileToUpload" class="form-control">`)
    showModal();
}

function saveEditFotoPerfil() {
    $("#dataFoto").append(`<input type="hidden" name="id" value="`+parseUser().id+`">`);
    document.getElementById('dataFoto').submit();
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

function showModal() {
    $(".modal").modal('show');
}

function hideModal() {
    $(".modal").modal('hide');
}

function modalAddFotoPerfil() {
    $(".modal-title").text("Adicionando uma foto de Perfil");
    $(".modal-body").show().html(`<form id="addFoto" action="handler/photo_upload.profile.php" method="GET"><input type="file" id="varFoto" class="form-control"></form>`)
    $(".modal .btn-success").show().html("<i class='fas fa-check'></i>").attr("onclick","addFotoPerfil()");
}

function addFotoPerfil() {
    $("#addFoto").append('<input type="hidden" value="'+parseUser().id+'"> id="id" name="id">');
    $("#addFoto").submit();
    hideModal();
}
