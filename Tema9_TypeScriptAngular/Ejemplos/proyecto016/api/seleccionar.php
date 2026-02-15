<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require_once "ArticulosDB.php";
  $conexion = ArticulosDB::connectDB();

  $consulta = $conexion->query("SELECT codigo, descripcion, precio FROM articulos WHERE codigo=$_GET[codigo]");
  $conexion = null;
  
  $vec = $consulta->fetch(PDO::FETCH_ASSOC);
  
  $cad = json_encode($vec);
  echo $cad;
  header("HTTP/1.1 OK ARTICULO SELECCIONADO");
  header('Content-Type: application/json');
?>