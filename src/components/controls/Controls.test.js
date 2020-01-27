// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Controls from "./Controls";

test("renders learn react link", () => {
  const { getByText } = render(<Controls />);
  const linkElement = getByText(/Close Gate/i);
  expect(linkElement).toBeInTheDocument();
});
