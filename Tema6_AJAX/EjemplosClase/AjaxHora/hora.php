<?php
sleep(3); // Metemos un retardo intencionado de 3sg para que el servidor se demore en dar la respuesta

// cabecera del respose HTTP del servidor para el cliente:
header('Content-Type: text/plain; charset=utf-8'); 
// en el indicamos si es texto plano, si es un JSON, XML, etc. 

// Esto es el body:
echo "The time is " . date("h:i:sa");
// El body del reponse HTTP, mientras que el header de arriba, es la cabecera.