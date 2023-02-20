const cards = [{
        name: "Liz Truss",
        image: "https://via.placeholder.com/200",
        category1: 4,
        category2: 8,
        category3: 6,
        category4: 7,
        category5: 3,
    },
    {
        name: "Rishi Sunak",
        image: "https://via.placeholder.com/200",
        category1: 5,
        category2: 7,
        category3: 9,
        category4: 4,
        category5: 2,
    },
    {
        name: "Boris Johnson",
        image: "https://via.placeholder.com/200",
        category1: 8,
        category2: 6,
        category3: 3,
        category4: 5,
        category5: 7,
    },
    {
        name: "David Cameron",
        image: "https://via.placeholder.com/200",
        category1: 9,
        category2: 5,
        category3: 2,
        category4: 8,
        category5: 6,
        category6: 1,
    },

    {
        name: "Gordon Brown",
        image: "https://via.placeholder.com/200",
        category1: 3,
        category2: 9,
        category3: 4,
        category4: 6,
        category5: 5,
    },
    {
        name: "Tony Blair",
        image: "https://via.placeholder.com/200",
        category1: 7,
        category2: 4,
        category3: 8,
        category4: 3,
        category5: 9,
    },
    {
        name: "John Major",
        image: "https://via.placeholder.com/200",
        category1: 7,
        category2: 4,
        category3: 8,
        category4: 3,
        category5: 9,
    },
    {
        name: "Margaret Thatcher",
        image: "https://via.placeholder.com/200",
        category1: 7,
        category2: 4,
        category3: 8,
        category4: 3,
        category5: 9,
    },
    {
        name: "Jim Callaghan",
        image: "https://via.placeholder.com/200",
        category1: 7,
        category2: 4,
        category3: 8,
        category4: 3,
        category5: 9,
    },
    {
        name: "Harold Wilson",
        image: "https://via.placeholder.com/200",
        category1: 7,
        category2: 4,
        category3: 8,
        category4: 3,
        category5: 9,
    },
    {
        name: "Alec Douglas-Home",
        image: "https://via.placeholder.com/200",
        category1: 7,
        category2: 4,
        category3: 8,
        category4: 3,
        category5: 9,
    },
    {
        name: "Harold Macmillan",
        image: "https://via.placeholder.com/200",
        category1: 7,
        category2: 4,
        category3: 8,
        category4: 3,
        category5: 9,
    },
    {
        name: "Anthony Eden",
        image: "https://via.placeholder.com/200",
        category1: 7,
        category2: 4,
        category3: 8,
        category4: 3,
        category5: 9,
    },
    {
        name: "Winston Churchill",
        image: "https://via.placeholder.com/200",
        category1: 7,
        category2: 4,
        category3: 8,
        category4: 3,
        category5: 9,
    },
    {
        name: "Clement Attlee",
        image: "https://via.placeholder.com/200",
        category1: 7,
        category2: 4,
        category3: 8,
        category4: 3,
        category5: 9,
    },
];

// shuffle cards
function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

// function to deal the cards to the player and the computer
function dealCards(cards) {
    const playerHand = [];
    const computerHand = [];
  
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (i % 2 === 0) {
        playerHand.push(card);
      } else {
        computerHand.push(card);
      }
    }
  
    return {
      playerHand,
      computerHand,
    };
  }
  
  //function to start the game
  function startGame() {
    const shuffledCards = shuffleCards(cards);
    const { playerHand, computerHand } = dealCards(shuffledCards);
  
    console.log("Player's Hand", playerHand);
    console.log("Computer's Hand", computerHand);
  }

  window.onload = function () {
    startGame();
  };
  