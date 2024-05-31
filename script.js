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

console.log(getHumanChoice())
