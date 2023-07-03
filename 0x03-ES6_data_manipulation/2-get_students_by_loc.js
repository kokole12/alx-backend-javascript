export default function getStudentsByLocation(objs, city) {
  const studentLocation = objs.filter((obj) => obj.location === city);
  return studentLocation;
}
