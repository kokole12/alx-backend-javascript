export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  let numberCalled = 0;
  if (weakMap.get(endPoint)) {
    numberCalled = weakMap.get(endPoint);
  }
  weakMap.set(endPoint, numberCalled + 1);
  if (numberCalled + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
