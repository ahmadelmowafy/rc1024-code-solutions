const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evens = numbers.filter((number) => number % 2 === 0);
console.log('Even numbers:', evens);

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const noDs = names.filter((name) => !name.includes('d') && !name.includes('D'));
console.log('No D:', noDs);
