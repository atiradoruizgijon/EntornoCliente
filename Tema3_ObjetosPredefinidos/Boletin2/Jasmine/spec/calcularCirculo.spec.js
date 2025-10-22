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

describe('', () => {
    
});