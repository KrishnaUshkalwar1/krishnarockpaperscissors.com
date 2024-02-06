let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreEl = document.querySelector("#userScore");
const comScoreEl = document.querySelector("#comScore");


const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    msg.textContent = "It's Draw!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.textContent = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

        userScore++;
        userScoreEl.textContent = userScore;
    }
    else{
        msg.textContent = `You Lose! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";

        comScore++;
        comScoreEl.textContent = comScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    }else {
        let userWin = true;

        if (userChoice === "rock"){
            //paper, scissors 
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock, scissors 
            userWin = compChoice === "scissors" ? false: true; 
        }
        else {
            //rock, paper 
            userWin = compChoice === "rock" ? false: true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>
 choice.addEventListener("click", () => {
   let userChoice = choice.getAttribute("id");
   playGame(userChoice);
   //play game 
}))

