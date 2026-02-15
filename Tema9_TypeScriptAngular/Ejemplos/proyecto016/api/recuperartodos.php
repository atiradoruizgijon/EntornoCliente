<?php 

  //sleep(3);

  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $con=retornarConexion();
  
  
  $con->set_charset("utf8") or
  die("Error cargando el conjunto de caracteres utf8: %s\n".mysqli_error($con));


  $registros=mysqli_query($con,"select codigo, descripcion, precio from articulos");
  $vec=[];  
  while ($reg=mysqli_fetch_array($registros))  
  {
    $vec[]=$reg;
  }
  
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>
