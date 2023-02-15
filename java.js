

/* Function to make computer choose rock paper or scissors */

/* TODO: Make the code a little cleaner; I don't think you had to type all that out */

/* TODO: Add point counter and 5 rounds */

/* TODO: Make a start again button */



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
    
    return answer;

}


function userAnswer(){

    var userResponse = prompt('Enter "Rock", "Paper", or "Scissors"');



    if (userResponse.toLowerCase() == "rock"){
        userResponse= "ROCK!"
        return userResponse;
    } else if (userResponse.toLowerCase() == "scissors") {
        userResponse = "SCISSORS!"
        return userResponse;
    } else if (userResponse.toLowerCase() == "paper"){
        userResponse = "PAPER!"
        return userResponse;
    }
    
}

function playRound(playerSelection,computerSelection){


    if (playerSelection == "ROCK!" && computerSelection == "PAPER!"){
        return "You lose! Paper beats rock!";
    } else if (playerSelection== "ROCK!" && computerSelection == "SCISSORS!"){
        return "You win! Rock beats scissors!";
    } else if (playerSelection == "ROCK!" && computerSelection == "ROCK!") {
        return "Tie! Rock ties with rock!";
    }

    if (playerSelection == "PAPER!" && computerSelection == "PAPER!"){
        return "Tie! Paper ties paper!";
    } else if (playerSelection== "PAPER!" && computerSelection == "SCISSORS!"){
        return "You Win! Paper beats scissors!";
    } else if (playerSelection == "PAPER!" && computerSelection == "ROCK!") {
        return "You Lose! Paper loses to rock!";
    }

    if (playerSelection == "SCISSORS!" && computerSelection == "PAPER!"){
        return "You Win! Scissors beats paper!";
    } else if (playerSelection== "SCISSORS!" && computerSelection == "SCISSORS!"){
        return "Tie! Scissors ties scissors";
    } else if (playerSelection == "SCISSORS!" && computerSelection == "ROCK!"){
        return "You Lose! Scissors loses to rock!";
    }

}


console.log(playRound(userAnswer(),getComputerChoice()));

