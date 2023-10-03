const button=document.querySelector("button");
const result=document.getElementById("result")
button.addEventListener("click", enterGuess);
const goal=Math.floor(Math.random()*101+1);
const userGuess=null;
function enterGuess(){
    userGuess=prompt("Enter your guess");
    if(userGuess==goal){
        result.textContent="yay.";
    }
    else{
        result.textContent="nay, the answer was "+goal;
    }
}










