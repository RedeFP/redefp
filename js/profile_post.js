//Initial
$(function(){
    if($_GET['error'] != undefined ) {
        alert($_GET['error']);
    }
    if($_GET['save'] != undefined) {
        obj = parseUser()
        obj.profile_pic_url = $_GET['save'];
        localStorage.user = JSON.stringify(obj);
    }
    loadPerfil();
    $("#commentmodal").on("hide.bs.modal",function() {
        limpaModal();
    });
    $(".nav-item")[1].setAttribute("class","nav-item active");
    $('body').scrollTop(0);
    setInterval(function(){
        autosize($('textarea'));
    }, 1000);
    md = new MobileDetect(window.navigator.userAgent);

});
$(document).one("ajaxStop",function(){
    if(md.mobile() != null){
        $(".col-4").hide();
        $(".col-8").attr("class","col");
        if(typeof($_GET['id']) != "undefined") {
            id = $_GET['id'];    
        } else {
            id = JSON.parse(localStorage.user)['id'];
        }
        loadNavMob(id);
        
    }
    $(".user-pic").click(modalFotoPerfil);
})

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
       $(window).unbind('scroll');
       morePost();
   }
});

//Builded Functions

function modalFotoPerfil() {
    hideModal();
    $(".modal-title").text("Foto de Perfil");
    $(".modal-footer").append("<button class='btn btn-danger'></button>");
    $(".modal-footer").append("<button class='btn btn-warning'></button>");
    $(".modal-footer").append("<button class='btn btn-success'></button>");
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

function morePost()
{
   window.location.reload(); 
}

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
        $(".col-8").load("handler/profile-post.php?id="+aluno.id,
        function(){
            if(typeof($_GET['id']) == "undefined" || $_GET['id'] == JSON.parse(localStorage.user)['id'])
            {
                $("<div class='container post' data-id='null'><button onclick='createPost()'class='btn btn-dark btn-add'>+</button><span>Criar uma nova publicação</span></div>").prependTo(".col-8");
            }
            $(".post").click(function(){
                if($(this).attr("data-id") != "null")
                {
                    expandePost($(this).attr("data-id"));
                }
            }); 
        });
        
                   
    });
}

function createPost()
{
    $(".modal-title").html("Postando...");
    $(".modal-body").html("<textarea id='cobox'></textarea>");
    $(".btn-primary").attr("onclick","salvaPost()");
    $(".btn-primary").html("Salvar");
    $(".btn-secondary").html("Fechar");
    $("#commentmodal").modal('show');
}

function salvaPost()
{
    txpost = $("#cobox").val();
    user = JSON.parse(localStorage.user)['id'];
    $.get(URLBASE+"gateway/getJSON.php",{f:"savePost",id:user,post:txpost}, function(result){
        console.error(result);
        limpaModal();
        $("#commentmodal").modal('hide');
        window.location.reload();
    });
}

function expandePost(post) {
    $.get(URLBASE+"gateway/getJSON.php",{f:"expandePost",id:post},function(result){
        id_final = post;
        post = JSON.parse(result);
        modal = document.getElementsByClassName("modal-body")[0];
        $(".modal-title").html("Publicação de @"+post.post.aluno.apelido);
        postcontainer = document.createElement("div");
        postcontainer.setAttribute("class","container");
            textarea = document.createElement("textarea");
            textarea.setAttribute("class","form-control-plaintext ori");
            textarea.setAttribute("width","100vh");
            textarea.setAttribute("style","resize: none;");
            textarea.setAttribute("readonly","");
            textarea.innerHTML = post.post.txpost;
            postcontainer.appendChild(textarea);
        modal.appendChild(postcontainer);
        box1 = document.createElement("button");
        box1.setAttribute("class","hitbox");
        box1.setAttribute("onclick","likePost("+id_final+")");
            text1 = document.createTextNode(post.post.nlike);
            box1.appendChild(text1);
            img1 = document.createElement("i");
            img1.setAttribute("class","far fa-thumbs-up");
            box1.appendChild(img1);
        modal.appendChild(box1);
        box2 = document.createElement("button");
        box2.setAttribute("class","hitbox");
        box2.setAttribute("onclick","deslikePost("+id_final+")");
            text2 = document.createTextNode(post.post.ndeslike);
            box2.appendChild(text2);
            img2 = document.createElement("i");
            img2.setAttribute("class","far fa-thumbs-down");
            box2.appendChild(img2);
        modal.appendChild(box2);
        box3 = document.createElement("button");
        box3.setAttribute("class","hitbox");
        box3.setAttribute("onclick","montaModal("+id_final+")");
            img3 = document.createElement("i");
            img3.setAttribute("class","far fa-comment-alt");
            box3.appendChild(img3);
        modal.appendChild(box3);
        post.comentarios.forEach(genComentario);
        if(post.post.id_aluno == JSON.parse(localStorage.user)['id'])
        {
            $(".modal-footer").prepend("<button type='button' class='btn btn-warning' onclick='editarPost("+id_final+")'><i class='fas fa-pencil-alt'></i></button><button type='button' class='btn btn-danger' onclick='deletarPost("+id_final+")'><i class='far fa-trash-alt'></i></button>");
        }
        $(".btn-primary").css("display","none");
        $(".btn-secondary").html("<i class='fas fa-times'></i>");
        $(".btn-secondary").attr("onclick","limpaModal()");
        $("#commentmodal").modal('show');
    });
}

