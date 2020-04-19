// BEFORE
// const Library = function (books = []) {
//   this.books = books;
// };

// AFTER
class Library {
  constructor(books = []) {
    this.books = books;
  };
};

Library.prototype.bookCount = function () {
  return this.books.length;
};

Library.prototype.addBook = function (newBook) {
  this.books.push(newBook);
};

Library.prototype.addBooks = function (newBooks) {
  newBooks.forEach(book => this.books.push(book));
};

// BEFORE
// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//   });
// };

// AFTER
Library.prototype.printInventory = function () {
  this.books.forEach(
    {title, author} = (book) => {
      console.log(`${title} by ${author}`);
  });
};
// BEFORE
// module.exports = Library;

// AFTER
export default Library;
