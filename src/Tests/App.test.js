import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

it("Should Render app", () => {
  render(<App />);
  const element = screen.getByTestId("check");
  console.log(element);
  expect(element).toBeInTheDocument();
});
