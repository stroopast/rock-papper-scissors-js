
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

    return computerChoice;
}
function getHumanChoice()
{
    let userChoice = prompt("Choose between: rock, paper, scissors");
    console.log(userChoice);
    return userChoice;
}

console.log(getComputerChoice());
console.log(getComputerChoice());
getHumanChoice();