interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Ahmad',
  lastName: 'El-Mowafy',
  age: 24,
};

const fullName: string = `${student.firstName} ${student.lastName}`;
console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Data Annotator';

console.log('Value of livesInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);

console.log('Value of student:', student);
console.log('typeof student:', typeof student);

const vehicle: Vehicle = {
  make: 'Nissan',
  model: 'Altima',
  year: 2021,
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;

console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);

console.log('Value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);

const pet: Pet = {
  name: 'Max',
  kind: 'Dog',
};

delete pet.name;
delete pet['kind'];

console.log('Value of pet:', pet);
console.log('typeof pet:', typeof pet);
