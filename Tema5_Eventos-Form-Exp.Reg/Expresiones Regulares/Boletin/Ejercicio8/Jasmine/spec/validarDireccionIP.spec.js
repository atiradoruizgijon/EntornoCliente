describe('Testeos para la función validarDireccionIP()', () => {
    let direccionesIP = [
        // validas:
        {ip: "255.255.255.255", esperado: true},
        {ip: "192.168.1.1", esperado: true},
        {ip: "173.63.22.138", esperado: true},
        {ip: "8.8.8.8", esperado: true},
        // no validas:
        {ip: "266.1.1.1", esperado: false},
        {ip: "192.172.626.1", esperado: false},
        {ip: "12.5.1925.6", esperado: false},
        {ip: "192.168.1.256", esperado: false},
    ];

    direccionesIP.forEach(element => {
        it(`La IP ${element.ip} debe de ser ${element.esperado}`, () => {
            expect(validarDireccionIP(element.ip)).toEqual(element.esperado);
        });
    });
});