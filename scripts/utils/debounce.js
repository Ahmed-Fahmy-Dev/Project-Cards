/**
 * @param fn {function}
 * @param timeout {number} in ms
 * @return {function}
 */
const debounce = (fn, timeout) => {
  let timeoutId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(context, args);
    }, timeout);
  };
};

export default debounce;
