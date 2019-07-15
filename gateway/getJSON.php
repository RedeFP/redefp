<?php
include('../res/bd.php');
$webservice = filter_input(INPUT_GET, 'f');
if(isset($_GET['id'])) {
    $id = filter_input(INPUT_GET, 'id');
}
function loadCursos()
{
    global $bd;
    $array = [];
    $search = "SELECT * FROM curso";
    $query = mysqli_query($bd,$search);
    if($query) {
        while($row = mysqli_fetch_assoc($query))
        {
            $array[]=$row;
        }
        echo json_encode($array);
    } else {
        return "Erro: não foi possível recuperar a lista de cursos";
    }
}

function loadPost($mult = 0) 
{
    
    global $bd;
    $array = [];
    $search = "SELECT * FROM aluno_post ORDER BY id_post DESC LIMIT 50";
    $query = mysqli_query($bd,$search);
    if($query) 
    {
        while($row = mysqli_fetch_assoc($query))
        {
            $array[]=$row;
        }
        echo json_encode($array);
    }
    else
    {
        return "Erro: não foi possível recuperar os posts";
    }
}

function readPost($id,$mult = 0) 
{
    global $bd;
    $array = [];
    $search = "SELECT * FROM comunidade_post WHERE id_comunidade = '$id'";
    $query = mysqli_query($bd,$search);
    if($query)
    {
        while($row = mysqli_fetch_assoc($query))
        {
            $array[]=$row;
        }
        echo json_encode($array);
    }
    else
    {
        return "400 ERROR";
    }
}

function searchProfile($id)
{
    global $bd;
    $search = "SELECT id,ra,curso,ano,nome,apelido,email,institucional,telefone,profile_pic_url FROM aluno WHERE id = '$id'";
    $query = mysqli_query($bd,$search);
    if($query)
    {
        while ($row = mysqli_fetch_assoc($query)) {
            echo json_encode($row);
        }
    }
    else
    {
        return "Erro: não foi possível recuperar as informações sobre este usuário";
    }
}

function retornaCurso($id)
{
	global $bd;
	$query = mysqli_query($bd, "SELECT * FROM curso WHERE id='$id'");
	if($query) { $obj = mysqli_fetch_assoc($query); return $obj; }
}

function retornaProfile($id)
{
    global $bd;
    $search = "SELECT id,ra,curso,ano,nome,apelido,email,institucional,telefone,profile_pic_url FROM aluno WHERE id = '$id'";
    $query = mysqli_query($bd,$search);
    if($query)
    {
        while ($row = mysqli_fetch_assoc($query)) {
            $row['curso'] = retornaCurso($row['curso']);
			return $row;
        }
    }
    else
    {
        return "Erro: não foi possível recuperar as informações sobre este usuário";
    }
}

function likePost($id) {
    global $bd;
    $search = "SELECT * FROM aluno_post WHERE id_post = '$id' ";
    $query = mysqli_query($bd,$search);
    if($query){
        $row = mysqli_fetch_assoc($query);
            $like = $row['nlike'] + 1;
            $id = $row['id_post'];
            $search2 = "UPDATE aluno_post SET nlike = '$like' WHERE id_post = '$id' ";
            $query = mysqli_query($bd,$search2);
            if($query) {
                echo "";
            } else {
                echo mysqli_error($bd);
            }
        
    } else {
        echo mysqli_error($bd);
    }
}

function likeComunityPost($id) {
    global $bd;
    $search = "SELECT * FROM comunidade_post WHERE id_post = '$id' ";
    $query = mysqli_query($bd,$search);
    if($query){
        $row = mysqli_fetch_assoc($query);
        $like = $row['nlike'] + 1;
        $id = $row['id_post'];
        $search2 = "UPDATE comunidade_post SET nlike = '$like' WHERE id_post = '$id' ";
        $query = mysqli_query($bd,$search2);
        if($query) {
            echo "";
        } else {
            echo mysqli_error($bd);
        }
    } else {
        echo mysqli_error($bd);
    }
}

function deslikePost($id) {
    global $bd;
    $search = "SELECT * FROM aluno_post WHERE id_post = '$id' ";
    $query = mysqli_query($bd,$search);
    $row = mysqli_fetch_assoc($query);
    $deslike = $row['ndeslike'] + 1;
    $search2 = "UPDATE aluno_post SET ndeslike = '$deslike' WHERE id_post = '$id'";
    $query2 = mysqli_query($bd,$search2);
    if($query2) {
        echo "";
    } else {
        echo mysqli_error($bd);
    }
}

