const DURANCION_LANZAMIENTO=8*1000; // Tiempo en msg que está rotando el dado
const TIEMPO_ROTACION=500; // Cada cuantos msg cambia el dado
let idTemporizador; // id del temporizador setInterval que nos servirá para detenerlo

function lanzar() {
    let dado = document.querySelector("#dado");

    // intervalo que cambia el dado:
    // cada intervalo devuelve una id, la llamamos idTemporizador
    idTemporizador = setInterval(() => {
        dado.innerHTML = Math.round((Math.random() * 5) + 1);
    }, TIEMPO_ROTACION);

    // detengo el intervalo por su id:
    setTimeout(() => {
        clearInterval(idTemporizador);
    }, DURANCION_LANZAMIENTO);
}