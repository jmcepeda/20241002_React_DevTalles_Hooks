
import React from "react";
import {render} from "@testing-library/react"
import FirstApptoTest from "../src/FirstApptoTest";
describe('Vamos a Probar el Componente <FirstApptoTest/>', () => { 
    test('Vamos a Empezar Probando ', () => {
     // Aquí es donde vamos a hacer las pruebas para el componente FirstApptoTest
        render(<FirstApptoTest title="Titulo de Prueba" subTitle="Esto es un Ejemplo de Props Props Subtitle" valor={345}/>)   

        expect("a Probando").toBe("a Probando");
    })
 })