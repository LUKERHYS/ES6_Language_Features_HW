// BEFORE
// const Book = function (author, title, genre) {
//   this.author = author;
//   this.title = title;
//   this.genre = genre;
// };

// AFTER
class Book {
  constructor(author, title, genre){
    this.author = author;
    this.title = title;
    this.genre = genre;
  };
};

module.exports = Book;
