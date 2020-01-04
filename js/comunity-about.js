function init_page()
{
    var app;
    //Remoção em breve:  Orientação ao programador através do console do navegador
    
    //Indicação visual no menu, da página em que está sendo exibido.
    $("#lb1").parent().removeClass("active");
    $("#lb6").addClass("active");
    
    //Define as ações quando clicado nos botões
    $(".btn-danger").click(denunciaMembro);
    $(".btn-success").click(removeInscrito);
    loadComunidadeDetalhes();
    $.get(joinComunitydata.url,joinComunitydata,joinComunity)
    .done(function(){
        if(app == undefined) {
            $(".about-description2").hide();
            $(".about2").hide();
            $(".about-title2").hide();
        }
        
    });
}

function loadComunidadeDetalhes() {
    data = {
        url: URLBASE + "gateway/getJSON.php",
        f: "loadComunidadeDetalhes",
        id: $_GET['id']
    };
    $.get(data.url,data,function(result){
        if(isValid(result)) {
            $(".about-description").text(result.data.txDescricao);
        } else {
            alert("Ocorreu um erro: "+result.data)
        }
    });
}

function removeInscrito(){

    //Definindo os items visuais da janela suspensa
    $(".modal .modal-title").text("Desinscrição da comunidade");
    $(".modal .modal-body").text("Tem certeza que você quer se desinscrever desta comunidade?");
    $(".modal .btn-primary").hide();
    $(".modal .btn-danger").show().html("<i class='fas fa-check'></i>").off().click(removeInscritoReq);
    $(".modal .btn-secondary").hide();

    //Exibição da janela suspensa
    $(".modal").modal('show');
}

function removeInscritoReq() {

    //Declaração das variaveis de contexto
    data = {
        url: URLBASE + "gateway/getJSON.php",
        f: "removeComunidadeInscrito",
        cid: $_GET['id'],
        id: parseUser().id
    }

    //Inicio da requisição assincrono
    $.get(data.url,data,function(result){
        if(isValid(result)){
            window.location.href = 'comunitys.php';
        } else {
            alert("Ocorreu um erro: "+result.data);
        }
    });
}


function denunciaMembro() {
    id = $_GET['id'];
    $(".modal .modal-body").html("<strong>Membro:</strong><br><select name='idAluno' id='idAluno'></select><br><br><strong>Descrição da denuncia: </strong><br><input type='text' name='txDenuncia' id='txDenuncia' maxlength='1000'><br>").attr("align","center");
    $.ajax({
        url: URLBASE + "gateway/getJSON.php?f=loadInscritos&id="+id,
        global: true,
        type: "GET",
        dataType: 'json',
        async: false,
        success: function(result) {
            var index;
            for(index =0; index < result.data.length; ++index){
                if(result.data[index].id_aluno.id !== parseUser().id){
                    option = document.createElement("option");
                    option.value = result.data[index].id_aluno.id;
                    option.innerHTML = result.data[index].id_aluno.nome;
                    $("#idAluno").append(option);
                }
            };
        }
    });
    $(".modal .modal-title").text("Denunciando membros");
    $(".modal .btn-primary").html("<i class='fas fa-paper-plane'></i>").off().click(denunciaMembroReq);
    $(".modal .btn-secondary").hide();
    $(".modal").modal('show');
}

function denunciaMembroReq() {
    data = {
        url: URLBASE + "gateway/getJSON.php",
        f: "denunciaMembro",
        id: parseUser().id,
        cid: $_GET['id'],
        uid: $("#idAluno").val(),
        txDenuncia: $("#txDenuncia").val()
    };
    console.dir(data);
    $.get(data.url,data,function(result){
        if(isValid(result)) {
            window.location.reload();
        } else {
            alert("Ocorreu um erro: "+result.data);
        }
    });
}