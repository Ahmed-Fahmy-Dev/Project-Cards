import instance from "./instance.js";
import showCards from "../functions/showCards.js";
import { cardsContainer } from "../variables/variables.js";

async function editCardHandler() {
  const body = {};
  body.purpose = this.addCardPurposeText.value;
  body.description = this.addCardDescrText.value;
  body.doctor = this.addCardSelectDoctor.value;
  body.urgency = this.addCardSelectUrgency.value;
  body.name = this.addCardNameText.value;

  if (this.addCardSelectDoctor.value === "Cardiologist") {
    body.pressure = this.addCardBPText.value;
    body.bmi = this.addCardBMIText.value;
    body.history = this.addCardCardioHistoryText.value;
    body.age = this.addCardCardioAgeText.value;
  } else if (this.addCardSelectDoctor.value === "Dentist") {
    body.lastVisit = this.addCardLastVisitText.value;
  } else if (this.addCardSelectDoctor.value === "Therapist") {
    body.age = this.addCardAgeText.value;
  }
  body.cardStatus = this.addCardSelectStatus.value;

  try {
    const { status, data } = await instance.put(`/${this.id}`, body);
    if (status === 200) {
      const cardsArr = JSON.parse(localStorage.getItem("cards"));
      const index = cardsArr.findIndex((card) => card.id === this.id);
      cardsArr.splice(index, 1, data);
      localStorage.setItem("cards", JSON.stringify(cardsArr));
      cardsContainer.innerHTML = "";
      showCards(cardsArr);
    }
  } catch (err) {
    console.warn(err);
    alert("Something went wrong while editing your card, please try again later.");
  }
}

export default editCardHandler;
