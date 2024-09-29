const activo = false;

let nombre = "Juan";
let apellidos = "Perez";
if (!activo) {
} else {
  nombre = "Pedro";
  apellidos = "García";
}

console.log(nombre, " ", apellidos);

// Operador Ternario otra forma de hacer condicionales de forma más sencillo

// operador

activo ? (nombre = "Juan") : (apellidos = "Perez");

// Vamos a ver como hacer todo esto con el Operador Terminario es un sola linea

nombre = activo ? "Juan" : "Pedro";
apellidos = activo ? "Perez" : "García";

// La manera más eficiencia de hacer esto con Operador Ternario es esta
console.log(nombre, " ", apellidos);

// Otra manera más simplificada de hacer esto con Operador Ternario es la siguiente

// Esto es muy útil para utiliar en React, porque puedes de forma muy Sencilla
// obtener una sentencia de que me devuelve el elmento deseado o false
// Utilizando el Operador &&

const nombre3 = activo && "Alberto";
const nombre4 = !activo && "Carlos";

// El Operador && Es muy útil para hacer sentencias que permiten hacer sentencias que devuelven lo deseado o false

console.log(true && "Hola Amapola");
console.log(false && "Adios Amapola");
console.log(true && "Hola Amapola");

console.log(nombre3);
console.log(nombre4);

if (true & true) {
  console.log("Operador &: ", true);
}

// Vamos a hacer una serie de pruebas para
// Con este operador && Se Evalua el Primer y en caso de
// En caso de NO Ser false se envía el valor del segundo elemento
// En caso de ser false se enviará el valor false

console.log("Primero el Texto luego el Booleano", "Hola Amapola" && true);

console.log("Primero el luego el Texto ", true && "Hola Amapola");

const nombre2 = activo && apellidos;

console.log("Nombre2 Usando el Operador &&: ", nombre2);
