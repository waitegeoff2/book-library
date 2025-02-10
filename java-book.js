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
    myLibrary.push(newBook);

    // after adding book to library array, then run display library function to add it to HTML
}

function displayLibrary() {
            // (https://stackoverflow.com/questions/63356133/loop-through-an-array-of-objects-and-display-in-html)
        const libraryList = document.createElement("ul");
        libraryList.classList.add("libraryList");
        bookLibrary.appendChild(libraryList);

    // for each item in library (EACH ARRAY), adding a new table row for each item.
    function addBook(arrayItem) {

        const libraryTable = document.createElement("table");
        libraryTable.classList.add("libraryTable");
        bookLibrary.appendChild(libraryTable);

        const titleRow = document.createElement("tr");
        titleRow.classList.add("titleRow");
        libraryTable.appendChild(titleRow);

        const titleTableContent = document.createElement("td");
        titleTableContent.classList.add("titleTableContent");
        titleTableContent.textContent = "Book Information";
        titleRow.appendChild(titleTableContent);
        
        const bookRowOne = document.createElement("tr");
        bookRowOne.classList.add("bookRowOne");
        libraryTable.appendChild(bookRowOne);

        const titleContent = document.createElement("td");
        titleContent.classList.add("titleContent");
        titleContent.textContent = "Title: " + arrayItem.title.toString();
        bookRowOne.appendChild(titleContent);

        const bookRowTwo = document.createElement("tr");
        bookRowTwo.classList.add("bookRowTwo");
        libraryTable.appendChild(bookRowTwo);

        const authorContent = document.createElement("td");
        authorContent.classList.add("authorContent");
        authorContent.textContent = "Author: " + arrayItem.author.toString();
        bookRowTwo.appendChild(authorContent);

        const bookRowThree = document.createElement("tr");
        bookRowThree.classList.add("bookRowTwo");
        libraryTable.appendChild(bookRowThree);

        const pagesContent = document.createElement("td");
        pagesContent.classList.add("pagesContent");
        pagesContent.textContent = "Pages: " + arrayItem.pages.toString();
        bookRowThree.appendChild(pagesContent);

        const bookRowFour = document.createElement("tr");
        bookRowFour.classList.add("bookRowTwo");
        libraryTable.appendChild(bookRowFour);

        const yearContent = document.createElement("td");
        yearContent.classList.add("yearContent");
        yearContent.textContent = "Year published: " + arrayItem.year.toString();
        bookRowFour.appendChild(yearContent);
    
    };
    
    //go over each array item in my library and call function
       
    myLibrary.forEach(addBook);

}


//MANUALLY ADDED BOOKS
const catcherInTheRye = new Book("Catcher in the Rye", "JD Salinger", "240", "1951");

console.log(typeof catcherInTheRye);

console.log(catcherInTheRye);

addBookToLibrary("Catcher in the Rye", "JD Salinger", "240", "1951");

addBookToLibrary("Blood Meridian", "Cormac McCarthy", "384", "1985");

console.log(myLibrary);

displayLibrary();

// console.log(myLibrary);


