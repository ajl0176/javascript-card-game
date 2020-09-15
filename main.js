class Card {
  constructor({value, suit}) {
    this.value = value;
    this.suit = suit;
  }

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
  this.hand = deck.cards.slice(26);
  }
};

const player1 = new Player({name:'Jackson'});
const player2 = new Player({name: 'Preston'});


function playGame() {
let player1card = player1.hand.shift();
let player2card = player2.hand.shift();

};

function compareValue(player1card, player2card){
  if (player1card > player2card){
    player1.hand.push(player1card);
    player1.hand.push(player2card);
  } else if (player1card < player2card){
      player2.hand.push(player2card);
      player2.hand.push(player1card);
  } else {
      let player1WarCard = player1.hand.shift();
      let player2WarCard = player2.hand.shift();
      if (player1card > player2card){
          player1.hand.push(player1card);
          player1.hand.push(player2card);
          player1.hand.push(player1WarCard);
          player1.hand.push(player2WarCard);
      } else if (player1card < player2card){
          player2.hand.push(player2card);
          player2.hand.push(player1card);
          player2.hand.push(player2WarCard);
          player2.hand.push(player1WarCard);
        } else {
          player1.hand.push(player1WarCard);
          player1.hand.push(player1card);
          player2.hand.push(player2card);
          player2.hand.push(player2WarCard);
        }
      }
    };
playGame(){
  for (let compareValue = 0; compareValue < 27; compareValue+++)
} return compareValue;
