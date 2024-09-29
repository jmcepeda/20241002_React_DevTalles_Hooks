const nombre = "Fernando";
const apellido = "Herrera";

const nombreCompleto = nombre + " " + apellido;

console.log("Nombre completo: ", nombreCompleto);

const nombreCompleto2 = `${nombre} ${apellido}.
Resultado Operación: ${1 + 1}
`;

console.log("Nombre completo2: ", nombreCompleto2);

function getsaludos(nombre) {
  return `Hola, ${nombre}`;
}

console.log(`Este es un texto: ${getsaludos(nombreCompleto)}`);
