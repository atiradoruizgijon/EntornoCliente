let paises = [
    { nombre: 'Francia', capital: 'París', datos: { gobierno: 'República', habitantes: 67407241, idioma: 'francés' }, imagen: 'imagenes/france.png' },
    { nombre: 'Alemania', capital: 'Berlín', datos: { gobierno: 'República federal', habitantes: 83149300, idioma: 'alemán' }, imagen: 'imagenes/germany.png' },
    { nombre: 'Italy', capital: 'Roma', datos: { gobierno: 'República parlamentaria', habitantes: 60257566, idioma: 'italiano' }, imagen: 'imagenes/italy.png' },
    { nombre: 'Portugal', capital: 'Lisboa', datos: { gobierno: 'República unitaria', habitantes: 10295909, idioma: 'portugués' }, imagen: 'imagenes/portugal.png' },
    { nombre: 'España', capital: 'Madrid', datos: { gobierno: 'Monarquía parlamentaria', habitantes: 47450795, idioma: 'español' }, imagen: 'imagenes/spain.png' },
];
// contador para la columna de numeros:
let contador = 1;

let tabla = document.querySelector("table");
tabla.insertAdjacentHTML("beforeend", `<thead>
    <td>Nº</td>
    <td>País</td>
    <td>Capital</td>
    <td>Habitantes</td>
    <td>Bandera</td>
    <td>Acciones</td>
    </thead>`);


tabla.insertAdjacentHTML("beforeend", "<tbody></tbody>");
paises.forEach(element => {
    tabla.children[1].insertAdjacentHTML("beforeend", `<tr>
        <td>${contador++}</td>
        <td>${element.nombre}</td>
        <td>${element.capital}</td>
        <td>${element.datos.habitantes}</td>
        <td><img src="${element.imagen}"></td>
        <td>
            <button onclick='idioma(this)'>Idioma</button>
            <button onclick='borrar(this)'>Borrar</button>
            <button onclick='subir(this)'>Arriba</button>
            <button onclick='bajar(this)'>Abajo</button>
        </td>
        </tr>`);
});

// funciones modificadas cogidas del primer ejercicio:
function borrar(boton) {
    // del boton voy al segundo td y de ahi al tr:
    let fila = boton.parentElement.parentElement;
    fila.remove();
}
function idioma(boton) {
    let indice = boton.parentElement.parentElement.firstElementChild.innerHTML;
    alert(`El idioma de los habitantes de ${paises[indice - 1].nombre} es el ${paises[indice - 1].datos.idioma}`);
}
function subir(boton) {
    try {
        
        let fila = boton.parentElement.parentElement;
        
        fila.previousElementSibling.before(fila);
    } catch (error) {
        alert("La fila no puede subir más.");
    }
}
function bajar(boton) {
    try {
        let fila = boton.parentElement.parentElement;

        fila.nextElementSibling.after(fila);
    } catch (error) {
        alert("La fila no puede bajar más.");
    }
}