variable = 10;
(() => {
  foo = 100;
  console.log(variable); //10
  var foo = 100;
  variable = 20;
  console.log(variable); //20
})();

console.log(foo);    //ReferenceError: foo is not defined
console.log(variable);
var variable = 30;