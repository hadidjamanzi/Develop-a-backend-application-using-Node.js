// Object Destructuring
const person = {
    name: "John",
    age: 30,
    job: "Engineer",
    address: {
      street: "123 Main St",
      city: "Somewhere",
      zip: "12345"
    }
  };
  
  // Destructuring the person object
  const { name, age, job, address: { street, city } } = person;
  
  console.log("Object Destructuring:");
  console.log("Name:", name);  // "John"
  console.log("Age:", age);    // 30
  console.log("Job:", job);    // "Engineer"
  console.log("Street:", street);  // "123 Main St"
  console.log("City:", city);      // "Somewhere"
  
  
  // Array Destructuring
  const colors = ["red", "green", "blue", "yellow"];
  
  // Destructuring the colors array
  const [firstColor, secondColor, , fourthColor] = colors;
  
  console.log("\nArray Destructuring:");
  console.log("First color:", firstColor);  // "red"
  console.log("Second color:", secondColor);  // "green"
  console.log("Fourth color:", fourthColor);  // "yellow"
  