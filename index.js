
const cells = document.querySelectorAll('.cell');
const cell = document.querySelector('.cell');
const playerName = document.querySelector('.cell');

let currentPlayerKey = 'X';

function marker (id) {
	const currCell = document.getElementById(id);
	if(currCell.textContent ===''){
		currCell.textContent = currentPlayerKey;
		currentPlayerKey = currentPlayerKey === 'X' ? 'O' : 'X';
	}
}
