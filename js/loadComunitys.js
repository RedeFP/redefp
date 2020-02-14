function loadComunitysI()
{
    data = {
        url: URLBASE + SERVER,
        id: parseUser().id,
        f: "loadComunitysInscrito"
    };
    $.get(data.url,data,function(result){
        obj = JSON.parse(result);
        obj.forEach(genComunityI);
    });
    data2 = {
        url: URLBASE + SERVER,
        f: "carregaNovasComunidades",
        id: parseUser().id
    }
    $.get(data2.url,data2,function(result){
        console.log(result);
        result.data.forEach(genComunity);
    });
    $(".nav-item")[2].setAttribute("class","nav-item active");
}

function genComunity(item) 
{
    
    if(item.icon_url == "") {
        src = URLBASE + "css/user.png";
    } else {
        src = URLBASE + icon_url;
    }
    $("#import2").append('<a href="comunity.php?id='+item.id+'" style="margin-bottom: 10px;"><div class="comunity-list-item"><img src="'+src+'" width="90px"><br><span>'+item.nome+'</span></div></a>')
}

function genComunityI(item)
{
    comunity_link = document.createElement("a");
    comunity_link.setAttribute("href","comunity.php?id="+item.id_comunidade);
    comunity_link.setAttribute("style","margin-bottom: 10px;");
    comunity_item = document.createElement("div");
    comunity_item.setAttribute("class","comunity-list-item");
        comunity_image = document.createElement("img");
        comunity_image.setAttribute("width","90px");
        if(item.comunidade.icon_url != "")
        {
            imagesrc = URLBASE+item.comunidade.icon_url;
        }
        else
        {
            imagesrc = "css/user.png";
        }
        comunity_image.setAttribute("src",imagesrc);
        comunity_item.appendChild(comunity_image);
        br = document.createElement("br");
        comunity_item.appendChild(br);
        comunity_name = document.createElement("span");
        comunity_name.innerHTML = item.comunidade.nome;
        comunity_item.appendChild(comunity_name);
        comunity_link.appendChild(comunity_item);
    document.getElementById("import1").appendChild(comunity_link);
}

$(function(){
    loadComunitysI();
});