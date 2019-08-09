$(function(){
    $(".nav-link").first().addClass("active");
    $.get("../gateway/getJSON.php?f=avisosLoad",function(result){
        console.log(result);
        obj = result;
        obj.forEach(genAviso);
    });
    document.getElementsByClassName("post")[0].style.paddingBottom = "10px";    
    var el = document.getElementsByClassName("post")[0];
    el.insertBefore(genAddAviso(),el.firstChild);
});

function genAddAviso() {
    a = document.createElement("a");
    a.setAttribute("class","btn btn-warning");
    a.setAttribute("style","color: red");
    a.setAttribute("onclick","setModalAddAviso()");
    a.innerHTML = "<i class='fas fa-plus'></i>&nbsp;Adicionar novo aviso";
    return a;
}

function setModalAddAviso() {
    $(".modal-title").text("Criando novo aviso");
    $(".modal-body").html("<textarea id='textaviso' style='width:100%'></textarea>");
    $(".btn-primary").addClass("btn-success").text("Salvar").attr("onclick","salvarAviso()");
    $("#commentmodal").modal('show');
}

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

function limpaModal() {
    $("#commentmodal").modal('hide');
    $(".modal-title").text("Modal title");
    $(".modal-body").html("");
    $(".btn-primary").attr("class","btn btn-primary").removeAttr("onclick").text("Save");
    $(".btn-secondary").text("Cancel");
}

function salvarAviso() {
    input = $("#textaviso").val();
    responsavel = JSON.parse(localStorage.prpuser)["idprofessores"];
    data = {
        id:responsavel,
        input:input,
        f: "saveAviso"
    };
    $.get("../gateway/getJSON.php",data,function(result){
        if(result == "true") {
            window.location.reload();
        }
    });
}

$(function(){
    limpaModal();
    $("#commentmodal").on("hidden.bs.modal",limpaModal);
});