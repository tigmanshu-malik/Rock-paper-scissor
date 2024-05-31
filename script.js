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

function getHumanChoice(){

    let choice = prompt("Make your choice :- ")

    return choice.toLowerCase()
}

function playRound(){

    let human = getHumanChoice()
    let computer = getComputerChoice()

    console.log("Computer chose " + computer)

    if(human == "stone" && computer == "paper"){
        console.log("You lose this round")
        ComputerScore++
    }

    else if(human == "stone" && computer == "stone"){
        console.log("tie")
    }

    else if(human == "stone" && computer == "scissor"){
        console.log("You win this round")
        humanScore++
    }

    else if(human == "paper" && computer == "paper"){
        console.log("tie")
    }

    else if(human == "paper" && computer == "stone"){
        console.log("You win this round")
        humanScore++
    }

    else if(human == "paper" && computer == "scissor"){
        console.log("You lose this round")
        ComputerScore++
    }

    else if(human == "scissor" && computer == "paper"){
        console.log("You win this round")
        humanScore++
    }

    else if(human == "scissor" && computer == "stone"){
        console.log("You lose this round")
        ComputerScore++
    }

    else if(human == "scissor" && computer == "scissor"){
        console.log("tie")
    }

    console.log(`Human: ${humanScore} Computer: ${ComputerScore} \n`)
}

for(let i = 0; i < 5; i++)
    playRound()

if(humanScore > ComputerScore)
    alert("You win !!!")

else if(humanScore == ComputerScore)
    alert("Tie")

else    
    alert("sed")
