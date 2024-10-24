import { expect } from "vitest";
import { CounterAppJMC } from "../src/CounterAppJMC";
import { fireEvent, render,screen } from "@testing-library/react";


describe('Vamos a hacer las Pruebas del Componente CounterAppJMC', () => { 
    const value=100;
    test('Prueba de SnapShot ', () => {
      const {container}=render(<CounterAppJMC value={value}/>)
      expect(container).toMatchSnapshot();
    })

    test('Prueba de Valor Iniical de 100 ', () => {
        render(<CounterAppJMC value={value}/>);
        expect(screen.getByText('100')).toBeTruthy();
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getAllByRole("heading", {level: 2})[0].innerHTML).toBe("100");
    })

    test('Debe incrementar en uno al pinchar en el Botón "+1" ', () => {
      render(<CounterAppJMC value={value}/>);
      const botonMas=screen.getByText('+1');
      fireEvent.click(botonMas);
      expect(screen.getAllByRole("heading", {level: 2})[0].innerHTML).toBe("101");
      
    })
    test('Debe Decrementar en uno al pinchar en el Botón "-1" ', () => {
      render(<CounterAppJMC value={value}/>);
      const botonMas=screen.getByText('-1');
      fireEvent.click(botonMas);
      expect(screen.getAllByRole("heading", {level: 2})[0].innerHTML).toBe("99");
      // screen.debug();
      
    })
    test('Debe Resetearse en 100 al pinchar en el Botón "Reset" ', () => {
      render(<CounterAppJMC value={value}/>);
      const botonMas =screen.getByText("+1");
      fireEvent.click(botonMas);
      fireEvent.click(botonMas);
      fireEvent.click(botonMas);
      // const botonReset=screen.getByText('Reset');
      const botonReset=screen.getByRole("button",{name:'btn-reset'});
      fireEvent.click(botonReset);
      // screen.debug();
      expect(screen.getAllByRole("heading", {level:2})[0].innerHTML).toBe("100");
      
      
    })


    
    
 })