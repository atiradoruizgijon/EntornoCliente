<?php 
  require_once "ArticulosDB.php";

  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $conexion = ArticulosDB::connectDB();
  
  $conexion->exec("UPDATE articulos 
  SET descripcion='$params->descripcion',
  precio=$params->precio,
  WHERE codigo=$params->codigo");
  
  $conexion = null;

  header("HTTP/1.1 OK DATOS CODIFICADOS");
  header('Content-Type: application/json');
  echo json_encode($response);  
?>