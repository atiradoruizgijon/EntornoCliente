describe('Testeos con la clase Jarra', () => {
    const jarra1 = new Jarra(10, 4);
    const jarra2 = new Jarra(15, 8);
    
    /*
    Los test pueden dar errores si esta activada aleatoriedad
    en los test de jasmine, ya que hay valores que cambian
    dependiendo del test y puede afectar en el siguiente.
    */

    it('La función comparar() debería devolver jarra2(15, 8), que contiene más que la jarra1 ', () => {
        expect(Jarra.comparar(jarra1, jarra2)).toEqual(jarra2);
    });

    it('jarra1 debería tener 10L, llenándose entera, y jarra2 debería quedarse en 2 Litros', () => {
        jarra1.llenarDesde(jarra2);
        expect(jarra1.cantidad).toEqual(10);
        expect(jarra2.cantidad).toEqual(2);
    });

    it('Al llenar jarra2 debería tener 15L', () => {
        jarra2.llenar();
        expect(jarra2.cantidad).toEqual(15);
    });

    it('Al vaciar jarra2 debería de tener 0L', () => {
        jarra2.vaciar();
        expect(jarra2.cantidad).toEqual(0);
    });

    it('Al intentar rellenar mayor cantidad (30L) que su capacidad debería quedarse en 15L', () => {
        jarra2.cantidad = 30;
        expect(jarra2.cantidad).toEqual(15);
    });

    it('Al intentar rellenar la jarra dando un valor negativo debería lanzar una excepción.', () => {
        expect(() => {jarra2.cantidad = -10}).toThrowError();
    });
});