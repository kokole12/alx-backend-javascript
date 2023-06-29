export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('name must be a strin');
    if (!Number.isInteger(length)) throw new TypeError('length must be an integer');
    if (!Array.isArray(students)) throw new TypeError('students type must be an array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('name must be an string');
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (!Number.isInteger(val)) throw new TypeError('length must be an integer');
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(vals) {
    if (!Array.isArray(vals)) throw new TypeError('students type must be an Array');
    this._students = vals;
  }
}
