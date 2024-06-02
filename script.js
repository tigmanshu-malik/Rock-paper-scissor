let humanScore = ComputerScore = 0

function getComputerChoice(){

    let choice = Math.random()

    if(choice <= 0.33)
        return "stone"

    else if(choice > 0.33 && choice <= 0.66)
        return "scissor"

    else    
        return "paper"
}

function playRound(human){

    let computer = getComputerChoice()

    let container = document.querySelector("#screen")

    if(human == "stone" && computer == "paper"){
        ComputerScore++
    }

    else if(human == "stone" && computer == "stone"){

    }

    else if(human == "stone" && computer == "scissor"){
        humanScore++
    }

    else if(human == "paper" && computer == "paper"){

    }

    else if(human == "paper" && computer == "stone"){
        humanScore++
    }

    else if(human == "paper" && computer == "scissor"){
        ComputerScore++
    }

    else if(human == "scissor" && computer == "paper"){
        humanScore++
    }

    else if(human == "scissor" && computer == "stone"){
        ComputerScore++
    }

    else if(human == "scissor" && computer == "scissor"){
    }
    
    container.innerHTML = `<p> Computer chose ${computer}</p>`

    console.log(`Human: ${humanScore} Computer: ${ComputerScore} \n`)
}

for(let i = 0; i < 5; i++)
    playRound()

