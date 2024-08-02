import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders property listings header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Property Listings/i);
  expect(headerElement).toBeInTheDocument();
});
