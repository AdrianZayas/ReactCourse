// Objetos literales


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321212,
        lat: 14.3232,
        lng: 34.9234333,
    }
};


// const persona2 = persona; //asignacion de referencia, pero no clona el objeto

// {...} Operador spread que sirve para clonar objetos literales
const persona2 = {...persona}// Clona el objeto persona en un objeto nuevo
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);