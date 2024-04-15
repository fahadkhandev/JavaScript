//Normal Function
// example 1
let myCon = function (num1, num2) {
  return num1.concat(num2);
};
console.log(myCon([4, 6], [3, 4]));

// example 2
let sum = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(5, 8));

// example 3
function sub(a, b) {
  return a - b;
}
console.log(sub(8, 2));

//   example 4
function greet() {
  console.log("Hello World");
}
greet();

//Arrow Function or Anonymous Ftn
// example 1
let myConc = (num1, num2) => num1.concat(num2);
console.log(myConc([1, 3], [7, 8, 9]));

// example 2
let add = (num1, num2) => num1 + num2;
console.log(add(7, 9));

// example 3
let subb = (x, y) => x - y;
console.log(subb(6, 3));

// example 4
let greeting = () => console.log("Hello ! Welcome ");
greeting();
