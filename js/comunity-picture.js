function init_page()
{
	console.info("Iniciando... 75%");
	idc = $_GET['id'];
	$.get("/gateway/getJSON.php",{f:"comunity-pictures",id:idc},function(result){
		var obj = JSON.parse(result);
		obj.forEach(genImages);
		console.info("Iniciando... 100%");
	});
}

function genImages(post)
{
	div = document.createElement("div");
	div.setAttribute("class","col-3 user-image");
	div.setAttribute("align","center");
	div.setAttribute("data-id",post.id_post);
		image = document.createElement("img");
		image.setAttribute("src",post.photo_url);
		image.setAttribute("class","user-image-src");
		div.appendChild(image);
		span1 = document.createElement("span");
		span1.innerHTML = post.txlegenda;
		div.appendChild(span1);
		br = document.createElement("br");
		div.appendChild(br);
		span2 = document.createElement("span");
		var d = new Date(post.dtpublicacao);
		var n = d.toLocaleDateString();
		span2.innerHTML = n;
		div.appendChild(span2);
	document.getElementById("import").appendChild(div);
}
