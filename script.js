let number = document.getElementById("number")
let decrease = document.getElementById("decrease")
let reset = document.getElementById("reset")
let increase = document.getElementById("increase")
let count = 0

decrease.onclick = function (){
    count--
    number.textContent = count
}
increase.onclick = function (){
    count++
    number.textContent = count
}
reset.onclick = function (){
    count = 0
    number.textContent = count
}