import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe de retornar un objeto', () => {

        const nombreClave = 'Spiderman';
        const anios = 27;

        const usContextTest =  usContext({clave: nombreClave, edad: anios});

        expect(usContextTest).toStrictEqual({
            nombreClave: nombreClave,
            anios: anios,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    });
});