'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(6);
console.log(
  'convertMinutesToSeconds(6) result:',
  convertMinutesToSecondsResult
);
function greet(name) {
  return `Hey ${name}!`;
}
const greetResult = greet('Ahmad');
console.log("greet('Ahmad') result:", greetResult);
const getArea = (width, height) => {
  return width * height;
};
const getAreaResult = getArea(8, 5);
console.log('getArea(8, 5) result:', getAreaResult);
const getFirstName = (person) => {
  return person.firstName;
};
const getFirstNameResult = getFirstName({
  firstName: 'Ahmad',
  lastName: 'El-Mowafy',
});
console.log('getFirstName() result:', getFirstNameResult);
const getLastElement = (array) => {
  return array[array.length - 1];
};
const getLastElementResult = getLastElement([
  'addition',
  'subtraction',
  'multiplication',
  'division',
]);
console.log('getLastElement() result:', getLastElementResult);
const callOtherFunction = (otherFunction, params) => {
  return otherFunction(params);
};
const callOtherFunctionResult = callOtherFunction(getLastElement, [
  'apples',
  'oranges',
  'bananas',
  'grapes',
]);
console.log(
  'callOtherFunction(getLastElement, [array of fruits]) result:',
  callOtherFunctionResult
);
