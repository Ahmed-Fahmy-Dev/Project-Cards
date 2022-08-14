import SignInModal from "./classes/SignInModal.js";
import loginAndShowCards from "./api/loginAndShowCards.js";
import signOutBttnHandler from "./functions/signOutBttnHandler.js";
import getCards from "./api/getCards.js";
import showCards from "./functions/showCards.js";
import showHideTxtAndBttns from "./utils/showHideTxtAndBttns.js";
import cardsFilter from "./functions/cardsFilter.js";
import resetFilter from "./functions/resetFilters.js";
import AddCardModal from "./classes/AddCardModal.js";
import addCardHandler from "./api/addCardHandler.js";
import formValidity from "./utils/formValidity.js";
import showHideFilter from "./functions/showHideFilter.js";
import debounce from "./utils/debounce.js";

const headerSigninBttn = document.querySelector(".navbar__signin-bttn");
const signinLink = document.querySelector(".signin-link");
const createVisitBtn = document.querySelector(".navbar__add-bttn");
const headerSignOutBttn = document.querySelector(".navbar__signout-bttn");
const resetFiltersButton = document.querySelector(".filter__reset-btn");
const searchInput = document.getElementById("searchInput");
const selectStatus = document.getElementById("selectStatus");
const selectUrgency = document.getElementById("selectUrgency");

(async () => {
  if (localStorage.getItem("token")) {
    const cards = await getCards();
    showHideTxtAndBttns(cards);
    showCards(cards);
    showHideFilter(cards);
  }
})();

headerSigninBttn.addEventListener("click", () => {
  new SignInModal(loginAndShowCards).render(document.querySelector("main"));
});

signinLink.addEventListener("click", () => {
  new SignInModal(loginAndShowCards).render(document.querySelector("main"));
});

headerSignOutBttn.addEventListener("click", signOutBttnHandler);

createVisitBtn.addEventListener("click", () => {
  new AddCardModal(addCardHandler).render(document.querySelector("main"));
  formValidity();
});

searchInput.addEventListener("input", debounce(cardsFilter, 750));

selectStatus.addEventListener("change", cardsFilter);

selectUrgency.addEventListener("change", cardsFilter);

resetFiltersButton.addEventListener("click", () => {
  resetFilter(searchInput, selectStatus, selectUrgency);
});
