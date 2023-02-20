// Define the cards
const cards = [
    {
      name: "Rishi Sunak",
      image: "https://via.placeholder.com/300",
      Electability: 5,
      Economics: 3,
      Principles: 2,
      "Foreign-policy": 6
    },
    {
      name: "Liz Truss",
      image: "https://via.placeholder.com/300",
      Electability: 5,
      Economics: 1,
      Principles: 1,
      "Foreign-policy": 7
    },
    {
      name: "Boris Johnson",
      image: "https://via.placeholder.com/300",
      Electability: 8,
      Economics: 2,
      Principles: 0,
      "Foreign-policy": 6
    },
    {
      name: "David Cameron",
      image: "https://via.placeholder.com/300",
      Electability: 7,
      Economics: 4,
      Principles: 4,
      "Foreign-policy": 6
    },
    {
      name: "Gordon Brown",
      image: "https://via.placeholder.com/300",
      Electability: 3,
      Economics: 9,
      Principles: 8,
      "Foreign-policy": 5
    },
    {
      name: "Tony Blair",
      image: "https://via.placeholder.com/300",
      Electability: 10,
      Economics: 10,
      Principles: 4,
      "Foreign-policy": 4
    }
  ];  
  
  // Define the state
  let playerDeck, computerDeck, currentPlayerCard, currentComputerCard, currentCategory;
  
  // Define the DOM elements
  const playerCardElem = document.querySelector(".player-card");
  const playerImageElem = playerCardElem.querySelector(".card-image");
  const playerStatsElem = playerCardElem.querySelector(".card-stats");
  const computerCardElem = document.querySelector(".computer-card");
  const computerImageElem = computerCardElem.querySelector(".card-image");
  const computerStatsElem = computerCardElem.querySelector(".card-stats");
  const resultElem = document.querySelector(".result");
  const startButtonElem = document.querySelector("#start-button");
  const heightButtonElem = document.querySelector("#height-button");
  const weightButtonElem = document.querySelector("#weight-button");
  const strengthButtonElem = document.querySelector("#strength-button");
  const agilityButtonElem = document.querySelector("#agility-button");
  
  // Define the game functions
  function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];

      const temp = deck[i];
deck[i] = deck[j];
deck[j] = temp;
}
}

function dealCards() {
// Divide the cards between the player and the computer
playerDeck = cards.slice(0, 3);
computerDeck = cards.slice(3, 6);
}

function startGame() {
// Shuffle the cards and deal them to the player and the computer
shuffleDeck(cards);
dealCards();

// Set the initial state of the game
currentPlayerCard = playerDeck[0];
currentComputerCard = computerDeck[0];
currentCategory = "height";

// Update the UI with the initial state of the game
playerImageElem.setAttribute("src", currentPlayerCard.image);
computerImageElem.setAttribute("src", currentComputerCard.image);

updateCardStats(playerStatsElem, currentPlayerCard);
updateCardStats(computerStatsElem, currentComputerCard);

resultElem.textContent = "";
startButtonElem.style.display = "none";
heightButtonElem.style.display = "inline-block";
weightButtonElem.style.display = "inline-block";
strengthButtonElem.style.display = "inline-block";
agilityButtonElem.style.display = "inline-block";
}

function updateCardStats(statsElem, card) {
statsElem.querySelector(".stat-height .stat-value").textContent = card.height;
statsElem.querySelector(".stat-weight .stat-value").textContent = card.weight;
statsElem.querySelector(".stat-strength .stat-value").textContent = card.strength;
statsElem.querySelector(".stat-agility .stat-value").textContent = card.agility;
}

function chooseCategory(category) {
// Update the current category and display it on the screen
currentCategory = category;
resultElem.textContent = "Selected category: " + category;

// Compare the chosen category between the player and the computer
if (currentPlayerCard[currentCategory] > currentComputerCard[currentCategory]) {
resultElem.textContent += "\nYou win this round!";
playerDeck.push(currentComputerCard);
playerDeck.push(currentPlayerCard);
} else if (currentPlayerCard[currentCategory] < currentComputerCard[currentCategory]) {
resultElem.textContent += "\nComputer wins this round!";
computerDeck.push(currentPlayerCard);
computerDeck.push(currentComputerCard);
} else {
resultElem.textContent += "\nIt's a tie!";
playerDeck.push(currentPlayerCard);
computerDeck.push(currentComputerCard);
}

// Remove the cards that were played from the player and computer decks
playerDeck.splice(0, 1);
computerDeck.splice(0, 1);

// Check if the game is over
if (playerDeck.length === 0) {
resultElem.textContent = "Congratulations, you won the game!";
startButtonElem.style.display = "inline-block";
heightButtonElem.style.display = "none";
weightButtonElem.style.display = "none";
strengthButtonElem.style.display = "none";
agilityButtonElem.style.display = "none";
} else if (computerDeck.length === 0) {
resultElem.textContent = "Sorry, you lost the game!";
startButtonElem.style.display = "inline-block";
heightButtonElem.style.display = "none";
weightButtonElem.style.display = "none";
strengthButtonElem.style.display = "none";
agilityButtonElem.style.display = "none";
} else {
// Update the state of the game with the next cards
currentPlayerCard = playerDeck[0];
currentComputerCard = computerDeck[0];
// Update the UI with the next cards
playerImageElem.setAttribute("src", currentPlayerCard.image);
computerImageElem.setAttribute("src", currentComputerCard.image);

updateCardStats(playerStatsElem, currentPlayerCard);
updateCardStats(computerStatsElem, currentComputerCard);
}
}

// Select elements from the DOM
const startButtonElem = document.getElementById("start-button");
const heightButtonElem = document.getElementById("electability-button");
const weightButtonElem = document.getElementById("economics-button");
const strengthButtonElem = document.getElementById("principles-button");
const agilityButtonElem = document.getElementById("foreign-policy-button");
const resultElem = document.getElementById("result");
const playerImageElem = document.getElementById("player-image");
const computerImageElem = document.getElementById("computer-image");
const playerStatsElem = document.getElementById("player-stats");
const computerStatsElem = document.getElementById("computer-stats");

// Add event listeners to the buttons
startButtonElem.addEventListener("click", startGame);
heightButtonElem.addEventListener("click", function () {
chooseCategory("height");
});
weightButtonElem.addEventListener("click", function () {
chooseCategory("weight");
});
strengthButtonElem.addEventListener("click", function () {
chooseCategory("strength");
});
agilityButtonElem.addEventListener("click", function () {
chooseCategory("agility");
});

// Start the game
startGame();