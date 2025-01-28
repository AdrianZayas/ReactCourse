// test('Esta prueba no debe de fallar', () => {
//     if ( 0 === 1){
//         throw new Error('No puede dividir entre 0');
//     }
// })

describe('Pruebas en <DemoComponent/>', () => { // Agrupar pruebas
    test('Esta prueba no debe de fallar', () => {
        // 1. Inicialización
        const mensaje = 'Hola Mundo';

        // 2. Estímulo
        const mensaje2 = mensaje.trim();

        // 3. Observar el comportamiento... esperado
        expect( mensaje ).toBe( mensaje2 );
    });
});
