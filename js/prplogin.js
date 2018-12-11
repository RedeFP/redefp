$(function(){

});

function submit(){
    userinput = $("#inputRA").val();
    passinput = $("#inputPass").val();
    $.get("/gateway/auth/sendPRPLogin.php",{f:"login-prp",user:userinput,pass:passinput},function(result){
        
    });
}
    