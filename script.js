// function for deciding or labelling the items
function getComputerChoice() {
  // pick one random number from 1 to 3
  let randomNumber = Math.floor(Math.random() * 3);
  // pick wether rock, paper, scissors based on the random number before
  switch(randomNumber) {
    case 0:
      choosed = "Rock";
      break;
    case 1:
      choosed = "Paper";
      break;
    case 2:
      choosed = "Scissors";
      break;
    default:
      choosed = "Computer doesn't choose anything";
  }
  // return the value
  return choosed;
}


// core function of rock paper scissors game.
function playRound (playerSelection, computerSelection) {
  // local variable declaration
  let playerWin = 0;
  let computerWin = 0;
  // if else for deciding wether who's got the point
  if (playerSelection == "Rock" && computerSelection == "Rock") {
    playerWin = playerWin + 0;
    computerWin = computerWin + 0;
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerWin = computerWin + 1;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerWin = playerWin + 1;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerWin = playerWin + 1;
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    playerWin = playerWin + 0;
    computerWin = computerWin + 0;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    computerWin = computerWin + 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    computerWin = computerWin + 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerWin = playerWin + 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    playerWin = playerWin + 0;
    computerWin = computerWin + 0;
  }
  // return the playerWin and computerWin to one variable so we can use later
  return total = [playerWin, computerWin];
}


// function for replaying single round to 5 round game. Whoever point is higher than the other, will win.
function game(playerSelection, computerSelection) {
  // local declaration variable
  let playerWinTotal = 0;
  let computerWinTotal = 0;
  // looping 5 times
  for (i = 1; i <= 5; i++) {
    // use input from user with prompt function
    playerSelection = prompt("Rock/Paper/Scissors? = ");
    // convert any words let it be all uppercase or all lowercase into 1 single rules.
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    // repeat computer choice function
    computerSelection = getComputerChoice();
    // print out both choices based on single iteration.
    console.log(`My choice on the ${i} iteration is ${playerSelection}`);
    console.log(`Computer choice on the ${i} iteration is ${computerSelection}`);
    /* Call the playRound function inside of this one to play a 5 
    round game that keeps score and reports a winner or loser at the end. */
    playRound(playerSelection, computerSelection);
    // add single round point to total point
    playerWinTotal = playerWinTotal + total[0];
    computerWinTotal = computerWinTotal + total[1];
    // print out both score based on single iteration.
    console.log(`Player Score = ${playerWinTotal}`);
    console.log(`Computer Score = ${computerWinTotal}`);
    // just a line, for.. you know, better readable output.
    console.log("-------------------------------------------------------")
  }
  /* if looping reach 5, and the total variable added, we can start 
  deciding who's the winner and the loser. */
  if (playerWinTotal > computerWinTotal) {
    console.log("You Win! Congratulations!");
    console.log(`Your total point is ${playerWinTotal}`);
    console.log(`Computer total point is ${computerWinTotal}`);
  } else if (playerWinTotal < computerWinTotal) {
    console.log("You Lose! Shame On you bruh");
    console.log(`Your total point is ${playerWinTotal}`);
    console.log(`Computer total point is ${computerWinTotal}`);
  } else {
    console.log("It's a Tie! What a great match!");
    console.log(`Your total point is ${playerWinTotal}`);
    console.log(`Computer total point is ${computerWinTotal}`);
  }
}


// Global Declaration
let computerSelection;
let playerSelection;g

// call the function to run
game(playerSelection, computerSelection);