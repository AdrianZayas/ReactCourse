// Ejercicio tomado de: https://gist.github.com/Klerith/e1a731cc595c00a9794a709062eae757
// import PropTypes from 'prop-types';
// export const CounterApp = ( {value = 0}) => {
//     return (
//         <>
//             <h1>CounterApp</h1>
//             <h2>{ value }</h2>
//         </>
//     )
// }

// CounterApp.propTypes ={
//     value: PropTypes.number.isRequired,
// }


// version 2.0: Agregando evento clic
// useState: Hook que permite añadir el estado de un componente funcional
// Ejercicio tomado de: https://gist.github.com/Klerith/e1a731cc595c00a9794a709062eae757

// import { useState } from 'react';
// import PropTypes from 'prop-types';

// export const CounterApp = ( {value}) => {

//     const [ counter, setCounter ] = useState(value);
//     const handleAdd = () => {
//         setCounter( counter + 1);
//     }

//     return (
//         <>
//             <h1>CounterApp</h1>
//             <h2>{ counter }</h2>
//             <button onClick={ handleAdd }>+1</button>
//         </>
//     )
// }

// CounterApp.propTypes ={
//     value: PropTypes.number.isRequired,
// }


// version 3.2: Usando handleSubstract y handleReset
import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( {value}) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => setCounter( counter + 1);
    const handleSubstract = () => setCounter( counter - 1);
    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired,
}

//NOTA:
//NO está permitido usar:
    // setCounter(counter = counter + 1);
    // setCounter(counter++);
    // setCounter(counter--);

    //Razón: React no detecta el cambio en el estado, ya que no se está creando un nuevo objeto, sino que se está modificando el mismo objeto.
    // Es por que el useState (En este caso la función setCounter), está creando una nueva constante con el mismo nombre de 'counter'
    // en vez de modificar su valor (el valor de la actual constante), por esa misma razón cuando se intenta modificar el valor de
    // una constante sale un error, más sin embargo, cuando se usa la función sin modificar a la constante, funciona.