class Modal {
  constructor() {
    this.modal = document.createElement("div");
    this.modalBg = document.createElement("div");
    this.modalDialog = document.createElement("div");
    this.modalContent = document.createElement("div");
    this.modalHeader = document.createElement("div");
    this.modalBody = document.createElement("div");
    this.modalFooter = document.createElement("div");
    this.modalCloseBttn = document.createElement("button");
    this.modalConfirmBttn = document.createElement("button");
    this.modalCancelBttn = document.createElement("button");
  }

  close() {
    this.modal.remove();
  }

  createElements() {
    this.modal.classList.add("modal", "parent-modal");
    this.modalBg.classList.add("modal-backdrop", "show", "modal__bg");
    this.modalDialog.classList.add("modal-dialog", "modal-dialog-centered", "modal__dialog");
    this.modalContent.classList.add("modal-content");
    this.modalHeader.classList.add("modal-header");
    this.modalBody.classList.add("modal-body");
    this.modalFooter.classList.add("modal-footer", "justify-content-center");
    this.modalCloseBttn.classList.add("btn-close");
    this.modalCloseBttn.type = "button";
    this.modalConfirmBttn.classList.add("btn", "btn-lg", "btn-primary", "bg-gradient");
    this.modalConfirmBttn.type = "button";
    this.modalCancelBttn.classList.add("btn", "btn-lg", "btn-danger", "bg-gradient", "ms-1");
    this.modalCancelBttn.type = "button";
    this.modalCancelBttn.innerText = "Cancel";

    this.modalHeader.append(this.modalCloseBttn);
    this.modalFooter.append(this.modalConfirmBttn, this.modalCancelBttn);

    this.modalContent.append(this.modalHeader, this.modalBody, this.modalFooter);
    this.modalContent.insertAdjacentHTML("beforeend", '<p class="text-muted text-center">© 2022</p>');

    this.modalDialog.append(this.modalContent);

    this.modal.append(this.modalBg, this.modalDialog);

    this.modalCloseBttn.addEventListener("click", () => {
      this.close();
    });
    this.modalBg.addEventListener("click", () => {
      this.close();
    });
    this.modalCancelBttn.addEventListener("click", () => {
      this.close();
    });
  }

  render(container) {
    this.createElements();
    container.append(this.modal);
  }
}

export default Modal;
