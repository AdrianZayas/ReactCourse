// Funciones
// const saludar = function (nombre){
//     return `Hola ${nombre}`;
// }

// console.log(saludar("Adrian"));

//Funcion lambda
const saludar2 = (nombre)=>{
    return `Hola ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola ${nombre}`;

const saludar4 = () => `Hola mundo`;

console.log(saludar2('Adrian'))
console.log(saludar3('Zayas'))
console.log(saludar4())


// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'El_papi502',
//     }
// };
const getUser = () =>({
    uid: 'ABC123',
    username: 'El_papi502',
})

const user = getUser();
console.log(user);


// Tarea
// 1. Transformar a función flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC123',
//         username: nombre,
//     }
// }

const getUserActivo = (nombre) =>({
    uid:'ABC123',
    username: nombre,
})
const userActivo = getUserActivo('Adrian');
console.log(userActivo);

