import PropTypes from "prop-types"

// Siempre que sea posible es preferible que las funciones vayasn fuera del Funcional Component, Fuera del Componente Funcional, pues la función ocupara menos recursos pues solo ocupa espacio en memoria una sola vez, indepenidientemente del número de veces que se renderice el componente.
const handleAppOut = (event) => {
  console.log(event);
}

export const CounterApp = ({value}) => {
  
  const handleAppIn = () => {
    // console.log(event, newValue);
    
    console.log("value antes del Evento:", value)
    console.log("+1")
 
    value=11000
    console.log("value despues del evento en función handleAppIn: ", value)
    // value=1000; Este codigo no va a funcionar, no refleja el cambio del valor de la variable en el Componente
    // En React, Para que haya cambios en los valores que representa el Componente, una vez que se renderiza, hay que indicarle a React que vha habido ese cambio para que vuelva a Renderizar el componente, este React lo hace de una forma muy eficiente
  }
  
  return (
    <>

      <h1>CounterApp</h1>
      <h2>{ value }</h2>
      {/* Esta sería la manera de definir correctamwnte la función en JavaScript,
      Pero los nuevos estandar de javascrit permite simplificar la definición 
      Cuando el argumento del evento coincide con el argumento que se pasa a la función, es por esto que directamente se puede poner la función en el evento y se puede simplificar, puesto que el argumento del evento y de la función vinculada coinciden  */}
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


