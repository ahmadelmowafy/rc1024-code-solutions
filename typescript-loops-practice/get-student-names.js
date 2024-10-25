'use strict';
function getStudentNames(students) {
  const studentsArray = [];
  for (const str of students) {
    studentsArray.push(str.name);
  }
  return studentsArray;
}
