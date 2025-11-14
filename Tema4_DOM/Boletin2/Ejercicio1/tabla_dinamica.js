function insertarFila() {
    // recojo el texto con .value
    let texto = document.querySelector("#txtCaja").value;

    let tabla = document.querySelector("tbody");
    // introduzco la fila dentro de la tabla
    tabla.insertAdjacentHTML("beforeend", 
        `<tr>
        <td>${texto}</td>
        <td>
        <button onclick='copiarEncima()'>Copiar encima</button>
        <button onclick='borrar()'>Borrar</button>
        <button onclick='actualizar()'>Actualizar</button>
        <button onclick='subir()'>Arriba</button>
        <button onclick='bajar()'>Abajo</button>
        </td>
        </tr>`);
    }
    function intercambiarFilas() {
        // recojo los dos inputs con los que se indican las filas que quieres intercambiar
        let numFilas = document.querySelectorAll('input[type="number"]');
        // meto los valores en un array
        numFilas = [numFilas[0].value, numFilas[1].value];
        console.log(numFilas);
        // valido que no se haya salido de rango:
        let filas = document.querySelectorAll("tbody > tr");
        if (filas.length < numFilas[0] || filas.length < numFilas[1] || 0 > numFilas[0] || 0 > numFilas[1]) {
            alert("Filas indicadas fuera de rango.");
        } else {
            let aux = filas[numFilas[0] - 1];
            filas[numFilas[0] - 1] = filas[numFilas[1] - 1];
            filas[numFilas[1] - 1] = aux;
            // document.querySelector("tbody").innerHTML = filas.innerHTML; // mal
        }
}