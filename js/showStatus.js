import { reset } from "./reset.js";
export function showStatus(status, score) {
	const statusDiv = document.querySelector(".status");
	const statusText = statusDiv.querySelector(".status__text");
	const scoreText = document.querySelector(".score__number");
	statusText.textContent = status == "draw" ? "draw" : `you ${status}`;
	statusDiv.style.display = "block";
	scoreText.textContent = score;

	const resetBtn = statusDiv.querySelector(".status__btn");
	resetBtn.addEventListener("click", reset);
}
