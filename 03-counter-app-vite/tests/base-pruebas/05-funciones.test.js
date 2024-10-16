import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Esta es la Prueba para el Fichero 05-funciones", () => {
  test("Debería Devolverme un Usuario, con formato de objeto", () => {
    // Aquí puedes escribir tu código de prueba
    const user = getUser();
    const userRef = { uid: "ABC123", username: "El_Papi1502" };
    // console.log(user);
    // Cuando queremos comparar objetos, tenemos que usar .toEqual en lugar de .toBe
    // En Javascript para valores primitivos, si se comprara su valor, pero los objetos, se compara su espcio en memoria (Por eso aunque tengan el mismo valor si los comparamos como elementos básico el resultado será diferente, pues diferentes objetos apuntan a diferentes espacios en memoria, aunque almacenen el mismo valor), es por este que no puede utilizarse .toBe para comparar objetos. Debe Utilizarse .toEqual
    expect(user).toEqual(userRef);
  });

  test("Vamos Ahora a Probar la Función getUsuarioActivo", () => {
    const name = "José Manuel";
    const userActivo = getUsuarioActivo(name);
    const userActivoRef = { uid: "ABC567", username: name };
    expect(userActivo).toEqual(userActivoRef);
  });
});
