function validaDNI(dni) {
    return /^\d{8}-?[trwagmyfpdxbnjzsqvhlcke]$/i.test(dni);
}