function deslikeComunityPost($id) {
    global $bd;
    $search = "SELECT * FROM comunidade_post WHERE id_post = '$id' ";
    $query = mysqli_query($bd,$search);
    $row = mysqli_fetch_assoc($query);
    $deslike = $row['ndeslike'] + 1;
    $search2 = "UPDATE comunidade_post SET ndeslike = '$deslike' WHERE id_post = '$id'";
    $query2 = mysqli_query($bd,$search2);
    if($query2) {
        echo "";
    } else {
        echo mysqli_error($bd);
    }
}

function salvaComentario($id,$comentario,$usuario) {
    global $bd;
    $search = "INSERT INTO aluno_post_comentario (id_post,id_aluno,txcomentario) VALUES ('$id','$usuario','$comentario')";
    $query = mysqli_query($bd,$search);
    if($query) {
        echo "";
    } else {
        echo mysqli_error($bd);
    }
}

function salvaComunityComentario($id,$comentario,$usuario) {
    global $bd;
    $search = "INSERT INTO comunidade_post_comentario (id_post,id_aluno,txcomentario) VALUES ('$id','$usuario','$comentario')";
    $query = mysqli_query($bd,$search);
    if($query) {
        echo "";
    } else {
        echo mysqli_error($bd);
    }
}

function salvaPost($id,$comentario)
{
    global $bd;
    $search = "INSERT INTO aluno_post (id_aluno,txpost,nlike,ndeslike) VALUES ('$id','$comentario','0','0')";
    $query = mysqli_query($bd,$search);
    if($query){
        echo "";
    } else {
        echo "400 ERROR";
    }
}

function loadComunity($id)
{
    global $bd;
    $search = "SELECT * FROM comunidade WHERE id='$id'";
    $query = mysqli_query($bd,$search);
    if($query) {
        $info = mysqli_fetch_assoc($query);
        echo json_encode($info);
    } else {
        echo "400 ERROR";
    }
}

function returnComunity($id)
{
    global $bd;
    $search = "SELECT * FROM comunidade WHERE id='$id'";
    $query = mysqli_query($bd,$search);
    if($query) {
        $info = mysqli_fetch_assoc($query);
        return $info;
    } else {
        echo "400 ERROR";
    }
}

function loadComunityPictures($id)
{
	global $bd;
	$array = [];
	$search = "SELECT * FROM comunidade_galeria WHERE id_comunidade = '$id'";
	$query = mysqli_query($bd,$search);
	if($query){
		while($row = mysqli_fetch_assoc($query))
		{
			$array[]=$row;
		}
		echo json_encode($array);
	}
	else
	{
		echo "400 ERROR";
	}
	
}

function loadComunityMembers($id)
{
	global $bd;
	$array = [];
	$search = "SELECT * FROM comunidade_inscrito WHERE id_comunidade = '$id'";
	$query = mysqli_query($bd,$search);
	if($query)
	{
		while($row = mysqli_fetch_assoc($query))
		{
			$array[]=$row;
		}
		echo json_encode($array);
	}
	else
	{
		echo "400 ERROR";
	}
}
function postImage($id,$nome,$arquivo)
{
   global  $bd;
	$search = "INSERT INTO aluno_galeria (id,id_aluno,dtpublicacao,image_url) VALUES (NULL,'$id', '$nome', '". timestamp ()."', '$arquivo')";
	$query = mysqli_query ($bd,$search);
	if($query)
	{
		echo "";
	}
	else
	{
		echo "400 ERROR";
	}
}
function loadImage($id)
{
    global $bd;
    $array = [];
    $search = "SELECT * FROM aluno_galeria WHERE id_aluno = '$id'";
    $query = mysqli_query ($bd,$search);
    {
        while($row = mysqli_fetch_assoc($query))
        {
                $array[]=$row;
        }
        echo json_encode($array);
    }
}

function loadCamisetasTurmas()
{
    global $bd;
    $array = [];
    $search = "SELECT * FROM vendas_produto WHERE type='2'";
    $query = mysqli_query($bd,$search);
    if($query)
    {
        while($row = mysqli_fetch_assoc($query))
        {
            $array[]=$row;
        }
        echo json_encode($array);
    } else {
        echo "400 ERROR";
    }
}

