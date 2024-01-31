// Defining a union type
type MyType = number | string;

// Function that takes a parameter of type MyType
function displayData(data: MyType) {
    console.log(data);
}

// Examples of using the function with different types
displayData(10);       // Output: 10
displayData("Hello");  // Output: Hello

// Error: Argument of type 'boolean' is not assignable to parameter of type 'MyType'.
// displayData(true);




const Rbg : [number,number,number]= [234,234,423];

