// Array of student objects
let students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 90 },
    { name: "Charlie", age: 23, grade: 72 },
    { name: "David", age: 21, grade: 95 },
    { name: "Eva", age: 22, grade: 78 }
];

// Function to return the names of students with grade above a certain threshold
function getStudentsAboveThreshold(students, threshold) {
    // Filter students based on grade and map to get only their names
    return students.filter(student => student.grade > threshold).map(student => student.name);
}

// Test the function with a threshold of 80
let threshold = 80;
let studentsAboveThreshold = getStudentsAboveThreshold(students, threshold);
console.log(studentsAboveThreshold);  // Output: ["Alice", "Bob", "David"]
