//Array de la biblioteca
let myLibrary = [];
//Variables de cada label
const libro = document.querySelector("#name");
const autor = document.querySelector("#autor");
const genero = document.querySelector("#genero");
const paginas = document.querySelector("#paginas");
const leido = document.querySelector("#leido");
//Variables del formulario y contenedor
const contenedor = document.querySelector("#contenedor");
const formulario = document.querySelector("form");

//Constructor para crear cada libro
function Book(book, author, genre, pages, read){
    this.book = book;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

//Prototipo para el checkbox, asi no deba de salir true/false
Book.prototype.leer = function(){
    if (this.read === true){
        return `Si lo has leido`;
    } else {
        return `Falta leer`;
    };
}

//Funcion para agregar el nuevo libro al array
function addBookLibrary(book, author, genre, pages, read){
    const biblioteca = new Book(book, author, genre, pages, read);
    myLibrary.push(biblioteca);
}

//El boton, capturar los datos y grabarlos como se debe
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
    //Espacios para las tarjetas, sus respectivos divs por datos
    const tarjeta = document.createElement('div');
    const libro = document.createElement("div");
    const autor = document.createElement('div');
    const genero = document.createElement('div');
    const paginas = document.createElement('div');
    const visto = document.createElement('div');
    const borrar = document.createElement('button');

    //Asignar cada variables nueva (los divs) con el contenido colocado por el usuario
    tarjeta.setAttribute("data-id", item.id);
    libro.textContent = item.book;
    autor.textContent = item.author;
    genero.textContent = item.genre;
    paginas.textContent = `${item.pages} paginas`;
    visto.textContent = item.leer();
    borrar.textContent = 'Borrar';

    //Funcionalidad del boton borrar
    borrar.addEventListener("click", () =>{
        myLibrary = myLibrary.filter(actual => actual.id !== item.id);
        crearTarjeta();
    })

    //Visualizacion inicial de los datos insertados
    tarjeta.appendChild(libro);
    tarjeta.appendChild(autor);
    tarjeta.appendChild(genero);
    tarjeta.appendChild(paginas);
    tarjeta.appendChild(visto);
    tarjeta.appendChild(borrar);

    //Orden de los datos para cada tarjeta tenga su propio espacio
    contenedor.appendChild(tarjeta);

    //Estilos de las tarjetas, contenedores y del formulario
    contenedor.classList.add('contenedor');
    tarjeta.classList.add('card');
    libro.classList.add('titulo');
}) 
}


 