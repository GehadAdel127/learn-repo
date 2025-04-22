// Random Password Generator Program

const lengthOfPassword = 12
const isIncludeLowerCase = true
const isIncludeUpperCase = true
const isIncludeNumber = true
const isIncludeSymbol = true

function generateRandomPassword (length , lower , upper , number , symbol){
    const lowerChars = "abcdefghijklmnopqrstuvwxyz"
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "1234567890"
    const symbols = "~!@#$%^&*_+=?"

    let allowedChars = ""
    let password = ""

    allowedChars += isIncludeLowerCase ? lowerChars : ""
    allowedChars += isIncludeUpperCase ? upperChars : ""
    allowedChars += isIncludeNumber ? numbers : ""
    allowedChars += isIncludeSymbol ? symbols : ""

    if(lengthOfPassword <= 11){
        return `(password length must be at least 12)`
    }

    if(allowedChars.length === 0){
        return `(At least one of character needs to be selected)`
    }

    for(let i = 0; i < lengthOfPassword; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }

    return password
}

const password = generateRandomPassword(lengthOfPassword , isIncludeLowerCase , isIncludeUpperCase , isIncludeNumber , isIncludeSymbol)
console.log(`The generated password is : ${password}`);
