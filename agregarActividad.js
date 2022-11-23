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
                        <input type="radio" class="input-radio" name="color" value="${d.id_color_actividad}">
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

}