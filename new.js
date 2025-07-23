


const container = document.getElementById('library-container');
container.classList.add("container")
const formArea = document.createElement("div");


function displayBooks() {
    container.innerHTML = "";
    myLibrary.forEach(book => {


        // creating the elements
        const card = document.createElement("div");
        const remove = document.createElement("button");
        const toggleRead = document.createElement("button");


        //Creating the button for toggle read.
        toggleRead.textContent = "Toggle Read Status"
        toggleRead.addEventListener("click", () => {
            if (book.read == true) {
                book.read = false;
                displayBooks();
            }
            else if (book.read == false) {
                book.read = true;
                displayBooks();
            }
        })


        // adding class
        card.classList.add("book-card");


        // adding display logic and content
        if (book.read == true) {
            card.textContent = `${book.name} | ${book.author} | ${book.pages} | Book has been read`
        }
        else {
            card.textContent = `${book.name} | ${book.author} | ${book.pages} | Book has not been read`
        }


        //adding remove button and fuctions;
        remove.textContent = "Remove Book";
        remove.addEventListener("click", () => {
            const id = book.id;
            const indexOfRemoval = myLibrary.findIndex(book => book.id === id);
            if (indexOfRemoval !== -1) {
                myLibrary.splice(indexOfRemoval, 1);
                displayBooks();
            }
        });


        card.appendChild(remove);
        card.appendChild(toggleRead);



        container.appendChild(card);

    })
    const newBookAddButton = document.createElement("button");
    newBookAddButton.textContent = "Add New Book";
    container.appendChild(newBookAddButton);







    newBookAddButton.addEventListener("click", () => {

        if (document.getElementById("bookForm")) { return; }
        const myForm = document.createElement("form");



        myForm.id = "bookForm"
        myForm.classList.add("form");

        //Book name input field
        const bookNameInput = document.createElement("input");
        bookNameInput.type = "text";
        bookNameInput.id = "bName"
        bookNameInput.placeholder = "Name of Book";


        //Book author input field
        const bookAuthorInput = document.createElement("input");
        bookAuthorInput.id = "bAuthor";
        bookAuthorInput.type = "text";
        bookAuthorInput.placeholder = "Author of Book";


        //Book page number input field
        const bookPageNumbersInput = document.createElement("input");
        bookPageNumbersInput.type = "text";
        bookPageNumbersInput.id = "pageNum"
        bookPageNumbersInput.placeholder = "Number of Paged of Book";


        //Book Read or Not input Field
        const readOrNotToggle = document.createElement("input");
        readOrNotToggle.type = "checkbox";
        readOrNotToggle.id = "myCheckbox";
        const label = document.createElement("label");
        label.htmlFor = "myCheckbox";
        label.textContent = "Book Read";
        const checkboxDiv = document.createElement("div");
        checkboxDiv.appendChild(label);
        checkboxDiv.appendChild(readOrNotToggle);

        //appending the input fields to the form div
        myForm.appendChild(bookNameInput);
        myForm.appendChild(bookAuthorInput);
        myForm.appendChild(bookPageNumbersInput);
        myForm.appendChild(checkboxDiv);

        
        const newBookSubmitButton = document.createElement("button");
        newBookSubmitButton.textContent = " Submit";
        myForm.appendChild(newBookSubmitButton);



        newBookSubmitButton.addEventListener("click", () => {
            event.preventDefault();
            const bName = document.getElementById("bName").value;
            const bAuthor = document.getElementById("bAuthor").value;
            const bPages = document.getElementById("pageNum").value;
            const bravo = document.getElementById("myCheckbox").checked;
            

            
            addBookToLibrary(bName,bAuthor,bPages,bravo);


        })


        container.appendChild(myForm);
    })



}






const myLibrary = [];
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, pages, read) {
    const newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

addBookToLibrary("Dairy Of A Wimpy Kid", "Abeed Koul", "350", true);
addBookToLibrary("Lord Of the Rings", "Me", "300", false);
addBookToLibrary("Lord Of the Rings 2", "Me2", "500", false);






