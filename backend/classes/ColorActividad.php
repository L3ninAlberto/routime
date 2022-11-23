<?php

class ColorActividad {
    
    // usamos __construct para recibir la conexión de la BD y la declaramos como una variable para usarla en esta clase con $this
    function __construct( $conexionBDEnviada ){

        $this -> conexionBD = $conexionBDEnviada;

    }

    function obtenerTodosColoresActividad(){

        $sql = "SELECT * FROM color_actividad";

        $query = $this -> conexionBD -> prepare($sql);

        $query -> execute();

        $resultado = $query -> fetchAll(PDO::FETCH_ASSOC);

        return json_encode($resultado);

    }

}

?>