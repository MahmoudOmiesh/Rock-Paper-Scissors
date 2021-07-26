import { playerChoice } from './handlePlayerChoice.js';
import { compareChoices } from './compareChoices.js';
let computerChoice;
const choices = ['rock', 'paper', 'scissors'];
const mainDiv = document.querySelector('.main');
const gameDiv = document.querySelector('.game');
const COMPUTER_CHOICE_DELAY = 1250; //ms

export function handleComputerChoice() {
	switchDivs();
	showPlayerChoice();
	setTimeout(showComputerChoice, COMPUTER_CHOICE_DELAY);
	setTimeout(
		() => compareChoices(playerChoice, computerChoice),
		COMPUTER_CHOICE_DELAY
	);
}

function switchDivs() {
	mainDiv.style.display = 'none';
	gameDiv.style.display = 'flex';
}

function showPlayerChoice() {
	const playerChoiceDiv = gameDiv.querySelector('.player .choice');
	const playerChoiceImg = document.createElement('img');
	const computerCircle = document.querySelector('.circle');
	playerChoiceImg.className = 'choice__image';
	if (playerChoice === 'rock') {
		playerChoiceImg.src = 'images/icon-rock.svg';
		playerChoiceImg.alt = 'rock choice';
		playerChoiceDiv.className = 'choice choice-rock';
	} else if (playerChoice === 'paper') {
		playerChoiceImg.src = 'images/icon-paper.svg';
		playerChoiceImg.alt = 'paper choice';
		playerChoiceDiv.className = 'choice choice-paper';
	} else if (playerChoice === 'scissors') {
		playerChoiceImg.src = 'images/icon-scissors.svg';
		playerChoiceImg.alt = 'scissors choice';
		playerChoiceDiv.className = 'choice choice-scissors';
	}
	playerChoiceDiv.appendChild(playerChoiceImg);
	computerCircle.style.animation = '1s ease-in-out grow';
}

function showComputerChoice() {
	computerChoice = choices[Math.floor(Math.random() * choices.length)];
	const computerChoiceDiv = document.querySelector('.computer > div');
	const computerChoiceImg = document.createElement('img');
	computerChoiceImg.className = 'choice__image';
	if (computerChoice === 'rock') {
		computerChoiceImg.src = 'images/icon-rock.svg';
		computerChoiceImg.alt = 'rock choice';
		computerChoiceDiv.className = 'choice choice-rock';
	} else if (computerChoice === 'paper') {
		computerChoiceImg.src = 'images/icon-paper.svg';
		computerChoiceImg.alt = 'paper choice';
		computerChoiceDiv.classList = 'choice choice-paper';
	} else if (computerChoice === 'scissors') {
		computerChoiceImg.src = 'images/icon-scissors.svg';
		computerChoiceImg.alt = 'scissors choice';
		computerChoiceDiv.classList = 'choice choice-scissors';
	}
	computerChoiceDiv.appendChild(computerChoiceImg);
}
