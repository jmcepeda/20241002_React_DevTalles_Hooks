// Funciones

function saludar(nombre) {
  return `Hola ${nombre}, ¿cómo estás?`;
}

console.log(saludar("Fernando"));

saludar = 55;

// Esta es una mejor práctiva para evitar problemas al machar nombre de funnciones con otro tipo de variables
const saludar2 = (nombre) => `Hola ${nombre}, ¿cómo estás?`;

console.log(saludar2("Alberto"));

// Seguimos avanzando

const getUSer = () => {
  return {
    uid: 12345,
    name: "Fernando",
    age: 35,
    username: "Taladreitor",
  };
};

console.log(getUSer());

const getUSer2 = () => ({
  uid: 9876,
  name: "Alberto",
  age: 69,
  username: "RaboTron",
});

const user = getUSer2();

console.log(`Usuario:
    name: ${user.name}
    age: ${user.age}
    username: ${user.username}
    uid: ${user.uid}
    `);

// Tarea a Realizar

const getUsuarioActivo = (name) => ({
  uid: 123456,
  name: name,
});

const usuarioActivo = getUsuarioActivo("Mario");
console.log(`Usuario Activo:
    name: ${usuarioActivo.name}
    uid: ${usuarioActivo.uid}
    `);
