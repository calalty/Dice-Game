const rollDice = document.getElementById('roll')


rollDice.onclick = () => {
    let numberOnDice = (Math.ceil((Math.random() * 5) + 1))
    console.log(`you rolled a ${numberOnDice}`)
}