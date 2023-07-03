export default function getListStudentIds(objs) {
  if (!Array.isArray(objs)) {
    return [];
  }

  // eslint-disable-next-line object-curly-spacing
  const ids = objs.map((obj) => (obj.id));
  return ids;
}
