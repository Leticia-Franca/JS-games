// To create the 12 cards, we'll use an array of objects
// We'll need two of each, since it's a matching game
const cardArray = [
	{
		name: 'fries',
		img: './images/fries.png',
	},
	{
		name: 'cheeseburger',
		img: './images/cheeseburger.png',
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png',
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png',
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png',
	},
	{
		name: 'pizza',
		img: 'images/pizza.png',
	},
	{
		name: 'fries',
		img: './images/fries.png',
	},
	{
		name: 'cheeseburger',
		img: './images/cheeseburger.png',
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png',
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png',
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png',
	},
	{
		name: 'pizza',
		img: 'images/pizza.png',
	}
]

const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
// we want to know how many we matched..
const cardsWon = [];
const resultDisplay = document.querySelector('#result');

// We need to get them sorted randomly
// this is a trick/shortcut to sort randomly --> search about this line of code later
cardArray.sort(() => 0.5 - Math.random())

/* Function to create the Board
 * It will iterate each element of the array, create
 * an img and append it to the div 'grid' of the html
*/
function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement('img');
		card.setAttribute('src', 'images/blank.png');
		card.setAttribute('data-id', i);
		gridDisplay.append(card); //we can use append or appendChild as well
		card.addEventListener('click', flipCard); //we pass the flipCard function as a CALLBACK (without parenthesys)
	}
}

createBoard();


/*
 * If the player clicked on 2 cards, call this function
 * to check if there is a match between the 2 in the cardsChosen array
*/
function checkMatch() {
	const cards = document.querySelectorAll('img');
	const optionOneId = cardsChosenIds[0];
	const optionTwoId = cardsChosenIds[1];

	console.log('check for a match!');
	if (optionOneId == optionTwoId) {
		cards[optionOneId].setAttribute('src', 'images/blank.png');
		cards[optionOneTwo].setAttribute('src', 'images/blank.png');
		alert('You have clicked the same card!');
	}
	else if (cardsChosen[0] == cardsChosen[1]) {
		alert('You found a match!'); //TO DO: create a propper pop-up later!
		// With a match, we want to leave those images WHITE and
		// REMOVE the event listener, because those cards are already MATCHED
		cards[optionOneId].setAttribute('src', 'images/white.png');
		cards[optionOneId].removeEventListener('click', flipCard);
		cards[optionTwoId].setAttribute('src', 'images/white.png');
		cards[optionTwoId].removeEventListener('click', flipCard);
		cardsWon.push(cardsChosen);
		
	} else {
		cards[optionOneId].setAttribute('src', 'images/blank.png');
		cards[optionTwoId].setAttribute('src', 'images/blank.png');
		alert('Sorry! Try again.');
	}
	resultDisplay.textContent = cardsWon.length;
	// restart the process for the arrays that'll store the matches...
	cardsChosen = [];
	cardsChosenIds = [];

	// if we match all 6 pairs
	if (cardsWon.length == cardArray.length/2) {
		resultDisplay.innerHTML = 'Congratulations! You found them all!';
	}
}

/*
 * Function that'll allows us to FLIP THE CARDS
*/
function flipCard() {
	// the 'this' keyword will let us use WHATEVER ELEMENT WE CLICKED 
	const cardId = this.getAttribute('data-id');
	// now we can use the cardId as an INDEX to the cardArray (and pick the img!)
	// we then STORE the name of this img, so that, if the NEXT card we click
	// has the SAME IMG/name/path, it's a MATCH (and they'll stay flipped)
	// console.log(cardArray[cardId].name);
	// we use the push method to insert this item in the cardsChosen array
	cardsChosen.push(cardArray[cardId].name);
	cardsChosenIds.push(cardId);
	// change the img
	this.setAttribute('src', cardArray[cardId].img);
	// we don't want to be able to flip more than 2 cards in a row,
	// so if we already clicked 2, we:
	// 1. check for a MATCH
	// 2. clean up if there wasn't one, or let the cards stay flipped if matched
	if (cardsChosen.length === 2) {
		setTimeout(checkMatch, 500);
	}
}
























