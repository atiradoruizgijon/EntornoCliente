function bonoloto() {
    let array = [];
    let aleatorio;

    for (let i = 0; i < 6; i++) {
        do {
            aleatorio = Math.round((Math.random() * 48) + 1);
        } while (array.includes(aleatorio));

        array[i] = aleatorio;
    }
    return array;
}

function generar() {
    let tabla = document.querySelector("table");
    tabla.innerHTML = "";

    tabla.insertAdjacentHTML("beforeend", "<tbody></tbody>");
    let aleatorios = bonoloto();
    console.log(aleatorios);

    let contador = 1;
    for (let i = 1; i < 8; i++) {
        tabla.firstElementChild.insertAdjacentHTML("beforeend", "<tr></tr>");
        for (let j = 1; j < 8; j++) {
            if (aleatorios.includes(contador)) {
                tabla.firstElementChild.lastChild.insertAdjacentHTML("beforeend", `<td class="ganador">${contador++}</td>`);
            } else {
                tabla.firstElementChild.lastChild.insertAdjacentHTML("beforeend", `<td>${contador++}</td>`);
            }
        }
    }
}