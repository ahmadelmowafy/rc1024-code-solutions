/* exported filterOutNulls */
function filterOutNulls(values: number[]): number[] {
  for (let i = values.length - 1; i >= 0; i--) {
    if (values[i] === null) {
      values.splice(i, 1);
    }
  }
  return values;
}
