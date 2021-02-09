const roll = document.getElementById("roll")
const roll2 = document.getElementById("roll2")
const newGame = document.getElementById("new-game")
let player = document.getElementById("player")
let score = document.getElementById("score")
let image = document.getElementById("dice-image")
let player2 = document.getElementById("player2")
let score2 = document.getElementById("score2")
let gameRule = document.getElementById("game-rule")

image.style.visibility = ('hidden') // hides dice at the start
gameRule.innerHTML = "FIRST TO 21 WINS"
player.innerHTML = "Player 1"
player2.innerHTML = "Player 2"
score.innerHTML = 0
 score2.innerHTML = 0
// New Game Button

newGame.addEventListener("click", () => {
    image.style.visibility = ('hidden')
    score.innerHTML = 0
    totalScore = 0
    score2.innerHTML = 0
    totalScore2 = 0
    player.innerHTML = "Player 1"
    player2.innerHTML = "Player 2"
    gameRule.innerHTML = "FIRST TO 21 WINS"
})

// Player 1 Button
    
let totalScore = 0

roll.onclick = () => {
    player.innerHTML = "Player 1"
    score.innerHTML = 0
    gameRule.innerHTML = "FIRST TO 21 WINS"

    let numberOnDice = Math.ceil(Math.random(1)* 6)
    console.log(`${numberOnDice}`)

    image.style.visibility = ('visible')

    for (let num = 0; num < numbers.length; num++) {

        if (numberOnDice === numbers[num]) {
            score.innerHTML = numbers[num]
            image.src = `dice${numbers[num]}.png`
        }
    }

    if (totalScore <= 30) {
        player2.innerHTML = ('Player 2')
        player.innerHTML = ('Player 1')
        }

    totalScore = totalScore + numberOnDice

    score.innerHTML = totalScore

    if (totalScore >= 21) {
    player.innerHTML = ('Winner!')
    player2.innerHTML = ('Loser!')
    gameRule.innerHTML = ('PLAYER 1 WINS')
    totalScore = 0
    totalScore2 = 0
    }
}


// Player 2 Button

let totalScore2 = 0

roll2.onclick = () => {
    player2.innerHTML = "Player 1"
    score2.innerHTML = 0
    gameRule.innerHTML = "FIRST TO 21 WINS"

    let numberOnDice2 = Math.ceil(Math.random(1)* 6)
    console.log(`${numberOnDice2}`)

    image.style.visibility = ('visible')

    for (let num = 0; num < numbers.length; num++) {

        if (numberOnDice2 === numbers[num]) {
            score2.innerHTML = numbers[num]
            image.src = `dice${numbers[num]}.png`
        }
    }
 
    if (totalScore2 <= 30) {
        player2.innerHTML = ('Player 2')
        player.innerHTML = ('Player 1')
        }

    totalScore2 = totalScore2 + numberOnDice2

    score2.innerHTML = totalScore2

    if (totalScore2 >= 21) {
    player2.innerHTML = ('Winner!')
    player.innerHTML = ('Loser!')
    gameRule.innerHTML = ('PLAYER 2 WINS')
    totalScore2 = 0
    totalScore = 0
    }
}

