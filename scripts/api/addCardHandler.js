import instance from "./instance.js";
import showCards from "../functions/showCards.js";
import showHideTxtAndBttns from "../utils/showHideTxtAndBttns.js";
import showHideFilter from "../functions/showHideFilter.js";

async function addCardHandler() {
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
  body.cardStatus = "Opened";

  try {
    const { status, data } = await instance.post("", body);
    if (status === 200) {
      const cardsArr = JSON.parse(localStorage.getItem("cards"));
      cardsArr.push(data);
      localStorage.setItem("cards", JSON.stringify(cardsArr));
      const newCard = [data];
      showHideTxtAndBttns(cardsArr);
      showHideFilter(cardsArr);
      showCards(newCard);
    }
  } catch (err) {
    console.warn(err);
    alert("Something went wrong while adding your card, please try again later.");
  }
}

export default addCardHandler;
