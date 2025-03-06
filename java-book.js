const myLibrary = [];

const bookLibrary = document.querySelector(".book-list");
const submitButton = document.querySelector(".submit-button");
const bookForm = document.querySelector("#add-book-form");
const removeButton = document.querySelector(".removeBookButton");
const readButton = document.querySelector(".readButton");
const bookTitle = document.querySelector("#form-title");

class Book {
    constructor (title, author, pages, year, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
        this.read = read;
    }

}

function addBookToLibrary(title, author, pages, year, read) {
    // take params, create a book THEN STORE IT IN ARRAY
    let newBook = new Book(title, author, pages, year, read);
    myLibrary.push(newBook);

    // after adding book to library array, then run display library function to add it to HTML
}

function displayLibrary() {
    // resets the HTML in the book list DOM each time (blanks it and restarts). Array is still the same so
    // it runs over each array element. 

    bookLibrary.innerHTML= "";

    // for each item in library (EACH ARRAY), adding a new table row for each item.
    function addBook(arrayItem) {

        //create table

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
        readContentLeft.textContent = "Read book?";
        bookRowFive.appendChild(readContentLeft);

        const readContent = document.createElement("td");
        readContent.classList.add("readContent");
        readContent.textContent = arrayItem.read.toString();
        bookRowFive.appendChild(readContent);

        //add div for two buttons
        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("buttonDiv");
        libraryTable.appendChild(buttonDiv);

        //remove button

        const removeButton = document.createElement("button");
        removeButton.classList.add("removeBookButton");
        removeButton.textContent = "Remove book.";
        buttonDiv.appendChild(removeButton);

        // add remove button that splices out one item based on this array item's index.

        removeButton.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(arrayItem), 1);
            displayLibrary();
        });

        // add a read button to change read status

        const readButton = document.createElement("button");
        readButton.classList.add("readButton");
        readButton.textContent = "Read this.";
        buttonDiv.appendChild(readButton);

        readButton.addEventListener("click", () => {

            // edit the arrayItem.read on click of the button. Display library again. 

            console.log(arrayItem);
                  
            if (arrayItem.read === "Not read") {
                arrayItem.read = "Read";
            } else {
                arrayItem.read = "Read";
            };

            displayLibrary();
            
        });

    
    };
    
    //go over each array item in my library and call function
       
    myLibrary.forEach(addBook);

}

//handle submit button

function userAddBook (event) {
    event.preventDefault();

    const userTitle = document.querySelector("#form-title");
    const userAuthor = document.querySelector("#form-author");
    const userPages = document.querySelector("#form-pages");
    const userYear = document.querySelector("#form-year");
    const userRead = document.querySelector("#form-read");

    let title = userTitle.value;
    let author = userAuthor.value;
    let pages = userPages.value;
    let year = userYear.value;

    // let readButton = userRead.checked;

    if (userRead.checked) {
        read = "Read";
    } else {
        read = "Not read";
    };    

    addBookToLibrary(title,author,pages, year, read);
    displayLibrary();

    bookForm.reset();

}

bookForm.addEventListener("submit", userAddBook); 

bookTitle.addEventListener("input", () => {
    if (bookTitle.validity.tooShort) {
      bookTitle.setCustomValidity("That title is too short!");
    } else {
      bookTitle.setCustomValidity("");
    }
});



//MANUALLY ADDED BOOKS
const catcherInTheRye = new Book("Catcher in the Rye", "JD Salinger", "240", "1951");
const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", "384", "1985", "Read");

addBookToLibrary("The book", "Geoff", "240", "2022", "Read");

addBookToLibrary("Frog Meridian", "Cormac McCarthy", "384", "1985", "Read");

console.log(myLibrary);

displayLibrary();

// console.log(myLibrary);


