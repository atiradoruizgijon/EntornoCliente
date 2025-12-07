function validarDireccionIP(direccion) {
    // una parte valida el primer byte, mientras que la otra los otros 3
    let patron = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
    return patron.test(direccion);
}