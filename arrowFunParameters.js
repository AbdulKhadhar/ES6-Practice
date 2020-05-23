// doubles input value and returns it
const doubler = (item) => item * 2;


// the same function, without the argument parentheses
const doubler = item => item * 2;


// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;



const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
