import showCards from "./showCards.js";
import { cardsContainer } from "../variables/variables.js";

const cardsFilter = () => {
  const filter = () => {
    const searchInput = document.getElementById("searchInput");
    const selectStatus = document.getElementById("selectStatus");
    const selectUrgency = document.getElementById("selectUrgency");
    const cardsArr = JSON.parse(localStorage.getItem("cards"));

    return cardsArr.filter((card) => {
      const { name, doctor, purpose, description, cardStatus, urgency } = card;

      function isInclude(key) {
        if (key.toLowerCase().indexOf(searchInput.value.toLowerCase()) !== -1) {
          return true;
        }
      }

      if (
        (isInclude(name) || isInclude(doctor) || isInclude(purpose) || isInclude(description)) &&
        (cardStatus === selectStatus.value || selectStatus.value === "All") &&
        (urgency === selectUrgency.value || selectUrgency.value === "All")
      ) {
        return card;
      }
    });
  };

  cardsContainer.innerHTML = "";
  let filteredCardsArr = filter();
  showCards(filteredCardsArr);
};

export default cardsFilter;
