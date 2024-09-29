// Desectructuracion Asignación Desuctucturante. Este es un tema muy importante para el uso de React

const persona = {
  nombre: "John",
  apellido: "Doe",
  edad: 30,
  direccion: {
    calle: "123 Main St",
    ciudad: "New York",
    pais: "USA",
  },
};

console.log(`Persona:
    nombre: ${persona.nombre}
    apellido: ${persona.apellido}
    edad: ${persona.edad}
    direccion:
        calle: ${persona.direccion.calle}
        ciudad: ${persona.direccion.ciudad}
        pais: ${persona.direccion.pais}`);

const { apellido, nombre, edad, direccion } = persona;

console.log(`Persona Desectructurada:
    nombre: ${nombre}
    apellido: ${apellido}
    edad: ${edad}
    direccion:
        calle: ${direccion.calle}
        ciudad: ${direccion.ciudad}
        pais: ${direccion.pais}`);

const {
  apellido: apellido2,
  nombre: nombre2,
  edad: edad2,
  direccion: direccion2,
} = persona;

console.log(`Persona Dos Desectructurada:
    nombre: ${nombre2}
    apellido: ${apellido2}
    edad: ${edad2}
    direccion:
        calle: ${direccion2.calle}
        ciudad: ${direccion2.ciudad}
        pais: ${direccion2.pais}`);

const returnPerson = (usuario) => {
  const { apellido, nombre, edad, direccion } = usuario;
  console.log(`Persona Desectructurada en Función:
    nombre: ${nombre}
    apellido: ${apellido}
    edad: ${edad}
    direccion:
        calle: ${direccion.calle}
        ciudad: ${direccion.ciudad}
        pais: ${direccion.pais}`);
  return {
    nombre,
    apellido,
    edad,
    direccion,
  };
};

returnPerson(persona);

const returnPersonArg = ({
  nombre,
  apellido,
  edad,
  direccion,
  rango = "Capitán",
}) => {
  console.log("Dirección:", direccion);
  console.log(`Persona Desectructurada en Función con Argumentos:
    nombre: ${nombre}
    apellido: ${apellido}
    edad: ${edad}
    rango: ${rango}
    direccion:
        calle: ${direccion.calle}
        ciudad: ${direccion.ciudad}
        pais: ${direccion.pais}`);
  return {
    nombre,
    apellido,
    edad,
    direccion,
  };
};

returnPersonArg(persona);

const persona2 = {
  nombre: "Alberto",
  apellido: "Truman",
  edad: 42,
  rango: "Soldado Raso",
  direccion: {
    calle: "123 Saint James",
    ciudad: "Dallas",
    pais: "USA",
  },
};

returnPersonArg(persona2);

const a = ({ edad, nombre, rango = "Soldado Raso", direccion }) => {
  return {
    name2: nombre,
    age: edad,
    status2: rango,
    address: direccion,
  };
};

const { name: nombre4, age: edad4, status: rango4 } = a(persona2);

console.log(
  "Imprimir Resultados Función Desectructurada",
  nombre4,
  edad4,
  rango4
);

const { name2, age, status2, address } = a(persona2);

console.log("Imprimir Resultados Función Desectructurada", name2, age, status2);

console.log(`Dirección Resultado Función Desectructurada: 
    calle: ${address.calle}
    ciudad: ${address.ciudad}
    pais: ${address.pais}`);

const {
  name3,
  age3,
  status3,
  address: { calle, ciudad, pais },
} = a(persona2);

console.log(
  "Imprimir Resultados Función Desectructurada",
  name3,
  age3,
  status3
);

console.log(`Dirección Resultado Función Desectructurada que Desectructura Objetos dentro de Objetos: 
    calle: ${calle}
    ciudad: ${ciudad}
    pais: ${pais}`);