function genComentario(comentario)
{
    modal = document.getElementsByClassName("modal-body")[0];
    hr = document.createElement("hr");
    modal.appendChild(hr);
    title = document.createElement("h6");
    title.innerHTML = comentario.aluno.nome;
    modal.appendChild(title);
    textarea = document.createElement("textarea");
    textarea.setAttribute("class","form-control-plaintext");
    textarea.readOnly = true;
    textarea.setAttribute("style","resize: none;");
    textarea.innerHTML = comentario.txcomentario;
    modal.appendChild(textarea);
}
      
function likePost(post) {
    $.get(URLBASE+'gateway/getJSON.php',{f:"like",id:post}, function (result){
        console.log(result);
        window.location.reload();
    });
}

function deslikePost(post) {
    
    $.get(URLBASE+'gateway/getJSON.php',{f:"deslike",id:post}, function(result){
        console.log(result);
        window.location.reload();
    });
}

function salvaComentario(post) {
    var usuario = parseInt(JSON.parse(localStorage.getItem('user'))['id']);
    var comentario = $("#cobox").val(); 
    $.get(URLBASE+'gateway/getJSON.php',{f:"comentar",id:post,comentar: comentario,usuario:usuario},function(result){
        console.log(result);
        if(result == "200 OK")
        {
            limpaModal();
            $("#commentmodal").modal("hide")
        }
    });
}

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
}

function montaModal(post) {
    $("#salvacom").attr("onclick","salvaComentario("+post+")");
    $(".modal-title").html("Comentar em uma publicação");
    $(".btn-primary").html("Comentar");
    $(".btn-primary").css("display","initial");
    $(".btn-primary").attr("onclick","salvaComentario("+post+")"); 
    $(".modal-body").html("<textarea type='text' id='cobox' maxlength='1024' width='100vw'>");
    $(".btn-secondary").html("Sair");
    $("#commentmodal").modal("show");
}

function editarPost(post)
{
    $(".btn-warning").hide();
    $(".btn-danger").hide();
    $(".modal-title").html("Editando publicação");
    $(".cm1").hide();
    $(".cm2").hide();
    $(".cm3").hide();
    $(".ori").removeAttr("readonly");
    $(".btn-primary").html("<i class='far fa-save'></i>");
    $(".btn-primary").attr("onclick","sEditPost("+post+")");
    $(".btn-primary").css("display","initial");
}

function deletarPost(post)
{
    $(".btn-warning").hide();
    $(".btn-danger").hide();
    $(".modal-footer").append('<button type="button" class="btn btn-success" style="display: initial;" onclick="delPost('+post+')">Confirmar</button>');
    $(".modal-footer").append('<button type="button" class="btn btn-danger" data-dismiss="modal" onclick="$("#commentmodal").modal("hide")">Fechar</button>');
    $(".btn-secondary").css("display","none");
    $(".btn-primary").css("display","none");
    $(".modal-body").html("Tem certeza que quer deletar a publicação?");
    $(".modal-title").html("Deletando publicação");
}

function sEditPost(post)
{
    var cobox = $(".ori").val();
    data = {
        f: "sEditPost",
        id: post,
        comentario: cobox
    };
    $.get(URLBASE+"gateway/getJSON.php",data,function(result){
        if(result == "200 OK") {
            window.location.reload();
        }
    })
}

function delPost(post)
{
    data = {
        f: "delPost",
        id: post
    };
    $.get("gateway/getJSON.php",data,function(result){
        console.log(result);
        if(result != "400 ERROR") {
            window.location.reload();
        }
    });
}