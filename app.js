const passwordCharacters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
    '[', ']', '{', '}', '|', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?', '\\', '`', '~'
  ];
  
let password = document.getElementById('pass')
let generateBtn = document.querySelector('.generate')
let copyBtn = document.querySelector('.copy')
password.value = ''

let passValue = ''

generateBtn.addEventListener('click', () =>{
       
    passValue = ''
    for(let i = 0 ; i<13;i++){
        let random = Math.floor(Math.random() * passwordCharacters.length)
            passValue+= passwordCharacters[random]
        }
        password.value = passValue
})


