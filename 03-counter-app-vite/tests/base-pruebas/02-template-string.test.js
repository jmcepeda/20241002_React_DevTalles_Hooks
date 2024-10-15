// eslint-env jest
import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Test Template-String", () => {
  test("la funcion getSaludo debe devolver 'Hola Fernando'", () => {
    // Aquí puedes implementar las pruebas para la función getSaludo
    const nombre = "Fernando";
    const result = getSaludo(nombre);
    // console.log(result);
    expect(result).toBe(`Hola ${nombre}`);
  });
});
