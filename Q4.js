// //Functional scope problem
// function foo() {
//   var x = 10;
//   console.log(x);  //x=10
// }
// foo();
// console.log(x); // referenceError x is not defined





// //Block Scope Problem
// {
//   let a = 2;
//   let b = 4;

//   console.log(a);  // a=2
//   console.log(b);  //b=4
// }
// console.log(a); // referenceError: a is not defined
// console.log(b);

// Note: var is a functional Scope variable and let is a block scope variable.

// //Hoisting
// console.log(a); //undefined
// var a = 6;


// //temporal Dead Zone(The period in the execution of a JavaScript program where a variable exists but cannot be accessed )
// console.log(a); //ReferenceError: Cannot access 'a' before initialization
// let a = 6;
//  "OR"
// console.log(name);
// const name = 'Ram'


var x = 20;
function foo() {
  console.log(x);
  var x = 20
} foo();