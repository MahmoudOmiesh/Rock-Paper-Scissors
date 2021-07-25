export const modalBtn = document.querySelector(".footer__btn");
export const modalCloseBtn = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
export function showModal() {
	modal.style.transform = "scaleY(1)";
}
export function hideModal() {
	modal.style.transform = "scaleY(0)";
}
