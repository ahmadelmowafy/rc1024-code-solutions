/* exported getKeys */
function getKeys(object: Record<any, unknown>): any[] {
  const keys: any[] = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
