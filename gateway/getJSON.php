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

function retornaProfile($id)
{
    global $bd;
    $search = "SELECT id,ra,curso,ano,nome,apelido,email,institucional,telefone,profile_pic_url FROM aluno WHERE id = '$id'";
    $query = mysqli_query($bd,$search);
    if($query)
    {
        while ($row = mysqli_fetch_assoc($query)) {
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
        while($row = mysqli_fetch_assoc($query)) {
            $like = $row['nlike'] + 1;
            $id = $row['id_post'];
            $search2 = "UPDATE aluno_post SET nlike = '$like' WHERE id_post = '$id' ";
            $query = mysqli_query($bd,$search2);
            if($query) {
                echo "200 OK";
            } else {
                echo mysqli_error($bd);
            }
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
            echo "200 OK";
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
        echo "200 OK";
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
        echo "200 OK";
    } else {
        echo mysqli_error($bd);
    }
}

function salvaComentario($id,$comentario,$usuario) {
    global $bd;
    $search = "INSERT INTO aluno_post_comentario (id_post,id_aluno,txcomentario) VALUES ('$id','$usuario','$comentario')";
    $query = mysqli_query($bd,$search);
    if($query) {
        echo "200 OK";
    } else {
        echo mysqli_error($bd);
    }
}

function salvaComunityComentario($id,$comentario,$usuario) {
    global $bd;
    $search = "INSERT INTO comunidade_post_comentario (id_post,id_aluno,txcomentario) VALUES ('$id','$usuario','$comentario')";
    $query = mysqli_query($bd,$search);
    if($query) {
        echo "200 OK";
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
        echo "200 OK";
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
		echo "200 OK";
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
            echo "400 ERROR";
        }
    }
    else
    {
        echo "400 ERROR";
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
    if($query) { echo "200 OK"; } else { echo "400 ERROR"; }
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

switch($webservice) {
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
    default:
    {
        echo "Não foi definido um case";
        break;
    }
}