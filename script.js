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

// Checked Property
const checkbox = document.getElementById("checkbox")
const visa = document.getElementById("visa")
const masterCard = document.getElementById("masterCard")
const paypal = document.getElementById("paypal")
const submit = document.getElementById("submit")
const subResult = document.getElementById("subResult")
const subPayment = document.getElementById("subPayment")

submit.onclick = function(){
    if(checkbox.checked){
        subResult.textContent = `You're Subscribed!`
    }else{
        subResult.textContent = `You're NOT Subscribed!`
    }
    if(visa.checked){
        subPayment.textContent = `You're paying with Visa!`
    }else if(masterCard.checked){
        subPayment.textContent = `You're paying with Master Card!`
    }else if(paypal.checked){
        subPayment.textContent = `You're paying with PayPal!`
    }else{
        subPayment.textContent = `You MUST select a payment type!`
    }
}

// ternary operator : condition ? if true : if false


// strings methods :
let userName = 'eng Gehad   '
console.log(userName.charAt(0));
console.log(userName.indexOf('h'));
console.log(userName.lastIndexOf('e'));
console.log(userName.length);
// trim() delete the spaces before and after the word
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(5));
console.log(userName.startsWith('G'));
console.log(userName.endsWith('d'));
console.log(userName.includes('G'));
console.log(userName.replaceAll(" " , "."));
// padStart( means that the length of the sentence will be 15 and to reach to this number we will add . at the front of the sentence)
console.log(userName.padStart(15 , "."));
console.log(userName.padEnd(15 , "."));