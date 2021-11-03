const passwordEl = document.getElementById("password");
const clipboardEl = document.getElementById("clipboard");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols ="!$%&/()=?*`ª^_";



function getUpperCase(){
    return upperCase[Math.floor(Math.random() * upperCase.length)]

}

function getLowerCase(){
    return lowerCase[Math.floor(Math.random() * lowerCase.length)]
}

function getNumbers(){
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbols(){
    return symbols[Math.floor(Math.random() * symbols.length)]
}



function generatePassword(){

const len = lengthEl.value;

let password = "";

if(upperEl.checked){
    password += getUpperCase();
}
if(lowerEl.checked){
    password += getLowerCase();
}

if(symbolsEl.checked){
    password += getSymbols();
}

if(numbersEl.checked){
    password += getNumbers();
}

for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
}

passwordEl.innerText = password;

}

function generateX(){

const xs = [];

if(upperEl.checked) {
    xs.push(getUpperCase());
}

if(lowerEl.checked) {
    xs.push(getLowerCase());
}

if(symbolsEl.checked) {
    xs.push(getSymbols());
}

if(numbersEl.checked) {
    xs.push(getNumbers());
}

if (xs.length === 0) return "";

return xs[Math.floor(Math.random() * xs.length)];


}


generateEl.addEventListener("click", generatePassword);

