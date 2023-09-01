const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];   


let firstPass=document.getElementById("first-pass")
let secondPass=document.getElementById("second-pass")
let stringOne=""
let stringTwo=""

function newPassword(){

         for (let i=0; i<characters.length; i++){
            
             let firstRandomNumber=Math.floor(Math.random()*characters.length)
             stringOne+=(characters[firstRandomNumber])
            
             let secondRandomNumber=Math.floor(Math.random()*characters.length)
             stringTwo+=characters[secondRandomNumber]          
         }
        
         firstPass.textContent=stringOne.slice(0,15)
         secondPass.textContent=stringTwo.slice(0,15)  
        
       
        
        
}



