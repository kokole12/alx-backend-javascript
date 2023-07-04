/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let val = true;
  list.map((x) => {
    if (!set.has(x)) {
      val = false;
    }
  });

  return val;
}
