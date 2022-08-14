import Visit from "./Visit.js";
import EditCardModal from "./EditCardModal.js";
import formValidity from "../utils/formValidity.js";
import editCardHandler from "../api/editCardHandler.js";

class VisitDentist extends Visit {
  constructor(lastVisit, ...args) {
    super(...args);
    this.lastVisit = lastVisit;
  }

  createElements() {
    super.createElements();
    this.containerAddInfo.insertAdjacentHTML("beforeend", `<p><b>Last visit:</b> ${this.lastVisit};</p>`);
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
        this.lastVisit,
        "",
        this.cardStatus,
        this.id,
        editCardHandler
      ).render(document.querySelector("main"));
      formValidity();
    });
  }
}

export default VisitDentist;
