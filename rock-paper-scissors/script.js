// Get each of the span elements
const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
// Get all the possible choices (rock, paper and scissor)
const allPossibleChoices = document.querySelectorAll('button');
let yourChoice;
let computerChoice;
let result;

// Add event to listen for 'click' IN EACH button
allPossibleChoices.forEach(allPossibleChoices => allPossibleChoices.addEventListener('click', (e) => {
	yourChoice = e.target.id;
	yourChoiceDisplay.innerHTML = yourChoice;
	// now, we need to generate the computer choice
	generateComputerChoice();
}))

/* because this is a "function declaration" and not a "function expression" (look more about this),
 * we can actually declare it AFTER we call for it - JS is gonna hoist it (move to the top of the scope)
 * ref: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
*/
function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * (allPossibleChoices.length + 1)); //it will be multiplied by 3, but not hard coded
	
	if (randomNumber === 1) {
		computerChoice = 'rock';
	}
	if (randomNumber === 2) {
		computerChoice = 'scissors';
	}
	if (randomNumber === 3) {
		computerChoice = 'paper';
	}
	computerChoiceDisplay.innerHTML = computerChoice;
	getResult();
}

function getResult() {
	if (computerChoice === yourChoice) {
		result = 'its a draw!';
	}
	if (computerChoice === 'rock' && yourChoice === 'paper') {
		result = 'you win!';
	}
	if (computerChoice === 'rock' && yourChoice === 'scissors') {
		result = 'you lost!';
	}
	if (computerChoice === 'paper' && yourChoice === 'scissors') {
		result = 'you win!';
	}
	if (computerChoice === 'paper' && yourChoice === 'rock') {
		result = 'you lost!';
	}
	if (computerChoice === 'scissors' && yourChoice === 'rock') {
		result = 'you win!';
	}
	if (computerChoice === 'scissors' && yourChoice === 'paper') {
		result = 'you lost!';
	}
	resultDisplay.innerHTML = result;
}

// TO DO: What is a more efficient way INSTEAD OF IF's???
