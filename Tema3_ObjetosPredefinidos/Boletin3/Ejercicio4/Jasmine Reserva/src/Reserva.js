class Reserva {
    _nombre;
    _dni;
    _fechaEntrada;
    _fechaSalida;

    constructor(nombre, dni, fechaEntrada, fechaSalida) {
        this._nombre = nombre;
        this._dni = dni;
        this._fechaEntrada = new Date((fechaEntrada.split("/")[2] + "/" + fechaEntrada.split("/")[1] + "/" + fechaEntrada.split("/")[0]));
        this._fechaSalida = new Date((fechaSalida.split("/")[2] + "/" + fechaSalida.split("/")[1] + "/" + fechaSalida.split("/")[0]));
    }

    get nombrePila() {
        return this._nombre.split(";")[2].trim();
    }
    get apellido1() {
        return this._nombre.split(";")[0].trim();
    }
    get apellido2() {
        return this._nombre.split(";")[1].trim();
    }

    get codigoCliente() {
        return (this.nombrePila.charAt(0) + this.apellido1 + this._dni.substring(5, 8)).toUpperCase();
    }

    get numeroDiasEstancia() {
        // 86400000 = milisegundos en un dia.
        return Math.abs(this._fechaEntrada - this._fechaSalida) / 86400000;
    }

    modificarFechas(fecEn, fecSa) {
        let fec1 = new Date((fecEn.split("/")[2] + "/" + fecEn.split("/")[1] + "/" + fecEn.split("/")[0]));
        let fec2 = new Date((fecSa.split("/")[2] + "/" + fecSa.split("/")[1] + "/" + fecSa.split("/")[0]));
        
        if ((fec1 - fec2) > 0) throw new Error("Fecha de salida debe de ser posterior a la de entrada.");
        if (Math.abs(fec1 - fec2) < 86400000) throw new Error("La reserva ha de ser de mínimo un día.");
        
        this._fechaEntrada = fec1;
        this._fechaSalida = fec2;
    }

    costeEstancia() {
        // numero de 0 a 6 que iremos incrementando y reiniciando para sumar el coste
        let diaInicial = this._fechaEntrada.getDay();
        console.log(diaInicial);
        let coste = 0;
        // bucle que recorre todos los dias de estancia
        for (let dias = this.numeroDiasEstancia; dias > 0; dias--) {
            if (diaInicial == 0) {
                coste += 43;
            } else if (diaInicial == 6) {
                coste += 36;
            } else {
                coste += 24;
            }
            diaInicial++;
            // reseteo la semana para empezar por el domingo
            if (diaInicial == 7) diaInicial = 0;
        }
        return coste;
    }
}