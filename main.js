class Card {
  constructor({value, suit}) {
    this.value = value;
    this.suit = suit;
  }

  // get description() {
  //   const values = [null, null, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  //   return `${values[this.value]} of ${this.suit}}`;

  }

class Deck {
  constructor(){
    this.cards = [];

    const suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14];
    for(const suit of suits) {
      for(const value of values) {
        this.cards.push(new Card({value, suit}));
      }
    }

    this.shuffle();
  }
shuffle(){
  //const deck = this.deck;
      const {cards} = this;

      let currentIndex = cards.length,
        temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
      }
      return this;
    }
};

const deck = new Deck();

class Player {
constructor({name, hand}) {
  this.name = name;
  this.hand = deck.cards.splice(0, 26);
  }
};

//I have 2 players 2 stacks of 26 cards
const player1 = new Player({name:'Jackson'});
const player2 = new Player({name: 'Preston'});

function playGame() {
  player1card = player1.hand.shift();
  player2card = player2.hand.shift();
  //console.log('player1card', player1card)
  //console.log('player2card', player2card)
}
// plays game once



class Game {
  constructor() {

  }
}











//How do they each pick a card?
// class Game {
//   constructor(){
//
//   }
// };
//if player1card > player2card






//
