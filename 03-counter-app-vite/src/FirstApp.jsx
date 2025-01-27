// version 1.0: Usando el export default
// function FirstApp(){
//     return (<h1>Adrian Zayas</h1>);
// }
// export default FirstApp

// version 2.0: usando el rafc snippet
// export const FirstApp = () => {
//     return (
//         <h1>Adrian Zayas</h1>
//     )
// }

// version 2.1  Simplificando la version anterior con JS
// export const FirstApp = () => <h1>Adrian Zayas</h1>;

// NOTA: Aunque la version 2.0 y 2.1 son equivalentes, la version 2.0 es más fácil de leer y entender.

// version 3.0: Usando FRAGMENT
// import { Fragment } from "react"
// export const FirstApp = () => {
//     return (
//         <Fragment>
//             <h1>Adrian Zayas</h1>
//             <p>Desarrollador Full-Stack</p>
//         </Fragment>
//     )
// }

// Version 3.1: Usando FRAGMENT con la forma corta
// export const FirstApp = () => {
//     return (
//         <>
//             <h1>Adrian Zayas</h1>
//             <p>Desarrollador Full-Stack</p>
//             <p>Aprendiendo React</p>
//         </>
//     )
// }


// version 4.0: Imprimiendo variables en el HTML
// const newMessage = 'Adrian Zayas';
// const newBoolean = true; // El valor de esta variable almacenará un valor booleano (true o false), sin embargo no se renderizará el valor en el HTML
// const newList = [1,2,3,4,5,6,7,8,9];
// export const FirstApp = () => {
//     return (
//         <>
//             <h1>{ newMessage }</h1>
//             <h2>{ newBoolean }</h2>
//             <h3>{ newList }</h3>
//             <p>Desarrollador Full-Stack</p>
//             <p>Aprendiendo React</p>
//         </>
//     )
// }

// version 4.1: Imprimiendo objetos en el HTML
// const objeto = {
//     nombre: 'Adrian',
//     edad: 24,
//     ciudad: 'CDMX'
// }
// export const FirstApp = () => {
//     return (
//         <>
//             <code>{ JSON.stringify(objeto) }</code>
//             <p>Desarrollador Full-Stack</p>
//             <p>Aprendiendo React</p>
//         </>
//     )
// }

// version 4.2: Accediendo a una propiedad del objeto
// const objeto = {
//     nombre: 'Adrian',
//     edad: 24,
//     ciudad: 'CDMX'
// }
// export const FirstApp = () => {
//     return (
//         <>
//             <h1>Nombre: { objeto.nombre }</h1>
//             {/* <h2>Edad: { objeto.edad }</h2> */}
//             {/* <h3>Origen: { objeto.ciudad }</h3> */}
//             <p>Desarrollador Full-Stack</p>
//             <p>Aprendiendo React</p>
//         </>
//     )
// }

// Version 5.0: Usando funciones en el HTML
// const getResult = () => {
//     return'Adrian';
// }

// const getResult = () => {
//     return 4 + 4;
// }

// const getResult = (a,b) => {
//     return a + b;
// }

// Esta función es asíncrona, por lo que al momento de llamarla, se debe considerar que se estará deserializando un objeto.
// const getResult = async() => {
//     return 4 + 4;
// }
// export const FirstApp = () => {
//     return (
//         <>
//             <h1>{getResult() }</h1>
//             <p>Desarrollador Full-Stack</p>
//             <p>Aprendiendo React</p>
//         </>
//     )
// }

// version 6.0: Usando props
// export const FirstApp = ( {title, job}) => {
//     return (
//         <>
//             <h1>{ title }</h1>
//             <p>{ job + 1 }</p>
//         </>
//     )
// }

// version 6.1: usando prop-types (requiere instalar la librería prop-types con npm install prop-types o yarn add prop-types si es que se usa vite, con CRA ya viene instalado)
import PropTypes from 'prop-types';
export const FirstApp = ( {title='No se encontro el titulo', job='No se encontro el trabajo', origen='No se encontro el origen'}) => {
    return (
        <>
            <h1>{ title }</h1>
            <p>{ job }</p>
            <p> { origen} </p>
        </>
    )
}

// El uso de los propTypes es opcional, sin embargo, es una buena práctica para validar las props que se están recibiendo.
// Adicionalmente, estas funciones por lo regular se encuentran al final del archivo.
FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    origen: PropTypes.string.isRequired
}

// Se puede usar defaultProps para asignar valores por defecto a las props, sin embargo,
// defaultProps se encuentra deprecado, por lo que se recomienda asignar valores por defecto directamente en la función.
// FirstApp.defaultProps = {
//     title: 'No se encontró el título',
//     job: 'No se encontró el trabajo',
//     origen: 'No se encontró el origen',
// }