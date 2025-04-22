let number = document.getElementById("number")
let decrease = document.getElementById("decrease")
let reset = document.getElementById("reset")
let increase = document.getElementById("increase")
let count = 0

// decrease.onclick = function (){
//     count--
//     number.textContent = count
// }
// increase.onclick = function (){
//     count++
//     number.textContent = count
// }
// reset.onclick = function (){
//     count = 0
//     number.textContent = count
// }


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
// randomButton.onclick = function(){
//     num = Math.trunc(Math.random() * max) + min
//     randomNum.textContent = num
// }

// Checked Property
const checkbox = document.getElementById("checkbox")
const visa = document.getElementById("visa")
const masterCard = document.getElementById("masterCard")
const paypal = document.getElementById("paypal")
const submit = document.getElementById("submit")
const subResult = document.getElementById("subResult")
const subPayment = document.getElementById("subPayment")

// submit.onclick = function(){
//     if(checkbox.checked){
//         subResult.textContent = `You're Subscribed!`
//     }else{
//         subResult.textContent = `You're NOT Subscribed!`
//     }
//     if(visa.checked){
//         subPayment.textContent = `You're paying with Visa!`
//     }else if(masterCard.checked){
//         subPayment.textContent = `You're paying with Master Card!`
//     }else if(paypal.checked){
//         subPayment.textContent = `You're paying with PayPal!`
//     }else{
//         subPayment.textContent = `You MUST select a payment type!`
//     }
// }

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

// string slicing variable.slice(start , end)

let fullName = "Gehad Adel"
let firstName = fullName.slice(0 , 5)
console.log(firstName);

// if i want to take the word for the end i can instead not write 0 but nothing 
// and if i want to take from the end of the word i can use -1 to the last charecter
// if i want to take only the first name but i don't know the index :
firstName = fullName.slice(0 , fullName.indexOf(" "))
let lastName = fullName.slice(fullName.indexOf(" ") + 1)
console.log(lastName);


// exercise
let email = "Gehad1@gmail.com"
let nameOfTheUser = email.slice(0 , email.indexOf("@"))
console.log(nameOfTheUser);


// method chaining
// let name1 = window.prompt("Please enter your name : ")
// name1 = name1.trim().charAt(0).toUpperCase() + name1.trim().slice(1).toLowerCase()
// console.log(name1);


// Number guessing game
let minNum = 0
let maxNum = 100
let attempts = 0
let guess
let running = true

let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
// while(running){
//     guess = Number(window.prompt(`Guess number between ${minNum} and ${maxNum} : `))
//     if(isNaN(guess)){
//         window.alert("Please enter a valid number")
//     }else if(guess < minNum || guess > maxNum){
//         window.alert(`Please enter number between ${minNum} and ${maxNum}`)
//     }else{
//         attempts++
//         if(guess < answer){
//             window.alert("Too low try again!")
//         }else if(guess > answer){
//             window.alert("Too large try again!")
//         }else{
//             window.alert(`Correct the answer is ${answer} it took you ${attempts} attempts`)
//             running = false
//         }
//     }
// }



// spread operators:
let numbers = [1,2,3,4,5]
let maxNumber = Math.max(...numbers)
let minNumber = Math.min(...numbers)
console.log(maxNumber);
console.log(minNumber);

let myName = "Gehad"
let letters = [...myName]
console.log(letters);


let fruits = ["Apple" , "Banana" , "Orange"]
let newFruits = [...fruits , "Mango"]
console.log(newFruits);


// rest parameters: the opposite of the spread operators
function allNames(...names){
    console.log(names);
    console.log(...names);
    
}

const name2 = "Aida"
const name3 = "Ahmad"
const name4 = "Nour"

allNames(name2 , name3 , name4)


// Callback: if i want to sure that a function followed by another function whatever the first took time to excute i could use the callback function which is like that :

function hello(callback){
    console.log("Hello!");
    callback()
}
function goodbye(){
    console.log("GoodBye!");
}
hello(goodbye)

// forEach() method:
let numbersOfArray = [1 , 2 , 3 , 4 , 5]

// the elements are doubled then displayed
numbersOfArray.forEach(double)
numbersOfArray.forEach(display)

function display(element){
    console.log(element);
    
}
function double (element , index , array){
    array[index] = element * 2
}

// map() method: it's the same thing of the forEach() but the original array doesn't change but the new one

const squares = numbersOfArray.map(square)

function square(element){
    return Math.pow(element , 2)
}
console.log(numbersOfArray);
console.log(squares);


// filter() method: creates a new array bu filtering out elements

numbers = [1 , 2 , 3 , 4 , 5 , 6]
let evensNumbers = numbers.filter(even)

function even(element){
    return element % 2 == 0
}

console.log(evensNumbers);


// reduce() method : reduce the elements of an array to a single value

const prices = [5 , 10 , 15 , 20]
const total =  prices.reduce(sum)

console.log(total);

function sum(accumulator , element){
    return accumulator + element
}