<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
      echo "Nombre: ".$_REQUEST['minombre']."<br>";
      echo "Sexo: ".$_REQUEST['misexo']."<br>";
      echo "Altura: ".$_REQUEST['mialtura']." cm <br>";
      echo "Fecha de Nacimiento: ".$_REQUEST['mifecha']."<br>";
      if (isset($_REQUEST['misemana']) && $_REQUEST['misemana'] != "") echo "Semana de preferencia: ".$_REQUEST['misemana']."<br>";
      
      if (isset($_REQUEST['mifumador']) && $_REQUEST['mifumador'] == "") {
        echo "Fumador: Sí<br>";
      } else {
        echo "Fumador: No<br>";
      }

      if (isset($_REQUEST['micigarrillos'])) echo "Nº de cigarrillos: ".$_REQUEST['micigarrillos']."<br>";
      if (isset($_REQUEST['miobservaciones']) && $_REQUEST['miobservaciones'] != "") echo "Observación: ".$_REQUEST['miobservaciones'];
    ?>
</body>
</html>