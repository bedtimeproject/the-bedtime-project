// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// The Fireflies component contains Canvas, which we want to mock in Jest tests
jest.mock("./Components/Background/Fireflies/Fireflies", () => {
  return "div";
});
