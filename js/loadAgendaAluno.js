$(function(){
    $(".nav-item")[3].setAttribute("class","nav-item active");
	ide = JSON.parse(localStorage.user).id;
	$.get("/gateway/getJSON.php",{f:"eventoPerseguidos",id:ide},function(result){
		JSON.parse(result).forEach(genEventoPerseguido);
		
	});
});

function genEventoPerseguido(perseguicao) {
	/*
					<div class="col-3 evento">
                        <div class="row">
                            <div class="col-12 evento-inner" style="background-color: lightblue; border-radius: 10px; padding: 3px">
                                <center>
                                    <h6>Oscar 2018</h6>
                                    <img src="./uploads/oscar2018capa.jpg" width="100%" style="margin-bottom: 5px">
                                    <br>
                                    <button class="btn btn-primary" onclick="window.location = 'evento.php'">Detalhes</button>
                                </center>
                            </div>
                        </div>
                    </div>
		*/
}

