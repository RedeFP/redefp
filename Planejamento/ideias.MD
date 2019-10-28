# Classes JS
Abaixo você encontrará classes em JavaScript, que poderam ser utilizadas para implementações futuras.
## Modal
``` javascript
//Janela Flutuante
new Modal({
    title: "", 
    large-size: false,
    btn-primary:
    {
        visible: true,
        btn-title: "",
        btn-on: "",
    },
    btn-secondary:
    {
        visible: true,
        btn-title: "",
        btn-on: "",
    },
    btn-danger:
    {
        visible: false,
        btn-title: "",
        btn-on: "",
    },
    btn-warning:
    {
        visible: false,
        btn-title: "",
        btn-on: "",
    },
    ...
});
```
## Sleep (method 1 - 100%)
``` javascript
/*
 * Função para dar delay.
 */
function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}
```
## Sleep (method 2 - uses jQuery Deprec)
``` javascript
/*
 * Função para dar delay.
 */
jQuery.fn.delay = function(time,func) {
    this.each(function(){
        setTimeout(func,time)
    });

    return this;
}
```
## Sleep (method 3 - uses PHP + AJAX)
JS
``` javascript
/*
 * Função para dar delay
 */
function sleep(n) {
    var request = new XMLHttpRequest();
    request.open('GET','/sleep.php?n=' + n, false);
    request.send(null);
}
```
PHP
``` php
/*
 * Função para dar delay
 */
<?php sleep($_GET['n']); ?>
```
## Force-feedback
``` javascript
if (window.navigator.vibrate) {
    this.enableVibration = true;
}
window.navigator.vibrate([400,100,100]);
```
## Visualizar filename
``` javascript
window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1)
```

# /prp/ - Professores (V1)

- [x] Cracha
- [x] Anotacoes
- [x] Agenda
- [x] Notificacoes de Noticias - /news/
- [x] Acesso ao forum - /forum/
- [x] agendamento de laboratorio (professores) - /reservations/

# /prp/ - Professores (V2)
- [ ] Editar perfil.
- [ ] Remover conta.
- [ ] Baixar vCard com Eventos
- [ ] Adicionar pessoas aos Eventos
- [ ] Receber e-mail avisando meia hora antes

# /forum/ - Central de Aprendizado

- [ ] Visualizar as 20 mais recentes
    - [ ] Create
    - [ ] Read
    - [ ] Update
    - [ ] Delete
- [ ] ALC
    - [ ] Read
- [ ] Visualização por categoria
    - [ ] Read

# /nsa/ - Sistema de secretária

- [ ] notas
- [ ] faltas
- [ ] aulas
- [ ] agenda de aulas (professores)
- [ ] agenda de laboratorio
- [ ] chamadas
- [ ] declaracoes
- [ ] horario
- [ ] solicitacoes de revis�o de notas
- [ ] rematricula
- [ ] aproveitamento de estudo
- [ ] provas (com gabarito apos realizacao)
- [ ] declaracoes de faltas
- [ ] disponibilizar publico (//serverdados)
- [ ] disponibilizar apostila em formato digital

# Reservations

# Sugestões
 - [ ] Login atraves do sso (criar um SSO e substituir o gateway de autenticação por ele)
 - [ ] Enviar e-mails programados - CronJobs


# Bilbioteca de Imagens
```php
<?php

/******
 * Upload de imagens
 ******/
 
// verifica se foi enviado um arquivo
if ( isset( $_FILES[ 'arquivo' ][ 'name' ] ) && $_FILES[ 'arquivo' ][ 'error' ] == 0 ) {
    echo 'Você enviou o arquivo: <strong>' . $_FILES[ 'arquivo' ][ 'name' ] . '</strong><br />';
    echo 'Este arquivo é do tipo: <strong > ' . $_FILES[ 'arquivo' ][ 'type' ] . ' </strong ><br />';
    echo 'Temporáriamente foi salvo em: <strong>' . $_FILES[ 'arquivo' ][ 'tmp_name' ] . '</strong><br />';
    echo 'Seu tamanho é: <strong>' . $_FILES[ 'arquivo' ][ 'size' ] . '</strong> Bytes<br /><br />';
 
    $arquivo_tmp = $_FILES[ 'arquivo' ][ 'tmp_name' ];
    $nome = $_FILES[ 'arquivo' ][ 'name' ];
 
    // Pega a extensão
    $extensao = pathinfo ( $nome, PATHINFO_EXTENSION );
 
    // Converte a extensão para minúsculo
    $extensao = strtolower ( $extensao );
 
    // Somente imagens, .jpg;.jpeg;.gif;.png
    // Aqui eu enfileiro as extensões permitidas e separo por ';'
    // Isso serve apenas para eu poder pesquisar dentro desta String
    if ( strstr ( '.jpg;.jpeg;.gif;.png', $extensao ) ) {
        // Cria um nome único para esta imagem
        // Evita que duplique as imagens no servidor.
        // Evita nomes com acentos, espaços e caracteres não alfanuméricos
        $novoNome = uniqid ( time () ) . '.' . $extensao;
 
        // Concatena a pasta com o nome
        $destino = 'imagens / ' . $novoNome;
 
        // tenta mover o arquivo para o destino
        if ( @move_uploaded_file ( $arquivo_tmp, $destino ) ) {
            echo 'Arquivo salvo com sucesso em : <strong>' . $destino . '</strong><br />';
            echo ' < img src = "' . $destino . '" />';
        }
        else
            echo 'Erro ao salvar o arquivo. Aparentemente você não tem permissão de escrita.<br />';
    }
    else
        echo 'Você poderá enviar apenas arquivos "*.jpg;*.jpeg;*.gif;*.png"<br />';
}
else
    echo 'Você não enviou nenhum arquivo!';
```

    