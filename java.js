/* TODO: Make the code a little cleaner; I don't think you had to type all that out */

/* TODO: Add point counter and 5 rounds */

/* TODO: Make a start again button */

var playerScore = 0
var computerScore = 0
var round = 0

var computerPick = ''
var playerPick = ''
var result = ''

var winner = Math.max(computerScore, playerScore)


function getComputerChoice() {

    var rock = "ROCK!"
    var paper = "PAPER!"
    var scissors = "SCISSORS!"
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
    } else if (userResponse.toLowerCase() == "scissors") {
        userResponse = "SCISSORS!"
    } else if (userResponse.toLowerCase() == "paper"){
        userResponse = "PAPER!"
    }

    console.log(`Player chooses; ${userResponse}`)
    return playerPick = userResponse;    
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
        result = "You Win! Paper beats scissors!";
    } else if (playerPick == "PAPER!" && computerPick == "ROCK!") {
        result = "You Lose! Paper loses to rock!";
    }

    if (playerPick == "SCISSORS!" && computerPick == "PAPER!"){
        result = "You Win! Scissors beats paper!";
    } else if (playerPick== "SCISSORS!" && computerPick == "SCISSORS!"){
        result = "Tie! Scissors ties scissors";
    } else if (playerPick == "SCISSORS!" && computerPick == "ROCK!"){
        result = "You Lose! Scissors loses to rock!";
    }

    console.log(result);
}


function playGame() {
    for (i = 0; i < 5; i++) {
        getComputerChoice();
        userAnswer();
        playRound(playerPick, computerPick);
        console.log(i)

    }

}




playGame();









