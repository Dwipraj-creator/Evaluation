



const classicBooks = new BookCollection("Classic Literature");


classicBooks.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction"
});

classicBooks.addBook({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  genre: "Fiction"
});

classicBooks.addBook({
  title: "Tender Is the Night",
  author: "F. Scott Fitzgerald",
  year: 1934,
  genre: "Fiction"
});


const fitzgeraldBooks = classicBooks.findBooksByAuthor("F. Scott Fitzgerald");
console.log(fitzgeraldBooks);

const stats = classicBooks.getStatistics();
console.log(stats);




