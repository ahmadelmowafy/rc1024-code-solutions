/* exported numVowels */
function numVowels(string: string): number {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let numberOfVowels = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}
