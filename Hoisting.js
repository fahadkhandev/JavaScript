/* Hoisting : We can call a function before it is defined and we won’t get an error,
The reason behind this is hoisting where the Javascript interpreter always moves the 
variables and function declaration to the top of the current scope (function scope or
global scope) before the code execution. */

//normal
function catsays(sound){
  console.log(sound);
}
catsays('Meow');

//Hoisting : we invoke our function before we declare it
dogsays('bark bark');
function dogsays(soundd){
  console.log(soundd);
}
