import showCards from "./showCards.js";
import { cardsContainer } from "../variables/variables.js";

const resetFilter = (input, status, urgency) => {
  cardsContainer.innerHTML = "";

  input.value = "";
  status.value = "All";
  urgency.value = "All";

  const cardsArr = JSON.parse(localStorage.getItem("cards"));
  showCards(cardsArr);
};

export default resetFilter;
