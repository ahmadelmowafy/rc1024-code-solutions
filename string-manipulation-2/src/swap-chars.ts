/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const newString = string.split('');
  newString[firstIndex] = string[secondIndex];
  newString[secondIndex] = string[firstIndex];
  return newString.join('');
}
