let sum = new Function('a','b','return a+b');
console.log(sum(4,5));
let sayHi = new Function(console.log("Hello"))
sayHi()
//It is used in very specific cases, like when we receive code from a server, or to dynamically compile a function from a template, 
//in complex web-applications.