// Test away// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("renders learn react link", () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/Unlocked/i);
  expect(linkElement).toBeInTheDocument();
});
