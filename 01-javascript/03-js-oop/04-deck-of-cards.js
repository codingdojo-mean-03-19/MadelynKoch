

const suits = {Hearts: "♥", Diamonds: "♦", Clubs: "♣", Spades: "♠"}
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

class Card {

	constructor(suit, value){

		if(!Object.keys(suits).includes(suit)){
			throw new Error("Not a valid suit")
		}

		if(!values.includes(value)) {
			throw new Error("Not a valid value")
		}

		this.suit = suit;
		this.value = value;
		this.id = values.indexOf(this.value) + 1
	}


	show(){
		console.log(`${suits[this.suit]}${this.value}, id = ${this.id}`)
	}
}

const card1 = new Card("Hearts", "J");
card1.show();

class Deck {
	constructor() {
		this.reset();
	}

	orderedDeck() {
		let deck = []

		for(const suit of Object.keys(suits)) {
			for(const value of values) {
				const card = new Card(suit, value);
				deck.push(card)
			}
		}

		return deck;
	}

	shuffle() {
		var currentIndex = this.deck.length, temporaryValue, randomIndex;

		while(currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = this.deck[currentIndex];
			this.deck[currentIndex] = this.deck[randomIndex];
			this.deck[randomIndex] = temporaryValue;
		}

		return this.deck;
	}

	reset() {
		this.deck = this.orderedDeck();
	}

	deal() {
			var index = Math.floor(Math.random() * (Math.floor(this.deck.length) - Math.ceil(0))) + 1; 
			console.log(index)
			var cards = this.deck;
			var dealtCard = cards[index]
			console.log(dealtCard);
			cards.splice(index, 1)
			return dealtCard;
	}
}

class Player {
	constructor(name) {
		this.name = name
		this.hand = []
	}

	dealTo(card) {
		this.hand.push(card);
	}

	discard(card) {
		return this.hand.pop();
	}
}

var blueDeck = new Deck()

blueDeck.reset()

blueDeck.shuffle()

blueDeck.deal()

var player1 = new Player("Danny")

player1.dealTo(blueDeck.deal())

