<?php
    include_once "Alumno.php";
    $alumnos = Alumno::getAlumnos();

    header("HTTP/1.1 200 OK");
    echo json_encode($alumnos);
?>