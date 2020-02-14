<!DOCTYPE html>
<html>
<head>
<?php include("./res/common/head.php"); ?>
    <script src="js/loadAgendaAluno.js"></script>
    <script>
        function modalAddEvento() {
            $(".modal").modal('show');
            $(".modal .modal-title").text("Criar um novo Evento");
            $(".modal .btn-secondary").hide();
            $(".modal .btn-primary").show().text("Criar").attr("onclick","addEvento()");
            $(".modal .modal-body").html("").append("Nome:&nbsp;<input type='text' id='txNome' class='form-control'><br>");
            $(".modal .modal-body").append("Data:&nbsp;<input type='date' id='txDescricao' class='form-control'><br>");
            $(".modal .modal-body").append("Local:&nbsp;<select id='selectIdTema' class='form-control'></select>&nbsp;<button class='btn btn-light' data-toggle='tooltip' data-placement='bottom' title='Adicionar um novo local' onclick='modalAddLocal()'><i class='far fa-question-circle'>&nbsp;Outro local?</button>");
            $.ajax({
                url: URLBASE + SERVER + "?f=loadLocais",
                global: true,
                type: "GET",
                dataType: 'json',
                async: false,
                success: function(result) {
                    var index;
                    for(index =0; index < result.data.length; ++index){
                        $("#selectIdTema").append(`<option value='`+result.data[index].id_local+`'>`+result.data[index].no_local+`</option>`);
                    }
                }
            });
        }

        function addEvento() {
            data = {
                url: URLBASE + SERVER,
                f: "addAlunoEvento",
                id: parseUser().id,
                no_evento: $("#txNome").val(),
                dt_evento: $("#txDescricao").val(),
                id_local: $("#selectIdTema").val(),
            }
            $.get(data.url,data,function(result) {
                console.log(result);
            })
        }
    </script>
</head>
<body>
    <?php include("./res/common/nav.php");?>
    <main role="main" class="container-fluid" style="margin-top: 71px; padding-top: 10px;">
    <button class='btn btn-warning' onclick='modalAddEvento()'><i class='fas fa-plus'></i>&nbsp;CRIAR</button>
        <div class="row">
            <div class="col-12">
                <h1>Eventinhos que persigo</h1>
                <div class="row evento-row" id="import1" style=";">
                   
                </div>
            </div>
            <div class="col-12">
                <h1>Eventinhos ao meu redor</h1>
                <div class="row evento-row" id="import2">
                </div>
            </div>
        </div>
    </main>
    <?php include("./res/common/modal.php");?>
</body>
</html>