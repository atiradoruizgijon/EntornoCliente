let encabezados = ["Horas", "Previsión", "Viento", "Velocidad", "Lluvias"];
let datos = [
    {
        hora: "19:00",
        prevision: { temperatura: "33º", icono: "sol" },
        viento: "oeste",
        velocidad: "15 km/h",
        lluvias: "0 mm"
    },
    {
        hora: "20:00",
        prevision: { temperatura: "30º", icono: "sol" },
        viento: "norte",
        velocidad: "5 km/h",
        lluvias: "10 mm"
    },
    {
        hora: "21:00",
        prevision: { temperatura: "28º", icono: "luna" },
        viento: "sur",
        velocidad: "0 km/h",
        lluvias: "5 mm"
    },

];

let tabla = document.querySelector("table");
// inserto la fila de la cabecera:
tabla.insertAdjacentHTML("beforeend", "<thead><tr></tr></thead>");

encabezados.forEach(element => {
    tabla.firstElementChild.firstElementChild.insertAdjacentHTML("beforeend", `<td>${element}</td>`);
});
// inserto el cuerpo de la tabla
tabla.insertAdjacentHTML("beforeend", "<tbody></tbody>");
datos.forEach(element => {
    tabla.children[1].insertAdjacentHTML("beforeend", `<tr>
        <td>${element.hora}</td>
        <td>${element.prevision.temperatura}<img src='${element.prevision.icono}.png'></td>
        <td><img src='${element.viento}.png'></td>
        <td>${element.velocidad}</td>
        <td>${element.lluvias}</td>
        </tr>`);
    });
    // negrita en las horas:
    let horas = document.querySelectorAll("td:first-child");
    horas.forEach((element) => {
        element.style.fontWeight = "bold";
    });
    // negrita y azul en la columna de lluvia
    let lluvia = document.querySelectorAll("tbody td:last-child");
    lluvia.forEach((element) => {
        element.style.fontWeight = "bold";
        element.style.color = "blue";
    });

    // encabezado en negrita:
    tabla.firstElementChild.firstElementChild.style.fontWeight = "bold";