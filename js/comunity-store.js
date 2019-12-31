function init_page()
{
    idc = $_GET['id'];
    $.get("/gateway/getJSON.php",{f:"loadPC",id:idc},function(result){
       obj = JSON.parse(result);
       obj.forEach(genProduto);
    });

    $.get(joinComunitydata.url,joinComunitydata,joinComunity);
}

function genProduto(item)
{
    post = document.createElement("div");
    post.setAttribute("class","container products product bk-grey col-3");
        img = document.createElement("img");
        img.setAttribute("src",item.image_url);
        img.setAttribute("class","product-imgsrc");
        post.appendChild(img);
        span = document.createElement("span");
        span.setAttribute("class","product-type");
        span.innerText = item.title;
        post.appendChild(span);
        link = document.createElement("a");
        link.setAttribute("href","product.php?id="+item.id);
            price = document.createElement("span");
            price.setAttribute("class","product-value");
            price.innerText = "$"+parseFloat(item.price).toFixed(2);
            link.appendChild(price);
        post.appendChild(link);
    document.getElementsByClassName("col-9")[0].appendChild(post);
}