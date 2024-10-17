import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import { heroes } from "../../base-pruebas/data/heroes";

describe("Vamos a Hacer Pruebas sobre Fichero 08-Import y Exportaciones", () => {
  test("Empezamos con las Primera Prueba", () => {
    expect(1).toBe(1);
  });
  test("Vamos a Hacer Prueba para getHeroeById", () => {
    // Aquí es donde vamos a hacer las pruebas para la función getHeroeById
    // console.log(getHeroeById(2));
    // Aquí debería devolver un objeto con el héroe con id 2
    const id = 2;
    const HeroesbyId = getHeroeById(id);
    console.log(HeroesbyId);
    expect(typeof HeroesbyId.id).toBe("number");
    expect(typeof HeroesbyId.name).toBe("string");
    expect(typeof HeroesbyId.owner).toBe("string");
    expect(HeroesbyId).toEqual({ id: 2, name: "Spiderman", owner: "Marvel" });
    // expect(getHeroeById(2)).toEqual({... });
  });
  test("getHeroeById devuelve undefined si no existe el héroe", () => {
    // Aquí es donde vamos a hacer las pruebas para la función getHeroeById
    // console.log(getHeroeById(2));
    // Aquí debería devolver un objeto con el héroe con id 2
    const id = 100;
    const HeroesbyId = getHeroeById(id);
    console.log(HeroesbyId);
    expect(typeof HeroesbyId).toBe("undefined");

    // Con esta forma de ver hacer la comprobación, nos aseguramos de que el resultado de la función es null, undefined o False.
    expect(HeroesbyId).toBeFalsy();

    // expect(getHeroeById(2)).toEqual({... });
  });

  test("Vamos a Hacer Prueba para getHerosbyOwnwe", () => {
    // Aquí es donde vamos a hacer las pruebas para la función getHeroesByOwner
    // console.log(getHeroesByOwner('Marvel'));
    // Aquí debería devolver un arreglo con al menos un héroe de Marvel
    const arrayHeroesbyOwnwerMarvel = getHeroesByOwner("Marvel");
    console.log(arrayHeroesbyOwnwerMarvel);
    expect(typeof arrayHeroesbyOwnwerMarvel[0].id).toBe("number");
    expect(typeof arrayHeroesbyOwnwerMarvel[0].name).toBe("string");
    expect(typeof arrayHeroesbyOwnwerMarvel[0].owner).toBe("string");
    expect(arrayHeroesbyOwnwerMarvel.length).toBe(2);
    expect(arrayHeroesbyOwnwerMarvel).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
    const owner = "DC";
    const arrayHeroesbyOwnwerDC = getHeroesByOwner(owner);
    console.log(arrayHeroesbyOwnwerDC);
    expect(typeof arrayHeroesbyOwnwerDC[0].id).toBe("number");
    expect(typeof arrayHeroesbyOwnwerDC[0].name).toBe("string");
    expect(typeof arrayHeroesbyOwnwerDC[0].owner).toBe("string");
    expect(arrayHeroesbyOwnwerDC.length).toBe(3);
    expect(arrayHeroesbyOwnwerDC).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    expect(arrayHeroesbyOwnwerDC).toEqual(
      heroes.filter((heroe) => heroe.owner === owner)
    );
  });
});
