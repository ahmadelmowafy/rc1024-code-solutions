/* exported reverseWord */
function reverseWord(word: string): string {
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}
