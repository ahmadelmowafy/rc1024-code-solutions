'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  for (let i = values.length - 1; i >= 0; i--) {
    if (values[i] === null) {
      values.splice(i, 1);
    }
  }
  return values;
}