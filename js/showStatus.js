import { reset } from './reset.js';
export function showStatus(status, score) {
	const statusDiv = document.querySelector('.status');
	const statusText = statusDiv.querySelector('.status__text');
	const scoreText = document.querySelector('.score__number');
	statusText.textContent = status == 'draw' ? 'draw' : `you ${status}`;

	if (status == 'win') {
		const winningChoice = document.querySelector('.player .choice');
		winningChoice.classList.add('winner');
	} else if (status == 'lose') {
		const winningChoice = document.querySelector('.computer .choice');
		winningChoice.classList.add('winner');
	} else {
		const playerChoice = document.querySelector('.player .choice');
		const computerChoice = document.querySelector('.computer .choice');
		playerChoice.classList.remove('winner');
		computerChoice.classList.remove('winner');
	}

	scoreText.textContent = score;
	statusDiv.style.opacity = '1';

	const resetBtn = statusDiv.querySelector('.status__btn');
	resetBtn.addEventListener('click', reset);
}
