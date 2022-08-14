import instance from "./instance.js";
import showHideTxtAndBttns from "../utils/showHideTxtAndBttns.js";
import getCards from "./getCards.js";
import showCards from "../functions/showCards.js";
import showHideFilter from "../functions/showHideFilter.js";
import { cardsContainer } from "../variables/variables.js";

async function loginAndShowCards() {
  const signInInputCollection = document.querySelectorAll(".signin-modal__form-input");
  const body = {};

  signInInputCollection.forEach((input) => {
    body[input.name] = input.value;
  });

  try {
    const { status, data } = await instance.post("/login", body);
    if (status === 200) {
      localStorage.setItem("token", data);
      this.close();
      const cards = await getCards();
      cardsContainer.innerHTML = "";
      showCards(cards);
      showHideFilter(cards);
      showHideTxtAndBttns(cards);
    }
  } catch (err) {
    const {
      response: { status },
    } = err;
    if (status === 401) {
      console.warn(`${status}, Incorrect username or password.`);
      document.querySelector(".signin-form__error-text").classList.remove("d-none");
      document.querySelectorAll(".signin-modal__form-input").forEach((item) => {
        item.classList.add("is-invalid");
      });
    } else {
      console.warn(err);
    }
  }
}

export default loginAndShowCards;