function loadVendedor($id)
{
    global $bd;
    $search = "SELECT * FROM vendas_vendedor WHERE id_vendedor = '$id'";
    $query = mysqli_query($bd,$search);
    if($query)
    {
        
        $obj = mysqli_fetch_assoc($query);
        if($obj['type'] == 0){}
        if($obj['type'] == 1)
        {
            $in = $obj['id_interna'];
            $query = mysqli_query($bd,"SELECT * FROM comunidade WHERE id = '$in'");
            if($query){$obj['vendedor'] = mysqli_fetch_assoc($query);}
            $in = $obj['vendedor']['tema'];
            $query = mysqli_query($bd,"SELECT * FROM comunidade_tema WHERE id = '$in'");
            $obj['vendedor']['tema'] = mysqli_fetch_assoc($query);
            $in = $obj['vendedor']['entrada'];
            $query = mysqli_query($bd,"SELECT * FROM comunidade_entrada WHERE id = '$in'");
            $obj['vendedor']['entrada'] = mysqli_fetch_assoc($query);
            echo json_encode($obj);
        }
        if($obj['type'] == 2){}
        if($obj['type'] == 3){}
    }
    else
    {
        echo "400 ERROR";
    }
}

function expandePost($id)
{
    global $bd;
    $array1 = [];
    $array2 = [];
    $search1 = "SELECT * FROM aluno_post WHERE id_post = '$id'";
    $query1 = mysqli_query($bd,$search1);
    if($query1)
    {
        $search2 = "SELECT * FROM aluno_post_comentario WHERE id_post = '$id'";
        $query2 = mysqli_query($bd,$search2);
        if($query2)
        {
            while($row1 = mysqli_fetch_assoc($query1))
            {
                $row1['aluno'] = retornaProfile($row1['id_aluno']);
                $array1=$row1;
            }
            while($row2 = mysqli_fetch_assoc($query2))
            {
                $row2['aluno'] = retornaProfile($row2['id_aluno']);
                $array2[]=$row2;
            }
            $post = $array1;
            $comentarios = $array2;
            $data = [
                'post' => $post,
                'comentarios' => $array2
            ];
            echo json_encode($data);
        }
        else
        {
            echo "400 ERROR1";
        }
    }
    else
    {
        echo "400 ERROR2";
    }
}

function expandeCPost($id)
{
    global $bd;
    $array1 = [];
    $array2 = [];
    $search1 = "SELECT * FROM comunidade_post WHERE id_post = '$id'";
    $query1 = mysqli_query($bd,$search1);
    if($query1)
    {
        $search2 = "SELECT * FROM comunidade_post_comentario WHERE id_post = '$id'";
        $query2 = mysqli_query($bd,$search2);
        if($query2)
        {
            while($row1 = mysqli_fetch_assoc($query1))
            {
                $row1['aluno'] = retornaProfile($row1['id_aluno']);
                $array1=$row1;
            }
            while($row2 = mysqli_fetch_assoc($query2))
            {
                $row2['aluno'] = retornaProfile($row2['id_aluno']);
                $array2[]=$row2;
            }
            $post = $array1;
            $comentarios = $array2;
            $data = [
                'post' => $post,
                'comentarios' => $array2
            ];
            echo json_encode($data);
        }
        else
        {
            echo "400 ERROR";
        }
    }
    else
    {
        echo "400 ERROR";
    }
}

function loadProdutosTurma()
{
    global $bd;
    $array = [];
    $search = "SELECT * FROM vendas_produtos WHERE type='1' ORDER BY id DESC LIMIT 15";
    $query = mysqli_query($bd,$search);
    if($query)
    {
        while($row=mysqli_fetch_assoc($query))
        {
            $array[]=$row;
        }
        echo json_encode($array);
    }
    else
    {
        echo "400 ERROR";
    }
}

function loadProdutosTurma2()
{
    global $bd;
    $array = [];
    $search = "SELECT * FROM vendas_produtos WHERE type='1' ORDER BY id DESC LIMIT 4";
    $query = mysqli_query($bd,$search);
    if($query)
    {
        while($row=mysqli_fetch_assoc($query))
        {
            $array[]=$row;
        }
        echo json_encode($array);
    }
    else
    {
        echo "400 ERROR";
    }
}

