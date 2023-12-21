function spy(func) {
    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
  
    wrapper.calls = []; // Array to store calls
  
    return wrapper;
  }
  
  // Example usage:
  
  function work(a, b) {
    console.log(a + b);
  }
  
  // Apply the spy decorator to the work function
  work = spy(work);
  
  work(1, 2); // Output: 3
  work(4, 5); // Output: 9
  
  // Display all calls
  for (const args of work.calls) {
    console.log('call: ' + args.join(', '));
  }

 let user = {
    name:"Sanjay",
    sayHi(){
        console.log(`${this.name}`)
    }
 }
 setTimeout(()=>{
    user.sayHi()
 }, 1000);
 