import Visit from "./Visit.js";
import EditCardModal from "./EditCardModal.js";
import formValidity from "../utils/formValidity.js";
import editCardHandler from "../api/editCardHandler.js";

class VisitTheraphist extends Visit {
  constructor(age, ...args) {
    super(...args);
    this.age = age;
  }

  createElements() {
    super.createElements();
    this.containerAddInfo.insertAdjacentHTML("beforeend", `<p><b>Age:</b> ${this.age};</p>`);
    this.cardBodyRow.prepend(this.containerCollapse);

    this.editButton.addEventListener("click", () => {
      new EditCardModal(
        this.name,
        this.doctor,
        this.purpose,
        this.description,
        this.urgency,
        "",
        "",
        "",
        "",
        "",
        this.age,
        this.cardStatus,
        this.id,
        editCardHandler
      ).render(document.querySelector("main"));
      formValidity();
    });
  }
}

export default VisitTheraphist;
