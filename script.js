
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

// let humanScore;
// let computerScore;

// function playGame()
// {
//     humanScore = 0;
//     computerScore = 0;
//     for(let i = 0 ; i < 5; i++)
//     {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }

//     if(humanScore === computerScore)
//     {
//         console.log("Game Draw!");
//     }
//     else if(humanScore <= computerScore)
//     {
//         console.log("You lost the game!");
//     }
//     else if(humanScore >= computerScore)
//     {
//         console.log("You won the game!");
//     }

//     console.log(`You scored ${humanScore} points\nComputer scored ${computerScore} points`);
// }

// playGame();


const rockBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const btnContainer = document.createElement("div");

const docBody = document.querySelector("body");


btnContainer.appendChild(rockBtn);
btnContainer.appendChild(scissorsBtn);
btnContainer.appendChild(paperBtn);

docBody.appendChild(btnContainer);

btnContainer.classList.toggle("container")
const container = document.querySelector(".container");
container.style.display = "flex";
container.style.justifyContent = "space-between";
container.style.padding = "100px";


rockBtn.textContent = "ROCK";
scissorsBtn.textContent = "SCISSORS";
paperBtn.textContent = "PAPER";

///////// Buttons styles /////////
rockBtn.style.width = "300px";
rockBtn.style.height = "50px";
rockBtn.style.color = "red";
rockBtn.style.fontWeight = "900";
rockBtn.style.fontSize = "30px";

scissorsBtn.style.width = "300px";
scissorsBtn.style.height = "50px";
scissorsBtn.style.color = "blue";
scissorsBtn.style.fontWeight = "900";
scissorsBtn.style.fontSize = "30px";

paperBtn.style.width = "300px";
paperBtn.style.height = "50px";
paperBtn.style.color = "green";
paperBtn.style.fontWeight = "900";
paperBtn.style.fontSize = "30px";
/////////////////////////////////

