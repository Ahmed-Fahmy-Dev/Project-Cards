import DeleteModal from "../classes/DeleteModal.js";
import showCards from "../functions/showCards.js";
import instance from "./instance.js";
import showHideTxtAndBttns from "../utils/showHideTxtAndBttns.js";
import showHideFilter from "../functions/showHideFilter.js";
import { cardsContainer } from "../variables/variables.js";

function visitDeleteBttnHandler() {
  const delModalConfirmBttnHandler = async () => {
    try {
      const { status } = await instance.delete(`/${this.id}`);
      if (status === 200) {
        const cardsArr = JSON.parse(localStorage.getItem("cards"));
        const index = cardsArr.findIndex((card) => card.id === this.id);
        cardsArr.splice(index, 1);
        localStorage.setItem("cards", JSON.stringify(cardsArr));
        cardsContainer.innerHTML = "";
        showHideTxtAndBttns(cardsArr);
        showHideFilter(cardsArr);
        showCards(cardsArr);
      }
    } catch ({ response: { data, status } }) {
      if (status === 404) {
        console.warn(data);
        alert("Unable to delete this card now. Please try again later.");
      } else alert("Something went wrong while contacting the server. Please try again later.");
    }
  };

  new DeleteModal(this.name, delModalConfirmBttnHandler).render(document.querySelector("main"));
}

export default visitDeleteBttnHandler;
