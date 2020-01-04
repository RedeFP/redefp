$.getScript("../js/JS.JS");

$(function() {
    HideAlert();
    $("#inputEmail").keypress(function(e){
        if(e.which == 9) {
            $("#inputPassword").focus();
        }
        if(e.which == 13) {
            if(document.getElementById("inputPassword").value == ""){
                Submit();
            }else{
                $("#inputPassword").focus();
            }
        }
    });
    $("#inputPassword").keypress(function(e){
        if(e.which == 13) {
            Submit();
        }
    });
});

function Submit() {
    //Coleta os submit()de login do form
    userinput = $("#inputEmail").val();
    passinput = $("#inputPassword").val();

    //Chamada AJAX via jQuery
    $.get(URLBASE+"gateway/auth/sendPRPLogin.php", { user: userinput, pass: passinput }, function(result) {
        var obj = JSON.parse(result);

        if (obj.error == true) {
            //Se possui um erro, emite um alerta
            //Falta implementar, mas em breve será assim
            //TODO:alert("#alert",obj.message)
            $("#alert").html(obj.message);
            $("#box-alert").css("display", "");

        } else if (obj.error == false) {
            //Se não, cria os LocalStorage's, redireciona para Home
            localStorage.prpstate = true;
            localStorage.prpuser = JSON.stringify(obj.data);
            window.location.href = "home.php";
        }
    });
}

function HideAlert() {
    $("#box-alert").css("display", "none");
}