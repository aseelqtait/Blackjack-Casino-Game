// Array to hold the card values
let cards = [];

// Variables to store DOM elements
const messageEl = document.getElementById("message_el");
const cardsEl = document.getElementById("cards_el");
const sumEl = document.getElementById("sum_el");

// Function to start the game
function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  renderGame();
}

// Function to get a random card value
function getRandomCard() {
  // Card values from 1 to 11
  return Math.floor(Math.random() * 11) + 1;
}

// Function to render the game state
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  let sum = calculateSum();
  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    messageEl.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    messageEl.textContent = "You've got Blackjack!";
  } else {
    messageEl.textContent = "You're out of the game!";
  }
}

// Function to calculate the sum of the card values
function calculateSum() {
  let sum = 0;
  for (let i = 0; i < cards.length; i++) {
    sum += cards[i];
  }
  return sum;
}

// Function to add a new card to the game
function newCard() {
  if (calculateSum() < 21) {
    let card = getRandomCard();
    cards.push(card);
    renderGame();
  }
}
