/*
Problem 1
Create a function formatValue that accepts a value which may be a string, number, or boolean, and returns the following based on the value type:

If the input is a string → return the string in uppercase
If the input is a number → return the number multiplied by 10
If the input is a boolean → return the opposite value (true → false, false → true)

Requirements:
You must write the correct type for the function parameter and the return type.
You must use type checking to handle each case.
*/

const formatValue = (value: string | number | boolean) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }  throw new Error('Invalid type');

}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));




/*
Problem 2
Create a function getLength that accepts a value which may be a string or an array, and returns the length of the value.

If the input is a string → return the number of characters.
If the input is an array → return the number of elements.

Requirements:
You must write the correct type for the function parameter and the return type.
You must use type checking to handle each case (typeof or Array.isArray).
*/

const getLength = (value: string | any[]) =>{
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }  throw new Error('Invalid type');
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));












// /*
// Problem 6
// Then, create a function printBookDetails that accepts an object of type Book and prints its details to the console in the format: "Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]".
// */
// interface Book {
//   title: string;
//   author: string;
//   publishedYear: number;
//   isAvailable: boolean;
// }

// function printBookDetails(book: Book): void {
//   const availability = book.isAvailable ? 'Yes' : 'No';
//   console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
// }

// // Sample input
// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };


// printBookDetails(myBook);
