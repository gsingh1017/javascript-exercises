const add = function(numOne, numTwo) {
	return numOne + numTwo;
};


const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};


const sum = function(nums) {
  // initialize num
  let num = 0;

  // add each element in array
  for (element of nums) {
    num += element;
  }

  return num;
};


const multiply = function(nums) {
  // initialize num
  // cannot start at 0 since we are multiplying
  let num = 1;

  // multiply each element in array
  for (element of nums){
    num *= element;
  }

  return num;
};


const power = function(intOne, intTwo) {
	return Math.pow(intOne, intTwo);
};


const factorial = function(int) {

  // initialize num
  // cannot start at 0 since we are multiplying
	let num = 1;

  // start at 0 and multiply by int - i until int - i = 1 
  for (let i = 0; i < int; i++){
    num *= int - i
  }
  
  return num;
  
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
