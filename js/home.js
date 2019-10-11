//Detections
$(function(){
    loadPost();
    $("#commentmodal").on("hide.bs.modal",function(e) {
        limpaModal();
    });
    loadProduto();
    loadProdutoLateral();
    $(".nav-item")[0].setAttribute("class","nav-item active");
    md = new MobileDetect(window.navigator.userAgent);
    if(md.mobile() != null) {
        $("#prodtud").remove();
        $(".col-8").attr("class","col bk-grey");
    }
    setInterval(function(){
        autosize($('textarea'));
    },1000)
    $("#postline").prepend("<div class='container post' data-id='null'><button onclick='createPost()'class='btn btn-dark btn-add'>+</button><span>Criar uma nova publicação</span></div>");
});



$(document).one("ajaxStop",function(){
    $(".post").click(function(){
        expandePost($(this).attr("data-id"));
    });

});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
       $(window).unbind('scroll');
       morePost();
   }
});

//Biulded Functions

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function loadPost()
{
$.get("./gateway/getJSON.php",{f:"posts",id:1},function(result) {
    obj = JSON.parse(result);
    obj.forEach(generatePost);
    
});
}

function searchProfile(id,item)
{
    $.get("./gateway/getJSON.php",{f:"one-profile",id:id},function(result){
        aluno = JSON.parse(result);
        post = document.createElement("div");
        post.setAttribute("class","container post");
        post.setAttribute("data-id",item.id_post);
        
        profile_pic = document.createElement("a");
        profile_pic.setAttribute("href","profile.php?id="+item.id_aluno);
        image_pic = document.createElement("img");
        image_pic.setAttribute("class","user-icon");
        if(aluno.profile_pic_url != ""){
            image_pic.setAttribute("src",aluno.profile_pic_url);
        } else {
            image_pic.setAttribute("src","css/user.png");
        }
        username = document.createTextNode(aluno.nome);
        profile_pic.appendChild(image_pic);
        profile_pic.appendChild(username);
        br = document.createElement("br");
        post_text = document.createElement("textarea");
        post_text.setAttribute("class","form-control-plaintext");
        post_text.readOnly = true;
        post_text.setAttribute("width","100vh");
        post_text.innerHTML = item.txpost;
        post.appendChild(profile_pic);
        post.appendChild(br);
        post.appendChild(post_text);
        
        document.getElementById("postline").appendChild(post);
    });
}