function loadComunitysInscrito($id)
{
    global $bd;
    $array = [];
    $search = "SELECT * FROM comunidade_inscrito WHERE id_aluno = '$id'";
    $query = mysqli_query($bd,$search);
    if($query)
    {
        while($row=mysqli_fetch_assoc($query))
        {
            $row['comunidade'] = returnComunity($row['id_comunidade']);
            $array[]=$row;
        }
        echo json_encode($array);
    }
    else
    {
        echo "400 ERROR";
    }
}

function reservaItem($id,$aluno)
{
    global $bd;
    $query = mysqli_query($bd,"SELECT * FROM vendas_produtos WHERE id = '$id'");
    $obj = mysqli_fetch_assoc($query);
    $vendedor = $obj['vendedor'];
    $query = mysqli_query($bd,"INSERT INTO produtos_reserva (id_produto,id_vendedor,id_comprador,tp_venda) VALUES ('$id','$vendedor','$aluno','2')");
    if($query) { echo ""; } else { echo "400 ERROR"; }
}

function loadProdutosComunidades($id)
{
    global $bd;
    $array = [];
    $query = mysqli_query($bd,"SELECT id_vendedor FROM vendas_vendedor WHERE type = '1' AND id_interna = '$id'");
    if($query) { $obj = mysqli_fetch_assoc($query); $in = $obj['id_vendedor']; }
    $query = mysqli_query($bd,"SELECT * FROM vendas_produtos WHERE id_vendedor = '$in'");
    if($query) { while($row=mysqli_fetch_assoc($query)) { $array[]=$row; } echo json_encode($array); }
}

function retornaLocal($id)
{
    global $bd;
    $query = mysqli_query($bd,"SELECT * FROM local WHERE id_local='$id'");
    if($query){ $obj = mysqli_fetch_assoc($query); return $obj;}
}

function retornaOrganizador($id)
{
    global $bd;
    $query = mysqli_query($bd,"SELECT * FROM organizador WHERE id_organizador='$id'");
    if($query){ $obj = mysqli_fetch_assoc($query); return $obj;}
}

function retornaEventoAvisos($id)
{
    global $bd;
    $array = [];
    $query = mysqli_query($bd, "SELECT * FROM evento_avisos WHERE id_evento = '$id'");
    if($query) { 
        while($row = mysqli_fetch_assoc($query))
        {
			if($row['tp_responsavel'] == 0){
				$row['id_responsavel'] = retornaProfile($row['id_responsavel']);
			}
            $array[]=$row;
        }
        return $array;
    }
}

function retornaEventoPubAdm($id)
{
    global $bd;
    $array = [];
    $query = mysqli_query($bd, "SELECT * FROM evento_pub_adm WHERE id_evento = '$id'");
    if($query) { 
        while($row = mysqli_fetch_assoc($query))
        {
			if($row['tp_responsavel'] == 0){
				$row['id_responsavel'] = retornaProfile($row['id_responsavel']);
			}
            $array[]=$row;
        }
        return $array;
    }
}

function retornaEventoPubMem($id)
{
    global $bd;
    $array = [];
    $query = mysqli_query($bd, "SELECT * FROM evento_pub_mem WHERE id_evento = '$id'");
    if($query) { 
        while($row = mysqli_fetch_assoc($query))
        {
			if($row['tp_responsavel'] == 0){
				$row['id_responsavel'] = retornaProfile($row['id_responsavel']);
			}
            $array[]=$row;
        }
        return $array;
    }
}

function retornaProduto($id)
{
	global $bd;
	$query = mysqli_query($bd, "SELECT * FROM vendas_produtos WHERE id = '$id'");
	if($query){ return mysqli_fetch_assoc($query); }
}

function retornaVendedor($id)
{
	global $bd;
	$query = mysqli_query($bd, "SELECT * FROM vendas_vendedor WHERE id = '$id'");
	if($query) { return mysqli_fetch_assoc($query); }
}

function retornaVenda($id)
{
	global $bd;
	$query = mysqli_query($bd, "SELECT * FROM vendas_reservas WHERE id_reserva = '$id'");
	if($query){ 
		$obj = mysqli_fetch_assoc($query); 
		$obj['id_produto'] = retornaProduto($obj['id_produto']);
		$obj['id_vendedor'] = retornaVendedor($obj['id_vendedor']);
		return $obj; 
	}
}

