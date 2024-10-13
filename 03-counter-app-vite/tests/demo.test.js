// import { test } from "jest"; // Assuming jest is installed and imported
// eslint-env jest

describe("Pruebas en <DemoComponent/>", () => {
  test("Prueba usando jest 01", () => {
    // 1. Inicialización - Arrange - (Organizar/Inicializa) => inicializa los objetos y establece los valores de los datos que vamos a utilizar en el Test que lo contiene.
    const message1 = "Hola Mundo";
    // 2. Estímulo - Act (Actuar) => realiza la llamada al método a probar con los parámetros preparados para tal fin.
    const message2 = message1.trim();
    // 3. Observación (expect) Assert (Confirmar/Comprobar) => comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.
    // Ahora pongo la condición para que se pase la prueba
    // Como no hay espación ni delante ni detrás de "Hola Mundo", message1 debe ser igual a message2

    // En este caso, el método expect(message1).toBe(message2) espera que message1 sea igual a message2, pero si no, lanzará una excepción con un mensaje de error
    expect(message1).toBe(message2);
  });

  test("Prueba de División", () => {
    const a = 1;
    if (a === 0) {
      throw new Error("No se puede DIVIDIR entre Cero");
    } else {
      console.log("La DIVISIÓN ha ido BIEN");
    }
  });

  test("Prueba de  Multiplicacion", () => {
    return new Promise((resolve, reject) => {
      const a = 0;
      if (a === 0) {
        resolve("La Multiplicación ha ido bien");
      } else {
        reject(new Error("No se pueden MULTIPLICAR esos números"));
      }
    });
  });

  test("Prueba de Suma", async () => {
    const a = 0;
    if (a === 0) {
      return "La prueba de SUMA ha ido bien";
    } else {
      throw new Error("No se puede SUMAR número tan Grandes");
    }
  });
});
