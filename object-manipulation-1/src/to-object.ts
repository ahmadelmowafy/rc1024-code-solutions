/* exported toObject */
function toObject(keyValuePair: [string, any]): Record<string, unknown> {
  const myObject = {};
  myObject[keyValuePair[0]] = keyValuePair[1];
  return myObject;
}
