const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

(function() {
  "use strict";
  arr2 = [...arr1]; 
})();

console.log(arr2);



var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89



const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89



let numbers = [-12, 160, 0, -3, 51];
let minNum = Math.min.apply(null, numbers);
console.log(minNum); //-12
