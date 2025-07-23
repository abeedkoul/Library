console.log("This works")
const container = document.getElementById('library-container');
const formArea =  document.createElement("div");
function displayBooks(){
    container.innerHTML = "";
    myLibrary.forEach(book =>{
        // creating the elements
        const card = document.createElement("div");
        const remove = document.createElement("button"); 
        const toggleRead = document.createElement("button");


        //Creating the button for toggle read.
        toggleRead.textContent="button"
        toggleRead.addEventListener("click",()=>{
            if(book.read == true){
                book.read = false;
                displayBooks();
            }
            else if (book.read == false){
                book.read = true;
                displayBooks();
            }
        })



        
        // adding class
        card.classList.add("book-card");


        // adding display logic and content
        if(book.read == true){
            card.textContent=`${book.name} | ${book.author} | ${book.pages} | Book has been read`
        }
        else{
            card.textContent=`${book.name} | ${book.author} | ${book.pages} | Book has not been read`
        }


        //adding remove button and fuctions;
        remove.textContent= "Remove Book";
        remove.addEventListener("click",()=>{
            const id = book.id;
            const indexOfRemoval = myLibrary.findIndex(book => book.id === id);
            if(indexOfRemoval !== -1){
                myLibrary.splice(indexOfRemoval,1);
                displayBooks();
            }
        });

       
        


        card.appendChild(remove);
        card.appendChild(toggleRead);



        container.appendChild(card);
        
    })
}

const myForm = document.createElement("form");

const myLibrary = [];
function Book(name,author,pages,read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.id = crypto.randomUUID();
}

function addBookToLibrary(name,author,pages,read){
    const newBook = new Book(name,author,pages,read);
    myLibrary.push(newBook);
    displayBooks();
}

addBookToLibrary("Dairy Of A Wimpy Kid","Abeed Koul","350",true);
addBookToLibrary("Lord Of the Rings","Me","300",false);
addBookToLibrary("Lord Of the Rings 2","Me2","500",false);

console.log(myLibrary);




