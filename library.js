// BEFORE
// const Library = function (books = []) {
//   this.books = books;
// };

// AFTER
class Library {
  constructor(books = []) {
    this.books = books;
  };

  bookCount() {
    return this.books.length;
  };

  addBook(newBook) {
    this.books.push(newBook);
  };

  addBooks(newBooks) {
    newBooks.forEach(book => this.books.push(book));
  };

  // BEFORE
  // Library.prototype.printInventory = function () {
  //   this.books.forEach((book) => {
  //     console.log(`${book.title} by ${book.author}`);
  //   });
  // };

  // AFTER
  printInventory() {
    this.books.forEach(
      {title, author} = (book) => {
        console.log(`${title} by ${author}`);
    });
  }
}
// BEFORE
// module.exports = Library;

// AFTER
export default Library;
