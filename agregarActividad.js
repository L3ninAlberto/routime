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
    const titulo = document.getElementById("input-titulo").value;

    const campo_hora_inicial = document.getElementById("input-hora-inicial").value;
    const campo_hora_final = document.getElementById("input-hora-final").value;
    

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

    console.log(hora_i_completa);
    console.log(hora_f_completa);
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