
const cells = document.querySelectorAll('.cell');
const cell = document.querySelector('.cell');
const playerName = document.querySelector('.cell');


let xWins = parseInt(document.getElementById('xwins').textContent);
let xScore = parseInt(document.getElementById('xscore').textContent);
let oWins = parseInt(document.getElementById('owins').textContent);
let oScore = parseInt(document.getElementById('oscore').textContent);





let currentPlayerKey = 'X';
let moveCount = 0;
let winner = false;
let earlierWin = '';

markCurrentPlayer();

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
			currentPlayerKey == 'X' ? xWins++ : oWins++;
			if (currentPlayerKey == 'X') {
				if (earlierWin == 'X')
					xScore += 10;
				else
					xScore += 5;
			} else {
				if (earlierWin == 'O')
					oScore += 10;
				else
					oScore += 5;
			}

			document.getElementById('xscore').textContent = xScore;
			document.getElementById('oscore').textContent = oScore;

			document.getElementById('xwins').textContent = xWins;
			document.getElementById('owins').textContent = oWins;

			earlierWin = currentPlayerKey;
		}
		else {
			currentPlayerKey = currentPlayerKey === 'X' ? 'O' : 'X';
		}
		markCurrentPlayer();
	}
}
function markCurrentPlayer () {
	document.getElementById('turn').textContent = currentPlayerKey;
	document.getElementById('key').textContent = currentPlayerKey;
}

function newGame () {
	cells.forEach(cell => cell.textContent = '');
	moveCount = 0;
	currentPlayerKey = 'X';
	winner = false;
	document.querySelector('.winner').classList.add('hide');

	document.getElementById('xscore').textContent = 0;
	document.getElementById('oscore').textContent = 0;

	document.getElementById('xwins').textContent = 0;
	document.getElementById('owins').textContent = 0;
}

function restart () {
	// draw ?
	cells.forEach(cell => cell.textContent = '');
	moveCount = 0;

	earlierWin = currentPlayerKey;
	currentPlayerKey = currentPlayerKey === 'X' ? 'O' : 'X';
	markCurrentPlayer();
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