/*
Problem 6
Then, create a function printBookDetails that accepts an object of type Book and prints its details to the console in the format: "Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]".
*/
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? 'Yes' : 'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}

// Sample input
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};


printBookDetails(myBook);
