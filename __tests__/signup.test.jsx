/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Login from "../pages/signup";

it("Pagina de SignUP exite !!", () => {
  render(<Signup />);
  expect(screen.getByRole("heading")).toHaveTextContent("Pagina de Cadastro");
  expect(screen.getByRole("button")).toHaveTextContent("Cadastra-se");

});