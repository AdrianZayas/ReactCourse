// Arreglos

/*
    Esta sintaxis declarativa de un arreglo no es recomendada,
    ya que unicamente se utiliza cuando se va a declarar un arreglo
    con un tamaño predefinido, aunque esto no quiere decir que no pueda
    crecer mas adelante en el código.
    const arreglo = new Array( 100 );  // Puede expandirse más adelante
    arreglo.push(1); // Crece el arreglo
    console.log( arreglo);
*/

const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function (number){ // A la funcion interna se le conoce como callback
    return number * 2;
});



console.log( arreglo);
console.log(arreglo2);
console.log(arreglo3);