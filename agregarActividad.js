// cambiar el título de la página
const tituloPagina = document.getElementById("titulo-pagina");
tituloPagina.textContent = "Agregar actividad";


// obtener los colores disponibles a elegir de la BD
const formData = new FormData();
formData.append("funcion", "obtenerTodosColoresActividad");

fetch("./backend/api.php", {
    method: "POST",
    body: formData
})
    .then(res => res.json())
    .then(data => {

        // renderizar los inputs de colores
        const seccion_inputs_color = document.getElementById("seccion-inputs-color");
        
        data.forEach(d => {
            seccion_inputs_color.innerHTML +=
                `
                    <label class="btn-radio" style="background-color: ${d.color}">
                        <input type="radio" class="input-radio" name="color" value="${d.id_color_actividad}" onclick="seleccionarColor(this.value)">
                        <span class="radio-seleccionado"></span>
                    </label>
                `
        });
        
    });



document.getElementById("form").addEventListener("submit", e => {

    e.preventDefault();

})



const agregarActividad = () => {
    
    // obtener los datos de los campos en el formulario
    const titulo = document.getElementById("input-titulo").value;

    const campo_hora_inicial = document.getElementById("input-hora-inicial").value;
    const campo_hora_final = document.getElementById("input-hora-final").value;

    const notificacion = document.getElementById("input-notificacion").value;
    const id_color = document.getElementById("input-color").value;
    
    const id_tablero_rutina = localStorage.getItem("id_tablero_rutina");


    // validar si algunos campos importantes tienen datos antes de registrarse
    if (titulo != "" && campo_hora_inicial != "" && campo_hora_final != "") {

        const formData = new FormData();
        formData.append("funcion", "registrarActividad");
        formData.append("titulo", titulo);
        formData.append("hora_inicial", campo_hora_inicial);
        formData.append("hora_final", campo_hora_final);
        formData.append("notificacion", notificacion);
        formData.append("fk_color_actividad", id_color);
        formData.append("fk_tablero_rutina", id_tablero_rutina);

        fetch("./backend/api.php", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(r => {

                if (r.codigo == "1") {
                    window.location.href = "tableroRutina.html";
                } else {
                    document.getElementById("msj-actividad-no-registrada").style.display = "inline";
                }

            });

    }

}


const seleccionarNotificacion = () => {

    // invertir valor del input notificación dependiendo si es 0 o 1, y cambiar la imagen de la campana
    if (document.getElementById("input-notificacion").value == "0") {
    
        document.getElementById("input-notificacion").value = "1";
        document.getElementById("campana-notificacion").setAttribute("src", "./resources/notificacion-1.png");

    } else {
        
        document.getElementById("input-notificacion").value = "0";
        document.getElementById("campana-notificacion").setAttribute("src", "./resources/notificacion-0.png");

    }

}


const seleccionarColor = (color) => {
    document.getElementById("input-color").value = color;
}