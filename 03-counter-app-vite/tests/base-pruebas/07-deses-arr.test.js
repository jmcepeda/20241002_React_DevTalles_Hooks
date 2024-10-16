import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Vamos a trabajar sobre las funciones del archivo 07-deses en el que se desectructuran Arreglos", () => {
  test("Vamos a Desectructurar Arreglos", () => {
    const [letras, numeros] = retornaArreglo();
    console.log(numeros);
    expect(letras).toBe("ABC");
    expect(numeros).toBe(123);
    // console.log(typeof numeros);
    // console.log(typeof letras);
    expect(typeof numeros).toBe("number");
    expect(typeof letras).toBe("string");
    expect(typeof letras).toEqual(expect.any(String));
  });
});
