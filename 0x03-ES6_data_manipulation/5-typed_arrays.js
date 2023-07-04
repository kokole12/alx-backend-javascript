export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position of range');
  }

  const Buffer = new ArrayBuffer(length);
  const int8 = new Int8Array((Buffer, 0, length));
  int8.set([value], position);
  return new DataView(Buffer);
}
