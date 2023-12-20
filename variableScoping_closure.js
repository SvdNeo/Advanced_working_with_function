//Does a function pickup latest changes?

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi();// yes it picks up name as pete

//Which variables are available?
function makeWorker() {
    let name1 = "Pete";
  
    return function() {
      console.log(name1);
    };
  }
  
  let name1 = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show? The answer is: Pete.

  //The work() function in the code below gets name from the place of its origin through the outer lexical environment reference

  //Are counters independent?
  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
 console.log( counter() ); // 0
 console.log( counter() ); // 1
  
 console.log( counter2() ); // 0
 console.log( counter2() ); // 1 yes they are independent counters as they are produced by two different instances