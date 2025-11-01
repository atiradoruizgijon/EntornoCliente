class CuentaBancaria {
    _titular;
    _cuenta;
    _saldo;

    constructor(titular, cuenta, saldo = 100) {
        this._titular = titular;
        this._cuenta = cuenta;
        this._saldo = saldo;
    }

    get titular() {
        return this._titular;
    }

    get cuenta() {
        return this._cuenta;
    }

    get saldo() {
        return this._saldo;
    }

    get nombrePila() {
        return this._titular.split(",")[1].trim();
    }

    get apellidos() {
        return this._titular.split(",")[0].trim();
    }

    get iban() {
        return this._cuenta.substr(0,4);
    }

    toString() {
        return `Titular: ${this._titular} | Nº de cuenta: ${this._cuenta} | Saldo: ${this._saldo}`;
    }

    ingresar(cantidad) {
        if (cantidad < 10) throw new Error("La cantidad no puede ser menor a 10€");
        this._saldo += cantidad;
        return this._saldo;
    }

    extraer(cantidad) {
        if (cantidad > this._saldo) throw new Error("La cantidad de dinero que quieres transferir es mayor que el saldo de la cuenta.");
        this._saldo -= cantidad;
    }

    transferir(cuenta, cantidad) {
        if (!cuenta instanceof CuentaBancaria) throw new Error("No has introducido una cuenta.");
        if (cantidad > this._saldo) throw new Error("La cantidad de dinero que quieres transferir es mayor que el saldo de la cuenta.");
        
        cuenta.ingresar(cantidad);
        this._saldo -= cantidad;
        return {origen: this._saldo, destino: cuenta.saldo};
    }
}