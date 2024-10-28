/* exported getValues */
function getValues(object: Record<any, unknown>): any[] {
  const values: any[] = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
