let char = [
    
    "a","z","e","r","t","y","u","i","o","p","q","s","d",
    "f","g","h","j","k","l","m","w","x","c","v","b","n",
    "A","Z","E","R","T","Y","U","I","O","P","Q","S","D",
    "F","G","H","J","K","L","M","W","X","C","V","B","N",
    "0","1","2","3","4","5","6","7","8","9","!","#","$",
    "%","&","'","(",")","*","+",",","-",".","/",":",";",
    "<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"
]
      
    


let passwordSize = 10
let result= document.getElementById("result")



function generate() {
    result.textContent = " "
    for(i=0; i<passwordSize; i++) {
        password = Math.floor(Math.random() * char.length)
        result.textContent += char[password]
    }
}


