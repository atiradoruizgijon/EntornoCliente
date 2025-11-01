class Persona {

    _nombre;
    _edad;
    _altura;

    constructor(nombre, edad, altura) {
        this._nombre = nombre;
        this._edad = edad;
        this._altura = altura;
    }

    get nombre() {
        return this._nombre.toUpperCase();
    }
    get edad() {
        return this._edad;
    }
    get altura() {
        return this._altura;
    }

    set nombre(n) {
        if (n.trim() == "") throw new Error("El nombre no puede estar vacío.");
        this._nombre = n;
    }
    set edad(n) {
        if (n < 0) throw new Error("La edad no puede ser un número negativo");
        this._edad = n;
    }
    set altura(n) {
        if (n < 0) throw new Error("La altura no puede ser un número negativo");
        this._altura = n;
    }

    toString() {
        return `${this._nombre}, ${this._edad} años, altura de ${this._altura}m`;
    }

    static cmpNombre(p1, p2) {
        return p1.nombre.localeCompare(p2.nombre);
    }

    static cmpEdad(p1, p2) {
        return p1.edad - p2.edad;
    }
    
    static cmpAltura(p1, p2) {
        return p1.altura - p2.altura;
    }
}