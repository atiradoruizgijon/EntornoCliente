// Esto es para que forme parte del informe
describe("Testeo de la función esBisiesto()", function() {
    // Dentro de la funcion anonima, pondremos el codigo del testeo

    // Años que sí son bisiestos: 400, 1200, 1904
    // Años que no son bisiestos: 1905, 2015, 2019

    const datos = [
        {año: 400, valorEsperado: true},
        {año: 1200, valorEsperado: true},
        {año: 1904, valorEsperado: true},
        {año: 1905, valorEsperado: false},
        {año: 2015, valorEsperado: false},
        {año: 2019, valorEsperado: false},
    ];

    /* Estructura de ejemplo
    it ("400 debería ser un año bisiesto", function() {
        expect(esBisiesto(400)).toBeTrue();
    });
    it ("1905 debería ser un año bisiesto", function() {
        expect(esBisiesto(1905)).toBeFalse();
    });
    */

    datos.forEach((item) => {
        it (`El año ${item.año} ${item.valorEsperado ? "sí" : "no"} debería ser bisiesto.`, function () {
            // espero que.... sea igual a.....
            expect(esBisiesto(item.año)).toEqual(item.valorEsperado);
        });
    });

    // Comprobar que la función devuelve un booleano.
    it('La función debería devolver un booleano.', () => {
        expect(esBisiesto(2025)).toBeInstanceOf(Boolean);
    });

    // Comprobar que la función lanza una excepción cuando la invocamos sin argumento.
    it('La función debería lanzar una excepción cuando la invocamos sin argumentos.', () => {
        // En el caso de toThrowError, hay que meter la función a probar en una función anónima.
        expect( () => { esBisiesto() }).toThrowError();
    });

    // Comprobar que la función lanza un error cuando la invocamos un año negativo
    it('La función debería lanzar una excepción cuando la invocamos con un año negativo', () => {
        expect( () => {esBisiesto(-2025)}).toThrowError();
    });

});