const myLibrary = [];

const libro = document.querySelector("#name");
const autor = document.querySelector("#autor");
const genero = document.querySelector("#genero");
const paginas = document.querySelector("#paginas");
const leido = document.querySelector("#leido");

const formulario = document.querySelector("form");


function Book(book, author, genre, pages, read){
    this.book = book;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

function addBookLibrary(book, author, genre, pages, read){
    const biblioteca = new Book(book, author, genre, pages, read);
    myLibrary.push(biblioteca);
}

formulario.addEventListener("submit" , (e) => {
    e.preventDefault();
    const book = libro.value;
    const author = autor.value;
    const genre = genero.value;
    const pages = paginas.value;
    const read = leido.checked;

    addBookLibrary(book,author,genre,pages,read);

    console.log(myLibrary);
    formulario.reset;
})

