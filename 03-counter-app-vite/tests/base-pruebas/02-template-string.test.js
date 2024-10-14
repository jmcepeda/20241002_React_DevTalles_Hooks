// eslint-env jest
import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Test Template-String", () => {
  test("la funcion getSaludo debe devolver 'Hola Fernando'", () => {
    // Aquí puedes implementar las pruebas para la función getSaludo
    const nombre = "Fernando";
    expect(getSaludo(nombre)).toBe(`Hola ${nombre}`);
  });
});
