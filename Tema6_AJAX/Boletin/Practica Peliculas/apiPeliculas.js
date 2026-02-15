// tipos de peliculas para mostrarlos luego en la tabla:
const TIPOS = {
    "movie":"Película",
    "series":"Serie",
    "episode":"Episodio"
};

addEventListener("load", iniciar);

function iniciar() {
    let submit = document.querySelector(".form__submit");
    submit.addEventListener("click", peticion);
    
}

function peticion(evt) {
    // hago preventDefault al submit para que no haga nada
    evt.preventDefault();

    // obtengo los datos del formulario:
    let titulo = encodeURI(document.querySelector(".form__input").value);
    let tipo = document.querySelector(".form__select").value;
    console.log(titulo);
    console.log(tipo);

    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://www.omdbapi.com/?apikey=db107b00&s=${titulo}&type=${tipo}`, true);
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                let peliculas = JSON.parse(xhr.responseText);
                // console.log(peliculas.Search);
                

                // si la API devuelve un error lo muestro:
                if (peliculas.Error != null) {
                    document.querySelector("tbody").innerHTML = `<p>Error: ${peliculas.Error}</p>`;    
                } else {
                    // la API no devuelve directamente un array de peliculas
                    // tengo que obtenerlo accediendo a Search
                    poblarTablaPeliculas(peliculas.Search);
                }
            } catch (ex) {
                document.querySelector("tbody").innerHTML = `<p>Error: ${ex.message}</p>`;    
            }
        } else {
            // se ha recibido un código status de error
            document.querySelector("tbody").innerHTML = `<p>Error al cargar los datos</p>`;
        }
    };

    xhr.timeout = 3000;
    
    xhr.ontimeout = () => {
        document.getElementById("tbody").innerHTML = "Tiempo de espera vencido";
    };

    xhr.send();
}

function poblarTablaPeliculas(peliculas) {
    let tbody = document.querySelector(".table__body");
    tbody.innerHTML = "";
    peliculas.forEach(pelicula => {
        tbody.insertAdjacentHTML("beforeend", 
            `<tr class="body__tr"}>
                <td class="body__td">${pelicula.Title}</td>
                <td class="body__td">${pelicula.Year}</td>
                <td class="body__td">${TIPOS[pelicula.Type]}</td>
                <td class="body__td">
                    <figure class="poster">
                        <img class="poster__img" src="${pelicula.Poster}" alt="Poster de ${pelicula.Title}">
                    <figure>
                </td>
            </tr>`);
    });
}