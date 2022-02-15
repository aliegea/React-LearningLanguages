import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const setup = () => render(<App />);

test("renders react app title", () => {
  setup();
  const title = screen.getByText(/Let's Practice/i);
  expect(title).toBeInTheDocument();
});

test("should render the random words in button div", () => {
  setup();
  const button = screen.getByText(/teeth/i);
  expect(button).toBeInTheDocument();
});
test("should display reset button", () => {
  setup();
  const resset = screen.getByRole("button");
  expect(resset).toBeInTheDocument();
});
test("shoud display a word onclick", () => {
  setup();
  const button = screen.getByText(/teeth/i);
  fireEvent.click(button, { target: { innerText: "teeth" } });
});