function retornaEventoConvite($id)
{
    global $bd;
    $array = [];
    $query = mysqli_query($bd, "SELECT * FROM evento_convite WHERE id_evento = '$id'");
    if($query){
        while($row = mysqli_fetch_assoc($query))
        {
			if($row['tp_convidado'] == 0){
				$row['id_convidado'] = retornaProfile($row['id_convidado']);
			}
			$row['id_venda'] = retornaVenda($row['id_venda']);
            $array[]=$row;
        }
        return $array;
    }
}

function retornaEventoPhotos($id)
{
	global $bd;
	$array = [];
	$query = mysqli_query($bd, "SELECT * FROM evento_photo WHERE id_evento = '$id'");
	if($query){
		while($row = mysqli_fetch_assoc($query))
		{
			$array[]=$row;
		}
		return $array;
	}
}

function retornaEventoPerseguidores($id)
{
	global $bd;
	$array = [];
	$query = mysqli_query($bd, "SELECT * FROM perseguicao WHERE id_perseguido = '$id' AND tp_perseguido = '2'");
	if($query){
		while($row = mysqli_fetch_assoc($query))
		{
			if($row['tp_perseguidor'] == 0){
				$row['id_perseguidor'] = retornaProfile($row['id_perseguidor']);
			}
			$array[]=$row;
			
		}
		return $array;
	}
}

function loadEvento($id)
{
    global $bd;
    $query = mysqli_query($bd,"SELECT * FROM evento WHERE id_evento = '$id'");
    if($query){ $obj = mysqli_fetch_assoc($query);}
    $obj['id_local'] = retornaLocal($obj['id_local']);
    $obj['id_organizador'] = retornaOrganizador($obj['id_organizador']);
    $obj['avisos'] = retornaEventoAvisos($id);
    $obj['pub_adm'] = retornaEventoPubAdm($id);
    $obj['pub_mem'] = retornaEventoPubMem($id);
	$obj['convites'] = retornaEventoConvite($id);
	$obj['perseguidores'] = retornaEventoPerseguidores($id);
	$obj['galeria'] = retornaEventoPhotos($id);
	if(mysqli_error($bd) != ""){
		$obj['error'] = mysqli_error($bd);
	} else {
		$obj['error'] = "FALSE";
	}
    echo json_encode($obj, JSON_PRETTY_PRINT);
}

function retornaEvento($id)
{
    global $bd;
    $query = mysqli_query($bd,"SELECT * FROM evento WHERE id_evento = '$id'");
    if($query){ $obj = mysqli_fetch_assoc($query);}
    $obj['id_local'] = retornaLocal($obj['id_local']);
    $obj['id_organizador'] = retornaOrganizador($obj['id_organizador']);
    $obj['avisos'] = retornaEventoAvisos($id);
    $obj['pub_adm'] = retornaEventoPubAdm($id);
    $obj['pub_mem'] = retornaEventoPubMem($id);
	$obj['convites'] = retornaEventoConvite($id);
	$obj['perseguidores'] = retornaEventoPerseguidores($id);
	$obj['galeria'] = retornaEventoPhotos($id);
	if(mysqli_error($bd) != ""){
		$obj['error'] = mysqli_error($bd);
	} else {
		$obj['error'] = "FALSE";
	}
    return $obj;
}

function loadEventosPerseguidos($id)
{
	global $bd; $array = [];
	$query = mysqli_query($bd, "SELECT * FROM perseguicao WHERE id_perseguidor = '$id' AND tp_perseguidor = '0' AND tp_perseguido = '2'");
	if($query)
	{
		while($row = mysqli_fetch_assoc($query))
		{
			$row['id_perseguidor'] = retornaProfile($row['id_perseguidor']);
			$row['id_perseguido'] = retornaEvento($row['id_perseguido']);
			$array[]=$row;
		}
		echo json_encode($array, JSON_PRETTY_PRINT);
	}
}

function sEditPost($id,$comentario) {
    global $bd;
    $search = "UPDATE aluno_post SET txpost = '$comentario' WHERE id_post='$id'";
    $query = mysqli_query($bd, $search);
    if($query) { echo ""; } else { echo "400 ERROR"; }
}

function delPost($id) {
    global $bd;
    $search1 = "DELETE FROM aluno_post_comentario WHERE id_post='$id'";
    $query1 = mysqli_query($bd,$search1);
    $search2 = "DELETE FROM aluno_post WHERE id_post='$id'";
    $query2 = mysqli_query($bd,$search2);
    if($query2) { echo ""; } else { echo $search; }
}

