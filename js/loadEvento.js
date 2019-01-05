if($_GET['id'] == undefined)
{
    window.location.href = "diary.php";
}
else
{
    var ide = $_GET['id'];
    $.get("/gateway/getJSON.php",{f:"loadEvento",id:ide},function(result){
		obj = result;
        $("#event-name").html(obj.no_evento);
        $("#event-date").html(new Date(obj.dt_evento).toLocaleString());
        $("#place-name").html(obj.id_local.no_local);
        $("#place-address").html( obj.id_local.no_logradouro + ", " + obj.id_local.nr_logradouro + " - " + obj.id_local.no_bairro + " - " + obj.id_local.no_cidade );
        $("#event-owner").html("Organizado por: "+obj.id_organizador.no_organizador);
        $("#lb1").css("color","black");
        $("#lb1").attr("href","evento.php?id="+$_GET['id']);
        $("#lb2").attr("href","evento-chat.php?id="+$_GET['id']);
        if(obj.if_doacao == 1){ donate = "  + Um quilograma de alimento não-perecivel"; }else{ donate = ""; }
        $("#event-price").html("R$ "+ parseFloat(obj.vl_ingresso).toFixed(2) + donate);
		obj.avisos.forEach(genAviso);
		obj.convites.forEach(genConvites);
		obj.perseguidores.forEach(genPerseguidor);
    });
	
}

function genAviso(item)
{
		col = document.createElement("div");
		col.setAttribute("class","col");
			card = document.createElement("div");
			card.setAttribute("class","card");
				cardheader = document.createElement("div");	
				cardheader.setAttribute("class","card-header");
				cardheader.innerHTML = "Informação";
				card.appendChild(cardheader);
				cardbody = document.createElement("div");
				cardbody.setAttribute("class","card-body");
					cardtitle = document.createElement("h5");
					cardtitle.setAttribute("class","card-title");
					cardtitle.innerHTML = item.tx_titulo;
					cardbody.appendChild(cardtitle);
					cardtext = document.createElement("p");
					cardtext.setAttribute("class","card-text");
					cardtext.innerHTML = item.tx_post;
					cardbody.appendChild(cardtext);
					btn = document.createElement("a");
					btn.setAttribute("class","btn btn-primary");
					btn.setAttribute("href","info.php?i="+item.id_pub);
					btn.innerHTML = "Ver detalhes";
					cardbody.appendChild(btn);
				card.appendChild(cardbody);
			col.appendChild(card);
		document.getElementById("import1").appendChild(col);
}
	
function genConvites(item)
{
	col = document.createElement("div");
	col.setAttribute("class","col");
		card = document.createElement("div");
		card.setAttribute("class","card 18rw");
			cardimg = document.createElement("img");
			cardimg.setAttribute("class","card-img-top");
			cardimg.setAttribute("alt","Imagem");
			cardimg.setAttribute("src",item.id_convidado.profile_pic_url);
			card.appendChild(cardimg);
			cardbody = document.createElement("div");
			cardbody.setAttribute("class","card-body");
				cardtitle = document.createElement("h5");
				cardtitle.setAttribute("class","card-title");
				cardtitle.innerHTML = item.id_convidado.nome;
				cardbody.appendChild(cardtitle);
				cardlink = document.createElement("a");
				cardlink.setAttribute("class","btn btn-primary");
				cardlink.setAttribute("href","profile.php?id="+item.id_convidado.id);
				cardlink.innerHTML = "Ver perfil";
				cardbody.appendChild(cardlink);
			card.appendChild(cardbody);
		col.appendChild(card);
	document.getElementById("import2").appendChild(col);
}

function genPerseguidor(item)
{
	col = document.createElement("div");
	col.setAttribute("class","col");
		card = document.createElement("div");
		card.setAttribute("class","card 18rw");
			cardimg = document.createElement("img");
			cardimg.setAttribute("class","card-img-top");
			cardimg.setAttribute("alt","Imagem");
			cardimg.setAttribute("src",item.id_perseguidor.profile_pic_url);
			card.appendChild(cardimg);
			cardbody = document.createElement("div");
			cardbody.setAttribute("class","card-body");
				cardtitle = document.createElement("h5");
				cardtitle.setAttribute("class","card-title");
				cardtitle.innerHTML = item.id_perseguidor.nome;
				cardbody.appendChild(cardtitle);
				cardlink = document.createElement("a");
				cardlink.setAttribute("class","btn btn-primary");
				cardlink.setAttribute("href","profile.php?id="+item.id_perseguidor.id);
				cardlink.innerHTML = "Ver perfil";
				cardbody.appendChild(cardlink);
			card.appendChild(cardbody);
		col.appendChild(card);
	document.getElementById("import3").appendChild(col);
}
