describe('Testeo de la función promedio()', () => {
    
    function redondearDecimales(num, decimales) {
        return Math.round(num * Math.pow(10 * decimales) / Math.pow(10, decimales));
    }

    // Comprobamos que la función no devuelve NaN cuando le pasamos un array disperso
    it('No debería devolver un NaN si le pasamos un array disperso', () => {
        // Con .not negamos, ya que no existe una función que compruebe que no sea NaN
        expect(promedio([5, 3, , , 8])).not.toBeNaN();
        // Sin el matched
        expect(isNaN(promedio([5, 3, , ,8]))).toBeFalse();
    });

    const datos = [
        {entrada: [7.2, 4.3, 9.1], valorEsperado: 6.9},
        {entrada: [3.2, , , 5.3, 9.7], valorEsperado: 6.1},
        {entrada: [4.6, 7.2, 2.7, 3.1, 5.7], valorEsperado: 4.7},
        {entrada: [8.18, ,], valorEsperado: 8.2}
    ];

    datos.forEach(
        (item) => {
            // Join lo convierte de array a String separandolo con lo que tu le digas, coma en este caso
            it(`Para el array [${item.entrada.join(",")}] el promedio esperado es ${item.valorEsperado}`, () => {
                // nosotros redondeamos:
                // expect(redondearDecimales(promedio(item.entrada), 1)).toEqual(item.valorEsperado);

                // Usando el matcher toBeCloseTo de Jasmine
                expect(promedio(item.entrada)).toBeCloseTo(item.valorEsperado, 1);
            });
        }
    );
    // Comprobar que la función devuelve un número:
    it('La función debería devolver un número.', () => {
        expect(typeof promedio([7.2, 4.3, 9.1]) === 'number').toBeTrue();
    });
    
    // Comprobar que lanza una excepción si no se le pasa un array:
    it('La función debería lanzar una excepción si no se le pasa un array.', () => {
        // Para que toThrowError funcione, hay que encapsular la función
        // en una anónima:
        expect( () => {
            promedio("Hola")
            }
        ).toThrowError();
        // No son necesarios los saltos de línea pero es para que quede más claro.
    });
    // Comprobar que la función lanza una excepción si le pasamos un array en el que no todos los elementos son números
    it('La función debería lanzar una excepción si le pasamos un array en el que no todos los elementos son números', () => {
        expect( () => {promedio([5, "hola", 7, 8, 12, 24])} ).toThrowError();
    });
});