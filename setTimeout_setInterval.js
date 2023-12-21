// setTimeout(() => {
//     console.log("hello")
// }, 1000);



// function pdt(a,b){
//     return a*b
// }
// setTimeout(pdt,4000)

let tim = setTimeout(() => {
    console.log("i am not coming")
}, 1000);

let timed = setInterval(() => {
    console.log("Bring it on!")
}, 5000);
clearInterval(timed)


//Nested setTimeout
// let timer = setTimeout(function tick(){
//     console.log("times up!")
//     timer = setTimeout(tick,2000)
// },2000)

//example on advantage of Nested setTimeout 
function requestData() {
    // Simulating a request to the server
    console.log("Requesting data from the server...");
  
    // Assume some asynchronous operation, like an AJAX request
    // ...
  
    // After the request is complete, schedule the next request
    let nextInterval = calculateNextInterval();
    setTimeout(requestData, nextInterval);
  }
  
  function calculateNextInterval() {
    // Here you can implement your logic to calculate the next interval dynamically
    // For example, you can double the previous interval
    return Math.min(2 * (lastInterval || 5000), 60000); // Maximum interval of 1 minute
  }
  
  let lastInterval; // Variable to store the last interval
  
  // Initial request
  //setTimeout(requestData, 1000);

  // task 1
  //by using setInterval
  function print(from,to){
    let current = from;
   let timerId = setInterval(() => {
    console.log(current);
    if(current == to){
      clearInterval(timerId)
    }
    current++
   }, 1000);
  }
  print(5,10)

  //by using nested setTimeout
  function printNum(from,to){
    let cur = from;
    setTimeout(function start(){
      console.log(cur);
      if(cur<to){
        setTimeout(start,1000)
      }
      cur++
    })
  }
printNum(1,4)