const passwordCharacters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
    '[', ']', '{', '}', '|', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?',  '`', '~'
  ];
  
let password = document.getElementById('pass')
let generateBtn = document.querySelector('.generate')
let copyBtn = document.querySelector('.copy')
password.value = ''

let upperCase = document.getElementById('upper-case')
let lowerCase = document.getElementById('lower-case')
let numbers = document.getElementById('number-case')
let specialChar = document.getElementById('special-case')


let passValue = ''

let upper = passwordCharacters.filter(isUpperCase)
let lower = passwordCharacters.filter(isLowerCase)
let No = passwordCharacters.filter(isNumber)
let onlyAlpha = passwordCharacters.filter(isAlphabet)
let alphaSpecial = passwordCharacters.filter(isAlphabetAndSpecial)
console.log("🚀 ~ onlyAlpha:", alphaSpecial)

let array 


generateBtn.addEventListener('click', () =>{

    if(upperCase.checked){
        generatePassword(upper)
    }
    if(lowerCase.checked){
        generatePassword(lower)
    }
    if(lowerCase.checked && upperCase.checked){
        // generatePassword(onlyAlpha)
        array = upper.concat(lower)
        generatePassword(array)
    }
    if(lowerCase.checked && upperCase.checked && specialChar.checked){
        generatePassword(alphaSpecial)
    }
    
    

    
       
   
})


function isUpperCase(arr) {
    return  typeof arr === 'string' && /^[A-Z]+$/.test(arr)
    // ^[A-Z]+$: This matches a string that contains only uppercase letters and nothing else.
}
function isLowerCase(arr) {
    return typeof arr === 'string' && /^[a-z]+$/.test(arr)
}

function isNumber(arr) {
    return !isNaN(parseFloat(arr))  // parseFloat convert a string to a float number isNaN checks if the iterated element NaN or not it returns true if it's not NaN so that the only thing get converted to numbers are numbers only
}

function isAlphabet (arr) {
    return typeof arr === 'string' && /^[a-zA-Z]+$/.test(arr)
    // /^[a-zA-Z]+$/ keeps only the  alphabet in the array
}
function isAlphabetAndSpecial(arr) {
    return typeof arr === 'string' && !/^\d+$/.test(arr)
}



function generatePassword(type) {
    passValue = ''
    for(let i = 0 ; i<13;i++){
        let random = Math.floor(Math.random() * type.length)
            passValue+= type[random]
        }
        password.value = passValue
}





