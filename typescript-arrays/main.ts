const colors: string[] = ['red', 'white', 'blue'];
console.log('Value of colors[0]:', colors[0]);
console.log('Value of colors[1]:', colors[1]);
console.log('Value of colors[2]:', colors[2]);
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);

colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);

console.log('Value of colors:', colors);
console.log('typeof colors:', typeof colors);

const students: string[] = ['Jose', 'Antonio', 'Mark', 'Sam'];
const numberOfStudents: number = students.length;
console.log(`There are ${students.length} students in the class.`);
const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}.`);
console.log('Value of students:', students);
console.log('typeof students:', typeof students);
