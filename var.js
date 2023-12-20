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