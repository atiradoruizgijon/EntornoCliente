describe('Tests de la función calcularCirculo()', () => {
    
    // Comprobar que la función lanza una excepción si la invocamos sin argumento de entrada.
    it('La función lanza una excepción si la invocamos sin argumento de entrada', () => {
        expect(() => {calcularCirculo()}).toThrowError();
    });

    // Comprobar que la función lanza una excepción si la invocamos con un argumento que no sea un número
    it('La función debería lanzar una excepción si la invocamos con un argumento que no sea un número', () => {
        expect(() => {calcularCirculo("hola")}).toThrowError();
    });

    // Comprobar que la función lanza una excepción si la invocamos con un argumento que sea un número negativo
    it('La función debería lanzar una excepción si la invocamos con un argumento que sea un número negativo', () => {
        expect(() => {calcularCirculo(-5)}).toThrowError();
    });

    // Comprobar que la función devuelve un objeto
    it('La función debería devolver un objeto', () => {
        expect(calcularCirculo(5)).toBeInstanceOf(Object);
    });

    // Comprobar que el objeto devuelto por la función contiene una propiedad llamada perimetro
    it('El objeto que devuelve la función debe tener una propiedad llamada perimetro.', () => {
        expect(calcularCirculo(5).perimetro).toBeDefined();
    });

    // Comprobar que el objeto devuelto por la función contiene una propiedad llamada area
    it('El objeto que devuelve la función debe tener una propiedad llamada area.', () => {
        expect(calcularCirculo(5).area).toBeDefined();
    });
});

describe('Test de caja negra para la función calcularCirculo()', () => {
    
    // Observación: en los valores esperados, el perímetro y el área están redondeados a dos decimales
    const datos = [
        { radio: 1.4, valorEsperado: { perimetro: 8.80, area: 6.16 } },
        { radio: 2.7, valorEsperado: { perimetro: 16.96, area: 22.90 } },
        { radio: 5.37, valorEsperado: { perimetro: 33.74, area: 90.59 } },
        { radio: 10.412, valorEsperado: { perimetro: 65.42, area: 340.58 } },
        { radio: 12.2334, valorEsperado: { perimetro: 76.86, area: 470.16 } },
    ];

    datos.forEach(
        (elem) => {
            it(`El radio ${elem.radio} debe dar de perímetro: ${elem.valorEsperado.perimetro} y área: ${elem.valorEsperado.area}`, () => {
                // toBeCloseTo no sirve para comparar objetos, así que hago dos separados.
                expect(calcularCirculo(elem.radio).perimetro).toBeCloseTo(elem.valorEsperado.perimetro, 2);
                expect(calcularCirculo(elem.radio).area).toBeCloseTo(elem.valorEsperado.area, 2);
            });
        }
    );
});