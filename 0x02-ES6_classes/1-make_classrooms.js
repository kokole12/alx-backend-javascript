import ClassRoom from './0-classroom';

export default function initializerooms() {
  const classe1 = new ClassRoom(19);
  const classe2 = new ClassRoom(20);
  const classe3 = new ClassRoom(34);
  return [classe1, classe2, classe3];
}
