
const cells = document.querySelectorAll('.cell');
let c = new Array(9).fill('');

const cell = document.querySelector('.cell');
const playerName = document.querySelector('.cell');

let xWins = parseInt(document.getElementById('xwins').textContent);
let xScore = parseInt(document.getElementById('xscore').textContent);
let oWins = parseInt(document.getElementById('owins').textContent);
let oScore = parseInt(document.getElementById('oscore').textContent);

let currentPlayerKey = '';
let moveCount = 0;
let winner = false;
let earlierWin = '';

getNewCellsContent();
updatePlayerTurn();

cells.forEach(cell => {
	if (cell.textContent !== '')
		cell.classList.add('cursor-disabled');
});

function endCelebration () {
	document.querySelector('.celebrator').classList.add('hide');
}
function startCelebration () {
	document.querySelector('.celebrator').classList.remove('hide');
}
function updateGameStatus (status) {
	document.getElementById('gamestatus').textContent = status;
}

function marker (id) {
	const currCell = document.getElementById(id);
	if (!winner && !currCell.textContent) {
		currCell.textContent = currentPlayerKey;
		moveCount++;
		if (moveCount >= 5 && isWon()) {
			winner = true;
			startCelebration();
			document.getElementById('winner-key').textContent = currentPlayerKey;
			currentPlayerKey == 'X' ? xWins++ : oWins++;
			if (currentPlayerKey == 'X') {
				if (earlierWin == 'X') xScore += 10;
				else xScore += 5;
			} else {
				if (earlierWin == 'O') oScore += 10;
				else oScore += 5;
			}
			updateScores();
			updateGameStatus('Win');
			earlierWin = currentPlayerKey;
			return;

		} else if (c[0] && c[1] && c[2] && c[3] && c[4] && c[5] && c[6] && c[7] && c[8]) {
			updateGameStatus('Draw');
		} else {
			updateGameStatus('On Going');
		}
		updatePlayerTurn();
	}
}

function updatePlayerTurn () {
	currentPlayerKey = currentPlayerKey === 'X' ? 'O' : 'X';
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
	endCelebration();
	updateGameStatus('New Game');
	updateScores();

}
function updateScores () {
	document.getElementById('xscore').textContent = xScore;
	document.getElementById('oscore').textContent = oScore;
	document.getElementById('xwins').textContent = xWins;
	document.getElementById('owins').textContent = oWins;
}

function restart () {
	cells.forEach(cell => cell.textContent = '');
	moveCount = 0;
	earlierWin = currentPlayerKey;
	winner = false;
	updateGameStatus('Game Restarted');
	endCelebration();
	updatePlayerTurn();
}
function getNewCellsContent () {
	cells.forEach((cell, index) => c[index] = cell.textContent);
}

function isWon () {
	getNewCellsContent();
	return c[0] && (c[0] == c[1] && c[1] == c[2] || c[0] == c[3] && c[3] == c[6] || c[0] == c[4] && c[4] == c[8]) ||
		c[1] && c[1] == c[4] && c[4] == c[7] ||
		c[2] && (c[2] == c[4] && c[4] == c[6] || c[2] == c[5] && c[5] == c[8]) ||
		c[3] && c[3] == c[4] && c[4] == c[5] ||
		c[6] && c[6] == c[7] && c[7] == c[8];
}