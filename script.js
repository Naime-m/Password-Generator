let char = [
    "a","z","e","r","t","y","u","i","o","p","q","s","d",
    "f","g","h","j","k","l","m","w","x","c","v","b","n",
    "A","Z","E","R","T","Y","U","I","O","P","Q","S","D",
    "F","G","H","J","K","L","M","W","X","C","V","B","N",
    "0","1","2","3","4","5","6","7","8","9","!","#","$",
    "%","&","'","(",")","*","+",",","-",".","/",":",";",
    "<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"
]

let length = document.getElementById("length")
let passwordSize = " "

let result1= document.getElementById("result1")
let result2= document.getElementById("result2")
let result3= document.getElementById("result3")
let result4= document.getElementById("result4")
let copyText = " "

    
function assignValue() {
 passwordSize = length.value
}

function generate() {
    
    result1.textContent = " "
    result2.textContent = " "
    result3.textContent = " "
    result4.textContent = " "
    
    for(i=0; i<passwordSize; i++) {
        password = Math.floor(Math.random() * char.length)
        result1.textContent += char[password]
    password = Math.floor(Math.random() * char.length)
    result2.textContent += char[password]
    password = Math.floor(Math.random() * char.length)
    result3.textContent += char[password]
    password = Math.floor(Math.random() * char.length)
    result4.textContent += char[password]
    }
    
}


function copy1() {
    copyText = result1.textContent
    navigator.clipboard.writeText(copyText).then(() =>{
        alert("Copied");
        })
} 
  
function copy2() {
    copyText = result2.textContent
    navigator.clipboard.writeText(copyText).then(() =>{
        alert("Copied");
        })
} 
function copy3() {
    copyText = result3.textContent
    navigator.clipboard.writeText(copyText).then(() =>{
        alert("Copied");
        })
} 
function copy4() {
    copyText = result4.textContent
    navigator.clipboard.writeText(copyText).then(() =>{
        alert("Copied");
        })
} 