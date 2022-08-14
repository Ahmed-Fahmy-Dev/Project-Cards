const showHideFilter = (cards) => {
  if (cards.length !== 0) {
    document.querySelector(".filter").classList.remove("d-none");
  } else {
    document.querySelector(".filter").classList.add("d-none");
  }
};

export default showHideFilter;
