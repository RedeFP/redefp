function init_page()
{
    console.info("Iniciando... 75%");
    var idc = $_GET['id'];
    $.get(URLBASE+"/gateway/getJSON.php",{f:"loadPostComunity",id:idc}, function(result){
        obj = JSON.parse(result);
        obj.forEach(searchByUser);
    })
    .done(function(){
        console.info("Iniciando... 100%");
    });
}

$(function(){
        $(".modal").on("hidden.bs.modal",function(){
            limpaModal();
        });
    limpaModal();
});
$(document).on("ajaxStop",function(){
    $(".like").click(function(){
        likePost($(this).attr("data-id"));
    });
    $(".deslike").click(function(){
        deslikePost($(this).attr("data-id"))
    });
    $(".comment").click(function(){
        montaModal($(this).attr("data-id"))
    });
    setInterval(function(){
        autosize($("textarea"))
    },1000);
});

function showComentario(post)
{
    $.get(URLBASE+"/gateway/getJSON.php",{f:"comunity-postfull",id:post},function(result){
        
    })
}

function searchByUser(item)
{
    var idu = item.id_aluno;
    $.get(URLBASE+"/gateway/getJSON.php",{f:"one-profile",id:idu},function(result){
        obj = result;
        generatePost(item,obj);
    });
}

function generatePost(post,aluno)
{
    div = document.createElement("div");
    div.setAttribute("class","container post");
    div.setAttribute("data-id",post.id_post);
    user = document.createElement("a");
    user.setAttribute("href","profile.php?id="+aluno.id);
    img = document.createElement("img");
    img.setAttribute("class","user-icon");
    if(aluno.profile_pic_url == "")
    {
        imgsrc = URLBASE+"css/user.png";
    }
    else
    {
        imgsrc = URLBASE+aluno.profile_pic_url;
    }
    img.setAttribute("src",imgsrc);
    treat = document.createTextNode(aluno.nome);
    br = document.createElement("br");
    user.appendChild(img);
    user.appendChild(treat);
    div.appendChild(user);
    div.appendChild(br);
    dpost = document.createElement("textarea");
    dpost.setAttribute("readonly","");
    dpost.setAttribute("class","form-control-plaintext");
    dpost.setAttribute("width","100vh");
    dpost.innerHTML = post.txpost;
    div.appendChild(dpost);
    document.getElementById("import").appendChild(div);
    $(".post").on("click",function() {
        expandePost(this.getAttribute("data-id"));
    });
    
}

function likePost(post) {
    $.get(URLBASE+'/gateway/getJSON.php',{f:"comunity-like",id:post}, function (result){
        if(result != "400 ERROR") {
            window.location.reload();
        }
    });
}

function deslikePost(post) {
    $.get(URLBASE+'/gateway/getJSON.php',{f:"comunity-deslike",id:post}, function(result){
        if(result != "400 ERROR") {
            window.location.reload();
        }
    });
}

function limpaModal()
{
    $(".modal-title").html("");
    $(".modal-body").html("");
    $(".btn-primary").attr("onclick","");
    $(".btn-warning").remove();
    $(".btn-danger").remove();
    $(".btn-primary").css("display","initial");
}

function montaModal(post) {
    $("#salvacom").attr("onclick","salvaComentario("+post+")");
    $(".modal-title").html("Comentar em uma publicação");
    
    $(".btn-primary").html("Comentar");
    $(".modal-body").html("<textarea class='form-control' id='cobox'>");
    $(".hitbox").remove();
    $(".btn-primary").attr("onclick","salvaComentario("+post+")"); 
    $(".btn-primary").css("display","initial");
    $(".btn-secondary").html("Sair");
    $("#commentmodal").modal("show");
}

function salvaComentario(post) {
    var usuario = parseInt(JSON.parse(localStorage.getItem('user'))['id']);
    var comentario = $("#cobox").val(); 
    $.get(URLBASE+'gateway/getJSON.php',{f:"comunity-comentar",id:post,comentar: comentario,usuario:usuario},function(result){
        console.log(result);
        if(result != "400 ERROR")
        {
            limpaModal();
            $("#commentmodal").modal("hide")
        }
    });
}

function expandePost(post) {
    $.get(URLBASE+"/gateway/getJSON.php",{f:"expandeCPost",id:post},function(result){
        post = JSON.parse(result);
        modal = document.getElementsByClassName("modal-body")[0];
        $(".modal-title").html("Publicação de @"+post.post.aluno.apelido);
        postcontainer = document.createElement("div");
        postcontainer.setAttribute("class","container");
            textarea = document.createElement("textarea");
            textarea.setAttribute("class","form-control-plaintext expande")     ;
            textarea.setAttribute("width","100vh");
            textarea.setAttribute("style","resize: none;");
            textarea.setAttribute("readonly","");
            textarea.innerHTML = post.post.txpost;
            postcontainer.appendChild(textarea);
        modal.appendChild(postcontainer);
        box1 = document.createElement("button");
        box1.setAttribute("class","hitbox like");
        box1.setAttribute("data-id",post.post.id_post);
            text1 = document.createTextNode(post.post.nlike);
            box1.appendChild(text1);
            img1 = document.createElement("img");
            img1.setAttribute("src","vendor/custom-icons/like.png");
            img1.setAttribute("class","hitpic");
            box1.appendChild(img1);
        modal.appendChild(box1);
        box2 = document.createElement("button");
        box2.setAttribute("class","hitbox deslike");
        box2.setAttribute("data-id",post.post.id_post);
            text2 = document.createTextNode(post.post.ndeslike);
            box2.appendChild(text2);
            img2 = document.createElement("img");
            img2.setAttribute("src","vendor/custom-icons/deslike.png");
            img2.setAttribute("class","hitpic");
            box2.appendChild(img2);
        modal.appendChild(box2);
        box3 = document.createElement("button");
        box3.setAttribute("class","hitbox comment");
        box3.setAttribute("data-id",post.post.id_post);
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
        if(JSON.parse(localStorage.user)['id'] == post.post.id_aluno)
        {
            $(".modal-footer").prepend('<button type="button" class="btn btn-warning" onclick="editarPost('+post.post.id_post+')">Editar</button><button type="button" class="btn btn-danger" onclick="deletarPost('+post.post.id_post+')">Deletar</button>')
        }
    });
}

function editarPost(){
    $(".btn-warning").remove();
    $(".btn-danger").remove();
    $(".modal").find("textarea:not(.expande)").remove();
    $(".modal").find("hr").remove();
    $(".modal").find("h6").remove();
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