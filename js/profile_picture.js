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
        $("#import").load('/handler/profile-pictures.php?id='+aluno.id,function(){
            $("#import").prepend('<div class="col user-image" id="upload" align="center"><img src="/uploads/plus.jpg" class="user-plus"><br><span>Enviar fotos</span><br><span></span></div>');
            $("#upload").on("click",function(){
                $(".modal-title").html('Upload de Fotos');
                $(".modal-body").html('<form id="fotoup" action="gateway/upload/profile-image.php" method="post" enctype="multipart/form-data"><div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">Escolha</span></div><div class="custom-file"><input type="file" name="fileToUpload" id="fileToUpload" accept="image/*" class="custom-file-input"><label class="custom-file-label" for="fileToUpload">Imagem</label></div></div><div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">Legenda da foto</span></div><input type="text" class="form-control" name="txlegenda" maxlength="120"></div></form>');
                $(".btn-primary").html('Enviar Imagem');
                $(".btn-primary").attr('onclick','salvarFoto()');
                $(".btn-secondary").html('Cancelar');
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
        $(".modal-dialog").addClass("modal-lg");
        $(".modal-title").html("Foto de @"+rec.id_aluno.apelido);
        $(".modal-body").html('<center><img src="'+rec.image_url+'" class="fullview"><br>'+rec.txlegenda+'</center>');
        $(".btn-primary").css("display","none");
        $(".btn-secondary").html("Fechar");
        if(JSON.parse(localStorage.user)['id'] == rec.id_aluno.id)
        {
            $(".modal-footer").prepend('<button type="button" class="btn btn-danger" onclick="deletarFoto('+rec.id_foto+')">Deletar</button>');
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