$(function(){
    uuid = JSON.parse(localStorage.prpuser)["idprofessores"];
    data = {
        id:uuid,
        f:"notesload"
    };
   $.get("../gateway/getJSON.php",data,function(result){
    console.log(result);
    obj = result;
    obj.forEach(genList);
    obj.forEach(genTab);
   });
});


function genList(obj) {
    list = document.createElement("a");
    list.setAttribute("class","list-group-item list-group-item-action descriptions");
    list.setAttribute("data-toggle","list");
    list.setAttribute("href","#note"+obj.id);
    list.setAttribute("role","tab");
    list.innerHTML = obj.txnotes;
    document.getElementById("myList").append(list);
}

function genTab(obj) {
    res = obj.txnotes.replace(/\r\n/g,"<br>");
    tab = document.createElement("div");
    tab.setAttribute("class","tab-pane");
    tab.setAttribute("id","note"+obj.id);
    tab.setAttribute("role","tabpanel");
    p = document.createElement("p");
    p.innerHTML = res;
    tab.appendChild(Toolbar(obj.id));
    tab.appendChild(p);
    document.getElementById("myTab").append(tab);
}

function genDeleteModal(id) {
    $("#commentmodal").modal('show');
    $(".modal-title").text("Anotação #"+id);
    $(".modal-body").text("Confirme que vai deletar a anotação");
    $(".btn-primary").addClass("btn-danger").text("Deletar").attr("onclick","sendDelete("+id+")");
    $(".btn-secondary").text("Cancelar").attr("onclick","limpaModal()");
}

function limpaModal() {
    $("#commentmodal").modal('hide');
    $(".modal-title").text("Modal title");
    $(".modal-body").html("");
    $(".btn-primary").attr("class","btn btn-primary").removeAttr("onclick").text("");
    $(".btn-secondary").text("");
}

function genEditModal(id) {
    $.get("../gateway/getJSON.php",{f:"viewNote",id:id},function(result){
        console.log(result);
        obj = result;
        res = obj.txnotes.replace(/\r\n/g,"<br>");
        $(".modal").modal('show');
        $(".modal-title").text("Anotação #"+id);
        $(".modal-body").html("<textarea id='noteedit' style='width:100%' class='form-control-plaintext'>"+obj.txnotes+"</textarea>");
        $(".btn-primary").attr("onclick","saveEdit("+id+")").text("Salvar").addClass("btn-success");
    });
}

function saveEdit(id) {
    input = $("#noteedit").val();
    data = {
        f: "editNote",
        input:input,
        id:id
    };
    $.get("../gateway/getJSON.php",data,function(result){
        if(result == "true") {
            window.location.reload();
        }
    });
}

function sendDelete(id) {
    data = {
        f: "deleteNote",
        id: id
    };
    $.get("../gateway/getJSON.php",data,function(result){
        if(result == "true") {
            window.location.reload();
        }
    });
}

function setModalAddNote() {
    $("#commentmodal").modal('show');
    $(".modal-title").text("Criando uma nova Anotação");
    $(".modal-body").html("<textarea id='noteadd' style='width:100%' class='form-control'></textarea>");
    $(".btn-primary").text("Salvar").addClass("btn-success").attr("onclick","salvarNote()");
}

function salvarNote() {
    input = $("#noteadd").val();
    id = JSON.parse(localStorage.prpuser)['idprofessores'];
    data = {
        f: "salvarNote",
        id: id,
        input: input
    };
    $.get("../gateway/getJSON.php",data,function(result){
        if(result == "true") {
            window.location.reload();
        }
    });
}

function Toolbar(id) {
    div = document.createElement("div");
    div.innerHTML = '<button class="btn btn-outline-primary" onclick="genEditModal('+id+')"><i class="fas fa-edit fa-lg"></i>&nbsp;Editar</button>&nbsp;<button class="btn btn-outline-danger" onclick="genDeleteModal('+id+')"><i class="fas fa-trash-alt fa-lg"></i>&nbsp;Deletar</button><br>';
    return div;
}