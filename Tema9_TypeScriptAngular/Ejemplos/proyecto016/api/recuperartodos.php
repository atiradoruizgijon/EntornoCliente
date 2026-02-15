<?php
  require_once "ArticulosDB.php";

  //sleep(3);

  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $conexion = ArticulosDB::connectDB();

  $consulta = $conexion->query("SELECT codigo, descripcion, precio FROM articulos");
  $vec = $consulta->fetchAll(PDO::FETCH_ASSOC);
  
  $conexion = null;

  $vec = json_encode($vec);
  header("HTTP/1.1 OK ARTICULOS RECUPERADOS");
  header('Content-Type: application/json');
  echo $vec;
?>
