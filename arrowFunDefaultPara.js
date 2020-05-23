const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous



const increment = (number, value=1) => number + value;
