<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  require_once "ArticulosDB.php";
  $conexion = ArticulosDB::connectDB();

  $consulta = $conexion->query("DELETE FROM articulos WHERE codigo=$_GET[codigo]");
  
  $conexion = null;
  
  header("HTTP/1.1 OK ARTICULO BORRADO");
  header('Content-Type: application/json');
  echo json_encode($response);  
?>