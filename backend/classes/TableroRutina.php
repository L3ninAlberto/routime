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

    function obtenerDatosTablero($id_tablero_rutina){

        $sql = "SELECT dia FROM tablero_rutina WHERE id_tablero_rutina = $id_tablero_rutina";

        $query = $this -> conexionBD -> prepare($sql);

        $query -> execute();

        $resultado1 = $query -> fetchAll(PDO::FETCH_ASSOC);



        $sql2 = "SELECT a.*, c.color FROM actividad a INNER JOIN color_actividad c ON a.fk_color_actividad = c.id_color_actividad WHERE fk_tablero_rutina = $id_tablero_rutina ORDER BY a.hora_inicial ASC";

        $query2 = $this -> conexionBD -> prepare($sql2);

        $query2 -> execute();

        $resultado2 = $query2 -> fetchAll(PDO::FETCH_ASSOC);


        // validar si no hay resultados en actividades
        if($resultado2 == null){
            $resultado2 = [];
        }

        // crear un arreglo general para los dos resultados
        $datos=[
            $resultado1[0],
            $resultado2
        ];
        
        return json_encode($datos);

    }


}

?>