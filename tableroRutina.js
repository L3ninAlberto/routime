// obtener los datos del tablero de rutina a partir de su ID
const id_tablero_rutina = localStorage.getItem("id_tablero_rutina");

const formData = new FormData();
formData.append("funcion", "obtenerDatosTablero");
formData.append("id_tablero", id_tablero_rutina);

fetch("./backend/api.php", {
    method: "POST",
    body: formData
})
    .then(res => res.json())
    .then(data => {

        // renderizar el nombre del tablero y el botón para regresar al index
        document.getElementById("header-app").innerHTML = 
            `
            <h1 id="titulo-pagina"></h1>
            
            <img src="./resources/btn-regresar.png" alt="btn-regresar" id="btn-regresar" onclick="regresarAindex()">
            `

        // cambiar el título de la página por el nombre del día
        const tituloPagina = document.getElementById("titulo-pagina");
        tituloPagina.textContent = data[0].dia;

        
        const seccion_actividades = document.getElementById("seccion-actividades");

        // validar si el tablero tiene actividades
        if ( data[1].length == 0 ) {
            
            seccion_actividades.innerHTML =
            `
                <span id="no-actividades">Aún no hay actividades, ¡Agrega alguna!</span>
            `

        } else {
            
            // renderizar las actividades
            data[1].forEach(a => {

                const horasYperiodos = obtenerHorasYperiodos(a.hora_inicial, a.hora_final);

                seccion_actividades.innerHTML +=
                `
                    <div class="cont-actividad">

                        <div class="barra-color" style="background-color: ${a.color}"></div>

                        <div class="cont-2">
                            <div class="cont-3">
                                <h3 class="nombre-actividad">${a.titulo}</h3>
                                
                                <img src="./resources/btn-eliminar.png" alt="btn_eliminar_actividad" class="btn-eliminar-actividad" onclick="eliminarActividad('${a.id_actividad}', '${a.titulo}')">
                            </div>
                            
                            <span class="complemento-actividad">De</span>
                            <span class="hora-actividad">${horasYperiodos.hora_inicial}</span>
                            <span class="periodo-actividad">${horasYperiodos.periodo_hi}</span>
                            <span class="complemento-actividad">a</span>
                            <span class="hora-actividad">${horasYperiodos.hora_final}</span>
                            <span class="periodo-actividad">${horasYperiodos.periodo_hf}</span>
                        </div>
                        
                    </div>
                `;

            });

        }
        
    });


const obtenerHorasYperiodos = (campo_hora_inicial, campo_hora_final) => {

    // separar todo el valor del campo en horas y minutos a través de ":"
    const datos_hora_inicial = campo_hora_inicial.split(":");
    const hora_i = datos_hora_inicial[0];
    const minutos_i = datos_hora_inicial[1];

    const datos_hora_final = campo_hora_final.split(":");
    const hora_f = datos_hora_final[0];
    const minutos_f = datos_hora_final[1];

    // calcular hora en formato 12 horas
    const hora_i_completa = calcularHoraFormato12Horas(hora_i, minutos_i);
    const hora_f_completa = calcularHoraFormato12Horas(hora_f, minutos_f);

    // separar valores de hora
    const datos_hora_i_completa = hora_i_completa.split(" ");
    const hora_inicial = datos_hora_i_completa[0];
    const periodo_hora_inicial = datos_hora_i_completa[1];

    const datos_hora_f_completa = hora_f_completa.split(" ");
    const hora_final = datos_hora_f_completa[0];
    const periodo_hora_final = datos_hora_f_completa[1];

    const horasYperiodos = {
        "hora_inicial": hora_inicial,
        "periodo_hi": periodo_hora_inicial,
        "hora_final": hora_final,
        "periodo_hf": periodo_hora_final,
    }
        
    return horasYperiodos;

}


const calcularHoraFormato12Horas = (hora, minutos) => {

    var periodo;

    if (hora > 12) {
        // son horas como 15:00 (las 3 de la tarde)

        periodo = "PM";

        hora -= 12;

        // "-=" es la "asignación de resta", que resta 12 a la variable "hora" y el resultado lo guarda en la misma variable. La resta obtiene la diferencia entre las horas dando su valor en formato 12 horas. P. ej: 15 - 12 = 3 (las 3 de la tarde)

    } else if (hora < 12) {
        // son horas entre 00:00 y 12:00, el rango de las horas de la mañana

        periodo = "AM";

        if (hora == 0) {
            // debemos cambiar el valor de la variable a 12, porque no existe 00:00 en formato 12 horas, sólo el número 12
            hora = 12;
        }

    } else {
        // "hora" es igual a 12, son las 12 de la tarde
        periodo = "PM";
    }

    // retornar hora completa
    return hora + ":" + minutos + " " + periodo;

}


const regresarAindex = () => window.location.href = "index.html";

const eliminarActividad = (id_actividad, titulo_actividad) => {
    
    if (window.confirm(`¿Eliminar actividad: "${titulo_actividad}"?`)) {
        
        const formData = new FormData();
        formData.append("funcion", "eliminarActividad");
        formData.append("id_actividad", id_actividad);

        fetch("./backend/api.php", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(r => {

                if (r.codigo == "1") {
                    
                    // recargar página
                    window.location.href = "tableroRutina.html";

                } else {
                    alert("Actividad no eliminada, inténtalo de nuevo.");
                }

            });

    }

}