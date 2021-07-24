import { showStatus } from "./showStatus.js";
let score = 0;

export function compareChoices(playerChoice, computerChoice) {
	if (playerChoice === "rock") {
		if (computerChoice === "rock") {
			showStatus("draw", score);
		} else if (computerChoice === "paper") {
			score--;
			showStatus("lose", score);
		} else {
			score++;
			showStatus("win", score);
		}
	} else if (playerChoice === "paper") {
		if (computerChoice === "rock") {
			score++;
			showStatus("win", score);
		} else if (computerChoice === "paper") {
			showStatus("draw", score);
		} else {
			score--;
			showStatus("lose", score);
		}
	} else {
		if (computerChoice === "rock") {
			score--;
			showStatus("lose", score);
		} else if (computerChoice === "paper") {
			score++;
			showStatus("win", score);
		} else {
			showStatus("draw", score);
		}
	}
}
