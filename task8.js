let students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 90 },
    { name: "Charlie", age: 23, grade: 72 },
    { name: "David", age: 21, grade: 95 },
    { name: "Eva", age: 22, grade: 78 }
];

// 1. Using `map()` to get an array of student names
let studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);
// Output: ["Alice", "Bob", "Charlie", "David", "Eva"]

// 2. Using `filter()` to get students with grades above 80
let studentsAbove80 = students.filter(student => student.grade > 80);
console.log("Students with grades above 80:", studentsAbove80);
// Output: [ { name: 'Alice', age: 20, grade: 85 }, { name: 'Bob', age: 22, grade: 90 }, { name: 'David', age: 21, grade: 95 } ]

// 3. Using `reduce()` to calculate the average grade of all students
let totalGrade = students.reduce((total, student) => total + student.grade, 0);
let averageGrade = totalGrade / students.length;
console.log("Average Grade:", averageGrade);
// Output: 84
