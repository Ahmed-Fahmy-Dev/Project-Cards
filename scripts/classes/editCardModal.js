import Modal from "./Modal.js";


class EditCardModal extends Modal {
  constructor(name, doctor, purpose, description, urgency, pressure, bmi, history, cardioAge, lastVisit, therapAge, cardStatus, id, editCardHandler) {
    super();
    this.name = name;
    this.doctor = doctor;
    this.purpose = purpose;
    this.description = description;
    this.urgency = urgency;
    this.pressure = pressure;
    this.bmi = bmi;
    this.history = history;
    this.cardioAge = cardioAge;
    this.lastVisit = lastVisit;
    this.therapAge = therapAge;
    this.cardStatus = cardStatus;
    this.id = id;
    this.editCardHandler = editCardHandler;
    this.addCardForm = document.createElement('form');
    this.addCardFormTitle = document.createElement('h3');
    this.addCardWrapSelectDoctor = document.createElement('div');
    this.addCardSelectDoctor = document.createElement('select');
    this.addCardSelectDoctorOpt1 = document.createElement('option');
    this.addCardSelectDoctorOpt2 = document.createElement('option');
    this.addCardSelectDoctorOpt3 = document.createElement('option');
    this.addCardSelectDoctorOpt4 = document.createElement('option');
    this.addCardSelectDoctorLabel = document.createElement('label');
    this.addCardSelectDoctorFB = document.createElement('div');

    this.addCardWrapPurpose = document.createElement('div');
    this.addCardWrapTextPurpose = document.createElement('div');
    this.addCardPurposeText = document.createElement('textarea');
    this.addCardPurposeLabel = document.createElement('label');
    this.addCardPurposeFB = document.createElement('div');

    this.addCardWrapDescr = document.createElement('div');
    this.addCardDescrText = document.createElement('textarea');
    this.addCardDescrLabel = document.createElement('label');
    this.addCardDescrFB = document.createElement('div');

    this.addCardWrapSelectUrgency = document.createElement('div');
    this.addCardSelectUrgency = document.createElement('select');
    this.addCardSelectUrgencyOpt1 = document.createElement('option');
    this.addCardSelectUrgencyOpt2 = document.createElement('option');
    this.addCardSelectUrgencyOpt3 = document.createElement('option');
    this.addCardSelectUrgencyOpt4 = document.createElement('option');
    this.addCardSelectUrgencyLabel = document.createElement('label');
    this.addCardSelectUrgencyFB = document.createElement('div');

    this.addCardWrapName = document.createElement('div');
    this.addCardNameText = document.createElement('input');
    this.addCardNameLabel = document.createElement('label');
    this.addCardNameFB = document.createElement('div');

    this.addCardWrapBP = document.createElement('div');
    this.addCardBPText = document.createElement('input');
    this.addCardBPLabel = document.createElement('label');
    this.addCardBPFB = document.createElement('div');

    this.addCardWrapBMI = document.createElement('div');
    this.addCardBMIText = document.createElement('input');
    this.addCardBMILabel = document.createElement('label');
    this.addCardBMIFB = document.createElement('div');

    this.addCardWrapCardioHistory = document.createElement('div');
    this.addCardCardioHistoryText = document.createElement('textarea');
    this.addCardCardioHistoryLabel = document.createElement('label');
    this.addCardCardioHistoryFB = document.createElement('div');

    this.addCardWrapCardioAge = document.createElement('div');
    this.addCardCardioAgeText = document.createElement('input');
    this.addCardCardioAgeLabel = document.createElement('label');
    this.addCardCardioAgeFB = document.createElement('div');

    this.addCardWrapLastVisit = document.createElement('div');
    this.addCardLastVisitText = document.createElement('input');
    this.addCardLastVisitLabel = document.createElement('label');
    this.addCardLastVisitFB = document.createElement('div');

    this.addCardWrapAge = document.createElement('div');
    this.addCardAgeText = document.createElement('input');
    this.addCardAgeLabel = document.createElement('label');
    this.addCardAgeFB = document.createElement('div');

    this.addCardFormSubmitWrap = document.createElement('div');
    this.addCardFormSubmitBtn = document.createElement('button');

    this.addCardWrapSelectStatus = document.createElement('div');
    this.addCardSelectStatus = document.createElement('select');
    this.addCardSelectStatusOpt1 = document.createElement('option');
    this.addCardSelectStatusOpt2 = document.createElement('option');
    this.addCardSelectStatusLabel = document.createElement('label');
    this.addCardSelectStatusFB = document.createElement('div');

  }

