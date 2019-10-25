function loadNavMob(id){
    data = {
        f: "one-profile",
        id: id
    }
    $.get("gateway/getJSON.php",data,function(result){
        aluno = JSON.parse(result);
        navbar = document.createElement("nav");
        navbar.setAttribute("class","navbar navbar-expand-lg navbar-light bg-light");
        navbar.setAttribute("style","background-color: #FFA420 !important;margin-bottom: 10px;")
            brand = document.createElement("a");
            brand.setAttribute("class","navbar-brand");
            brand.setAttribute("href","profile.php?id="+aluno.id);
            brand.setAttribute("id","user-brand");
            brand.innerHTML = "@"+aluno.apelido;
            navbar.appendChild(brand);

            toggler = document.createElement("button");
            toggler.setAttribute("class","navbar-toggler");
            toggler.setAttribute("type","button");
            toggler.setAttribute("data-toggle","collapse");
            toggler.setAttribute("data-target","#navbarMob");
            toggler.setAttribute("aria-controls","navbarNav");
            toggler.setAttribute("aria-expanded","false");
            toggler.setAttribute("aria-label","Toggle navigation");
                togglerspan = document.createElement("span");
                togglerspan.setAttribute("class","navbar-toggler-icon");
                toggler.appendChild(togglerspan);
            navbar.appendChild(toggler);

            mob = document.createElement("div");
            mob.setAttribute("class","collapse navbar-collapse");
            mob.setAttribute("id","navbarMob");
                ul = document.createElement("ul");
                ul.setAttribute("class","navbar-nav");
                    li1 = document.createElement("li");
                    li1.setAttribute("class","nav-item");
                        lia1 = document.createElement("a");
                        lia1.setAttribute("class","nav-link");
                        lia1.setAttribute("href","profile.php?id="+id);
                        lia1.innerHTML = "Publicações";
                        li1.appendChild(lia1);
                    ul.appendChild(li1);
                    li2 = document.createElement("li");
                    li2.setAttribute("class","nav-item");
                        lia2 = document.createElement("a");
                        lia2.setAttribute("class","nav-link");
                        lia2.setAttribute("href","profile-pictures.php?id="+id);
                        lia2.innerHTML = "Galeria";
                        li2.appendChild(lia2);
                    ul.appendChild(li2);
                    li3 = document.createElement("li");
                    li3.setAttribute("class","nav-item");
                        lia3 = document.createElement("a");
                        lia3.setAttribute("class","nav-link");
                        lia3.setAttribute("href","profile-comunity.php?id="+id);
                        lia3.innerHTML = "Comunidades";
                        li3.appendChild(lia3);
                    ul.appendChild(li3);
                    li4 = document.createElement("li");
                    li4.setAttribute("class","nav-item");
                        lia4 = document.createElement("a");
                        lia4.setAttribute("class","nav-link");
                        lia4.setAttribute("href","profile-contact.php?id="+id);
                        lia4.innerHTML = "Contato";
                        li4.appendChild(lia4);
                    ul.appendChild(li4);
                mob.appendChild(ul);
            navbar.appendChild(mob);
        $("main").prepend(navbar);
    });
}