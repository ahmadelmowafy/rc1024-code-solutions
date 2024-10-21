const myWidth: number = 5;
const myLength: number = 3;

const area: number = myWidth * myLength;
console.log('Value of area:', area);
console.log('typeof area:', typeof area);

const bill: number = 86;
const payment: number = 100;
const change: number = payment - bill;

console.log('Value of change:', change);
console.log('typeof change:', typeof change);

const quizzes: number = 87;
const midterm: number = 91;
const final: number = 96;
const grade: number = (quizzes + midterm + final) / 3;
console.log('Value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName: string = 'Ahmad';
const lastName: string = 'El-Mowafy';
const fullName: string = firstName + ' ' + lastName;
console.log('Value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 8;
const isAcidic: boolean = pH < 7;
console.log('Value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount: number = 300;
const isSparta: boolean = headCount === 300;
console.log('Value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('Value of motto:', motto);
console.log('typeof motto:', typeof motto);
