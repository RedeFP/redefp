//Função executada externamente pelo loadComunity.js que carrega o conteudo do JSON para a visualizaçõo.
function init_page()
{
	
	//Remoção em breve: console.info("Iniciando... 75%"); Que servia como orientação para identificar estágio dos problemas que ocorrem durante a execução da página.
	console.info("Iniciando... 75%");

	$.get(joinComunitydata.url,joinComunitydata,joinComunity);

	//Identificação da comunidade, através de parametro passado na URL da página, usando a variavel $)GET inicializada dentro do arquivo libGET.js
	idc = $_GET['id'];

	//Requisição assincrona para o controlador do banco de dados, que em breve será o URLBASE+gateway/BDController.php, e então passa o conteudo para as funções responsaveis por carregar o conteudo para a visualização.
	$.get(URLBASE+"/gateway/getJSON.php",{f:"comunity-pictures",id:idc},function(result){

		//Transformação do conteudo obtido por requisição em um objeto
		var obj = JSON.parse(result);
		//Callback do conteudo nódo por nódo através da função genImages
		obj.forEach(genImages);
		//Remoção em breve: console.info("Iniciando... 90%"); Que serve como orientação de estágio de execução da página
		console.info("Iniciando... 90%");

	});
	//Remoção da classe de identificação visual no item do menu
	$("#lb1").parent().removeClass("active");
	//Adição da classe de identificação do item em visualização no menu
	$("#lb3").parent().addClass("active");
	//Criação de um botão suspenso na parte de cima às publicações permitindo que o usuário crie uma publicação
	//Em breve é necessário criar um metodo para verificação se o usuário já está inscrito nesta comunidade para poder então liberar que o mesmo crie publicações
	// Tal verificação deverá ocorrer no momento, da inicialização do item abaixo, no momento de permitir que a janela suspensa crie o formulário de envio, e no servidor antes de registrar o arquivo em nossa base de dados.
	$("#import").prepend("<div id='add' class='col-12'><button class='btn btn-primary' style='width:100% !important'><i class='fas fa-plus'></i>&nbsp;Adicionar nova publicação</button></div>");
}

//Execução de rotinas após requisições assíncronas.
$(document).on("ajaxStop",function(){
	//Adição de tratamento ao alinhamento dos itens da visualização
	$(".user-image").css("margin-top","5px");
	$("#add").off().click(startModalAddFotoComunidade);
	$(".triggerbox").off().click(expandeFoto);
});

//Remoção em breve: bloco de código abaixo; Serve como orientação para os estágios de carregamento da página
$(document).one("ajaxStop",function(){
	console.info("Iniciando... 100%");
});

function startAddFotoComunidade(){
	//Inicializando captura das informações e variaveis
	var error = 0;
	var dataerror = "";

	//Verificando por campos não capturados de forma correta
	try {
		var user_id = parseUser().id;
	} catch(err) {
		error = 1;
		dataerror = err.mensage;
	}
	try {
		var comunity_id = $_GET['id'];
	} catch(err) {
		error = 1;
		dataerror = err.mensage;
	}

	//Verificando por campos não preenchidos
	if(document.getElementById("fileToUpload").value == "") {
		error = 1;
		dataerror = "Selecione um arquivo para envio!";
	}
	if(document.getElementById("txlegenda").value == "") {
		error = 1;
		dataerror = "Preencha a legenda da foto!";
	}

	//Enviando os dados para dentro do formulário de forma oculta
	try {
		$("#fotoup").append("<input type='hidden' name='id' value='"+comunity_id+"'>");
	} catch(err) {
		error = 1;
		dataerror = err.mensage;
	}
	try {
		$("#fotoup").append("<input type='hidden' name='uid' value='"+user_id+"'>");
	} catch(err) {
		error = 1;
		dataerror = err.mensage;
	}
	
	//Determinado se ocorreu algum erro no preenchimento dos dados
	if(error == 1) {
		console.error("Ocorreu um erro: " + dataerror);
	}
	if(error == 0) {
		//Forçar o formulário a prosseguir e executar a requisição
		$("#fotoup").submit();
	}

}

