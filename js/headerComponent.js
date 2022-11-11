// declaramos la clase del componente
class headerComponent extends HTMLElement{

    constructor() {
        super();
    }

    // definimos el contenido del componente
    connectedCallback() {
        this.innerHTML = `<header> <h1 id="titulo-pagina"></h1> </header>`;
    }

}

// declaramos un componente con la clase creada
window.customElements.define("header-component", headerComponent);

// los nombres de componentes se componen de dos palabras separadas con guión para que HTML no piense que es una etiqueta HTML normal