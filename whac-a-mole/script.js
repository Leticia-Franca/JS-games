// Select all the squares (store it)
// and store the mole element
// also the time-left and score elements
// .querySelectorAll will return all elements with the argument passed (in this case, a class of 'square')
const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.getElementById('time-left');
const scoreDisplay = document.getElementById('score');

let result = 0;
let hitPosition = null;
let currentTime = 60;
let timerId = null;

// function the get a random square to put our mole
function randomSquare() {
	// remove the 'mole' class if there is any, so we can begin empty
	squares.forEach(square => {
		square.classList.remove('mole');
	})

	// if we declare as 'var' and put console.log before the
	// initialization, it displays "undefined", but with 'let'
	// it says that cannot access without initialization..
	// IT IS HOISTED, BUT ARE NOT INITIALIZED with a default
	// value (undefined), unlike var...
	let randomSquare = squares[Math.floor(Math.random() * 9)];
	randomSquare.classList.add('mole');

	// store the id of the randomSquare who is the mole
	hitPosition = randomSquare.id;
}

squares.forEach(square => {
	// everytime the player hit/click the mole square, 
	// we add on the result
	square.addEventListener('mousedown', () => {
		if (square.id == hitPosition) {
			result++;
			scoreDisplay.textContent = result;
			hitPosition = null;
		}
	})
})

function moveMole() {
	timerId = setInterval(randomSquare, 500);
}

moveMole(); //we can attach it to a button event

// now, we need to stop our timer
function countDown() {
	currentTime--;
	timeLeft.textContent = currentTime;

	if (currentTime == 0) {
		// this function clearInterval() does what?
		clearInterval(countDownTimerId);
		clearInterval(timerId);
		alert('GAME OVER! Your final score is ' + result);
	}
}

let countDownTimerId = setInterval(countDown, 1000);