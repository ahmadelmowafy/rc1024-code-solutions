/* exported getWords */
function getWords(string: string): any[] {
  if (string) {
    return string.split(' ');
  } else {
    return [];
  }
}
