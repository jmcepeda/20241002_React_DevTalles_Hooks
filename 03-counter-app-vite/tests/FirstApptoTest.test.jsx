
// import React from "react";
import {getByText, render} from "@testing-library/react"
import FirstApptoTest from "../src/FirstApptoTest";
import { expect } from "vitest";


describe('Vamos a Probar el Componente <FirstApptoTest/>', () => { 
    test('Vamos a Empezar Probando que coincida el Contenido SnapShot ', () => {
     // Aquí es donde vamos a hacer las pruebas para el componente FirstApptoTest
        const {container}=render(<FirstApptoTest title="Titulo de Prueba" subTitle="Esto es un Ejemplo de Props Props Subtitle" valor={345}/>)   
        // console.log(container)
        expect(container).toMatchSnapshot();
        // Las Pruebas con Snapshot lo que hacen básicamente es comprar la salida de mi componente con una foto de la salida de dicho componente en un momento Dado. Con esto lo que vemos es si ha habido cambios. Puede ser buena idea comparalo o node. Depende de la evolución de dicho componente en el tiempo.
    })
    test('Debe Coincidet el Texto del Título en un h1', () => {
      const title="Titulo de Prueba";
      const {container,getByText} = render(<FirstApptoTest title= "Titulo de Prueba" subTitle="Esto es un Ejemplo de Props Props Subtitle" valor={345}/>) 
      expect(getByText(title)).toBeTruthy();
      const h1=container.querySelector('h1');
      console.log("h1")
      console.log(h1.innerHTML)
      expect(h1.innerHTML).toBe(title);
      expect(h1.innerHTML).toContain(title);
      const h12=container.getElementsByClassName("parrafo");

    });
    test('Debe contener el Texto del Título en un h1', () => {
      const title="Titulo de Prueba";
      const {container,getByText} = render(<FirstApptoTest title= "Titulo de Prueba" subTitle="Esto es un Ejemplo de Props Props Subtitle" valor={345}/>) 
      expect(getByText(title)).toBeTruthy();
      const h1=container.querySelector('h1');
      expect(h1.innerHTML).toContain(title);

    });
    
 })