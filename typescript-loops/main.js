'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log(getNumbersToTen());
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated = repeated + word;
    count++;
  }
  return repeated;
}
console.log(repeatWord('Box', 14));
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
  return '';
}
logEachCharacter('Watermelon');
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log(doubleAll([1, 2, 3, 4, 5]));
function sumArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 3, 4, 8, 16]));
function reverseString(str) {
  let reversed = '';
  for (const i of str) {
    reversed = reversed + i;
  }
  return reversed;
}
console.log(reverseString('Harry'));
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log(getKeys({ name: 'Ahmad', age: 24, occupation: 'student' }));
function getValues(obj) {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
console.log(getValues({ name: 'Ahmad', age: 24, occupation: 'student' }));
