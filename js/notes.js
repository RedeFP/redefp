$(function(){
    uuid = JSON.parse(localStorage.prpuser)["idprofessores"];
    data = {
        id:uuid,
        f:"notesload"
    };
   $.get("../gateway/getJSON.php",data,function(result){
    console.log(result);
    obj = result;
    obj.forEach(genList);
    obj.forEach(genTab);
   });
});


function genList(obj) {
    list = document.createElement("a");
    list.setAttribute("class","list-group-item list-group-item-action descriptions");
    list.setAttribute("data-toggle","list");
    list.setAttribute("href","#note"+obj.id);
    list.setAttribute("role","tab");
    list.innerHTML = obj.txnotes;
    document.getElementById("myList").append(list);
}

function genTab(obj) {
    res = obj.txnotes.replace(/\r\n/g,"<br>");
    tab = document.createElement("div");
    tab.setAttribute("class","tab-pane");
    tab.setAttribute("id","note"+obj.id);
    tab.setAttribute("role","tabpanel");
    tab.innerHTML = res;
    console.log(res);
    document.getElementById("myTab").append(tab);
}