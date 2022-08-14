import Modal from "./Modal.js";

class SignInModal extends Modal {
  constructor(formSignInBttnHandler) {
    super();
    this.formSignInBttnHandler = formSignInBttnHandler;
    this.signInForm = document.createElement("form");
    this.signInFormFloatEmail = document.createElement("div");
    this.signInFormFloatPass = document.createElement("div");
    this.signInFormInputEmail = document.createElement("input");
    this.signInFormInputPass = document.createElement("input");
  }

  createElements() {
    super.createElements();
    this.modalConfirmBttn.innerText = "Sign in";
    this.signInForm.classList.add("text-center");
    this.signInFormFloatEmail.classList.add("form-floating", "mb-3");
    this.signInFormFloatPass.classList.add("form-floating", "mb-4");
    this.signInFormInputEmail.classList.add("form-control", "signin-modal__form-input");
    this.signInFormInputEmail.name = "email";
    this.signInFormInputEmail.type = "email";
    this.signInFormInputEmail.id = "floatingInput";
    this.signInFormInputEmail.placeholder = "name@example.com";
    this.signInFormInputPass.classList.add("form-control", "signin-modal__form-input");
    this.signInFormInputPass.name = "password";
    this.signInFormInputPass.type = "password";
    this.signInFormInputPass.id = "floatingPassword";
    this.signInFormInputPass.placeholder = "Password";

    this.signInFormFloatEmail.append(this.signInFormInputEmail);
    this.signInFormFloatEmail.insertAdjacentHTML("beforeend", `<label for="floatingInput">Email address</label>`);
    this.signInFormFloatPass.append(this.signInFormInputPass);
    this.signInFormFloatPass.insertAdjacentHTML(
      "beforeend",
      `<label for="floatingPassword">Password</label><p class="form-text text-danger d-none signin-form__error-text">Incorrect username or password. Please try again.</p>`
    );

    this.signInForm.insertAdjacentHTML("beforeend", `<h1 class="h3 mb-3">Please sign in</h1>`);
    this.signInForm.append(this.signInFormFloatEmail, this.signInFormFloatPass);
    this.modalBody.append(this.signInForm);

    this.modalConfirmBttn.addEventListener("click", this.formSignInBttnHandler.bind(this));
  }
}

export default SignInModal;
