describe('Testeo de la clase CuentaBancaria', () => {
    let cuenta1, cuenta2;

    // snippet 'be'
    // Este bloque se ejecuta antes de cada it
    beforeEach(() => {
        cuenta1 = new CuentaBancaria("Javier","ES82-38473666662334532233", 1000);
        cuenta2 = new CuentaBancaria("Rocío","ES64-36666623345322335443", 2000);
    });
    // Esto soluciona el problema de los errores con la aleatoriedad.
    
    // snippet 'ae', lo mismo que beforeEach pero lo hace después de cada it
    // Teardown
    afterEach(() => {
        cuenta1 = null;
        cuenta2 = null;
    });

    // El getter nombre debería devolver el nombre en mayúsculas
    it('El getter titular de cuenta1 debería devolver JAVIER', () => {
        expect(cuenta1.titular).toEqual("JAVIER");
    });

    // El método extraer debería lanzar un error si la cantidad es mayor al saldo
    it('El método extraer debería lanzar un error si la cantidad es mayor al saldo', () => {
        expect(() => {cuenta1.extraer(1150)}).toThrowError();
    });

    // Testeo del método ingresar
    it('El saldo en cuenta1 tras ingresar 70€ debería ser 1070', () => {
        cuenta1.ingresar(70);
        expect(cuenta1.saldo).toEqual(1070);
    });

    // Tras transferir 50€ de cuenta1 a cuenta2
    it('Tras realizar una transferencia de 50€ a cuenta2 en cuenta1 debería haber 1020€ y en cuenta2 2050€', () => {
        cuenta1.transferirA(cuenta2, 50);
        expect(cuenta1.saldo).toEqual(950);
        expect(cuenta2.saldo).toEqual(2050);
    });
});