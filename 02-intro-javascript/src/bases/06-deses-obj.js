// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

//Desestructuración
// const { nombre, edad, clave} = persona;
// console.log(nombre)
// console.log(edad)
// console.log(clave)

// const retornaPersona = (persona) => {
//     const { nombre, edad, clave} = persona;
//     console.log(nombre)
//     console.log(edad)
//     console.log(clave)
// }
// retornaPersona(persona);

// const retornaPersona = ({nombre, edad, clave, rango= 'Capitán'}) => {
//     console.log(nombre);
//     console.log(edad);
//     console.log(clave);
//     console.log(rango);
// }
// retornaPersona(persona);

// const useContext = ({clave, nombre, edad, rango = 'Capitán'}) =>{
//     return {
//         nombreClave: clave,
//         anios: edad,
//     }
// }
// /* En la version de React 17 las palabras 'use' y 'set' al inicio
// del identificador son marcadas como reservadasa y solo se podrán
// usar en lugares específicos, es por ello que se genera el error:
// React hook useContext cannot be called at the top level, sin embargo
// esto no impide la ejecución de la línea de código.
// */
// const {nombreClave, anios} = useContext(persona);
// console.log(nombreClave, anios);

// Extraer objetos de un objeto
const heroeContext = ({clave, nombre, edad, rango = 'Capitán'}) =>{
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232,
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = heroeContext(persona);
console.log(nombreClave, anios, lat,lng);