
// const apiKey = "jJjbFssbVLY0evvOTsSibXNMI1VMrtm4";

import { useState } from "react"
import { AddCategories } from "./components/AddCategories";

export const GiftExpertApp = () => {

  // Para mantener el Estado en React hay varios Hook.Estado
  // Hasta Ahora solo hemos visto un Hook de Estado. UseState
  // Podemos tener tantos useState como necesitemos
  // Suele recomendarse definir tantos useState como variables globales estemos utilizando,
  // pero es posible hacerlo de forma diferente
  const [categories, setCategories] = useState(["OnePunch", "Dragon Ball"])

  const onaddCategory = ()=> {

      // En las funciones SetCategories, lo que se trata no es modificar el estado actual sino definir un neuvo estado.
      // Es por esto que se recomiend no usar .push

    // setCategories([...categories, "Naruto"]); // Añado una nueva categoría al estado de categories
    setCategories(["Naruto",...categories, ]); 

  }

  console.log(categories)

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input:  Entrada de datos y valores de Búsqueda  */}
      {/* <input type="text" name="add_character" id="addchar" /> */}
      <AddCategories/>
      {/* Listado de Gif  */}
      <button onClick={onaddCategory}>Agregar</button>
      <ol>

        {categories.map((category, index) => {

          return <li key={index}>
                  {category}
                  </li>}
          )
        }

      </ol>

      {/* Gif Items */}


    </>
  )
}


