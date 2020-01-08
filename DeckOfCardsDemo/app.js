// function makeDeck() {
// 	const deck = [];
// 	const suites = [ 'Hearts', 'Diamonds', 'Clubs', 'Spades' ];
// 	const values = '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A';

// 	for (let value of values.split(',')) {
// 		for (let suite of suites) {
// 			deck.push({
// 				value,
// 				suite
// 			});
// 		}
// 	}
// 	return deck;
// }

// function drawCard(deck) {
// 	return deck.pop();
// }

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);

// const myDeck = {
// 	deck: [],
// 	drawnCards: [],
// 	suites: [ 'Hearts', 'Diamonds', 'Clubs', 'Spades' ],
// 	values: '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A',
// 	initializeDeck() {
// 		const { suites, values, deck } = this;
// 		for (let value of values.split(',')) {
// 			for (let suite of suites) {
// 				deck.push({
// 					value,
// 					suite
// 				});
// 			}
// 		}
// 		// return deck;
// 	},
// 	drawCard() {
// 		const card = this.deck.pop();
// 		this.drawnCards.push(card);
// 		return card;
// 	},
// 	drawMultiple(numCards) {
// 		const cards = [];
// 		for (let i = 0; i < numCards; i++) {
// 			cards.push(this.drawCard());
// 		}
// 		return cards;
// 	},
// 	shuffle() {
// 		const { deck } = this;
// 		//loop over array backwards
// 		for (let i = arr.length - 1; i > 0; i--) {
// 			//pick random index before current elements
// 			let j = Math.floor(Math.random() * (i + 1));
// 			//swap
// 			[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
// 		}
// 	}
// };

const makeDeck = () => {
	return {
		deck: [],
		drawnCards: [],
		suites: [ 'Hearts', 'Diamonds', 'Clubs', 'Spades' ],
		values: '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A',
		initializeDeck() {
			const { suites, values, deck } = this;
			for (let value of values.split(',')) {
				for (let suite of suites) {
					deck.push({
						value,
						suite
					});
				}
			}
			// return deck;
		},
		drawCard() {
			const card = this.deck.pop();
			this.drawnCards.push(card);
			return card;
		},
		drawMultiple(numCards) {
			const cards = [];
			for (let i = 0; i < numCards; i++) {
				cards.push(this.drawCard());
			}
			return cards;
		},
		shuffle() {
			const { deck } = this;
			//loop over array backwards
			for (let i = arr.length - 1; i > 0; i--) {
				//pick random index before current elements
				let j = Math.floor(Math.random() * (i + 1));
				//swap
				[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
			}
		}
	};
};

const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(3);
const h3 = myDeck.drawMultiple(4);
