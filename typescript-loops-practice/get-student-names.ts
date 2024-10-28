/* exported getStudentNames */
interface Person {
  name: string;
}

function getStudentNames(students: Person[]): string[] {
  const studentsArray = [];
  for (const str of students) {
    studentsArray.push(str.name);
  }
  return studentsArray;
}
