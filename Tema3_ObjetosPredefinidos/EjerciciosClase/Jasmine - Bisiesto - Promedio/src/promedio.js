function promedio(miarray) {
    // instanceof comprueba si algo es una instancia de un objeto.
    // aqui comprueba si 'miarray' es una instancia de Array
    if (!(miarray instanceof Array)) throw new Error("El argumento de entrada debe ser un array");
    if (miarray.some((item) => typeof item != "number")) throw new Error("El array solo puede tener números");

    let sum = 0;
    let numEltos = 0;

    for (let i = 0; i < miarray.length; i++) {
        if (miarray[i]) {
            sum += miarray[i];
            numEltos++;
        }
    }
    return sum / numEltos;
}