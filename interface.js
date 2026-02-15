import { Libro } from "./libro.js";

export class Interface {
    inputs = {
        libro: document.querySelector("#name"),
        autor: document.querySelector("#autor"),
        genero: document.querySelector("#genero"),
        paginas: document.querySelector("#paginas"),
        leido: document.querySelector("#leido"),
    }
    main = {
        contenedor: document.querySelector(`#contenedor`),
        formulario: document.querySelector(`form`)
    }

    constructor (Library){
        this.Library = Library;
        this.main.formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            this.manejarEnvio();
        })
    }
    manejarEnvio(){
        const nameBook = this.inputs.libro.value;
        const authorBook = this.inputs.autor.value;
        const genreBook = this.inputs.genero.value;
        const pagesBook = this.inputs.paginas.value;
        const readBook = this.inputs.leido.checked;

        const newBook = new Libro (nameBook,authorBook,genreBook, pagesBook,readBook);
        
        this.Library.addBookLibrary(newBook);
        this.createCard();

        this.main.formulario.reset();
    }
    createCard(){
        this.main.contenedor.textContent = "";
        this.Library.myLibrary.forEach(item => {
            const tarjeta = document.createElement('div');
            const libro = document.createElement("div");
            const autor = document.createElement('div');
            const genero = document.createElement('div');
            const paginas = document.createElement('div');
            const visto = document.createElement('div');
            const borrar = document.createElement('button');
            const yaLeido = document.createElement('button');

            borrar.addEventListener("click", () => {
                this.Library.deleteBook(item.id);
                this.createCard();
            })

            tarjeta.setAttribute("data-id", item.id);
            libro.textContent = item.book;
            autor.textContent = item.author;
            genero.textContent = item.genre;
            paginas.textContent = `${item.pages} paginas`;
            visto.textContent = item.leer();
            borrar.textContent = 'Borrar';
            yaLeido.textContent = item.leer();

            yaLeido.addEventListener("click", () => {
                item.cambiarLeer();
                this.createCard();
            })

            //Visualizacion inicial de los datos insertados
            tarjeta.appendChild(libro);
            tarjeta.appendChild(autor);
            tarjeta.appendChild(genero);
            tarjeta.appendChild(paginas);
            tarjeta.appendChild(visto);
            tarjeta.appendChild(borrar);
            tarjeta.appendChild(yaLeido);

            //Orden de los datos para cada tarjeta tenga su propio espacio
            this.main.contenedor.appendChild(tarjeta);

            //Estilos de las tarjetas, contenedores y del formulario
            this.main.contenedor.classList.add('contenedor');
            tarjeta.classList.add('card');
            libro.classList.add('titulo');
            borrar.classList.add('botoncito');
            yaLeido.classList.add('botoncito');
        })
    }
}