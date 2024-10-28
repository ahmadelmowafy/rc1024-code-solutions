/* exported setValue */
function setValue(object: Record<any, unknown>, key: string, value: any): any {
  object[key] = value;
}
