<?php

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
            echo "Conexión exitosa.";

        }catch( PDOException $error ){

            echo "Conexion fallida. Error: " . $error;

        }

    }

}

?>