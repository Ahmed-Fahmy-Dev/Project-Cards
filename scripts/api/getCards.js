import instance from "./instance.js";
/**
 * @description GETS cards array from server and writes it to the local storage
 * @returns array of card objects
 */

const getCards = async () => {
  try {
    const { data, status } = await instance.get("");
    if (status === 200) {
      localStorage.setItem("cards", JSON.stringify(data));
      return data;
    }
  } catch ({ response: { status, data } }) {
    if (status === 401) {
      console.warn(`Error: ${status}, ${data}`);
    }
  }
};

export default getCards;
