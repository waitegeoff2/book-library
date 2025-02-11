const bookLibrary = document.querySelector(".book-list");

const myLibrary = [];

function Book(title, author, pages, year, read) {
    // this is the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.read = read;

    this.info = function() {
        return [this.title + " by " + this.author + ". Book has " + this.pages + " pages. Book was published in " + this.year + "."]
    };
}

function addBookToLibrary(title, author, pages, year, read) {
    // take params, create a book THEN STORE IT IN ARRAY
    let newBook = new Book(title, author, pages, year, read);
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

        // Top row

        const titleRow = document.createElement("tr");
        titleRow.classList.add("titleRow"); 
        libraryTable.appendChild(titleRow);

        const titleTableContent = document.createElement("td");
        titleTableContent.classList.add("titleTableContent");
        titleTableContent.textContent = "Book Information";
        titleTableContent.colSpan=2;
        titleRow.appendChild(titleTableContent);

        // book title row
        
        const bookRowOne = document.createElement("tr");
        bookRowOne.classList.add("bookRowOne");
        libraryTable.appendChild(bookRowOne);

        const titleLeft = document.createElement("td");
        titleLeft.classList.add("leftColumn");
        titleLeft.textContent = "Title";
        bookRowOne.appendChild(titleLeft);

        const titleContent = document.createElement("td");
        titleContent.classList.add("titleContent");
        titleContent.textContent = arrayItem.title.toString();
        bookRowOne.appendChild(titleContent);

        // author row

        const bookRowTwo = document.createElement("tr");
        bookRowTwo.classList.add("bookRowTwo");
        libraryTable.appendChild(bookRowTwo);

        const authorContentLeft = document.createElement("td");
        authorContentLeft.classList.add("leftColumn");
        authorContentLeft.textContent = "Author";
        bookRowTwo.appendChild(authorContentLeft);

        const authorContent = document.createElement("td");
        authorContent.classList.add("authorContent");
        authorContent.textContent = arrayItem.author.toString();
        bookRowTwo.appendChild(authorContent);

        // pages row

        const bookRowThree = document.createElement("tr");
        bookRowThree.classList.add("bookRowThree");
        libraryTable.appendChild(bookRowThree);

        const pagesContentLeft = document.createElement("td");
        pagesContentLeft.classList.add("leftColumn");
        pagesContentLeft.textContent = "Pages";
        bookRowThree.appendChild(pagesContentLeft);

        const pagesContent = document.createElement("td");
        pagesContent.classList.add("pagesContent");
        pagesContent.textContent = arrayItem.pages.toString();
        bookRowThree.appendChild(pagesContent);

        // year row

        const bookRowFour = document.createElement("tr");
        bookRowFour.classList.add("bookRowFour");
        libraryTable.appendChild(bookRowFour);

        const yearContentLeft = document.createElement("td");
        yearContentLeft.classList.add("leftColumn");
        yearContentLeft.textContent = "Year published";
        bookRowFour.appendChild(yearContentLeft);

        const yearContent = document.createElement("td");
        yearContent.classList.add("yearContent");
        yearContent.textContent = arrayItem.year.toString();
        bookRowFour.appendChild(yearContent);

        // read row

        const bookRowFive = document.createElement("tr");
        bookRowFive.classList.add("bookRowFive");
        libraryTable.appendChild(bookRowFive);

        const readContentLeft = document.createElement("td");
        readContentLeft.classList.add("leftColumn");
        readContentLeft.textContent = "Read/Not Read";
        bookRowFive.appendChild(readContentLeft);

        const readContent = document.createElement("td");
        readContent.classList.add("readContent");
        readContent.textContent = arrayItem.read.toString();
        bookRowFive.appendChild(readContent);
    
    };
    
    //go over each array item in my library and call function
       
    myLibrary.forEach(addBook);

}


//MANUALLY ADDED BOOKS
const catcherInTheRye = new Book("Catcher in the Rye", "JD Salinger", "240", "1951");

console.log(typeof catcherInTheRye);

console.log(catcherInTheRye);

addBookToLibrary("Catcher in the Rye", "JD Salinger", "240", "1951", "Read");

addBookToLibrary("Blood Meridian", "Cormac McCarthy", "384", "1985", "Read");

console.log(myLibrary);

displayLibrary();

// console.log(myLibrary);


