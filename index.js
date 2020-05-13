const roll = document.getElementById("roll")
const roll2 = document.getElementById("roll2")
const newGame = document.getElementById("new-game")
let player = document.getElementById("player");
let score = document.getElementById("score");
let image = document.getElementById("diceImage");
let player2 = document.getElementById("player2");
let score2 = document.getElementById("score2");



image.style.visibility = ('hidden')

newGame.addEventListener("click", () => {
    image.style.visibility = ('hidden')
    score.textContent = 0
    totalScore = 0
    score2.textContent = 0
    totalScore2 = 0
})
    
let totalScore = 0

roll.onclick = () => {
    player.textContent = "Player 1"
    score.textContent = 0

    let numberOnDice = Math.ceil((Math.random() * 5) + 1)
    console.log(`${numberOnDice}`)

    image.style.visibility = ('visible')

    if (numberOnDice === 1) {
        score.textContent = 1
        image.src = "dice1.png"
    } else if (numberOnDice === 2) {
        score.textContent = 2
        image.src = "dice2.png"
    } else if (numberOnDice === 3) {
        score.textContent = 3
        image.src = "dice3.png"
    } else if (numberOnDice === 4) {
        score.textContent = 4
        image.src = "dice4.png"
    } else if (numberOnDice === 5) {
        score.textContent = 5
        image.src = "dice5.png"
    } else if (numberOnDice === 6) {
        score.textContent = 6
        image.src = "dice6.png"
    }

    totalScore = totalScore + numberOnDice

    score.textContent = totalScore

    if (totalScore >= 30) {
    player.textContent = ('Winner!')
    player2.textContent = ('Loser!')
    totalScore = 0
    }
}

let totalScore2 = 0

roll2.onclick = () => {
    player2.textContent = "Player 2"
    score2.textContent = 0


    let numberOnDice2 = Math.ceil((Math.random() * 5) + 1)
    console.log(`${numberOnDice2}`)

    image.style.visibility = ('visible')

    if (numberOnDice2 === 1) {
        score2.textContent = 1
        image.src = "dice1.png"
    } else if (numberOnDice2 === 2) {
        score2.textContent = 2
        image.src = "dice2.png"
    } else if (numberOnDice2 === 3) {
        score2.textContent = 3
        image.src = "dice3.png"
    } else if (numberOnDice2 === 4) {
        score2.textContent = 4
        image.src = "dice4.png"
    } else if (numberOnDice2 === 5) {
        score2.textContent = 5
        image.src = "dice5.png"
    } else if (numberOnDice2 === 6) {
        score2.textContent = 6
        image.src = "dice6.png"
    }

    totalScore2 = totalScore2 + numberOnDice2

    score2.textContent = totalScore2

    if (totalScore2 >= 30) {
    player2.textContent = ('Winner!')
    player.textContent = ('Loser!')
    totalScore2 = 0
    }
    
}

