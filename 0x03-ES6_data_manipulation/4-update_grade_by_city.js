export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentLocation = students.filter((student) => student.location === city).map((student) => {
    const item2 = newGrades.find((studentGrade) => student.id === studentGrade.studentId);
    return { ...student, grade: item2 ? item2.grade : 'N/A' };
  });
  return studentLocation;
}
