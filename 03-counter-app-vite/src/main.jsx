//  version 1.0: Creando el componente en el mismo archivo
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function App() {
//     return (<h1>Hola Mundo</h1>);
// }

// ReactDOM.createRoot( document.getElementById('root')).render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>
// )

// version 2.0: Usando un componente aparte (HelloWorldApp)
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';

// ReactDOM.createRoot( document.getElementById('root')).render(
//     <React.StrictMode>
//         <HelloWorldApp/>
//     </React.StrictMode>
// );

// version 2.1: Usando un componente aparte (HelloWorldApp) con export default
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import HelloWorldApp from './HelloWorldApp';

// ReactDOM.createRoot( document.getElementById('root')).render(
//     <React.StrictMode>
//         <HelloWorldApp/>
//     </React.StrictMode>
// )

// Nota: En la version 2.1, se importa el componente HelloWorldApp con export default, por lo que no se necesita usar las llaves {} para importarlo.


//Ejercicio: Agregando nuevo componente, se a comentado la version 2.0, para que no se renderice el componente HelloWorldApp
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {FirstApp} from './FirstApp';
// ReactDOM.createRoot( document.getElementById('root')).render(
//     <React.StrictMode>
//         <FirstApp/>
//     </React.StrictMode>
// );

// Agregando css
import './styles.css';

// Trabajando con props
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {FirstApp} from './FirstApp';
// ReactDOM.createRoot( document.getElementById('root')).render(
//     <React.StrictMode>
//         <FirstApp title='Adrian Zayas'/>
//     </React.StrictMode>
// );

// Tarea: Trabajando con props
import React from 'react';
import ReactDOM from 'react-dom/client';
import {CounterApp} from './CounterApp';
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={69} />
    </React.StrictMode>
);