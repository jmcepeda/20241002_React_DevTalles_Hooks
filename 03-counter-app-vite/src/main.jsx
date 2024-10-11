import React from 'react'
import ReactDOM from 'react-dom/client'
import App_two, {App} from './HelloWorldApp'
import FirstApp from './FirstApp'
import { CounterApp } from './CounterApp'

import './styles.css'
import { CounterAppJMC } from './CounterAppJMC'



// Create a React component

// Los Componenetes de React son funciones de </JavaScript>
// Es por esto que a React se le llama Funcional Component. Porque los COMPONENTES SON FUNCIONES

// Es muy importante Tener en Cuenta que los componentes de React hay que designarlos usando Pascal <OpenCamelCase>
// Siempre la primera Letra de los componentes debe ser en mayúscula


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Para Mandar Prop como un número, hay que meter el valor entre corchetes, si se manda entre comillas el Prop se enviará como un String */}
        <CounterAppJMC value={100}/>
        <CounterApp value={55}/>
        <App />  {/* Aquí se renderiza el componente */}
        <App_two/>
        <FirstApp title='Props Title Ejemplo Rabito duro' ardecor="El Orto de tu Madre" subTitle="Esto es un Ejemplo de Props Props Subtitle" valor={345}/>
        <FirstApp title='Este es un Prop de Título de Segundo Comoponente FirstApp' />
        <FirstApp subTitle='Este es un Prop de SubTítulo de Segundo Comoponente FirstApp' />
        <FirstApp valor={10000} />
        <FirstApp valor={10000} />
        {/* Esta es la manera de pasar un número como un props USando llaves {} */}
    </React.StrictMode>

);

// Vite tiene la habilidad de cambiar módulos en caliente.App
// Esto no es propio de REact, es una funcionalidad de VITE
// Lo que hace que el funcionamiento sea muy rápido, creo que en Development