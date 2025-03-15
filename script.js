
function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    switch(randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            break;
    }
    console.log(`Computer chooses: ${computerChoice}`);
    return computerChoice;
}
function getHumanChoice()
{
    let userChoice = prompt("Choose between: rock, paper, scissors");
    console.log(`You choose: ${userChoice}`);
    return userChoice.toLowerCase();
}

function playRound(humanchoice, computerChoice)
{
    if(humanchoice === computerChoice)
    {
        console.log("Even round!");
    }
    else if(humanchoice == "paper")
    {
        switch(computerChoice) {
            case "scissors":
                console.log(`You lose! ${computerChoice} beats ${humanchoice}`);
                computerScore++;
                break;
            case "rock":
                console.log(`You won! ${humanchoice} beats ${computerChoice}`);
                humanScore++;
                break;
            default:
                break;    
        }
    }
    else if(humanchoice == "scissors")
    {
        switch(computerChoice) {
            case "rock":
                console.log(`You lose! ${computerChoice} beats ${humanchoice}`);
                computerScore++;
                break;
            case "paper":
                console.log(`You won! ${humanchoice} beats ${computerChoice}`);
                humanScore++;
                break;
            default:
                break;    
        }
    }
    else if(humanchoice == "rock")
    {
        switch(computerChoice) {
            case "paper":
                console.log(`You lose! ${computerChoice} beats ${humanchoice}`);
                computerScore++;
                break;
            case "scissors":
                console.log(`You won! ${humanchoice} beats ${computerChoice}`);
                humanScore++;
                break;
            default:
                break;    
        }
    }
}

let humanScore;
let computerScore;

function playGame()
{
    humanScore = 0;
    computerScore = 0;
    for(let i = 0 ; i < 5; i++)
    {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore === computerScore)
    {
        console.log("Game Draw!");
    }
    else if(humanScore <= computerScore)
    {
        console.log("You lost the game!");
    }
    else if(humanScore >= computerScore)
    {
        console.log("You won the game!");
    }

    console.log(`You scored ${humanScore} points\nComputer scored ${computerScore} points`);
}

playGame();