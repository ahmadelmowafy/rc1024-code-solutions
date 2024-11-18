'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
