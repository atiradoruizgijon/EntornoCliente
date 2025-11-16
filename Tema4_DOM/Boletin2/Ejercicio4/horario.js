let dias = [
    { id: 1, nombre: 'L' },
    { id: 2, nombre: 'M' },
    { id: 3, nombre: 'X' },
    { id: 4, nombre: 'J' },
    { id: 5, nombre: 'V' }
];
let asignaturas = [
    { id: 0, nombre: '-', horas: 0, color: 'gray' },
    { id: 1, nombre: 'DWEC', horas: 6, color: 'red' },
    { id: 2, nombre: 'DWES', horas: 8, color: 'cyan' },
    { id: 3, nombre: 'HLC', horas: 3, color: 'yellow' },
    { id: 4, nombre: 'EIE', horas: 4, color: 'blue' },
    { id: 5, nombre: 'DIW', horas: 6, color: 'magenta' },
    { id: 6, nombre: 'DAW', horas: 3, color: 'brown' }
];
let profesores = [
    { id: 0, nombre: '-', correo: '-' },
    { id: 1, nombre: 'Javier', correo: 'jsoldado@iesruizgijon.com' },
    { id: 2, nombre: 'Rubén', correo: 'fortiz@iesruizgijon.com' },
    { id: 3, nombre: 'Francisco', correo: 'fjmatias@iesruizgijon.com' },
    { id: 4, nombre: 'Rosa', correo: 'rcortes@iesruizgijon.com' },
    { id: 5, nombre: 'David', correo: 'dlinde@iesruizgijon.com' },
    { id: 6, nombre: 'Eloy', correo: 'eadiaz@iesruizgijon.com' },
    { id: 7, nombre: 'Rafael', correo: 'ralonso@iesruizgijon.com' }
];
let tramos = [
    { id: 1, hora: '8:00-9:00', descripcion: '1ª Hora' },
    { id: 2, hora: '9:00-10:00', descripcion: '2ª Hora' },
    { id: 3, hora: '10:00-11:00', descripcion: '3ª Hora' },
    { id: 4, hora: '11:00-12:00', descripcion: '4ª Hora' },
    { id: 5, hora: '12:00-12:30', descripcion: 'RECREO' },
    { id: 6, hora: '12:30-13:30', descripcion: '5ª Hora' },
    { id: 7, hora: '13:30-14:30', descripcion: '6ª Horas' }
];
let horario = [
    {
        idTramo: 1, asignaturas: [
            { idDia: 1, idAsignatura: 4, idProfesor: 6 },
            { idDia: 2, idAsignatura: 3, idProfesor: 5 },
            { idDia: 3, idAsignatura: 6, idProfesor: 4 },
            { idDia: 4, idAsignatura: 1, idProfesor: 7 },
            { idDia: 5, idAsignatura: 6, idProfesor: 4 }
        ]
    },
    {
        idTramo: 2, asignaturas: [
            { idDia: 1, idAsignatura: 5, idProfesor: 3 },
            { idDia: 2, idAsignatura: 1, idProfesor: 1 },
            { idDia: 3, idAsignatura: 2, idProfesor: 2 },
            { idDia: 4, idAsignatura: 1, idProfesor: 7 },
            { idDia: 5, idAsignatura: 6, idProfesor: 4 },
        ]
    },
    {
        idTramo: 3, asignaturas: [
            { idDia: 1, idAsignatura: 4, idProfesor: 6 },
            { idDia: 2, idAsignatura: 1, idProfesor: 1 },
            { idDia: 3, idAsignatura: 2, idProfesor: 2 },
            { idDia: 4, idAsignatura: 2, idProfesor: 2 },
            { idDia: 5, idAsignatura: 1, idProfesor: 1 },
        ]
    },
    {
        idTramo: 4, asignaturas: [
            { idDia: 1, idAsignatura: 2, idProfesor: 2 },
            { idDia: 2, idAsignatura: 2, idProfesor: 2 },
            { idDia: 3, idAsignatura: 2, idProfesor: 2 },
            { idDia: 4, idAsignatura: 5, idProfesor: 3 },
            { idDia: 5, idAsignatura: 1, idProfesor: 1 },
        ]
    },
    {
        idTramo: 5, asignaturas: [
            { idDia: 1, idAsignatura: 0, idProfesor: 0 },
            { idDia: 2, idAsignatura: 0, idProfesor: 0 },
            { idDia: 3, idAsignatura: 0, idProfesor: 0 },
            { idDia: 4, idAsignatura: 0, idProfesor: 0 },
            { idDia: 5, idAsignatura: 0, idProfesor: 0 },
        ]
    },
    {
        idTramo: 6, asignaturas: [
            { idDia: 1, idAsignatura: 2, idProfesor: 2 },
            { idDia: 2, idAsignatura: 4, idProfesor: 6 },
            { idDia: 3, idAsignatura: 5, idProfesor: 3 },
            { idDia: 4, idAsignatura: 5, idProfesor: 3 },
            { idDia: 5, idAsignatura: 3, idProfesor: 5 },
        ]
    },
    {
        idTramo: 7, asignaturas: [
            { idDia: 1, idAsignatura: 2, idProfesor: 2 },
            { idDia: 2, idAsignatura: 4, idProfesor: 6 },
            { idDia: 3, idAsignatura: 5, idProfesor: 3 },
            { idDia: 4, idAsignatura: 5, idProfesor: 3 },
            { idDia: 5, idAsignatura: 3, idProfesor: 5 }
        ]
    }
];

function crearHorario(){
    let tabla = document.querySelector("table");
    tabla.innerHTML = ""; // para que no se duplique reseteo la tabla antes de crearla si se vuelve a pulsar.

    tabla.insertAdjacentHTML("beforeend", "<thead><tr><td></td></tr></thead>");
    dias.forEach(element => {
        tabla.firstElementChild.firstElementChild.insertAdjacentHTML("beforeend", `<td>${element.nombre}</td>`);
    });

    tabla.insertAdjacentHTML("beforeend", "<tbody></tbody>");

    horario.forEach(element => {
        // aqui añado una nueva fila con su hora correspondiente:
        tabla.lastElementChild.insertAdjacentHTML("beforeend",
            `<tr>
            <td>${tramos[element.idTramo - 1].hora} (${tramos[element.idTramo - 1].descripcion})</td>
            </tr>
        `);
        // bucle que recorre cada asignatura del tramo
        for (let i = 0; i < 5; i++) {
            tabla.lastElementChild.lastElementChild.insertAdjacentHTML("beforeend", `
                <td style="background-color: ${asignaturas[element.asignaturas[i].idAsignatura].color};">${asignaturas[element.asignaturas[i].idAsignatura].nombre} ${profesores[element.asignaturas[i].idProfesor].nombre}</td>
            `);
        }
    });
}