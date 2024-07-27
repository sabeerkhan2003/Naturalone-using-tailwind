var options = document.getElementById("options")
var menu = document.getElementById("menubut")
var navx = document.getElementById("navx")

menu.addEventListener("click", function () {
    options.style.right = "0%"
})

navx.addEventListener("click", function () {
    options.style.right = "-50%"
})

// products functionality

var products=document.getElementById("products")
var search=document.getElementById("search")
var productname=products.querySelectorAll("div")

    search.addEventListener("keyup",function(){
        var enteredvalue=event.target.value.toUpperCase()

        for(count=0;count<productname.length;count=count+1)
        {
            var prod=productname[count].querySelector("h2").textContent
             
            if (prod[count].toUpperCase().indexOf(enteredvalue)<0)
            {
                productname[count].style.display="none"
            }
            else{
                productname[count].style.display="block"
            }
        }

})