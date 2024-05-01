/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Login from "../pages/login";

it("Pagina de Login existe !!", () => {
  render(<Login />);
  expect(screen.getByRole("heading")).toHaveTextContent("Pagina de Login");
  expect(screen.getByRole("button")).toHaveTextContent("Login");

});
