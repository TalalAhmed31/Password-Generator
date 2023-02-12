// getting elements //
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("specialcharacter");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

//Generating Passwords function
const generatePassword = (password = "") => {
    if (lowercaseEl.checked){
        password += getRandomLower()
    }
    if (uppercaseEl.checked){
        password += getRandomUpper()
    }
    if (numbersEl.checked){
        password += getRandomNumber()
    }
    if (symbolsEl.checked){
        password += getRandomSymbol()
    }
    if (password.length < lengthEl.value){
        return generatePassword(password)
    }
    if (symbolsEl.checked){
        password += getRandomSymbol()
    }
    resultEl.innerText = password.slice(0,lengthEl.value)
}
generateEl.addEventListener("click", function() {
        generatePassword();
    })



//generating random functions//
function getRandomLower(){
     return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol(){
    const symbols = "~!@#$%^&*()_+=-\|}]{[]}',./";
    return symbols[(Math.floor(Math.random()*symbols.length))];
}


clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});