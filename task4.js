// Prompt the user to select an operation
let operation = prompt("Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication");

// Convert the input to a number
operation = Number(operation);

// Prompt the user to enter two numbers
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

// Perform the operation using a switch statement
let result;

switch (operation) {
    case 1:
        result = num1 + num2;
        console.log("The result of addition is: " + result);
        break;
    case 2:
        result = num1 - num2;
        console.log("The result of subtraction is: " + result);
        break;
    case 3:
        result = num1 * num2;
        console.log("The result of multiplication is: " + result);
        break;
    default:
        console.log("Invalid operation choice.");
}
