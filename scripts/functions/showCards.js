import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTheraphist from "../classes/VisitTeraphist.js";
import visitDeleteBttnHandler from "../api/visitDeleteBttnFunctions.js";
import { cardsContainer } from "../variables/variables.js";

/**
 *
 * @param {Array} cards
 * @description takes array of card objects and draws them on the screen
 */

const showCards = (cards) => {
  cards.forEach((card) => {
    const { name, doctor, purpose, description, urgency, cardStatus, id } = card;
    switch (doctor) {
      case "Cardiologist":
        const { pressure, bmi, history, age: cardioAge } = card;
        new VisitCardiologist(
          pressure,
          bmi,
          history,
          cardioAge,
          name,
          doctor,
          purpose,
          description,
          urgency,
          cardStatus,
          id,
          visitDeleteBttnHandler
        ).render(cardsContainer);
        break;
      case "Dentist":
        const { lastVisit } = card;
        new VisitDentist(
          lastVisit,
          name,
          doctor,
          purpose,
          description,
          urgency,
          cardStatus,
          id,
          visitDeleteBttnHandler
        ).render(cardsContainer);
        break;
      case "Therapist":
        const { age } = card;
        new VisitTheraphist(
          age,
          name,
          doctor,
          purpose,
          description,
          urgency,
          cardStatus,
          id,
          visitDeleteBttnHandler
        ).render(cardsContainer);
        break;
    }
  });
};
export default showCards;
