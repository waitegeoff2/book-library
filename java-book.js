const myLibrary = [];

function Book(title, author, pages, year) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;

    this.info = function() {
        return [this.title + " by " + this.author + ". Book has " + this.pages + " pages. Book was published in " + this.year + "."]
    };

    // this is the constructor
}

function addBookToLibrary(title, author, pages, year) {
    // create a book from arguments 
    let newBook = new Book(title, author, pages, year);
    return myLibrary.push(newBook);

    // take params, create a book THEN STORE IT IN ARRAY
}

// Object.setPrototypeOf(addBookToLibrary.prototype, Book.prototype);

const catcherInTheRye = new Book("Catcher in the Rye", "JD Salinger", "240", "1951");

console.log(addBookToLibrary("Catcher in the Rye", "JD Salinger", "240", "1951"));

console.log(myLibrary);


// REFERENCE FROM LAST LESSON

// function book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     // this.info = function() {
//     //     console.log(this.title,"by", this.author,",", this.pages, ",", this.read);
//     // }

    this.info = function() {
        return [this.title + " by " + this.author + ", " + this.pages + ", " + this.read]
    };

// };

// const theHobbit = new book("The Hobbit", "JRR Tolkein", "295 pages", "not read yet");

// console.log(theHobbit.info());
