function iniciar() {
    document.querySelector("#mifumador").addEventListener("change", fumador);
    // que se desabilite si se reseta o recarga el formulario:
    document.querySelector("#mifumador").addEventListener("load", fumador);
    addEventListener("reset", fumador);
    
    // queria hacerlo con el evento submit pero me da problemas no sé exactamente porqué
    document.querySelector("#enviar").addEventListener("click", comprobarCigarrillos);
}
addEventListener("load", iniciar);

// manejador de eventos de la casilla fumador:
function fumador(evt) {
    let checkbox = document.querySelector("#mifumador");
    
    let select = document.querySelector("#micigarrillos");
    if (checkbox.checked) {
        select.removeAttribute("disabled");
        select.setAttribute("required", "");
    } else {
        select.removeAttribute("required", "");
        select.setAttribute("disabled", "");
    }
    if (evt.type == 'reset') {
        select.setAttribute("disabled", "");
    }
}

// compruebo al mandar en el formulario que se manda un valor en el select
function comprobarCigarrillos(evt) {
    if (document.querySelector("#micigarrillos").selectedIndex == 0) {
        document.querySelector("#micigarrillos").setCustomValidity("Tienes que seleccionar un número de cigarrillos");
    } else {
        document.querySelector("#micigarrillos").setCustomValidity("");
    }
}