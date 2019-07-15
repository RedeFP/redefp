$(function(){
    $(".nav-item")[3].setAttribute("class","nav-item active");
	ide = JSON.parse(localStorage.user).id;
	$.get("/gateway/getJSON.php",{f:"eventoPerseguidos",id:ide},function(result){
        console.log(result)
		result.forEach(genEventoPerseguido);
		
	});
});

function genEventoPerseguido(perseguicao) {
    colfull = document.createElement("div");
    colfull.setAttribute("class","col-3 evento");
        row = document.createElement("div");
        row.setAttribute("class","row");
            inner = document.createElement("div");
            inner.setAttribute("class","col-12 evento-inner");
                center = document.createElement("center");
                    img = document.createElement("img");
                    img.setAttribute("src",perseguicao.id_perseguido.img_url);
                    img.setAttribute("class","evento-img");
                    center.appendChild(img);
                    br = document.createElement("br");
                    center.appendChild(br);
                    button = document.createElement("button");
                    button.setAttribute("class","btn btn-danger");
                    button.setAttribute("style","text-overflow: ellipsis; max-width: 150px; overflow: hidden; white-space: nowrap; display: block")
                    button.setAttribute("onclick","window.location='evento.php?id="+perseguicao.id_perseguido.id_evento+"'");
                    button.innerHTML = perseguicao.id_perseguido.no_evento;
                    center.appendChild(button);
                inner.appendChild(center);
            row.appendChild(inner);
        colfull.appendChild(row);
    document.getElementById("import1").append(colfull);
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

