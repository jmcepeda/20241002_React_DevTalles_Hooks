// Desectructaracion de Arrays

const perDragonBall = ["Goku", "Vegeta", "Picolo"];
console.log(perDragonBall);

console.log(perDragonBall[0]);
console.log(perDragonBall[1]);
console.log(perDragonBall[2]);

const [p1, p2, p3] = perDragonBall;

console.log(p1);
console.log(p2);
console.log(p3);

// Desestructuracion de objetos
const [, , t3] = perDragonBall;

console.log(t3);

const returPerDragonBall = () => {
  return ["ABC", 123];
};

const arr = returPerDragonBall();

console.log(arr[0]);
console.log(arr[1]);

const [letras, numeros] = returPerDragonBall();

console.log(letras);
console.log(numeros);

// Tarea

const nardo = (valor) => {
  return [valor, () => console.log(`Hola '${valor}'`)];
};

const [nombre, setNombre] = nardo("Tronco Rabo");

console.log(nombre);

setNombre();
