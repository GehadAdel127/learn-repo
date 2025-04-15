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


console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(3.5));
// round it's rounding the number to bigger or the smaller instead
console.log(Math.floor(3.5));
// floor round down
console.log(Math.ceil(3.1));
// ceil round to up
console.log(Math.trunc(3.5));
// trunc is truncating to the number
console.log(Math.pow(3 , 2));
console.log(Math.sqrt(81));
console.log(Math.log(10));
// Math.log ==> to find the nature algorithm for number
console.log(Math.sin(45));
console.log(Math.cos(45));
console.log(Math.tan(45));
console.log(Math.abs(-45));
console.log(Math.max(45 , 90 , 130));
console.log(Math.min(45 , 90 , 130));
console.log(Math.random());
// random give us by default a random number between 0 and 1 but if i want it to have a random number between any other two numbers:
console.log(Math.trunc(Math.random() * 45));
console.log(Math.trunc(Math.random() * (45 - 20 )) + 20);


// Random Number Generator
const randomNum= document.getElementById("randomNum")
const randomButton = document.getElementById("randomButton")
let num
const max = 10
const min = 1
randomButton.onclick = function(){
    num = Math.trunc(Math.random() * max) + min
    randomNum.textContent = num
}