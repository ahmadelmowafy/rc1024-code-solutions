'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else if (number >= 5) {
    return false;
  }
}
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
const isOldEnoughToDrink = (person) => {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
};
const isOldEnoughToDrive = (person) => {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
};
const isOldEnoughToDrinkAndDrive = (person) => {
  if (person.age < 21) {
    return false;
  } else if (person.age >= 21) {
    return false;
  }
};
const categorizeAcidity = (pH) => {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
};
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Mad Max: Fury Road';
    case 'comedy':
      return 'Superbad';
    case 'horror':
      return 'The Conjuring';
    case 'musical':
      return 'La La Land';
    case 'sci-fi':
      return 'Blade Runner 2049';
    default:
      return 'Enter a valid genre';
  }
}
