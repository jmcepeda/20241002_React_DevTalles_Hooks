import { getImagen } from "../../base-pruebas/11-async-await";

describe("Ahora si que vamos a probar jest con funciones asincronas cpn el mejor método ASYNC AWAIT", () => {
  console.log("Avanzando");
  test("Haciendo Pruebas sobre Función Asíncrona", async () => {
    console.log("Pruebas sobre Función Asíncrona");
    const url = await getImagen();
    console.log("Esta es la URL de la función test con jest: ", url);
    expect(typeof url).toBe("string");
  });
});
