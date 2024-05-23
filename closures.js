/* Closure : A closure is the combination of a function bundled together (enclosed) with references 
to its surrounding state (the lexical environment).
In other words, a closure gives you access to an outer function's scope from an inner function.
In Closure , inner Function have the access to the variable of outer functions, can access the variable
declared in the parent function. */

let init = () => {
  let name = "Fahad"
  let display = () => {
    console.log("I am "+ name)
  }
  display()
}
init()

// example 

const x = ()=>{
  let a =1;
    console.log(a);
const y = ()=>{
  let a =2;
    console.log(a);
const z = ()=>{
  let a=3;
    console.log(a);
    }
    z()
  }
  y()
}
x()
