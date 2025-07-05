let userScore = 0; 
let compScore = 0;

const messagePara = document.querySelector(".msg")
const compElScore = document.querySelector("#comp-score")
const userElScore = document.querySelector("#user-score")



const genCompChoice = ()=>{
    const game = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return game[randomIdx];
}

const drawGame = (userChoice)=>{
    messagePara.innerText = `Game was draw! both chose ${userChoice}`
    messagePara.style.backgroundColor = "black"

}
const showWinner = (userWin,userChoice,CompChoice)=>{
   if(userWin){
    messagePara.innerText =`You Won!, Your ${userChoice} beats ${CompChoice}`;
    messagePara.style.backgroundColor = "green"
    userScore++
    userElScore.innerText = userScore;

   }
   else{
    messagePara.innerText =`You lose!, ${CompChoice} beats Your ${userChoice}`;
    messagePara.style.backgroundColor = "red"
    compScore++
    compElScore.innerText = compScore

   }
}

const playGame = (userChoice) =>{
    const CompChoice = genCompChoice();
    if (CompChoice===userChoice){
        drawGame(userChoice);
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = CompChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = CompChoice === "scissors" ? false :true;
        }
        else{
            userWin = CompChoice === "rock"? false : true;
        }
        showWinner(userWin,CompChoice,userChoice)

    }
}


const choices = document.querySelectorAll(".choice")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})