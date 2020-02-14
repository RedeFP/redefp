function init()
{
    
    var idc = $_GET['id'];
    data = {
        url: URLBASE + SERVER,
        f:"one-comunity",
        id: idc
    }
    $.get(data.url,data, function(result){
        if(result == "400 ERROR") {
            alert("Erro não foi possivel carregar esta comunidade, verifique");
        } else {
            var obj = JSON.parse(result);
            $(".comunity-name").html(obj.nome);
            if(obj.cover_url == "")
            {
                $(".header-comunity").css("background-image","url('css/header.png')");
            } 
            else
            {
                $(".header-comunity").css("background-image","url('"+URLBASE+obj.cover_url+"')");
            }
            if(obj.icon_url == "")
            {
                $(".comunity-pic").attr("src","css/user.png");
            }
            else
            {
                $(".comunity-pic").attr("src",URLBASE+obj.icon_url);
            }
            
            $("#lb1").attr("href","comunity.php?id="+obj.id);
            $("#lb2").attr("href","./store/index.php?c="+obj.id);
            $("#lb3").attr("href","comunity-pictures.php?id="+obj.id);
            $("#lb4").attr("href","diary.php?c="+obj.id);
            $("#lb5").attr("href","comunity-members.php?id="+obj.id);
            $("#lb6").attr("href","comunity-about.php?id="+obj.id);
            
            init_page();
        }
    });
    
}

joinComunitydata = {
    url: URLBASE + "gateway/getJSON.php",
    f: "verificaInscricao",
    id: parseUser().id,
    cid: $_GET['id']
};

function joinComunity(result) {
    if(!isValid(result)) {
        app = 0;
        $(".comunity-name").append("&nbsp;<button class='btn btn-success' onclick='inscreverComunidade()'><i class='fas fa-plus'></i>&nbsp;Inscrever</button>").css("padding-top","20px").css("padding-bottom","20px");
    } else {
        app = 1;
    }
}

function inscreverComunidade() {
    data = {
        url: URLBASE + SERVER,
        f: "ComunidadeInscricao",
        id: parseUser().id,
        cid: $_GET['id']
    };
    $.get(data.url,data,function(result){
        if(isValid(result)) {
            window.location.reload();
        } else {
            alert("Ocorreu um erro: " + result.data);
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