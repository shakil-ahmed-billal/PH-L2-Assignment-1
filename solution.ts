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



const getLength = (value: string | any[]) =>{
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }  throw new Error('Invalid type');
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));



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
// console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());



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

// console.log(filterByRating(books));


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

// console.log(filterActiveUsers(users));


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


const getUniqueValues = <T>(array1: T[], array2: T[]): T[] => {
  const result: T[] = [];

  for (let i = 0; i < array1.length; i++) {
    if (!result.includes(array1[i])) {
      result.push(array1[i]);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!result.includes(array2[i])) {
      result.push(array2[i]);
    }
  }

  return result;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


// console.log(getUniqueValues(array1, array2));


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]) =>{

  const total = products.reduce((sum, product) => {
    const productTotal = product.price * product.quantity;
    const discountAmount = product.discount ? (productTotal * product.discount) / 100 : 0;
    const totalPrice = productTotal - discountAmount;

    console.log(sum)
    return sum + totalPrice;
  }, 0); 

  return total;


}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
// calculateTotalPrice(products);