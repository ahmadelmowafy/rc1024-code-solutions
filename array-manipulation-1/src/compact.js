'use strict';
/* exported compact */
function compact(array) {
  const truthyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyArray.push(array[i]);
    }
  }
  return truthyArray;
}
