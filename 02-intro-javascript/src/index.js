const activo = true;

// let mensaje = '';

// if( activo ){
//     mensaje = 'Activo';
// }else {
//     mensaje = 'Inactivo';
// }

// const mensaje = (activo) ? 'Activo' : 'Inactivo';
// const mensaje = ( !activo) ? 'Activo' : null;
// const mensaje = activo && 'Activo'; // Se usara en el curso de React
const mensaje = ( activo === true ) && 'Activo';
console.log(mensaje)