function init_page()
{
	var idc = $_GET['id'];
	$.get(URLBASE+"/gateway/getJSON.php",{f:"comunity-members",id:idc},function(result){
		var obj = result;
		obj = JSON.parse(result)
		obj.forEach(searchMember);
	});
	
	$.get(joinComunitydata.url,joinComunitydata,joinComunity);
}

function searchMember(inscricao)
{
	$.get(URLBASE+"/gateway/getJSON.php",{f:"one-profile",id:inscricao.id_aluno},function(result) {
		genMember(result);
	});
}

function genMember(member)
{
	link = document.createElement("a");
	link.setAttribute("href","profile.php?id="+member.id);
		div = document.createElement("div");
		div.setAttribute("class","col");
			image = document.createElement("img");
			if(member.profile_pic_url == "")
			{
				imgsrc = "css/user.png";
			}
			else
			{
				imgsrc = URLBASE + member.profile_pic_url;
			}
			image.setAttribute("src",imgsrc);
			image.setAttribute("class","cuser-pic");
			div.appendChild(image);
			br = document.createElement("br");
			div.appendChild(br);
			span = document.createElement("span");
			span.setAttribute("class","cuser-name")
			span.innerHTML = member.nome;
			div.appendChild(span);
		link.appendChild(div);	
	document.getElementById("import").appendChild(link);
}

$(function(){
	$("#lb1").parent().removeClass("active");
	$("#lb5").addClass("active");


});