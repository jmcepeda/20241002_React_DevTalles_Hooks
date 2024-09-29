const persona = {
  nombre: "Fernando",
  apellidos: "Herrera",
  edad: 30,
  direccion: {
    calle: "Av. España",
    numero: 123,
    piso: 2,
    departamento: "C",
  },
};

console.log(
  `La Antigua dirección de ${persona.nombre} es ${persona.direccion.calle}`
);

console.log(persona);

persona.direccion.calle = "Av. Independencia";

console.log(persona);

console.log(
  `La Nueva dirección de ${persona.nombre} es ${persona.direccion.calle}`
);

console.log(`La Edad de ${persona.nombre} es: ${persona.edad} años`);

console.log({ persona });

const persona2 = { persona };

console.log(persona2);

console.table(persona2);

let persona3 = persona;

console.log(persona3);

persona3.nombre = "Juan";

console.log(`Vamos a Comparar los nombres de los dos Objetos: 
  Persona: ${persona.nombre}
  Persona3: ${persona3.nombre}`);

// Si lo que queremos es no copiar la referencia sino copiar el Objeto hay que hacerlo de forma diferente

let persona4 = { ...persona };

persona4.nombre = "Luis Alberto José";

console.log(`Vamos a Comparar los nombres de los dos Objetos con la forma Correcta de Hacer Copia de un Objeto: 
    Persona: ${persona.nombre}
    Persona4: ${persona4.nombre}`);
