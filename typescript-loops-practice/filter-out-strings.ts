/* exported filterOutStrings */
function filterOutStrings(values: any[]): number[] {
  for (let i = values.length - 1; i >= 0; i--) {
    if (typeof values[i] === 'string') {
      values.splice(i, 1);
    }
  }
  return values;
}
