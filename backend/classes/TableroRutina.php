<?php
    
class TableroRutina{

    // usamos __construct para recibir la conexión de la BD y la declaramos como una variable para usarla en esta clase con $this
    function __construct( $conexionBDEnviada ){

        $this -> conexionBD = $conexionBDEnviada;

    }

    function obtenerTodosTablerosRutina(){

        $sql = "SELECT * FROM tablero_rutina";

        $query = $this -> conexionBD -> prepare($sql);

        $query -> execute();

        $resultado = $query -> fetchAll(PDO::FETCH_ASSOC);

        return json_encode($resultado);

    }


}

?>