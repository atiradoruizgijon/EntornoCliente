<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","toor","articulos");
  return $con;
}
?>
