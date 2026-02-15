export class Libro {
    constructor(book, author, genre, pages, read){
    this.book = book;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    }
    leer(){
        return this.read ? "Si, lo has leido" : "No, falta leer";
    }
    cambiarLeer(){
        this.read = !this.read;
    }
}