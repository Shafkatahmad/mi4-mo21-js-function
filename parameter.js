function eatRice() {
  console.log('wash your hand');
  console.log('seat on the chair');
  console.log('take the food in your plate');
  console.log('eat');
}

// eatRice();

function square(number) {
  console.log('value of the parameter: ', number);
  const sqr = number * number;
  console.log('square of the given number is: ', sqr);
}

square(4);
console.log('-------------');
square(12);
console.log('-------------');
square(404);


function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}

add(5,24);


function addAll(a, b, c, d, e) {
  const total = a + b + c + d + e;
  console.log('given numbers are: ', a, b, c, d, e);
  console.log(total);
}

addAll(3, 4, 6, 7, 1);