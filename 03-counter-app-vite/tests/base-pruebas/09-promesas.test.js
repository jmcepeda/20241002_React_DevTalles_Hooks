import getHeroeByIdAsync from "../../base-pruebas/09-promesas";

describe("Vamos a Probar Fichero 09-promesas. Para trabajar con funciones asincronas, que devuelven Promesas", () => {
  // Por defecto en Jest todas las Pruebas son Sincrónas
  // Es por esto que las funciones asíncronas hay que tratarlas de la misma forma, por lo que debemos usar async (Hace que la Función me devuelva una Promesa) y await obliga a no continuar con el código hasta que no termine esa función asíncrona
  test("Vamos a probar que la función Asincróna getHeroeByIdAsync Funciona Correctamente", (done) => {
    const id = 2;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      });
      done();
    });
  });

  test("Vamos a probar que la función Asincróna getHeroeByIdAsync Funciona Correctamente bien también cuando no hay resultado", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      console.log(error);
      //   expect(error).toEqual();
      done();
    });
  });
  // console.log(heroe);

  //  Para hacer pruebas en funciones asíncronas con jest es mucho mejor usar async await que el "done", pero "done" es una alternativa que está bien conocer.
  //   test("Vamos a probar que la función Asincróna getHeroeByIdAsync Funciona Correctamente", async () => {
  //     const id = 2;
  //     const heroe = await getHeroeByIdAsync(id);
  //     console.log(heroe);
});
