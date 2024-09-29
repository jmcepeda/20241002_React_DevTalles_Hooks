import { getHeroebyId } from "./bases/08-import-export";
const getImagePromesa = () => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      // if (randomNumber % 2 === 0) {
      if (randomNumber > 5) {
        resolve(`https://picsum.photos/id/${randomNumber}/500`);
      } else {
        reject(
          new Error(`No se encontró una imagen con el número ${randomNumber}`)
        );
      }
    }, 5);
  });
  return promesa;
};

getImagePromesa()
  .then((url) => {
    const img = document.createElement("img");
    console.log(url);
    img.src = url;
    document.body.append(img);
  })
  .catch((error) => {
    console.error("Error al cargar la imagen", error);
  });

// console.log(getImagePromesa());

// Ahora Vamos a hacer el mismo Ejercicio pero usando async
// Usando la palabra async, consigo que una función me devuelva una promesa

const getImageFunct = (Id) => {
  const heroe = getHeroebyId(Id);
  return heroe;
};

console.log("Heroe con Función Normal", getImageFunct(3));

const getImageAsync = async (Id) => {
  const heroe = getHeroebyId(Id);
  return heroe;
};

console.log("Heroe con Función Async");
getImageAsync(3)
  .then((heroe) => {
    console.log(heroe);
  })
  .catch((error) => {
    console.error("Error al cargar la imagen", error);
  });

// await
// Ahora Despues de ver como se puede conseguir que la respuesta de una Función sea una promesa
// Vamos a ver que es esto del await

// Con await, lo que vamos a conseguir es que podamos escribir código asincrono como si fuera código sincrono, con lo que simplificamos mucho la escritura del Código

// Las Dos con diciones para poder usar await:
//  - Debe usarse en funciones que devuelven una promesa
//  - Debe estar en un bloque de código que está dentro de una función async

const apikey = "qliUqRdzYPcj7pkqNG8NzCVOU0UgyQvz";

const getImageAsyncAwait = async () => {
  // Hay que tener en cuenta que fetch devuelve una promesa por definición
  // await podemos usarlo solo en funciones que devuelven promesas
  // Al poner await le estamos diciendo a la función que espere a que se resuelva la promesa
  // Por tanto al obligar a que se espere a que se cumpla la promesa convertimos el código en Sincrono y podemos olvidarnos del .then .catch y .finally
  // Para poder manjera y gestionar los errores es cesario el uso de try y catch

  try {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?apikey=${apikey}`
    );
    // La función .json() también devuelve una promesa, es por esto que puedo usar await para convertir el código en sincrono.
    const { data } = await resp.json();
    console.log(data.images.original.url);
    const img2 = document.createElement("img");
    img2.src = data.images.original.url;
    document.body.append(img2);
  } catch (error) {
    console.error("Error al cargar la imagen", error);
  }
};

getImageAsyncAwait();

// console.log(peticionasyncawait);
