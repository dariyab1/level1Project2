const currGuessHTML=document.getElementById("currGuess"); //current number being guessed but the text version
const log=document.getElementById("history"); //numbers that have already been guessed
const guessesLeftHTML=document.getElementById("numG");
const commitButton=document.getElementById("commit");
const resetButton=document.getElementById("reset");

let goal=Math.floor(Math.random()*101+1);
let numGuesses=5; //how many attempts they have 
let currGuess=50; //variable version of current number being guessed

commitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);

function checkGuess(){
    let result=`Guess: ${currGuess}, Result: `;
    const diff=Math.abs(currGuess-goal);
    if(currGuess==goal){
        result+="yay,you got it.";
    }
    else{
        if(diff<=5){
        result+="very hot";
        }
        else if(diff<=8){
            result+="hot";
        }
        else if(diff<=15){
            result+="very warm";
        }
        else if(diff<=20){
            result+="warm";
        }
        else if(diff<=30){
            result+="cool";
        }
        else if(diff<=40){
            result+="very cool";
        }
        else if(diff<=55){
            result+="cold";
        }
        else if(diff>55){
            result+="very cold";
        }
        if(diff>5){
            numGuesses--;
        }
        
        // Update the remaining guesses
        guessesLeftHTML.textContent = numGuesses;
        
        if(numGuesses==0){
            result+="You have run out of guesses :(("
        }

    }
    
    log.innerHTML += `<li>${result}</li>`;
    if(numGuesses==0){
        endGame();
    }
    
}

const add1Button=document.getElementById("add1");
add1Button.addEventListener("click", add1);
const add5Button=document.getElementById("add5");
add5Button.addEventListener("click", add5);
const add10Button=document.getElementById("add10");
add10Button.addEventListener("click", add10);
const add25Button=document.getElementById("add25");
add25Button.addEventListener("click", add25);
const sub1Button=document.getElementById("sub1");
sub1Button.addEventListener("click", sub1);
const sub5Button=document.getElementById("sub5");
sub5Button.addEventListener("click", sub5);
const sub10Button=document.getElementById("sub10");
sub10Button.addEventListener("click", sub10);
const sub25Button=document.getElementById("sub25");
sub25Button.addEventListener("click", sub25);


function add1() {
    if(currGuess+1>0 && currGuess+1<=100){
        currGuess += 1;}
    
    // Update the HTML element with the new guess
    currGuessHTML.textContent = currGuess;
}
function add5() {
    if(currGuess+5>0 && currGuess+5<=100){
    currGuess += 5;}
    // Update the HTML element with the new guess
    currGuessHTML.textContent = currGuess;
}
function add10() {
    if(currGuess+10>0 && currGuess+10<=100){
    currGuess += 10;}
    // Update the HTML element with the new guess
    currGuessHTML.textContent = currGuess;
}
function add25() {
    if(currGuess+25>0 && currGuess+25<=100){
    currGuess += 25;}
    // Update the HTML element with the new guess
    currGuessHTML.textContent = currGuess;
}
function sub1() {
    if(currGuess-1>0 && currGuess-1<=100){
    currGuess -= 1;}
    // Update the HTML element with the new guess
    currGuessHTML.textContent = currGuess;
}
function sub5() {
    if(currGuess-5>0 && currGuess-5<=100){
    currGuess -= 5;}
    // Update the HTML element with the new guess
    currGuessHTML.textContent = currGuess;
}
function sub10() {
    if(currGuess-10>0 && currGuess-10<=100){
    currGuess -= 10;}
    // Update the HTML element with the new guess
    currGuessHTML.textContent = currGuess;
}
function sub25() {
    if(currGuess-25>0 && currGuess-25<=100){
    currGuess -= 25;}
    // Update the HTML element with the new guess
    currGuessHTML.textContent = currGuess;
}

//make currentguess text const and then make currguess variable

function endGame() {
    if (goal !== currGuess) {
        log.innerHTML += `<li>Game Over. The number was ${goal}. Try again!</li>`;
    }
    commitButton.disabled = true;
    resetButton.disabled = false;
}


function resetGame() {
    // Reset the game state
    goal = Math.floor(Math.random() * 100) + 1;
    currGuess = 50;
    numGuesses = 5;
    currGuessHTML.textContent = currGuess;
    guessesLeftHTML.textContent = numGuesses;
    log.innerHTML = "";
    commitButton.disabled = false;
    resetButton.disabled = true;
}
