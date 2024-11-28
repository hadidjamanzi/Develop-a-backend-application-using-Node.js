function reverseString(str) {
    // Convert the string to an array, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// Test the function with different strings
console.log(reverseString("hello"));  // Output: "olleh"
console.log(reverseString("world"));  // Output: "dlrow"
console.log(reverseString("JavaScript"));  // Output: "tpircSavaJ"
