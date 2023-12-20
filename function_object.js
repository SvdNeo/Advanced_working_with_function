function sayHi(a,b) {
   console.log("Hi");
  }
  
 console.log(sayHi.name);

 function makeCounter() {
    
    let count = 0
  
    function counter() {
      return counter.count++;
    };
   
  
    counter.set = value => count = value
    counter.decrease = () => count--
  
    return counter;
  }
  
console.log(makeCounter())

function sum(a){
  let cur = a;
  function summ(b){
    cur+=b
    return summ

  }
  summ.toString = function(){
    return cur
  }
  return summ
}
console.log(sum(2)(4).toString)