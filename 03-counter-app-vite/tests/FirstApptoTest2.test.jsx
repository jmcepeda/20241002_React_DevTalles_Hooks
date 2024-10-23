
// import React from "react";
import {getAllByTestId, getByRole, getByText, render,screen} from "@testing-library/react"
import FirstApptoTest from "../src/FirstApptoTest";
import { expect } from "vitest";


describe('Vamos a Probar el Componente <FirstApptoTest/>', () => { 
  
    const title="Debe de hacer Match con el SnapShot";
    const subTitle="Este es un subtitle para Prueba";
    const valor=12345;

    test('Debe de hacer Match con el SnapShot', () => {
      const {container} = render(<FirstApptoTest title={title} subTitle={subTitle} valor={valor}/>);
      expect(container).toMatchSnapshot();
    })

    test("Debe aparecer el mensaje 'Debe de hacer Match con el SnapShot'", () => {
      render(<FirstApptoTest title={title} subTitle={subTitle} valor={valor}/>);
      // screen.debug();
      // console.log(screen.getByText("Debe de hacer Match con el SnapShot"))
      expect(screen.getByText('Debe de hacer Match con el SnapShot')).toBeTruthy();
      })
    
      test("Comprobar que mostrar el título en un h1", ()=> {
        render(<FirstApptoTest title={title} subTitle={subTitle} valor={12345} />);
        // console.log(screen.getByRole("heading",{level:1}).innerHTML);
        expect(screen.getByRole("heading",{level:1}).innerHTML).toBe(title);
      })

      test('Comprobar el Subtítulo', () => {
        render(<FirstApptoTest title={title} subTitle={subTitle} valor={valor} />);
        expect(screen.getAllByRole("heading",{level:2})[0].innerHTML).toContain(subTitle);
        expect(screen.getAllByRole("heading",{level:2}).length).toBe(4);
      })
      
 })