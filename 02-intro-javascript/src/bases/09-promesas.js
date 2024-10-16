import {getHeroeById} from './08-imp-exp.js'

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe');
//     },2000);
// });

// promesa.then((response) =>{
//     console.log(response);
// })
// .catch( err => console.warn( err) );

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            return heroe !== undefined ? resolve(heroe) : reject('Heroe no encontrado')
            // resolve(heroe);
            // reject('No se pudo encontrar el héroe');
        },2000);
    });
}

getHeroeByIdAsync(1)
    .then( console.info )
    .catch( console.warn );