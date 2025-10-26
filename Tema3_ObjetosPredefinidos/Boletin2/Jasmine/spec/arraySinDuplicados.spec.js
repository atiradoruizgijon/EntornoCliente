describe('Testeos a la función arraySinDuplicados()', () => {
    it('La función debería lanzar una excepción si no se le pasa ningún argumento.', () => {
        expect(() => {arraySinDuplicados()}).toThrowError();
    });
    it('La función debería lanzar una excepción si el argumento de entrada no es un array.', () => {
        expect(() => {arraySinDuplicados("hola")}).toThrowError();
    });
    it('La función debería lanzar una excepción si el array de entrada contiene un elemento que no es un número.', () => {
        expect(() => {arraySinDuplicados([2, 4, 7, "hola", 13])}).toThrowError();
    });
});
describe('Testeos de caja negra a la función arraySinDuplicados()', () => {
    const datos = [
        {arrayEntrada: [2, 3, 2, 3, -1], valorEsperado:[-1, 2, 3]},
        {arrayEntrada: [5, 5, -2, 1, -3, 1, -3], valorEsperado:[-3, -2, 1, 5]},
        {arrayEntrada: [0, 12 , -2, 0, -2, 1, 1], valorEsperado:[-2, 0, 1, 12]},
    ];
    datos.forEach((array) => {
        it(`La función con el array: [${array.arrayEntrada}]. Debería devolver el array: [${array.valorEsperado}]`, () => {
            expect(arraySinDuplicados(array.arrayEntrada)).toEqual(array.valorEsperado);
        });
    });
});