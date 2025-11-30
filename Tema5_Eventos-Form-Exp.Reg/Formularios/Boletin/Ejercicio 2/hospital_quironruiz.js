let SEGUROS_MEDICOS = [
    { value: 1, texto: 'Adeslas' },
    { value: 2, texto: 'Asisa' },
    { value: 3, texto: 'Caser Salud' },
    { value: 4, texto: 'DKV' },
    { value: 5, texto: 'Mapfre' },
    { value: 6, texto: 'Sanitas' }
];

// Escribe aquí tu código

// letras del DNI en orden:
let letras = ["t", "r", "w", "a", "g", "m", "y", "f", "p", "d", "x", "b", "n", "j", "z", "s", "q", "v", "h", "l", "c", "k", "e"];

function comprobarDNI(evt) {
    let dni = document.querySelector("#inputDNI").value;

    let numeros = Number(dni.substring(0, 8));
    let letra = dni.charAt(8);
    
    console.log(numeros % 23);
    if (numeros % 23 == letras.indexOf(letra) || numeros % 23 == letras.indexOf(letra.toLowerCase())) {
        document.querySelector("#inputDNI").setCustomValidity("");
    } else {
        document.querySelector("#inputDNI").setCustomValidity("La letra del DNI no es válida");
    }
}
document.querySelector("#inputDNI").addEventListener("keypress", comprobarDNI);
document.querySelector("input[type=submit]").addEventListener("click", comprobarDNI);

function poblarSelect() {
    let select = document.querySelector("#inputSeguroMedico");
    SEGUROS_MEDICOS.forEach(element => {
        select.insertAdjacentHTML("beforeend", `<option value="${element.value}">${element.texto}</option>`);
    });
}
addEventListener("DOMContentLoaded", poblarSelect);

function especialista() {
    let select = document.querySelector("#inputEspecialidad");
    if (document.querySelector("#inputMedicoEspecialista").checked) {
        select.removeAttribute("disabled");
    } else {
        select.setAttribute("disabled", "");
    }
}
document.querySelector("#inputMedicoEspecialista").addEventListener("change", especialista);
document.querySelector("#inputMedicoFamilia").addEventListener("change", especialista);
addEventListener("reset", especialista); // por si se resetea el formulario

function validarFecha() {
    let fechaInput = document.querySelector("#inputFechaCita");
    fecha = new Date(fechaInput.value);

    console.log(fecha);
    console.log(fecha.getDay());

    // lunes = 1, jueves = 4
    if (fecha.getDay() < 1 || fecha.getDay() > 4) {
        fechaInput.setCustomValidity("El día de la cita sólo puede ser de lunes a jueves");
    } else {
        fechaInput.setCustomValidity("");
    }
}
document.querySelector("#inputFechaCita").addEventListener("change", validarFecha);

function validarHora() {
    let fechaInput = document.querySelector("#inputFechaCita");
    let horaInput = document.querySelector("#inputHoraCita");
    fecha = new Date(fechaInput.value + " " + horaInput.value);
    // hora = horaInput.value;
    
    console.log(fecha);
    let condicionLunesMiercoles = fecha.getDay() >= 1 && fecha.getDay() <= 3 && fecha.getHours() >= 10 && fecha.getHours() <= 14;
    let condicionJueves = fecha.getDay() == 4 && fecha.getHours() >= 18 && fecha.getHours() <= 20;
    
    if (fecha.getDay() == 4) {
        if (condicionJueves) {
            // en caso de que sean menos de las 18:30
            if ((fecha.getHours() == 18 && fecha.getMinutes() < 30) || (fecha.getHours() == 20 && fecha.getMinutes() > 0)) {
                horaInput.setCustomValidity("La hora en el horario del Jueves ha de ser de 18:30 a 20:00");
            } else {
                horaInput.setCustomValidity("");
            }
        } else {
            horaInput.setCustomValidity("La hora en el horario del Jueves ha de ser de 18:30 a 20:00");
        }
    } else {
        if (condicionLunesMiercoles) {
            // en caso de que sean más de las 14:15
            if (fecha.getHours() == 14 && fecha.getMinutes() > 15) {
                horaInput.setCustomValidity("La hora en el horario Lunes-Miércoles ha de ser de 10:00 a 14:15");
            } else {
                horaInput.setCustomValidity("");
            }
        } else {
            horaInput.setCustomValidity("La hora en el horario Lunes-Miércoles ha de ser de 10:00 a 14:15");
        }
    }
}
document.querySelector("input[type=submit]").addEventListener("click", validarHora);