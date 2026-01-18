addEventListener("load", iniciar);

function iniciar() {
    comunidades();
    let select = document.querySelector("#comunidades");
    select.addEventListener("change", provincias);
}

// Comunidades:

function comunidades() {
    let xhr = new XMLHttpRequest();
    // configuro la peticion ajax
    xhr.open('GET', 'api_comunidades.php', true);
    xhr.timeout = 3000; // tiempo máximo de espera del API 3sg

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                // Con JSON.parse se convierte el texto JSON en un objeto JavaScript
                let comunidades = JSON.parse(xhr.responseText);
                rellenarComunidades(comunidades);

                document.querySelector(".carga").remove();
            } catch (ex) {
                document.querySelector("#error").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
            }
        } else {
            // Se ha recibido un código status de error
            document.querySelector("#error").innerHTML = "Error al cargar los datos";
        }
    };
    xhr.onloadstart = () => {
        document.querySelector("#comunidades").insertAdjacentHTML("afterend", "<p class='carga'>Cargando...</p>");
    };
    xhr.send();
}

function rellenarComunidades(comunidades) {
    let select = document.querySelector("#comunidades");
    // limpio el select y dejo la selección por defecto:
    select.innerHTML = "<option>Seleccionar</option>";
    comunidades.forEach(comunidad => {
        select.insertAdjacentHTML("beforeend", `<option value='${comunidad.id}'>${comunidad.nombre}</option>`);
    });
}

// Provincias:

function provincias() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'api_provincias.php', true);
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                // La api duelve en un XML, no puedo usar JSON.parse
                // let provincias = JSON.parse(xhr.responseText);
                rellenarProvincias(provincias);

                document.querySelector(".carga").remove();
            } catch (ex) {
                document.querySelector("#error").innerHTML = "Error al cargar parsear el XML: " + ex.message;
            }
        } else {
            // Se ha recibido un código status de error
            document.querySelector("#resultados").innerHTML = "Error al cargar los datos";
        }
    };
    xhr.onloadstart = () => {
        document.querySelector("#provincias").insertAdjacentHTML("afterend", "<p class='carga'>Cargando...</p>");
    };
    xhr.send();
}

function rellenarProvincias(provincias) {
    let select = document.querySelector("#provincias");
    // limpio el select y dejo la selección por defecto:
    select.innerHTML = "<option>Seleccionar</option>";
    provincias.forEach(provincia => {
        select.insertAdjacentHTML("beforeend", `<option value='${provincia.id}'>${provincia.nombre}</option>`);
    });
}