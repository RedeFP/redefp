var eventData = [
    {
        "date":"2019-10-02",
        "badge":true,
        "title":"De noite",
        "body":"<p class=\"lead\">Party<\/p><p>Like it's 1999.<\/p>",
        "footer":"At Paisley Park",
        "classname":"purple-event",
        modal: true
    },
];
var id = JSON.parse(localStorage.prpuser).idprofessor;
$(function(){
    $.getScript("../js/JS.JS");
    professor = JSON.parse(localStorage.prpuser)['idprofessores'];
    $("#myCalendar").zabuto_calendar({
        language: "pt",
        year: 2019,
        nav_icon: {
            prev: '<i class="fa fa-chevron-left fa-lg"></i>',
            next: '<i class="fa fa-chevron-right fa-lg"></i>'
        },
        // data: eventData
        ajax: {
         url: "../gateway/getJSON.php?f=loadCalendar&id="+professor,
         modal: true
        }
    });

    function loadLocal() {
        $.get(URLBASE+"gateway/getJSON.php?f=loadLocal",null,function(result){
            obj =result;
            obj.forEach(genLocal);
        });
    };

    function genLocal(item) {
        opt = document.createElement("option");
        opt.value = item.id_local;
        opt.innerHTML = item.no_local;
        document.getElementById("localLoad").appendChild(opt);
    }

    $("#createNewEvent").click(function(){
        console.log("Clicou no Botão `Create New Event`");
        $(".modal-title").text("Criando um novo evento");
        $(".modal-body").html('<div class="form-group row"><label for="title_reuniao" class="col-4">Nome do Evento:</label><div class="col-8"><input type="text" class="form-control " id="title_reuniao" placeholder="Nome do Evento"></div></div><div class="form-group row"><label class="col-4" for="date_reuniao">Data do Evento: </label><div class="col-8"><input type="date" class="form-control" id="date_reuniao"></div></div><div class="form-group row"><label class="col-4" for="txpost_reuniao">Texto do Evento:</label><div class="col-8"><input type="text" class="form-control" id="txpost_reuniao" placeholder="Texto do Evento" </div></div></div><div class="form-group row"><label for="localLoad" class="col-4">Local do Evento:</label><div class="col-8"><select id="localLoad" class="custom-select"></select></div></div>')
        $("#localLoad").html(loadLocal());
        $("#localLoad").prepend('<option value="" disabled selected hidden></option><option value="add">Cadastrar</option>');
        $("#localLoad").change(function(){
            if($(this).val() == "add") {
                console.log("#Add");
                //TODO: implement AddLocal Modal
            }
        })
        $("#commentmodal").modal('show');
        $(".btn-primary").text("Salvar").attr("onclick","saveModal()");
    });
    
});

function saveModal() {
    if($("#title_reuniao").val() == "") {
        return false;
    }
    if($("#date_reuniao").val() == "") {
        return false;
    }
    if($("#txpost_reuniao").val() == "") {
        return false;
    }
    if($("#localLoad").val() == "") {
        return false;
    }
    data = {
        f: "saveReuniao",
        id_professor: JSON.parse(localStorage.prpuser)['idprofessores'],
        title_reuniao: $("#title_reuniao").val(),
        date_reuniao: $("#date_reuniao").val(),
        txpost_reuniao: $("#txpost_reuniao").val(),
        id_local: $("#localLoad").val()
    }
    console.log(data);
    $.get(URLBASE+"gateway/getJSON.php",data,function(result){
        console.log(result);
        if(result == true) {
            window.location.reload();
        }
    });
}

function deleteEvento(id) {
    data = {
        f: "deleteReuniao",
        id: id
    }
    $.get(URLBASE+"gateway/getJSON.php",data,function(result){
        console.log(result);
        if(result == true) {
            if(window.navigator.vibrate){
                window.navigator.vibrate(["200","20","20"]);
            }
            window.location.reload();
        }
    })
}

function editEvento(id) {
    data = {
        f: "findReuniao",
        id: id
    };
    $.get(URLBASE+"gateway/getJSON.php",data,function(result){
        console.log(result);
        info = result;
        $(".modal").modal('hide');
        $("#commentmodal").modal('show');
        $("#commentmodal .modal-title").text("Editando Evento");
        $("#commentmodal .btn-primary").text("Salvar").attr("onclick","btnSalvar("+info.id_reuniao+")");
        $(".modal-body").html(`<div class="form-group row"><label for="title_reuniao" class="col-4">Nome do Evento:</label><div class="col-8"><input type="text" class="form-control " id="title_reuniao" value="`+info.title_reuniao+`"></div></div><div class="form-group row"><label class="col-4" for="date_reuniao">Data do Evento: </label><div class="col-8"><input type="date" class="form-control" id="date_reuniao" value="`+info.date_reuniao+`"></div></div><div class="form-group row"><label class="col-4" for="txpost_reuniao">Texto do Evento:</label><div class="col-8"><input type="text" class="form-control" id="txpost_reuniao" placeholder="Texto do Evento" value="`+info.txpost_reuniao+`"></div></div>`);
        $("#commentmodal .btn-secondary").text("Cancelar").attr("onclick","window.location.reload()");
    });
}

function btnSalvar(id) {
    data = {
        f: "editReuniao",
        id: id,
        a: $("#title_reuniao").val(),
        b: $("#date_reuniao").val(),
        c: $("#txpost_reuniao").val()
    };
    $.get(URLBASE+"gateway/getJSON.php",data,function(result){
        console.log(result);
        if(result == "true") {
            window.location.reload();
        }
    });
}
