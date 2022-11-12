// declaramos la clase del componente
class headComponent extends HTMLElement{
    
    constructor() {
        super();
    }

    // definimos el contenido del componente
    connectedCallback() {
        this.innerHTML = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="author" content="Lenin Alberto Gómez Durán">
                <meta name="description" content="Aplicación web Routime">

                <link rel="stylesheet" href="./styles.css">

                <title>Routime</title>
            </head>
            <body>

                <header> 
                    <h1 id="titulo-pagina"></h1> 
                </header>
        `
    }

}

// declaramos un componente con la clase creada
window.customElements.define("head-component", headComponent);

// los nombres de componentes se componen de dos palabras separadas con guión para que HTML no piense que es una etiqueta HTML normal