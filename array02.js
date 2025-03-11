const grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];

// 1. Tính thứ hạng trung bình của cả lớp
const averageGrade = (students) =>
  students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log("Thứ hạng trung bình của cả lớp:", averageGrade(grades));

// 2. Tính thứ hạng trung bình của nam
const averageMaleGrade = (students) => {
  const males = students.filter((s) => s.sex === "M");
  return averageGrade(males);
};
console.log("Thứ hạng trung bình của nam:", averageMaleGrade(grades));

// 3. Tính thứ hạng trung bình của nữ
const averageFemaleGrade = (students) => {
  const females = students.filter((s) => s.sex === "F");
  return averageGrade(females);
};
console.log("Thứ hạng trung bình của nữ:", averageFemaleGrade(grades));

// 4. Tìm học viên Nam có thứ hạng cao nhất
const bestMaleStudent = (students) =>
  students
    .filter((s) => s.sex === "M")
    .reduce((max, s) => (s.grade > max.grade ? s : max));
console.log("Nam có thứ hạng cao nhất:", bestMaleStudent(grades));

// 5. Tìm học viên Nữ có thứ hạng cao nhất
const bestFemaleStudent = (students) =>
  students
    .filter((s) => s.sex === "F")
    .reduce((max, s) => (s.grade > max.grade ? s : max));
console.log("Nữ có thứ hạng cao nhất:", bestFemaleStudent(grades));

// 6. Tìm học viên Nam có thứ hạng thấp nhất
const worstMaleStudent = (students) =>
  students
    .filter((s) => s.sex === "M")
    .reduce((min, s) => (s.grade < min.grade ? s : min));
console.log("Nam có thứ hạng thấp nhất:", worstMaleStudent(grades));

// 7. Tìm học viên Nữ có thứ hạng thấp nhất
const worstFemaleStudent = (students) =>
  students
    .filter((s) => s.sex === "F")
    .reduce((min, s) => (s.grade < min.grade ? s : min));
console.log("Nữ có thứ hạng thấp nhất:", worstFemaleStudent(grades));

// 8. Tìm thứ hạng cao nhất của cả lớp
const highestGrade = (students) => Math.max(...students.map((s) => s.grade));
console.log("Thứ hạng cao nhất của cả lớp:", highestGrade(grades));

// 9. Tìm thứ hạng thấp nhất của cả lớp
const lowestGrade = (students) => Math.min(...students.map((s) => s.grade));
console.log("Thứ hạng thấp nhất của cả lớp:", lowestGrade(grades));

// 10. Lấy danh sách tất cả học viên Nữ
const femaleStudents = (students) => students.filter((s) => s.sex === "F");
console.log("Danh sách học viên nữ:", femaleStudents(grades));

// 11. Sắp xếp tên học viên theo bảng chữ cái
const sortByName = (students) =>
  [...students].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sắp xếp theo tên:", sortByName(grades));

// 12. Sắp xếp thứ hạng học viên theo chiều giảm dần
const sortByGradeDescending = (students) =>
  [...students].sort((a, b) => b.grade - a.grade);
console.log("Sắp xếp theo thứ hạng giảm dần:", sortByGradeDescending(grades));

// 13. Lấy học viên Nữ có tên bắt đầu bằng “J”
const femaleNamesStartingWithJ = (students) =>
  students.filter((s) => s.sex === "F" && s.name.startsWith("J"));
console.log("Nữ có tên bắt đầu bằng 'J':", femaleNamesStartingWithJ(grades));

// 14. Lấy top 5 người có thứ hạng cao nhất
const top5Students = (students) => sortByGradeDescending(students).slice(0, 5);
console.log("Top 5 học viên có thứ hạng cao nhất:", top5Students(grades));
