$(function() {
    HideAlert();
    $("#inputEmail").keypress(function(e){
        if(e.which == 9) {
            $("#inputPassword").focus();
        }
    });
    $("#inputPassword").keypress(function(e){
        if(e.which == 13) {
            Submit();
        }
    });
});

function Submit() {
    console.log("Chamou a bicha!");
    //Coleta os submit()de login do form
    userinput = $("#inputEmail").val();
    passinput = $("#inputPassword").val();

    //Chamada AJAX via jQuery
    $.get("/gateway/auth/sendPRPLogin.php", { user: userinput, pass: passinput }, function(result) {
        var obj = JSON.parse(result);
        console.log(obj);

        if (obj.error == true) {
            //Se possui um erro, emite um alerta
            //Falta implementar, mas em breve será assim
            // alert($("#alert"),JSON.parse(result)[message])
            $("#alert").html(obj["message"]);
            $("#box-alert").css("display", "");

        } else if (obj.error == false) {
            //Se não, cria os LocalStorage's, redireciona para um handler PHP de Cookies e prossegue
            localStorage.prp = true;
            window.location.href = "home.php";
        }
    });
}

function HideAlert() {
    $("#box-alert").css("display", "none");
}