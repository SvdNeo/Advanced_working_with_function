function sayHi() {
    if (true) {
      var phrase = "Hello";
    }
  
   console.log(phrase) 
  }
  
  sayHi()
 //console.log(phrase);
 // var is not block scoped but it is function scoped therefore first clg works where as clg outside the function doesnt work
 function sayHi() {
    phrase = "Hello";
  
   console.log(phrase);
  
    var phrase;
  }
  sayHi();

  function sayHi() {
    phrase = "Hello"; // (*)
  
    if (false) {
      var phrase;
    }
  
   console.log(phrase);
  }
  sayHi();
  //IIFE
  (function() {

    var message = "Hello";
  
   console.log(message); // Hello
  
  })();

  (function sum(a,b){
    return a+b
  })(5,6);

  (function(){
    console.log("first type IIFE")
  })();
  (function(){
    console.log("second type IIFE")
  }());
  !function(){
    console.log("Third type IIFE")
  }();

  +function(){
    console.log("Fourth type IIFE")
  }();

  for (var i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
  }
  
  console.log(`Outside loop: ${i}`); 

  globalThis.console.log("Hi")

  var gVar = 5;
global.gVar = gVar;

console.log(global.gVar); // This will log '5' in a Node.js environment

let gLet = 5;
global.gLet = gLet;

console.log(global.gLet); // This will log '5' in a Node.js environment

globalThis.obj = {
    name:"sanjay"
}
console.log(obj)


