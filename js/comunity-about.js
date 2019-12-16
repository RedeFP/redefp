function init_page()
{
    

    //Remoção em breve: console.info("Iniciando... 75%"); Orientação ao programador através do console do navegador
    console.info("Iniciando... 75%");
    //Indicação visual no menu, da página em que está sendo exibido.
    $("#lb1").parent().removeClass("active");
    $("#lb6").addClass("active");
    
    //Define as ações quando clicado nos botões
    $(".btn-danger").click(denunciaMembro);
    $(".btn-success").click(removeInscrito);
    loadComunidadeDetalhes();
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
    $.ajax({
        url: URLBASE + "gateway/getJSON.php?f=loadInscritos&id="+id,
        global: true,
        type: "GET",
        dataType: 'json',
        async: false,
        success: function(result) {
            var index;
            for(index =0; index < result.data.length; ++index){
                option = document.createElement("option");
                option.value = result.data[index].id_aluno.id;
                option.innerHTML = result.data[index].id_aluno.id + " - " + result.data[index].id_aluno.nome;
                $("#idAluno").append(option);
            };
        }
    });
    $(".modal .modal-title").text("Denunciando membros");
    $(".modal .modal-body").html("<select name='idAluno' id='idAluno'>").append(options);
    $(".modal").modal('show');
}