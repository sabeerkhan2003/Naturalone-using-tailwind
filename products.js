var options = document.getElementById("options")
var menu = document.getElementById("menubut")
var navx = document.getElementById("navx")

menu.addEventListener("click", function () {
    options.style.right = "0%"
})

navx.addEventListener("click", function () {
    options.style.right = "-50%"
})