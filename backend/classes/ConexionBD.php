<?php
// CONEXIÓN A LA BASE DE DATOS
// necesita ser instanciada para ejecutarse

class ConexionBD{

    function conectarBD(){
        
        // credenciales BD
        $host = "localhost";
        $usuario = "root";
        $pw = "";
        $nombreBD = "routime";

        // conexión
        try{

            $conexion = new PDO( "mysql:host=$host; dbname=$nombreBD", $usuario, $pw );

            $conexion -> setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
            // variables en caso de haber error en la conexión

            // echo json_encode("Conexión exitosa.");
            // echo "Conexión exitosa.";
            return $conexion;

        }catch( PDOException $error ){

            echo "Conexion fallida. Error: " . $error;

        }

    }

}

?>