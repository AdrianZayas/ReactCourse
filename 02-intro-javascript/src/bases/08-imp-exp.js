// import heroes, {owners} from '../data/heroes.js'
import heroes from '../data/heroes.js'
// console.log(owners)

//Find retorna un solo elemento
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)
// console.log(getHeroeById(2));

//filter, regresa todas las coincidencias
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const getHeroesByOwner = ( owner) => heroes.filter( (heroe) => heroe.owner === owner);
// console.log(getHeroesByOwner('DC'));


/**
Notas:

En el minuto 5:16 Fernando nos muestra una forma de importa con:

const heroes = [...]

const owners = [...]

export { heroes, owners }

import { heroes, owners } from './data/heroes';



También podemos usar una forma si es que tenemos muchas cosas por exportar y no queremos hacerlo uno por uso:

import * as data   from './data/heroes.js';

console.log(data.owners)

Acceder a estos como prop de un objeto
*/

// export default getHeroeById