const wrapper = document.getElementsByClassName('wrapper')
const rollDice = document.getElementById('roll')
const playerScore = document.getElementsByClassName('playerScore')

rollDice.onclick = () => {
    let numberOnDice = Math.ceil((Math.random() * 5) + 1)
    console.log(`${numberOnDice}`)
}