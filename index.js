let randomNum = parseInt((Math.random() * 49) + 1); 
const submit = document.querySelector("#submit-btn");
const userInput=document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remGuess = document.querySelector(".rem-guesses");
const lowOrHigh = document.querySelector(".lowOrhigh");
const startOver = document.querySelector(".result");

const p = document.createElement("p")
let playGame = true;
let prevGuess=[];
let numGuess= 1;

if(playGame){
    submit.addEventListener("click" , function(e){
        e.preventDefault();

        const guess = parseInt(userInput.value);
        valid(guess);
    })
}

function valid(guess){
    if(isNaN(guess)){
        alert("please enter a valid number");
} else if(guess<1){
    alert("please enter a  number greater than 1");

} else if(guess>49){
    alert("please enter a  number less than 49");

}else{
       prevGuess.push(guess);
       if(numGuess >=7){
        displayGuess(guess);
        displayMessage(` your Game is over , Random number is ${randomNum}`);
        endGame();}
        else{
            displayGuess(guess);
            checkGuess(guess);
        }      
}
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage("your Guess is right , You won")
        endGame();
    }
    else if (guess < randomNum){
        displayMessage("number is low");
    }
    else{
    (guess > randomNum)
        displayMessage(" number is greater ");
    }

}

function displayGuess(guess){
    userInput.value="";
    guessSlot.innerHTML += `${guess}   ` ;
    numGuess ++;
    remGuess.innerHTML = `${8 - numGuess}`;

}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>`;

}


function endGame(){
    userInput.value="";
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML= `<h2 id="newGame"> Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame(){
const newGameButton = document.querySelector("#newGame");
newGameButton.addEventListener("click",function(e){
randomNum = parseInt(Math.random()* 49 +1 );
prevGuess = []
numGuess= 1
guessSlot.innerHTML=''
remGuess.innerHTML= `${7 - numGuess}`;
userInput.removeAttribute("disabled")
startOver.removeChild(p)
playGame = true
}
)
}