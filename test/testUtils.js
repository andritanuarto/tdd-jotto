/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component (or null if `success prop is)
*/

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}