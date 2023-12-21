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

     function mul(a, b) {
        return a * b;
      }
      
      let double = mul.bind(null,2,3,6,7);
      console.log(double())


      let user3 = {
        firstName: "John",
        say(time, phrase) {
          console.log(`[${time}] ${this.firstName}: ${phrase}!`);
        }
      };
      
      // Define a partial function with a fixed time
      function partial(fn, time) {
        return function(...args) {
          fn.apply(this, [time, ...args]);
        };
      }
      
      // Add a partial method with the current time
      user3.sayNow = partial(user3.say, `${new Date().getHours()}:${new Date().getMinutes()}`);
      
      // Call the partial method
      user3.sayNow("Hello");

      //task1
    //   function f() {
    //     console.log( this ); // null
    //   }
      
    //   let user4 = {
    //     g: f.bind()
    //   };
      
    //   user4.g();
    //task 2

      function f() {
        console.log(this.name);
      }
      
      f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
      
      f();
      //The exotic bound function object returned by f.bind(...) remembers the context (and arguments if provided) only at creation time.

//A function cannot be re-bound.
      
      
     // task 4
     function askPassword(ok, fail) {
        let password = prompt("Password?", '');
        if (password == "rockstar") ok();
        else fail();
      }
      
      let user5 = {
        name: 'John',
      
        loginOk() {
          console.log(`${this.name} logged in`);
        },
      
        loginFail() {
          console.log(`${this.name} failed to log in`);
        },
      
      };
      
      askPassword((user5.loginFail.bind(user5)),(user5.loginOk.bind(user5)));

      //task5
      function askPassword(ok, fail) {
        let password = prompt("Password?", '');
        if (password == "rockstar") ok();
        else fail();
      }
      
      let user6 = {
        name: 'John',
      
        login(result) {
          console.log( this.name + (result ? ' logged in' : ' failed to log in') );
        }
      };
      
      // Using bind to create functions with fixed 'this' values
      askPassword(user6.login.bind(user6, true), user6.login.bind(user6,false));

      let obj={
        name:"sanjay"
      }
      
      console.log(Object.getOwnPropertyDescriptor(obj,"name"))