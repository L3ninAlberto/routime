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

                seccion_actividades.innerHTML +=
                `
                    <div class="cont-actividad">

                        <div class="barra-color" style="background-color: ${a.color}"></div>

                        <div class="cont-2">
                            <div class="cont-3">
                                <h3 class="nombre-actividad">${a.titulo}</h3>
                            </div>
                            
                            <span class="complemento-actividad">De</span>
                            <span class="hora-actividad">${a.hora_inicial}</span>
                            <span class="periodo-actividad">${a.periodo_hi}</span>
                            <span class="complemento-actividad">a</span>
                            <span class="hora-actividad">${a.hora_final}</span>
                            <span class="periodo-actividad">${a.periodo_fi}</span>
                        </div>
                        
                    </div>
                `;

            });

        }
        
    });