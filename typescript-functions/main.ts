function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

const convertMinutesToSecondsResult: number = convertMinutesToSeconds(6);
console.log(
  'convertMinutesToSeconds(6) result:',
  convertMinutesToSecondsResult
);

function greet(name: string): string {
  return `Hey ${name}!`;
}

const greetResult: string = greet('Ahmad');
console.log("greet('Ahmad') result:", greetResult);

const getArea = (width: number, height: number): number => {
  return width * height;
};

const getAreaResult: number = getArea(8, 5);
console.log('getArea(8, 5) result:', getAreaResult);

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstName = (person: Person): string => {
  return person.firstName;
};

const getFirstNameResult: string = getFirstName({
  firstName: 'Ahmad',
  lastName: 'El-Mowafy',
});
console.log('getFirstName() result:', getFirstNameResult);

const getLastElement = (array: string[]): string => {
  return array[array.length - 1];
};

const getLastElementResult: string = getLastElement([
  'addition',
  'subtraction',
  'multiplication',
  'division',
]);
console.log('getLastElement() result:', getLastElementResult);

const callOtherFunction = (otherFunction: Function, params: unknown): any => {
  return otherFunction(params);
};

const callOtherFunctionResult: string = callOtherFunction(getLastElement, [
  'apples',
  'oranges',
  'bananas',
  'grapes',
]);
console.log(
  'callOtherFunction(getLastElement, [array of fruits]) result:',
  callOtherFunctionResult
);
