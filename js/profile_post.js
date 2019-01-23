//Initial
$(function(){
    loadPerfil();
    $("#commentmodal").on("hide.bs.modal",function() {
        limpaModal();
    });
    $(".nav-item")[1].setAttribute("class","nav-item active");
    $(this).scrollTop(0);
    setInterval(function(){
        autosize($('textarea'));
    }, 1000);
    md = new MobileDetect(window.navigator.userAgent);

});
$(document).one("ajaxStop",function(){
    if(md.mobile() != null){
        $(".col-3").remove();
        $(".col-9").attr("class","col");
    }
})

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
       $(window).unbind('scroll');
       morePost();
   }
});

//Builded Functions

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
        aluno = JSON.parse(result);
        if(aluno.profile_pic_url != "") {
            $(".user-pic").attr("src",aluno.profile_pic_url);
        }
        $("#aluno_id").attr("href","profile.php?id="+aluno.id);
        $("#aluno_id").html(aluno.nome);
        $("#aluno_apelido").html("@"+aluno.apelido);
        //document.getElementById("aluno_apelido").setAttribute("href","profile.php?id="+aluno.id);
        $("#l1").attr("href","profile.php?id="+aluno.id);
        $("#l2").attr("href","profile-pictures.php?id="+aluno.id);
        $("#l3").attr("href","profile-comunity.php?id="+aluno.id);
        $("#l4").attr("href","profile-contact.php?id="+aluno.id);
        $(".col-9").load("handler/profile-post.php?id="+aluno.id,
        function(){
            if(typeof($_GET['id']) == "undefined" || $_GET['id'] == JSON.parse(localStorage.user)['id'])
            {
                $("<div class='container post' data-id='null'><button onclick='createPost()'class='btn btn-danger' style='margin-bottom: 5px; margin-right: 5px; margin-left: -10px;'>+</button><span>Criar uma nova publicação</span></div>").prependTo(".col-9")
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
    $.get("/gateway/getJSON.php",{f:"savePost",id:user,post:txpost}, function(result){
        console.error(result);
        limpaModal();
        $("#commentmodal").modal('hide');
        window.location.reload();
    });
}

function expandePost(post) {
    $.get("/gateway/getJSON.php",{f:"expandePost",id:post},function(result){
        post = JSON.parse(result);
        modal = document.getElementsByClassName("modal-body")[0];
        $(".modal-title").html("Publicação de @"+post.post.aluno.apelido);
        postcontainer = document.createElement("div");
        postcontainer.setAttribute("class","container");
            textarea = document.createElement("textarea");
            textarea.setAttribute("class","form-control-plaintext");
            textarea.setAttribute("width","100vh");
            textarea.setAttribute("style","resize: none;");
            textarea.setAttribute("readonly","");
            textarea.innerHTML = post.post.txpost;
            postcontainer.appendChild(textarea);
        modal.appendChild(postcontainer);
        box1 = document.createElement("button");
        box1.setAttribute("class","hitbox");
            text1 = document.createTextNode(post.post.nlike);
            box1.appendChild(text1);
            img1 = document.createElement("img");
            img1.setAttribute("src","vendor/custom-icons/like.png");
            img1.setAttribute("class","hitpic");
            box1.appendChild(img1);
        modal.appendChild(box1);
        box2 = document.createElement("button");
        box2.setAttribute("class","hitbox");
            text2 = document.createTextNode(post.post.ndeslike);
            box2.appendChild(text2);
            img2 = document.createElement("img");
            img2.setAttribute("src","vendor/custom-icons/deslike.png");
            img2.setAttribute("class","hitpic");
            box2.appendChild(img2);
        modal.appendChild(box2);
        box3 = document.createElement("button");
        box3.setAttribute("class","hitbox");
            img3 = document.createElement("img");
            img3.setAttribute("src","vendor/custom-icons/comment.png");
            img3.setAttribute("class","hitpic");
            box3.appendChild(img3);
        modal.appendChild(box3);
        post.comentarios.forEach(genComentario);
        $(".btn-primary").css("display","none");
        $(".btn-secondary").html("Fechar");
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
    textarea.setAttribute("style","resize: none;");
    textarea.innerHTML = comentario.txcomentario;
    modal.appendChild(textarea);
}
      
function likePost(post) {
    $.get('/gateway/getJSON.php',{f:"like",id:post}, function (result){
        console.log(result);
        window.location.reload();
    });
}

function deslikePost(post) {
    
    $.get('/gateway/getJSON.php',{f:"deslike",id:post}, function(result){
        console.log(result);
        window.location.reload();
    });
}

function salvaComentario(post) {
    var usuario = parseInt(JSON.parse(localStorage.getItem('user'))['id']);
    var comentario = $("#cobox").val(); 
    $.get('/gateway/getJSON.php',{f:"comentar",id:post,comentar: comentario,usuario:usuario},function(result){
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
    $(".modal-title").html("Modal title");
    $(".modal-body").html("");
    $(".btn-primary").attr("onclick","");
    $(".btn-primary").css("display","initial");
    $(".btn-primary").html("Save changes");
    $(".btn-secondary").html("Close")
}

function montaModal(post) {
    $("#salvacom").attr("onclick","salvaComentario("+post+")");
    $(".modal-title").html("Comentar em uma publicação");
    $(".btn-primary").html("Comentar");
    $(".btn-primary").attr("onclick","salvaComentario("+post+")"); 
    $(".modal-body").html("<textarea type='text' id='cobox' maxlength='1024' width='100vw'>");
    $(".btn-secondary").html("Sair");
    $("#commentmodal").modal("show");
}