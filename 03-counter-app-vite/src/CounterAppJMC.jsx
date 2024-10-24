import PropTypes from "prop-types"


import { useState } from "react"

export const CounterAppJMC = ({value=0}) => {

console.log("Render")
  
const [counter,setCounter]=useState(value)

// Es muy importante tener en cuenta que cada vez que cambia el estado vuelve a dispararae el componente y vuelve a renderizarse el componente

  const handleCounter= (id)=> {
    setCounter(()=>{
        let result=0
        if (id===0){
            result=counter+1
        } else if (id===1) {
            result=counter-1
        } else if (id===2) {
            result=value
        }
        return result

        // Es muy interesante como funciona el useState, si el valor del useState no cambia, no se vuelve a renderizar el HTML hasta que no cambia el valor del useState, esto hace que REACT sea muy eficiente y rápido
    })
  }

  return (
    <>
        <h1>Counter App JMC</h1>
        <h2>{ counter }</h2>
        <button onClick={()=>{handleCounter(0)}}>+1</button>
        <button onClick={()=>{handleCounter(1)}}>-1</button>
        <button aria-label="btn-reset" onClick={()=>{handleCounter(2)}}>Reset</button>

    </>
  )
}

CounterAppJMC.propTypes = {
    value: PropTypes.number.isRequired,
}

// CounterAppJMC.defaultProps = {
//     value: 0,
// }

