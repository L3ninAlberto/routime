<?php
// EJECUTAR CLASE "ConexionBD.php" AUTOMÁTICAMENTE, PARA SÓLO MANDAR A LLAMAR LA CONEXIÓN

// instanciamos la clase y obtenemos la conexión
require_once("./classes/ConexionBD.php");
$ClaseConexion = new ConexionBD;
$conexionBD = $ClaseConexion -> conectarBD();

?>