function expandePost(post) {
    id_final = post;
    $.get("./gateway/getJSON.php",{f:"expandePost",id:post},function(result){
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
        box1.setAttribute("class","hitbox cm1");
        box1.setAttribute("onclick","likePost("+id_final+")");
            text1 = document.createTextNode(post.post.nlike);
            box1.appendChild(text1);
            img1 = document.createElement("img");
            img1.setAttribute("src","vendor/custom-icons/like.png");
            img1.setAttribute("class","hitpic");
            box1.appendChild(img1);
        modal.appendChild(box1);
        box2 = document.createElement("button");
        box2.setAttribute("class","hitbox cm2");
        box2.setAttribute("onclick","deslikePost("+id_final+")");
            text2 = document.createTextNode(post.post.ndeslike);
            box2.appendChild(text2);
            img2 = document.createElement("img");
            img2.setAttribute("src","vendor/custom-icons/deslike.png");
            img2.setAttribute("class","hitpic");
            box2.appendChild(img2);
        modal.appendChild(box2);
        box3 = document.createElement("button");
        box3.setAttribute("class","hitbox cm3");
        box3.setAttribute("onclick","montaModal("+id_final+")");
            img3 = document.createElement("img");
            img3.setAttribute("src","vendor/custom-icons/comment.png");
            img3.setAttribute("class","hitpic");
            box3.appendChild(img3);
        modal.appendChild(box3);
        post.comentarios.forEach(genComentario);
        if(post.post.id_aluno == JSON.parse(localStorage.user)['id'])
        {
            $(".modal-footer").prepend("<button type='button' class='btn btn-warning' onclick='editarPost("+id_final+")'>Editar</button><button type='button' class='btn btn-danger' onclick='deletarPost("+id_final+")'>Deletar</button>");
        }
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
    textarea.readOnly = true;
    textarea.setAttribute("style","resize: none;");
    textarea.innerHTML = comentario.txcomentario;
    modal.appendChild(textarea);
}

function likePost(post) {
    $.get('./gateway/getJSON.php',{f:"like",id:post}, function (result){
        window.location.reload();
    });
}

function deslikePost(post) {
    
    $.get('./gateway/getJSON.php',{f:"deslike",id:post}, function(result){
        window.location.reload();
    });
}

function salvaComentario(post) {
    var usuario = parseInt(JSON.parse(localStorage.getItem('user'))['id']);
    var comentario = $("#cobox").val(); 
    $.get('./gateway/getJSON.php',{f:"comentar",id:post,comentar: comentario,usuario:usuario},function(result){
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
    $(".btn-primary").css("display","initial");
    $(".btn-primary").html("Comentar");
    $(".btn-primary").attr("onclick","salvaComentario("+post+")"); 
    $(".modal-body").html("<textarea type='text' id='cobox' maxlength='1024' width='100vw'>");
    $(".btn-secondary").html("Sair");
    $("#commentmodal").modal("show");
}

function generatePost(item)
{
    searchProfile(item.id_aluno,item);
}

function generateProduto(item)
{
    idc = item.id_vendedor;
    br = document.createElement("br");
    $.get("./gateway/getJSON.php",{f:"one-vendedor",id:idc},function(result){
        comunidade = JSON.parse(result);
        post = document.createElement("div");
        post.setAttribute("class","container post");
        title = document.createElement("span");
        title.innerHTML = "A loja "+comunidade.vendedor.nome+" colocou um item à venda:";
        post.appendChild(title);
        venda = document.createElement("div");
        venda.setAttribute("class","venda row");
            image = document.createElement("div");
            image.setAttribute("class","col-2 venda-imagem");
                img = document.createElement("img");
                img.setAttribute("src",item.image_url);
                img.setAttribute("class","venda-imgsrc");
                image.appendChild(img);
            image.appendChild(br);
                price = document.createElement("span");
                pricen = parseFloat(item.price).toFixed(2).replace(".",",");
                price.innerHTML = "R$ "+pricen;
                image.appendChild(price);
        venda.appendChild(image);
            descricao = document.createElement("div");
            descricao.setAttribute("class","col-10 venda-texto");
                desc1 = document.createElement("p");
                desc1.innerHTML = item.title;
                descricao.appendChild(desc1);
                desc2 = document.createElement("p");
                desc2.innerHTML = item.details;
                descricao.appendChild(desc2);
                reservar = document.createElement("button");
                reservar.setAttribute("class","btn btn-toolbar btn-shop");
                reservar.setAttribute("onclick","reserva("+item.id+")");
                reservar.innerHTML = "RESERVAR";
                descricao.appendChild(reservar);
        venda.appendChild(descricao);
        post.appendChild(venda);
        document.getElementById("postline").appendChild(post);
                
            
    });
}

function genProdutoLateral(item)
{
    idc = item.id_vendedor;
    br = document.createElement("br");
    $.get("./gateway/getJSON.php",{f:"one-vendedor",id:idc},function(result){
        comunidade = JSON.parse(result);
        post = document.createElement("div");
        post.setAttribute("class","container product bk-grey");
            img = document.createElement("img");
            img.setAttribute("src",item.image_url);
            img.setAttribute("class","product-imgsrc");
            post.appendChild(img);
            span = document.createElement("span");
            span.setAttribute("class","product-type");
            span.innerHTML = item.title;
            post.appendChild(span);
            link = document.createElement("a");
            link.setAttribute("href","#");
                price = document.createElement("span");
                price.setAttribute("class","product-value");
                price.innerHTML = "$"+parseFloat(item.price).toFixed(2);
                link.appendChild(price);
            post.appendChild(link);
        document.getElementById("lista_produtos").appendChild(post);
    });
}

function loadProduto()
{
    $.get("./gateway/getJSON.php",{f:"loadProdutoTurma"},function(result){
        obj = JSON.parse(result);
        obj.forEach(generateProduto);
    });
}

function loadProdutoLateral()
{
    $.get("./gateway/getJSON.php",{f:"loadProdutoTurma2"},function(result){
        obj = JSON.parse(result);
        obj.forEach(genProdutoLateral);
    });
}

function editarPost(post)
{
    $(".btn-warning").remove();
    $(".btn-danger").remove();
    $(".modal").find("textarea:not(.ori)").remove();
    $(".modal").find("hr").remove();
    $(".modal").find("h6").remove();
    $(".btn-warning").remove();
    $(".btn-danger").remove();
    $(".modal-title").html("Editando publicação");
    $(".cm1").remove();
    $(".cm2").remove();
    $(".cm3").remove();
    $(".ori").removeAttr("readonly");
    $(".ori").removeClass("form-control-plaintext");
    $(".ori").addClass("form-control");
    $(".btn-primary").html("Salvar");
    $(".btn-primary").attr("onclick","sEditPost("+post+")");
    $(".btn-primary").css("display","initial");
}

function deletarPost(post)
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

function sEditPost(post)
{
    var cobox = $(".ori").val();
    data = {
        f: "sEditPost",
        id: post,
        comentario: cobox
    };
    $.get("./gateway/getJSON.php",data,function(result){
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
    $.get("./gateway/getJSON.php",data,function(result){
        console.log(result);
        if(result != "400 ERROR") {
            window.location.reload();
        }
    });
}

function morePost()
{
   window.location.reload(); 
}