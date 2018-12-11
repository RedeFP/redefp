function init_page()
{
	var idc = $_GET['id'];
	$.get("/gateway/getJSON.php",{f:"comunity-members",id:idc},function(result){
		var obj = JSON.parse(result);
		obj.forEach(searchMember);
	});
}

function searchMember(inscricao)
{
	$.get("/gateway/getJSON.php",{f:"one-profile",id:inscricao.id_aluno},function(result) {
		genMember(JSON.parse(result));
	});
}

function genMember(member)
{
	console.log(member);
	link = document.createElement("a");
	link.setAttribute("href","profile.php?id="+member.id);
		div = document.createElement("div");
		div.setAttribute("class","col-2");
			image = document.createElement("img");
			if(member.profile_pic_url == "")
			{
				imgsrc = "css/user.png";
			}
			else
			{
				imgsrc = member.profile_pic_url;
			}
			image.setAttribute("src",imgsrc);
			image.setAttribute("class","cuser-pic");
			div.appendChild(image);
			br = document.createElement("br");
			div.appendChild(br);
			span = document.createElement("span");
			span.innerHTML = member.nome;
			div.appendChild(span);
		link.appendChild(div);	
	document.getElementById("import").appendChild(link);
}