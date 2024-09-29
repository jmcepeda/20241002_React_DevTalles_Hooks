// Promises

//resolve: Es el resultado positivo del callback
// reject: Es el resultado negativo del callback

import { getHeroebyId, getHerosbyOwners2 } from "./bases/08-import-export";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numRandom = Math.random() * 10;
    let heroe = {};
    console.log(numRandom);
    if (numRandom > 5) {
      heroe = getHeroebyId(2);
      resolve(heroe);
      console.log("La promesa se cumplió");
    } else {
      // reject("La promesa falló");
      const heroesOwner = getHerosbyOwners2("DC");
      reject(heroesOwner);
    }
  }, 1000);
});

// console.log(promesa);

// Hay Tres métodos muy importante

// Then: Se ejecuta si la promesa se resolvión de forma positiva

// Catch: Se ejecuta si la promesa se resolvión de forma negativa

// Finally: Se Ejecuta siempre independientemente de si la promesa se resolvión de forma positiva o de forma negativa

promesa
  .then((heroe) => {
    console.log("Then de la promesa");
    console.log(heroe);
  })
  .catch((err) => {
    console.warn("Catch de la promesa");
    console.warn(
      "No se Localizó el Heroe Buscado, pero por Contrato Encontramos los Heroes de 'DC': "
    );
    console.log(err);
  });

const getHeroebyIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroebyId(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject(`No se encontró el Heroe con ID: ${id}`);
      }
    }, 900);
  });
};

getHeroebyIdAsync(24)
  .then((heroe) => {
    console.log("Se encontró el HEROE");
    console.log(heroe);
  })
  .catch((err) => {
    console.warn("NO SE ENCONTRÓ EL HÉROE");
    console.warn(
      "No se Localizó el Heroe Buscado, pero por Contrato Encontramos los Heroes de 'DC': "
    );
    console.log(err);
  });

getHeroebyIdAsync(15)
  .then((heroe) => {
    console.log("Se encontró el HEROE en la Segunda Función");
    console.log(heroe);
  })
  .catch(console.error);
