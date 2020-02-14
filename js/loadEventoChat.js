if($_GET['id'] == undefined)
{
	window.location.href = "diary.php";
}
else
{
	$("#lb1").attr("href","evento.php?id="+$_GET['id']);
	$("#lb2").attr("href","evento-chat.php?id="+$_GET['id']);
	$("#lb2").attr("class","nav-link active");
	data = {
		url: URLBASE + SERVER,
		f: "loadEvento",
		id: $_GET['id']
	}
    $.get(data.url,data,function(result){
        obj = result;
        $("#event-name").html(obj.no_evento);
        $("#event-date").html(new Date(obj.dt_evento).toLocaleString());
        $("#place-name").html(obj.id_local.no_local);
        $("#place-address").html( obj.id_local.no_logradouro + ", " + obj.id_local.nr_logradouro + " - " + obj.id_local.no_bairro + " - " + obj.id_local.no_cidade );
        $("#event-owner").html("Organizado por: "+obj.id_organizador.no_organizador);
        $("#lb1").css("color","black");
        $("#lb1").attr("href","evento.php?id="+$_GET['id']);
        $("#lb2").attr("href","evento-chat.php?id="+$_GET['id']);
		obj.pub_adm.forEach(genPubAdm);
		obj.pub_mem.forEach(genPubMem);
		$(".nav-item")[3].setAttribute("class","nav-item active");
	});
}	

function genPubAdm(item)
{
	container = document.createElement("div");
	container.setAttribute("class","container post");
		profile = document.createElement("a");
		profile.setAttribute("href","profile.php?id="+item.id_responsavel.id);
			profileimg = document.createElement("img");
			if(item.id_responsavel.profile_pic_url == "") { imgsrc = "./css/user.png" }
			else { imgsrc = item.id_responsavel.profile_pic_url }
			profileimg.setAttribute("src",imgsrc);
			profileimg.setAttribute("class","user-icon");
			profile.appendChild(profileimg);
			profilename = document.createTextNode(item.id_responsavel.nome);
			profile.appendChild(profilename);
		container.appendChild(profile);
		br = document.createElement("br");
		container.appendChild(br);
		textarea = document.createElement("textarea");
		textarea.setAttribute("class","form-control-plaintext");
		textarea.setAttribute("readonly","");
		textarea.setAttribute("width","100vh");
		textarea.innerText = item.tx_post;
		container.appendChild(textarea);
	document.getElementById("import1").appendChild(container);
}

function genPubMem(item)
{
	container = document.createElement("div");
	container.setAttribute("class","container post");
		profile = document.createElement("a");
		profile.setAttribute("href","profile.php?id="+item.id_responsavel.id);
			profileimg = document.createElement("img");
			if(item.id_responsavel.profile_pic_url == "") { imgsrc = "./css/user.png" }
			else { imgsrc = item.id_responsavel.profile_pic_url }
			profileimg.setAttribute("src",imgsrc);
			profileimg.setAttribute("class","user-icon");
			profile.appendChild(profileimg);
			profilename = document.createTextNode(item.id_responsavel.nome);
			profile.appendChild(profilename);
		container.appendChild(profile);
		br = document.createElement("br");
		container.appendChild(br);
		textarea = document.createElement("textarea");
		textarea.setAttribute("class","form-control-plaintext");
		textarea.setAttribute("readonly","");
		textarea.setAttribute("width","100vh");
		textarea.innerText = item.tx_post;
		container.appendChild(textarea);
		hit1 = document.createElement("button");
		hit1.setAttribute("class","hitbox");
		hit1.setAttribute("onclick","likePost("+item.id_pub+")");
			pic1 = document.createElement("i");
			pic1.setAttribute("class","fas fa-thumbs-up");
			hit1.appendChild(pic1);
			like = document.createTextNode(" "+item.nr_like);
			hit1.appendChild(like);
		container.appendChild(hit1);
		hit2 = document.createElement("button");
		hit2.setAttribute("class","hitbox");
		hit2.setAttribute("onclick","deslikePost("+item.id_pub+")");
			pic2 = document.createElement("i");
			pic2.setAttribute("class","fas fa-thumbs-down");
			deslike = document.createTextNode(" "+item.nr_deslike);
			hit2.appendChild(pic2);
			hit2.appendChild(deslike);
		container.appendChild(hit2);
	document.getElementById("import2").appendChild(container);
}