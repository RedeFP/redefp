$(function(){
    user = JSON.parse(localStorage.prpuser);
    
    img = user.tximagem_professores;
    if(img == null) {
        img = "../css/user.png";
    }
    $("img.img-fluid").attr("src",img);
    $("h3.title").html(user.noprofessores);
    //TODO: bd istecnico
    $("h6").html("Professor de Técnico");
    //TODO: bd biografia
    $(".description p").html("Um professor mala, zé ruela");
    $(".nav-link")[1].setAttribute("class","nav-link active");
});
