// cambiar el título de la página
const tituloPagina = document.getElementById("titulo-pagina");
tituloPagina.textContent = "Tableros de rutina";




// obtener todos los tableros de rutina
const formData = new FormData();
formData.append("funcion", "obtenerTodosTablerosRutina");

fetch("./backend/api.php", {
    method: "POST",
    body: formData
})
.then(res => res.json())
.then(data => {
    
    // renderizar tableros de rutina
    const seccion_tableros = document.getElementById("seccion-tableros");

    data.forEach(t => {
        seccion_tableros.innerHTML +=
            `
                <div class="tablero-rutina">
                    <a href="./tableroRutina.html" onClick="definir_id_tablero(${t.id_tablero_rutina})" class="titulo-tablero-1">
                        <h2>${t.dia}</h2>
                    </a>
                </div>
            `
    });

});


const definir_id_tablero = (id_tablero_rutina) => {
    localStorage.setItem("id_tablero_rutina", id_tablero_rutina);
}