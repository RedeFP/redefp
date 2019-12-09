# Controlador do banco de dados

--
## Controlador principal <BDController.php>
Este será o arquivo que irá substituir o atual getJSON.php e então será responsavel por receber a requisição.
Nele serão implementados as seguintes tarefas:
- [ ] Receber a requisição
- [ ] Tratar o parametro:
  - [ ] ID (GET)
  - [ ] WebService (GET)
- [ ] Importar os arquivos das tabelas
- [ ] Importar o arquivo da rota

Como deve ser o inicio da requisição:
``` php
define('ID',filter_input(INPUT_GET,'id'));
define('REQ_SERVICE',filter_input(INPUT_GET,'f'));
header('Content-Type: application/json');
```


--
## Controlador de Rotas <RotesController.php>
Este arquivo será especificados as rotas na seguinte forma:
``` php
switch(REQ_SERVICE) {
    ...
    case "storeTabelaPrincipal":
        $service = new TabelaPrincipal();
        $service->store();
        break;
    ...
}
```

--
## Controlador de Tabela <*TableController.php>
Este arquivo será responsavel por processar os metodos referentes a tabela especifica em seu nome. A mesma deverá ter no minimo os seguintes metodos: Store, Update, Delete, Find, FindAll.

Então os requesitos de cada controlador é:
- [ ] FindAll
- [ ] Find
- [ ] Store
- [ ] Update
- [ ] Delete

A mesma deverá seguir a seguinte template:
``` php
function *() {
    global $bd;
    $data = [$_GET];
    $sql = "";
    $query = mysqli_query($bd,$sql);
    if($query) {
        $response = [
            "error" => false,
            "data" => responsedata
        ]
    } else {
        $response = [
            "error" => true,
            "data" => mysqli_error($bd)
        ];
    }
    echo json_encode($response,JSON_PRETTY_PRINT);
}
```

Exemplos de como pode ser o `responsedata`:
``` php
// Exemplo 1: INSERT SQL
mysqli_insert_id($bd);

// Exemplo 2: FIND SQL
mysqli_fetch_assoc($query);

//Exemplo 3: FINDALL SQL
$rows=[];
while($row=mysqli_fetch_assoc($query)) {
    $rows[]=$row;
}
$data = $rows;

//Exemplo 4: UPDATE SQL
$id

//Exemplo 5: DELETE SQL
$id
```