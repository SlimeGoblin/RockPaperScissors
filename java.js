/* DONE! */

var playerScore = 0
var computerScore = 0
var round = 0

var computerPick = ''
var playerPick = ''
var result = ''

var winner = Math.max(computerScore, playerScore)


function getComputerChoice() {

    const rock = "ROCK!"
    const paper = "PAPER!"
    const scissors = "SCISSORS!"
    var answer =''

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

function userAnswer(){

    var userResponse = prompt('Enter "Rock", "Paper", or "Scissors"');

    if (userResponse.toLowerCase() == "rock"){
        userResponse= "ROCK!"
        console.log(`Player chooses; ${userResponse}`)
        return playerPick = userResponse;  
    } else if (userResponse.toLowerCase() == "scissors") {
        userResponse = "SCISSORS!"
        console.log(`Player chooses; ${userResponse}`)
        return playerPick = userResponse;  
    } else if (userResponse.toLowerCase() == "paper"){
        userResponse = "PAPER!"
        console.log(`Player chooses; ${userResponse}`)
        return playerPick = userResponse;  
    } else {
        userAnswer();
    }

  
}


function playRound(playerPick,computerPick){

    if (playerPick == "ROCK!" && computerPick == "PAPER!"){
        result = "You lose! Paper beats rock!";
    } else if (playerPick== "ROCK!" && computerPick == "SCISSORS!"){
        result = "You win! Rock beats scissors!";
    } else if (playerPick == "ROCK!" && computerPick == "ROCK!") {
        result ="Tie! Rock ties with rock!";
    }

    if (playerPick == "PAPER!" && computerPick == "PAPER!"){
        result = "Tie! Paper ties paper!";
    } else if (playerPick== "PAPER!" && computerPick == "SCISSORS!"){
        result = "You lose! Paper loses to scissors!";
    } else if (playerPick == "PAPER!" && computerPick == "ROCK!") {
        result = "You win! Paper beats rock!";
    }

    if (playerPick == "SCISSORS!" && computerPick == "PAPER!"){
        result = "You win! Scissors beats paper!";
    } else if (playerPick== "SCISSORS!" && computerPick == "SCISSORS!"){
        result = "Tie! Scissors ties scissors";
    } else if (playerPick == "SCISSORS!" && computerPick == "ROCK!"){
        result = "You lose! Scissors loses to rock!";
    }

    console.log(result);
}


function playGame() {
 
    for (i = 1;; i++) {
        console.log(`Round: ${i}`)
        userAnswer();
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

playGame();
