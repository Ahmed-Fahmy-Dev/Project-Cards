const showHideTxtAndBttns = (cardsArray) => {
  if (cardsArray.length === 0) {
    document.querySelector(".nocards-text").classList.remove("d-none");
  } else document.querySelector(".nocards-text").classList.add("d-none");

  document.querySelector(".signin-text").classList.add("d-none");
  document.querySelector(".navbar__signin-bttn").classList.add("d-none");
  document.querySelector(".navbar__add-bttn").classList.remove("d-none");
  document.querySelector(".navbar__signout-bttn").classList.remove("d-none");
};

export default showHideTxtAndBttns;
