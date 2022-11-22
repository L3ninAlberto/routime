<?php
// GESTIÓN DE LAS PETICIONES

require_once("./conectarBD.php");

require_once("./classes/TableroRutina.php");

// instanciamos la clase TableroRutina y le mandamos la variable $conexión de "conectarBD.php"
$TableroRutina = new TableroRutina($conexionBD);



$funcion = $_POST["funcion"];

switch ($funcion){
    case "obtenerTodosTablerosRutina":
        echo $TableroRutina -> obtenerTodosTablerosRutina();
        break;
    
    default:
        echo "No se ha especificado una función.";
        break;
}

?>