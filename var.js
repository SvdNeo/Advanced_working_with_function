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