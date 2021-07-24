import { handleComputerChoice } from "./handleComputerChoice.js";
export const choices = document.querySelectorAll(".main .choice");
export let playerChoice;

export function handlePlayerChoice(e) {
	if (
		e.target.classList.contains("choice-paper") ||
		e.target.classList.contains("img-paper")
	) {
		playerChoice = "paper";
	} else if (
		e.target.classList.contains("choice-rock") ||
		e.target.classList.contains("img-rock")
	) {
		playerChoice = "rock";
	} else if (
		e.target.classList.contains("choice-scissors") ||
		e.target.classList.contains("img-scissors")
	) {
		playerChoice = "scissors";
	}

	handleComputerChoice();
}
