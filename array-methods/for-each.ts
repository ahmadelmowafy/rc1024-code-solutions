const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((value) => {
  console.log(value);
});

console.log('Reversed:');
values.forEach((value, index) => {
  console.log(values[values.length - 1 - index]);
});
