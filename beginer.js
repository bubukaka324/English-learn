let block3 = document.getElementById("selection2")
let block2 = document.getElementById("selection1")
let button1 = document.querySelector(".button1")
block3.style.display = "none"
button1.addEventListener('click', function showhide(){
    block2.style.display = "none"
    block3.style.display = "block"
})
