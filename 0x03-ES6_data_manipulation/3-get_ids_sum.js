export default function getStudentIdsSum(objs) {
  const val = 0;
  const result = objs.reduce((accumulator, currentValue) => accumulator + currentValue.id, val);
  return result;
}
