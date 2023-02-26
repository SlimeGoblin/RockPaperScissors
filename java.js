/* My Variables */

const rock = "ROCK!"
const paper = "PAPER!"
const scissors = "SCISSORS!"
var answer =''

var playerScore = 0
var computerScore = 0
var round = 1

var computerPick = ''
var playerPick = ''
var result = ''

var winner = ''

/* Rock Paper Scissors Buttons */

const rockButton = document.querySelector('#rock')

rockButton.addEventListener('click', function(e){
     userResponse = "rock";
     console.log(`Round: ${round}`)
     playRound(getPlayerChoice(), getComputerChoice());
});


const paperButton = document.querySelector('#paper')

paperButton.addEventListener('click', function(e){
    userResponse = "paper";
    console.log(`Round: ${round}`)
   playRound(getPlayerChoice(),getComputerChoice());
});



const scissorsButton = document.querySelector('#scissors')

scissorsButton.addEventListener('click', function(e){
    userResponse = "scissors";
    console.log(`Round: ${round}`)
    playRound(getPlayerChoice(),getComputerChoice());
});






/*Rock Paper Scissors Console */

function getComputerChoice() {



    var computer= Math.floor(Math.random()*3);
  

    if (computer == 0) {
        answer = rock;  
    } else if(computer == 1){
        answer = paper;
    } else if (computer == 2){
        answer = scissors;
    }
    
    console.log(`Computer chooses; ${answer}`);
    return computerPick = answer

}

function getPlayerChoice(){


    /*
    var userResponse = prompt('Enter "Rock", "Paper", or "Scissors"');
    */
    

    if (userResponse == "rock"){
        userResponse = rock
        console.log(`Player chooses; ${userResponse}`);
        return playerPick = userResponse;  
    } else if (userResponse== "scissors") {
        userResponse = scissors
        console.log(`Player chooses; ${userResponse}`)
        return playerPick = userResponse;  
    } else if (userResponse== "paper"){
        userResponse = paper
        console.log(`Player chooses; ${userResponse}`)
        return playerPick = userResponse;  
    }  else {
        userResponse = null
    }


  
}


function playRound(playerPick,computerPick){





    if (playerPick == rock && computerPick == paper){
        result = "You lose! Paper beats rock!";
        computerScore += 1;
    } else if (playerPick== rock && computerPick == scissors){
        result = "You win! Rock beats scissors!";
        playerScore += 1;
    } else if (playerPick == rock && computerPick == rock) {
        result ="Tie! Rock ties with rock!";
    }

    if (playerPick == "PAPER!" && computerPick == "PAPER!"){
        result = "Tie! Paper ties paper!";
    } else if (playerPick== "PAPER!" && computerPick == "SCISSORS!"){
        result = "You lose! Paper loses to scissors!";
        computerScore += 1;
    } else if (playerPick == "PAPER!" && computerPick == "ROCK!") {
        result = "You win! Paper beats rock!";
        playerScore += 1;
    }

    if (playerPick == "SCISSORS!" && computerPick == "PAPER!"){
        result = "You win! Scissors beats paper!";
        playerScore += 1
    } else if (playerPick== "SCISSORS!" && computerPick == "SCISSORS!"){
        result = "Tie! Scissors ties scissors";
    } else if (playerPick == "SCISSORS!" && computerPick == "ROCK!"){
        result = "You lose! Scissors loses to rock!";
        computerScore += 1;
    } 
    
  
    console.log(result);

    console.log(`Computer Score: ${computerScore} Player Score: ${playerScore}

        
    `);
    checkWinner();
    round += 1


    /* DOM Manip; Show Round */

    const roundNumber = document.querySelector(".round")
    roundNumber.textContent = (`Round: ${round}`)




    /* DOM Manip; Show Player Score */


    const scoreContain = document.querySelector("#scoreContainer")



    const displayPlayerScore = document.createElement('div')
    displayPlayerScore.classList.add(`playerScore`)
    displayPlayerScore.textContent = `Player Score: ${playerScore}`

    while (scoreContain.firstChild) {
        scoreContain.removeChild(scoreContain.firstChild);
    }

    scoreContain.appendChild(displayPlayerScore)

    /* DOM Manip; Show Computer Score */

    const displayComputerScore = document.createElement('div')
    displayComputerScore.classList.add(`computerScore`)
    displayComputerScore.textContent = `Computer Score: ${computerScore}`
    scoreContain.appendChild(displayComputerScore)

    /* DOM Manip; Show Each Pick */

    const showPick = document.createElement('div')
    showPick.textContent = `Player Picks: ${playerPick} Computer Picks: ${computerPick}`
    scoreContain.appendChild(showPick)


    /* DOM Manip; Show Result */

    const resultContainer = document.querySelector("#resultContainer")

    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }

    const displayResult = document.createElement('div')
    displayResult.classList.add('theResult')
    displayResult.textContent = `${result}`
    resultContainer.appendChild(displayResult)

    const displayWinner = document.createElement('div')
    displayWinner.classList.add('checkWinner')
    displayWinner.textContent = (`${winner}`)
    resultContainer.appendChild(displayWinner)


    
/* DOM Manip; Create Restart Button */

    if (winner.substring(0,4)== 'GAME'){

        const restartButton = document.createElement('button')
        restartButton.classList.add = ("restart")
        restartButton.textContent=(`RESTART`)
        const refreshPage = () => {
            location.reload();
        }
        restartButton.addEventListener('click', refreshPage)
        resultContainer.appendChild(restartButton)


        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;


    }


}

/* TODO: 

change

*/

function checkWinner(){
    if (playerScore ==5){
        winner = (`GAME OVER- You Win!

     
        
        `)

    } else if (computerScore == 5){
        winner =(`GAME OVER- Computer Wins!


        
        `)

    }


}


/* Don't think we need this anymore 

function playGame() {
 
    for (i = 1;; i++) {
        console.log(`Round: ${i}`)
        getPlayerChoice();
        getComputerChoice();
        playRound(playerPick, computerPick);
        if (result.substring(0,9) == "You lose!"){
            computerScore += 1;
        } else if (result.substring(0,8)== "You win!"){
            playerScore += 1;
        }
        console.log(`Computer Score: ${computerScore} Player Score: ${playerScore}

        
        `);
        

        if (playerScore == 5){
            console.log(`GAME OVER- YOU WIN!`)
            break
        }   

        if (computerScore == 5){
            console.log(`GAME OVER- YOU LOSE!`)
            break
        }
    }  

}

*/



