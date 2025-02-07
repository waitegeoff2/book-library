const bookLibrary = document.querySelector(".book-list");

const myLibrary = [];

function Book(title, author, pages, year) {
    // this is the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;

    this.info = function() {
        return [this.title + " by " + this.author + ". Book has " + this.pages + " pages. Book was published in " + this.year + "."]
    };
}

function addBookToLibrary(title, author, pages, year) {
    // take params, create a book THEN STORE IT IN ARRAY
    let newBook = new Book(title, author, pages, year);
    return myLibrary.push(newBook);

    //CALL THE DISPLAY LIBRARY FUNCTION to put on HTML page
}

function displayLibrary() {
    function addBook(arrayItem) {
        
        // take each array item and add it as a div to the table created earlier
    };
    
    myLibrary.forEach(addBook);
    // loop the mylibrary array for each item
    // break up array and separate into items
    // display on HTML table, APPEND EACH CHILD TO a table row 
            // (https://stackoverflow.com/questions/63356133/loop-through-an-array-of-objects-and-display-in-html)
}


//MANUALLY ADDED BOOKS
const catcherInTheRye = new Book("Catcher in the Rye", "JD Salinger", "240", "1951");

console.log(addBookToLibrary("Catcher in the Rye", "JD Salinger", "240", "1951"));

console.log(myLibrary);


