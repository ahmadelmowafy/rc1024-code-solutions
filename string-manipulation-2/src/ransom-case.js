'use strict';
/* exported ransomCase */
function ransomCase(string) {
  const word = string.toLowerCase().split('');
  for (let i = 1; i < word.length; i += 2) {
    word.splice(i, 1, word[i].toUpperCase());
  }
  return word.join('');
}
