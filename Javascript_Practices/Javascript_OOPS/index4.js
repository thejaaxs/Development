class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    borrowBook(title) {
        const book = this.books.find((b) => b.title === title && b.isAvailable);
        if (book) {
            book.isAvailable = false;
            console.log(`Borrowed : "${book.title}"`);
        }
        else {
            console.log("Book Not Available !");
        }
    }
    returnBook(title) {
        const book = this.books.find(b => b.title === title && !b.isAvailable);
        if (book) {
            book.isAvailable = true;
            console.log(`Returned : "${book.title}`);
        }
    }
    listAvailableBooks() {
        return this.books.filter(b => b.isAvailable);
    }
}
let lib = new Library();
lib.addBook(new Book("1984", "George Orwell"));
console.log("Book List Available : " + lib.listAvailableBooks().map(b => b.title));
lib.returnBook('1984');
lib.borrowBook('1084');
console.log("Available : " + lib.listAvailableBooks().map(b => b.title));