//Função para expandir o item clicado na visualização
function expandeFoto() {
	//Declaração das variaveis
	pid = $(this).data("id");
	file = $(this).children("img").attr("src");
	legenda = $(this).data("legenda");

	//Declaração dos itens na janela suspensa
	$(".modal .modal-title").text("Publicação #"+pid);
	$(".modal .modal-body").html("<img src='"+file+"' class='expandeComFoto'><br><strong>"+legenda+"</strong>").attr("align","center");
	$(".modal .btn-primary").hide();
	$(".modal .btn-danger").show().html("<i class='fas fa-trash-alt'></i>").data("id",pid).off().click(deleteFoto);
	$(".modal .btn-warning").show().html("<i class='fas fa-pen'></i>").data("id",pid).data("legenda",legenda).off().click(editLegenda).data("foto",file);
	$(".modal .btn-secondary").hide();

	//Inicializando a janela suspensa
	$(".modal").modal('show');
}

//Função para remover a publicação
function deleteFoto() {

	//Declarando as variaveis do contexto
	pid = $(this).data("id");

	//Definindo os items visuais da janela suspensa
	$(".modal .modal-title").text("Removendo a publicação #"+pid);
	$(".modal .modal-body").text("Você tem certeza que quer remover esta publicação?");
	$(".modal .btn-primary").hide();
	$(".modal .btn-danger").show().html("<i class='fas fa-trash-alt'></i>").off().click(deleteFotoReq).data("id",pid);
	$(".modal .btn-warning").hide();

}

function deleteFotoReq() {
	pid = $(this).data("id");
	data = {
		URL: URLBASE + "gateway/getJSON.php",
		f: "deletarFotoComunidade",
		id: pid
	}
	$.get(data.URL,data,function(result){
		if(isValid(result)) {
			window.location.reload();
		} else {
			alert("Ocorreu um erro: " + result.data)
		}
	});
}

//Função que monta a janela suispensa que permite editar a legenda das publicações
function editLegenda() {
	
	//Declaração das variaveis de contexto
	file = $(this).data("foto");
	pid = $(this).data("id");
	legenda = $(this).data("legenda");

	//Definindo os items visuais da janela suspensa
	$(".modal .modal-title").text("Atualizando a legenda da foto #"+pid);
	$(".modal .modal-body").html("<img src='"+file+"' class='expandeComFoto'><br><strong>Legenda:</strong> <input type='text' name='coText' id='coText' placeholder='"+legenda+"'> ");
	$(".modal .btn-danger").hide();
	$(".modal .btn-warning").html("<i class='fas fa-pen'></i>").off().click(editLegendaReq).data("id",pid);
}

//Função que trata a requisição de troca da legenda
function editLegendaReq() {
	pid = $(this).data("id");
	change = document.getElementById("coText").value;
	URL = URLBASE + "gateway/getJSON.php";
	data = {
		f: "editComunidadeLegenda",
		id: pid,
		legendav: change
	}
	//Data
	$.get(URL,data,function(result){
		if(isValid(result)){
			window.location.reload();
		} else {
			alert("Ocorreu um erro: "+result.data);
		}
	});
}

//Função que monta a janela suspensa onde o formulario de envio é mostrado ao usuário
function startModalAddFotoComunidade() {

	//Definição do titulo da janela suspensa
	$(".modal .modal-title").text("Adicionando uma nova publicação à galeria.");
	//Definição do botão primário da janela suspensa
	$(".modal .btn-primary").text("Enviar").off().click(startAddFotoComunidade);
	//Defenição do formulário de envio de informações
	$(".modal-body").html('<form id="fotoup" action="'+URLBASE+'handler/comunity_picture.upload.php" method="post" enctype="multipart/form-data"><div class="input-group mb-3"><div class="custom-file"><input type="file" name="fileToUpload" id="fileToUpload" accept="image/*" class="custom-file-input"><label class="custom-file-label" for="fileToUpload">Imagem</label></div></div><div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">Legenda da foto</span></div><input type="text" class="form-control" name="txlegenda" id="txlegenda" maxlength="120"></div></form>');
	//Exibição do formulário para o usuário
	$(".modal").modal('show');
}

//Função que gera os itens de visualizações
function genImages(post)
{
	//Criação do item principal "div"
	div = document.createElement("div");
	div.setAttribute("class","col-3 user-image triggerbox");
	div.setAttribute("align","center");
	div.setAttribute("data-id",post.id_post);
	div.setAttribute("data-legenda",post.txlegenda);
		// Criação do item de visualização do arquivo multimida "img"
			img = document.createElement("img");
			img.setAttribute("src",URLBASE+post.photo_url);
			img.setAttribute("class","user-image-src");
			div.appendChild(img);
	//Importação do item para a visualização
	document.getElementById("import").appendChild(div);
}
