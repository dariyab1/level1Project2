const result=document.getElementById("result");
var currGuess=document.getElementById("currGuess");
button.addEventListener("click", checkGuess);
const score=document.getElementById("score");
var goal=1; //Math.floor(Math.random()*101+1);
var numGuesses=5;
const submitGuess=getElementById("submit");
submitGuess.addEventListener("click", checkGuess);

function checkGuess(){
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

const add1=document.getElementById("add1");
add1.addEventListener("click", addNum);

function addNum(e){
    if(e.target.id="add1"){
        currGuess+=1;
    }
    else if(e.target.id="add5"){
        currGuess+=5;
    }
    else if(e.target.id="add10"){
        currGuess+=10;
    }
    else if(e.target.id="add25"){
        currGuess+=25;
    }
    currGuess.textContent=currGuess.toString();
}

function update(g){
    score.append(g+", ");
}

//make currentguess text const and then make currguess variable





