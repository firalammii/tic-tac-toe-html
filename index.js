
const cells = document.querySelectorAll('.cell');
const cell = document.querySelector('.cell');
const playerName = document.querySelector('.cell');



let currentPlayerKey = 'X';
let moveCount = 0;
let winner = false;


cells.forEach(cell => {
	if (cell.textContent !== '')
		cell.classList.add('cursor-disabled');
});

function marker (id) {
	const currCell = document.getElementById(id);
	if (!winner && !currCell.textContent) {
		currCell.textContent = currentPlayerKey;
		moveCount++;

		if (isWon()) {
			winner = true;
			document.querySelector('.winner').classList.toggle('hide');
			document.getElementById('winner-key').textContent = currentPlayerKey;
			// console.log(`player ${currentPlayerKey} ${isWon()}`);
		}
		else {
			currentPlayerKey = currentPlayerKey === 'X' ? 'O' : 'X';

		}
	}
}

function newGame () {
	cells.forEach(cell => cell.textContent = '');
	moveCount = 0;
	currentPlayerKey = 'X';
	winner = false;
	document.querySelector('.winner').classList.add('hide');
}

function isWon () {
	const c1 = document.getElementById('1').textContent;
	const c2 = document.getElementById('2').textContent;
	const c3 = document.getElementById('3').textContent;
	const c4 = document.getElementById('4').textContent;
	const c5 = document.getElementById('5').textContent;
	const c6 = document.getElementById('6').textContent;
	const c7 = document.getElementById('7').textContent;
	const c8 = document.getElementById('8').textContent;
	const c9 = document.getElementById('9').textContent;
	// console.log(`${c1} ${c2} ${c3}`);
	return c1 !== '' && (c1 == c2 && c2 == c3 || c1 == c4 && c4 == c7 || c1 == c5 && c5 == c9) ||
		c2 != '' && c2 == c5 && c5 == c8 ||
		c3 != '' && (c3 == c5 && c5 == c7 || c3 == c6 && c6 == c9) ||
		c4 != '' && c4 == c5 && c5 == c6 ||
		c7 != '' && c7 == c8 && c8 == c9;
}