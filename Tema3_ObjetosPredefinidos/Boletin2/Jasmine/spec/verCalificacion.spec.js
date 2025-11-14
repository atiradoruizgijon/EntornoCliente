describe('Testeo de la función verCalificacion()', () => {

    // Comprobar que la función lanza una excepción si la invocamos sin argumento de entrada
    it('La función debería lanzar una excepción si la invocamos sin argumento de entrada', () => {
        expect(() => {verCalificacion()}).toThrowError();
    });

    // Comprobar que la función lanza una excepción si la invocamos con un argumento que no sea un número
    it('La función debería lanzar una excepción si la invocamos con un argumento que no sea un número', () => {
        expect(() => {verCalificacion("hola")}).toThrowError();
    });

    // Comprobar que la función devuelve un dato de tipo string para cualquier valor de entrada entre -1 y 11 con saltos de 0.5
    it('La función debería devolver un dato de tipo string para cualquier valor de entrada entre -1 y 11 con saltos de 0.5', () => {
        expect(verCalificacion(4.5)).toBeInstanceOf(String);
    });
});

describe('Testeo de caja negra de verCalificación', () => {
    // Testeo de caja negra con la siguiente estructura de datos:
    const datos = [
            { nota: -1.5, valorEsperado: "VALOR INCORRECTO" },
            { nota: 0, valorEsperado: "INSUFICIENTE" },
            { nota: 1, valorEsperado: "INSUFICIENTE" },
            { nota: 4.5, valorEsperado: "INSUFICIENTE" },
            { nota: 4.9, valorEsperado: "INSUFICIENTE" },
            { nota: 5, valorEsperado: "SUFICIENTE" },
            { nota: 5.1, valorEsperado: "SUFICIENTE" },
            { nota: 5.9, valorEsperado: "SUFICIENTE" },
            { nota: 6, valorEsperado: "BIEN" },
            { nota: 6.9, valorEsperado: "BIEN" },
            { nota: 7, valorEsperado: "NOTABLE" },
            { nota: 7.9, valorEsperado: "NOTABLE" },
            { nota: 8, valorEsperado: "NOTABLE" },
            { nota: 8.9, valorEsperado: "NOTABLE" },
            { nota: 9, valorEsperado: "SOBRESALIENTE" },
            { nota: 9.9, valorEsperado: "SOBRESALIENTE" },
            { nota: 10, valorEsperado: "SOBRESALIENTE" },
            { nota: 11, valorEsperado: "VALOR INCORRECTO" }
    ];

    datos.forEach( (item) => {
        it(`La nota ${item.nota} debería ser: ${item.valorEsperado}`, () => {
            expect(verCalificacion(item.nota)).toEqual(item.valorEsperado);
        });
    });
});