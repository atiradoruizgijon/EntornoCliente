<?php
    include_once "Alumno.php";
    $alumnos = Alumno::getAlumnos();

    header("HTTP/1.1 200 OK");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    echo json_encode($alumnos);
?>