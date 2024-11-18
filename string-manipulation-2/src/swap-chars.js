'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const newString = string.split('');
  newString[firstIndex] = string[secondIndex];
  newString[secondIndex] = string[firstIndex];
  return newString.join('');
}
