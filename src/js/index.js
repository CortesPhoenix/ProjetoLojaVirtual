var btnConectarse = document.querySelector("#conectar-se");
var btnRegistrese = document.querySelector("#registre-se");

var body = document.querySelector("body");

btnConectarse.addEventListener("click", function () {
    body.className = "conectar-se-js"
})

btnRegistrese.addEventListener("click", function () {
    body.className = "registre-se-js"
})

