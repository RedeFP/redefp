$(function(){
    $(".nav-item")[3].setAttribute("class","nav-item active");
<<<<<<< HEAD
})
=======
	ide = JSON.parse(localStorage.user).id;
	$.get("/gateway/getJSON.php",{f:"eventoPerseguidos",id:ide},function(result){
		
	});
});
>>>>>>> 6c5a0eae472b47947e37c523b6389aff713b93b4
