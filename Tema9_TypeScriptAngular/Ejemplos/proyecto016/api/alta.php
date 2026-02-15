<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  //die($params);
  
  require_once "ArticulosDB.php";
  $conexion = ArticulosDB::connectDB();

  $conexion->exec("INSERT INTO articulos(descripcion,precio)
  VALUES ('$params->descripcion', $params->precio)");

  $conexion = null;
  
  header("HTTP/1.1 OK DATOS GRABADOS");
  header('Content-Type: application/json');
  echo json_encode($response);  
?>