  createElements() {
    super.createElements();
    this.addCardForm.className = 'row g-3 needs-validation';
    this.addCardForm.setAttribute('novalidate', '');
    this.addCardFormTitle.className = 'h3';
    this.addCardFormTitle.setAttribute('style', 'text-align:center');
    this.addCardFormTitle.innerText = 'Please edit a visit';
    this.addCardForm.prepend(this.addCardFormTitle);
    this.addCardWrapSelectDoctor.className = 'form-floating mb-3';
    this.addCardSelectDoctor.className = 'form-select col-12';
    this.addCardSelectDoctor.setAttribute('id', 'floatingSelectDoctor');
    this.addCardSelectDoctor.setAttribute('aria-label', 'Floating label select example');
    this.addCardSelectDoctor.setAttribute('aria-describedby', 'validationDoctorFeedback');
    this.addCardSelectDoctor.setAttribute('required', '');
    this.addCardSelectDoctorOpt1.setAttribute('selected', '');
    this.addCardSelectDoctorOpt1.setAttribute('disabled', '');
    this.addCardSelectDoctorOpt1.setAttribute('value', '');
    this.addCardSelectDoctorOpt1.innerText = 'Open to choose a doctor';
    this.addCardSelectDoctorOpt2.setAttribute('value', 'Cardiologist');
    this.addCardSelectDoctorOpt2.innerText = 'Cardiologist';
    this.addCardSelectDoctorOpt3.setAttribute('value', 'Dentist');
    this.addCardSelectDoctorOpt3.innerText = 'Dentist';
    this.addCardSelectDoctorOpt4.setAttribute('value', 'Therapist');
    this.addCardSelectDoctorOpt4.innerText = 'Therapist';
    this.addCardSelectDoctorLabel.setAttribute('for', 'floatingSelectDoctor');
    this.addCardSelectDoctorLabel.innerText = 'Please choose a doctor';
    this.addCardSelectDoctorFB.className = 'invalid-feedback';
    this.addCardSelectDoctorFB.setAttribute('id', 'validationDoctorFeedback');
    this.addCardSelectDoctorFB.innerText = 'Please choose a doctor';
    this.addCardSelectDoctor.append(this.addCardSelectDoctorOpt1);
    this.addCardSelectDoctor.append(this.addCardSelectDoctorOpt2);
    this.addCardSelectDoctor.append(this.addCardSelectDoctorOpt3);
    this.addCardSelectDoctor.append(this.addCardSelectDoctorOpt4);
    this.addCardWrapSelectDoctor.append(this.addCardSelectDoctor);
    this.addCardWrapSelectDoctor.append(this.addCardSelectDoctorLabel);
    this.addCardWrapSelectDoctor.append(this.addCardSelectDoctorFB);
    this.addCardForm.append(this.addCardWrapSelectDoctor);

    this.addCardSelectDoctor.addEventListener('change', () => {

      this.addCardWrapPurpose.className = 'form-floating col-md-6';
      this.addCardPurposeText.className = 'form-control';
      this.addCardPurposeText.setAttribute('id', 'floatingVisitPurpose');
      this.addCardPurposeText.setAttribute('type', 'text');
      this.addCardPurposeText.setAttribute('aria-describedby', 'floatingVisitPurposeFB');
      this.addCardPurposeText.setAttribute('required', '');
      this.addCardPurposeLabel.setAttribute('for', 'floatingVisitPurpose');
      this.addCardPurposeLabel.innerText = 'Visit purpose';
      this.addCardPurposeFB.className = 'invalid-feedback';
      this.addCardPurposeFB.setAttribute('id', 'floatingVisitPurposeFB');
      this.addCardPurposeFB.innerText = 'Purpose is required.';
      this.addCardWrapPurpose.append(this.addCardPurposeText);
      this.addCardWrapPurpose.append(this.addCardPurposeLabel);
      this.addCardWrapPurpose.append(this.addCardPurposeFB);
      this.addCardForm.append(this.addCardWrapPurpose);

      this.addCardWrapDescr.className = 'form-floating col-md-6';
      this.addCardDescrText.className = 'form-control';
      this.addCardDescrText.setAttribute('id', 'floatingDescription');
      this.addCardDescrText.setAttribute('type', 'text');
      this.addCardDescrText.setAttribute('aria-describedby', 'floatingVisitDescrFB');
      this.addCardDescrText.setAttribute('required', '');
      this.addCardDescrLabel.setAttribute('for', 'floatingDescription');
      this.addCardDescrLabel.innerText = 'Description';
      this.addCardDescrFB.className = 'invalid-feedback';
      this.addCardDescrFB.setAttribute('id', 'floatingVisitDescrFB');
      this.addCardDescrFB.innerText = 'Description is required.';
      this.addCardWrapDescr.append(this.addCardDescrText);
      this.addCardWrapDescr.append(this.addCardDescrLabel);
      this.addCardWrapDescr.append(this.addCardDescrFB);
      this.addCardForm.append(this.addCardWrapDescr);

      this.addCardWrapSelectUrgency.className = 'form-floating col-12';
      this.addCardSelectUrgency.className = 'form-select';
      this.addCardSelectUrgency.setAttribute('id', 'floatingSelectUrgency');
      this.addCardSelectUrgency.setAttribute('aria-label', 'Floating label select example');
      this.addCardSelectUrgency.setAttribute('aria-describedby', 'validationUrgencyFeedback');
      this.addCardSelectUrgency.setAttribute('required', '');
      this.addCardSelectUrgencyOpt1.setAttribute('selected', '');
      this.addCardSelectUrgencyOpt1.setAttribute('disabled', '');
      this.addCardSelectUrgencyOpt1.setAttribute('value', '');
      this.addCardSelectUrgencyOpt1.innerText = 'Urgency';
      this.addCardSelectUrgencyOpt2.setAttribute('value', 'Low');
      this.addCardSelectUrgencyOpt2.innerText = 'Low';
      this.addCardSelectUrgencyOpt3.setAttribute('value', 'Medium');
      this.addCardSelectUrgencyOpt3.innerText = 'Medium';
      this.addCardSelectUrgencyOpt4.setAttribute('value', 'High');
      this.addCardSelectUrgencyOpt4.innerText = 'High';
      this.addCardSelectUrgencyLabel.setAttribute('for', 'floatingSelectUrgency');
      this.addCardSelectUrgencyLabel.innerText = 'Please, choose urgency';
      this.addCardSelectUrgencyFB.className = 'invalid-feedback';
      this.addCardSelectUrgencyFB.setAttribute('id', 'validationUrgencyFeedback');
      this.addCardSelectUrgencyFB.innerText = 'Urgency is required.';
      this.addCardSelectUrgency.append(this.addCardSelectUrgencyOpt1);
      this.addCardSelectUrgency.append(this.addCardSelectUrgencyOpt2);
      this.addCardSelectUrgency.append(this.addCardSelectUrgencyOpt3);
      this.addCardSelectUrgency.append(this.addCardSelectUrgencyOpt4);
      this.addCardWrapSelectUrgency.append(this.addCardSelectUrgency);
      this.addCardWrapSelectUrgency.append(this.addCardSelectUrgencyLabel);
      this.addCardWrapSelectUrgency.append(this.addCardSelectUrgencyFB);
      this.addCardForm.append(this.addCardWrapSelectUrgency);

      this.addCardWrapName.className = 'form-floating col-12';
      this.addCardNameText.className = 'form-control';
      this.addCardNameText.setAttribute('id', 'floatingFullName');
      this.addCardNameText.setAttribute('type', 'text');
      this.addCardNameText.setAttribute('aria-describedby', 'floatingFullNameFB');
      this.addCardNameText.setAttribute('required', '');
      this.addCardNameLabel.setAttribute('for', 'floatingFullName');
      this.addCardNameLabel.innerText = 'Full name';
      this.addCardNameFB.className = 'invalid-feedback';
      this.addCardNameFB.setAttribute('id', 'floatingFullNameFB');
      this.addCardNameFB.innerText = 'Full name is required';
      this.addCardWrapName.append(this.addCardNameText);
      this.addCardWrapName.append(this.addCardNameLabel);
      this.addCardWrapName.append(this.addCardNameFB);
      this.addCardForm.append(this.addCardWrapName);

      if (this.addCardSelectDoctor.value === 'Cardiologist') {

        this.addCardWrapBP.className = 'form-floating col-md-4';
        this.addCardBPText.className = 'form-control';
        this.addCardBPText.setAttribute('id', 'floatingBP');
        this.addCardBPText.setAttribute('type', 'number');
        this.addCardBPText.setAttribute('aria-describedby', 'floatingBPFB');
        this.addCardBPText.setAttribute('required', '');
        this.addCardBPLabel.setAttribute('for', 'floatingBP');
        this.addCardBPLabel.innerText = 'B. Pressure';
        this.addCardBPFB.className = 'invalid-feedback';
        this.addCardBPFB.setAttribute('id', 'floatingBPFB');
        this.addCardBPFB.innerText = 'Blood pressure is required.';
        this.addCardWrapBP.append(this.addCardBPText);
        this.addCardWrapBP.append(this.addCardBPLabel);
        this.addCardWrapBP.append(this.addCardBPFB);
        this.addCardForm.append(this.addCardWrapBP);

        this.addCardWrapBMI.className = 'form-floating col-md-4';
        this.addCardBMIText.className = 'form-control';
        this.addCardBMIText.setAttribute('id', 'floatingBMI');
        this.addCardBMIText.setAttribute('type', 'number');
        this.addCardBMIText.setAttribute('aria-describedby', 'floatingBMIFB');
        this.addCardBMIText.setAttribute('required', '');
        this.addCardBMILabel.setAttribute('for', 'floatingBMI');
        this.addCardBMILabel.innerText = 'BMI';
        this.addCardBMIFB.className = 'invalid-feedback';
        this.addCardBMIFB.setAttribute('id', 'floatingBMIFB');
        this.addCardBMIFB.innerText = 'BMI is required.';
        this.addCardWrapBMI.append(this.addCardBMIText);
        this.addCardWrapBMI.append(this.addCardBMILabel);
        this.addCardWrapBMI.append(this.addCardBMIFB);
        this.addCardForm.append(this.addCardWrapBMI);

        this.addCardWrapCardioAge.className = 'form-floating col-md-4';
        this.addCardCardioAgeText.className = 'form-control';
        this.addCardCardioAgeText.setAttribute('id', 'floatingCardioAge');
        this.addCardCardioAgeText.setAttribute('type', 'number');
        this.addCardCardioAgeText.setAttribute('aria-describedby', 'floatingCardioAgeFB');
        this.addCardCardioAgeText.setAttribute('required', '');
        this.addCardCardioAgeLabel.setAttribute('for', 'floatingCardioAge');
        this.addCardCardioAgeLabel.innerText = 'Age';
        this.addCardCardioAgeFB.className = 'invalid-feedback';
        this.addCardCardioAgeFB.setAttribute('id', 'floatingCardioAgeFB');
        this.addCardCardioAgeFB.innerText = 'Age is required.';
        this.addCardWrapCardioAge.append(this.addCardCardioAgeText);
        this.addCardWrapCardioAge.append(this.addCardCardioAgeLabel);
        this.addCardWrapCardioAge.append(this.addCardCardioAgeFB);
        this.addCardForm.append(this.addCardWrapCardioAge);

        this.addCardWrapCardioHistory.className = 'form-floating col-12';
        this.addCardCardioHistoryText.className = 'form-control';
        this.addCardCardioHistoryText.setAttribute('id', 'floatingCardioHistory');
        this.addCardCardioHistoryText.setAttribute('type', 'text');
        this.addCardCardioHistoryText.setAttribute('aria-describedby', 'floatingCardioHistoryFB');
        this.addCardCardioHistoryText.setAttribute('required', '');
        this.addCardCardioHistoryLabel.setAttribute('for', 'floatingCardioHistory');
        this.addCardCardioHistoryLabel.innerText = 'Cardiovascular history';
        this.addCardCardioHistoryFB.className = 'invalid-feedback';
        this.addCardCardioHistoryFB.setAttribute('id', 'floatingCardioHistoryFB');
        this.addCardCardioHistoryFB.innerText = 'Cardiovascular history is required.';
        this.addCardWrapCardioHistory.append(this.addCardCardioHistoryText);
        this.addCardWrapCardioHistory.append(this.addCardCardioHistoryLabel);
        this.addCardWrapCardioHistory.append(this.addCardCardioHistoryFB);
        this.addCardForm.append(this.addCardWrapCardioHistory);

        this.addCardWrapLastVisit.remove();
        this.addCardWrapAge.remove();

      } else if (this.addCardSelectDoctor.value === 'Dentist') {

        this.addCardWrapLastVisit.className = 'form-floating col-md-6';
        this.addCardLastVisitText.className = 'form-control';
        this.addCardLastVisitText.setAttribute('id', 'floatingLastVisit');
        this.addCardLastVisitText.setAttribute('type', 'text');
        this.addCardLastVisitText.setAttribute('aria-describedby', 'floatingLastVisitFB');
        this.addCardLastVisitText.setAttribute('required', '');
        this.addCardLastVisitLabel.setAttribute('for', 'floatingLastVisit');
        this.addCardLastVisitLabel.innerText = 'Last visit';
        this.addCardLastVisitFB.className = 'invalid-feedback';
        this.addCardLastVisitFB.setAttribute('id', 'floatingLastVisitFB');
        this.addCardLastVisitFB.innerText = 'Last visit is required.';
        this.addCardWrapLastVisit.append(this.addCardLastVisitText);
        this.addCardWrapLastVisit.append(this.addCardLastVisitLabel);
        this.addCardWrapLastVisit.append(this.addCardLastVisitFB);
        this.addCardForm.append(this.addCardWrapLastVisit);

        this.addCardWrapBP.remove();
        this.addCardWrapBMI.remove();
        this.addCardWrapCardioHistory.remove();
        this.addCardWrapCardioAge.remove();
        this.addCardWrapAge.remove();

      } else if (this.addCardSelectDoctor.value === 'Therapist') {

        this.addCardWrapAge.className = 'form-floating col-md-6';
        this.addCardAgeText.className = 'form-control';
        this.addCardAgeText.setAttribute('id', 'floatingTherapAge');
        this.addCardAgeText.setAttribute('type', 'number');
        this.addCardAgeText.setAttribute('aria-describedby', 'floatingTherapAgeFB');
        this.addCardAgeText.setAttribute('required', '');
        this.addCardAgeLabel.setAttribute('for', 'floatingTherapAge');
        this.addCardAgeLabel.innerText = 'Age';
        this.addCardAgeFB.className = 'invalid-feedback';
        this.addCardAgeFB.setAttribute('id', 'floatingTherapAgeFB');
        this.addCardAgeFB.innerText = 'Age is required.';
        this.addCardWrapAge.append(this.addCardAgeText);
        this.addCardWrapAge.append(this.addCardAgeLabel);
        this.addCardWrapAge.append(this.addCardAgeFB);
        this.addCardForm.append(this.addCardWrapAge);

        this.addCardWrapBP.remove();
        this.addCardWrapBMI.remove();
        this.addCardWrapCardioHistory.remove();
        this.addCardWrapCardioAge.remove();
        this.addCardWrapLastVisit.remove();
      }

    });

    this.addCardWrapSelectStatus.className = 'form-floating mb-3';
    this.addCardSelectStatus.className = 'form-select';
    this.addCardSelectStatus.setAttribute('id', 'floatingSelectStatus');
    this.addCardSelectStatus.setAttribute('aria-label', 'Floating label select example');
    this.addCardSelectStatus.setAttribute('aria-describedby', 'validationStatusFeedback');
    this.addCardSelectStatus.setAttribute('required', '');
    this.addCardSelectStatusOpt1.setAttribute('value', 'Opened');
    this.addCardSelectStatusOpt1.innerText = 'Opened';
    this.addCardSelectStatusOpt2.setAttribute('value', 'Closed');
    this.addCardSelectStatusOpt2.innerText = 'Closed';
    this.addCardSelectStatusLabel.setAttribute('for', 'floatingSelectStatus');
    this.addCardSelectStatusLabel.innerText = 'Please choose status';
    this.addCardSelectStatusFB.className = 'invalid-feedback';
    this.addCardSelectStatusFB.setAttribute('id', 'validationStatusFeedback');
    this.addCardSelectStatusFB.innerText = 'Status is required.';
    this.addCardSelectStatus.append(this.addCardSelectStatusOpt1);
    this.addCardSelectStatus.append(this.addCardSelectStatusOpt2);
    this.addCardWrapSelectStatus.append(this.addCardSelectStatus);
    this.addCardWrapSelectStatus.append(this.addCardSelectStatusLabel);
    this.addCardWrapSelectStatus.append(this.addCardSelectStatusFB);
    this.addCardForm.append(this.addCardWrapSelectStatus);

    this.addCardSelectDoctor.value = `${this.doctor}`;
    this.addCardSelectDoctor.setAttribute('selected', '');
    this.addCardSelectDoctor.dispatchEvent(new Event('change'));

    this.addCardPurposeText.value = `${this.purpose}`;
    this.addCardDescrText.value = `${this.description}`;
    this.addCardNameText.value = `${this.name}`;

    this.addCardSelectStatus.value = `${this.cardStatus}`;
    this.addCardSelectStatus.setAttribute('selected', '');

    this.addCardSelectUrgency.value = `${this.urgency}`;
    this.addCardSelectUrgency.setAttribute('selected', '');


    if (this.doctor === 'Cardiologist') {
      this.addCardBPText.value = `${this.pressure}`;
      this.addCardBMIText.value = `${this.bmi}`;
      this.addCardCardioAgeText.value = `${this.cardioAge}`;
      this.addCardCardioHistoryText.value = `${this.history}`;


    } else if (this.doctor === 'Dentist') {
      this.addCardLastVisitText.value = `${this.lastVisit}`;

    } else if (this.doctor === 'Therapist') {
      this.addCardAgeText.value = `${this.therapAge}`;
    }

    this.modalConfirmBttn.innerText = "Confirm changes";
    this.modalBody.append(this.addCardForm);

    this.addCardFormSubmitWrap.setAttribute('style', 'margin:0px');
    this.addCardFormSubmitBtn.className = 'btn btn-primary';
    this.addCardFormSubmitBtn.setAttribute('style', 'display:none');
    this.addCardFormSubmitBtn.setAttribute('type', 'submit');
    this.addCardFormSubmitWrap.append(this.addCardFormSubmitBtn);
    this.addCardForm.prepend(this.addCardFormSubmitWrap);


    this.addCardForm.addEventListener('submit', (e) => {
      e.preventDefault();
    })

    this.modalConfirmBttn.addEventListener("click", () => {
      this.addCardFormSubmitBtn.click();
      if(this.addCardForm.checkValidity()) {
        this.editCardHandler();
        this.close();
      }
    });


  }
}

export default EditCardModal;
