/* let user = {
  name: "Fahad",
  age: 19,
};
// let key = prompt("Enter Name ","name")
console.log(user.age);
 */

/* function makeUser(name, age) {
  return {
    name,
    age,
  };
}
console.log(makeUser("Fahad", 29));
let user = makeUser("fahad", 19);
console.log(user.name);
console.log(user.age); */

/* let user = {
  Fname: "Muhammad",
  Lname: "Fahad",
  age: +19,
  Cno: +923139296044,
};
for (let key in user) {
  console.log(key," : ",user[key]);
  // console.log(user[key]);
}
console.log(typeof user.Cno); */

// <------------------------ Tasks ----------------------------->

/* 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Peter";
delete user.name;

for (let key in user) {
  console.log(key, ":", user[key]);
} */

/* 2
 function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty());
 */

/* 3 
  let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
function isSum() {
  for (let key in salaries) {
    let sum = salaries.Ann + salaries.John + salaries.Pete;
    return sum;
  }
  return false;
}
console.log(isSum());

//OR

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);
 */

/* 4
 let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }
console.log("<-- Before -->");
for (let key in menu) {
  console.log(key, ":", menu[key]);
}

console.log("<-- After -->");
for (let key in menu) {
  if (typeof menu[key] === "number") {
    menu[key] *= 2;
  }
  console.log(key, ":", menu[key]);
}
 */
/* 
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("Jack");

console.log(user.name);
console.log(user.isAdmin); */

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);
