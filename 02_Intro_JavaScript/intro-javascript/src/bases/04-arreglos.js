// Arreglos

const arreglo_v00 = new Array(5);
arreglo_v00.push(5);

console.log("Rabo");

console.log(arreglo_v00.length);
console.log(arreglo_v00);

let arreglo = [];
arreglo.push(1);
arreglo.push(3);
arreglo.push(6);
arreglo.push(7);
arreglo.push(9);

console.log(arreglo);
console.log(`Arreglo: ${arreglo}`);

const arreglo3 = [1, 3, 5, 7, 9];

let arreglo4 = [...arreglo3];

arreglo4.push(44);

console.log(`Arreglo3: ${arreglo3}`);

console.log(`Arreglo4: ${arreglo4}`);

let arreglo5 = [...arreglo3, 101, 201];

arreglo5.push(344);

console.log(`Arreglo3: ${arreglo3}`);

console.log(`Arreglo5: ${arreglo5}`);

let arreglo6 = arreglo4.map((e) => e * 10);

console.log(`Arreglo6: ${arreglo6}`);

let arreglo7 = arreglo4.filter((e) => e < 20);

console.log(`Arreglo6: ${arreglo7}`);
