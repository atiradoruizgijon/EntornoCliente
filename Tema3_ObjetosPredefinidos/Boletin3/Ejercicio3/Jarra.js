class Jarra {
    _capacidad;
    _cantidad;

    constructor(capacidad, cantidad) {
        this._capacidad = capacidad;
        this._cantidad = cantidad;
    }

    get capacidad() {
        return this._cantidad;
    }
    get cantidad() {
        return this._cantidad;
    }

    set cantidad(valor) {
        if (valor < 0) throw new Error("La cantidad debe ser un número positivo");
        this._cantidad += valor;
        if (this._cantidad > this._capacidad) this._cantidad = this._capacidad;
    }

    llenar() {
        this._cantidad = this._capacidad;
    }

    vaciar() {
        this._cantidad = 0;
    }

    llenarDesde(jarra2) {
        let diferencia = jarra2.cantidad - (this._capacidad - this._cantidad);
        this._cantidad += jarra2.cantidad;

        if (this._cantidad > this._capacidad) {
            this._cantidad = this._capacidad;
            jarra2.vaciar();
            jarra2.cantidad = diferencia;
        } else jarra2.vaciar();
    }

    static comparar(j1, j2) {
        if (j1.cantidad > j2.cantidad) return j1;
        else if (j1.cantidad == j2.cantidad) return "Tienen la misma cantidad de líquido";
        else if (j1.cantidad < j2.cantidad) return j2;
    }

    jarrasConMasCantidad(...jarras) {
        jarras = jarras.filter((element) => {
            return element._cantidad > this._cantidad;
        });
        return jarras.sort((a, b) => {return a - b;});
    }

    toString() {
        return `Capacidad: ${this._capacidad} L | Cantidad: ${this._cantidad} L`;
    }
}