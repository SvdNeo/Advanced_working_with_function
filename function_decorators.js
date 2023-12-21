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
    sayHi:function(){
        console.log(`${this.name}`)
    }
 }
 setTimeout(()=>{
    user.sayHi()
 }, 1000);
 

 let user2 = {
    teamName:"Indian",
    matchPlayed:25
     }
     function statistics(team,year){
        console.log(`The ${this.teamName}cricket team has played ${this.matchPlayed} matches against ${team} in the year ${year}`)
     }
     let output = statistics.bind(user2,"Australia",2023)
     output()
     