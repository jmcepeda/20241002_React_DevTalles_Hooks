import {
  getImagen,
  getImagenConAPIKey,
  getImagenSinAPIKey,
} from "../../base-pruebas/11-async-await";

describe("Ahora si que vamos a probar jest con funciones asincronas cpn el mejor método ASYNC AWAIT", () => {
  console.log("Avanzando");
  test("Haciendo Pruebas sobre Función Asíncrona que si funciona", async () => {
    console.log("Pruebas sobre Función Asíncrona");
    const url = await getImagenConAPIKey();
    console.log("Esta es la URL de la función test con jest: ", url);
    expect(typeof url).toBe("string");
  });

  test("Haciendo Pruebas sobre Función Asíncrona que no funciona", async () => {
    console.log("Pruebas sobre Función Asíncrona");
    const error = await getImagenSinAPIKey();
    // console.log("Esta es la URL de la función test con jest: ", url);
    expect(error).toBe("No se encontró la imagen");
  });
});
