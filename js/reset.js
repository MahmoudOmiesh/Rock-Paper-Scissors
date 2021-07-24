export function reset() {
	const statusDiv = document.querySelector(".status");
	const computerChoiceDiv = document.querySelector(".computer > div");
	const mainDiv = document.querySelector(".main");
	const gameDiv = document.querySelector(".game");
	const ChoiceImages = gameDiv.querySelectorAll(".choice__image");
	statusDiv.style.display = "none";
	computerChoiceDiv.className = "circle";
	ChoiceImages.forEach((img) => img.remove());
	mainDiv.style.display = "grid";
	gameDiv.style.display = "none";
}
