<?php
    include_once "Alumno.php";

    $alumno = new Alumno("", $_POST['nombre'], $_POST['mail'], $_POST['curso'], $_POST['repetidor'], $_POST['observaciones']);
    try {
        $alumno->insert();
        header("HTTP 200 OK");
    } catch (\Throwable $th) {
        header("HTTP/1.1 401");
    }
?>