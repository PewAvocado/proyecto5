
const myLibrary = [];

const libro = document.querySelector("#name");
const autor = document.querySelector("#autor");
const genero = document.querySelector("#genero");
const paginas = document.querySelector("#paginas");
const leido = document.querySelector("#leido");

const contenedor = document.querySelector("#contenedor");
const formulario = document.querySelector("form");


function Book(book, author, genre, pages, read){
    this.book = book;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

Book.prototype.leer = function(){
    if (this.read === true){
        return `Si lo has leido`;
    } else {
        return `Falta leer`;
    };
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
    crearTarjeta();

    console.log(myLibrary);
    formulario.reset();
})

function crearTarjeta(){
    contenedor.textContent = "";
    myLibrary.forEach(item => {
    const tarjeta = document.createElement('div');
    const libro = document.createElement("div");
    libro.textContent = item.book;
    const autor = document.createElement('div');
    autor.textContent = item.author;
    const genero = document.createElement('div');
    genero.textContent = item.genre;
    const paginas = document.createElement('div');
    paginas.textContent = `${item.pages} paginas`;
    const visto = document.createElement('div');
    visto.textContent = item.leer();
    tarjeta.appendChild(libro);
    tarjeta.appendChild(autor);
    tarjeta.appendChild(genero);
    tarjeta.appendChild(paginas);
    tarjeta.appendChild(visto);
    
    contenedor.appendChild(tarjeta);
    contenedor.classList.add('contenedor');
    tarjeta.classList.add('card');
    libro.classList.add('titulo');
}) 
}


 