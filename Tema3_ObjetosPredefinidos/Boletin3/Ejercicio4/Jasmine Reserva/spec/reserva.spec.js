describe('Testeos de la clase Reserva.', () => {
    const reserva1 = new Reserva("García;Ortíz;Juan Antonio", "44958625A", "27/02/2020", "03/03/2020");

    /*
    Los test pueden dar errores si esta activada la aleatoriedad
    ya que se modifican las fechas y pueden afectar los test
    posteriores que se hagan.
    */

    it('El getter nombrePila debe devolver "Juan Antonio"', () => {
        expect(reserva1.nombrePila).toEqual("Juan Antonio");
    });
    
    it('El getter apellido1 debe devolver "García"', () => {
        expect(reserva1.apellido1).toEqual("García");
    });
    
    it('El getter apellido2 debe devolver "Ortíz"', () => {
        expect(reserva1.apellido2).toEqual("Ortíz");
    });

    it('El getter codigoCliente debe devolver "JGARCÍA625"', () => {
       expect(reserva1.codigoCliente).toEqual("JGARCÍA625"); 
    });

    it('El getter numeroDiasEstancia debe devuelve 5', () => {
        expect(reserva1.numeroDiasEstancia).toEqual(5);
    });

    it('El método costeEstancia() debería devolver 151', () => {
        expect(reserva1.costeEstancia()).toEqual(151);
    });

    it('Después de invocar costeEstancia(), fechaEntrada y fechaSalida no deberían haberse alterado.', () => {
        expect(reserva1._fechaEntrada.toLocaleDateString()).toEqual("27/2/2020");
        expect(reserva1._fechaSalida.toLocaleDateString()).toEqual("3/3/2020");
    });

    it('Al modificar la fechas de 28/02/2020 al 01/03/2020, el getter numeroDiasEstancia debería devolver 2', () => {
        reserva1.modificarFechas("28/02/2020", "01/03/2020");
        expect(reserva1.numeroDiasEstancia).toEqual(2);
    });
    
    it('Al modificar las fechas de manera incorrecta, indicando una fecha de salida anterior a la de entrada, debería lanzar una excepción.', () => {
        expect(() => {reserva1.modificarFechas("28/02/2020", "24/02/2020")}).toThrowError();
    });

    it('Al modificar las fechas, si no hay un día de separación entre fechas (es decir, son iguales), debería lanzar una excepción.', () => {
        expect(() => {reserva1.modificarFechas("28/02/2020", "28/02/2020")}).toThrowError();
    });
});