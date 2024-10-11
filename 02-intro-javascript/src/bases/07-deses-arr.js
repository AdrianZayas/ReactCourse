//Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

// const [,p2] = personajes; //extrae al indice 1
// console.log(p2);

// const retornaArreglo = () =>{
//     return ['ABC',123];
// }

// const [letras, numeros] = retornaArreglo();
// console.log(letras, numeros);


// const useState = (valor) =>{
//     return [valor, ()=>{console.log("Hola mundo")}];
// }

// const arr = useState('Goku');
// arr[1]();

//Tarea
// 1. El primer valor del arreglo se llamará nombre
// 2. El segundo valor se llamará setNombre

const state = (nombre) => {
    return [nombre, () => { console.log('Hola mundo') }];
}

const [nombre, setNombre] = state('Adrian');
console.log(nombre);
setNombre();

