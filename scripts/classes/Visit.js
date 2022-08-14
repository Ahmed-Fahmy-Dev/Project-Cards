class Visit {
  constructor(name, doctor, purpose, description, urgency, cardStatus, id, visitDeleteBttnHandler) {
    this.purpose = purpose;
    this.description = description;
    this.urgency = urgency;
    this.doctor = doctor;
    this.name = name;
    this.cardStatus = cardStatus;
    this.id = id;
    this.visitDeleteBttnHandler = visitDeleteBttnHandler;
    this.containerColumn = document.createElement("div");
    this.containerCard = document.createElement("div");
    this.containerName = document.createElement("div");
    this.deleteButton = document.createElement("button");
    this.containerCardBody = document.createElement("div");
    this.cardBodyRow = document.createElement("div");
    this.cardBodyFooter = document.createElement("div");
    this.containerAdditional = document.createElement("div");
    this.containerCollapse = document.createElement("div");
    this.containerAddInfo = document.createElement("div");
    this.collapseButton = document.createElement("a");
    this.editButton = document.createElement("button");
  }

  createElements() {
    this.containerColumn.className = "col-sm-6 col-md-4 col-lg-3";
    this.containerCard.className = "card border-primary mb-3";
    this.containerCard.setAttribute("style", "max-width: 18rem;");
    this.containerName.className = "card-header card-header__wrapper";
    this.deleteButton.className = "btn card__btnDel";
    this.deleteButton.setAttribute("type", "button");
    this.deleteButton.setAttribute("aria-label", "Delete");
    this.deleteButton.insertAdjacentHTML(
      "beforeend",
      `<img src="./assets/icons/delete.png" alt="btn_delete" style="width:23px; 
        float:right"></img>`
    );
    this.containerName.append(this.deleteButton);
    this.containerCard.append(this.containerName);
    this.containerCardBody.className = "card-body text-primary";
    this.containerCardBody.insertAdjacentHTML(
      "afterbegin",
      `<h5>${this.name}</h5>
        <h7 class="card-title">${this.doctor}</h7>`
    );
    this.cardBodyRow.className = "row";
    this.collapseButton.className = "btn btn-primary card__btn-moreText card__btn-moreText--More";
    this.collapseButton.setAttribute("data-bs-toggle", "collapse");
    this.collapseButton.setAttribute("href", `#multiCollapseExample-${this.id}`);
    this.collapseButton.setAttribute("role", "button");
    this.collapseButton.setAttribute("aria-expanded", "false");
    this.collapseButton.setAttribute("aria-controls", "multiCollapseExample1");
    this.collapseButton.innerText = "More info ...";
    this.cardBodyFooter.classList.add("card-body-p");
    this.cardBodyFooter.prepend(this.collapseButton);
    this.editButton.className = "btn card__btnDel card__btnEdit";
    this.editButton.setAttribute("type", "button");
    this.editButton.setAttribute("aria-label", "Edit");
    this.editButton.insertAdjacentHTML(
      "beforeend",
      `<img src="./assets/icons/icons-edit.png" alt="btn_edit" style="width:20px; 
        float:right"></img>`
    );
    this.cardBodyFooter.append(this.editButton);
    this.cardBodyRow.append(this.cardBodyFooter);
    this.containerAdditional.className = "col";
    this.containerCollapse.className = "collapse multi-collapse";
    this.containerCollapse.setAttribute("id", `multiCollapseExample-${this.id}`);
    this.containerAddInfo.className = "card card-body";
    this.containerAddInfo.insertAdjacentHTML(
      "beforeend",
      `<p><b>Visit purpose:</b> ${this.purpose};</p>
        <p><b>Description:</b> ${this.description};</p>`
    );
    this.containerCollapse.append(this.containerAddInfo);
    this.containerAdditional.append(this.containerCollapse);
    this.cardBodyRow.prepend(this.containerAdditional);
    this.containerCardBody.append(this.cardBodyRow);
    this.containerCard.append(this.containerCardBody);
    this.containerColumn.append(this.containerCard);

    if (this.urgency === "Low") {
      this.containerName.insertAdjacentHTML(
        "beforeend",
        '<span  class="badge rounded-pill text-bg-warning badge__opnCls ms-3">Low</span>'
      );
    } else if (this.urgency === "Medium") {
      this.containerCard.classList.remove("border-primary");
      this.containerCard.classList.add("text-bg-primary");
      this.containerCardBody.classList.remove("text-primary");
      this.containerCardBody.classList.add("text-bg-primary");
      this.collapseButton.classList.remove("btn-primary");
      this.collapseButton.classList.add("btn-light");
      this.deleteButton.innerHTML = `<img src="./assets/icons/delete-white.png" alt="btn_delete" style="width:23px; 
            float:right"></img>`;
      this.editButton.innerHTML = `<img src="./assets/icons/icons-edit-white.png" alt="btn_edit" style="width:20px; 
        float:right"></img>`;
      this.containerCollapse.classList.add("text-primary");
      this.containerName.insertAdjacentHTML(
        "beforeend",
        '<span  class="badge rounded-pill text-bg-warning badge__opnCls ms-3">Med</span>'
      );
    } else if (this.urgency === "High") {
      this.containerCard.classList.remove("border-primary");
      this.containerCard.classList.add("text-bg-danger");
      this.containerCardBody.classList.remove("text-primary");
      this.containerCardBody.classList.add("text-bg-danger");
      this.collapseButton.classList.remove("btn-primary");
      this.collapseButton.classList.add("btn-light");
      this.deleteButton.innerHTML = `<img src="./assets/icons/delete-white.png" alt="btn_delete" style="width:23px; 
            float:right"></img>`;
      this.editButton.innerHTML = `<img src="./assets/icons/icons-edit-white.png" alt="btn_edit" style="width:20px; 
        float:right"></img>`;
      this.containerCollapse.classList.add("text-danger");
      this.containerName.insertAdjacentHTML(
        "beforeend",
        '<span  class="badge rounded-pill text-bg-warning badge__opnCls ms-3">High</span>'
      );
    }

    if (this.cardStatus === "Opened") {
      this.containerName.insertAdjacentHTML(
        "afterbegin",
        '<span  class="badge rounded-pill text-bg-warning badge__opnCls">Opened</span>'
      );
    } else if (this.cardStatus === "Closed") {
      this.containerName.insertAdjacentHTML(
        "afterbegin",
        '<span class="badge rounded-pill text-bg-secondary badge__opnCls">Closed</span>'
      );
    }

    this.collapseButton.addEventListener("click", () => {
      if (this.collapseButton.getAttribute("aria-expanded") === "true") {
        this.collapseButton.innerHTML = "Less info";
      } else {
        this.collapseButton.innerHTML = "More info ...";
      }
    });

    this.deleteButton.addEventListener("click", this.visitDeleteBttnHandler.bind(this));
  }

  render(selector) {
    this.createElements();
    selector.prepend(this.containerColumn);
  }
}

export default Visit;
