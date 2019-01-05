function init_page()
{
    console.info("Iniciando... 75%");
    var idc = $_GET['id'];
    $.get("/gateway/getJSON.php",{f:"loadPostComunity",id:idc}, function(result){
        obj = JSON.parse(result);
        obj.forEach(searchByUser);
    })
    .done(function(){
        
        
    });
    console.info("Iniciando... 100%");
}

$(function(){
    limpaModal();

});

function showComentario(post)
{
    $.get("/gateway/getJSON.php",{f:"comunity-postfull",id:post},function(result){
        
    })
}

function searchByUser(item)
{
    var idu = item.id_aluno;
    $.get("/gateway/getJSON.php",{f:"one-profile",id:idu},function(result){
        obj = JSON.parse(result);
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
        imgsrc = "css/user.png";
    }
    else
    {
        imgsrc = aluno.profile_pic_url;
    }
    img.setAttribute("src",imgsrc);
    treat = document.createTextNode(aluno.nome);
    br = document.createElement("br");
    user.appendChild(img);
    user.appendChild(treat);
    div.appendChild(user);
    div.appendChild(br);
    dpost = document.createElement("textarea");
    dpost.setAttribute("class","form-control-plaintext");
    dpost.setAttribute("width","100vh");
    dpost.innerHTML = post.txpost;
    div.appendChild(dpost);
    button1 = document.createElement("button");
    button1.setAttribute("class","hitbox");
    button1.setAttribute("onclick","likePost("+post.id_post+")");
    icon1 = document.createElement("img");
    icon1.setAttribute("class","hitpic");
    icon1.setAttribute("src","/vendor/custom-icons/like.png"); 
    like = document.createTextNode(post.nlike);
    button1.appendChild(icon1);
    button1.appendChild(like);
    button2 = document.createElement("button");
    button2.setAttribute("class","hitbox");
    button2.setAttribute("onclick","deslikePost("+post.id_post+")");
    icon2 = document.createElement("img");
    icon2.setAttribute("class","hitpic");
    icon2.setAttribute("src","/vendor/custom-icons/deslike.png");
    deslike = document.createTextNode(post.ndeslike);
    button2.appendChild(icon2);
    button2.appendChild(deslike);
    button3 = document.createElement("button");
    button3.setAttribute("class","hitbox");
    button3.setAttribute("onclick","montaModal("+post.id_post+")");
    icon3 = document.createElement("img");
    icon3.setAttribute("class","hitpic");
    icon3.setAttribute("src","/vendor/custom-icons/comment.png");
    button3.appendChild(icon3);
    div.appendChild(button1);
    div.appendChild(button2);
    div.appendChild(button3);
    document.getElementById("import").appendChild(div);
    $(".post").on("click",function() {
        expandePost(this.getAttribute("data-id"));
    });
    
}

function likePost(post) {
    $.get('/gateway/getJSON.php',{f:"comunity-like",id:post}, function (result){
        if(result == "200 OK") {
            window.location.reload();
        }
    });
}

function deslikePost(post) {
    $.get('/gateway/getJSON.php',{f:"comunity-deslike",id:post}, function(result){
        if(result == "200 OK") {
            window.location.reload();
        }
    });
}

function limpaModal()
{
    $(".modal-title").html("");
    $(".modal-body").html("");
    $(".btn-primary").attr("onclick","");
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

function salvaComentario(post) {
    var usuario = parseInt(JSON.parse(localStorage.getItem('user'))['id']);
    var comentario = $("#cobox").val(); 
    $.get('/gateway/getJSON.php',{f:"comunity-comentar",id:post,comentar: comentario,usuario:usuario},function(result){
        console.log(result);
        if(result == "200 OK")
        {
            limpaModal();
            $("#commentmodal").modal("hide")
        }
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