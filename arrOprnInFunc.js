/**
 * Objective: write a function to give the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check wheather the function is called properly
 * step-3: pass a parameter(s) 
 * step-4: pass the parameter(s), check wheather the parameter(s) is passed in a proper format
 * step-5: do the function task( step by step )
 */

function sumOfNumbers(numbers) {
  let sum = 0;
  for(const number of numbers) {
    console.log(number);
    sum += number;
  }
  return sum;
}

const numbs = [54, 62, 12, 6];
const sum = sumOfNumbers(numbs);
console.log('Sum of the numbers is: ',sum);