// cambiar el título de la página
const tituloPagina = document.getElementById("titulo-pagina");
tituloPagina.textContent = "Tableros de rutina";


// obtener todos los tableros de rutina
const obtenerTodosTablerosRutina = () => {

    const formData = new FormData();
    formData.append("funcion", "obtenerTodosTablerosRutina");

    fetch("./backend/api.php", {
        method: "POST",
        body: formData
    })
        .then(res => res.json())
        .then(data => console.log(data));

}


obtenerTodosTablerosRutina();