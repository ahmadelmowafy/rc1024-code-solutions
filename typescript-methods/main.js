'use strict';
const heroes = ['Iron Man', 'Wolverine', 'Spider Man', 'Thor'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);
const library = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: 'Animal Farm', author: 'George Orwell' },
  { title: 'Lord of the Flies', author: 'William Golding' },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = { title: 'CSS Secrets', author: 'Lea Verou' };
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);
const fullName = 'Ahmad El-Mowafy';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
const employee = { name: 'William', age: 32, position: 'Senior Developer' };
const employeeKeys = Object.keys(employee);
const employeeValues = Object.values(employee);
const employeePairs = Object.entries(employee);
console.log('employeeKeys:', employeeKeys);
console.log('employeeValues:', employeeValues);
console.log('employeePairs:', employeePairs);
