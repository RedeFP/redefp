//Função responsavel pelo carregamento do conteudo à página, é chamada apartir do arquivo loadComunity.js
function init_page()
{
    var app;
    //Orientação ao programador
    

    //Orientação ao sistema para se informar apartir dos parametros URL
    var idc = $_GET['id'];
    
    $.get(joinComunitydata.url,joinComunitydata,joinComunity);
    if(app == 1) {
        data1 = {
            f:"loadPostComunity",
            id:idc,
            url: URLBASE + SERVER
        }
        $.get(data1.url,data1,function(result){
            obj = JSON.parse(result);
            obj.forEach(searchByUser);
        })
        .done(function(){
            
            
        });
    } else {
        $("#addPostBtn").remove();
    }
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
});

$(document).one("ajaxStop",function(){
    setInterval(function(){
        autosize($("textarea"))
    },1000);
});

function ftnSalvaPost() {
    data = {
        URL: URLBASE+"gateway/getJSON.php",
        f: "salvaPostComunidade",
        id: parseUser().id,
        idc: $_GET['id'],
        post: $("#txPost").val()
    }
    $.get(data.URL,data,function(result){
        if(isValid(result)) {
           window.location.reload(); 
        } else {
            alert("Ocorreu um erro: "+result.data);
        }
    })
}

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

function montaModalAddPost() {
    $(".modal .modal-title").html("Adicionando publicação");
    $(".modal .modal-body").html("<input type='text' name='txPost' id='txPost' class='form-control' maxlength='180' style='width: 100% !important' required>");
    $(".modal .btn-primary").text("Salvar").attr('onclick','ftnSalvaPost()');
    $(".modal").modal('show');
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
    limpaModal();
    $(".modal .modal-title").html("Comentar em uma publicação");
    $(".modal .modal-body").html("<textarea class='form-control' id='cobox'>");
    $(".modal .btn-primary").attr("onclick","salvaComentario("+post+")").show().html("Comentar");
    $(".modal .btn-secondary").html("Sair");
    $(".modal").modal("show");
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
        $(".modal .btn-primary").css("display","none");
        $(".modal .btn-secondary").html("Fechar").attr("onclick","limpaModal()");
        $(".modal").modal('show');
        if(JSON.parse(localStorage.user)['id'] == post.post.id_aluno)
        {
            $(".modal .modal-footer").prepend('<button type="button" class="btn btn-warning" onclick="editarPost('+post.post.id_post+')">Editar</button><button type="button" class="btn btn-danger" onclick="deletarPost('+post.post.id_post+')">Deletar</button>')
        }
    });
}

function editarPost(id){
    $(".btn-warning").hide();
    $(".btn-danger").hide();
    $(".modal .btn-primary").show().text("Salvar").attr("onclick","salvarEditarPostComunidade("+id+")");
    $(".modal").find("textarea:not(.expande)").remove();
    $(".modal").find("hr").remove();
    $(".modal").find("h6").remove();
    $(".modal .hitbox").remove();
    $(".modal textarea").removeAttr("readonly").removeClass("form-control-plaintext").addClass("form-control");
}

function salvarEditarPostComunidade(id) {
    data = {
        URL: URLBASE + "gateway/getJSON.php",
        f: "salvarEditarPostComunidade",
        id: id,
        post: $(".modal textarea.form-control.expande").val()
    };
    $.get(data.URL,data,function(result){
        if(isValid(result)) {
            window.location.reload();
        } else {
            alert("Ocorreu um erro: "+result.data)
        }
    });
}

function genComentario(comentario)
{
    $(".modal .modal-body").append("<hr><h6>"+comentario.aluno.nome+"</h6><textarea class='form-control-plaintext' style='resize: none'>"+comentario.txcomentario);
}

function deletarPost(id) {
    data = {
        URL: URLBASE + "gateway/getJSON.php",
        f: "deletarPostComunidade",
        id: id
    };
    $.get(data.URL,data,function(result){
        if(isValid(result)) {
            window.location.reload();
        } else {
            alert("Ocorreu um erro: "+result.data);
        }
    })
}