function searchFoto($id){
    global $bd;
    $search = "SELECT * FROM aluno_galeria WHERE id_foto = '$id'";
    $query = mysqli_query($bd,$search);
    if($query) {
        $row=mysqli_fetch_assoc($query);
        $row['id_aluno']=retornaProfile($row['id_aluno']);
        echo json_encode($row,JSON_PRETTY_PRINT);
    }
}

function delFoto($id) {
    global $bd;
    $retrieve = "SELECT * FROM aluno_galeria WHERE id_foto='$id'";
    $quer2 = mysqli_query($bd,$retrieve);
    $search = "DELETE FROM aluno_galeria WHERE id_foto = '$id'";
    $query = mysqli_query($bd,$search);
    $quer = mysqli_fetch_assoc($quer2);
    // delete("uploads/".basename($quer['image_url']));
        unlink("C:/xampp/htdocs/uploads/".basename($quer['image_url']));
    
    
}

function sEditCPost($id,$post)
{
    global $bd;
    $query1 = mysqli_query($bd,"UPDATE aluno_post SET txpost='$post' WHERE id_post='$id'");
    if($query){}else{}
}

switch($webservice) {
    case "delFoto":
    {
        delFoto($id);
        break;
    }
    case "searchFoto":
    {
        searchFoto($id);
        break;
    }
    case "delPost":
    {
        delPost($id);
        break;
    }
    case "sEditPost":
    {
        $comentario = filter_input(INPUT_GET,'comentario');
        sEditPost($id,$comentario);
        break;
    }
    case "reservaItem":
    {
        $aluno = filter_input(INPUT_GET, 'aluno');
        reservaItem($id,$aluno);
        break;
    }
    case "loadPC":
    {
        loadProdutosComunidades($id);
        break;
    }
    case "postImage":
    {
        postImage($id,$nome,$arqivo);
        break;
    }
    case "cursos" :
    {
        loadCursos();
        break;
    }
    case "posts":
    {
        loadPost($id);
        break;
    }
    case "one-profile":
    {
        searchProfile($id);
        break;
    }
    case "one-comunity":
    {
        loadComunity($id);
        break;
    }
    case "like":
    {
        likePost($id);
        break;  
    }
    case "deslike":
    {
        deslikePost($id);
        break;
    }
    case "comentar":
    {
        $comentario = $_GET['comentar'];
        $usuario = filter_input(1,'usuario',513);
        salvaComentario($id, $comentario,$usuario);
        break;
    }
    case "comunity-comentar":
    {
        $comentario = filter_input(1,'comentar',513);
        $usuario = filter_input(1,'usuario',513);
        salvaComunityComentario($id, $comentario,$usuario);
        break;
    }
    case "post":
    {
        expandePost($id);
        break;
    }
    case "loadPostComunity":
    {
        readPost($id);
        break;
    }
    case "comunity-like":
    {
        likeComunityPost($id);
        break;
    }
    case "comunity-deslike":
    {
        deslikeComunityPost($id);
        break;
    }
    case "comunity-pictures":
    {
        loadComunityPictures($id);
        break;
    }
    case "comunity-members":
    {
        loadComunityMembers($id);
        break;
    }
    case "savePost":
    {
        $comentario = $_GET['post'];
        salvaPost($id, $comentario);
        break;
    }
    case "loadEMCamisa":
    {
        loadCamisetasTurmas();
        break;
    }
    case "one-vendedor":
    {
        loadVendedor($id);
        break;
    }
    case "expandePost":
    {
        expandePost($id);
        break;
    }
    case "expandeCPost":
    {
        expandeCPost($id);
        break;
    }
    case "loadProdutoTurma":
    {
        loadProdutosTurma();
        break;
    }
    case "loadProdutoTurma2":
    {
        loadProdutosTurma2();
        break;
    }
    case "loadComunitysInscrito":
    {
        loadComunitysInscrito($id);
        break;
    }
    case "loadEvento":
    {
        header('Content-Type: application/json');
        loadEvento($id);
        break;
    }
	case "eventoPerseguidos":
	{
		header('Content-Type: application/json');
		loadEventosPerseguidos($id);
		break;
	}
    default:
    {
        echo "Não foi definido um case";
        break;
    }
}