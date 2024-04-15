const multiArr=[ [5,6],[7,8] ]; // multiDimensional arry
console.log(multiArr[1][0]); //Accessing multiDimensional arry

const arr = [1,2,3,4,5,6,7,8,9];
for(index = 0 ; index < arr.length ; index++){
  const elements = arr[index];
  console.log(elements);
}

arr.push(2,8); //add elements in the end of array 
console.log(arr);

arr.pop();//delete last element from array
console.log(arr);

arr.shift(); //remove first element from array 
console.log(arr);

arr.unshift(0); // add elements in the start of the array
console.log(arr);

arr[0]= 1;  // modifying array data using index
console.log(arr);
console.log(arr.find((elements) => elements < 2));  //find specific element 
console.log(arr.find((elements) => elements > 6));

