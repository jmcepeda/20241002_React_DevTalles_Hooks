// import { test } from "jest"; // Assuming jest is installed and imported
// eslint-env jest

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
