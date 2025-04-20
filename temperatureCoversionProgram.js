// Temperature conversion program:
const textBox = document.getElementById("textBox")
const toFah = document.getElementById("toFah")
const toCels = document.getElementById("toCels")
const result = document.getElementById("result")
let temp

function convert(){
    if(toFah.checked){
        temp = Number(textBox.value)
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(1) + "°F!"
    }else if(toCels.checked){
        temp = Number(textBox.value)
        temp = (5 / 9) * (temp - 32)
        result.textContent = temp.toFixed(1) + "°C!"
    }else{
        result.textContent = "Please select a unit"
    }
}