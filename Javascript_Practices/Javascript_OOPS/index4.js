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


// Student Report Card 

class Student {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }
    addSubject(subject, marks) {
        this.subjects[subject] = marks;
    }
    getAverage() {
        const total = Object.values(this.subjects).reduce((a, b) => a + b, 0);
        return total / Object.keys(this.subjects).length;
    }

    getGrade() {
        const avg = this.getAverage();
        if (avg >= 90) return 'A';
        else if (age >= 75) return 'B';
        else if (age >= 60) return 'C';
        return 'F';
    }
}

const s = new Student("Ananya");
s.addSubject("Maths", 100);
s.addSubject("Statistics", 99);
console.log("Average : " + s.getAverage());
console.log("Grade " + s.getGrade());

// Singleton Logger

class Logger {
    static instance = null;
    constructor() {
        if (Logger.instance) return Logger.instance;
        this.logs = [];
        Logger.instance = this;
    }

    log(message) {
        this.logs.push(message);
        console.log("LOGS : " + message);
    }
    printLogs() {
        console.log("All Logs : ", this.logs);
    }
}
const log1 = new Logger();
log1.log("App Started !");
const log2 = new Logger();
log2.log("User Logged In !");
log1.printLogs();