const button=document.querySelector("button");
const result=document.getElementById("result");
const currGuess=document.getElementById("currGuess");
button.addEventListener("click", checkGuess);
const score=document.getElementById("score");
const goal=1; //Math.floor(Math.random()*101+1);
//const userGuess=50
const numGuesses=5;

function checkGuess(){
    const userGuess=prompt("enter num");
    currGuess.textContent=userGuess;
    if(userGuess==goal){
        result.textContent="yay,you got it.";
    }
    else if(Math.abs(userGuess-goal)<=5){
        result.textContent="very hot";
    }
    else if(Math.abs(userGuess-goal)<=8){
        result.textContent="hot";
    }
    else if(Math.abs(userGuess-goal)<=15){
        result.textContent="very warm";
    }
    else if(Math.abs(userGuess-goal)<=20){
        result.textContent="warm";
    }
    else if(Math.abs(userGuess-goal)<=30){
        result.textContent="cool";
    }
    else if(Math.abs(userGuess-goal)<=40){
        result.textContent="very cool";
    }
    else if(Math.abs(userGuess-goal)<=55){
        result.textContent="cold";
    }
    else if(Math.abs(userGuess-goal)>55){
        result.textContent="very cold";
    }
}

function addNum(){
    //add number based on what button is clicked
}

function update(g){
    score.append(g+", ");
}







