// Function to calculate the sum of an array of numbers
function sumArray(numbers) {
    let sum = 0;
    // Loop through the array and add each number to the sum
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

let array1 = [1, 2, 3, 4, 5]; 
let array2 = [10, 20, 30];     
let array3 = [-1, 2, -3, 4];   
let array4 = [0, 0, 0, 0];     

console.log("Sum of array1:", sumArray(array1));  // Output: 15
console.log("Sum of array2:", sumArray(array2));  // Output: 60
console.log("Sum of array3:", sumArray(array3));  // Output: 2
console.log("Sum of array4:", sumArray(array4));  // Output: 0
