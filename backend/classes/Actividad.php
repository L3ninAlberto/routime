<?php

class Actividad {

    // usamos __construct para recibir la conexión de la BD y la declaramos como una variable para usarla en esta clase con $this
    function __construct( $conexionBDEnviada ){

        $this -> conexionBD = $conexionBDEnviada;

    }

    function registrarActividad($POST){

        // return json_encode($POST);
        $sql = "INSERT INTO actividad VALUES(null,?,?,?,?,?,?,?,?)";
        
        $query = $this -> conexionBD -> prepare($sql);

        $query -> bindParam(1, $POST["titulo"]);
        $query -> bindParam(2, $POST["hora_inicial"]);
        $query -> bindParam(3, $POST["periodo_hora_inicial"]);
        $query -> bindParam(4, $POST["hora_final"]);
        $query -> bindParam(5, $POST["periodo_hora_final"]);
        $query -> bindParam(6, $POST["notificacion"]);
        $query -> bindParam(7, $POST["fk_tablero_rutina"]);
        $query -> bindParam(8, $POST["fk_color_actividad"]);

        if($query -> execute()){

            return json_encode([
                "codigo" => 1,
                "mensaje" => "Actividad registrada."
            ]);

        }else{

            return json_encode([
                "codigo" => 0,
                "mensaje" => "Registro fallido."
            ]);

        }


    }

}


?>