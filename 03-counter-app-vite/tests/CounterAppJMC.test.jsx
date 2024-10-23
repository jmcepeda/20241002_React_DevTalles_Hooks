import { CounterAppJMC } from "../src/CounterAppJMC";
import { render,screen } from "@testing-library/react";


describe('Vamos a hacer las Pruebas del Componente CounterAppJMC', () => { 
    const value=100;
    test('Prueba de SnapShot ', () => {
      render(<CounterAppJMC value={value}/>)
      expect(screen).toMatchSnapshot();
    })

    test('Prueba de Valor Iniical de 100 ', () => {
        render(<CounterAppJMC value={value}/>);
        expect(screen.getByText('100')).toBeTruthy();
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getAllByRole("heading", {level: 2})[0].innerHTML).toBe("100");
    })
    
 })