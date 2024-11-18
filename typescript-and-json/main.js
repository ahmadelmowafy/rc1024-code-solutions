'use strict';
const books = [
  { isbn: 174817431345, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { isbn: 174817431346, title: 'Animal Farm', author: 'George Orwell' },
  { isbn: 174817431347, title: 'Lord of the Flies', author: 'William Golding' },
];
console.log('value of books:', books);
console.log('typeof books:', typeof books);
const booksJSON = JSON.stringify(books);
console.log('value of booksJSON:', booksJSON);
console.log('typeof bookJSON:', typeof booksJSON);
const studentJSON = '{"id": 25814, "name": "Ahmad"}';
console.log('value of studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);
const student = JSON.parse(studentJSON);
console.log('value of student:', student);
console.log('typeof student:', typeof student);
