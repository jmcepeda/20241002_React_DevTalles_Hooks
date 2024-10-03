
const nombre="TroncoMan"
const newObject={id: 22, name: "Alberto", age:23, Alias: "Al"};
const newArray=[1,2,3,4,5,6,7,8,9];
import {malditosBastardos} from './HelloWorldApp'

const getBastardoById = (Id) => {
  return malditosBastardos.find((bastardo)=> {
    return bastardo.id === Id;
  }
  )
}

// No podemos usar funciones asincronas como argumentos en código HTML, pues devuelven objetos y React no gestiona Objetos

// const getSuma = async(Id) => {
//     return 2+2
// }

const getSuma = (a,b) => {
    return a + b
}

// Siempre que sea posible es mejor meter todas las funciones, importaciones creación de variables fuera del las Function Component 
// Es más eficiente y funciona todo mejor y más rápido

const FirstApp = () => {
  return (
    <>
        <h1>Hola este es mi nombre y es una variable: {nombre}</h1>
        <p>Yo soy tu padre</p>
        <h2>Resultado de la Operación 2+2 ={2+2}</h2>
        <h3>Propiedades de un Elemento: {newObject.name}</h3>
        <h4>Este es el resultado de un array. Coloca elementos Independientes: {newArray}</h4>
        {/* En caso de que tuviera que enviar un Objeto al DOM, podría hacerlo de la siguiente manera. Convierto en String el Objeto */}
        <div>
          <p>Propiedades de un Objeto en el DOM:</p>
          <code> {JSON.stringify(newObject)}</code>
        </div>
        <h2>Este es el Bastardo que he encontrado</h2>
        <p>name: <b>{getBastardoById(2).name}</b></p>
        <p>owner: <b>{getBastardoById(2).owner}</b></p>
        <p>Este es el resultado de sumar dos Números: <b>{getSuma(4,6)}</b></p>

    </>
  )
}

export default FirstApp

