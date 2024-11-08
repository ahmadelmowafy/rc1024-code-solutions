'use strict';
const books = [
  { isbn: 174817431345, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { isbn: 174817431346, title: 'Animal Farm', author: 'George Orwell' },
  { isbn: 174817431347, title: 'Lord of the Flies', author: 'William Golding' },
];
const json = JSON.stringify(books);
console.log('value of json:', json);
console.log('typeof json', typeof json);
