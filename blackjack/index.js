// let firstCard = getRandomCard()
// let secondCard =  getRandomCard()
// let cards = [firstCard, secondCard]
let cards = []
// let sum = firstCard + secondCard
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name : "Per",
    chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    // return Math.random() * 13 // 0.000 ~ 12.999
    // return Math.floor(Math.random() * 13) // 0 ~ 12
    let randomNumber = Math.floor(Math.random() * 13) + 1 // 1 ~ 13

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    console.log(cards)

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: "+ sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    // console.log(message)
    messageEl.textContent = message
}

function newCard() {

    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }


}

