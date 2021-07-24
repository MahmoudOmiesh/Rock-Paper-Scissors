import { choices, handlePlayerChoice } from "./handlePlayerChoice.js";
import { modalBtn, modalCloseBtn, showModal, hideModal } from "./modal.js";
choices.forEach((choice) =>
	choice.addEventListener("click", handlePlayerChoice)
);
modalBtn.addEventListener("click", showModal);
modalCloseBtn.addEventListener("click", hideModal);
