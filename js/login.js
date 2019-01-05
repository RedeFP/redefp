function Submit(){
    data = {
        ra: $("#inputRA").val(),
        pass: $("#inputPassword").val()
    };
    $.get("/gateway/auth/login.php",data,function(result){
        obj = JSON.parse(result)[0];
        console.log(obj);
        if(obj.error == true){
            if(obj.dados.redireciona == true)
            {
                window.location = obj.dados.local;
            }
            else
            {
                div = document.createElement("div");
                div.setAttribute("class","alert alert-danger");
                strong = document.createElement("strong");
                strong.innerHTML = "Erro: Login/Senha Incorreta";
                div.appendChild(strong);
                document.getElementById("error").appendChild(div);
            }
        } else {
            res = JSON.stringify(JSON.parse(result)[0]["dados"]);
            localStorage.setItem("user",res);
            window.location.href = "../gateway/auth/save.php?id="+$("#inputRA").val();
        }
    });
    
}
