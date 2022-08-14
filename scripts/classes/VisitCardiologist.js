import Visit from "./Visit.js";
import EditCardModal from "./EditCardModal.js";
import formValidity from "../utils/formValidity.js";
import editCardHandler from "../api/editCardHandler.js";

class VisitCardiologist extends Visit {
  constructor(pressure, massIndex, illness, age, ...args) {
    super(...args);
    this.pressure = pressure;
    this.massIndex = massIndex;
    this.illness = illness;
    this.age = age;
  }

  createElements() {
    super.createElements();
    this.containerAddInfo.insertAdjacentHTML(
      "beforeend",
      `<p><b>B. Pressure :</b> ${this.pressure};</p>
        <p><b>BMI:</b> ${this.massIndex};</p>
        <p><b>Cardiovascular History:</b> ${this.illness};</p>
        <p><b>Age:</b> ${this.age};</p>`
    );
    this.cardBodyRow.prepend(this.containerCollapse);

    this.editButton.addEventListener("click", () => {
      new EditCardModal(
        this.name,
        this.doctor,
        this.purpose,
        this.description,
        this.urgency,
        this.pressure,
        this.massIndex,
        this.illness,
        this.age,
        "",
        "",
        this.cardStatus,
        this.id,
        editCardHandler
      ).render(document.querySelector("main"));

      formValidity();
    });
  }
}

export default VisitCardiologist;
