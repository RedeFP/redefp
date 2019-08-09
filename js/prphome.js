$(function(){
    $(".nav-link").first().addClass("active");
    $.get("../gateway/getJSON.php?f=avisosLoad",function(result){
        console.log(result);
        obj = result;
        obj.forEach(genAviso);
    });
    document.getElementsByClassName("post")[0].style.paddingBottom = "10px";    
});

function genAviso(obj) {
    div = document.createElement("div");
    div.style.marginTop = "10px";
    div.style.background = "#efefef";
    div.style.padding = "2px";
    div.style.borderRadius = "5px";
    div.innerHTML = "<a href='profiles.php?id="+obj.idresponsavel.idprofessores+"'>"+obj.idresponsavel.noprofessores+"</a><br>";
    div.innerHTML += obj.txpost;
    document.getElementsByClassName("post")[0].append(div);
}