'use strict';
/* exported lastChars */
const lastChars = (length, string) => {
  if (length >= string.length) {
    return string;
  } else {
    return string.slice(string.length - length);
  }
};
