export class Library {
    myLibrary = [];
    addBookLibrary(finalBook){
        this.myLibrary.push(finalBook);
    }
    deleteBook(id){
        this.myLibrary = this.myLibrary.filter(actual => actual.id !== id);
    }
}