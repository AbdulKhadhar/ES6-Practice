const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2



const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5



let a = 8, b = 6;
[a,b]=[b,a];
