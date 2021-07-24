import { choices, handlePlayerChoice } from "./handlePlayerChoice.js";
choices.forEach((choice) =>
	choice.addEventListener("click", handlePlayerChoice)
);
