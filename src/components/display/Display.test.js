// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("renders learn react link", () => {
  const { getByText } = render(<Display />);
  const linkElement = getByText(/Open/i);
  expect(linkElement).toBeInTheDocument();
});
