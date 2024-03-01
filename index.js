
const cells = document.querySelectorAll('.cell');
const cell = document.querySelector('.cell');
const playerName = document.querySelector('.cell');

let c1 = document.getElementById('1').textContent;
let c2 = document.getElementById('2').textContent;
let c3 = document.getElementById('3').textContent;
let c4 = document.getElementById('4').textContent;
let c5 = document.getElementById('5').textContent;
let c6 = document.getElementById('6').textContent;
let c7 = document.getElementById('7').textContent;
let c8 = document.getElementById('8').textContent;
let c9 = document.getElementById('9').textContent;


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
			updateScores();
			document.getElementById('gamestatus').textContent = 'Win';
			earlierWin = currentPlayerKey;
		} else if (c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9)
			restart();
		else {
			currentPlayerKey = currentPlayerKey === 'X' ? 'O' : 'X';
			document.getElementById('gamestatus').textContent = 'On Going';
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
	xWins = 0;
	xScore = 0;
	oWins = 0;
	oScore = 0;
	earlierWin = '';
	document.querySelector('.winner').classList.add('hide');
	document.getElementById('gamestatus').textContent = 'New Game';
	updateScores();
}
function updateScores () {
	document.getElementById('xscore').textContent = xScore;
	document.getElementById('oscore').textContent = oScore;
	document.getElementById('xwins').textContent = xWins;
	document.getElementById('owins').textContent = oWins;
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
	document.getElementById('gamestatus').textContent = 'Game Restarted';

}
function getCellsUpdate () {
	c1 = document.getElementById('1').textContent;
	c2 = document.getElementById('2').textContent;
	c3 = document.getElementById('3').textContent;
	c4 = document.getElementById('4').textContent;
	c5 = document.getElementById('5').textContent;
	c6 = document.getElementById('6').textContent;
	c7 = document.getElementById('7').textContent;
	c8 = document.getElementById('8').textContent;
	c9 = document.getElementById('9').textContent;
}
function isWon () {
	getCellsUpdate();
	return c1 !== '' && (c1 == c2 && c2 == c3 || c1 == c4 && c4 == c7 || c1 == c5 && c5 == c9) ||
		c2 != '' && c2 == c5 && c5 == c8 ||
		c3 != '' && (c3 == c5 && c5 == c7 || c3 == c6 && c6 == c9) ||
		c4 != '' && c4 == c5 && c5 == c6 ||
		c7 != '' && c7 == c8 && c8 == c9;
}