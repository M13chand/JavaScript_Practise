// In let const condition the will be in Temporal Dead Zone but inc case of var it will follow the concept of the hoisting.
age = 90;
console.log('The value of Age is ' + age);
let age = 40;

// It will through an error
// ReferenceError: Cannot access 'age' before initialization 



