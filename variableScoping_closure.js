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

 //Counter object
 function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter1 = new Counter();
  
 console.log( counter1.up() ); // 1
 console.log( counter1.up() ); // 2
 console.log( counter1.down() ); // 1

 //Function in if

 let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
   console.log(`${phrase}, ${user}`);
  }
}

sayHi();
//In the provided code, there is an attempt to call the sayHi() function outside of its scope, which will result in an error. 
//The sayHi() function is defined inside an if block, and variables declared with let have block scope, meaning they are only accessible within the block where they are defined.

let phrase1 = "Hello";
let user1; // declare user outside the if block

if (true) {
  user1 = "John"; // assign a value to user inside the if block

  function sayHi() {
    console.log(`${phrase}, ${user1}`);
  }
}

sayHi(); // Now, sayHi() can access the user variable
//Now, the user variable is declared outside the if block, and its value is assigned inside the block. This way, the sayHi() function can access the user variable, and calling sayHi() after the if block will work without an error.


//Sum with closures
function sum(a){
return function(b){
    return a+b
}
}
console.log(sum(4)(5))


//Is variable visible?
let x = 1;

function func() {
  //console.log(x); // ?

  let x = 2;
}

func();// here the x will be hoisted i.e variable declaration is hoisted but not the assignment therefore there will be reference error

//Filter through function
function inBetween(a,b){
    return function(x){
        if(x>=a && x<=b){
            return x
        }
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) );

function filter(arr1){
    return function(x){
       let arr2= arr1.includes(x)
       console.log(arr2)
       return arr2
    }
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log( arr1.filter(filter([1, 2, 10])) );

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }
  console.log(users.sort(byField('name')))
  console.log(users.sort(byField('age')))