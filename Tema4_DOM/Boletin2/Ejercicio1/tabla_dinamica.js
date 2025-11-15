function insertarFila() {
    // recojo el texto con .value
    let texto = document.querySelector("#txtCaja").value;

    let tabla = document.querySelector("tbody");
    // introduzco la fila dentro de la tabla
    tabla.insertAdjacentHTML("beforeend", 
        `<tr>
        <td>${texto}</td>
        <td>
        <button onclick='copiarEncima(this)'>Copiar encima</button>
        <button onclick='borrar(this)'>Borrar</button>
        <button onclick='actualizar(this)'>Actualizar</button>
        <button onclick='subir(this)'>Arriba</button>
        <button onclick='bajar(this)'>Abajo</button>
        </td>
        </tr>`);
}


function intercambiarFilas() {
    try {
        // recojo los indices de los elementos que quiero intercambiar
        let inx = document.querySelectorAll('input[type="number"]');
        inx = [inx[0].value - 1, inx[1].value - 1];
    
        // recojo las filas, y guardo las que quiero cambiar en unas
        // variables para no perderlas
        let filas = document.querySelectorAll("tbody > tr");
        let aux1 = filas[inx[0]].cloneNode(true);
        let aux2 = filas[inx[1]].cloneNode(true);
        // las intercambio:
        filas[inx[0]].replaceWith(aux2);
        filas[inx[1]].replaceWith(aux1);
    } catch (error) {
        alert("Filas indicadas fuera de rango.");
    }
}
function borrar(boton) {
    // del boton voy al segundo td y de ahi al tr:
    let fila = boton.parentElement.parentElement;
    document.querySelector("tbody").removeChild(fila);
}
function actualizar(boton) {
    let texto = boton.parentElement.parentElement.firstElementChild;
    texto.innerHTML = prompt("Introduce el nuevo valor:");
}
function copiarEncima(boton) {
    let fila = boton.parentElement.parentElement;
    let copiaFila = fila.cloneNode(true);
    fila.before(copiaFila);
    // añado el string "(copia)" a la copia de la fila
    copiaFila.firstElementChild.innerHTML += " (copia)";
}
function subir(boton) {
    try {
        // fila a subir:
        let fila = boton.parentElement.parentElement;
        // lo pongo detras del hermano anterior:
        fila.previousElementSibling.before(fila);
    } catch (error) {
        alert("La fila no puede subir más.");
    }
}
function bajar(boton) {
    try {
        let fila = boton.parentElement.parentElement;
        // hago lo mismo que al subir, pero con el siguiente hermano
        fila.nextElementSibling.after(fila);
    } catch (error) {
        alert("La fila no puede bajar más.");
    }
}