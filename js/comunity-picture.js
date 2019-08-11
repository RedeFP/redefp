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
		image = document.createElement("a");
		image.setAttribute("href",post.photo_url);
		image.setAttribute("class","user-image-src");
		image.setAttribute("data-lightbox",post.photo_url);
		image.setAttribute("data-title",post.txlegenda);
			img = document.createElement("img");
			img.setAttribute("src",post.photo_url);
			img.setAttribute("class","user-image-src");
			image.appendChild(img);
		div.appendChild(image);
	document.getElementById("import").appendChild(div);
}
