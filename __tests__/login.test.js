/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Login from "../pages/login";

it("App Router: Works with Server Components", () => {
  render(<Login />);
  expect(screen.getByRole("heading")).toHaveTextContent("Pagina de Login");
  expect(screen.getByRole("button")).toHaveTextContent("Login");

});
