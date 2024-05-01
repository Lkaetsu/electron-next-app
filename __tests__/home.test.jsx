/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "../pages";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  const loginLink = document.getElementById('Login card');
  expect(loginLink).toHaveAttribute("href", "http://localhost:3000/login");
  

});
