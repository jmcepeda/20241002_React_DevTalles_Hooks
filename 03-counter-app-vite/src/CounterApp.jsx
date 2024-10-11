import PropTypes from "prop-types"

import { useState } from "react";

// El Hook useState se utiliza para crear un estado local en un componente funcional
// Este es el Primer Hook
// Todos los nombres de los Hooks empiezan con "use"

// Siempre que sea posible es preferible que las funciones vayasn fuera del Funcional Component, Fuera del Componente Funcional, pues la función ocupara menos recursos pues solo ocupa espacio en memoria una sola vez, indepenidientemente del número de veces que se renderice el componente.
const handleAppOut = (event) => {
  console.log(event);
}

// Mi Primer Hook

export const CounterApp = ({value}) => {
  
  // Aqui lo que estoy haciendo es desectrucurar la salida de la funcion useState en un array
  const [counter_v0,setCounter_v0]=useState(0)
  const [counter_v1,setCounter_v1]=useState(1)
  const [counter_v2,setCounter_v2]=useState(10)
  const [counter_v3,setCounter_v3]=useState(100)

  
  const handleAppIn = () => {
    // console.log(event, newValue);
         
    console.log("value antes del Evento:", value)
    console.log("+1")
 
    value=11000
    console.log("value despues del evento en función handleAppIn: ", value)
    // value=1000; Este codigo no va a funcionar, no refleja el cambio del valor de la variable en el Componente
    // En React, Para que haya cambios en los valores que representa el Componente, una vez que se renderiza, hay que indicarle a React que vha habido ese cambio para que vuelva a Renderizar el componente, este React lo hace de una forma muy eficiente
  }

  const handleApp_v0= () => {
    setCounter_v0(() => {
      return 1000; 
      // Es muy interesante como funciona el useState, si el valor del useState no cambia, no se vuelve a renderizar el HTML hasta que no cambia el valor del useState, esto hace que REACT sea muy eficiente y rápdio
    })
  }


  const handleApp_v1 = () => {
    // console.log(event, newValue);
    // Esto no funciona porque se ha definido counter como una Constante 
    // Además, para que se actualice correctamete, hay que usar el Hooks, 
    // Si no recuerdo Mal, el Hook crea la variable de estado a actualizar y te da también la función para actualizar su visualViewport, para asegurarse de que se hace de forma ordenada
    // counter++;
    setCounter_v1(counter_v1 + 1); // Esto es la manera correcta de actualizar el estado en React con el Hook useState
    // value=1000; Este código no va a funcionar, no refleja el cambio del valor de la variable en el Componente
    // En React, Para que haya cambios en los valores que representa el Componente, una vez que se renderiza, hay que indicarle a React que vha habido ese cambio para que vuelva a Renderizar el componente, este React lo hace de una forma muy eficiente
    // 
    // Es muy interesante también, tener en cuenta que aunque tenga varios Hooks en una función, solo se renderiza una vez el HTML, solo cuando han terminado la ejecución de todos los Hooks de la Función se renderiza de nuevo el HTML. Lo que hace que sea muy eficiente y rápido
  }
  const handleApp_v2 = () => {

    setCounter_v2(()=>{
      return counter_v2*3 -1

    }); // Esto es la manera correcta de actualizar el estado en 
  }
  const handleApp_v3 = () => {

    setCounter_v3((new_counter_v3)=>{
      return new_counter_v3*5-5

    }); // Esto es la manera correcta de actualizar el estado en 
  }
  
  return (
    <>


      <h2>counter - useState_v0: { counter_v0 }</h2>
      <h1>CounterApp</h1>
      <h2>counter - useState_v1: { counter_v1 }</h2>
      <br />
      <h2>counter - useState_v2: { counter_v2 }</h2>
      <br />
      <h2>counter - useState_v3: { counter_v3 }</h2>
      <br />
      <h2>Variable Generica pasada por jsx: { value }</h2>
      {/* Esta sería la manera de definir correctamwnte la función en JavaScript,
      Pero los nuevos estandar de javascrit permite simplificar la definición 
      Cuando el argumento del evento coincide con el argumento que se pasa a la función, es por esto que directamente se puede poner la función en el evento y se puede simplificar, puesto que el argumento del evento y de la función vinculada coinciden  */}

      <button onClick={()=>{handleApp_v0()}}>1.000 Hook useState_v0</button>
      
      <button onClick={()=> {handleApp_v1()}}>+1 Hooks useState_v1</button>
      <br />

      <button onClick={()=> {handleApp_v2()}}>*3 -1 Hooks useState_v2</button>
      <br />

      <button onClick={()=> {handleApp_v3()}}>*5 -5 Hooks useState_v3</button>
      <br />

      <button onClick={(event)=>handleAppIn(event)}>
      +1</button>
     
      <button onClick={(event)=>handleAppIn(event,"Hola Mundo")
      }>+1</button>

      <br />

      <button onClick={handleAppOut}>+1</button> 
      
    </>
  )
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired, // Requerido y debe ser un número
};

CounterApp.defaultvalue ={
    value: 0, // Valor por defecto
}


