
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

function playRound(humanchoice, computerChoice)
{
    if(humanchoice === computerChoice)
    {
        textStatus.textContent = `Even round!`;
    }
    else if(humanchoice == "paper")
    {
        switch(computerChoice) {
            case "scissors":
                textStatus.textContent = `You lose! ${computerChoice} beats ${humanchoice}`;
                computerScore++;
                break;
            case "rock":
                textStatus.textContent = `You won! ${humanchoice} beats ${computerChoice}`;
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
                textStatus.textContent = `You lose! ${computerChoice} beats ${humanchoice}`;
                computerScore++;
                break;
            case "paper":
                textStatus.textContent = `You won! ${humanchoice} beats ${computerChoice}`;
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
                textStatus.textContent = `You lose! ${computerChoice} beats ${humanchoice}`;
                computerScore++;
                break;
            case "scissors":
                textStatus.textContent = `You won! ${humanchoice} beats ${computerChoice}`;
                humanScore++;
                break;
            default:
                break;    
        }
    }
}

function gameEnd()
{
    const winnerText = document.createElement("p");
    const resetBtn = document.createElement("button");
    displayDiv.appendChild(winnerText);
    displayDiv.appendChild(resetBtn);
    resetBtn.style.height = "50px";
    resetBtn.style.width = "250px";
    resetBtn.textContent = "Reset Game";
    if(humanScore > computerScore)
    {
        winnerText.textContent = "You won!";
    }
    else if(computerScore > humanScore)
    {
        winnerText.textContent = "Computer won!";
    }
    else
    {
        winnerText.textContent = "Draw!";
    }
    resetBtn.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        isPressedLastRound = false;
        scoreStauts.textContent = "";
        textStatus.textContent = "";
        displayDiv.removeChild(resetBtn);
        displayDiv.removeChild(winnerText);
    })
}

function isGameEnded()
{
    if(humanScore === 5 || computerScore === 5)
    {
        return true;
    }
    return false;
}

let humanScore = 0;
let computerScore = 0;
let isPressedLastRound = false;
// let resetBtn;


const rockBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const btnContainer = document.createElement("div");
const displayDiv = document.createElement("div");
const scoreStauts = document.createElement("p");
const textStatus = document.createElement("p");

const docBody = document.querySelector("body");


btnContainer.appendChild(rockBtn);
btnContainer.appendChild(scissorsBtn);
btnContainer.appendChild(paperBtn);

displayDiv.appendChild(textStatus);
displayDiv.appendChild(scoreStauts);

docBody.appendChild(btnContainer);
docBody.appendChild(displayDiv);

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


///////// display score /////////

displayDiv.style.display = "flex";
displayDiv.style.flexDirection = "column";
displayDiv.style.alignItems = "center";
textStatus.style.fontSize = "20px";
scoreStauts.style.fontSize = "20px";
textStatus.style.textAlign = "center";
scoreStauts.style.textAlign = "center";

/////////////////////////////////

rockBtn.addEventListener("click", () => {
    if(!isGameEnded())
    {
        let computerSelection = getComputerChoice();
        playRound("rock", computerSelection);
        scoreStauts.textContent = `Your score: ${humanScore}           Computer score: ${computerScore}`;
    }
    if(isGameEnded() && !isPressedLastRound)
    {
        gameEnd();
        isPressedLastRound = true;
    }
})

scissorsBtn.addEventListener("click", () => {
    
    if(!isGameEnded())
    {
        let computerSelection = getComputerChoice();
        playRound("scissors", computerSelection);
        scoreStauts.textContent = `Your score: ${humanScore}           Computer score: ${computerScore}`;
    }
    if(isGameEnded() && !isPressedLastRound)
    {
        gameEnd();
        isPressedLastRound = true;
    }
})

paperBtn.addEventListener("click", () => {
    if(!isGameEnded())
    {
        let computerSelection = getComputerChoice();
        playRound("paper", computerSelection);
        scoreStauts.textContent = `Your score: ${humanScore}           Computer score: ${computerScore}`;
    }
    if(isGameEnded() && !isPressedLastRound)
    {
        gameEnd();
        isPressedLastRound = true;
    }
})

