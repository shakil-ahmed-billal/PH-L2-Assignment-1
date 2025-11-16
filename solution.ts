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



/*
Problem 3
Create a Person class with name and age properties. Add a method getDetails that returns a string with the person's name and age.

Requirements:
You must use a constructor to initialize the properties.
The getDetails method should return a string in the format: "Name: [name], Age: [age]".
*/


class Person {  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());



/*
Problem 4
Create a function filterByRating that accepts an array of items, where each item has the following properties:

title (string)
rating (number between 0 and 5)
The function should return a new array containing only the items with a rating of 4 or more.

Requirements:
You must write the correct type for the function parameter and the return type.
Do not mutate the original array.
*/

interface Item {
  title: string;
  rating: number;
}

const filterByRating =  (items: Item[]) =>{
  return items.filter(item => item.rating >= 4);
}
const books: Item[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 4.5 },  
  { title: 'Book C', rating: 3.2 },
  { title: 'Book D', rating: 5.0 },
];

console.log(filterByRating(books));

/*
Problem 5
Create a function filterActiveUsers that accepts an array of user objects. Each user object contains id, name, email, and isActive properties. The function should return a new array containing only the users whose isActive property is true.

Requirements:
You must write the correct type for the function parameter and the return type.
Do not mutate the original array.
Use type checking if necessary.
*/

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]) =>{
  return users.filter(user => user.isActive);
}


const users : User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));


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


// printBookDetails(myBook);
