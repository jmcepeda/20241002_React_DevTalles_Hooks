import React from 'react'
import ReactDOM from 'react-dom/client'
import App_two, {App} from './HelloWorldApp'

// Create a React component

// Los Componenetes de React son funciones de </JavaScript>
// Es por esto que a React se le llama Funcional Component. Porque los COMPONENTES SON FUNCIONES

// Es muy importante Tener en Cuenta que los componentes de React hay que designarlos usando Pascal <OpenCamelCase>
// Siempre la primera Letra de los componentes debe ser en mayúscula



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />  {/* Aquí se renderiza el componente */}
        <App_two/>
    </React.StrictMode>

);

// Vite tiene la habilidad de cambiar módulos en caliente.App
// Esto no es propio de REact, es una funcionalidad de VITE
// Lo que hace que el funcionamiento sea muy rápido, creo que en Development