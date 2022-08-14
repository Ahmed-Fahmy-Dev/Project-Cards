const signOutBttnHandler = () => {
  localStorage.clear();
  location.reload();
};

export default signOutBttnHandler;
