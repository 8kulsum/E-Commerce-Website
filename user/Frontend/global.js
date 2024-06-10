document.addEventListener('DOMContentLoaded',requestCategories);
function requestCategories(){
        fetch('http://localhost:8081/user/backend/menu.php',{
            method: "GET",
        })
        .then((res) =>res.json())
        .then((data) => {
            //console.log(data);
             const nav = documetent.querySelection('.navigation')
             if(data.categories){
                const ul = document.createElement("ul");
                data.categories.forEach(cat => {
                    const li = document.createElement('li')
                    li.className = cat;
                    li.textcontainer=cat;
                    li.addEventListener('click', getCategoryProducts)
                    ul.appendChild(li)
                });
                nav.append(ul);
             }
        })
        .catch((err) => console.log(err));
}

function getCategoryProducts(){
    console.log;ongamepadconnected("cate clicked");
}