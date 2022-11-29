<?php
// GESTIÓN DE LAS PETICIONES

require_once("./conectarBD.php");

require_once("./classes/TableroRutina.php");
require_once("./classes/ColorActividad.php");
require_once("./classes/Actividad.php");

// instanciamos la clase TableroRutina y le mandamos la variable $conexión de "conectarBD.php"
$TableroRutina = new TableroRutina($conexionBD);
$ColorActividad = new ColorActividad($conexionBD);
$Actividad = new Actividad($conexionBD);



$funcion = $_POST["funcion"];

switch ($funcion){
    // TableroRutina
    case "obtenerTodosTablerosRutina":
        echo $TableroRutina -> obtenerTodosTablerosRutina();
        break;

    case "obtenerDatosTablero":
        echo $TableroRutina -> obtenerDatosTablero($_POST["id_tablero"]);
        break;

    // ColorActividad
    case "obtenerTodosColoresActividad":
        echo $ColorActividad -> obtenerTodosColoresActividad();
        break;
    
    // Actividad
    case "registrarActividad":
        echo $Actividad -> registrarActividad($_POST);
        break;
        
    case "eliminarActividad":
        echo $Actividad -> eliminarActividad($_POST["id_actividad"]);
        break;
    
    default:
        echo "No se ha especificado una función.";
        break;
}

?>