import Modal from "./Modal.js";

class DeleteModal extends Modal {
  constructor(name, delModalConfirmBttnHandler) {
    super(name, delModalConfirmBttnHandler);
    this.name = name;
    this.delModalConfirmBttnHandler = delModalConfirmBttnHandler;
  }
  createElements() {
    super.createElements();
    this.modalConfirmBttn.innerText = "Confirm";
    this.modalHeader.insertAdjacentHTML("afterbegin", `<h1 class="mb-0 text-primary">${this.name}</h1>`);
    this.modalBody.insertAdjacentHTML(
      "beforeend",
      `<h4 class="mb-0 text-danger text-center delete-text">Are you sure you want to delete this card?</h4>`
    );

    this.modalConfirmBttn.addEventListener("click", () => {
      this.delModalConfirmBttnHandler();
      this.close();
    });
  }
}

export default DeleteModal;
