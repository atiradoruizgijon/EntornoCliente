// selecciono los distintos elementos:
let parrafos = document.querySelectorAll("p");
let select = document.querySelectorAll("select");

// funcion que me devolvera el parrafo que se ha seleccionado
// que la invocaré por comodidad en las otras funciones.
function parrafoSeleccionado() {
    switch (select[0].value) {
        case "1":
            return parrafos[0];
            break;
        case "2":
            return parrafos[1];
            break;
        case "3":
            return parrafos[2];
            break;
    }
}

function cambiarTamaño() {
    let parrafo = parrafoSeleccionado();
    parrafo.style.fontSize = select[1].value + "px";
}
function cambiarColor() {
    let parrafo = parrafoSeleccionado();
    parrafo.style.color = select[2].value;
}
function cambiarVisibilidad() {
    let parrafo = parrafoSeleccionado();
    parrafo.style.visibility = select[3].value;
}
function cambiarDisplay() {
    let parrafo = parrafoSeleccionado();
    parrafo.style.display = select[4].value;
}
