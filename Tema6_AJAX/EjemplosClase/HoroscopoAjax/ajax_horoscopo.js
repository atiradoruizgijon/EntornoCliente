addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
  // Añadimos un manejador de eventos compartido para todos los hiperenlaces en el HTML
  for (var f = 1; f <= 12; f++) {
    var ob = document.getElementById('enlace' + f);
    ob.addEventListener('click', presionEnlace, false);
  }
}

function presionEnlace(e) {
  e.preventDefault(); // Cancela la acción del hiperenlace. Solo queremos rescatar el atributo href y con dicha información realizar la petición AJAX
  var url = e.target.getAttribute('href'); // En la variable url tendremos algo similar a "pagina1.php?cod=4"
  cargarHoroscopo(url);
}


// La siguiente función realiza la petición Ajax
function cargarHoroscopo(url) {
  let xhr = new XMLHttpRequest();  // Creamos una instancia del objeto Ajax
  xhr.open("GET", url, true); // Petición asíncrona de tipo GET. Los parámetros irán en la propia url
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      document.querySelector("#detalles").textContent = xhr.responseText;
    } else {
      document.querySelector("#detalles").textContent = `Error al cargar los datos (HTTP ${xhr.status})`;
    }
  };
  xhr.onloadstart = () => {
    document.querySelector("#detalles").textContent = 'Cargando...';
  };
  xhr.send();
}
