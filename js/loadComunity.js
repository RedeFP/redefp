function init()
{
    console.info("Iniciando... 0%");
    var idc = $_GET['id'];
    $.get("/gateway/getJSON.php",{f:"one-comunity", id: idc}, function(result){
        if(result == "400 ERROR") {
            console.error("Erro não foi possivel carregar esta comunidade, verifique");
        } else {
            var obj = JSON.parse(result);
            $(".comunity-name").html(obj.nome);
            if(obj.cover_url == "")
            {
                $(".header-comunity").css("background-image","url('css/header.png')");
            } 
            else
            {
                $(".header-comunity").css("background-image","url('"+obj.cover_url+"')");
            }
            if(obj.icon_url == "")
            {
                $(".comunity-pic").attr("src","css/user.png");
            }
            else
            {
                $(".comunity-pic").attr("src",obj.icon_url);
            }
            console.info("Iniciando... 25%");
            $("#lb1").attr("href","comunity.php?id="+obj.id);
            $("#lb2").attr("href","comunity-store.php?id="+obj.id);
            $("#lb3").attr("href","comunity-pictures.php?id="+obj.id);
            $("#lb4").attr("href","diary.php?c="+obj.id);
            $("#lb5").attr("href","comunity-members.php?id="+obj.id);
            $("#lb6").attr("href","comunity-about.php?id="+obj.id);
            console.info("Iniciando... 50%");
            init_page();
        }
    });
    
}

$(function(){
    init();
    $(".nav-item")[2].setAttribute("class","nav-item active");
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 1000) {
       $(window).unbind('scroll');
       morePost();
   }
});

function morePost()
{
   //window.location.reload(); 
}