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
function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log(getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log(getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated = repeated + word;
    count++;
  }
  return repeated;
}

console.log(repeatWord('Box', 14));

function logEachCharacter(str: string): string {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
  return '';
}

logEachCharacter('Watermelon');

function doubleAll(numbers: number[]): number[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log(doubleAll([1, 2, 3, 4, 5]));

function sumArray(numbers: number[]): number {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 3, 4, 8, 16]));

function reverseString(str: string): string {
  let reversed = '';
  for (const i of str) {
    reversed = reversed + i;
  }
  return reversed;
}

console.log(reverseString('Harry'));

function getKeys(obj: Record<string, unknown>): any {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

console.log(getKeys({ name: 'Ahmad', age: 24, occupation: 'student' }));

function getValues(obj: Record<string, unknown>): any {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}

console.log(getValues({ name: 'Ahmad', age: 24, occupation: 'student' }));
