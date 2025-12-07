function validaCP(codigoPostal) {
    return /^\s*\d{5}\s*$/.test(codigoPostal);
}

function extraeCPs(frase) {
    return frase.match(/\b\d{5}\b/g);
}

function sustituyeCPs(frase) {
    return frase.replace(/\b\d{5}\b/g, "C.P.");
}