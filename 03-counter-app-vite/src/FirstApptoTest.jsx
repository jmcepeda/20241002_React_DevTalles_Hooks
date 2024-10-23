
import React from 'react';
const nombre="TroncoMan"
const newObject={id: 22, name: "Alberto", age:23, Alias: "Al"};
const newArray=[1,2,3,4,5,6,7,8,9];
import {malditosBastardos} from './HelloWorldApp'
import PropTypes from 'prop-types'


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

// PropTypes Tipos de las Properties 
// Esto viene instalado por defecto en VITE

//Es mejor definir los valores popr defecto con los DefaultProperties


const FirstApptoTest = ({title="No hay Título con DefaultProps", subTitle="No hay Subtítulo con defaultProps", valor=0.1 }) => {
  
  console.log(title);

  // Hacerlo así, es un problema, porque complica mi componente, 
  // lo hace dificil de leer 
  // ¿Como obligo a que se exija el que se rellenen los Props
  // Sin tener que complicar mi componente

  // if(!subTitle) {
  //   throw new Error("The SubTitle no Exist")
  // }
  

  return (
    <>
        <h1 data-testid="test-title">{title}</h1>
        <h2>{subTitle}</h2>
        <h3>{subTitle}</h3>
        {/* <h3>{subTitle}</h3> */}
        <h2>Este es el Valor Numerico con Operación con un Props: {valor*2.5}</h2>
        {/* <h1>Hola este es mi nombre y es una variable: {nombre}</h1> */}
        <h2>Resultado de la Operación 2+2 ={2+2}</h2>
        <h3>Propiedades de un Elemento: {newObject.name}</h3>
        <h4>Este es el resultado de un array. Coloca elementos Independientes: {newArray}</h4>
        {/* En caso de que tuviera que enviar un Objeto al DOM, podría hacerlo de la siguiente manera. Convierto en String el Objeto */}
        <div>
          <p>Propiedades de un Objeto en el DOM:</p>
          <code> {JSON.stringify(newObject)}</code>
        </div>
        <h2></h2>
        <ol><b>Este es el Bastardo que he encontrado</b></ol>
        <li>name: <b>{getBastardoById(2).name}</b></li>
        <li>owner: <b>{getBastardoById(2).owner}</b></li>
        <li>Este es el resultado de sumar dos Números: <b>{getSuma(4,6)}</b></li>
    </>
  )
}

export default FirstApptoTest


// Tanto los PropTypes como los defaultProps se colocan siempre al final del documento. Esto es lo que dice el Estandar ES6
FirstApptoTest.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  valor: PropTypes.number,
}

// FirstApptoTest.defaultProps = {
//   title: 'No hay Título con DefaultProps',
//   subTitle: 'No hay Subtítulo con defaultProps',
//   valor: 0.1,

// };
