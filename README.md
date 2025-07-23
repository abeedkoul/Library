# 📚 JavaScript Book Library App

This is a simple and interactive Book Library web application built using **HTML**, **CSS**, and **Vanilla JavaScript**. It allows users to add books to their library, display them as cards, remove books, and toggle the read status of each book. The application follows best practices for separating data logic and UI display.

---

## 🚀 Features

- ✅ Add new books using a dynamic form
- ✅ Display books as individual cards on the page
- ✅ Unique ID assigned to every book using `crypto.randomUUID()`
- ✅ Toggle book's read status (Read / Not Read)
- ✅ Remove books from the library
- ✅ Form shows only once on clicking "New Book"
- ✅ Clear DOM before rendering new books to prevent duplication
- ✅ Form disappears after submission

---

## 🛠️ Technologies Used

- **HTML5** – for the basic structure
- **CSS3** – for styling (basic/minimal in this version)
- **JavaScript (ES6)** – for all functionality (DOM manipulation, event handling, array logic, etc.)

---

## 📦 How It Works

1. A user clicks on the **"New Book"** button.
2. A dynamic form appears allowing the user to enter:
   - Book Name
   - Author
   - Number of Pages
   - Read Status (using default false)
3. On clicking **Submit**:
   - The book is created using a constructor function
   - The book is stored in a `myLibrary` array
   - A card is rendered on the page with the book's info
   - Form is removed automatically

4. Each card includes:
   - Book details
   - **"Toggle Read"** button
   - **"Remove"** button

---

## 🧠 Concepts Practiced

- Object constructors and prototypes
- DOM manipulation
- Event listeners
- Dynamic element creation
- `crypto.randomUUID()` for unique identifiers
- Conditional rendering based on boolean values
- Separation of concerns (data vs display logic)

---

## 📌 Future Improvements

- Save library to `localStorage` for persistence
- Add form validation for user input
- Improve UI/UX with modals or transitions
- Responsive design for mobile devices

---

## 💡 How to Run

1. Clone the repository or download the files.
2. Open `index.html` in your browser.
3. Start adding books to your library!

---

## 🧑‍💻 Author

Made with ❤️ by **Abeed Koul**

---



