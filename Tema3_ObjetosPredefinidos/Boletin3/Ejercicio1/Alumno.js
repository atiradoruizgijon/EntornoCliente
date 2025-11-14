class Alumno extends Persona{
    _expediente;
    _notas;

    constructor(nombre, edad, altura, expediente, notas = []) {
        super(nombre, edad, altura);
        this._expediente = expediente;
        this._notas = notas;
    }

    get expediente() {
        return this._expediente;
    }

    get notas() {
        return this._notas;
    }

    set expediente(n) {
        if (n.trim() == "") throw new Error("El expediente no puede estar vacío.");
        this._expediente = n;
    }

    notaMedia() {
        if (this._notas.length == 0) return undefined;
        let notaMedia = 0;
        this._notas.forEach(element => {
            notaMedia += element;
        });
        // funcion que siempre usamos en clase, en funciones.js
        return redondearDecimales(notaMedia /= this._notas.length, 1);
    }

    toString() {
        return `${super.toString()}, expediente ${this._expediente}, notas: ${this._notas}, nota media: ${this.notaMedia()}`;
    }

    añadirNota(n) {
        if (typeof n != 'number') throw new Error("Valor de nota inválido."); 
        this._notas.push(n);
    }

    eliminarNota(posicion) {
        let nota = this._notas.indexOf(posicion);
        if (nota == 1) throw new Error("No existe una nota en esa posición.");
        return nota;
    }

    static cmpNotaMedia(a1, a2) {
        return a1.notaMedia() - a2.notaMedia();
    }
}