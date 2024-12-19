/*частинки сторінки*/
let block3 = document.getElementById("selection2")
let block2 = document.getElementById("selection1")
let block4 = document.getElementById("selection3")
let question11 = document.getElementById("que1.1")
let question12 = document.getElementById("que1.2")
let question13 = document.getElementById("que1.3")
let question14 = document.getElementById("que1.4")
let question15 = document.getElementById("que1.5")
let resoults = document.getElementById("res")
/*кнопки*/
let button1 = document.querySelector(".box1")
let button2 = document.querySelector(".box2")
let start = document.querySelector(".start")
let next = document.querySelector(".next")
let back2 = document.querySelector(".back2")
let next2 = document.querySelector(".next2")
let back3 = document.querySelector(".back3")
let next3 = document.querySelector(".next3")
let back4 = document.querySelector(".back4")
let next4 = document.querySelector(".next4")
let back5 = document.querySelector(".back5")
let finish = document.querySelector(".finish")
let btopics = document.querySelector(".btopics")
/*ховається*/
block3.style.display = "none"
block4.style.display = "none"
question11.style.display = "none"
question12.style.display = "none"
question13.style.display = "none"
question14.style.display = "none"
question15.style.display = "none"
resoults.style.display = "none"

button1.addEventListener('click', function showhide(){
    block2.style.display = "none"
    block3.style.display = "block"
})
button2.addEventListener('click', function showhide(){
    block2.style.display = "none"
    block4.style.display = "block"
})
start.addEventListener('click', function showhide(){
    block3.style.display = "none"
    question11.style.display = "block"
})
next.addEventListener('click', function showhide(){
    question11.style.display = "none"
    question12.style.display = "block"
})
back2.addEventListener('click', function showhide(){
    question12.style.display = "none"
    question11.style.display = "block"
})
next2.addEventListener('click', function showhide(){
    question12.style.display = "none"
    question13.style.display = "block"
})
back3.addEventListener('click', function showhide(){
    question13.style.display = "none"
    question12.style.display = "block"
})
next3.addEventListener('click', function showhide(){
    question13.style.display = "none"
    question14.style.display = "block"
})
back4.addEventListener('click', function showhide(){
    question14.style.display = "none"
    question13.style.display = "block"
})
next4.addEventListener('click', function showhide(){
    question14.style.display = "none"
    question15.style.display = "block"
})
back5.addEventListener('click', function showhide(){
    question15.style.display = "none"
    question14.style.display = "block"
})
finish.addEventListener('click', function showhide(){
    question15.style.display = "none"
    resoults.style.display = "block"
})
btopics.addEventListener('click', function showhide(){
    resoults.style.display = "none"
    block2.style.display = "block"
})
