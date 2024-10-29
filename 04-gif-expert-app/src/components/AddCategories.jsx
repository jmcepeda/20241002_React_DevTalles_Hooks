import { useState } from "react"

// import React from 'react';
export const AddCategories = () => {

    const [InputValue, setInputValue] = useState("One Punch")

    // const onAddCategories=(e)=>{
    //     console.log(e)
    //     setInputValue(e.target.value)
    // }

    const onAddCategories=({target})=>{
        // console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = (e)=>{
        console.log(InputValue)
        e.preventDefault()
        // console.log("Agregando Categoría: ", InputValue)
    }

  return (
      <form onSubmit={(event)=> onSubmit(event)}> 
        <input 
        type="text" 
        name="addChar"  
        placeholder="Buscar Gifts" 
        value={InputValue}
        onChange={onAddCategories}
        //   onChange={(event)=>onAddCategories(event)}
        // Esto es lo que realmente se está haciendo, pero al recibir y manejar el event, puedo simplificar la escritura
        />
      </form>
      )
}

