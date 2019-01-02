$(function(){
    $(".nav-item")[3].setAttribute("class","nav-item active");
	ide = JSON.parse(localStorage.user).id;
	$.get("/gateway/getJSON.php",{f:"eventoPerseguidos",id:ide},function(result){
		
	});
});